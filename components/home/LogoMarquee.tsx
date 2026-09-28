"use client";

import { MARQUEE_LOGOS } from "@/lib/home-data";
import Image from "next/image";

/**
 * Live-site ticker fidelity (gethelium.co .framer-6tev1n > .framer-qyRl9):
 * - mask-image gradient at 18% / 82% (exact)
 * - logo row 68px tall, 157px gap, per-logo fixed px sizes (live CSS)
 * - pure CSS translate3d(-50%, 0, 0) infinite loop — GPU-composited,
 *   no JS on the hot path, zero snap/gap
 * - duplicate list aria-hidden; animation disabled under reduced motion
 */
export function LogoMarquee() {
  const row = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];
  return (
    <div className="mask-ticker relative w-full overflow-hidden py-[22px]">
      <div className="animate-ticker flex w-max items-center">
        {row.map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            aria-hidden={i >= MARQUEE_LOGOS.length}
            className="flex shrink-0 items-center px-[78px]"
          >
            <Image
              src={logo.src}
              alt="Brand logo"
              width={logo.aw}
              height={logo.ah}
              priority={i < MARQUEE_LOGOS.length}
              style={{ height: logo.h, width: "auto" }}
              className="shrink-0 object-contain opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
}