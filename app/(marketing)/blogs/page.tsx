import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blogs and Guides",
  description:
    "Helium blogs and guides for D2C merchandising, AI personalization, conversion optimization, and eCommerce growth.",
  alternates: { canonical: `${SITE.url}/blogs` },
};

export default function BlogsPage() {
  const posts = getBlogs();
  return (
    // Live /blogs: page-wide #faf9f8 bg fills behind the transparent navbar
    // (html body background) — -mt/pt pair slides it up behind the 120px nav.
    <section className="-mt-[120px] bg-[#faf9f8] pt-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-[30px] pb-24">
      <h1 className="font-display text-4xl leading-[1.15] font-medium tracking-[-0.02em] text-ink sm:text-5xl">
        Blogs and Guides
      </h1>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${encodeURIComponent(post.slug)}`}
            className="group flex flex-col overflow-hidden rounded-[20px] border border-black/[0.06] bg-white transition-shadow hover:shadow-lg"
          >
            {post.ogImage && (
              <Image
                src={post.ogImage}
                alt={post.title}
                width={1347}
                height={677}
                className="aspect-[16/9] w-full object-cover"
              />
            )}
            <div className="flex flex-1 flex-col gap-2 p-6">
              <span className="text-xs font-medium tracking-wide text-[#6236AD] uppercase">
                Guide
              </span>
              <h2 className="text-lg leading-[1.35] font-medium text-ink group-hover:text-[#6236AD]">
                {post.title}
              </h2>
              {post.date && (
                <p className="mt-auto text-sm text-ink/50">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}