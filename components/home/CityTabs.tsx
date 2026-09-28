"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING, SCROLL_TWEEN } from "@/lib/motion";

type CityTabsProps = {
  tabs: readonly string[];
  panelTitle: string;
  /** 5 fan screenshots (left→right); center slot shows through the hero phone screen */
  phones: readonly string[];
  /** big hero iPhone centered in front — frame webp with transparent screen */
  phoneHero?: string;
};

/** live card geometry: 1200px container, x-centers %, sizes px, all v-centered */
const SLOTS = [
  { center: "9%", w: 204, h: 437 },
  { center: "28%", w: 228, h: 489 },
  { center: "50%", w: 252, h: 540 },
  { center: "72%", w: 228, h: 489 },
  { center: "91%", w: 204, h: 437 },
];

const N = 5;

/**
 * Live merchandising hero stack: 5 phone cards in a fan, each with a
 * white "For {city}" pill floating 67px above its top edge; the center
 * card carries a dark pill with its own label instead. The hero iPhone
 * frame (transparent-screen webp) sits on top so the center card's
 * screen shows through it — no backdrop behind it. Cream arrow buttons
 * flank the phone inset at 30%; warm radial glow; edge fade. Live
 * scroll-parallax is substituted with staggered whileInView fade/rise.
 *
 * Interactive: centerIndex state drives which card occupies the center
 * slot. Arrow clicks rotate cards via circular wrap-around. Each card's
 * target slot is computed as ((i - centerIndex + 2) % N + N) % N, so
 * distance 0 = center/large/sharp, ±1 = side-card size, ±2 = most
 * faded/smallest. Transitions use the project's existing SPRING.
 */
export function CityTabs({ tabs, panelTitle, phones, phoneHero }: CityTabsProps) {
  const reduce = useReducedMotion();
  const [centerIndex, setCenterIndex] = useState(2);

  const goNext = useCallback(() => setCenterIndex((i) => (i + 1) % N), []);
  const goPrev = useCallback(
    () => setCenterIndex((i) => (i - 1 + N) % N),
    [],
  );

  const anim = (i: number) =>
    reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: 0.1 + i * 0.07 };

  const carouselTransition = reduce ? { duration: 0 } : SPRING;

  return (
    <div
      className="relative mx-auto h-[676px] w-full max-w-[1200px]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      {/* warm radial glow (live BGBLUR) */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgb(255,245,224) 0%, rgba(171,171,171,0) 100%)",
        }}
      />

      {/* 5 fanned phone cards, pills floating above top edge (live top:-67px, 125×42) */}
      {phones.slice(0, N).map((src, i) => {
        const targetSlot = ((i - centerIndex + 2) % N + N) % N;
        const slot = SLOTS[targetSlot];
        const distance = targetSlot - 2;
        const absDistance = Math.abs(distance);
        const isCenter = distance === 0;
        const label = tabs[i];

        return (
          <motion.div
            key={src}
            className="absolute top-1/2"
            initial={false}
            animate={{
              left: slot.center,
              x: "-50%",
              y: "-50%",
              width: slot.w,
              height: slot.h,
              zIndex: 3 - absDistance,
              opacity: isCenter ? 1 : absDistance === 1 ? 0.7 : 0.35,
            }}
            transition={carouselTransition}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={anim(i)}
              className="relative h-full"
            >
              <Image
                src={src}
                alt={label}
                width={660}
                height={1420}
                loading="eager"
                className="h-full w-full rounded-[32px] object-cover"
              />
              <span
                className={`absolute left-1/2 flex h-[42px] w-[125px] -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full font-sans text-lg shadow-chip ${
                  isCenter
                    ? "bg-[#0D0D0D] font-bold text-white"
                    : "bg-white font-medium text-[#0D0D0D]"
                }`}
                style={{ top: -67 }}
              >
                {isCenter ? label : `For ${label}`}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* hero iPhone frame on top — transparent screen lets the center card show through */}
      {phoneHero && (
        <div
          className="absolute left-1/2 top-1/2 z-10"
          style={{ width: 276, transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 50 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={anim(5)}
            className="relative"
          >
            <Image
              src={phoneHero}
              alt={panelTitle}
              width={722}
              height={1470}
              loading="eager"
              className="relative w-full rounded-[36px] object-cover"
            />
          </motion.div>
        </div>
      )}

      {/* carousel arrows (live: cream circles flanking the phone at ~30%, chevron, right rotated 180°) */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous city"
        className="absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFF4E0] shadow-chip transition-transform duration-300 hover:scale-105 left-[32%] lg:left-[36%]"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M11.813 14.625 L6.188 9 L11.813 3.375"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next city"
        className="absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFF4E0] shadow-chip transition-transform duration-300 hover:scale-105 right-[32%] lg:right-[36%]"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M11.813 14.625 L6.188 9 L11.813 3.375"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
