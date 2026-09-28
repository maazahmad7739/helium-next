"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

const TIERS = [2000, 4000, 8000, 16000, 32000] as const;
const TIER_LABELS = [
  "Monthly traffic upto 50K",
  "Monthly traffic upto 150K",
  "Monthly traffic upto 500K",
  "Monthly traffic upto 1M",
  "Monthly traffic 1M+",
] as const;

/** Live pricing estimator: range slider drives the monthly price. */
export function PricingSlider({
  plan,
  per,
  basePrice,
  caption,
  ctaLabel,
}: {
  plan: string;
  per: string;
  basePrice: number;
  caption: string;
  ctaLabel: string;
}) {
  const [tier, setTier] = useState(0);
  const reduce = useReducedMotion();
  const price = TIERS[tier];

  return (
    <div className="flex h-full flex-col gap-6 rounded-card border border-black/[0.06] bg-white p-8 shadow-card">
      <div className="flex items-baseline justify-between">
        <h3 className="font-sans text-[22px] font-medium text-ink">{plan}</h3>
        <p className="text-display text-[40px] text-plum">
          ₹{price.toLocaleString("en-IN")}
          <span className="ml-1 font-sans text-base font-medium text-ink/50">{per}</span>
        </p>
      </div>

      <label className="flex flex-col gap-3">
        <span className="sr-only">Estimated monthly traffic</span>
        <input
          name="Business"
          type="range"
          min={0}
          max={TIERS.length - 1}
          step={1}
          value={tier}
          onChange={(e) => setTier(Number(e.target.value))}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-black/10 accent-[#6236ad]"
        />
        <span className="font-micro text-xs font-medium text-ink/60">
          {TIER_LABELS[tier]}
        </span>
      </label>

      <motion.p
        key={tier}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={SPRING}
        className="font-sans text-[15px] leading-[1.6] text-ink/70"
      >
        {caption}
      </motion.p>

      <motion.a
        href="/contact"
        whileHover={reduce ? undefined : { scale: 1.02 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        transition={reduce ? { duration: 0 } : SPRING}
        className="bg-cta mt-auto inline-flex items-center justify-center rounded-pill-cta px-7 py-[13px] font-sans text-base font-medium text-white"
      >
        {ctaLabel} (₹{price.toLocaleString("en-IN")}/month)
      </motion.a>
    </div>
  );
}