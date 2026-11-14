# Red Anvil Digital Works — website

The public studio site for https://redanvildigital.com.

Plain HTML and CSS. No build step, no frameworks, no cookies, no trackers.

## What's here
- `index.html` — the home page (Campaign Hall, other projects, studio, contact).
- `privacy.html`, `terms.html`, `404.html` — made by `tools/build-pages.mjs` so they share one header and footer. Edit the text in that file, then run `node tools/build-pages.mjs`.
- `styles.css` — all the styling.
- `assets/` — logos and Campaign Hall concept art (AI-generated concept art; say so wherever it's shown).

## Preview on this PC
    node tools/serve.mjs
Then open http://localhost:4931.

## Hosting and going live
Hosted on GitHub Pages. The domain is registered at Porkbun.
The previous site (built with Codex in Sept 2026, hosted on ChatGPT Sites) stays recoverable; see `docs/GO-LIVE.md`.
