import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getCaseStudy } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Case Studies: eCommerce Brands Achieving 25% Conversion Uplift & CAC Reduction",
  description:
    "See how D2C brands use Helium AI personalization to lift conversion rates, cut bounce rates, and grow AOV. Real results from Noise, Lenskart, Akiso, and more.",
  alternates: { canonical: `${SITE.url}/helium-case-studies` },
};

/** Card order as rendered on the live case studies listing page. */
const CARD_ORDER = [
  "noise",
  "w-for-woman",
  "lifelong",
  "akiso",
  "ghar-soaps",
  "sudathi",
  "lenskart",
] as const;

/**
 * Live Framer page ships breakpoint-specific card copy: the mobile/tablet
 * variants use older titles for three cards (desktop uses these in
 * `mobileTitle` position). Keyed by slug.
 */
const MOBILE_TITLES: Record<string, string> = {
  noise: "How Noise Transformed Product Discovery with AI-Powered Personalization",
  "w-for-woman":
    "How W for Woman Personalised Every Digital Touchpoint Using Visitor Intelligence",
  lenskart: "How Lenskart Scaled Photoshoots Without a Single Camera Click",
};

export default function CaseStudiesPage() {
  const studies = CARD_ORDER.map((slug) => getCaseStudy(slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  );

  return (
    <section className="-mt-[120px] bg-[#faf9f8] pt-[120px]">
      <div className="mx-auto w-full max-w-[1024px] px-6 pt-14 pb-24 md:px-0">
        <h1 className="font-display text-[44px] leading-[1.1] font-medium tracking-[-0.05em] text-ink md:text-[56px]">
          Success Stories
        </h1>
        <p className="mt-4 max-w-[640px] text-lg leading-[1.5] text-ink/80">
          Every brand here had a growth problem. Here&apos;s exactly how they
          solved it.
        </p>

        <div className="mt-12 flex flex-col gap-8">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/helium-case-studies/${encodeURIComponent(study.slug)}`}
              className="group flex flex-col overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_0.6px_2.3px_-0.58px_rgba(0,0,0,0.05),0_2.3px_8.7px_-1.17px_rgba(0,0,0,0.06),0_10px_38px_-1.75px_rgba(0,0,0,0.09)] md:h-[391px] md:flex-row md:items-center md:gap-8"
            >
              <div className="flex flex-1 flex-col self-stretch">
                <h2 className="font-display text-[28px] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-2xl">
                  <span className="md:hidden">
                    {MOBILE_TITLES[study.slug] ?? study.title}
                  </span>
                  <span className="hidden md:inline">{study.title}</span>
                </h2>
                <span className="mt-8 inline-flex w-fit items-center justify-center rounded-pill-cta bg-ink px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform duration-300 group-hover:scale-[1.02] md:mt-auto">
                  View case study
                </span>
              </div>
              {study.ogImage && (
                <div className="relative mt-8 aspect-[616/327] w-full overflow-hidden rounded-2xl md:mt-0 md:h-[327px] md:w-[616px] md:max-w-[52%] md:shrink-0">
                  <Image
                    src={study.ogImage}
                    alt={study.title}
                    fill
                    sizes="(min-width: 768px) 616px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}