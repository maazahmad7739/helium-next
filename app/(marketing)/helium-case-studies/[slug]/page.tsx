import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { Markdown } from "@/components/Markdown";
import { ArticleJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getCaseStudies().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/helium-case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const doc = getCaseStudy(slug);
  if (!doc) return { title: "Case study not found" };
  const seoTitle = doc.seoTitle ?? doc.title;
  return {
    title: seoTitle,
    description: doc.description,
    alternates: { canonical: `/helium-case-studies/${encodeURIComponent(doc.slug)}` },
    openGraph: {
      title: seoTitle,
      description: doc.description,
      url: `${SITE.url}/helium-case-studies/${encodeURIComponent(doc.slug)}`,
      type: "article",
      images: doc.ogImage ? [{ url: doc.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: doc.description,
      images: doc.ogImage ? [doc.ogImage] : undefined,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/helium-case-studies/[slug]">) {
  const { slug } = await params;
  const doc = getCaseStudy(slug);
  if (!doc) notFound();

  const h1 = doc.h1 ?? doc.title;
  const seoTitle = doc.seoTitle ?? doc.title;
  const h1Class =
    doc.h1Class ??
    "mx-auto mt-6 max-w-[900px] text-center font-display text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] text-ink sm:text-[64px]";

  return (
    // Live case-study detail: white page bg fills behind the transparent
    // navbar (html body background rgb(255,255,255)) — -mt/pt pair slides
    // it up behind the 120px nav. Case-study pages are designed layouts:
    // wide container, centered Poppins H1, no ogImage hero (matches live).
    <div className="-mt-[120px] bg-white pt-[120px]">
      <article className="mx-auto w-full max-w-[1200px] px-6 pt-[30px] pb-0">
      <ArticleJsonLd
        title={doc.title}
        description={doc.description}
        slug={doc.slug}
        ogImage={doc.ogImage}
        date={doc.date}
        author={doc.author}
        type="case-study"
      />
      <Link
        href="/helium-case-studies"
        className="sr-only"
        aria-hidden={false}
      >
        â† All case studies
      </Link>
      <h1 className={h1Class}>{h1}</h1>
      <div className="mt-4">
        <Markdown md={doc.body} dense={doc.dense === true} />
      </div>
      </article>
    </div>
  );
}