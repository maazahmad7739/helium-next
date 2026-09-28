"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MotionLink } from "@/components/motion/MotionLink";
import { SCROLL_TWEEN } from "@/lib/motion";

type IndustryCase = {
  title: string;
  body: string;
  cta: string;
  href: string;
  img: string;
};

/**
 * Live industry section shows ONE case-study block at a time and
 * crossfades to the next every few seconds (interval, honoring
 * prefers-reduced-motion). Every slide is stacked in the same grid
 * cell, so the section height is always the tallest slide — the card
 * never resizes or reflows mid-transition. Motion matches the live
 * appear spec: fade + translateX(150px), no scale.
 */
export function IndustryCarousel({ cases }: { cases: readonly IndustryCase[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || cases.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % cases.length), 5000);
    return () => clearInterval(id);
  }, [reduce, cases.length]);

  const variants: Variants = {
    active: {
      opacity: 1,
      x: 0,
      visibility: "visible",
      transition: SCROLL_TWEEN,
    },
    inactive: {
      opacity: 0,
      x: reduce ? 0 : 150,
      visibility: "hidden",
      transition: SCROLL_TWEEN,
    },
  };

  return (
    <div className="grid overflow-x-clip">
      {cases.map((c, i) => {
        const active = i === index;
        return (
          <motion.div
            key={c.href}
            initial={false}
            animate={active ? "active" : "inactive"}
            variants={variants}
            aria-hidden={!active}
            className={`[grid-area:1/1] ${active ? "" : "pointer-events-none"}`}
          >
            {/* Case Study Block: live card 1120px inside the 1200px shell,
                bg rgba(0,0,0,0.1), radius 20, padding 20, overflow hidden. */}
            <div className="relative overflow-hidden rounded-[20px] bg-black/10 p-5">
              {/* Abstract swirl decor (live "Abstarct Image": 886px wide,
                  pinned right:-10px, top:0, bottom:0; 546px on phones.
                  Sudathi variant is rotated 90deg on live.) */}
              <Image
                src="/content/hBzXIh9pnjjLaQkleQo93lc1mU.svg"
                alt=""
                aria-hidden
                width={888}
                height={644}
                className={`pointer-events-none absolute -right-[10px] top-0 h-full w-[546px] max-w-none object-cover lg:w-[886px] ${i === 1 ? "rotate-90" : ""}`}
              />
              <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1fr_513px] lg:gap-0">
                {/* Text container: live padding 49px 50px, gap 23/24 */}
                <div className="flex flex-col items-start gap-6 py-2 lg:gap-[23px] lg:px-[50px] lg:py-[49px]">
                  <h3 className="font-switzer text-[39px] leading-[1.2] font-semibold text-white lg:text-[48px]">
                    {c.title}
                  </h3>
                  <p className="font-sans text-[18px] leading-[1.5] text-white">
                    {c.body}
                  </p>
                  {/* CTA pill: dark gradient core inset 2px inside a conic
                      purple→dark ring (live "Medium" button, radius 37/34). */}
                  <MotionLink
                    href={c.href}
                    ariaLabel={c.title}
                    className="mt-2 inline-flex rounded-[37px] p-[2px] [background:conic-gradient(from_200deg,#1E1515_270deg,#7D34C2_360deg)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-white lg:mt-[1px]"
                  >
                    <span className="shadow-inset inline-flex items-center gap-2 rounded-[34px] border border-white/5 bg-[linear-gradient(180deg,#271B1B_0%,#1E1515_100%)] px-5 py-3 font-sans text-base font-medium tracking-[-0.16px] text-white">
                      {c.cta}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M4 10h12M11 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </MotionLink>
                </div>
                {/* Image: fixed 513×492 on live desktop, 312×299 ratio on phones */}
                <div className="aspect-[312/299] w-full overflow-hidden rounded-[12px] shadow-[rgba(0,0,0,0.1)_0px_1px_1px_0px,rgba(0,0,0,0.05)_0px_3px_8px_0px] lg:aspect-auto lg:h-[492px] lg:w-[513px]">
                  <Image
                    src={c.img}
                    alt={c.title}
                    width={1026}
                    height={984}
                    sizes="(max-width: 1024px) 100vw, 513px"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}