"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * CrossfadeCarousel — the live Framer pattern measured on
 * /helium-case-studies/lenskart: images absolutely stacked in one frame,
 * each fades in over ~0.5s and holds ~4.1s before the next replaces it.
 * Reusable variant of DashCrossfade with configurable interval and frame
 * styling. Reduced-motion users see a static first image.
 */
export function CrossfadeCarousel({
  images,
  intervalMs = 4100,
  fadeMs = 500,
  className,
  sizes = "(min-width: 845px) 845px, 100vw",
  width,
}: {
  images: { src: string; width: number; height: number; alt?: string }[];
  intervalMs?: number;
  fadeMs?: number;
  className?: string;
  sizes?: string;
  /** optional explicit CSS width (inline style, beats utility classes) */
  width?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [reduce, images.length, intervalMs]);

  return (
    <span
      className={
        "relative block overflow-hidden rounded-2xl bg-paper-2 " +
        "shadow-[0_0.6px_2px_-0.9px_rgba(0,0,0,0.14),0_2.3px_7.8px_-1.8px_rgba(0,0,0,0.13),0_10px_34px_-2.75px_rgba(0,0,0,0.11)] " +
        (className ?? "")
      }
      style={{ aspectRatio: `${images[0].width} / ${images[0].height}`, width }}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={i === 0 ? img.alt ?? "" : ""}
          width={img.width}
          height={img.height}
          sizes={sizes}
          priority={i === 0}
          className="absolute inset-0 h-full w-full object-cover transition-opacity"
          style={{
            opacity: i === index ? 1 : 0,
            transitionDuration: `${fadeMs}ms`,
          }}
        />
      ))}
      <span aria-live="polite" className="sr-only">
        {images[index]?.alt}
      </span>
    </span>
  );
}