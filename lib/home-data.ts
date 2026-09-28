export const HERO = {
  badge: {
    text: "Featured among top AI startups by Forbes & TechCrunch",
    forbesUrl: "https://www.forbes.com/profile/helium/?list=30under30-asia-retail-ecommerce",
    techcrunchUrl:
      "https://techcrunch.com/2024/06/30/here-are-indias-biggest-ai-startups-based-on-how-much-money-theyve-raised/",
    forbesImg: "/content/X0GSzIUG47TunHrMoqhR5xNCXEg.jpeg",
    tcImg: "/content/ZPO7xXIffE8ZRPH22RdVmBjwmU.png",
  },
  h1a: "eComm growth",
  h1b: "Agents",
  enable: "We enable you with",
  words: ["recommendations", "Merchandising", "AI Search", "Bundles"],
  previewImg: "/content/fsbnzwLBxXj8eghwLn1IfN1u0.png",
  previewDecor: "/content/QMirkdl4WPEe5bmSFhvVcssWj4.svg",
} as const;

/**
 * Live home ticker (gethelium.co .framer-qyRl9): logo order measured from the
 * live DOM. `aw/ah` = actual asset pixel size (for next/image attrs);
 * `h` = live rendered height (width derives from the asset's own ratio).
 * lenskart → AKISO → CULTURE → M&S → noise → mamaearth → maje →
 * aurelia → Sudathi → SALTY → Ghar Soaps → Dr. Sheth's
 */
export const MARQUEE_LOGOS = [
  { src: "/content/ad-stack/GTwqA3CXVZTkCg9p0cVsWQVI7M.png", aw: 434, ah: 61, h: 18 },
  { src: "/content/ad-stack/J6f4rV3RiHX1SV5vQ6tmtQtsnA.png", aw: 404, ah: 161, h: 34 },
  { src: "/content/ad-stack/hy2WRhA4WnmLsCT9MGbVsty3BY.png", aw: 190, ah: 189, h: 49 },
  { src: "/content/ad-stack/oqepBAq3H9a9UOS6biwdFTAsqZc.png", aw: 260, ah: 104, h: 29 },
  { src: "/content/ad-stack/sHUvhptXH98klokIElLCU4AODag.png", aw: 372, ah: 107, h: 28 },
  { src: "/content/ad-stack/SplSOV2Qy61xo7llxEQeTLCiNY.png", aw: 450, ah: 60, h: 17 },
  { src: "/content/ad-stack/QmcRtDImjPub4fsvMR494hF9BHE.png", aw: 260, ah: 110, h: 32 },
  { src: "/content/ad-stack/oCvfIadNQoGvF86T5IjaOdQ2oY.png", aw: 261, ah: 76, h: 26 },
  { src: "/content/ad-stack/OEG6V4C2qr0c6MiiwSaMNT8BE.png", aw: 443, ah: 180, h: 32 },
  { src: "/content/ad-stack/lipsEjMkacVeMrqvCxE6vI42qo.png", aw: 355, ah: 224, h: 62 },
  { src: "/content/ad-stack/H1Q9tRyoYjs1VCJKIegM5DiHHw.png", aw: 383, ah: 167, h: 52 },
  { src: "/content/ad-stack/tBaqrGr80M8JC4OqOBnrSrHebqc.png", aw: 446, ah: 70, h: 23 },
] as const;

export const STATS = [
  { value: "50+", label: "Brands converting smarter", caption: "Scaling conversion without scaling spend" },
  { value: "47M+", label: "Revenue Generated", caption: "Through adaptive discovery and retargeting" },
  { value: "10M+", label: "Sessions Personalised", caption: "Real time personalisation, for every visit that matters." },
] as const;

export type ComparisonTab = {
  label: string;
  heading: string;
  body: string;
  img: string;
};

export const COMPARISON_TABS: ComparisonTab[] = [
  {
    label: "Adaptive Storefront",
    heading: "Adaptive Storefront",
    body: "AI Contextualised Landing Pages adapt content, messaging, and product positioning in real time based on shopper intent, creating clearer relevance and faster paths to purchase without relying on multiple static pages.",
    img: "/content/pREjVX1Ebr9LX2lH78nwXj3SMew.png",
  },
  {
    label: "Smart Recommendations",
    heading: "Smart Recommendations",
    body: "Smart upsells and cross-sells across PDPs and carts, powered by behaviour and rules helping you boost AOV, promote priority products, and maximize every session.",
    img: "/content/pREjVX1Ebr9LX2lH78nwXj3SMew.png",
  },
  {
    label: "Merchandising",
    heading: "Merchandising",
    body: "Place the right products in front of the right shoppers at the right time with intelligent recommendations on every page.",
    img: "/content/pREjVX1Ebr9LX2lH78nwXj3SMew.png",
  },
  {
    label: "Dynamic Bundles",
    heading: "Dynamic Bundles",
    body: "Create dynamic bundles that give customers more of what they want in fewer clicks. With flexible bundling logic, multiple SKU combinations, and related-product offers or discounts, you can simplify discovery, reduce navigation fatigue, and increase order value across one-time purchases and subscription bundles, all with faster checkout options.",
    img: "/content/pREjVX1Ebr9LX2lH78nwXj3SMew.png",
  },
  {
    label: "AI Search Tuning",
    heading: "AI Search Tuning",
    body: "Adaptive AI search and collection merchandising that learns from customer behavior to serve better results, personalized recommendations, and actionable insights.",
    img: "/content/pREjVX1Ebr9LX2lH78nwXj3SMew.png",
  },
];

