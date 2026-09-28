"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const TIERS = [2000, 4000, 8000, 16000, 32000] as const;
const TIER_LABELS = [
  "Monthly traffic upto 50K",
  "Monthly traffic upto 150K",
  "Monthly traffic upto 500K",
  "Monthly traffic upto 1M",
  "Monthly traffic 1M+",
] as const;

/**
 * PricingSection — live "Estimate your pricing plan": black "Pricing"
 * pill eyebrow, Kickstart purple card (white text, slider, 5-dot
 * progress, white CTA) + Custom Plan white card (black Contact Sales
 * button). Matches reference discrepancies #16–18.
 *
 * Reused by: /ad-stack, /audience-signals, /attribution
 */
export function PricingSection({
  eyebrow = "Pricing",
  heading,
  plan,
  per,
  captions,
  ctaLabel,
  custom,
}: {
  eyebrow?: string;
  heading: string;
  plan: string;
  per: string;
  captions: readonly string[];
  ctaLabel: string;
  custom: {
    title: string;
    body: string;
    points: readonly string[];
    cta: string;
  };
}) {
  const [tier, setTier] = useState(0);
  const reduce = useReducedMotion();
  const price = TIERS[tier];
  const priceStr = `₹${price.toLocaleString("en-IN")}`;

  return (
    <section className="bg-paper-2 px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-[1091px]">
        <Reveal className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-badge bg-ink px-5 py-2.5 font-sans text-sm font-medium text-white">
            {eyebrow}
          </span>
          <h2 className="text-display text-display-4 mt-6 text-[36px] text-ink sm:text-[44px]">
            {heading}
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-8 lg:grid-cols-2" stagger={0.12}>
          {/* Kickstart — purple card */}
          <RevealItem>
            <div className="flex h-full flex-col gap-8 rounded-card bg-plum p-8 text-white shadow-card sm:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-sans text-[22px] font-semibold">{plan}</h3>
                <p className="text-display text-[40px] leading-none">
                  {priceStr}
                  <span className="ml-1 align-baseline font-sans text-base font-medium text-white/70">
                    {per}
                  </span>
                </p>
              </div>

              <label className="flex flex-col gap-4">
                <span className="sr-only">Estimated monthly traffic</span>
                <span className="relative flex items-center">
                  <input
                    name="Business"
                    type="range"
                    min={0}
                    max={TIERS.length - 1}
                    step={1}
                    value={tier}
                    onChange={(e) => setTier(Number(e.target.value))}
                    className="peer h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-white"
                  />
                  {/* 5-step dot progress over the slider track */}
                  <span aria-hidden className="pointer-events-none absolute inset-x-0 flex justify-between">
                    {TIERS.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                          i <= tier ? "border-white bg-white" : "border-white/50 bg-transparent"
                        }`}
                      />
                    ))}
                  </span>
                </span>
                <span className="flex items-center gap-2 font-sans text-[15px] font-medium text-white/90">
                  <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" className="shrink-0">
                    <circle cx="8" cy="8" r="8" fill="#54b0f0" />
                    <circle cx="8" cy="8" r="3.2" fill="#fff" />
                  </svg>
                  {captions[tier]}
                </span>
              </label>

              <motion.a
                href="/contact"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={reduce ? { duration: 0 } : SPRING}
                className="mt-auto inline-flex items-center justify-center rounded-pill-cta bg-white px-7 py-[14px] font-sans text-base font-semibold text-ink"
              >
                {ctaLabel} ({priceStr}/month)
              </motion.a>
            </div>
          </RevealItem>

          {/* Custom Plan — white card */}
          <RevealItem>
            <div className="flex h-full flex-col gap-5 rounded-card border border-black/[0.06] bg-white p-8 shadow-card sm:p-10">
              <div className="flex items-center gap-4">
                <img
                  src="/content/ad-stack/NazdKmmiBXtdb6Jkpv8TOZA1Y.webp"
                  alt=""
                  aria-hidden
                  width={72}
                  height={72}
                  loading="lazy"
                  className="h-16 w-16 object-contain"
                />
                <h3 className="font-sans text-[22px] leading-[1.3] font-medium text-ink">
                  {custom.title}
                </h3>
              </div>
              <p className="font-sans text-[15px] leading-[1.6] text-ink/70">{custom.body}</p>
              <ul className="flex flex-col gap-3">
                {custom.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#54b0f0]" />
                    <span className="font-sans text-[15px] leading-[1.6] text-ink/75">{point}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/contact"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={reduce ? { duration: 0 } : SPRING}
                className="mt-auto inline-flex items-center justify-center rounded-pill-cta bg-ink px-7 py-[14px] font-sans text-base font-semibold text-white"
              >
                {custom.cta}
              </motion.a>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}