import type { Metadata } from "next";
import { MERCH } from "@/lib/merch-data";
import { SITE } from "@/lib/site";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { Reveal } from "@/components/motion/Reveal";
import { CityTabs } from "@/components/home/CityTabs";
import { TrustBar } from "@/components/sections";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { FeatureGrid } from "@/components/merchandising/FeatureGrid";
import { QuoteWords } from "@/components/merchandising/QuoteWords";

export const metadata: Metadata = {
  title: MERCH.meta.title,
  description: MERCH.meta.description,
  alternates: { canonical: `${SITE.url}${MERCH.meta.canonical}` },
};

export default function MerchandisingPage() {
  return (
    <>
      {/* ============ HERO (live: looping video FIRST y160-710, then H1, then sub) ============ */}
      <section className="relative -mt-[120px] overflow-x-clip bg-white px-6 pt-[150px] sm:px-10">
        <div className="mx-auto max-w-[1112px]">
          <video
            src={MERCH.hero.video}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="h-auto w-full object-cover"
            style={{ aspectRatio: "1112 / 550" }}
          />
        </div>
        <div className="relative mx-auto mt-10 flex max-w-[1300px] flex-col items-center text-center">
          <HeroReveal delay={0.2}>
            <h1 className="font-sans text-[34px] leading-[1.4] font-semibold tracking-[-0.01em] text-ink sm:text-[42px]">
              {MERCH.hero.h1}
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.5}>
            <p className="mt-5 max-w-[1100px] font-sans text-[19px] leading-[1.6] font-medium text-ink/85">
              {MERCH.hero.bodyA}
              <strong className="font-bold">{MERCH.hero.bodyAccent1}</strong>
              {MERCH.hero.bodyB}
              <strong className="font-bold">{MERCH.hero.bodyAccent2}</strong>
              {MERCH.hero.bodyC}
            </p>
          </HeroReveal>
          <HeroReveal delay={0.9}>
            <a
              href="#features"
              className="mt-8 inline-flex items-center justify-center rounded-[365px] bg-[#FFF4E0] px-7 py-3.5 font-sans text-base font-bold text-[#131314] transition-transform duration-300 hover:scale-[1.02]"
            >
              {MERCH.cities.heading}
            </a>
          </HeroReveal>
        </div>
      </section>

      {/* ============ PHONE STACK (live: fanned phones + city pills + hero iPhone + arrows) ============ */}
      <section className="overflow-hidden bg-white pt-6 pb-16 sm:px-10" id="hero">
        <CityTabs
          tabs={MERCH.cities.tabs}
          panelTitle={MERCH.cities.panelTitle}
          phones={MERCH.cities.phones}
          phoneHero={MERCH.cities.phoneHero}
        />
      </section>

      {/* ============ TRUSTED BY (live: plum line + logo marquee at y˜1668) ============ */}
      <TrustBar label={MERCH.trustedBy} className="bg-white">
        <LogoMarquee />
      </TrustBar>

      {/* ============ FEATURES (live: 6 cards, 3×2 grid, 534×480, radius 32, warm bottom radial) ============ */}
      <FeatureGrid />

      {/* ============ QUOTE / MISSION (live: 80vh centered, black chip, Manrope 32px, word reveal) ============ */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 overflow-hidden bg-white px-6 py-20 sm:px-20">
        <Reveal y={40}>
          <span className="inline-flex items-center rounded-[32px] bg-black px-6 py-2 font-manrope text-xs leading-[1.5] font-extrabold tracking-[1px] text-white uppercase">
            {MERCH.mission.eyebrow}
          </span>
        </Reveal>
        <div className="flex w-full max-w-[800px] flex-col items-center gap-6">
          <h2 className="text-center font-manrope text-[28px] leading-[1.4] font-semibold text-black sm:text-[32px]">
            <QuoteWords text={MERCH.mission.heading} />
            <br />
            <br />
            <QuoteWords text={MERCH.mission.bodyPlain} />
          </h2>
          <div className="w-full text-center">
            <p className="font-sans text-[18px] leading-[1.3] font-medium text-black">
              {MERCH.mission.name}
            </p>
            <p className="font-sans text-[18px] leading-[1.3] font-medium text-black">
              {MERCH.mission.role}
            </p>
          </div>
        </div>
      </section>

      {/* ============ POWERED BY (live: 131px giant + 42px sub; complex reveal ? simple fade) ============ */}
      <section className="bg-white px-6 pb-24 text-center sm:px-10">
        <Reveal>
          <h2 className="font-sans text-[64px] leading-[1.1] font-semibold tracking-[-0.02em] text-ink sm:text-[131px]">
            {MERCH.poweredBy}
          </h2>
          <p className="mt-6 font-sans text-[28px] font-semibold text-ink sm:text-[42px]">
            {MERCH.poweredBySub}
          </p>
        </Reveal>
      </section>
    </>
  );
}