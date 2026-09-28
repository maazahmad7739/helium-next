import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import {
  TrustBar,
  IconPointRow,
  CaseStudySplit,
  CtaPill,
} from "@/components/sections";
import { MetricStatBand } from "@/components/shared";
import { MediaShowcaseFrame } from "@/components/shared/MediaShowcaseFrame";
import { Reveal } from "@/components/motion/Reveal";
import { LogoMarquee } from "@/components/home/LogoMarquee";

export const metadata: Metadata = {
  // [PLACEHOLDER] final copy to be confirmed separately
  title: "Contextual Landing Pages — Shopify landing page automation | Helium",
  description:
    "[PLACEHOLDER] Helium Contextual Landing Pages: campaign, season, and collection landing pages shipped as a repeatable pipeline — strategy, design, build, and QC with A/B tests wired in from day one.",
  alternates: { canonical: `${SITE.url}/contextual-landing-pages` },
};

/* [PLACEHOLDER] showcase items — real shipped-page screenshots to replace
   the placeholder dashboard images. No dedicated gallery/showcase-grid
   component exists in the codebase (see handoff notes), so this block is
   composed in-page from the shared MediaShowcaseFrame primitive. */
const SHOWCASE = [
  {
    brand: 'House of Rare — "Rare Axis"',
    src: "/content/ad-stack/BHgHhHvRh05F8Iygtao1XVbQ3o.png",
    alt: "[PLACEHOLDER] House of Rare Rare Axis landing page screenshot",
  },
  {
    brand: 'Nirmalaya — "Dhoop"',
    src: "/content/ad-stack/rHsgYNrGV2nQEPqCx4hfCL9iMIM.png",
    alt: "[PLACEHOLDER] Nirmalaya Dhoop landing page screenshot",
  },
  {
    brand: "Gully Labs — seasonal pages",
    src: "/content/ad-stack/SGNNNlXp3bjQ7TMTOEFTEFRCog.png",
    alt: "[PLACEHOLDER] Gully Labs seasonal landing page screenshot",
  },
];

export default function ContextualLandingPagesPage() {
  return (
    <>
      {/* 1. HERO — same pattern as /attribution + /audience-signals heroes */}
      <section className="-mt-[120px] bg-paper-2 px-6 pt-[182px] pb-16 text-center sm:px-10">
        <h1 className="text-display mx-auto mt-6 max-w-[820px] text-[44px] leading-[1.08] text-grape sm:text-[60px]">
          {/* [PLACEHOLDER] */}
          Landing pages for every campaign, without the build queue
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaPill label="Book a demo" variant="dark" size="sm" />
        </div>
        <p className="mx-auto mt-8 max-w-[720px] font-sans text-lg leading-[1.6] text-ink/70">
          {/* [PLACEHOLDER] */}
          Strategy, design, build, and QC — as a repeatable pipeline, with A/B
          tests wired in from day one.
        </p>
      </section>

      {/* 2. OUTCOME / STAT BLOCK — shared MetricStatBand (same stat-card
          pattern as /ad-stack outcomes, /catalog results, /pulse) */}
      <MetricStatBand
        items={[
          {
            // [PLACEHOLDER]
            display: "X pages",
            label: "shipped across Y brands this quarter",
            caption: "[PLACEHOLDER] stat to be confirmed",
          },
        ]}
      />

      {/* 3. FEATURE CHECKLIST — shared IconPointRow (same 3-icon checklist
          pattern as /attribution "What Helium Attribution is") */}
      <section className="bg-white px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-[1091px]">
          <Reveal>
            <h2 className="text-display text-display-4 text-center text-[36px] text-ink sm:text-[44px]">
              What Helium Contextual Landing Pages is
            </h2>
            {/* [PLACEHOLDER] subline copy */}
            <p className="mt-3 text-center font-sans text-[15px] text-ink/70">
              Every campaign gets its own page, without the queue:
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <IconPointRow
              points={[
                {
                  icon: <PageIcon />,
                  // [PLACEHOLDER]
                  text: "Campaign, season & collection pages generated automatically.",
                },
                {
                  icon: <CheckIcon />,
                  text: "Built-in QC checklist before every page goes live.",
                },
                {
                  icon: <AbTestIcon />,
                  text: "A/B tests wired into every landing page by default.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* 4. PROOF / SHOWCASE — composed from the shared MediaShowcaseFrame.
          [GAP] No dedicated gallery / showcase-grid component exists on the
          site (PulseScreenshotDeck is /pulse-specific, a stacked deck, not a
          grid). This in-page grid is a stopgap, not a new shared component. */}
      <section className="bg-paper-2 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[1091px]">
          <Reveal>
            <h2 className="text-display text-display-4 text-center text-[36px] text-grape-deep sm:text-[44px]">
              {/* [PLACEHOLDER] */}
              Live on real storefronts
            </h2>
            <p className="mx-auto mt-3 max-w-[720px] text-center font-sans text-[15px] text-ink/70">
              {/* [PLACEHOLDER] */}
              Real pages, shipped and live — not mockups.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWCASE.map((item) => (
              <figure key={item.brand} className="flex flex-col gap-4">
                <MediaShowcaseFrame aspect="1346 / 1280" radius="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </MediaShowcaseFrame>
                <figcaption className="text-center font-sans text-base font-medium text-ink">
                  {item.brand}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 5. "LIVE ON REAL BRANDS" STRIP — shared TrustBar + LogoMarquee
          (same brand-logo pattern as every other product page) */}
      <TrustBar
        label="Live on Nirmalaya, Gully Labs, House of Rare, Pebble, Fraghill, Akiso, Neosapien, Kisah, Honasa"
        className="bg-paper-2"
      >
        <LogoMarquee />
      </TrustBar>

      {/* 6. CASE-STUDY CALLOUT — shared CaseStudySplit (same teaser pattern
          as /audience-signals + /attribution). Nirmalaya metrics story
          featured because the component's stat pairs suit the live 20/80
          test results; House of Rare scale story swapped in later. */}
      <CaseStudySplit
        heading="Nirmalaya ran a live 20/80 test"
        // [PLACEHOLDER] copy + real brand logo/photo assets
        brandSrc="/content/ad-stack/GTwqA3CXVZTkCg9p0cVsWQVI7M.png"
        quote="[PLACEHOLDER] Nirmalaya quote about the 20/80 landing-page A/B test results."
        name="Nirmalaya"
        role="D2C brand"
        stats={[
          { value: "20/80", label: "[PLACEHOLDER] test split" },
          { value: "+X%", label: "[PLACEHOLDER] uplift metric" },
        ]}
        photoSrc="/content/ad-stack/v0KrPOVp9cmrKOpBwOLEdmwzmZE.jpg"
        ctaLabel="Read the case study"
        ctaHref="/helium-case-studies"
      />

      {/* 7. CTA — shared CtaPill band (same closing CTA as /attribution) */}
      <section className="bg-white px-6 pb-20 pt-4 sm:px-10">
        <Reveal className="flex justify-center">
          <CtaPill label="Book a demo" variant="dark" />
        </Reveal>
      </section>
    </>
  );
}

function PageIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#6236ad" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 4h14l6 6v22H8V4z" />
      <path d="M22 4v6h6M14 18h8M14 24h8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <path d="M6 19l8 8L30 9" stroke="#6236ad" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function AbTestIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#6236ad" strokeWidth="3" aria-hidden>
      <circle cx="12" cy="18" r="8" />
      <circle cx="24" cy="18" r="8" />
    </svg>
  );
}