import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { blogSlugs, caseStudySlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ad-stack`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/merchandising`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/catalog-optimization`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pulse`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/audience-signals`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/attribution`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/helium-case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blogs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogs: MetadataRoute.Sitemap = blogSlugs().map((slug) => ({
    url: `${base}/blogs/${encodeURIComponent(slug)}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const cases: MetadataRoute.Sitemap = caseStudySlugs().map((slug) => ({
    url: `${base}/helium-case-studies/${encodeURIComponent(slug)}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...core, ...cases, ...blogs];
}