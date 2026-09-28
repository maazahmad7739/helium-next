"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING, SCROLL_TWEEN } from "@/lib/motion";
import { PULSE } from "@/lib/pulse-data";

/**
 * /pulse "Reviews" — verbatim replica of live #reviews (ref pulse4.md.txt):
 * the rounded 20px section card with NO background (page tile shows through),
 * kicker pill + word-by-word "What Our Users Say" H2, two 3-card flex rows
 * (#f6fbff cards, radius 16, 6-layer shadow, dotted separator, 40px avatar),
 * then the avatar-strip "Trusted by 100+ innovators worldwide" row.
 */

/* 6-layer card shadow from the live review card (rgba(16,49,77,…) ladder) */
const CARD_SHADOW =
  "0px 0.706592px 0.706592px -0.291667px rgba(16,49,77,0.05), " +
  "0px 1.806562px 1.806562px -0.583333px rgba(16,49,77,0.06), " +
  "0px 3.621759px 3.621759px -0.875px rgba(16,49,77,0.06), " +
  "0px 6.8656px 6.8656px -1.166667px rgba(16,49,77,0.06), " +
  "0px 13.646761px 13.646761px -1.458333px rgba(16,49,77,0.07), " +
  "0px 30px 30px -1.75px rgba(16,49,77,0.1)";

/* 6-layer avatar shadow from the live profile pic */
const AVATAR_SHADOW =
  "0px 0.706592px 0.706592px -0.583333px rgba(16,49,77,0.21), " +
  "0px 1.806562px 1.806562px -1.166667px rgba(16,49,77,0.2), " +
  "0px 3.621759px 3.621759px -1.75px rgba(16,49,77,0.2), " +
  "0px 6.8656px 6.8656px -2.333333px rgba(16,49,77,0.18), " +
  "0px 13.646761px 13.646761px -2.916667px rgba(16,49,77,0.16), " +
  "0px 30px 30px -3.5px rgba(16,49,77,0.09)";

/* White ring + shadow stack used by the 28px strip avatars */
const STRIP_RING = "0 0 0 2px rgba(255,255,255,0.9), 0 0.706592px 0.706592px -0.583333px rgba(16,49,77,0.21), 0 1.806562px 1.806562px -1.166667px rgba(16,49,77,0.2), 0 3.621759px 3.621759px -1.75px rgba(16,49,77,0.2), 0 6.8656px 6.8656px -2.333333px rgba(16,49,77,0.18), 0 13.646761px 13.646761px -2.916667px rgba(16,49,77,0.16), 0 30px 30px -3.5px rgba(16,49,77,0.09)";

