"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { FaqItem } from "@/lib/product-pages";
import { SPRING } from "@/lib/motion";

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto flex max-w-[800px] flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-lg leading-[1.4] font-medium text-ink">
                {item.q}
              </span>
              <span
                aria-hidden
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-2 text-xl text-ink transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
                  animate={reduce ? { height: "auto" } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
                  transition={reduce ? { duration: 0 } : SPRING}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-base leading-[1.6] text-ink/70">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}