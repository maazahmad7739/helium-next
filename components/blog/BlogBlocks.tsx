import Image from "next/image";
import Link from "next/link";
import type { BlogBlock } from "@/lib/blog-content";

/**
 * BlogBlocks — renders the structured article fixture (blog-content JSON)
 * with the measured live-blog typography system (Geist face, 16px/24px
 * body, 28px section headings, 21.5px list indent, 3-col border table).
 *
 * All spacing values are verbatim live-site measurements (see
 * audit/blog-asw/live-extract.json), not hand-tuned offsets.
 */

function Html({
  html,
  className,
  style,
  children,
}: {
  html: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <p className={className} style={style} dangerouslySetInnerHTML={{ __html: html }}>
      {children}
    </p>
  );
}

function Paragraph({ block }: { block: Extract<BlogBlock, { type: "p" }> }) {
  const cls = "text-[16px] leading-[24px] font-medium text-[#4f4f4f]";
  const style = block.indent ? { marginLeft: 21.5, width: 713.5 } : undefined;
  const mt = block.mt != null ? block.mt : 20;
  const inner = { marginTop: mt, ...(style || {}) };
  const trailSpans = block.trail ? (
    <span aria-hidden className="block">
      {Array.from({ length: block.trail }).map((_, k) => (
        <span key={k} className="block">
          {"\u00A0"}
        </span>
      ))}
    </span>
  ) : null;
  if (block.html != null)
    return (
      <Html html={block.html} className={cls} style={inner}>
        {trailSpans}
      </Html>
    );
  if (block.strong)
    return (
      <p className={cls + " font-bold"} style={inner}>
        {block.text}
        {trailSpans}
      </p>
    );
  return (
    <p className={cls} style={inner}>
      {block.text}
      {trailSpans}
    </p>
  );
}

/** Explicit blank line inside a text run (live <br/><br/> runs, 24px). */
function Gap({ h }: { h: number }) {
  return <div aria-hidden style={{ height: h }} />;
}

function Bullets({ items, trail }: { items: string[]; trail?: Record<string, number> }) {
  return (
    <ul className="mt-[10px] flex flex-col">
      {items.map((it, i) => (
        <li
          key={i}
          className="relative pl-[21.5px] text-[16px] leading-[24px] font-medium text-[#4f4f4f] before:absolute before:left-[7px] before:top-0 before:font-medium before:text-[#4f4f4f] before:content-['•']"
        >
          {it.includes("<") ? <Html html={it} className="" /> : it}
          {trail && trail[String(i)] ? (
            <span aria-hidden className="block">
              {Array.from({ length: trail[String(i)] }).map((_, k) => (
                <span key={k} className="block">
                  {"\u00A0"}
                </span>
              ))}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/**
 * h2/h3 — live: 28px/39.2px Geist medium, 40px above any sibling by default
 * (measured y-gaps); `pre` overrides the above-gap when a page measures
 * differently (e.g. top-10 uses 84px between last p and next h2).
 */
function Heading({
  block,
}: {
  block: Extract<BlogBlock, { type: "h2" }> | Extract<BlogBlock, { type: "h3" }>;
}) {
  const Tag = block.type === "h2" ? "h2" : "h3";
  return (
    <Tag
      className="font-blog text-[28px] leading-[39.2px] font-medium tracking-[-1.12px] text-black"
      style={{ marginTop: block.pre != null ? block.pre : 40 }}
    >
      {block.text}
      {block.trail ? (
        <span aria-hidden className="block">
          {Array.from({ length: block.trail }).map((_, k) => (
            <span key={k} className="block">
              {"\u00A0"}
            </span>
          ))}
        </span>
      ) : null}
    </Tag>
  );
}

/**
 * LayersTable — live geometry: 735px table, columns 146/371.5/206.5,
 * cell text widths 125/340.5/205.5 with left insets 11/11/1, 10px
 * vertical cell padding, 1px rgba(153,153,153,0.25) borders.
 */
function LayersTable({ columns, rows }: Extract<BlogBlock, { type: "table" }>) {
  if (!rows || !columns) return null;
  const cols = [146, 371.5, 206.5];
  const textW = [125, 340.5, 205.5];
  const inset = [11, 11, 1];
  const row = (cells: string[], ri: number) => (
    <div
      key={ri}
      className="grid border-b border-[rgba(153,153,153,0.25)]"
      style={{ gridTemplateColumns: cols.map((w) => `${w}px`).join(" ") }}
    >
      {cells.map((cell, ci) => (
        <div key={ci} className="border-r border-[rgba(153,153,153,0.25)] py-[10px] last:border-r-0">
          <p
            className="text-[16px] leading-[24px] font-medium text-[#4f4f4f]"
            style={{ marginLeft: inset[ci], width: textW[ci] }}
          >
            {cell}
          </p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="mt-[11px] w-full">
      <div className="flex flex-col">
        {row(columns, -1)}
        {rows.map((cells, ri) => row(cells, ri))}
      </div>
    </div>
  );
}

export function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
          case "h3":
            return (
              <Heading
                key={i}
                block={b as Extract<BlogBlock, { type: "h2" } | { type: "h3" }>}
              />
            );
          case "p":
            return <Paragraph key={i} block={b} />;
          case "gap":
            return <Gap key={i} h={b.h} />;
          case "ul":
            return <Bullets key={i} items={b.items} trail={b.trail} />;
          case "table":
            return <LayersTable key={i} {...b} />;
          case "image":
            return (
              <span
                key={i}
                className="relative mt-[10px] block w-full overflow-hidden rounded-lg"
                style={{
                  aspectRatio: `${b.w} / ${b.h}`,
                  ...(b.offset ? { marginBottom: -b.offset } : {}),
                }}
              >
                <Image
                  src={b.src}
                  alt={b.alt || ""}
                  fill
                  unoptimized
                  sizes="735px"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </span>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/** "Other Blogs" card row at the article foot (live 2x2 grid, 490x340 white
 *  rounded cards: 20px padding, 200px text column left, 200x300 image right). */
export function OtherBlogsRow({
  heading,
  cards,
}: {
  heading: string;
  cards: { label: string; title: string; href: string; image: string }[];
}) {
  return (
    <section className="mx-auto w-full max-w-[1000px]">
      <h2 className="text-center font-blog text-[52px] leading-[62.4px] font-medium tracking-[-1.56px] text-[#060612]">
        {heading}
      </h2>
      <div className="mt-[30px] grid grid-cols-2 gap-[20px]">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group flex h-[340px] w-[490px] items-start justify-between rounded-2xl bg-white p-[20px] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]"
          >
            <div className="flex h-[300px] w-[200px] flex-col">
              <span className="font-micro text-[12px] leading-[12px] font-semibold tracking-[1.8px] text-[#69686e]">
                {c.label}
              </span>
              <h3 className="mt-[12px] font-blog text-[20px] leading-[24px] font-medium tracking-[-0.6px] text-[#060612]">
                {c.title}
              </h3>
            </div>
            <span className="relative block h-[300px] w-[200px] overflow-hidden">
              <Image
                src={c.image}
                alt={c.title}
                fill
                unoptimized
                sizes="200px"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}