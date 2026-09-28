"use client";

import { PULSE } from "@/lib/pulse-data";
import Image from "next/image";

/**
 * Live /pulse trusted-by badge row (ref live HTML):
 * 12 circular 64px logo badges (2px white border, soft 0 1 5 shadow,
 * fully rounded) in a static centered row.
 */
export function BrandBadgeMarquee() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6">
      {PULSE.brandLogos.map((src) => (
        <div
          key={src}
          className="size-16 shrink-0 overflow-hidden rounded-full"
          style={{
            border: "2px solid rgb(255, 255, 255)",
            boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Image
            src={src}
            alt="Brand logo"
            width={64}
            height={64}
            sizes="64px"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}