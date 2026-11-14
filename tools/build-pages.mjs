// Builds privacy.html, terms.html and 404.html so they share one header and footer.
// Run from the Website folder:  node tools/build-pages.mjs
import { writeFileSync } from "node:fs";

const page = (title, description, extraHead, body) => `<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} — Red Anvil Digital Works</title>
<meta name="description" content="${description}">
${extraHead}
<meta name="theme-color" content="#101213">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="/" aria-label="Red Anvil Digital Works, home">
      <img src="/assets/anvil-mark.png" width="40" height="40" alt="">
      <span class="brand-name">RED ANVIL<span>DIGITAL WORKS</span></span>
    </a>
    <nav class="nav" aria-label="Main">
      <a href="/#campaign-hall">Campaign Hall</a>
      <a href="/#projects">Projects</a>
      <a href="/#studio">Studio</a>
      <a class="nav-cta" href="/#contact">Contact</a>
    </nav>
  </div>
</header>
<main id="main" class="legal">
  <div class="wrap">
${body.trim()}
  </div>
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-brand"><img src="/assets/anvil-mark.png" width="28" height="28" alt="">Red Anvil Digital Works</div>
    <nav aria-label="Footer">
      <a href="mailto:support@redanvildigital.com">support@redanvildigital.com</a>
      <a href="mailto:info@redanvildigital.com">info@redanvildigital.com</a>
      <a href="/privacy.html">Privacy</a>
      <a href="/terms.html">Terms</a>
    </nav>
    <p>© 2026 Red Anvil Digital Works. All rights reserved.</p>
  </div>
</footer>
</body>
</html>
`;

const UPDATED = "November 14, 2026";

writeFileSync("privacy.html", page(
  "Privacy",
  "How the Red Anvil Digital Works website handles your information.",
  '<link rel="canonical" href="https://redanvildigital.com/privacy.html">',
  `
    <p class="eyebrow">Privacy</p>
    <h1>Privacy Policy</h1>
    <p class="updated">Last updated: ${UPDATED}</p>

    <p class="summary"><strong>The short version:</strong> this website doesn't use cookies, ads, or analytics, and it doesn't ask you for any information. We only learn something about you if you email us.</p>

    <h2>Who we are</h2>
    <p>This website, redanvildigital.com, is run by Red Anvil Digital Works, an independent software studio based in Florida, USA ("we," "us").</p>

    <h2>What this policy covers</h2>
    <p>This policy covers this website only. Our apps have their own privacy policies. Campaign Hall's privacy policy is inside the Campaign Hall app, and it explains what that app collects and why.</p>

    <h2>What this website collects</h2>
    <ul>
      <li><strong>Nothing from you directly.</strong> There are no accounts, forms, cookies, ads, or tracking tools on this website.</li>
      <li><strong>Standard server logs.</strong> Our hosting provider, GitHub, receives the technical details that every website visit sends, such as your IP address, your browser type, and the page you asked for. GitHub uses these to deliver the site and keep it secure. See the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub Privacy Statement</a>.</li>
      <li><strong>Email you send us.</strong> If you email us, we receive your email address and whatever you write. We use it only to answer you and to keep a record of the conversation.</li>
    </ul>

    <h2>What we don't do</h2>
    <ul>
      <li>We don't sell or share your personal information.</li>
      <li>We don't show ads or build advertising profiles.</li>
      <li>We don't add you to a mailing list because you emailed us.</li>
    </ul>

    <h2>Children</h2>
    <p>This website is for a general audience and doesn't knowingly collect personal information from children under 13.</p>

    <h2>Links to other sites</h2>
    <p>This website may link to other sites, such as Kickstarter. Those sites have their own privacy policies.</p>

    <h2>Your choices</h2>
    <p>You can ask us what information we have about you from your emails, or ask us to delete it. Write to <a href="mailto:legal@redanvildigital.com">legal@redanvildigital.com</a>.</p>

    <h2>Changes to this policy</h2>
    <p>If this policy changes, we'll post the new version here and update the date at the top.</p>

    <h2>Contact</h2>
    <p>Privacy and legal requests: <a href="mailto:legal@redanvildigital.com">legal@redanvildigital.com</a></p>
`));

writeFileSync("terms.html", page(
  "Terms",
  "Terms of use for the Red Anvil Digital Works website.",
  '<link rel="canonical" href="https://redanvildigital.com/terms.html">',
  `
    <p class="eyebrow">Terms</p>
    <h1>Terms of Use</h1>
    <p class="updated">Last updated: ${UPDATED}</p>

    <p class="summary"><strong>The short version:</strong> this website tells you about our studio and our projects. Feel free to read and share it. Please don't copy our work or misuse the site.</p>

    <h2>About these terms</h2>
    <p>These terms cover your use of this website, redanvildigital.com, which is run by Red Anvil Digital Works ("we," "us"). By using the website, you agree to them. Our apps have their own terms. Campaign Hall's terms are inside the Campaign Hall app.</p>

    <h2>Our content</h2>
    <p>The text, logos, artwork, and design on this website belong to Red Anvil Digital Works or are used with permission. You may view the website and share links to it. Please don't copy, change, or reuse our content for commercial purposes without asking first.</p>
    <p>"Red Anvil Digital Works," "Campaign Hall," and their logos are our brand names. Other names mentioned on this website belong to their owners.</p>

    <h2>Projects in development</h2>
    <p>Much of what's shown here is still being built. Descriptions, features, dates, and artwork may change, and a project may never be released. Nothing on this website is a promise to deliver a product or feature.</p>

    <h2>Using the website</h2>
    <p>Please don't try to break, overload, or gain unauthorized access to the website, and don't use it for anything unlawful.</p>

    <h2>No warranty</h2>
    <p>This website is provided "as is." We work to keep it accurate and available, but we don't guarantee that it's free of mistakes or always online.</p>

    <h2>Limit of liability</h2>
    <p>To the extent the law allows, Red Anvil Digital Works isn't liable for any loss or damage that comes from using this website or relying on what it says.</p>

    <h2>Links to other sites</h2>
    <p>This website may link to sites we don't control, such as Kickstarter. We aren't responsible for their content or practices.</p>

    <h2>Governing law</h2>
    <p>These terms are governed by the laws of the State of Florida, USA.</p>

    <h2>Changes to these terms</h2>
    <p>If these terms change, we'll post the new version here and update the date at the top.</p>

    <h2>Contact</h2>
    <p>Legal questions: <a href="mailto:legal@redanvildigital.com">legal@redanvildigital.com</a></p>
`));

writeFileSync("404.html", page(
  "Page not found",
  "That page doesn't exist.",
  '<meta name="robots" content="noindex">',
  `
    <p class="eyebrow">Page not found</p>
    <h1>Nothing on the anvil here.</h1>
    <p class="updated">That page doesn't exist, or it has moved.</p>
    <p><a class="btn btn-primary" href="/" style="text-decoration:none;color:#160706">Back to the home page</a></p>
`));

console.log("Built privacy.html, terms.html, 404.html");
