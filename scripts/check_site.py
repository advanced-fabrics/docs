"""Validate the dependency-free documentation site before publishing."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []
        self.canonicals = []
        self.h1 = 0
        self.main = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag == "a":
            self.links.append(attrs.get("href", ""))
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        if tag == "h1":
            self.h1 += 1
        if tag == "main":
            self.main += 1


def parse(path):
    page = Page()
    page.feed(path.read_text())
    return page


pages = sorted(ROOT.rglob("index.html"))
errors = []
for path in pages:
    page = parse(path)
    if (page.h1, page.main) != (1, 1):
        errors.append(f"{path}: expected one h1 and one main")
    route = "/" if path == ROOT / "index.html" else f"/{path.parent.relative_to(ROOT)}/"
    if page.canonicals != [f"https://docs.advfab.org{route}"]:
        errors.append(f"{path}: invalid canonical URL")
    for href in page.links:
        url = urlsplit(href)
        if url.scheme or url.netloc:
            continue
        if not href.startswith(("/", "#")):
            errors.append(f"{path}: relative link {href}")
            continue
        target = ROOT / url.path.lstrip("/") if url.path else path
        if target.is_dir():
            target /= "index.html"
        if not target.exists():
            errors.append(f"{path}: missing {href}")
        elif url.fragment and url.fragment not in parse(target).ids:
            errors.append(f"{path}: missing anchor {href}")

if errors:
    raise SystemExit("\n".join(errors))
print(f"Validated {len(pages)} pages")
