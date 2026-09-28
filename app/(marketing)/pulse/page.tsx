import type { Metadata } from "next";
import { PULSE } from "@/lib/pulse-data";
import { SITE } from "@/lib/site";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { PulseFaq } from "@/components/pulse/PulseFaq";
import { PulseReviews } from "@/components/pulse/PulseReviews";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ChipMarquee } from "@/components/home/ChipMarquee";
import { PulseHeroGrid } from "@/components/pulse/PulseHeroGrid";
import { PulseClouds } from "@/components/pulse/PulseClouds";
import { PulseScreenshotDeck } from "@/components/pulse/PulseScreenshotDeck";
import { PulseDeployment } from "@/components/pulse/PulseDeployment";
import { BrandBadgeMarquee } from "@/components/pulse/BrandBadgeMarquee";

export const metadata: Metadata = {
  title: PULSE.meta.title,
  description: PULSE.meta.description,
  alternates: { canonical: `${SITE.url}${PULSE.meta.canonical}` },
};

export default function PulsePage() {
  return (
    <>
      <FaqJsonLd items={PULSE.faqs} />

      {/* Page-level wrapper mirroring live framer-7xNPW: the gradient +
          speckle texture + clouds are page-wide background layers; every
          section sits above them (live sections are z:2, clouds z:1). */}
      <div
        className="relative isolate -mt-[120px] overflow-x-clip pt-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #eef1f6 0%, #e4e9f0 45%, #dde3ea 100%)",
        }}
      >
        {/* Live root texture (framerusercontent 6mcf62RlDfRfU61Yg5vb2pefpi4.png,
            128px tile) — dark speckle PNG made subtle via screen blend. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url(/content/pulse-bg-texture.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "128px auto",
            mixBlendMode: "screen",
          }}
        />
        {/* Live cloud layer (framerusercontent dDB4JCGfoX5DJBUD3qohcdOK9U.png,
            screen-blended, 7 placements + page-wide light wash — see
            PulseClouds). Above texture, below all section content. */}
        <PulseClouds />

        <div className="relative z-[2] flex flex-col">
          {/* ============ HERO (light textured, per live #hero) ============ */}
          <section className="overflow-hidden px-6 pt-[30px] pb-16 sm:px-10">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center text-ink">
              <HeroReveal delay={0.1} className="w-full">
                {/* Live /pulse hero video: first element in section#hero, aspect-ratio
                    container per construction standards (no raw absolute media). */}
                <div className="w-full overflow-hidden rounded-[10px]" style={{ aspectRatio: "1112 / 542" }}>
                  <video
                    src={PULSE.hero.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover"
                  />
                </div>
              </HeroReveal>
              <HeroReveal delay={0.5} className="mt-14 w-full max-w-[1049px]">
                <PulseHeroGrid />
              </HeroReveal>
            </div>
          </section>

      {/* ============ SCREENSHOT DECK (transparent on live — page wash +
              clouds from PulseClouds show through, no section bg) ============ */}
      <section className="relative px-6 pt-16 pb-10 sm:px-10">
        <HeroReveal className="w-full">
          <PulseScreenshotDeck />
        </HeroReveal>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <section className="bg-[#f0f8ffe6] py-10">
        <Reveal>
          <p className="text-display text-center text-lg text-black">{PULSE.trustedBy}</p>
        </Reveal>
        <Reveal className="mt-8">
          <BrandBadgeMarquee />
        </Reveal>
      </section>

      {/* ============ LIVE OVERSIGHT / INSIGHTS ============ */}
      <section className="bg-[#f0f8ffe6] px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[1091px]">
          {/* Live badge (framer-1ed8ja5): pill bg #f0f8ffe6 (live token
              --token-aeb15aaf),
              1px #d8dfe5 border, 60px radius, 2px ring, 2px 12px padding,
              80%-opacity icon + 14px Inter/400 label, centered. */}
          <Reveal className="flex justify-center">
            <div
              className="flex items-center gap-2 rounded-[60px] px-3 py-[2px]"
              style={{
                backgroundColor: "#f0f8ffe6",
                border: "1px solid rgb(216, 223, 229)",
                boxShadow: "0px 0px 0px 2px #f0f8ffe6",
              }}
            >
              <span style={{ opacity: 0.8 }} aria-hidden>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="6" cy="6" r="4.5" stroke="#16101e" strokeWidth="1.4" />
                  <path d="M9.5 9.5L12.5 12.5" stroke="#16101e" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              <p className="font-sans text-sm leading-[1.6] text-[#16101e]">
                {PULSE.insights.heading}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-display text-display-4 mt-3 text-center text-[32px] text-grape-deep">
              {PULSE.insights.subheading}
            </h2>
          </Reveal>
          {/* Live framer-1m7pds4 "feature cards": row of 2, gap 32.
              Each card = framer-xusf3x variant (bg #F6FBFF, radius 16,
              padding 32, layered rgba(16,49,77) shadow) > image box
              (framer-cadwt2, aspect 1.69444, radius 16, own shadow) +
              20px/500 Inter heading + 80% body. */}
          <RevealGroup className="mt-12 grid gap-8 lg:grid-cols-2" stagger={0.12}>
            {PULSE.insights.cards.map((card) => (
              <RevealItem
                key={card.heading}
                className="flex flex-col rounded-2xl p-8"
                style={{
                  backgroundColor: "#F6FBFF",
                  boxShadow:
                    "0px 0.707px 0.707px -0.29px rgba(16,49,77,0.05), 0px 1.807px 1.807px -0.583px rgba(16,49,77,0.06), 0px 3.622px 3.622px -0.875px rgba(16,49,77,0.06), 0px 6.866px 6.866px -1.167px rgba(16,49,77,0.06), 0px 13.647px 13.647px -1.458px rgba(16,49,77,0.07), 0px 30px 30px -1.75px rgba(16,49,77,0.1)",
                }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: "1.69444",
                    boxShadow:
                      "0px 0.597px 0.597px -0.4375px rgba(16,49,77,0.05), 0px 1.811px 1.811px -0.875px rgba(16,49,77,0.06), 0px 4.787px 4.787px -1.3125px rgba(16,49,77,0.07), 0px 15px 15px -1.75px rgba(16,49,77,0.1)",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <h4 className="mt-6 font-sans text-xl leading-[1.5] font-medium text-[#16101e]">
                  {card.heading}
                </h4>
                <p className="mt-4 font-sans text-[15px] leading-[1.5] text-[#16101e]/80">
                  {card.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ============ CHIP MARQUEE (double ticker, 2 rows) ============ */}
      <section className="pb-16">
        {/* Constrained to the feature-cards container width (live
            .framer-k9v42u-container is capped and centered) */}
        <div className="mx-auto max-w-[1091px]">
          <ChipMarquee rows={PULSE.marquee} />
        </div>
      </section>

      {/* ============ DEPLOYMENT PANEL (live #deployment, ref pulse4.md.txt):
              detective headline, GA4 vs Helium cards, quote, feature grid,
              benefits row and CRO line inside one rounded gray panel ============ */}
      <PulseDeployment />

      {/* ============ REVIEWS (live #reviews: rounded 20px card, no bg —
              kicker pill, word-reveal "What Our Users Say" H2, 2×3 review
              cards, trusted-by avatar strip) ============ */}
      <PulseReviews />

      {/* ============ FAQ (live #faqs: the section itself is the rounded
              #d8dfe5 card on the tiled bg — kicker pill, word-reveal H2,
              accordion cards, mail row) ============ */}
          <PulseFaq />
        </div>
      </div>
    </>
  );
}