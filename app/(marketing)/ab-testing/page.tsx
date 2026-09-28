import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { Reveal } from "@/components/motion/Reveal";
import { RevealSlide } from "@/components/motion/RevealSlide";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import {
  TopBannerBadge,
  CtaPill,
  TrustBar,
  IconPointRow,
  CountUp,
} from "@/components/sections";
import { SectionWrapper } from "@/components/shared";

/* PLACEHOLDER metadata — final SEO copy to be confirmed separately. */
export const metadata: Metadata = {
  title: "Shopify A/B Testing — Experiments that move revenue | Helium",
  description:
    "Run multi-arm experiments on any storefront section or audience segment, with built-in analytics and an agent that reads the results for you.",
  alternates: { canonical: `${SITE.url}/ab-testing` },
};

/* PLACEHOLDER copy — all strings below are provisional, not final marketing copy. */

const HERO = {
  h1: "Run experiments that actually move revenue",
  sub: "Test any storefront section, any audience segment — with an agent that reads the results for you.",
};

const STAT = {
  value: 18,
  label: "lift in conversion from live A/B experiments",
  caption: "Across brands running experiments on their storefront",
};

const CHECKLIST = {
  heading: "What Helium A/B Testing is",
  subline: "An experimentation layer that:",
  points: [
    { icon: "split", text: "Multi-arm experiments, not just A/B" },
    { icon: "chart", text: "Built-in analytics dashboard with test change history" },
    { icon: "shield", text: "Ads-only splits + anti-flicker bucket control" },
  ],
};

/* [PLACEHOLDER] Variant A/B comparison — the page's identity block.
    No dedicated comparison component exists in the design system (flagged
    per handoff), so this is composed in-page from the closest existing
    patterns: the QuoteStatRow purple/black stat cards
    (components/sections/QuoteStatRow.tsx) styled side-by-side, plus the
    VariantCard mock layout mirrors the homepage stat-card arrangement.
    All numbers/copy are placeholders. */
const COMPARISON = {
  eyebrow: "How it works",
  heading: "One test. Every variant judged. Zero spreadsheets.",
  agentChip: "The Experiment Agent",
  agentBody:
    "While the variants run, Helium's agent watches each one and reads the results for you — so testing becomes something that happens, not something you manage.",
  variantA: {
    label: "Variant A",
    name: "Control — current PDP layout",
    value: 18,
    label2: "conversion rate",
    tone: "grey" as const,
  },
  variantB: {
    label: "Variant B",
    name: "Agent-ranked recommendations",
    value: 18,
    label2: "conversion rate",
    tone: "purple" as const,
  },
  winner: "Winner picked automatically when confidence is reached",
};

const CASE_STUDY = {
  eyebrow: "Case Study",
  title: "How Noise transformed product discovery with Helium",
  body: "Noise used Helium to serve tailored shopping experiences to its 1M+ monthly visitors — cutting bounce rates by 30% and boosting conversions by 25%.",
  href: "/helium-case-studies/noise",
  img: "/content/m33laeyQFmvxmIzHjvNo76r485o.webp",
};

