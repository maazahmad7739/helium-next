"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { FaqItem } from "@/lib/product-pages";
import { SPRING, SCROLL_TWEEN } from "@/lib/motion";
import { PULSE } from "@/lib/pulse-data";

/**
 * /pulse FAQ — verbatim replica of live #faqs (ref pulse4.md.txt):
 * the SECTION ITSELF is the rounded #D8DFE5 card (radius 20, overflow hidden)
 * sitting on the tiled page background — NOT a full-bleed strip. Contents:
 * kicker pill (icon + "Your Queries, Simplified"), word-by-word H2 reveal,
 * five accordion cards (#F6FBFF, radius 10, blur-in answers), and the
 * envelope mail row. Item wrappers slide up 60px on scroll-in.
 */

/* 6-layer soft shadow from the live accordion card (rgba(16,49,77,…) ladder) */
const CARD_SHADOW =
  "0px 0.706592px 0.706592px -0.291667px rgba(16,49,77,0.05356), " +
  "0px 1.806562px 1.806562px -0.583333px rgba(16,49,77,0.05521), " +
  "0px 3.621759px 3.621759px -0.875px rgba(16,49,77,0.05793), " +
  "0px 6.8656px 6.8656px -1.166667px rgba(16,49,77,0.0628), " +
  "0px 13.646761px 13.646761px -1.458333px rgba(16,49,77,0.07297), " +
  "0px 30px 30px -1.75px rgba(16,49,77,0.0975)";

function KickerIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden>
      <path
        d="M8.5 14.5a6 6 0 1 0-5.2-3l-.8 3 3-.8a5.96 5.96 0 0 0 3 .8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 7h5.4M5.8 9.6h3.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden>
      <rect x="3" y="5.5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="m3.8 6.5 8.7 6.5 8.7-6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Toggle: chevron-down rotating 180° on open (live icon, injected client-side) */
function ToggleChevron({ open }: { open: boolean }) {
  return (
    <motion.span
      aria-hidden
      className="flex h-5 w-5 shrink-0 items-center justify-center text-[#0e1c29]"
      animate={open ? { rotate: 180 } : { rotate: 0 }}
      transition={SCROLL_TWEEN}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="m5.5 7.75 4.5 4.5 4.5-4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
}

function FaqCard({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    /* Scroll-in wrapper: live items start translateY(60px) + opacity 0.
       w-full — live cards fill the 600px column, not shrink-wrapped. */
    <motion.div
      className="w-full"
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: index * 0.08 }}
    >
      <div
        onClick={() => setOpen((v) => !v)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`pulse-faq-panel-${index}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        className="w-full cursor-pointer rounded-[10px] bg-[#f6fbff] px-4 py-3"
        style={{ boxShadow: CARD_SHADOW }}
      >
        <div className="flex items-center justify-between gap-[10px]">
          <span className="text-left font-inter text-base leading-[1.5] text-[#0e1c29]">
            {item.q}
          </span>
          <ToggleChevron open={open} />
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`pulse-faq-panel-${index}`}
              initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0, filter: "blur(5px)" }}
              animate={reduce ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 1, filter: "blur(0px)" }}
              exit={
                reduce
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0, filter: "blur(5px)" }
              }
              transition={reduce ? { duration: 0 } : SPRING}
              className="overflow-hidden"
            >
              <p className="pt-[14px] font-inter text-sm leading-[1.6] text-[#0e1c29]">
                {item.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function PulseFaq() {
  const reduce = useReducedMotion();

  /* Live H2 animates word-by-word: opacity 0.001 → 1, y 5px → 0 */
  const h2Words = "Questions? Answers!".split(" ");

  return (
    <section className="bg-[#f0f8ffe6] px-4 py-8 sm:px-10">
      {/* The card IS the section background: rgb(216,223,229), radius 20, overflow hidden */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 overflow-hidden rounded-[20px] bg-[rgb(216,223,229)] px-[18px] py-20 sm:px-10">
        <div className="flex flex-col items-center gap-[34px]">
          {/* Heading block */}
          <div className="flex max-w-[640px] flex-col items-center gap-4">
            <div
              className="flex items-center gap-2 overflow-hidden rounded-full px-3 py-0.5"
              style={{
                backgroundColor: "#f0f8ffe6",
                boxShadow: "0 0 0 2px #f0f8ffe6",
                border: "1px solid #d8dfe5",
              }}
            >
              <span className="flex h-[17px] w-[17px] items-center justify-center opacity-80">
                <KickerIcon />
              </span>
              <span className="whitespace-pre font-inter text-sm leading-[1.6] text-[#16101e]">
                Your Queries, Simplified
              </span>
            </div>
            <motion.h2
              className="text-center font-display text-[36px] font-medium leading-[1.2] tracking-[-0.01em] text-[#16101e] sm:text-[44px] lg:text-[51px]"
              initial={reduce ? false : "hidden"}
              whileInView={reduce ? undefined : "show"}
              viewport={{ once: true, margin: "-60px" }}
              variants={reduce ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            >
              {h2Words.map((w, i) => (
                <Fragment key={`${w}-${i}`}>
                  {i > 0 ? " " : ""}
                  <motion.span
                    className="inline-block"
                    variants={reduce ? undefined : { hidden: { opacity: 0.001, y: 5 }, show: { opacity: 1, y: 0, transition: SPRING } }}
                  >
                    {w}
                  </motion.span>
                </Fragment>
              ))}
            </motion.h2>
          </div>

          {/* Accordion list: max-w 600px, 16px gaps */}
          <div className="flex max-w-[600px] flex-col items-center gap-4">
            {PULSE.faqs.map((item, i) => (
              <FaqCard key={item.q} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Mail row */}
        <motion.div
          className="flex items-center gap-2 rounded-lg px-3 py-1.5"
          initial={reduce ? false : { opacity: 0, y: 60 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduce ? { duration: 0 } : SCROLL_TWEEN}
        >
          <span className="flex h-[25px] w-[25px] items-center justify-center text-[#0e1c29]">
            <MailIcon />
          </span>
          <p className="whitespace-pre font-inter text-base leading-[1.5] text-[#16101e]">
            {PULSE.contactNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}