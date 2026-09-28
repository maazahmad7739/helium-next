"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

/** Live "Drafts" list: chat-curated collections with timing metadata. */
export function DraftsList({
  drafts,
}: {
  drafts: readonly { title: string; meta: string }[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col gap-3">
      {drafts.map((draft, i) => (
        <motion.div
          key={draft.title}
          initial={reduce ? false : { opacity: 0, x: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: i * 0.08 }}
          className="flex items-center justify-between gap-4 rounded-[20px] bg-white p-5 shadow-card"
        >
          <div>
            <p className="font-sans text-base font-medium text-ink">{draft.title}</p>
            <p className="mt-0.5 font-micro text-xs font-medium text-ink/50">{draft.meta}</p>
          </div>
          <span className="shrink-0 rounded-full bg-paper-2 px-3 py-1 font-micro text-[11px] font-medium text-plum">
            Drafts
          </span>
        </motion.div>
      ))}
    </div>
  );
}