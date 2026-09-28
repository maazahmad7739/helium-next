export const MERCH = {
  meta: {
    title: "AI merchandising and storefront personalization | Helium",
    description:
      "Helium merchandising ranks and personalizes collections from visitor intent. Connect the storefronts you already run — not a Shopify-only app, not a product customizer.",
    canonical: "/merchandising",
  },
  hero: {
    /** live: full-bleed looping video sits ABOVE the H1 (y160-710, 1112×550) */
    video: "/content/merchandising/hero-loop.mp4",
    h1: "Curate unique products for each visitor with AI",
    /** live: "Think of it like your **sharpest sales person**, only it sees every session, every scroll, every click and **adapts instantly**." */
    bodyA: "Think of it like your ",
    bodyAccent1: "sharpest sales person",
    bodyB: ", only it sees every session, every scroll, every click and ",
    bodyAccent2: "adapts instantly",
    bodyC: ".",
  },
  cities: {
    heading: "Same landing page, different cities",
    /** live: one floating card per city over a fanned phone-stack visual */
    tabs: ["Chicago", "LA", "Best Seller", "Miami", "New York"] as const,
    panelTitle: "Best Seller",
    phones: [
      "/content/merchandising/TGFuueyXIUOXGt1pZsxu2DFi8.png",
      "/content/merchandising/B2xGfLCBnDbKixngIvNBkxXhdk.png",
      "/content/merchandising/R4XrlRDkV66hI9ZyVN3IdRY1yQg.png",
      "/content/merchandising/0oZxvNVMzhdqpErtKmoeP22ZB8.png",
      "/content/merchandising/b7W4drqJdUViHYy1HDIlbbJ8iw.png",
    ] as const,
    /** center hero phone (taller, overlaps the stack) */
    phoneHero: "/content/merchandising/YlYIbfFEujexwgWABDzpsRlY.webp",
  },
  trustedBy: "Trusted by leading brands worldwide",
  features: {
    heading: "Chat to curate products",
    items: [
      {
        title: "Product attributes generated with AI",
        body: "To understand each visitor's intent, starting with the product",
        visual: "mosaic",
        image: "/content/merchandising/IJuYFmQPZvpLehSA1K8MNbc6BI.webp",
      },
      {
        title: "Brand specific personas and demographics",
        body: "To target the right visitor with the right context",
        visual: "heads",
        avatars: [
          "/content/merchandising/sJT9cBItegz7PVsaLThdmt8rrLo.png",
          "/content/merchandising/CZazsGMu99KUZgjFKkzUxxMDDXA.png",
          "/content/merchandising/ilmKmLnyIkZnsRaiTdEffX9NwmY.png",
          "/content/merchandising/VzDvQxtYUmow5skHMUSinLVXw.png",
          "/content/merchandising/PxTtPLuYRVxfn0m1KFhsAhxP0s.png",
        ],
        bigAvatar: "/content/merchandising/MYENO46NV4Vyq9ayZ3Nicmf73A.png",
      },
      {
        title: "Business metrics inferred automatically",
        visual: "metrics",
        stats: [
          { label: "Conversion rate", value: "2%", avatar: "/content/merchandising/YhYbiRhaISmxvXAoHwhyusi68s.png" },
          { label: "ACOS", value: "15%", avatar: "/content/merchandising/8bpCwTI8xBuIdULXwTNPxc3WfU.png" },
          { label: "Sessions", value: "25000", avatar: "/content/merchandising/bE8JbffF1mCidur9gPWOIBtE0.png" },
          { label: "Product recency", value: "Less than 6 months old", avatar: "/content/merchandising/5LQiKK90thZULY9FTpNxrLzpj8.png" },
        ],
      },
      {
        title: "Feed Meta, Google with high converting product sets",
        visual: "phones",
        phones: [
          "/content/merchandising/4rZZah9jnanyHEDHFmrbOm8Q.png",
          "/content/merchandising/Mp2BSMv5sk28zIjpTNMHJXNLo4g.png",
          "/content/merchandising/sCQj9FpV0rH5PYkyckZgnXxlUok.png",
        ],
      },
      {
        title: "Understand Marketing channel attribution",
        visual: "attribution",
        images: [
          "/content/merchandising/HQyxVLvSF2UHWkmxU41YYCE7tSs.png",
          "/content/merchandising/GXVbSEfiRRV1jW6Kr1U7ApJbNk.png",
        ],
      },
      {
        title: "Chat to curate products for each persona",
        body: "Describe the collection you want in plain language and Helium curates it.",
        visual: "drafts",
        drafts: [
          { title: "High converting clearance lot", meta: "102 products curated in 10 seconds" },
          { title: "Warm colours for beach vibe", meta: "64 products curated in 2 seconds" },
          { title: "Dresses converting well in LA", meta: "Collection created with 56 products" },
        ],
      },
    ],
  },
  mission: {
    eyebrow: "Our mission",
    heading:
      "Most shoppers give your brand less than 8 seconds. 95% drop off without buying because they don’t see what they’re looking for.",
    body: "Helium does that with smart product discovery that surfaces the right items instantly, before attention runs out and revenue walks away.",
    /** live renders the bold segment inside the same h2 paragraph flow */
    bodyPlain:
      "Helium does that with smart product discovery that surfaces the right items instantly, before attention runs out and revenue walks away.",
    name: "Deepak Kapoor",
    role: "Co-founder at Helium",
  },
  poweredBy: "AI Merchandising",
  poweredBySub: "Powered by Helium",
} as const;