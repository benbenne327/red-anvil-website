// Builds the Campaign Hall welcome page (/campaign-hall/) and features page
// (/campaign-hall/features/). Run from the Website folder:  node tools/build-hall.mjs
// Claims here must match what's LIVE in the app (see the Relay's fact sheet).
import { mkdirSync, writeFileSync } from "node:fs";
import { head, header, footer, hallPills } from "./site-chrome.mjs";

const SITE = "https://redanvildigital.com";
const TAGLINE = "The easy way to run and play tabletop RPGs at your table.";
const KICKSTARTER = "Kickstarter · early 2027";

const social = (url, title, description) => `
<meta property="og:type" content="website">
<meta property="og:site_name" content="Campaign Hall">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/campaign-hall-share.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="636">
<meta property="og:image:alt" content="Campaign Hall logo and tagline over four early concept-art characters">
<meta name="twitter:card" content="summary_large_image">`;

const shot = (file, alt, w = 640, h) =>
  `<figure class="shot"><img src="/assets/app/${file}.webp" width="${w}" height="${h}" loading="lazy" alt="${alt}"></figure>`;

const page = ({ path, current, title, description, body }) => {
  const url = SITE + path;
  return `${head({ title, description, canonical: url, extra: social(url, title, description) })}
<body class="hall-page">
${header(current)}
<main id="main">
${body.trim()}
</main>
${footer()}
</body>
</html>
`;
};

const followBlock = `
  <section class="section ch-follow" aria-labelledby="follow-title">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Follow along</p>
        <h2 id="follow-title">News, previews, and the Kickstarter launch.</h2>
      </div>
      ${hallPills()}
      <p class="ch-ask">Questions, press, or Kickstarter? <a href="mailto:info@redanvildigital.com?subject=Campaign%20Hall">info@redanvildigital.com</a></p>
    </div>
  </section>`;

const ART_LINE = "Early concept art. The final art will be made by professional artists, funded by our Kickstarter.";
const shotNote = (withArt) => `<p class="shot-note">Screenshots are from the app in testing.${withArt ? " " + ART_LINE : ""}</p>`;

// ---------- Welcome ----------
const welcome = page({
  path: "/campaign-hall/",
  current: "hall",
  title: "Campaign Hall — tabletop RPGs at your table",
  description: `${TAGLINE} Fights on everyone's phone, your real dice first, and AI that drafts the GM's prep. Players always free.`,
  body: `
  <section class="ch-hero">
    <div class="wrap">
      <div class="ch-hero-copy">
        <img class="hall-logo" src="/assets/campaign-hall-logo.svg" width="879" height="174" alt="Campaign Hall">
        <h1 class="ch-tagline">${TAGLINE}</h1>
        <p class="ch-lede">Campaign Hall is a web app for tabletop roleplaying games played in person. The GM runs the session from a phone, tablet, or laptop, and every player follows along on their own phone. Nothing to install.</p>
        <div class="chips">
          <span class="chip">Players always free</span>
          <span class="chip">${KICKSTARTER}</span>
          <span class="chip">Closed beta for game masters · coming soon</span>
        </div>
        <div class="actions">
          <a class="btn btn-gold" href="/campaign-hall/features/">See the features</a>
          <a class="btn btn-ghost" href="#follow-title">Follow along</a>
        </div>
      </div>
      <div class="ch-hero-shot">
        ${shot("fight-turn", "Campaign Hall on a phone: a player's turn in a fight, with Action, Bonus action, Move and Reaction chips, and a note that their Cure Wounds healed Bram for 10 HP.", 640, 776)}
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="why-title">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Why Campaign Hall</p>
        <h2 id="why-title">Your game happens around a table. Your app should too.</h2>
      </div>
      <ul class="ch-points">
        <li><strong>Fights run on everyone's phone.</strong><span>See whose turn it is and pick your action. The GM approves each attack. Conditions and death saves track themselves.</span></li>
        <li><strong>Your real dice come first.</strong><span>Type what your die shows and Campaign Hall does the math. Forgot your dice bag? "Roll for me" is right underneath.</span></li>
        <li><strong>AI does the GM's homework.</strong><span>It drafts your session plan from your notes, then the recap afterward. You approve or toss every draft. It never rolls your dice.</span></li>
      </ul>
      <p class="ch-more"><a class="btn btn-gold" href="/campaign-hall/features/">See every feature</a> <a class="btn btn-ghost" href="/campaign-hall/features/#coming">See what's coming</a></p>
    </div>
  </section>

  <section class="section" aria-labelledby="ks-title">
    <div class="wrap ch-split">
      <div>
        <p class="eyebrow">Kickstarter</p>
        <h2 id="ks-title">Free for players, always.</h2>
      </div>
      <div class="ch-body">
        <p>Campaign Hall comes to Kickstarter in early 2027. Backing it pays for what a small app needs before it opens to everyone.</p>
        <p>Before then, a closed beta opens for game masters. Campaign Hall launches in the US first. Other countries follow after legal checks.</p>
      </div>
    </div>
  </section>
${followBlock}
  <div class="wrap">${shotNote(true)}</div>`,
});

