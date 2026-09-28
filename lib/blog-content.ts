import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cache } from "react";

/**
 * Blog fixture loader — reads structured blog JSON fixtures from
 * src/data/blogs/<slug>.json (scraped live page structure, see
 * audit/blog-asw/extract-live.mjs).
 */

export type BlogBlock =
  | { type: "h1"; text: string }
  | { type: "date"; text: string }
  | { type: "hero-image"; src: string; alt: string; w: number; h: number }
  | { type: "h2"; text: string; sub?: boolean; trail?: number; pre?: number }
  | { type: "h3"; text: string; trail?: number; pre?: number }
  | { type: "p"; text?: string; html?: string; strong?: boolean; tight?: boolean; mt?: number; indent?: boolean; trail?: number }
  | { type: "gap"; h: number }
  | { type: "ul"; items: string[]; trail?: Record<string, number> }
  | { type: "table"; columns: string[]; colWidths?: number[]; padX?: number; rows: string[][] }
  | { type: "image"; src: string; alt: string; w: number; h: number; offset?: number };

export type BlogCard = {
  label: string;
  title: string;
  href: string;
  image: string;
};

export type BlogDoc = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  type: "blog";
  date: string;
  dateLabel: string;
  author: string;
  readTime: number;
  category: string;
  tags: string[];
  ogImage: string;
  hero: { src: string; alt: string; w: number; h: number };
  page: { bg: string; pageHeight: number; contentX: number; contentW: number };
  blocks: BlogBlock[];
  otherBlogs: { heading: string; cards: BlogCard[]; mt?: number };
};

export const getBlogFixture = cache((slug: string): BlogDoc | undefined => {
  try {
    const raw = readFileSync(
      join(process.cwd(), "src", "data", "blogs", `${slug}.json`),
      "utf8",
    );
    return JSON.parse(raw) as BlogDoc;
  } catch {
    return undefined;
  }
});