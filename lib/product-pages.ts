export type FaqItem = { q: string; a: string };

export const AD_STACK = {
  meta: {
    title: "Stop paid traffic leaking on the storefront | Helium Ad Stack",
    description:
      "Helium Ad Stack connects paid intent to merchandising so Meta and Google land on the right products.",
    canonical: "/ad-stack",
  },
  hero: {
    eyebrow: "Helium Smart Ad Stack",
    h1a: "Your ROAS is bad because",
    h1b: "Your ads need a brain.",
    body:
      "Paid clicks leak value between the ad and the storefront. Helium Ad Stack connects paid intent to merchandising so Meta and Google traffic lands on the right products, every time.",
    cta: "Get Started (₹2000/month)",
  },
  leakPoints: {
    heading: "It solves the 3 leak points directly:",
    points: [
      {
        title: "Ad-to-landing mismatch",
        body: "Visitors from each campaign land on collections ranked for the intent that brought them there, not a generic storefront.",
      },
      {
        title: "Catalog feed drift",
        body: "Your winners stay front and center in Meta and Google catalog ads as stock, demand, and margins move.",
      },
      {
        title: "Blind retargeting",
        body: "Retargeting runs on session intelligence instead of stale audience lists, so spend follows shoppers who are actually ready to buy.",
      },
    ],
  },
  outcomes: {
    heading: "Outcomes that don't need selling",
    stats: [
      { value: "18%", label: "Higher order values", caption: "Across brands running Helium on their storefront" },
      { value: "30%", label: "More converted sessions", caption: "Visitors who find the right product faster" },
      { value: "20%", label: "Better retention", caption: "Loyal customers retained with session intelligence" },
    ],
  },
  intelligence: {
    heading: "How our intelligence layer works",
    steps: [
      {
        title: "We understand every product better",
        body: "Vision models read every attribute of your catalog — how it looks, what it is used for, and what makes it unique.",
      },
      {
        title: "We understand every visitor better",
        body: "Demographics, preferences, and 20 unique session variables are captured the moment a shopper arrives from an ad.",
      },
      {
        title: "We understand every action and its meaning better",
        body: "Every click and scroll becomes a signal you can act on — from ranking decisions to retargeting windows.",
      },
    ],
  },
  faqs: [
    {
      q: "What does Helium Ad Stack connect to?",
      a: "It connects your Meta and Google catalog ads to your storefront merchandising, so the products you advertise and the collections visitors land on always match current demand and intent.",
    },
    {
      q: "Do I need to change my ad account setup?",
      a: "No. Helium works with your existing Meta and Google ad accounts and catalogs. There is no new pixel, no new tracking domain, and no campaign rebuild.",
    },
    {
      q: "How is this different from catalog management tools?",
      a: "Catalog tools optimize feeds. Helium Ad Stack optimizes the full path: the feed, the landing collections, and the retargeting decisions are all driven by the same session intelligence.",
    },
    {
      q: "How long does setup take?",
      a: "Add the Helium script to your website in about 2 minutes. Personalization of each session begins within 15 days as the AI learns your catalog and traffic.",
    },
  ] as FaqItem[],
} as const;

export const MERCHANDISING = {
  meta: {
    title: "AI merchandising and storefront personalization | Helium",
    description:
      "Helium merchandising ranks and personalizes collections from visitor intent. Connect the storefronts you already run — not a Shopify-only app, not a product customizer.",
    canonical: "/merchandising",
  },
  hero: {
    eyebrow: "AI Merchandising",
    h1: "Curate unique products for each visitor with AI",
    body:
      "Helium merchandising ranks and personalizes collections from visitor intent. Connect the storefronts you already run — not a Shopify-only app, not a product customizer.",
    cta: "Contact Us",
  },
  attention: {
    heading:
      "Most shoppers give your brand less than 8 seconds. 95% drop off without buying because they don't see what they're looking for.",
    body:
      "Helium does that with smart product discovery that surfaces the right items instantly, before attention runs out and revenue walks away.",
  },
  features: {
    heading: "Chat to curate products",
    items: [
      {
        title: "Product attributes generated with AI",
        body: "Vision models generate rich attributes for every SKU, so ranking decisions use what products actually are — not just tags.",
      },
      {
        title: "Brand specific personas and demographics",
        body: "Personas built from your own traffic, mapped to the products each segment actually converts on.",
      },
      {
        title: "Business metrics inferred automatically",
        body: "Margin, velocity, and conversion signals inferred from your orders, so merchandising decisions follow business value.",
      },
      {
        title: "Feed Meta, Google with high converting product sets",
        body: "Your best-converting product sets flow straight into your ad catalogs, keeping paid and organic merchandising aligned.",
      },
      {
        title: "Understand Marketing channel attribution",
        body: "See which channels surface which products, and how each session's origin changes what it should see.",
      },
      {
        title: "Chat to curate products for each persona",
        body: "Describe the collection you want in plain language and Helium curates it for the persona you target.",
      },
    ],
  },
} as const;