// ---------- Features ----------
const feature = (id, eyebrow, title, text, img) => `
  <section class="section ch-feature" id="${id}" aria-labelledby="${id}-title">
    <div class="wrap">
      <div class="ch-feature-copy">
        <p class="eyebrow">${eyebrow}</p>
        <h2 id="${id}-title">${title}</h2>
        ${text.trim()}
      </div>
      <div class="ch-feature-shots">${img}</div>
    </div>
  </section>`;

const features = page({
  path: "/campaign-hall/features/",
  current: "features",
  title: "Campaign Hall features — fights, dice, characters, GM tools",
  description: "What Campaign Hall does today: fights on everyone's phone, your real dice first, a guided character builder, one invite link, GM tools, and AI that drafts the GM's prep.",
  body: `
  <section class="ch-hero ch-hero-slim">
    <div class="wrap">
      <div class="ch-hero-copy">
        <p class="eyebrow">Campaign Hall features</p>
        <h1 class="ch-tagline">${TAGLINE}</h1>
        <p class="ch-lede">Here's what Campaign Hall does today. The GM uses a phone, tablet, or laptop, and players use their own phones. No downloads.</p>
        <nav class="ch-jump" aria-label="Features on this page">
          <a href="#fights">Fights</a><a href="#dice">Dice</a><a href="#characters">Characters</a><a href="#invite">Invite</a><a href="#gm-tools">GM tools</a><a href="#ai">AI helpers</a><a href="#coming">Coming</a>
        </nav>
      </div>
    </div>
  </section>
${feature("fights", "Fights", "Fights run on everyone's phone.", `
        <p>Every player sees the turn order and knows when it's their move. On your turn, pick your action and send it. The GM approves each attack, and everyone sees what happened.</p>
        <ul class="ch-list">
          <li>Action, bonus action, move, and reaction chips show what you've used.</li>
          <li>Conditions and death saves track themselves.</li>
          <li>Players see foes as Unhurt, Hurt, Bloodied, or Down, never their exact HP.</li>
        </ul>`,
  shot("fight-turn", "A player's turn on a phone: Action, Bonus action, Move and Reaction chips, and a Choose action button.", 640, 776) +
  shot("turn-order", "The turn order on a player's phone: two goblins marked Unhurt, then Bram, Mira and Lyra with their HP bars.", 640, 690))}
${feature("dice", "Dice", "Your real dice come first.", `
        <p>Real dice stay on the table. When it's time to roll, type what your die shows. Campaign Hall adds your modifier, shows the GM the total, and doubles the dice on a crit.</p>
        <p>Forgot your dice bag? <strong>"Roll for me"</strong> is right underneath. The app rolls once and records it.</p>`,
  shot("dice-first", "Roll Initiative on a phone: 'Roll a d20, what did it show?' with a number box, an Enter the fight button, and Roll for me underneath.", 640, 756))}
${feature("characters", "Characters", "A guided character builder.", `
        <p>New players don't need the rulebook open. The builder walks each player through their hero step by step on their own phone, and Campaign Hall does the math.</p>
        <ul class="ch-list">
          <li>Class, background, species, ability scores, skills, and gear, one step at a time.</li>
          <li>Each choice shows what it does before you pick it.</li>
          <li>Ready today for one rules set. More game systems are on the way.</li>
        </ul>`,
  shot("builder", "The character builder on a phone: a level 3 Hill Dwarf Fighter choosing a fighting style, with Dueling selected.", 640, 1182))}
${feature("invite", "Invite", "One link brings the party in.", `
        <p>The GM shares one invite link. Players tap it, sign in, and the invite code is already filled in. One more tap and they're in the campaign.</p>
        <p>Joining doesn't share any of your characters. You choose which one to bring.</p>`,
  shot("invite", "Joining a campaign on a phone: 'Answer the call' with the invite code already filled in and a Join campaign button.", 640, 632))}
