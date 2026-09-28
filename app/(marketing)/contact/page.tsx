import type { Metadata } from "next";
import Image from "next/image";
import { SITE, HOME_DESCRIPTION } from "@/lib/site";
import { STATS, TRANSFORM } from "@/lib/home-data";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { ContactForm } from "@/components/ContactForm";
import { FooterCta } from "@/components/FooterCta";
import { TransformStackedCards } from "@/components/contact/TransformStackedCards";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Page",
  description: HOME_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      {/* ============ HERO + FORM ============ */}
      {/* Live Framer spec (framer-q7tdyx > framer-x29ia): single bordered card
          (bg #fafafa, radius 32, border 1px #d4d4d499, padding 28px 40px),
          row layout with gap 40 — left gray Copy panel, right white form panel */}
      {/* Live page bg (#fafafa .framer-q7tdyx) fills behind the transparent
          navbar — -mt/pt pair slides it up behind the 120px nav. */}
      <section className="-mt-[120px] bg-[#fafafa] px-6 pt-[150px] pb-16 sm:px-10">
        <HeroReveal
          id="contact-form-card"
          delay={0.2}
          className="mx-auto w-fit max-w-[1120px]"
        >
          <div className="flex w-[1120px] max-w-full flex-col gap-10 rounded-[32px] border border-[#d4d4d499] bg-[#fafafa] p-7 sm:p-10 lg:flex-row lg:items-stretch lg:gap-10">
            {/* Copy panel (framer-25nuf8: bg #d0d2d62e, radius 23, width 480) */}
            <div className="flex flex-1 flex-col items-start gap-10 rounded-[23px] bg-[#d0d2d62e] px-2.5 py-8 lg:w-[480px] lg:flex-none">
              <h2 className="text-display font-normal text-[36px] leading-[1.2] tracking-normal text-ink sm:text-[42px]">
                Unlock personalisation, one session at a time to boost
                conversions
              </h2>
              <Image
                src="/content/contact-orbit.png"
                alt=""
                aria-hidden
                width={400}
                height={300}
                className="w-full max-w-[400px] rounded-xl self-center"
              />
            </div>
            {/* Form panel (framer-11ficlk: bg white, radius 28, padding 20) */}
            <div className="rounded-[28px] bg-white p-5 lg:w-[520px] lg:flex-none">
              <ContactForm />
            </div>
          </div>
        </HeroReveal>
      </section>

      {/* ============ LOGOS + STATS ============ */}
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
        <RevealGroup className="mx-auto mt-16 flex max-w-[1091px] flex-col gap-10 sm:flex-row sm:justify-between">
          {STATS.map((s) => (
            <RevealItem key={s.label} className="flex-1 text-center">
              <p className="text-display text-[40px] text-grape">{s.value}</p>
              <p className="mt-2 font-sans text-[30px] leading-[1.2] font-medium tracking-[-0.02em] text-grape">
                {s.label}
              </p>
              <p className="mx-auto mt-2 max-w-[280px] font-sans text-[15px] leading-[1.5] font-medium text-lilac">
                {s.caption}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ============ OUTCOMES (Transform. Personalize. Elevate.) ============
          Live contact page (framer-f4yg54 #howwework): gradient band, dark
          "Outcomes" pill (bg #131314, radius 70, 152x45, Inter 18px white),
          H2 Poppins 40px #3d3d3d, subtext Poppins 24px #87868a, then the
          stacked sticky card group — closing section before the footer. */}
      <section className="bg-[linear-gradient(152deg,#fafafa_29.7121%,#ccb2d9_40%,#953e9c_48.7014%,#5c2c93_57.589%,#a157f3_68.9242%,#000_112%)] px-6 py-16 sm:px-10 sm:py-[100px]">
        <Reveal className="flex flex-col items-center gap-[5px]">
          <span className="inline-flex h-[45px] w-[152px] items-center justify-center rounded-[70px] bg-[#131314]">
            <p className="font-micro text-lg font-normal tracking-[-0.01em] text-white">
              Outcomes
            </p>
          </span>
          <h2 className="text-display mt-2 text-center text-[28px] leading-[1.25] tracking-[-1px] text-[#3d3d3d] sm:text-[40px]">
            {TRANSFORM.heading}
          </h2>
          <h3 className="text-center font-display text-[20px] leading-[1.2] tracking-[-1px] text-[#87868a] sm:text-[24px]">
            Unlock the full potential of your eCommerce store with Pulse.
          </h3>
        </Reveal>
        {/* Stacked sticky cards: each new card slides up and covers ~90% of
            the previous one, sliver of the prior card peeking from the top */}
        <div className="mt-14" style={{ minHeight: "165vh" }}>
          <TransformStackedCards />
        </div>
      </section>

      {/* ================= FOOTER CTA (live contact: section above footer) ================= */}
      <FooterCta />
    </>
  );
}