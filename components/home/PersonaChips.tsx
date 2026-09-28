"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

/**
 * Live "Window Shopper / Returner / First-Time Visitor / Offer Thrifter"
 * persona chip cluster from the Transform stats right column.
 */
export function PersonaChips({
  chips,
  img,
}: {
  chips: readonly string[];
  img: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex min-h-[220px] items-center justify-center">
      <Image
        src={img}
        alt=""
        aria-hidden
        width={500}
        height={500}
        className="absolute h-[220px] w-[220px] rounded-2xl object-cover opacity-90"
        style={{ width: 220, height: 220 }}
      />
      {chips.map((chip, i) => {
        const positions = [
          "top-2 left-2",
          "top-10 right-0",
          "bottom-10 left-6",
          "bottom-2 right-6",
        ];
        return (
          <motion.span
            key={chip}
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduce ? { duration: 0 } : SCROLL_TWEEN}
            className={`absolute ${positions[i % positions.length]} rounded-full bg-black/80 px-3 py-1.5 font-micro text-[11px] font-medium text-white shadow-inset`}
          >
            {chip}
          </motion.span>
        );
      })}
    </div>
  );
}