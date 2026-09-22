# Advanced Fabrics documentation

The public wiki at [docs.advfab.org](https://docs.advfab.org) is written in Markdown and rendered with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). GitHub Actions builds and publishes the static result to GitHub Pages.

## Edit a page

Edit a file in [`docs/`](docs/), such as [`docs/index.md`](docs/index.md). Open a pull request. After the required checks pass and the PR merges, GitHub Actions rebuilds and publishes the site. Pages, links, and headings are ordinary Markdown. New pages need an entry in [`mkdocs.yml`](mkdocs.yml) under `nav`.

The site does not require editing generated HTML or running a wiki server.

## Preview locally

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open `http://127.0.0.1:8000/`. Run `mkdocs build --strict` before submitting changes. The `.venv/` and `site/` directories are ignored by Git.

## Publishing

The `Documentation` workflow validates every pull request and deploys `main` through GitHub Pages Actions. `docs/CNAME` preserves `docs.advfab.org`. The logo in `docs/assets/advfab-mark.png` is a local copy of the public [Advanced Fabrics organization avatar](https://github.com/advanced-fabrics); the shared `re8ch/brand-assets` repository did not contain an AdvFab asset when this site was set up.

AdvFab is an independent open source project and is not a CNCF project. Version 1.0 has not been declared generally available; see the [roadmap](https://github.com/advanced-fabrics/community/blob/main/ROADMAP.md).
