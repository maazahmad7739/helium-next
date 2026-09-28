import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { mdxComponents } from "@/components/mdx/components";

/**
 * Markdown — renders article body markdown/MDX as a string via
 * @mdx-js/mdx `evaluate()` (RSC-compatible; runs server-side only).
 *
 * Supports the legacy subset (h2/h3, lists, quotes, bold/italic/links,
 * images) plus custom components from components/mdx/components.tsx
 * (StatCard, QuoteBlock, SolutionCard, BeforeAfter, MdxCta, AuthorByline).
 */
export async function Markdown({ md, dense = false }: { md: string; dense?: boolean }) {
  const { default: Content } = await evaluate(md, {
    ...runtime,
    development: false,
  });
  return (
    <div className={dense ? "flex flex-col" : "flex flex-col gap-5"}>
      <Content components={mdxComponents} />
    </div>
  );
}