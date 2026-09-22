# Advanced Fabrics Documentation

Public, dependency-free documentation for [docs.advfab.org](https://docs.advfab.org). Normative protocol and API material lives in [`advanced-fabrics/spec`](https://github.com/advanced-fabrics/spec) and [`advanced-fabrics/api`](https://github.com/advanced-fabrics/api).

## Publishing

GitHub Pages publishes `main` from the repository root. The `CNAME` file binds `docs.advfab.org`; Cloudflare proxies the domain. No build command or package dependencies are required.

Each documentation page is a directory with an `index.html` file. Keep navigation and the page index in `site.js` in sync when adding pages. All pages use `styles.css` and include a canonical URL, descriptive title, main landmark, skip link, and explicit section headings.

## Local preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000/`.

## Project status

AdvFab is an independent open source project and is not a CNCF project. The 1.0 release has not been declared generally available. Check the [roadmap](https://github.com/advanced-fabrics/community/blob/main/ROADMAP.md) and published release artifacts before making compatibility or conformance claims.
