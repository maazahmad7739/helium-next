import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATALOG } from "@/lib/catalog-data";
import { SITE } from "@/lib/site";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import {
  SectionWrapper,
  ReportingCardStack,
  DashCrossfade,
  SystemTabs,
} from "@/components/shared";
import { CountUp, TrustBar } from "@/components/sections";
import { LogoMarquee } from "@/components/home/LogoMarquee";

export const metadata: Metadata = {
  title: CATALOG.meta.title,
  description: CATALOG.meta.description,
  alternates: { canonical: `${SITE.url}${CATALOG.meta.canonical}` },
};

const reportingCards = CATALOG.reportingCards.map((c) => ({
  title: c.title,
  image: c.image,
  points: c.points,
}));

export default function CatalogOptimizationPage() {
  return (
    <>
      {/* TOP BANNER — live hero badge: white pill, 1.5px #222 border, 100px radius,
          dual shadows, 14px Inter 500 text (reference.md.txt "Variant 9") */}
      {/* -mt/pt pair slides the page's paper-2 top band up behind the
          transparent navbar so the nav strip matches the page background. */}
      <div className="-mt-[120px] bg-paper-2 pt-[120px]">
        <SectionWrapper tone="paper" width="narrow" pt={15} pb={6} reveal={false}>
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-badge border-[1.5px] border-[#222222] bg-[#fafafa] px-6 py-2.5 shadow-[rgba(0,0,0,0.14)_0px_4px_16px_0px,rgba(255,255,255,0.06)_0px_2px_4px_0px_inset]">
              <span className="font-sans text-sm leading-[1.7] font-medium text-[#181818]">
                {CATALOG.topBanner}
              </span>
            </span>
          </div>
        </SectionWrapper>
      </div>

      {/* HERO — live: 47px Poppins 500 indigo H1, gradient CTA + white Shopify pill,
          DM Sans 20px #46484D subcopy (reference.md.txt) */}
      <section className="relative overflow-x-clip bg-paper-2 px-6 pt-[30px] pb-20 sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-200px] left-1/2 h-[500px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-[110px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(98,54,173,0.35), rgba(0,207,148,0.15), transparent)",
          }}
        />
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          <HeroReveal delay={0.2}>
            <h1 className="text-display text-[36px] leading-[1.1] text-[#400478] sm:text-[47px]">
              {CATALOG.hero.h1}
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.5}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              {/* Primary: live gradient pill with blurred glow behind + near-black
                  inner pill (linear-gradient white -51% → #100202); 14px label */}
              <a
                href={CATALOG.hero.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={CATALOG.hero.primaryCta}
                className="relative inline-flex items-center justify-center rounded-badge bg-[linear-gradient(90deg,rgb(33,204,238)_0%,rgb(20,112,239)_33.2763%,rgb(105,39,218)_68.4697%,rgb(242,61,148)_100%)] p-[3px] transition-transform duration-300 hover:scale-[1.02]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[135px] bg-[linear-gradient(90deg,rgb(33,204,238)_0%,rgb(20,112,239)_33.2763%,rgb(105,39,218)_68.4697%,rgb(242,61,148)_100%)] opacity-60 blur-[17px]"
                />
                <span className="relative inline-flex items-center justify-center rounded-badge bg-[linear-gradient(rgb(255,255,255)_-51%,rgb(16,2,2)_18%,rgb(16,2,2)_132%)] px-6 py-2.5">
                  <span className="font-sans text-sm leading-[1.7] font-medium text-white">
                    {CATALOG.hero.primaryCta}
                  </span>
                </span>
              </a>
              {/* Secondary: live white pill with cloud-download icon, 14px #181818 */}
              <a
                href={CATALOG.hero.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={CATALOG.hero.secondaryCta}
                className="inline-flex items-center justify-center gap-2 rounded-badge bg-[#fafafa] px-6 py-2.5 shadow-chip transition-transform duration-300 hover:scale-[1.02]"
              >
                <svg
                  aria-hidden
                  width="15"
                  height="16"
                  viewBox="0 0 38 40"
                  fill="none"
                  className="opacity-67"
                >
                  <path
                    d="M31 16.5a11 11 0 0 0-21.6-2.6A8.5 8.5 0 0 0 10.5 31H30a7.5 7.5 0 0 0 1-14.5ZM19 17v12m0 0 5-5m-5 5-5-5"
                    stroke="#181818"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-sans text-sm leading-[1.7] font-medium text-[#181818]">
                  {CATALOG.hero.secondaryCta}
                </span>
              </a>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.9}>
            <p className="mt-8 font-badge text-[20px] leading-[1.5] text-[#46484d]">
              {CATALOG.hero.body}
            </p>
          </HeroReveal>
        </div>
      </section>

      {/* TRUSTED BY — live: plum line + logo marquee (same TrustBar as
          /ad-stack, /merchandising), sits between the hero and the panel */}
      <TrustBar label={CATALOG.trustedBy} className="bg-paper-2">
        <LogoMarquee />
      </TrustBar>

      {/* HERO PANEL — reference2.md.txt "Hero Section": near-full-bleed
          gradient panel (25px radius, dark indigo → violet → pink, 10px side
          margins) with Geist 64px white two-line title, Inter 23px/17px
          white copy, gradient CTA pill → /contact, and the Catalog
          product-grid visual on the right */}
      <section className="relative bg-white px-2.5 py-10">
        <div className="bg-catalog-panel relative overflow-hidden rounded-[25px]">
          {/* Live content row: 1021px container, text 476px + image 537px,
              ~60px gap, both columns vertically centered */}
          <div className="relative z-[2] mx-auto flex max-w-[1021px] flex-col items-stretch justify-center gap-10 px-6 pt-16 pb-16 sm:px-10 lg:flex-row lg:items-center lg:gap-[60px] lg:py-[65px]">
            {/* Copy column — left-aligned 476px text block, 24px stack gap */}
            <Reveal className="flex flex-1 flex-col items-start justify-center gap-6">
              <h2 className="font-geist text-[54px] leading-[1.1] font-medium tracking-[-3.5px] text-white sm:text-[56px] lg:text-[64px]">
                {CATALOG.heroPanel.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <div className="flex flex-col gap-1">
                <p className="font-sans text-[19px] leading-[1.5] font-semibold text-white sm:text-[23px]">
                  {CATALOG.heroPanel.lead}
                </p>
                <p className="font-sans text-[15px] leading-[1.5] text-white sm:text-[17px]">
                  {CATALOG.heroPanel.body}
                </p>
              </div>
              {/* Live CTA: gradient pill + blurred glow behind + near-black
                  inner pill; 14px Inter 500 label */}
              <Link
                href={CATALOG.heroPanel.ctaHref}
                aria-label={CATALOG.heroPanel.cta}
                className="bg-catalog-cta relative mt-2 inline-flex items-center justify-center rounded-badge p-[3px] transition-transform duration-300 hover:scale-[1.02]"
              >
                <span
                  aria-hidden
                  className="bg-catalog-cta pointer-events-none absolute inset-0 rounded-[135px] blur-[17px]"
                />
                <span className="relative inline-flex items-center justify-center rounded-badge bg-[linear-gradient(rgb(255,255,255)_-51%,rgb(16,2,2)_18%,rgb(16,2,2)_132%)] px-5 py-2.5">
                  <span className="font-sans text-sm leading-[1.7] font-medium text-white">
                    {CATALOG.heroPanel.cta}
                  </span>
                </span>
              </Link>
            </Reveal>
            {/* Visual column — live "Catalog" product-grid image (537px
                column), aspect-ratio contained per task.md §2 */}
            <Reveal delay={0.1} className="w-full shrink-0 lg:w-[537px]">
              <div className="relative aspect-[1346/1280] w-full overflow-hidden">
                <Image
                  src={CATALOG.heroPanel.image.src}
                  alt={CATALOG.heroPanel.image.alt}
                  width={CATALOG.heroPanel.image.width}
                  height={CATALOG.heroPanel.image.height}
                  sizes="(min-width: 1024px) 537px, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISMATCH / REPORTING — live "Reporting Section": 44px #181818 H2
          (Geist, -3px), 18px #46484d body, then the big Catalog Manager
          dashboard inside a #fafafa rounded panel (image clipped at the
          panel bottom, 74px side / 55px top padding) */}
      <section className="bg-white px-6 pb-8 pt-16 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-[1060px] text-center">
            <h2 className="text-display text-tight text-[32px] leading-[1.2] text-[#181818] sm:text-[44px]">
              {CATALOG.mismatch.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-[750px] text-center font-sans text-lg leading-[1.7] text-[#46484d]">
              {CATALOG.mismatch.body}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-[1060px] overflow-hidden rounded-[16px] bg-[#fafafa] px-6 pb-0 pt-10 sm:px-[74px] sm:pt-[55px]">
            <DashCrossfade images={CATALOG.mismatch.dashImages} />
          </div>
        </Reveal>
      </section>

      {/* CARD LIST — five uniform "Reporting Card" blocks (live template) */}
      <section className="bg-white px-6 py-16 sm:px-10">
        <ReportingCardStack className="mx-auto max-w-[1060px]" cards={reportingCards} />
      </section>

      {/* METRIC BANNER — static dark pill (not a link on the live site) */}
      <SectionWrapper tone="white" pb={16} reveal={false}>
        <Reveal className="flex justify-center">
          <p className="inline-flex w-full max-w-[420px] items-center justify-center rounded-pill-cta bg-ink px-7 py-[15px] text-center font-sans text-lg font-medium text-white shadow-glow">
            {CATALOG.metricBanner}
          </p>
        </Reveal>
      </SectionWrapper>

      {/* THE SYSTEM — live interactive tab panel (tabs left / visual right) */}
      <SectionWrapper tone="paper" pt={16} pb={16}>
        <SystemTabs
          eyebrow={CATALOG.system.eyebrow}
          heading={CATALOG.system.heading}
          tabs={CATALOG.system.tabs}
          image={CATALOG.system.image}
          cta={CATALOG.system.cta}
        />
      </SectionWrapper>

      {/* RESULTS — live section: 44px #181818 Geist H2, 19px Inter body, then
          a two-card row (purple stat card #5603C0 + black quote card #181818,
          16px radius) above three takeaway chips (#181818 / #EDEDED / white,
          10px radius). Cards row is 923px content centered in the 1060px col. */}
      <section className="bg-white px-6 pb-20 pt-10 sm:px-[30px] sm:pb-[120px]">
        <Reveal>
          <div className="mx-auto flex max-w-[1060px] flex-col items-center gap-[15px]">
            <h2 className="font-geist text-[32px] leading-[1.2] font-medium text-[#181818] sm:text-[44px] sm:tracking-[-3px]">
              {CATALOG.results.heading}
            </h2>
            <p className="max-w-[915px] text-center font-sans text-[19px] leading-[1.7] font-medium text-[#181818]">
              {CATALOG.results.body}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          {/* Top: purple metric card + black quote card (grid collapses to a
              stack on mobile — no fixed heights, gap-6 drives spacing).
              Live: 268px stat card + 24px gap + 631px quote card = 923px */}
          <div className="mx-auto mt-4 grid max-w-[923px] gap-6 sm:grid-cols-[268px_1fr]">
            {/* Metric card — live #5603C0, 16px radius, 72px/56px padding */}
            <div className="flex min-h-[290px] flex-col justify-center items-start gap-2 rounded-[16px] bg-[#5603C0] px-8 py-12 sm:px-14">
              <div className="flex flex-row items-center gap-1">
                <CountUp
                  value={20}
                  className="font-geist text-[64px] leading-[1.1] font-medium tracking-[-3.5px] text-white"
                />
                <span className="font-geist text-[64px] leading-[1.1] font-medium tracking-[-3.5px] text-white">
                  %
                </span>
              </div>
              <p className="font-display text-[20px] leading-[1.7] font-medium text-white">
                {CATALOG.results.metric.label}
              </p>
            </div>
            {/* Quote card — live #181818, 16px radius, 40px pad / 28px vert,
                60px gap between quote and author */}
            <div className="flex flex-col justify-center items-start gap-[60px] rounded-[16px] bg-[#181818] px-10 py-7">
              <blockquote className="max-w-[551px] font-sans text-[18px] leading-[1.7] font-medium text-white">
                “{CATALOG.results.quote.text}”
              </blockquote>
              <figure className="flex items-center gap-3">
                <Image
                  src="/content/Cq9nVGE8GeOYqBX2nwj2JWIXM.png"
                  alt={CATALOG.results.quote.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <figcaption>
                  <p className="font-sans text-base leading-[1.7] font-medium text-white">
                    {CATALOG.results.quote.name}
                  </p>
                  <p className="font-sans text-sm leading-[1.7] text-white/60">
                    {CATALOG.results.quote.role}
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          {/* Bottom: three takeaway chips — live bg order #181818 / #EDEDED /
              white, 10px radius, centered Poppins 16px text.
              Live: three 292px chips, 24px gap = 924px total */}
          <div className="mx-auto mt-4 grid max-w-[924px] gap-6 sm:grid-cols-3">
            {CATALOG.results.takeaways.map((text, i) => (
              <RevealItem key={text}>
                <div
                  className={`flex min-h-[130px] items-center justify-center rounded-[10px] px-5 ${
                    i === 0
                      ? "bg-[#181818] text-white"
                      : i === 1
                        ? "bg-[#EDEDED] text-[#181818]"
                        : "bg-white text-[#181818]"
                  }`}
                >
                  <p className="max-w-[201px] text-center font-display text-base leading-[1.5] font-medium">
                    {text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}