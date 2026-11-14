# Go-live and rollback notes

## The old site (keep recoverable)
- Source and git history: `C:\Users\benbe\.codex\visualizations\2026\09\02\01a06454-b690-7182-846a-6ab7e9b4e77f\red-anvil-site`
- Still served at: https://red-anvil-digital-works.russet-rat-2671.chatgpt.site/
- Porkbun DNS records that point the domain at it (as of 14 Nov 2026):
  - A  @  162.159.143.30  (TTL 600)
  - A  @  172.66.3.26     (TTL 600)
  - TXT _openai-site-verification, TXT _cf-custom-hostname (leave in place)
  - www and * : CNAME uixie.porkbun.com (Porkbun's free Link In Bio)

## Going live on GitHub Pages (only on the owner's yes)
1. Push this folder to a public GitHub repo and turn on Pages (branch `main`, root).
2. Add a `CNAME` file containing `redanvildigital.com`.
3. In Porkbun DNS: replace the two A records above with GitHub's four
   (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and add
   `www` CNAME `<account>.github.io`. Do NOT touch MX, SPF, DKIM or DMARC (email).
4. In the repo's Pages settings, wait for the certificate, then tick "Enforce HTTPS".

## Rollback (about a minute)
Put the two old A records back and remove GitHub's four. The old site returns as DNS updates (TTL 600 = up to 10 minutes).
