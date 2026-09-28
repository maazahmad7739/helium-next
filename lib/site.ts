export const SITE = {
  name: "Helium",
  url: "https://www.gethelium.co",
} as const;

export const HOME_TITLE =
  "Helium | AI Personalization for D2C eCommerce Growth";

export const HOME_DESCRIPTION =
  "Increase conversion and AOV with AI merchandising, personalization, product discovery, recommendations, and search optimization for eCommerce brands. 30% higher conversion | 18% higher AOV | 20% better retention. Featured in Forbes and TechCrunch.";

export const NAV_ITEMS = [
  { label: "Ad Stack", href: "/ad-stack" },
  { label: "Merchandising", href: "/merchandising" },
  { label: "Catalog", href: "/catalog-optimization" },
  { label: "Pulse", href: "/pulse" },
  { label: "Case studies", href: "/helium-case-studies" },
  { label: "Guides", href: "/blogs" },
  { label: "Blogs", href: "/blogs" },
] as const;

export const CONTACT_URL = "/contact";

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Ad Stack", href: "/ad-stack" },
  { label: "Merchandising", href: "/merchandising" },
  { label: "Pulse", href: "/pulse" },
  { label: "Blogs", href: "https://blog.gethelium.co/" },
  { label: "Contact", href: "/contact" },
  { label: "Case Studies", href: "/helium-case-studies" },
  { label: "Product Hunt", href: "https://www.producthunt.com/products/helium-2" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;

export const SOCIALS = [
  { label: "X", href: "https://x.com/heliumstores", icon: "x" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gethelium/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/heliumstores/",
    icon: "instagram",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Heliumsmartstores/",
    icon: "youtube",
  },
] as const;

export const NEWSLETTER_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7453357224791285760";

export const ANALYTICS = {
  gtmId: "GTM-TCSB4CLN",
  metaPixelId: "549264821430555",
  linkedinPartnerId: 7898201,
  posthogKey: "phc_5mtJMxBHsp9l5ZHFEaom4uLFh09cSy6yzgNCMoy4eJh",
  posthogHost: "https://us.i.posthog.com",
} as const;