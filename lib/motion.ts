import type { Transition, Variants } from "framer-motion";

/**
 * Exact Framer physics extracted from the live site's
 * `framer/appear` script (site-extraction, home page):
 *
 *   spring: { type: "spring", stiffness: 200, damping: 60, mass: 1 }
 *           delays 0.2 / 0.5 / 0.9 — pure opacity 0.001 -> 1
 *   scroll: { type: "tween", duration: 0.4, ease: [0.44, 0, 0.56, 1] }
 *           with initial translateY(15px) for scroll-into-view blocks
 */

export const SPRING: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 60,
  mass: 1,
};

export const SCROLL_TWEEN: Transition = {
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
};

/** Hero-tier appear: opacity fade, spring, delay 0.2s */
export const appearSpring = (delay = 0.2): Transition => ({
  ...SPRING,
  delay,
});

/** Scroll-triggered entrance: fade + 15px rise (live footer/heading pattern) */
export const scrollReveal = (delay = 0): Transition => ({
  ...SCROLL_TWEEN,
  delay,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...SCROLL_TWEEN, delay: i * 0.1 },
  }),
};

export const fadeOnly: Variants = {
  hidden: { opacity: 0.001 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { ...SPRING, delay: 0.2 + i * 0.15 },
  }),
};