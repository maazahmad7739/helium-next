"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

/**
 * Live /pulse hero "Grid 1" card (#hero > div.framer-1vy1vb5,
 * XPATH //*[@id="hero"]/div[2], ref pulse1.md.txt).
 *
 * Desktop: 1049x1275 card, bg rgba(223,228,235,0.05), radius 30,
 * padding 26px 80px 30px, flex-col gap 63. Contents top-to-bottom:
 *   h3 headline (Inter 500 36px/100%, #0e1c29, purple #774be5 accents)
 *   GA4 dashboard image (463x223, radius 18)
 *   giant "Pulse" gradient text (Poppins 330px, opacity 1 — the page h1)
 *   h4 subline (Inter 500 24px/150%) with per-word stagger reveal
 *   3-up image grid (294 r30 / 267 r22 / 274 r6, gap ~13) with appear
 *     animations: left translateY(50px) scale(.45) rotate(-3deg),
 *     middle translateY(50px) scale(.65), right translateY(50px)
 *     scale(.45) rotate(3deg)
 * Tablet <=1199px: 735px card, gap 50, padding 66/80/50, Pulse text order
 *   below h3; Mobile <=809px: full-width, radius 8, gap 18, single-column
 *   image stack.
 */

const HEADLINE_ACCENT = "text-[#774be5]";

const IMAGES = {
  dashboard: {
    src: "/content/pulse-hero-dashboard.png",
    alt: "Google Analytics 4 dashboard showing conversion dropped by 3.5%",
  },
  attribution: {
    src: "/content/pulse-hero-img-1.png",
    alt: "Conversion rate by channel donut chart — re-allocate ad spend from Facebook to Google",
  },
  conversion: {
    src: "/content/pulse-hero-img-2.png",
    alt: "Conversion rate list with PDP load speed flagged high",
  },
  bots: {
    src: "/content/pulse-hero-img-3.png",
    alt: "Bot traffic spike detected — midday hours saw 24% increase dragging CVR by 22%",
  },
} as const;

const SUB_LINE = ["Tells", "you", "why", "it's", "happening,", "and", "what", "to", "do", "next."];

function GiantPulseText({ className }: { className?: string }) {
  return (
    <h1
      className={`pointer-events-none select-none text-center text-display bg-clip-text text-transparent ${className ?? ""}`}
      style={{
        fontSize: "clamp(160px, 24vw, 330px)",
        letterSpacing: "0.02em",
        lineHeight: 0.7,
        backgroundImage:
          "linear-gradient(0deg, rgb(0,10,255) 0%, rgb(113,70,194) 65.74%, rgb(180,104,252) 93.74%, rgb(166,169,250) 100%)",
      }}
    >
      Pulse
    </h1>
  );
}

export function PulseHeroGrid() {
  const reduce = useReducedMotion();

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[#dfe4eb]/[0.05] min-[1200px]:h-[1275px] gap-[63px] px-20 pt-[26px] pb-[30px] max-[1199.98px]:h-auto max-[1199.98px]:w-[735px] max-[1199.98px]:gap-[50px] max-[1199.98px]:pt-[66px] max-[1199.98px]:pb-[50px] max-[809.98px]:w-full max-[809.98px]:gap-[18px] max-[809.98px]:rounded-[8px] max-[809.98px]:px-10 max-[809.98px]:pt-[26px] max-[809.98px]:pb-[40px]">
      {/* h3 headline */}
      <h3 className="font-sans text-[36px] leading-none font-medium text-center text-[#0e1c29] min-[810px]:max-[1199.98px]:text-[32px] max-[809.98px]:text-[28px]">
        Google Analytics tells you the what.
        <br />
        <span className={HEADLINE_ACCENT}>Helium Analytics</span> tells you{" "}
        <span className={HEADLINE_ACCENT}>why</span> and <span className={HEADLINE_ACCENT}>what</span>{" "}
        to do next.
      </h3>

      {/* GA4 dashboard image */}
      <div className="relative aspect-[463/223] w-[463px] max-w-full overflow-hidden rounded-[18px] max-[809.98px]:aspect-[279/157] max-[809.98px]:w-[279px]">
        <Image
          src={IMAGES.dashboard.src}
          alt={IMAGES.dashboard.alt}
          fill
          sizes="(max-width: 809.98px) 279px, 463px"
          className="object-contain"
        />
      </div>

      {/* Giant gradient "Pulse" — tablet: last (order 4); mobile: after dashboard (order 3) */}
      <GiantPulseText className="max-[1199.98px]:order-4 max-[809.98px]:order-3" />

      {/* h4 subline with per-word reveal */}
      <h4 className="w-[85%] max-w-full font-sans text-2xl leading-[1.5] font-medium text-center text-[#16101e] max-[1199.98px]:order-2 max-[1199.98px]:w-full max-[1199.98px]:text-xl max-[809.98px]:order-4 max-[809.98px]:w-[307px]">
        {SUB_LINE.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            initial={reduce ? false : { opacity: 0.001, y: 5 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduce ? { duration: 0 } : { ...SPRING, delay: 0.4 + i * 0.06 }}
          >
            {word}
            {i < SUB_LINE.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </h4>

      {/* 3-up image grid — per-card appear mirrors live Framer states:
          left/right translateY(50px) scale(.45) rotate(∓3deg),
          middle translateY(50px) scale(.65). Re-animates on every
          re-entry into the viewport (once: false). */}
      <div className="grid w-full max-w-[90%] grid-cols-[repeat(3,minmax(200px,1fr))] justify-center justify-items-center max-[1199.98px]:order-3 max-[809.98px]:order-5 max-[809.98px]:max-w-[90%] max-[809.98px]:grid-cols-[repeat(1,minmax(200px,1fr))]">
        <motion.figure
          className="relative aspect-square w-[294px] overflow-hidden rounded-[30px] max-[809.98px]:w-[260px]"
          initial={reduce ? false : { opacity: 0, y: 50, scale: 0.45, rotate: -3 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={reduce ? { duration: 0 } : SPRING}
        >
          <Image
            src={IMAGES.attribution.src}
            alt={IMAGES.attribution.alt}
            fill
            sizes="(max-width: 809.98px) 260px, 294px"
            className="object-contain"
          />
        </motion.figure>
        <motion.figure
          className="relative aspect-square w-full overflow-hidden rounded-[22px] max-[1199.98px]:w-[200px] max-[809.98px]:w-[243px]"
          initial={reduce ? false : { opacity: 0, y: 50, scale: 0.65 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={reduce ? { duration: 0 } : { ...SPRING, delay: 0.1 }}
        >
          <Image
            src={IMAGES.conversion.src}
            alt={IMAGES.conversion.alt}
            fill
            sizes="(max-width: 809.98px) 243px, (max-width: 1199.98px) 200px, 267px"
            className="object-contain"
          />
        </motion.figure>
        <motion.figure
          className="relative aspect-square w-[274px] overflow-hidden rounded-[6px] max-[1199.98px]:w-[260px]"
          initial={reduce ? false : { opacity: 0, y: 50, scale: 0.45, rotate: 3 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={reduce ? { duration: 0 } : { ...SPRING, delay: 0.2 }}
        >
          <Image
            src={IMAGES.bots.src}
            alt={IMAGES.bots.alt}
            fill
            sizes="(max-width: 1199.98px) 260px, 274px"
            className="object-contain"
          />
        </motion.figure>
      </div>
    </div>
  );
}