export type IndustryCase = {
  heading: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  img: string;
  label: string;
};

export const INDUSTRY_HEADING = "Proven conversion lifts across industries";

/** Live: two case-study blocks, each with label, title, image, "View case study" */
export const INDUSTRY_CASES: IndustryCase[] = [
  {
    heading: "Proven conversion lifts across industries",
    title: "Noise Transformed Product Discovery with AI-Powered Personalization",
    body: "Noise used Helium's AI personalization engine to serve tailored shopping experiences to its 1M+ monthly visitors - without requiring any login or profile. By reading real-time signals like device, location, and behavior, Helium helped Noise cut bounce rates by 30%, boost conversions by 25%, and grow average order value by 12%.",
    cta: "View case study",
    href: "/helium-case-studies/noise",
    img: "/content/m33laeyQFmvxmIzHjvNo76r485o.webp",
    label: "Case Study",
  },
  {
    heading: "Proven conversion lifts across industries",
    title: "How Sudathi Drove a 25% Conversion Lift",
    body: "Sudathi drove a 25% conversion uplift by fixing decision friction, not traffic. Using Helium to adapt discovery, PDPs, and retargeting in real time, Sudathi showed shoppers more relevant sarees faster and retargeted only high-intent sessions cutting CAC by up to 5× without increasing ad spend or redesigning the site.",
    cta: "View case study",
    href: "/helium-case-studies/sudathi",
    img: "/content/v0KrPOVp9cmrKOpBwOLEdmwzmZE.jpg",
    label: "Case Study",
  },
];

export const HELIUM_AI = {
  intro: "Introducing",
  giant: "HELIUM AI",
  rows: [
    {
      kicker: "Visitor intelligence",
      h: "Intelligence that powers personalized shopping",
      p: "We capture visitor context with demographics, preferences and 20 unique variables the moment they arrive.",
      img: "/content/ykr8yOggRVt6FIE9d1umSw3UR0A.png",
      imgSide: "left" as const,
    },
    {
      kicker: "Product intelligence",
      h: "Helium AI understands each unique attribute of your entire catalog through AI",
      p: "How the product looks, is utilised for, what makes it unique all thanks to our vision models",
      video: "/content/ABJLRB8cn01jI4zzbvf0GWi2gU.mp4",
      poster: "/content/5ILRvlYXf72kHSVHqpa3snGzjU.jpg",
      imgSide: "right" as const,
    },
    {
      kicker: "Real time Session intelligence",
      h: "We understand every action and its meaning",
      p: "Your website is broken into elements, and we know what each element means. We turn that intelligence into signals you can actually use.",
      pStrong: "We turn that intelligence into signals",
      img: "/content/DQKVQ9J2WNKxzPmRZZ9oGkk7Tw.png",
      imgSide: "left" as const,
    },
  ] as Array<{
    kicker: string;
    h: string;
    p: string;
    /** Bold Poppins 700 inline span inside `p` (live row 3). */
    pStrong?: string;
    img?: string;
    video?: string;
    poster?: string;
    imgSide: "left" | "right";
  }>,
};

export type TitleSegment = { t: string; b: boolean };

export const TRANSFORM = {
  heading: "Transform. Personalize. Elevate.",
  stats: [
    {
      title: [
        { t: "Order values up by ", b: false },
        { t: "18%", b: true },
      ] as TitleSegment[],
      kicker: "Features driving the order value uplift:",
      points: [
        "Contextual product cross sells",
        "Upsell products based on product attributes",
        "Drive cross sell and cart goals on visitor type",
      ],
      visual: "personas" as const,
    },
    {
      title: [{ t: "30% more converted sessions", b: true }] as TitleSegment[],
      kicker: "Features converting visitors into customers:",
      points: [
        "Merchandise products & content",
        "Contextually nudge them to the next step of the funnel",
        "Enable them to discover & make decision in shorter spans",
      ],
      visual: "products" as const,
    },
    {
      title: [
        { t: "Retain 20% more ", b: true },
        { t: "of loyal customers", b: false },
      ] as TitleSegment[],
      kicker: "Features helping you retain like a pro",
      points: [
        "Conversion liklihood scores for each session",
        "Supply session level signals to your marketing stack",
        "Build dynamic retention landing pages",
      ],
      visual: "retain" as const,
    },
  ],
} as const;

export const PERSONA_CHIPS = [
  "Window Shopper",
  "Returner",
  "First - Time Visitor",
  "Offer Thrifter",
] as const;

export type ProductCard = {
  name: string;
  price: string;
  tag?: string;
  img: string;
};

