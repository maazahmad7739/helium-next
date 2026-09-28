"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Live Quote section word reveal: each word starts
 * opacity 0.001 / blur(5px) / translateY(-8px) and resolves
 * with a stagger — replicated with a plain staggerChildren
 * variant (construction-standards compliant).
 */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const word = {
  hidden: { opacity: 0.001, y: -8, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.44, 0, 0.56, 1] as const },
  },
};

export function QuoteWords({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={reduce ? undefined : container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          aria-hidden
          className="inline-block will-change-transform"
          variants={reduce ? undefined : word}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}