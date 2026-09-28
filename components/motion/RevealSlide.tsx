"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

/**
 * RevealSlide — horizontal slide-in sibling of Reveal (same 0.4s
 * cubic-bezier tween, same whileInView/once contract, same
 * prefers-reduced-motion collapse to a 0-duration tween).
 *
 * `direction="left"`  — enters from the left (translateX negative → 0)
 * `direction="right"` — enters from the right (translateX positive → 0)
 *
 * Used by /ab-testing variant-comparison block (Variant A from left,
 * Variant B from right).
 */
export function RevealSlide({
  children,
  direction = "left",
  delay = 0,
  x = 40,
  className,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  /** travel distance in px (default 40, matching Reveal's 15px y-tween intensity) */
  x?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const from = direction === "left" ? -x : x;
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: from }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay }}
    >
      {children}
    </motion.div>
  );
}