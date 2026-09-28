"use client";

import Image from "next/image";
import { useState } from "react";

export type TouchpointTab = {
  label: string;
  image: string;
  alt: string;
};

/**
 * TouchpointTabs — live attribution "Phone 1" widget (framer-7cl7o2):
 * two columns — heading + vertical tab list on the left with a progress
 * line (active tab dark + blue bar segment, inactive 80% grey), and the
 * large rounded-20px image card filling the right half, swapping per tab
 * (stacks below on mobile). All three tabs are clickable and each has its
 * own dashboard screenshot (Channel / Audience / SKU).
 */
export function TouchpointTabs({
  title,
  tabs,
}: {
  title: string;
  tabs: readonly TouchpointTab[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-[1091px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-sans text-[26px] leading-[1.3] font-medium tracking-[-0.02em] text-ink sm:text-[30px]">
            {title}
          </h2>
          <div
            role="tablist"
            aria-label="Touchpoint weighting"
            aria-orientation="vertical"
            className="mt-8 flex gap-4"
          >
            {/* progress line: track with a blue segment sliding to the active row */}
            <div
              aria-hidden
              className="relative w-[3px] shrink-0 self-stretch rounded-[3px] bg-[rgba(70,72,77,0.06)]"
            >
              <span
                className="absolute left-0 w-full rounded-[3px] bg-[rgb(70,108,243)] transition-all duration-300"
                style={{
                  top: `${(active / tabs.length) * 100}%`,
                  height: `${100 / tabs.length}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-6">
              {tabs.map((tab, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={tab.label}
                    type="button"
                    role="tab"
                    id={`touchpoint-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls="touchpoint-panel"
                    onClick={() => setActive(i)}
                    className={`cursor-pointer text-left font-sans text-lg font-medium leading-[1.5] transition-colors duration-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-plum ${
                      isActive ? "text-ink" : "text-[rgb(70,72,77)] opacity-80 hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          role="tabpanel"
          id="touchpoint-panel"
          aria-labelledby={`touchpoint-tab-${active}`}
          className="overflow-hidden rounded-[20px]"
        >
          {tabs.map((tab, i) => (
            <Image
              key={tab.image}
              src={tab.image}
              alt={i === active ? tab.alt : ""}
              width={1054}
              height={874}
              sizes="(max-width: 1024px) 90vw, 543px"
              priority={i === 0}
              className="h-auto w-full transition-opacity duration-500"
              style={{
                display: i === active ? "block" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}