function ReviewCard({
  quote,
  name,
  role,
  avatar,
  index,
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    /* Scroll-in wrapper: live cards start translateY(60px) + opacity 0 */
    <motion.div
      className="flex-1"
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: index * 0.08 }}
    >
      {/* Live card = framer-1qghfau (radius 16, #f6fbff, p32, gap 20) →
          inner framer-kr007y (radius 10, gap 20, centered) holding the
          quote block (gap 10) + profile row (gap 14). */}
      <div
        className="flex h-full flex-col rounded-[16px] bg-[#f6fbff] p-8"
        style={{ boxShadow: CARD_SHADOW }}
      >
        <div className="flex w-full flex-col items-center justify-center gap-5 rounded-[10px]">
          <div className="flex w-full flex-col gap-2.5">
            <p className="text-left font-inter text-base leading-[1.5] text-[#16101e]">
              {quote}
            </p>
          </div>
          {/* Profile: 40px pic · 2px dotted separator · name/role */}
          <div className="flex w-full items-center gap-3.5">
            <img
              src={avatar}
              alt={`${name} avatar`}
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 shrink-0 rounded-[12%] object-cover"
              style={{ boxShadow: AVATAR_SHADOW }}
            />
            <span
              aria-hidden
              className="h-10 w-0.5 shrink-0 self-stretch"
              style={{
                borderLeft: "3px dotted rgb(237,237,237)",
                marginLeft: "-1px",
                marginRight: "-1px",
              }}
            />
            <div className="flex min-w-0 flex-col">
              <p className="text-left font-inter text-base leading-[1.5] text-[#16101e]">
                {name}
              </p>
              <p className="text-left font-inter text-sm leading-[1.6] text-[#16101e]/80">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PulseReviews() {
  const reduce = useReducedMotion();
  const { kicker, h2 } = PULSE.reviewsHeading;
  const h2Words = h2.split(" ");
  const t = PULSE.testimonials;
  const strip = PULSE.reviewStrip;

  /* Card padding comes from the live inner container (20px) — applied here
     so the quote/profile blocks breathe identically to the live cards. */
  return (
    <section className="bg-[#f0f8ffe6] px-4 py-8 sm:px-10">
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 overflow-hidden rounded-[20px] px-0 py-10 sm:gap-[44px] sm:py-0 lg:gap-8 lg:px-10 lg:py-[100px]">
        <div className="flex max-w-[640px] flex-col items-center gap-4">
          {/* Kicker pill (same as FAQ section: #F0F8FFE6, ring, 1px #D8DFE5 border) */}
          <motion.div
            className="flex items-center gap-2 overflow-hidden rounded-full px-3 py-0.5"
            initial={reduce ? false : { opacity: 0.001 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduce ? { duration: 0 } : SPRING}
            style={{
              backgroundColor: "#f0f8ffe6",
              boxShadow: "0 0 0 2px #f0f8ffe6",
              border: "1px solid #d8dfe5",
              padding: "2px 12px",
            }}
          >
            <span className="flex h-[17px] w-[17px] items-center justify-center opacity-80">
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
            </span>
            <span className="whitespace-pre font-inter text-sm leading-[1.6] text-[#16101e]">
              {kicker}
            </span>
          </motion.div>

          {/* Word-by-word H2 reveal: opacity 0.001 → 1, y 5px → 0 */}
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

        {/* Review rows: 2 rows × 3 cards, 32px gaps */}
        <div className="flex w-full flex-col gap-8">
          <div className="flex items-start gap-8 max-md:flex-col max-md:gap-[27px]">
            {t.slice(0, 3).map((r, i) => (
              <ReviewCard key={r.name} {...r} index={i} />
            ))}
          </div>
          <div className="flex items-start gap-8 max-md:flex-col max-md:gap-[27px]">
            {t.slice(3, 6).map((r, i) => (
              <ReviewCard key={r.name} {...r} index={i} />
            ))}
          </div>
        </div>

        {/* Trusted-by strip: 4 overlapping 28px avatars + counter text.
            Live has a decorative cloud (framer-cx5l8k: 1713px wide, screen
            blend, opacity .7, centered at left 45%, top -49px) behind it. */}
        <motion.div
          className="relative flex w-full items-center justify-center gap-2 max-md:flex-col"
          initial={reduce ? false : { opacity: 0, y: 60 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduce ? { duration: 0 } : SCROLL_TWEEN}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-49px] left-[45%] hidden aspect-[1.5425] w-[1713px] -translate-x-1/2 opacity-70 mix-blend-screen lg:block"
            style={{ backgroundImage: "url(/content/pulse-cloud.png)", backgroundSize: "100% 100%" }}
          />
          <div className="relative flex items-center pr-[22px]">
            {strip.avatars.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                className="h-7 w-7 shrink-0 rounded-full object-cover"
                style={{ boxShadow: STRIP_RING, marginLeft: i === 0 ? 0 : -12, zIndex: 4 - i }}
              />
            ))}
          </div>
          <div className="relative flex items-center gap-1 overflow-hidden">
            <span className="font-inter text-sm leading-[1.5] text-[#16101e]/80">
              {strip.prefix}
            </span>
            {/* Live counter: Inter 14px — value line-height 1.7, "+" 1.6 */}
            <span className="flex items-center gap-0.5">
              <span className="font-inter text-sm leading-[1.7] text-[#16101e]">
                {strip.value}
              </span>
              <span className="font-inter text-sm leading-[1.6] text-[#16101e]">
                {strip.suffixPlus}
              </span>
            </span>
            <span className="font-inter text-sm leading-[1.5] text-[#16101e]/80">
              {strip.suffix}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}