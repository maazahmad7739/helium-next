"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

/**
 * Live GA4-vs-Helium comparative matrix: two columns, check/cross rows.
 */
export function ComparisonTable({
  ga4,
  helium,
}: {
  ga4: { name: string; points: readonly string[] };
  helium: { name: string; points: readonly string[] };
}) {
  const reduce = useReducedMotion();
  const rows = Math.max(ga4.points.length, helium.points.length);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* GA4 column */}
      <div className="rounded-card border border-black/[0.06] bg-paper-2 p-8">
        <h3 className="font-sans text-xl font-medium text-ink/60">{ga4.name}</h3>
        <ul className="mt-6 flex flex-col gap-4">
          {Array.from({ length: rows }).map((_, i) => (
            <motion.li
              key={i}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-[11px] text-ink/40">
                ✕
              </span>
              <span className="font-sans text-[15px] leading-[1.55] text-ink/60">
                {ga4.points[i]}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Helium column */}
      <div className="shadow-glow rounded-card bg-[linear-gradient(140deg,rgba(204,205,255,0.7)_4%,rgba(235,203,247,0.7)_60%,rgba(166,140,225,0.7)_103%)] p-8">
        <h3 className="font-sans text-xl font-medium text-ink">{helium.name}</h3>
        <ul className="mt-6 flex flex-col gap-4">
          {Array.from({ length: rows }).map((_, i) => (
            <motion.li
              key={i}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-[11px] text-brand-dark">
                ✓
              </span>
              <span className="font-sans text-[15px] leading-[1.55] text-ink/85">
                {helium.points[i]}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}