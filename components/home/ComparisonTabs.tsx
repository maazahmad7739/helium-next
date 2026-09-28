"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { COMPARISON_TABS, type ComparisonTab } from "@/lib/home-data";
import { SCROLL_TWEEN } from "@/lib/motion";

export function ComparisonTabs() {
  const [active, setActive] = useState(0);
  const tab: ComparisonTab = COMPARISON_TABS[active];
  const reduce = useReducedMotion();

  return (
    <div className="shadow-tabs mx-auto w-full max-w-[1200px] rounded-[32px] bg-white">
      {/* Tab pills — live: 197x68, gap 10, Poppins 500 12px, row starts 36px from card top */}
      <div
        role="tablist"
        aria-label="Growth solutions"
        className="flex flex-wrap gap-2.5 px-6 pt-9 sm:px-10 lg:px-[78px]"
      >
        {COMPARISON_TABS.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`relative flex h-[68px] w-[197px] max-w-full items-center justify-center rounded-full px-4 text-center font-[family-name:var(--font-poppins)] text-[12px] font-medium leading-[1.5] transition-all duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] ${
                isActive
                  ? "bg-card-glass text-[#563e69]"
                  : "bg-[#f6f5f4] text-[#111111] opacity-60 hover:opacity-100"
              }`}
            >
              {isActive && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-1.5 rounded-full bg-card-glass opacity-40 blur-[6px]"
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Panel — live: text col 483px @ x78, image 495x502 ending 99px from right edge */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={SCROLL_TWEEN}
          className="grid items-center gap-10 px-6 pb-12 pt-4 sm:px-10 lg:grid-cols-[minmax(0,1fr)_495px] lg:gap-0 lg:pb-[30px] lg:pl-[78px] lg:pr-[99px]"
        >
          <div className="max-w-[483px]">
            <h3 className="font-[family-name:var(--font-poppins)] text-[32px] font-semibold leading-[1.4] text-grape">
              {tab.heading}
            </h3>
            <p className="mt-3 font-[family-name:var(--font-inter)] text-[17px] font-light leading-[1.5] text-grape-soft">
              {tab.body}
            </p>
            {/* Live CTA: 219x59 gradient pill, 51px light circle with 24px purple arrow */}
            <Link
              href="/contact"
              className="mt-[46px] inline-flex h-[59px] items-center gap-2.5 rounded-pill-cta bg-cta p-[3px] pl-5 font-sans text-lg font-medium text-white transition-colors duration-300 hover:bg-cta-hover hover:text-grape"
            >
              Get in touch
              <span className="flex h-[51px] w-[51px] shrink-0 items-center justify-center rounded-full bg-[rgba(246,239,249,0.8)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                    stroke="#52329d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <Image
            src={tab.img}
            alt={tab.heading}
            width={495}
            height={502}
            className="w-full max-w-[495px]"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}