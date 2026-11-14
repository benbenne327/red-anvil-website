# Red Anvil Digital Works — website

The public studio site for https://redanvildigital.com.

Plain HTML and CSS. No build step, no frameworks, no cookies, no trackers.

## What's here
- `index.html` — the home page (Campaign Hall, other projects, studio, contact).
- `privacy.html`, `terms.html`, `404.html` — made by `tools/build-pages.mjs` so they share one header and footer. Edit the text in that file, then run `node tools/build-pages.mjs`.
- `styles.css` — all the styling.
- `assets/` — logos and Campaign Hall concept art (AI-generated concept art; say so wherever it's shown).
- `preview-shots/` — screenshots shown to the owner for approval.

## Preview on this PC
    node tools/serve.mjs
Then open http://localhost:4931.

## Wording rules (from the owner)
- No personal name anywhere. The studio is "Red Anvil Digital Works"; add "LLC" only after Sunbiz shows it Active.
- Contacts: support@ (app help), info@ (general, press, Kickstarter), legal@ (privacy and terms pages only).
- Campaign Hall: "several game systems" (no number, no publisher or game names); AI helpers are for adults 18+; art is AI concept art to be redone by human artists; US first; Kickstarter "early 2027".
- "Meet the Bard, your guide at the table." Never "cartoon"; "animated" only for the Kickstarter stretch goal.
- The kids' seats review is the "Family Safety Review".
- American English.

## Hosting and going live
Planned host: GitHub Pages (free). Going live needs the owner's yes.
The previous site (built with Codex in Sept 2026, hosted on ChatGPT Sites) stays recoverable; see `docs/GO-LIVE.md`.
