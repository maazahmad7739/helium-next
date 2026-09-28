export const CATALOG = {
  meta: {
    title: "Catalog and collection merchandising for ads | Helium",
    description:
      "Helium catalog optimization aligns collection ranking with catalog ads so paid landing matches on-site merchandising.",
    canonical: "/catalog-optimization",
  },
  topBanner: "Featured in Top AI Startups - TechCrunch, Forbes",
  hero: {
    h1: "Catalog Ads That Adapt in Real Time",
    primaryCta: "Improve ROAS by 20% in 2 weeks",
    /** live: primary pill links to the calendar booking page */
    primaryHref: "https://calendar.app.google/J8qyJz8vLmiZG6o97",
    secondaryCta: "Download Shopify App",
    /** live: secondary pill links to the Shopify app listing */
    secondaryHref: "https://apps.shopify.com/helium-marketing-efficiency",
    body: "AI-driven SKU scoring ensures ad spend flows to products with real conversion upside.",
  },
  trustedBy: "Trusted by 100+ fast-growing ecommerce brands",
  /** reference2.md.txt "Hero Section" — gradient panel with Catalog visual */
  heroPanel: {
    titleLines: ["Catalog", "Optimization"],
    lead: "Your best products change daily. Your ads should too.",
    body: "A dynamic SKU intelligence engine that identifies your high-performing SKUs in real time and only promotes the ones that can convert today.",
    cta: "+20% ROAS in 30 days",
    /** live panel links to the contact page */
    ctaHref: "/contact",
    /** live: Catalog product-grid visual beside the copy (1346x1280) */
    image: {
      src: "/content/g58Nrd8O9vJuu8K1zhaHxFneSMc.png",
      width: 1346,
      height: 1280,
      alt: "Catalog panel listing products with ROAS and ad-spend scores",
    },
  },
  mismatch: {
    heading: "Your Catalog Moves Fast - Your Ads Don’t",
    body: "You lose money when your ads promote products that no longer match today’s stock, demand, or buying intent.",
    /** live: panel crossfades between two Catalog Manager dashboard shots */
    dashImages: [
      {
        src: "/content/tcrbDPryubhr4CKLx4Mpe6GKeI.png",
        width: 1262,
        height: 892,
        alt: "Catalog Manager dashboard with inefficiency alerts and bucket summary",
      },
      {
        src: "/content/rdd9upcVVqUJFkhivlYaVzxQxCE.png",
        width: 2120,
        height: 1364,
        alt: "Catalog Manager dashboard with catalog sharing and insights activation",
      },
    ],
  },
  /** live "Card List": five uniform reporting cards, same template */
  reportingCards: [
    {
      title: "Your winners stay front and center.",
      image: { src: "/content/9Ddchx42sssQzhxA7occiofuKQ.png", width: 1433, height: 948 },
      points: [
        "Packs winner products into the sets that get more spend.",
        "Scores each SKU on buy chance, risk, geo/time fit, stock.",
        "Keeps updating this as your brand’s data shifts each day.",
      ],
    },
    {
      title: "AI-Powered Catalog Overlays",
      image: { src: "/content/YoQoBtIrDpzAfQulygHPspbHvPU.png", width: 1433, height: 948 },
      points: [
        "Create feed-ready product images for Meta + Google sizes (no bad crops)",
        "One-click background cleanup for catalog images",
        "Apply category templates across your full catalog",
      ],
    },
    {
      title: "Catalog Manager",
      image: { src: "/content/HqNRPaNE1iW53Wzufvl5texsmY.png", width: 1433, height: 948 },
      points: [
        "Set it up once, then keep updates flowing without daily manual work",
        "See what’s working at a glance, grouped in a way that’s easy to act on",
        "Share, export, and make changes fast - all from one place",
      ],
    },
    {
      title: "Intentful Retargeting",
      image: { src: "/content/dClCbLC5wjMQ0spNrcmDJglWYtU.png", width: 1433, height: 948 },
      points: [
        "Tracks exact products users engage with, not just catalog clicks",
        "Exports high-intent sets as audiences + seeds lookalikes from set-buyers",
        "Build lookalikes and Retarget using confirmed intent signals",
      ],
    },
    {
      title: "AI Automated Spend Control",
      image: { src: "/content/KO2xAV3zDBCnepzXBvUVjEt1OJk.png", width: 1433, height: 948 },
      points: [
        "Auto-caps the leak inside your campaigns, while the rest of the catalog keeps running.",
        "Monitors SKU efficiency continuously across spend, ROAS, and conversion",
        "Explains itself with a precise log of the trigger, action, and impact window",
      ],
    },
  ],
  metricBanner: "Better ROAS | Less waste | Faster scale",
  system: {
    eyebrow: "The System",
    heading: "How it works",
    tabs: [
      {
        title: "Scores every SKU hourly",
        lines: [
          "Checks your full catalog every hour.",
          "You always get the latest product performance.",
        ],
      },
      {
        title: "Identifies Winners and Sit-Outs",
        lines: [
          "Shows what can sell today and what can’t.",
          "Helps you decide what to promote or pause.",
        ],
      },
      {
        title: "Push winners into your feed",
        lines: [
          "Pick the strong products to advertise today.",
          "Avoid low-stock or low-interest items.",
        ],
      },
    ],
    image: "/content/bCe9XycOy8YZzJxxuuTHNZJ24Oo.png",
    cta: "Start Optimizing",
  },
  results: {
    heading: "Results",
    body: "You focus spend on products with real buying momentum and avoid the ones that hurt ROAS.",
    metric: { value: "20%", label: "ROAS lift in 6 to 8 weeks" },
    quote: {
      text:
        "We stopped guessing what products to push. Helium turned our product feed into a performance engine - every ad now talks to the right shopper. The uplift in efficiency and ROAS speaks for itself.",
      name: "Shobhit Agarwal",
      role: "Ecommerce Lead, TCNS",
    },
    takeaways: [
      "Less money wasted on products that won’t sell.",
      "Scale ads based on what’s working right now.",
      "Move winner products faster and avoid leftover stock.",
    ],
  },
} as const;