export const CATALOG = {
  meta: {
    title: "Catalog and collection merchandising for ads | Helium",
    description:
      "Helium catalog optimization aligns collection ranking with catalog ads so paid landing matches on-site merchandising.",
    canonical: "/catalog-optimization",
  },
  hero: {
    eyebrow: "Catalog Optimization",
    h1: "Catalog Ads That Adapt in Real Time",
    body:
      "Your Catalog Moves Fast - Your Ads Don't. Helium aligns collection ranking with catalog ads so paid landing matches on-site merchandising.",
    cta: "Start Optimizing",
  },
  features: [
    {
      title: "AI-Powered Catalog Overlays",
      body: "Reorder and re-prioritize catalog items per audience segment without touching the source feed.",
    },
    {
      title: "Catalog Manager",
      body: "One view of every product set across Meta and Google, with the highest-value SKUs always in rotation.",
    },
    {
      title: "Intentful Retargeting",
      body: "Retargeting catalogs built from live session intent, not last-click audiences that decay in days.",
    },
    {
      title: "AI Automated Spend Control",
      body: "Spend automatically shifts toward products that are converting now — and away from those that aren't.",
    },
  ],
  howItWorks: {
    heading: "How it works",
    steps: [
      "Connect your Meta and Google catalogs in minutes",
      "Helium AI ranks products by live session and business signals",
      "Overlays keep ads and landing collections in sync",
    ],
  },
  results: {
    heading: "Results",
    stats: [
      { value: "18%", label: "Higher order values" },
      { value: "30%", label: "More converted sessions" },
      { value: "20%", label: "Better retention" },
    ],
  },
} as const;

export const PULSE = {
  meta: {
    title: "Session and funnel diagnosis | Helium Pulse",
    description:
      "Helium Pulse diagnoses session quality and funnel drops. It does not replace native store analytics.",
    canonical: "/pulse",
  },
  hero: {
    kicker: "Google Analytics tells you the what.",
    kickerAccent: "Helium Analytics tells you why and what to do next.",
    h1: "Pulse",
    tagline: "Tells you why it's happening, and what to do next.",
  },
  insights: {
    heading: "Comprehensive Insights",
    stats: [
      { value: "Every pixel", label: "Each pixel on your website tracked" },
      { value: "+27%", label: "Lift in Funnel Fix Rates" },
    ],
    metaphor: {
      body: "If GA4 is your camera, Clarity is your security footage, Pulse is your detective",
    },
  },
  features: {
    heading: "What Helium Analytics catches. Before revenue drops.",
    items: [
      {
        title: "Anomaly Chat",
        body: "Ask why a metric moved and get the session-level answer, not a chart to decode.",
      },
      {
        title: "Funnel Drop Reason Finder",
        body: "Pinpoint the step, segment, and reason behind every funnel drop.",
      },
      {
        title: "Conversion Likelihood Score",
        body: "Every session scored live, so you know which visitors to invest in.",
      },
      {
        title: "Collaborative Fix Logs",
        body: "Log fixes, assign owners, and track uplift — in the same place you found the problem.",
      },
      {
        title: "Fix Uplift Simulator",
        body: "Estimate the revenue impact of a fix before engineering spends a sprint on it.",
      },
      {
        title: "Attribution AI",
        body: "Understand what really drives sales — without the heavy attribution bill.",
      },
    ],
  },
  cro: {
    heading: "Unlock hidden anomalies to power your next CRO action",
  },
  faqs: [
    {
      q: "Does Helium Pulse replace Google Analytics?",
      a: "No. Pulse does not replace native store analytics or GA4 — it sits on top of them and tells you why metrics move and what to do next.",
    },
    {
      q: "What is tracked on my website?",
      a: "Each pixel and interaction on your website is tracked and turned into session intelligence: funnel steps, drop reasons, and conversion likelihood.",
    },
    {
      q: "How does Pulse help with CRO?",
      a: "Pulse finds hidden anomalies before revenue drops, explains the reason for each funnel drop, and simulates the uplift of fixing it — so CRO actions start from evidence.",
    },
    {
      q: "How long until I see insights?",
      a: "Add the Helium script in about 2 minutes. Session intelligence starts flowing immediately and personalization deepens over the first 15 days.",
    },
  ] as FaqItem[],
} as const;