export const PRODUCT_CARDS = [
  { name: "Track Jacket", price: "$110.00", tag: "Similar Product", img: "/content/ER74UqEKt1mygqpYCq7i1CvFcuM.png" },
  { name: "Track Jacket", price: "$90.00", tag: "Similar Product", img: "/content/kQnkdz8ArGjcylWi0cFKnhapro.png" },
  { name: "Track Jacket", price: "$100.00", tag: "4.5/5 recommended", img: "/content/2IWx2xEZI4QlBpRtniJq5ObVzA.png" },
  { name: "Track Jacket", price: "$100.00", tag: "4.5/5 recommended", img: "/content/APrwcm9E7ygUTy1pZTYlVDufXCw.png" },
] as const;

export const SEARCH_PILLS = ["Show me a good track suit"] as const;

/** Live "White Linen / $100" retention graphic (Transform card 3). */
export const RETAIN_VISUAL = "/content/MODUsRsJOI2AW1QZ1Ge7dxHIlZk.png" as const;

export const HOW_IT_WORKS = {
  heading: "How it works?",
  steps: [
    { n: "1", text: "Add Helium script to your website in 2 mins" },
    { n: "2", text: "Personalisation of each session begins in 15 days" },
    { n: "3", text: "AI keeps learning from each session & adapts the website" },
  ],
} as const;

export type AgenticStep = { label: string; value: string; img: string };

export const AGENTIC = {
  heading: "End to End Agentic growth enabler platform for DTC",
  flow: [
    { label: "Inputs", value: "Sessions, Catalogs, Ads and Orders", img: "/content/snRoiZSGCjxqEHutIGNbz7KsKg.png" },
    { label: "Decisions", value: "Reasoning and Memory", img: "/content/LYENtAW1Ck7wnMLJsYg9Mr8NuuE.png" },
    { label: "Action", value: "Site & Feed Changes and Campaign Actions", img: "/content/EF6JiAtG4cwIUwZodwYdkpT7cI.png" },
    { label: "Output", value: "Higher CR, ROAS, AOV", img: "/content/FmIFdsuNouQivJUHnWpaKdoeb5o.png" },
  ] as AgenticStep[],
} as const;

export type Testimonial = { quote: string; role: string; company: string };

/** Live order, verbatim quotes (10 slides; card = 363px, Outfit 300) */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Helium pushed us to think long-term. The results weren’t just quick wins they were sustainable.",
    role: "Growth Manager",
    company: "Wanderlooms (Apparel)",
  },
  {
    quote:
      "Helium brought discipline to our growth efforts. Instead of scattered experiments, we now have a focused strategy that’s driving measurable revenue improvements.",
    role: "Co-founder",
    company: "The Biohackers Co. (Health & Wellness)",
  },
  {
    quote:
      "The first-fold personalization is a game-changer. Customers now find what they need instantly, and our bounce rate has dropped significantly.",
    role: "Performance Marketing",
    company: "Campussutra (Apparel)",
  },
  {
    quote:
      "We’d worked with agencies before, but Helium was the first to talk in terms of impact. Better funnel clarity, higher conversions, and a roadmap we actually trust.",
    role: "Growth Manager",
    company: "Alchemy Fine Home (Furniture)",
  },
  {
    quote:
      "We saw a clear improvement in conversions once personalization went live. The impact on revenue per visitor was noticeable within weeks.",
    role: "VP of Product",
    company: "Noise (Consumer electronics)",
  },
  {
    quote:
      "Our store, catalog, and paid finally started pulling in the same direction. Helium stopped the mismatch and revenue per visit moved 27% in 4 weeks.",
    role: "Head of eCommerce",
    company: "W for Woman",
  },
  {
    quote:
      "It feels like having a growth desk that never goes offline. Threads show up when something shifts, and the next move is already queued.",
    role: "COO",
    company: "Akiso Store",
  },
  {
    quote:
      "Helium transformed how we engage customers. The personalized experiences led to a 30% increase in conversions within weeks",
    role: "Founder",
    company: "Bruno Milano (Consumer electronics)",
  },
  {
    quote:
      "Chat-based product recommendations are like having a personal shopper for every visitor. It’s a next-gen customer experience",
    role: "Growth Manager",
    company: "Marks & Spencers (Apparel)",
  },
  {
    quote:
      "They streamlined our collection management with AI powered tagging. What used to take hours now happens in seconds and with greater accuracy.",
    role: "Founder",
    company: "Michelle & Kenza (Apparel)",
  },
];

export const BLOG_HIGHLIGHT = {
  title: "Valentine’s Day 2026: how Indian D2C brands can make shoppers spend more",
  body: "Helium breaks down how Indian D2C brands can increase Valentine’s Day revenue by tapping into shopper intent, personalising journeys, and guiding decisions without relying on heavy discounts.",
  img: "/content/oNI5v8JuULRfXi1h5h13kSFcHE.png",
  href: "/blogs/valentine’s-day-2026-how-indian-d2c-brands-can-make-shoppers-spend-more",
} as const;

export const GLOBE_SECTION = {
  heading: "Connecting Storefronts Worldwide.",
} as const;