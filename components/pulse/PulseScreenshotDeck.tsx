"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";
import { PULSE } from "@/lib/pulse-data";

/**
 * Live /pulse screenshot deck (ref pulse2.md.txt): three stacked "Desktop"
 * cards — back-to-front Image-3/2/1 — each a white rounded-[20px] frame with
 * 10px padding around a rounded-[10px] cover-cropped screenshot (front card
 * 1000x630). The hero chips (Anomolies / Attribution / Retargeting) float
 * over the stack as a frosted gray toolbar (rgba(153,153,153,0.6), radius
 * 16, padding 8, gap 32), near the bottom-center of the front card.
 */

const SHOTS = [
  { ratio: "900 / 567", width: "w-[90%]", peekSm: -20, peekLg: -64 },
  { ratio: "950 / 599", width: "w-[95%]", peekSm: -10, peekLg: -32 },
  { ratio: "1000 / 630", width: "w-full", peekSm: 0, peekLg: 0 },
];

function ChipIcon() {
  return (
    <svg aria-hidden width="10" height="10" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path
        d="M1.5 5.5L6 1.5L10.5 5.5V10.5H7.5V7.5H4.5V10.5H1.5V5.5Z"
        stroke="black"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PulseScreenshotDeck() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[1000px]">
      {/* Cards intentionally overlap as a stacked deck (live Image-3/2/1):
          all three share one grid cell; the negative top margins are the
          measured 64px/32px (20px/10px on mobile) peeks of the back cards
          above the front card. */}
      <div className="grid justify-items-center">
        {PULSE.deck.shots.map((shot, i) => (
          <motion.div
            key={shot.src}
            className={`${SHOTS[i].width} self-start justify-self-center max-lg:-mt-[var(--peek-sm)] lg:-mt-[var(--peek-lg)] ${
              i === PULSE.deck.shots.length - 1 ? "z-10 [grid-area:1/1]" : "[grid-area:1/1]"
            }`}
            style={
              {
                "--peek-sm": `${-SHOTS[i].peekSm}px`,
                "--peek-lg": `${-SHOTS[i].peekLg}px`,
              } as React.CSSProperties
            }
            initial={reduce ? false : { opacity: 0.001, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduce ? { duration: 0 } : { ...SPRING, delay: 0.15 + i * 0.15 }}
          >
            <div
              className={`rounded-[20px] bg-white p-[10px] max-lg:p-[6px] ${
                i === PULSE.deck.shots.length - 1 ? "shadow-card" : ""
              }`}
              style={{ aspectRatio: SHOTS[i].ratio }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[10px]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 980px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chips toolbar intentionally overlaps the deck (live frosted toolbar,
          ~10px above the front card's bottom edge, centered) */}
      <motion.div
        className="absolute bottom-[2%] left-1/2 z-20 flex items-center gap-8 rounded-[16px] bg-[#999]/60 p-2 backdrop-blur-[2px] max-sm:gap-2"
        style={{
          x: "-50%",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0.3px 0.3px 1.8px -1px, rgba(0, 0, 0, 0.15) 1.1px 1.1px 6.8px -2px",
        }}
        initial={reduce ? false : { opacity: 0.001, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduce ? { duration: 0 } : { ...SPRING, delay: 0.6 }}
      >
        {PULSE.hero.chips.map((chip) => (
          <span
            key={chip}
            className="flex items-center gap-1.5 rounded-[10px] bg-white px-3.5 py-2 font-sans text-xs font-medium text-black max-sm:px-2 max-sm:text-[10px]"
          >
            <ChipIcon />
            {chip}
          </span>
        ))}
      </motion.div>
    </div>
  );
}