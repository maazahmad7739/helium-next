"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

const TAP_SPRING = { type: "spring" as const, stiffness: 300, damping: 25 };

/**
 * MediaShowcaseFrame — isolated stacking-context container for videos,
 * dashboards, and product screenshots.
 *
 * Anti-collision guarantees:
 *  - `relative isolate` + `overflow-hidden` creates a self-contained
 *    stacking context, so children (and transforms) can never paint over
 *    sibling sections regardless of parent transforms.
 *  - `transform-gpu` on the wrapper keeps reveal compositing on its own layer.
 *  - Aspect ratio enforced via CSS `aspect-ratio` (no magic absolute boxes).
 *
 * Reused by: /ad-stack (hero video + intel screenshots),
 *            /catalog-optimization (results visual), /pulse (comparison)
 */
export function MediaShowcaseFrame({
  children,
  aspect,
  radius = "card",
  shadow = "card",
  delay = 0,
  className,
  maxWidth,
}: {
  children: React.ReactNode;
  /** CSS aspect-ratio string, e.g. "1452 / 1096" */
  aspect?: string;
  radius?: "card" | "soft" | "none";
  shadow?: "card" | "chip" | "glow" | "none";
  delay?: number;
  className?: string;
  maxWidth?: string;
}) {
  const radiusCls = { card: "rounded-card", soft: "rounded-[17px]", none: "" }[radius];
  const shadowCls = { card: "shadow-card", chip: "shadow-chip", glow: "shadow-glow", none: "" }[shadow];

  return (
    <motion.div
      initial={false}
      whileInView={useReducedMotion() ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={useReducedMotion() ? { duration: 0 } : { ...SPRING, delay }}
      className={`relative isolate transform-gpu overflow-hidden ${radiusCls} ${shadowCls} ${className ?? ""}`}
      style={{ aspectRatio: aspect, maxWidth }}
    >
      {children}
    </motion.div>
  );
}