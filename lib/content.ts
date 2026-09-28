import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { cache } from "react";

export type ContentMeta = {
  slug: string;
  title: string;
  /** Optional on-page H1 override (live Framer pages distinguish card title, SEO title, and H1). */
  h1?: string;
  /** Optional className override for the on-page H1 (live H1 sizes vary per page). */
  h1Class?: string;
  /** Optional SEO/meta title override (browser tab / OG). */
  seoTitle?: string;
  /** Omit the inter-block gap in Markdown wrapper (article-flow pages with explicit spacing). */
  dense?: boolean;
  description: string;
  type: "blog" | "case-study";
  date: string;
  author: string;
  ogImage: string;
  tags: string[];
  category?: string;
  readingTime?: number;
};

export type ContentDoc = ContentMeta & { body: string };

/**
 * Framer URL quirk: live blog URLs contain the URL-encoded right single
 * quote %E2%80%99 (e.g. ...don%E2%80%99t-convert). Files store the decoded
 * character. Normalise incoming slugs so encoded, decoded, and straight
 * apostrophe variants all resolve to the same document.
 */
export function normalizeSlug(raw: string): string {
  let s = raw;
  try {
    s = decodeURIComponent(raw);
  } catch {
    // keep raw if malformed percent-encoding
  }
  return s
    .replace(/\u2019/g, "'")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function parseFrontmatter(raw: string): {
  data: Record<string, string | string[]>;
  body: string;
} {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, string | string[]> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith("[") && v.endsWith("]")) {
      data[kv[1]] = v
        .slice(1, -1)
        .split(",")
        .map((x) => x.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      v = v.replace(/^["']|["']$/g, "");
      data[kv[1]] = v;
    }
  }
  return { data, body: raw.slice(m[0].length) };
}

function readDir(dir: string): ContentDoc[] {
  const full = join(process.cwd(), "content", dir);
  let files: string[];
  try {
    files = readdirSync(full);
  } catch {
    return [];
  }
  const docs: ContentDoc[] = [];
  for (const f of files) {
    if (!f.endsWith(".mdx") && !f.endsWith(".md")) continue;
    const raw = readFileSync(join(full, f), "utf8");
    const { data, body } = parseFrontmatter(raw);
    const slugFromFile = f.replace(/\.mdx?$/, "");
    const slug = typeof data.slug === "string" && data.slug ? data.slug : slugFromFile;
    docs.push({
      slug,
      title: (data.title as string) || slugFromFile,
      h1: typeof data.h1 === "string" ? data.h1 : undefined,
      h1Class: typeof data.h1Class === "string" ? data.h1Class : undefined,
      seoTitle: typeof data.seoTitle === "string" ? data.seoTitle : undefined,
      dense: String(data.dense) === "true",
      description: (data.description as string) || "",
      type: dir.endsWith("blogs") ? "blog" : "case-study",
      date: (data.date as string) || "",
      author: (data.author as string) || "Helium",
      ogImage: (data.ogImage as string) || "",
      tags: (data.tags as string[]) || [],
      category: undefined,
      body,
    } as ContentDoc & { category?: string; h1?: string; h1Class?: string; seoTitle?: string });
  }
  return docs;
}

export const getBlogs = cache((): ContentDoc[] =>
  readDir("blogs").sort((a, b) => (b.date || "").localeCompare(a.date || "")),
);

export const getCaseStudies = cache((): ContentDoc[] => readDir("case-studies"));

export const getBlog = cache(
  (slug: string): ContentDoc | undefined =>
    getBlogs().find((d) => normalizeSlug(d.slug) === normalizeSlug(slug)),
);

export const getCaseStudy = cache(
  (slug: string): ContentDoc | undefined =>
    getCaseStudies().find((d) => normalizeSlug(d.slug) === normalizeSlug(slug)),
);

/** All canonical slugs (decoded apostrophe form) for sitemap/params. */
export const blogSlugs = (): string[] => getBlogs().map((d) => d.slug);
export const caseStudySlugs = (): string[] => getCaseStudies().map((d) => d.slug);