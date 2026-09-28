export const PULSE = {
  meta: {
    title: "Session and funnel diagnosis | Helium Pulse",
    description:
      "Helium Pulse diagnoses session quality and funnel drops. It does not replace native store analytics.",
    canonical: "/pulse",
  },
  hero: {
    chips: ["Anomolies", "Attribution", "Retargeting"],
    // Live /pulse hero video (framerusercontent Gs5x99Nvu6RVV51w57c0XWL74.mp4,
    // fetched to public/content). Measured: 1112x542 desktop, 349x237 mobile,
    // border-radius 10px, object-fit cover, first element in section#hero.
    video: "/content/pulse-hero-loop.mp4",
    // "Grid 1" card (#hero > div.framer-1vy1vb5, ref pulse1.md.txt):
    // headline + GA4 shot + giant Pulse h1 + word-reveal subline + 3 tiles.
    grid: {
      headline: {
        line1: "Google Analytics tells you the what.",
        accent: "Helium Analytics",
        rest: " tells you why and what to do next.",
      },
      subline: "Tells you why it's happening, and what to do next.",
      images: {
        dashboard: "/content/pulse-hero-dashboard.png",
        attribution: "/content/pulse-hero-img-1.png",
        conversion: "/content/pulse-hero-img-2.png",
        bots: "/content/pulse-hero-img-3.png",
      },
    },
  },
  // Stacked product screenshots under the hero grid (live container > #heading,
  // ref pulse2.md.txt). Back-to-front: Image-3 retargeting, Image-2 attribution,
  // Image-1 metrics dashboard (front, nn3nb1cZk4hQwzezOdLpyzpnc.png).
  deck: {
    shots: [
      {
        src: "/content/pulse-shot-3.png",
        alt: "Retargeting engine filtering low-intent traffic and suppressing bots",
      },
      {
        src: "/content/pulse-shot-2.png",
        alt: "Attribution journey mapped across Facebook, Google, Meta and Criteo",
      },
      {
        src: "/content/pulse-shot-1.png",
        alt: "Pulse live metrics dashboard diagnosing revenue and conversion drops",
      },
    ],
  },
  trustedBy: "Trusted by leading brands worldwide",
  // Live trusted-by badge row under the hero deck (12 circular 64px logos,
  // 2px white border + soft shadow, ticker). Fetched verbatim from
  // framerusercontent (ref live /pulse HTML).
  brandLogos: [
    "/brands/brand-1.png",
    "/brands/brand-2.jpeg",
    "/brands/brand-3.jpg",
    "/brands/brand-4.jpeg",
    "/brands/brand-5.jpeg",
    "/brands/brand-6.png",
    "/brands/brand-7.jpg",
    "/brands/brand-8.jpeg",
    "/brands/brand-9.jpg",
    "/brands/brand-10.jpeg",
    "/brands/brand-11.jpeg",
    "/brands/brand-12.png",
  ],
  // Live #features feature cards (framer-1m7pds4, ref pulse live HTML):
  // two light cards (bg #F6FBFF, radius 16, padding 32, layered shadow),
  // each with a rounded image (aspect 1.69444) on top + 20px/500 heading
  // + 80%-opacity body. Images fetched from framerusercontent to /content.
  insights: {
    heading: "Live Oversight",
    subheading: "Comprehensive Insights",
    cards: [
      {
        image: "/content/pulse-insights-widget.png",
        imageAlt: "widget",
        heading: "Each pixel on your website tracked",
        body: "Pulse doesn’t just show you what dropped — it tells you why, in real time. No setups. No digging. Just answers.",
      },
      {
        image: "/content/pulse-insights-cvr.png",
        imageAlt: "graphic",
        heading: "+27% Lift in Funnel Fix Rates",
        body: "Most tools give you noise. Pulse gives you ranked fixes by business impact — and the confidence to act on them.",
      },
    ],
  },
  // Live /pulse "more features" double ticker (ref pulse3.md.txt):
  // two rows scrolling in opposite directions. Row order is verbatim
  // from the live ticker <li> sequence — the bottom row repeats
  // "Data-Driven Decisions" twice per cycle on the live site.
  marquee: {
    top: [
      "Campaign & Channel Attribution AI",
      "Seamless Integrations",
      "Real-Time Reports",
      "Funnel Drop Reason Finder",
    ],
    bottom: [
      "Conversion Likelihood Score",
      "Campaign & Channel Attribution AI",
      "Data-Driven Decisions",
      "Anomaly Chat",
      "Data-Driven Decisions",
    ],
  },
  metaphor: {
    a: "If GA4 is your camera and Clarity is your security footage,",
    b: "Pulse is your detective,",
    c: "analyzing the scene, finding what went wrong, and telling you how to fix it",
  },
  // Live #deployment headline (ref pulse4.md.txt): three staggered lines,
  // last one 60px semibold violet.
  detective: {
    line1: "If GA4 is your camera,",
    line2: "Clarity is your security footage,",
    accent: "Pulse is your detective",
  },
  comparison: {
    ga4: {
      name: "Google Analytics 4",
      points: [
        "Static reports with 24h+ delays",
        "Sampled data (10M event caps)",
        "Black box insights no way to query individual sessions",
        "Manual cohort building",
        "Cookie-dependent tracking",
        "Retargeting triggered by basic events",
        "Bot-inflated engagement metrics",
        "Only shows “what” happened",
      ],
    },
    helium: {
      name: "Helium Analytics",
      points: [
        "Real-time session-level insights — see impact as it happens",
        "Full, unsampled session fidelity every session counted",
        "Session explorer with quality & intent scores",
        "Chat driven realtime data querying",
        "Privacy-first identity stitching",
        "Retarget only quality sessions improves ROAS instantly",
        "AI-powered bot filtering",
        "Explains “why” it happened for root-cause attribution",
      ],
    },
  },
  quote: {
    text:
      "We've gone from T+2 days analysis to realtime without spending hours on it. Conversion likelihood score is a game changer for us!",
    name: "Shobhit Agarwal",
    role: "E-commerce lead at TCNS (W for Woman)",
  },
  features: {
    heading: "What Pulse catches. Before revenue drops.",
    items: [
      {
        title: "Anomaly Chat",
        body: "Real-time alerts + AI analysis of what’s suddenly off — and why.",
      },
      {
        title: "Funnel Drop Reason Finder",
        body: "Pinpoints where users drop and why they don’t convert at a segment level.",
      },
      {
        title: "Conversion Likelihood Score",
        body: "Real-time intent scoring for individual user sessions",
      },
      {
        title: "Collaborative Fix Logs",
        body: "Assign fixes. Track impact. Loop in Growth, Product, and Dev.",
      },
      {
        title: "Fix Uplift Simulator",
        body: "Forecast performance lift before you A/B test.",
      },
      {
        title: "Attribution AI",
        body: "Auto-diagnoses wasted spend by channel, campaign and behavior.",
      },
    ],
    chips: ["AI-Led Diagnosis", "Seamless Integration", "Predictive & Prescriptive"],
  },
  cro: {
    heading: "Unlock hidden anomalies to power your next CRO action",
    trusted: "Trusted by Top Ecommerce Brands Worldwide",
  },
  reviewsHeading: {
    kicker: "Trusted by Top Ecommerce Brands Worldwide",
    h2: "What Our Users Say",
  },
  testimonials: [
    {
      quote:
        "My FB ROAS tanked 42% last month. Pulse diagnosed campaign misalignment and suggested reallocating spend to high-intent segments. Revenue rebounded 28% in 10 days.",
      name: "Sarah",
      role: "Performance Marketing",
      avatar: "/content/avatar-sarah.jpg",
    },
    {
      quote:
        "We used to spend 4-6 hours a week just digging through GA4 and Clarity. Now we get actionable insights directly in our Slack. Saved us 100+ hours last quarter. Soild tool!",
      name: "Jatin T.",
      role: "Product Lead",
      avatar: "/content/avatar-jatin.jpg",
    },
    {
      quote:
        "We used to have these endless Slack threads: ‘Did anyone notice conversions dipped yesterday?’ Pulse killed that. Now it flags anomalies before we even see the revenue graph tank.”",
      name: "mayak",
      role: "Head of eCommerce",
      avatar: "/content/avatar-mayak.png",
    },
    {
      quote:
        "I didn’t realize how much mental load dashboards put on us until Pulse. It fits right into Slack. No more opening GA4 tabs.",
      name: "Ankita Sen",
      role: "Senior PM",
      avatar: "/content/avatar-ankita.jpg",
    },
    {
      quote:
        "It’s rare to find a tool that works for growth, product, marketing at the same time. No more fighting over what the data means.",
      name: "Neel M.",
      role: "Sr. Product Manager",
      avatar: "/content/avatar-neel.jpg",
    },
    {
      quote:
        "We didn’t need a dev sprint to set it up. Pulse connected to Shopify in 5 minutes and started surfacing insights the same day.",
      name: "Johnathan",
      role: "Growth Lead",
      avatar: "/content/avatar-johnathan.jpg",
    },
  ],
  reviewStrip: {
    avatars: [
      "/content/review-strip-1.png",
      "/content/review-strip-2.png",
      "/content/review-strip-3.png",
      "/content/review-strip-4.png",
    ],
    prefix: "Trusted by",
    value: 100,
    suffixPlus: "+",
    suffix: "innovators worldwide",
  },
  faqs: [
    {
      q: "Does Pulse work if I already use Shopify Analytics and Meta Pixel?",
      a: "Yes. Pulse sits on top of your existing stack and enriches it with session-level intelligence. You keep Shopify Analytics and Meta Pixel exactly as they are.",
    },
    {
      q: "How does Pulse prioritize issues across channels and devices?",
      a: "Pulse ranks every anomaly by business impact — revenue at risk, affected segments, and confidence — so your team always works the highest-value fix first.",
    },
    {
      q: "What’s the ROI of using Pulse?",
      a: "Teams see a +27% lift in funnel fix rates on average, because fixes start from evidence: the exact drop reason, segment, and recommended action.",
    },
    {
      q: "Is Pulse built for small D2C brands or enterprise teams?",
      a: "Both. Insights are instant from day one, and collaborative fix logs scale across growth, product, and dev teams as you grow.",
    },
    {
      q: "Do I need a developer to set up Pulse?",
      a: "No. Connect Shopify in about 5 minutes — no dev sprint required. Insights start surfacing the same day.",
    },
  ],
  contactNote: "Feel free to mail us for any enquiries :  hello@gethelium.com",
} as const;