${feature("gm-tools", "GM tools", "Run the fight from your phone.", `
        <p>The GM sees everything in one place and decides every call.</p>
        <ul class="ch-list">
          <li>Approve each attack before it lands.</li>
          <li>Roll in the open, or in secret so players don't see it in the log.</li>
          <li>Ask a player for a saving throw, set conditions, and change HP.</li>
          <li>Hidden foes, exact enemy HP, and your notes are never sent to players.</li>
        </ul>`,
  shot("dm-tools", "The GM's view of a foe on a phone: target picker, a secret roll checkbox, Ask Lyra for a save, and a 3d4+3 damage roll of 12.", 640, 684))}
${feature("ai", "AI helpers · adults 18+", "AI does the GM's homework.", `
        <p>GMs have two jobs: run the game, and do the homework. Campaign Hall's AI helpers take the homework.</p>
        <ul class="ch-list">
          <li><strong>Planner</strong> drafts your session plan from your notes.</li>
          <li><strong>Chronicle</strong> drafts the recap after you play.</li>
          <li>You approve or toss every draft. AI never rolls your dice and never makes the rules call.</li>
        </ul>`,
  `<div class="ch-ai-card" role="img" aria-label="How the AI helpers work: your notes go to the Planner, which drafts a session plan; after the session the Chronicle drafts a recap; the GM approves or tosses each draft.">
          <p class="ch-ai-step"><span>1</span>Your notes</p>
          <p class="ch-ai-step"><span>2</span>Planner drafts the session plan</p>
          <p class="ch-ai-step"><span>3</span>You play</p>
          <p class="ch-ai-step"><span>4</span>Chronicle drafts the recap</p>
          <p class="ch-ai-step ch-ai-you"><span>✓</span>You approve or toss every draft</p>
        </div>`)}

  <section class="section ch-coming" id="coming" aria-labelledby="coming-title">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Where we're headed</p>
        <h2 id="coming-title">Coming to Campaign Hall.</h2>
        <p>Everything above works today. These are on the way. None of them are ready yet, and we won't put dates on them until we can keep them.</p>
      </div>
      <ul class="ch-coming-grid">
        <li><span class="soon">Coming</span><strong>Several game systems.</strong><span>Guided builders and full play for several game systems, not just one.</span></li>
        <li><span class="soon">Coming</span><strong>Plan my turn.</strong><span>Line up your next move while everyone else takes theirs, so your turn is quick.</span></li>
        <li><span class="soon">Coming</span><strong>Catch up on a missed session.</strong><span>Missed game night? See what happened while you were away before you sit back down.</span></li>
        <li><span class="soon">Coming</span><strong>The Ember Road.</strong><span>A ready-to-run practice adventure, with battle maps, so new GMs and players can learn the ropes together.</span></li>
        <li><span class="soon">Coming</span><strong>Art by professional artists.</strong><span>Early concept art. The final art will be made by professional artists, funded by our Kickstarter.</span></li>
        <li><span class="soon">Coming</span><strong>Beyond the US.</strong><span>Campaign Hall launches in the US first. Other countries follow after legal checks.</span></li>
        <li class="ch-stretch"><span class="soon">If funded</span><strong>Kickstarter stretch goals.</strong><span>If the Kickstarter reaches its stretch goals: a Family Safety Review of kids' seats, so kids' seats get a careful safety and privacy check; <em>The Bard comes to life</em> (animated, by a professional artist); more art by professional artists; and translation.</span></li>
      </ul>
    </div>
  </section>

  <section class="section" aria-labelledby="free-title">
    <div class="wrap ch-split">
      <div>
        <p class="eyebrow">Players always free</p>
        <h2 id="free-title">Still in the forge.</h2>
      </div>
      <div class="ch-body">
        <p>Campaign Hall is still being built, so features may change. A closed beta for game masters opens soon, and the Kickstarter comes in early 2027. Campaign Hall launches in the US first, and other countries follow after legal checks.</p>
        <p><a class="btn btn-gold" href="/campaign-hall/">Back to Campaign Hall</a></p>
      </div>
    </div>
  </section>
${followBlock}
  <div class="wrap">${shotNote(false)}</div>`,
});

mkdirSync("campaign-hall/features", { recursive: true });
writeFileSync("campaign-hall/index.html", welcome);
writeFileSync("campaign-hall/features/index.html", features);
console.log("Built campaign-hall/index.html, campaign-hall/features/index.html");
