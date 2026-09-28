import { SITE } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Helium",
    url: SITE.url,
    logo: `${SITE.url}/brand/logo.png`,
    sameAs: [
      "https://x.com/heliumstores",
      "https://www.linkedin.com/company/gethelium/",
      "https://www.instagram.com/heliumstores/",
      "https://www.youtube.com/@Heliumsmartstores/",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Helium",
    url: SITE.url,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  ogImage,
  date,
  author,
  type,
}: {
  title: string;
  description: string;
  slug: string;
  ogImage: string;
  date: string;
  author: string;
  type: "blog" | "case-study";
}) {
  const base = type === "blog" ? `${SITE.url}/blogs/` : `${SITE.url}/helium-case-studies/`;
  const data = {
    "@context": "https://schema.org",
    "@type": type === "blog" ? "Article" : "Article",
    headline: title,
    description,
    image: ogImage ? `${SITE.url}${ogImage}` : undefined,
    datePublished: date || undefined,
    author: { "@type": "Organization", name: author || "Helium" },
    publisher: {
      "@type": "Organization",
      name: "Helium",
      logo: { "@type": "ImageObject", url: `${SITE.url}/brand/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": base + encodeURIComponent(slug) },
    url: base + encodeURIComponent(slug),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}