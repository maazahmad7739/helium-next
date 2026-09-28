"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * CountUp — animated count-up number. Fires once when scrolled into view
 * and always lands exactly on `value` (fixes the stuck-at-0% defect from
 * the previous outcomes build). Renders the final value until activation
 * (correct for SEO/no-JS), then animates 0 → value. Honors
 * prefers-reduced-motion by jumping straight to the target.
 *
 * Reused by: /ad-stack outcomes, /audience-signals stats, /attribution stats
 */
export function CountUp({
  value,
  suffix,
  prefix,
  duration = 1200,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // Reduced motion: jump straight to the target via rAF so we don't
      // call setState synchronously inside the effect body.
      const raf = requestAnimationFrame(() => setN(value));
      return () => cancelAnimationFrame(raf);
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  // Not yet activated (or SSR/no-JS): show the real target, never a stuck 0.
  const shown = n === null ? value : n;
  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}