"use client";

import Image from "next/image";
import { useState } from "react";
import { MotionLink } from "@/components/motion/MotionLink";

const CTA_GRADIENT =
  "linear-gradient(90deg, rgb(33,204,238) 0%, rgb(20,112,239) 33.2763%, rgb(105,39,218) 68.4697%, rgb(242,61,148) 100%)";

/**
 * SystemTabs — live /catalog-optimization "How it works" ("Feature Section",
 * reference.md.txt): white rocket badge pill, centered 44px #181818 heading,
 * then a #f5f5f5 panel (radius 20px top corners) with stacked tab cards on
 * the left — white active card + purple underline bar, #f5f5f5 inactive —
 * and the bordered catalog visual on the right; gradient CTA centered below.
 * Accessible primitives: real <button role="tab"> with aria-selected, plain
 * React state.
 */
export function SystemTabs({
  eyebrow,
  heading,
  tabs,
  image,
  cta,
}: {
  eyebrow: string;
  heading: string;
  tabs: readonly { title: string; lines: readonly string[] }[];
  image: string;
  cta: string;
}) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-badge border-[1.5px] border-[rgba(108,111,118,0.12)] bg-white px-5 py-2 shadow-[rgba(0,0,0,0.06)_0px_4px_16px_0px]">
          <svg aria-hidden viewBox="0 0 18 18" className="h-[15px] w-[15px]">
            <path
              d="M 7.125 9.75 L 4.875 7.5 M 7.125 9.75 C 8.173 9.352 9.178 8.849 10.125 8.25 M 7.125 9.75 L 7.125 13.5 C 7.125 13.5 9.398 13.088 10.125 12 C 10.935 10.785 10.125 8.25 10.125 8.25 M 4.875 7.5 C 5.274 6.465 5.777 5.472 6.375 4.538 C 7.249 3.14 8.466 1.99 9.91 1.196 C 11.354 0.402 12.977 -0.01 14.625 0 C 14.625 2.04 14.04 5.625 10.125 8.25 M 4.875 7.5 L 1.125 7.5 C 1.125 7.5 1.538 5.228 2.625 4.5 C 3.84 3.69 6.375 4.5 6.375 4.5 M 1.5 10.875 C 0.375 11.82 0 14.625 0 14.625 C 0 14.625 2.805 14.25 3.75 13.125 C 4.282 12.495 4.275 11.528 3.683 10.943 C 3.391 10.664 3.007 10.504 2.604 10.491 C 2.201 10.479 1.808 10.615 1.5 10.875 Z"
              fill="transparent"
              stroke="#46484d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(1.875 1.5)"
            />
          </svg>
          <span className="font-sans text-sm font-medium text-[#181818]">{eyebrow}</span>
        </span>
      </div>
      <h2 className="text-display text-display-4 mt-7 text-center text-[32px] leading-[1.2] text-[#181818] sm:text-[44px] sm:tracking-[-3px]">
        {heading}
      </h2>

      <div className="mt-8 grid overflow-hidden rounded-t-[20px] bg-grey-100 lg:grid-cols-2">
        <div
          role="tablist"
          aria-label={heading}
          aria-orientation="vertical"
          className="flex flex-col"
        >
          {tabs.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={t.title}
                type="button"
                role="tab"
                id={`system-tab-${i}`}
                aria-selected={isActive}
                aria-controls="system-panel"
                onClick={() => setActive(i)}
                className="flex w-full cursor-pointer flex-col text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-plum"
              >
                <span
                  className={`block border-[1.5px] border-[rgba(70,72,77,0.06)] p-6 transition-colors duration-300 lg:border-r-0 ${i > 0 ? "border-t-0" : "rounded-tl-[20px]"} ${
                    isActive ? "bg-white" : "bg-grey-100 hover:bg-white"
                  }`}
                >
                  <span className="block font-sans text-lg leading-[1.7] font-semibold text-[#5603c0]">
                    {t.title}
                  </span>
                  {t.lines.map((line) => (
                    <span
                      key={line}
                      className="block font-sans text-sm leading-[1.7] text-[#46484d]"
                    >
                      {line}
                    </span>
                  ))}
                </span>
                <span
                  aria-hidden
                  className={`block h-1 shrink-0 transition-colors duration-300 ${
                    isActive ? "bg-[#5603c0]" : "bg-grey-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
        <div
          role="tabpanel"
          id="system-panel"
          aria-labelledby={`system-tab-${active}`}
          className="relative aspect-[1798/1072] border-[1.5px] border-[rgba(70,72,77,0.06)] bg-white lg:aspect-auto"
        >
          <Image
            src={image}
            alt="Helium scoring a catalog of products"
            fill
            sizes="(max-width: 1024px) 100vw, 546px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <MotionLink
          href="/contact"
          ariaLabel={cta}
          className="relative inline-flex items-center justify-center rounded-badge bg-[linear-gradient(90deg,rgb(33,204,238)_0%,rgb(20,112,239)_33.2763%,rgb(105,39,218)_68.4697%,rgb(242,61,148)_100%)] p-[3px]"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[135px] opacity-60 blur-[17px]"
            style={{ background: CTA_GRADIENT }}
          />
          <span className="relative inline-flex items-center justify-center rounded-badge bg-[linear-gradient(rgb(255,255,255)_-51%,rgb(16,2,2)_18%,rgb(16,2,2)_132%)] px-6 py-2.5">
            <span className="font-sans text-sm leading-[1.7] font-medium text-white">
              {cta}
            </span>
          </span>
        </MotionLink>
      </div>
    </div>
  );
}