import Image from "next/image";
import Link from "next/link";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { FooterCta } from "@/components/FooterCta";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { ComparisonTabs } from "@/components/home/ComparisonTabs";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { IndustryCarousel } from "@/components/home/IndustryCarousel";
import { RotatingWord } from "@/components/home/RotatingWord";
import { TransformScrollCards } from "@/components/home/TransformScrollCards";
import { HeliumAIVisual } from "@/components/home/HeliumAIVisual";
import { AgenticPlatform } from "@/components/home/AgenticPlatform";
import { HowItWorks } from "@/components/home/HowItWorks";
import Globe from "@/components/home/Globe";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { HeroVideoFacade } from "@/components/home/HeroVideoFacade";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";
import {
  HERO,
  STATS,
  INDUSTRY_HEADING,
  INDUSTRY_CASES,
  HELIUM_AI,
  TRANSFORM,
  TESTIMONIALS,
  BLOG_HIGHLIGHT,
  GLOBE_SECTION,
} from "@/lib/home-data";

const STAR_LINE_DECOR = "/content/QMirkdl4WPEe5bmSFhvVcssWj4.svg" as const;

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* ================= HERO =================
          Live geometry (gethelium.co, .framer-1cz9q6b):
          Content col: fixed height 485px (≥1201) / 424 (810–1200) / 364 (≤809),
          flex column, justify-center, gap 8px (15px mobile) — the badge row,
          H1, sub-row and buttons are CENTERED inside it, which is what puts
          ~109px of air between the navbar and the badge (icons float at
          top:-36/-29 above the pill, fully visible).
          H1: Poppins 500, 80px ≥1201 / 60px 810–1200 / 36px ≤809, -0.05em.
          Sub-row .framer-1m95fsc: py 21px (15px mobile), 22px text.
          Buttons .framer-1gcplo2-container: 44px tall, gap 20px.
          Video preview lives OUTSIDE the centered column (v2bow3, gap 42px
          only on 810–1200). No vertical clipping: the F/TC tiles and the top
          glow must extend above the section edge, behind the transparent
          navbar (live nav = sticky + blur(8px), no background). */}
      <section className="relative overflow-x-clip px-6 pb-[50px] sm:px-10">
        {/* Live "Gradients" layer (reference2.md.txt): masked canvas + 3 radial
            glows — lavender bottom-left, pink right, lilac top-center */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-[119px] bottom-0 [mask-image:linear-gradient(#000_75%,transparent_100%)]"
        >
          <div
            className="absolute bottom-[505px] left-0 h-[996px] w-[996px] -translate-x-1/2 opacity-70"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(208,208,255,0.5) 49.0428%, transparent 100%)",
            }}
          />
          <div
            className="absolute bottom-[273px] left-[110%] h-[1124px] w-[1124px] -translate-x-1/2 opacity-70"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(236,216,243,1) 49.0428%, transparent 100%)",
            }}
          />
          <div
            className="absolute -top-[57px] left-1/2 h-[992px] w-[992px] -translate-x-1/2 opacity-70"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(170,143,228,0.2) 49.0428%, transparent 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto flex h-[485px] max-w-[1091px] flex-col items-center justify-center gap-2 text-center max-[1200px]:h-[424px] max-[809px]:h-[364px] max-[809px]:gap-[15px]">
          <HeroReveal delay={0.2}>
            {/* Live "Highlight Tag": glass pill + green highlighter chip + gradient title.
                Forbes/TC icons: absolute 34px rounded-8 tiles above the pill (top:-36/-29), each links to its article. */}
            <div className="relative inline-flex items-center gap-2.5 rounded-[10px] border border-white/5 bg-white/[0.32] py-2 pr-4 pl-2.5 shadow-chip backdrop-blur-[2.5px]">
              <Link
                href={HERO.badge.forbesUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Forbes profile"
                className="absolute top-[-36px] right-[54px] hidden h-[34px] w-[34px] overflow-hidden rounded-[8px] shadow-[0_1px_10px_rgba(0,0,0,0.1)] min-[1201px]:block"
              >
                <Image src={HERO.badge.forbesImg} alt="Forbes" width={34} height={34} className="h-full w-full object-cover" />
              </Link>
              <Link
                href={HERO.badge.techcrunchUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TechCrunch article"
                className="absolute top-[-29px] right-[-2px] hidden h-[34px] w-[34px] overflow-hidden rounded-[8px] shadow-[0_1px_10px_rgba(0,0,0,0.1)] min-[1201px]:block"
              >
                <Image src={HERO.badge.tcImg} alt="TechCrunch" width={34} height={34} className="h-full w-full object-cover" />
              </Link>
              <span aria-hidden className="h-[10px] w-[22px] rounded-md border-2 border-white/15 bg-[#00c220]" />
              <p className="bg-[linear-gradient(90deg,#000000_0%,rgba(153,153,153,0.77)_350%)] bg-clip-text font-badge text-[16px] leading-[26px] tracking-[-0.5px] text-transparent">
                {HERO.badge.text}
              </p>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.2}>
            {/* Live H1 (.framer-cal8px / .framer-imiyk5 / .framer-1bsbyxp):
                Poppins 500, -0.05em, 1em leading, grape. Each breakpoint
                variant has a FIXED width that forces "Agents" to wrap onto
                its own line: 80px→754px (≥1201) / 60px→563px (810–1200) /
                36px→333px (≤809). */}
            <h1 className="text-display mx-auto w-[333px] text-[36px] text-grape min-[810px]:w-[563px] min-[810px]:text-[60px] min-[1201px]:w-[754px] min-[1201px]:text-[80px]">
              {HERO.h1a} {HERO.h1b}
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.9}>
            {/* Live subtext (.framer-1m95fsc py 21px): 22px, -0.01em, 1.3em leading, #483953 */}
            <p className="py-[21px] font-sans text-[18px] leading-[1.3] tracking-[-0.01em] text-grape-soft max-[809px]:py-[15px] sm:text-[22px]">
              {HERO.enable} <RotatingWord />
            </p>
          </HeroReveal>

          <HeroReveal delay={0.9}>
            {/* Live buttons (.framer-1lardf9): 44px pills, gap 20px.
                Primary: purple gradient + white circle with arrow icon.
                Tertiary: lilac text on white. */}
            <div className="flex flex-wrap items-center justify-center gap-5">
              <MotionLink
                href="/contact"
                className="bg-cta inline-flex h-[52px] items-center justify-center gap-3 rounded-pill-cta py-[2px] pr-[2px] pl-5 font-sans text-lg font-medium text-white"
                ariaLabel="Get Started"
              >
                Get Started
                <span
                  aria-hidden
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[linear-gradient(140deg,rgba(246,239,249,0.8)_0%,rgba(246,239,249,0.8)_100%)]"
                >
                  <svg width="15" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
                      stroke="#52329d"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </MotionLink>
              <MotionLink
                href="/helium-case-studies"
                className="inline-flex h-[52px] items-center justify-center rounded-pill-cta border-2 border-white bg-white/50 px-5 font-sans text-lg font-medium text-lilac"
                ariaLabel="Learn how"
              >
                Learn how
              </MotionLink>
            </div>
          </HeroReveal>
        </div>

        {/* Video preview lives OUTSIDE the centered 485px column (live:
            .framer-m7aat3 gap 31px below .framer-1cz9q6b). */}
        <HeroReveal delay={0.9} className="w-full">
          {/* Live preview frame (reference2.md.txt): 847Ã—476 glass stack â€”
              outer border (white/10) + inner preview (radius 7, border white/5)
              + 61px glass play chip (blur 7.5px) + 200px star-line at top-left.
              HeroReveal must be w-full: flex parent is items-center, so the motion
              wrapper otherwise shrink-wraps and the facade collapses to 0 height. */}
          <div className="relative z-10 mx-auto mt-[31px] aspect-[847/476] w-full max-w-[847px] overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(153,153,153,0.06)_100%)] p-[5px] shadow-card backdrop-blur-[2px]">
            <div className="relative h-full w-full overflow-hidden rounded-[7px]">
              <Image
                src={STAR_LINE_DECOR}
                alt=""
                aria-hidden
                width={200}
                height={201}
                className="pointer-events-none absolute top-[-99px] left-[-100px] opacity-100"
                style={{ width: 200, height: 201 }}
              />
              <HeroVideoFacade videoId="sNh33OSQIuY" />
            </div>
          </div>
        </HeroReveal>
      </section>

      {/* ================= LOGOS + STATS ================= */}
      <section className="bg-white py-16 sm:py-20">
        <Reveal>
          <h2 className="text-display text-center text-lg text-black">
            <span className="font-light">Powering </span>
            <strong className="font-medium">some of the </strong>
            biggest eCommerce brands
          </h2>
        </Reveal>
        <div className="mt-8">
          <LogoMarquee />
        </div>
        {/* Live stats (gethelium.co .framer-1s2nzgn): 3 glass cards in a 960px
            row, gap 32 — white/50 blur-5 card, 2px white border, radius 11,
            glow shadow; gradient value chip (radius 12); Poppins 40px value,
            30px label; 15px lilac caption. */}
        <RevealGroup className="mx-auto mt-10 flex w-full max-w-[960px] flex-col items-center gap-10 px-6 sm:flex-row sm:justify-center sm:gap-8 sm:px-0">
          {STATS.map((s) => (
            <RevealItem
              key={s.label}
              className="flex w-full flex-col items-center gap-2 rounded-[11px] border-2 border-white bg-white/50 p-6 shadow-glow backdrop-blur-[5px] sm:max-w-[298px]"
            >
              <span
                className="inline-flex items-center justify-center rounded-[12px] border-2 border-white px-3 py-3 shadow-glow"
                style={{
                  background:
                    "linear-gradient(140deg, rgba(204,205,255,0.7) 4%, rgba(235,203,247,0.7) 60.0738%, rgba(166,140,225,0.7) 103%)",
                }}
              >
                <span className="text-display text-[40px] leading-[1em] text-grape">{s.value}</span>
              </span>
              <div className="mt-1 flex flex-col items-center gap-2">
                <p className="text-display text-center text-[30px] leading-[1em] text-grape">{s.label}</p>
                <p className="text-center font-sans text-[15px] leading-[1.4em] font-light text-lilac">{s.caption}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ================= COMPARISON / TABS ================= */}
      <section className="bg-[#faf7f254] py-16 sm:py-20">
        <Reveal>
          <h2 className="text-display text-display-4 text-center text-[32px] text-grape-deep">
            Growth solutions built to move revenue.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-[84px] px-6">
          <ComparisonTabs />
        </Reveal>
      </section>

      {/* ==== INDUSTRY CASE STUDIES + HELIUM AI + TRANSFORM (merged purple band, reference3.md.txt) ====
          Live geometry: outer band gradient #311d52â†’#24143dâ†’#48287a with 20px top corners;
          heading 42px Poppins 500 -0.04em white centered; case card bg rgba(0,0,0,0.1)
          radius 20 inside 1200px shell (padding 0 30px â†’ 1120 inner). */}
      <section className="relative rounded-t-[20px] bg-[linear-gradient(180deg,#311D52_0%,#24143D_61.4%,#48287A_100%)] px-6 py-20 sm:px-[30px]">
        {/* Industry case studies: full-bleed, shares the HELIUM AI band gradient */}
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <h2 className="text-display text-display-4 mx-auto max-w-[760px] text-center text-[36px] leading-[1em] font-medium text-white sm:text-[42px]">
              {INDUSTRY_HEADING}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-16">
            <IndustryCarousel cases={INDUSTRY_CASES} />
          </Reveal>
        </div>

        {/* HELIUM AI explainer */}
        <div className="mt-28 text-center">
          <p className="font-sans text-lg font-medium text-white/80">{HELIUM_AI.intro}</p>
          <Reveal y={30}>
            <p className="text-display text-hero-gradient text-[clamp(64px,14vw,288px)] font-light">
              {HELIUM_AI.giant}
            </p>
          </Reveal>
          <RevealGroup className="mx-auto mt-20 flex max-w-[1000px] flex-col gap-24">
            {HELIUM_AI.rows.map((row) => (
              <RevealItem key={row.kicker} y={25}>
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-20">
                  {row.imgSide === "left" && (
                    <div className="w-full lg:w-1/2">
                      {row.video ? (
                        <video
                          src={row.video}
                          poster={row.poster}
                          loop
                          muted
                          playsInline
                          autoPlay
                          preload="none"
                          className="aspect-[1.2] w-full rounded-[20px] object-cover"
                        />
                      ) : row.kicker === "Visitor intelligence" ? (
                        <HeliumAIVisual />
                      ) : (
                        <Image
                          src={row.img!}
                          alt={row.kicker}
                          width={810}
                          height={424}
                          className="w-full rounded-[20px]"
                        />
                      )}
                    </div>
                  )}
                  <div className="w-full text-center lg:w-1/2">
                    <span className="inline-flex items-center justify-center rounded-full bg-[#131314] px-6 py-2.5 font-sans text-lg font-normal text-white">
                      {row.kicker}
                    </span>
                    <h2 className="mt-5 text-display text-display-4 text-[30px] font-normal text-white">
                      {row.h}
                    </h2>
                    <p className="mx-auto mt-3 max-w-[420px] font-sans text-lg leading-[1.6] text-white/90">
                      {row.pStrong ? (
                        <>
                          {row.p.split(row.pStrong)[0]}
                          <strong className="font-display font-bold text-white">{row.pStrong}</strong>
                          {row.p.split(row.pStrong)[1]}
                        </>
                      ) : (
                        row.p
                      )}
                    </p>
                  </div>
                  {row.imgSide === "right" && (
                    <div className="w-full lg:w-1/2">
                      {row.video ? (
                        <video
                          src={row.video}
                          poster={row.poster}
                          loop
                          muted
                          playsInline
                          autoPlay
                          preload="none"
                          className="aspect-[1.2] w-full rounded-[20px] object-cover"
                        />
                      ) : (
                        <Image
                          src={row.img!}
                          alt={row.kicker}
                          width={810}
                          height={424}
                          className="w-full rounded-[20px]"
                        />
                      )}
                    </div>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* transform stats */}
        <div className="mt-28">
          <Reveal>
            <h2 className="text-display text-display-4 text-center text-[42px] text-white">
              {TRANSFORM.heading}
            </h2>
          </Reveal>
          {/* Pinned band: cards slide sideways one-by-one on scroll (live #r0WBgwCNw) */}
          <TransformScrollCards />
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <HowItWorks />

      {/* ================= AGENTIC PLATFORM ================= */}
      <AgenticPlatform />

      {/* ================= GLOBE / CONNECTING ================= */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#110D17_34.3%,#48287A_100%)] px-6 py-24 sm:px-10">
        {/* Live globe: Cobe WebGL dotted globe, slow spin (matches gethelium.co) */}
        <div className="relative mx-auto w-full max-w-[1091px]">
          <Globe />
          <Reveal className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h2 className="text-display text-display-4 max-w-[900px] text-center text-[48px] text-white">
              {GLOBE_SECTION.heading}
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#48287A] py-20">
        <Reveal>
          <h2 className="text-display text-display-4 text-center text-[50px] leading-[120%] text-white">
            Backed by Results.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 w-full">
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </Reveal>
      </section>

      {/* ================= BLOG HIGHLIGHT ================= */}
      {/* Live ref (gethelium.co .framer-1c8rejp): white card, pink-tinted
          shadow, text left / image right, dark pill Read More */}
      <section className="bg-white px-6 pb-[70px] pt-[55px] sm:px-10">
        <Reveal className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-center gap-8 rounded-[15px] bg-white px-8 py-16 shadow-[0_0.6px_2.77px_-0.5px_rgba(224,112,122,0.04),0_2.29px_10.53px_-1px_rgba(224,112,122,0.05),0_10px_46px_-1.5px_rgba(224,112,122,0.09)] lg:flex-row lg:gap-[31px] lg:px-[100px]">
          <div className="flex w-full flex-col items-start gap-[57px] lg:w-[568px] lg:shrink-0">
            <div className="flex flex-col gap-[15px]">
              <h2 className="font-display text-[25px] leading-[30px] font-medium text-black">
                {BLOG_HIGHLIGHT.title}
              </h2>
              <p className="max-w-[433px] text-[15px] leading-[18px] tracking-[0.75px] text-[#999999] [font-family:var(--font-inter),sans-serif]">
                {BLOG_HIGHLIGHT.body}
              </p>
            </div>
            <Link
              href={BLOG_HIGHLIGHT.href}
              className="inline-flex h-12 items-center justify-center rounded-[37px] bg-[linear-gradient(180deg,#271b1b_0%,#1e1515_100%)] px-5 font-satoshi text-base font-medium tracking-[-0.16px] text-white shadow-[inset_0_-1px_0_0_rgba(47,43,67,0.1),0_1px_3px_0_rgba(47,43,67,0.1)] transition-opacity hover:opacity-90"
            >
              Read More
            </Link>
          </div>
          <Link
            href={BLOG_HIGHLIGHT.href}
            className="block w-full lg:w-[547px] lg:shrink-0"
          >
            <Image
              src={BLOG_HIGHLIGHT.img}
              alt={BLOG_HIGHLIGHT.title}
              width={547}
              height={308}
              loading="lazy"
              className="w-full rounded-[10px] shadow-[0_0.6px_2.29px_-0.75px_rgba(252,129,143,0.1),0_2.29px_8.7px_-1.5px_rgba(252,129,143,0.11),0_10px_38px_-2.25px_rgba(252,129,143,0.13)]"
            />
          </Link>
        </Reveal>
      </section>

      {/* ================= FOOTER CTA (homepage only) ================= */}
      <FooterCta />
    </>
  );
}
