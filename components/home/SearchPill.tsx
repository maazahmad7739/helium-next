"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

/** Live "Show me a good track suit" chat/search pill visual. */
export function SearchPill({ text }: { text: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="flex min-h-[180px] flex-col items-center justify-center gap-3">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 15 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={reduce ? { duration: 0 } : SCROLL_TWEEN}
        className="shadow-soft flex items-center gap-2 rounded-full bg-white px-5 py-3"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="font-sans text-base font-medium text-ink">{text}</span>
      </motion.div>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 15 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: 0.1 }}
        className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-inset"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
        <span className="font-micro text-xs font-medium text-ink/60">Revise</span>
      </motion.div>
    </div>
  );
}