function ChecklistIcon({ kind }: { kind: string }) {
  if (kind === "split")
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path
          d="M18 4v28M18 4l-8 5v6M18 4l8 5v6"
          stroke="#6236ad"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (kind === "chart")
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path
          d="M6 30V14m8 16V6m8 24v-12m8 12V10"
          stroke="#6236ad"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path
        d="M18 4l11 5v8c0 7.5-4.7 12.7-11 15-6.3-2.3-11-7.5-11-15V9l11-5z"
        stroke="#6236ad"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M13 18l3.5 3.5L23 15"
        stroke="#6236ad"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AbTestingPage() {
  return (
    <>
      {/* 1. HERO — same pattern as /audience-signals + /attribution hero
          (-mt/pt pair slides the page bg up behind the transparent 120px navbar).
          Staggered HeroReveal choreography (badge → H1 → CTAs → sub), matching
          the homepage hero delays. */}
      <section className="-mt-[120px] bg-paper-2 px-6 pt-[182px] pb-16 text-center sm:px-10">
        <HeroReveal delay={0.2}>
          <TopBannerBadge
            label="Featured among Top AI Startups - TechCrunch, Forbes"
            showLogos={false}
          />
        </HeroReveal>
        <HeroReveal delay={0.5}>
          <h1 className="text-display mx-auto mt-6 max-w-[820px] text-[44px] leading-[1.08] text-grape sm:text-[60px]">
            {HERO.h1}
          </h1>
        </HeroReveal>
        <HeroReveal delay={0.7}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaPill label="Book a demo" variant="dark" size="sm" />
            <CtaPill
              label="Download Shopify App"
              variant="gradient"
              size="sm"
              href="https://apps.shopify.com/helium-marketing-efficiency"
              external
              className="bg-white text-plum shadow-card"
            />
          </div>
        </HeroReveal>
        <HeroReveal delay={0.9}>
          <p className="mx-auto mt-8 max-w-[720px] font-sans text-lg leading-[1.6] text-ink/70">
            {HERO.sub}
          </p>
        </HeroReveal>
      </section>

      {/* 2. LIVE ON REAL BRANDS — TrustBar + LogoMarquee (already a continuous
          CSS ticker — animate-ticker — so the strip itself scrolls; marquee is
          a client component and must not be nested inside a server Reveal).
          NOTE: marquee reuses the shared logo set; per-brand assets for
          Kisah / Nirmalaya / Innovist / Gully Labs / Rini Roy do not exist
          yet — gap flagged, not invented. */}
      <TrustBar label="Live on real brands" className="bg-paper-2">
        <LogoMarquee />
      </TrustBar>

      {/* 3. OUTCOME / STAT — homepage stat-card pattern (glass card +
          gradient value chip), now with CountUp animating on scroll-into-view
          (same counter primitive as /ad-stack outcomes). */}
      <section className="bg-paper-2 px-6 pb-16 sm:px-10">
        <Reveal className="flex justify-center">
          <div className="flex w-full max-w-[298px] flex-col items-center gap-2 rounded-[11px] border-2 border-white bg-white/50 p-6 shadow-glow backdrop-blur-[5px]">
            <span
              className="inline-flex items-center justify-center rounded-[12px] border-2 border-white px-3 py-3 shadow-glow"
              style={{
                background:
                  "linear-gradient(140deg, rgba(204,205,255,0.7) 4%, rgba(235,203,247,0.7) 60.0738%, rgba(166,140,225,0.7) 103%)",
              }}
            >
              <span className="text-display text-[40px] leading-[1em] text-grape">
                <CountUp value={STAT.value} suffix="%" />
              </span>
            </span>
            <div className="mt-1 flex flex-col items-center gap-2">
              <p className="text-display text-center text-[30px] leading-[1em] text-grape">
                {STAT.label}
              </p>
              <p className="text-center font-sans text-[15px] leading-[1.4em] font-light text-lilac">
                {STAT.caption}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. FEATURE CHECKLIST — IconPointRow with stagger per point
          (cols=3 fills the grid evenly — no empty 4th column) */}
      <section className="bg-white px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-[1091px]">
          <Reveal>
            <h2 className="text-display text-display-4 text-center text-[36px] text-ink sm:text-[44px]">
              {CHECKLIST.heading}
            </h2>
            <p className="mt-3 text-center font-sans text-[15px] text-ink/70">
              {CHECKLIST.subline}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <IconPointRow
              stagger
              cols={3}
              points={CHECKLIST.points.map((p) => ({
                icon: <ChecklistIcon kind={p.icon} />,
                text: p.text,
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* 5. VARIANT A/B COMPARISON — the page's distinct block. Composed
          in-page (flagged: no comparison component exists in the design
          system) from the QuoteStatRow purple/black stat-card patterns,
          arranged side-by-side with a VS divider; Variant A slides in from
          the left, Variant B from the right (RevealSlide). */}
      <SectionWrapper tone="white" pt={8} pb={16}>
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center rounded-badge bg-ink px-5 py-2.5 font-sans text-sm font-medium text-white">
              {COMPARISON.eyebrow}
            </span>
            <h2 className="max-w-[800px] text-display text-display-4 text-[32px] leading-[1.2] text-ink sm:text-[40px]">
              {COMPARISON.heading}
            </h2>
          </div>
        </Reveal>
        <div className="relative mx-auto mt-12 grid max-w-[923px] items-stretch gap-6 lg:grid-cols-2">
          {/* Variant A — grey stat card (QuoteStatRow #ededed card tone) */}
          <RevealSlide direction="left">
            <div className="flex h-full flex-col items-center justify-center gap-2 rounded-[16px] bg-[#ededed] px-10 py-12 text-center">
              <span className="inline-flex items-center rounded-badge border border-black/[0.08] bg-white px-4 py-1.5 font-sans text-sm font-semibold text-ink">
                {COMPARISON.variantA.label}
              </span>
              <p className="mt-2 font-sans text-lg text-ink/80">
                {COMPARISON.variantA.name}
              </p>
              <p className="text-display mt-2 text-[64px] leading-[1.1] text-ink">
                <CountUp value={COMPARISON.variantA.value} suffix="%" />
              </p>
              <p className="font-sans text-xl leading-[1.7] font-medium text-ink/80">
                {COMPARISON.variantA.label2}
              </p>
            </div>
          </RevealSlide>
          {/* Variant B — purple stat card (QuoteStatRow #5603c0 card tone) */}
          <RevealSlide direction="right">
            <div className="flex h-full flex-col items-center justify-center gap-2 rounded-[16px] bg-[#5603c0] px-10 py-12 text-center">
              <span className="inline-flex items-center rounded-badge bg-white px-4 py-1.5 font-sans text-sm font-semibold text-ink">
                {COMPARISON.variantB.label}
              </span>
              <p className="mt-2 font-sans text-lg text-white/90">
                {COMPARISON.variantB.name}
              </p>
              <p className="text-display mt-2 text-[64px] leading-[1.1] text-white">
                <CountUp value={COMPARISON.variantB.value} suffix="%" />
              </p>
              <p className="font-sans text-xl leading-[1.7] font-medium text-white/90">
                {COMPARISON.variantB.label2}
              </p>
            </div>
          </RevealSlide>
          {/* VS badge — centered on desktop between the two cards */}
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 z-[2] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[rgba(108,111,118,0.12)] bg-white px-4 py-3 font-geist text-lg font-medium text-ink shadow-card lg:flex"
          >
            vs
          </span>
        </div>
        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 flex max-w-[923px] flex-col items-center gap-6 rounded-panel bg-paper-2 px-6 py-10 text-center sm:px-12">
            <span className="inline-flex items-center rounded-[32px] bg-black px-6 py-2 font-manrope text-xs leading-[1.5] font-extrabold tracking-[1px] text-white uppercase">
              {COMPARISON.agentChip}
            </span>
            <p className="max-w-[640px] font-sans text-lg leading-[1.6] text-ink/70">
              {COMPARISON.agentBody}
            </p>
            <p className="font-micro text-sm font-medium tracking-[0.1px] text-plum">
              {COMPARISON.winner}
            </p>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* 6. CASE-STUDY CALLOUT — single teaser card reusing the
          /helium-case-studies listing card pattern (Link card + dark
          "View case study" pill + ogImage), pointing to the existing
          Noise case study */}
      <section className="bg-paper-2 px-6 py-16 sm:px-10">
        <Reveal>
          <Link
            href={CASE_STUDY.href}
            className="group mx-auto flex max-w-[1024px] flex-col overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_0.6px_2.3px_-0.58px_rgba(0,0,0,0.05),0_2.3px_8.7px_-1.17px_rgba(0,0,0,0.06),0_10px_38px_-1.75px_rgba(0,0,0,0.09)] transition-transform duration-300 hover:scale-[1.01] md:flex-row md:items-center md:gap-8"
          >
            <div className="flex flex-1 flex-col self-stretch">
              <span className="inline-flex w-fit items-center rounded-badge bg-ink px-5 py-2.5 font-sans text-sm font-medium text-white">
                {CASE_STUDY.eyebrow}
              </span>
              <h2 className="mt-6 font-display text-[28px] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-2xl">
                {CASE_STUDY.title}
              </h2>
              <p className="mt-4 max-w-[520px] font-sans text-[15px] leading-[1.6] text-ink/70">
                {CASE_STUDY.body}
              </p>
              <span className="mt-8 inline-flex w-fit items-center justify-center rounded-pill-cta bg-ink px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform duration-300 group-hover:scale-[1.02] md:mt-auto">
                View case study
              </span>
            </div>
            <div className="relative mt-8 aspect-[616/327] w-full overflow-hidden rounded-2xl md:mt-0 md:h-[327px] md:w-[616px] md:max-w-[52%] md:shrink-0">
              <Image
                src={CASE_STUDY.img}
                alt={CASE_STUDY.title}
                fill
                sizes="(min-width: 768px) 616px, 100vw"
                className="object-cover"
              />
            </div>
          </Link>
        </Reveal>
      </section>

      {/* 7. CTA — ad-stack pilot-run pattern: heading + body + dark CtaPill,
          revealed on scroll like every other closing band */}
      <section className="bg-white px-6 pb-20 sm:px-10">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-display text-[32px] text-ink sm:text-[40px]">
            Start running experiments that move revenue
          </h2>
          <p className="max-w-[480px] font-sans text-lg text-ink/75">
            Book a demo and see the Experiment Agent run a live test on your
            storefront.
          </p>
          <CtaPill label="Book a demo" variant="dark" />
        </Reveal>
      </section>
    </>
  );
}