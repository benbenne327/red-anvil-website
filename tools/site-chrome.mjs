// Shared header, footer and social links for the generated pages.
// index.html is hand-written; keep its header/footer in step with this file.

export const HALL_SOCIAL = [
  ["YouTube", "https://www.youtube.com/@CampaignHall"],
  ["Bluesky", "https://bsky.app/profile/campaignhall.bsky.social"],
  ["Instagram", "https://www.instagram.com/campaignhallapp/"],
  ["Threads", "https://www.threads.com/@campaignhallapp"],
  ["TikTok", "https://www.tiktok.com/@campaign.hall"],
  ["X", "https://x.com/campaignhall"],
  ["Facebook", "https://www.facebook.com/campaignhallapp"],
];
export const STUDIO_SOCIAL = [
  ["Bluesky", "https://bsky.app/profile/redanvildigital.bsky.social"],
];

const link = (owner, cls) => ([name, href]) =>
  `<a${cls ? ` class="${cls}"` : ""} href="${href}" rel="noopener" target="_blank" aria-label="${owner} on ${name}">${name}</a>`;

export const hallPills = () =>
  `<div class="pills">${HALL_SOCIAL.map(link("Campaign Hall", "pill")).join("")}</div>`;

export const head = ({ title, description, canonical, extra = "" }) => `<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
${canonical ? `<link rel="canonical" href="${canonical}">\n` : ""}${extra ? extra.trim() + "\n" : ""}<meta name="theme-color" content="#101213">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="stylesheet" href="/styles.css">
</head>`;

export const header = (current = "") => `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="/" aria-label="Red Anvil Digital Works, home">
      <img src="/assets/anvil-mark.png" width="40" height="40" alt="">
      <span class="brand-name">RED ANVIL<span>DIGITAL WORKS</span></span>
    </a>
    <nav class="nav" aria-label="Main">
      <a href="/campaign-hall/"${current === "hall" ? ' aria-current="page"' : ""}>Campaign Hall</a>
      <a href="/campaign-hall/features/"${current === "features" ? ' aria-current="page"' : ""}>Features</a>
      <a href="/#studio">Studio</a>
      <a class="nav-cta" href="/#contact">Contact</a>
    </nav>
  </div>
</header>`;

export const footer = () => `<footer class="site-footer">
  <div class="wrap">
    <div class="foot-brand"><img src="/assets/anvil-mark.png" width="28" height="28" alt="">Red Anvil Digital Works</div>
    <nav aria-label="Footer">
      <a href="mailto:support@redanvildigital.com">support@redanvildigital.com</a>
      <a href="mailto:info@redanvildigital.com">info@redanvildigital.com</a>
      <a href="/privacy.html">Privacy</a>
      <a href="/terms.html">Terms</a>
    </nav>
    <div class="foot-social">
      <p><span>Campaign Hall</span> ${HALL_SOCIAL.map(link("Campaign Hall")).join(" ")}</p>
      <p><span>Studio</span> ${STUDIO_SOCIAL.map(link("Red Anvil Digital Works")).join(" ")}</p>
    </div>
    <p>© 2026 Red Anvil Digital Works. All rights reserved.</p>
  </div>
</footer>`;
