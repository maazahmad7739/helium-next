import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { getBlogs, getBlog, normalizeSlug } from "@/lib/content";
import { getBlogFixture } from "@/lib/blog-content";
import { BlogBlocks, OtherBlogsRow } from "@/components/blog/BlogBlocks";
import { ArticleJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

/**
 * Blog detail — hybrid hydration: the fixture (src/data/blogs/<slug>.json)
 * drives the measured live-blog layout (Geist face, 735px column, 960px
 * hero, 2x2 "Other Blogs" row). Falls back to the legacy mdx body when no
 * fixture exists for the slug.
 */
export function generateStaticParams() {
  let fixtures: string[] = [];
  try {
    fixtures = readdirSync(join(process.cwd(), "src", "data", "blogs"))
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(/\.json$/, ""));
  } catch {
    fixtures = [];
  }
  const slugs = new Set<string>([...fixtures, ...getBlogs().map((d) => d.slug)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const doc = getBlogFixture(normalizeSlug(slug));
  if (!doc) {
    const mdx = getBlog(slug);
    if (!mdx) return { title: "Blog not found" };
    return {
      title: mdx.title,
      description: mdx.description,
      alternates: { canonical: `/blogs/${encodeURIComponent(mdx.slug)}` },
      openGraph: {
        title: mdx.title,
        description: mdx.description,
        url: `${SITE.url}/blogs/${encodeURIComponent(mdx.slug)}`,
        type: "article",
        images: mdx.ogImage ? [{ url: mdx.ogImage }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: mdx.title,
        description: mdx.description,
        images: mdx.ogImage ? [mdx.ogImage] : undefined,
      },
    };
  }
  return {
    title: doc.seoTitle || doc.title,
    description: doc.description,
    alternates: { canonical: `/blogs/${encodeURIComponent(doc.slug)}` },
    openGraph: {
      title: doc.title,
      description: doc.description,
      url: `${SITE.url}/blogs/${encodeURIComponent(doc.slug)}`,
      type: "article",
      images: doc.ogImage ? [{ url: doc.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: doc.ogImage ? [doc.ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const doc = getBlogFixture(normalizeSlug(slug));
  const mdx = !doc ? getBlog(slug) : undefined;
  if (!doc && !mdx) notFound();

  if (mdx) {
    const { Markdown } = await import("@/components/Markdown");
    return (
      <div className="-mt-[120px] bg-[#faf9f8] pt-[120px]">
        <article className="mx-auto w-full max-w-[760px] px-6 pt-[30px] pb-24">
          <ArticleJsonLd
            title={mdx.title}
            description={mdx.description}
            slug={mdx.slug}
            ogImage={mdx.ogImage}
            date={mdx.date}
            author={mdx.author}
            type="blog"
          />
          <h1 className="mt-4 text-4xl leading-[1.15] font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            {mdx.title}
          </h1>
          {mdx.date && (
            <p className="mt-4 text-sm text-ink/50">
              {new Date(mdx.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          {mdx.ogImage && (
            <Image
              src={mdx.ogImage}
              alt={mdx.title}
              width={1347}
              height={677}
              priority
              className="mt-8 w-full rounded-2xl border border-black/5"
            />
          )}
          <div className="mt-10">
            <Markdown md={mdx.body} />
          </div>
        </article>
      </div>
    );
  }

  const d = doc!;

  return (
    // Live blog detail: #faf9f8 page bg fills behind the transparent navbar —
    // -mt/pt pair slides it up behind the 120px nav.
    <div className="-mt-[120px] bg-[#faf9f8] pt-[120px]">
      <article className="mx-auto w-full max-w-[1440px] px-6 pt-[64px] pb-[300px] sm:px-[65px]">
        <ArticleJsonLd
          title={d.title}
          description={d.description}
          slug={d.slug}
          ogImage={d.ogImage}
          date={d.date}
          author={d.author}
          type="blog"
        />
        <div className="mx-auto w-full max-w-[960px]">
          {/* H1 — live: 55px/66px Geist, 919px text centered in the 960px column */}
          <h1 className="text-center font-blog text-[55px] leading-[66px] font-normal tracking-[-1.65px] text-[#060612]">
            {d.title}
          </h1>

          {/* date — live: 14px/16.8px #69686e, centered under H1 (x678 = centered 84px) */}
          <p className="mt-[20px] text-center text-[14px] leading-[16.8px] font-normal tracking-[0.035px] text-[#69686e]">
            {d.dateLabel}
          </p>

          {/* hero — live: 960x640 rounded-8, y422.4 (H1 end 316.6 + 69.6 + date 16.8 + 20) */}
          <span
            className="relative mt-[69.6px] block w-full overflow-hidden rounded-lg"
            style={{ aspectRatio: `${d.hero.w} / ${d.hero.h}` }}
          >
            <Image
              src={d.hero.src}
              alt={d.hero.alt}
              width={d.hero.w}
              height={d.hero.h}
              priority
              unoptimized
              sizes="960px"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </span>

          {/* body — live: 735px column centered (x352.5); Geist face inherits
              to every p/li/td (live Framer preset is set at the article root) */}
          <div className="mx-auto mt-[69px] w-full max-w-[735px] flex flex-col [font-family:var(--font-geist)]">
            <BlogBlocks blocks={d.blocks.filter((b) => b.type !== "h1" && b.type !== "date" && b.type !== "hero-image")} />
          </div>
        </div>

        {/* Other Blogs row — gap from last article block to heading is
            measured per page (228 for ai-shopping-readiness, 160 here) */}
        <div
          className="mx-auto w-full max-w-[1000px]"
          style={{ marginTop: d.otherBlogs.mt ?? 160 }}
        >
          <OtherBlogsRow heading={d.otherBlogs.heading} cards={d.otherBlogs.cards} />
        </div>
      </article>
    </div>
  );
}