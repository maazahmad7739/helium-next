"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

/** Live "Track Jacket / $XX / Similar Product" product card stack. */
export function ProductCards({
  cards,
}: {
  cards: readonly { name: string; price: string; tag?: string; img: string }[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className="grid grid-cols-2 gap-3">
      {cards.slice(0, 4).map((card, i) => (
        <motion.div
          key={`${card.name}-${i}`}
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduce ? { duration: 0 } : SCROLL_TWEEN}
          className="rounded-2xl bg-white p-3 shadow-soft"
        >
          <Image
            src={card.img}
            alt={card.name}
            width={300}
            height={300}
            className="aspect-square w-full rounded-xl object-cover"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="mt-2 flex items-center justify-between">
            <p className="font-sans text-sm font-medium text-ink">{card.name}</p>
            <p className="font-sans text-sm font-semibold text-ink">{card.price}</p>
          </div>
          {card.tag && (
            <p className="mt-1 font-micro text-[11px] font-medium text-ink/60">{card.tag}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}