"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type DashImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * DashCrossfade — live /catalog-optimization dashboard panel: two
 * screenshots stacked and crossfading every ~5s (measured on the live
 * site). Each image renders at its NATURAL aspect ratio (width 100%,
 * height auto, top-anchored) and the fixed-height clip window crops the
 * bottom — exactly like the live "Image Background" wrapper. Forcing a
 * single aspect frame with object-fit:cover distorts the wider capture,
 * which is what made the second image render narrow.
 *
 * Reduced-motion users see a static first image.
 */
export function DashCrossfade({ images }: { images: readonly DashImage[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [reduce, images.length]);

  return (
    // clip window: ~456px visible on desktop (panel 511 − 55 top pad),
    // scaled down on mobile; overflow-hidden crops each image's bottom.
    <div className="relative mx-auto h-[200px] w-full max-w-[853px] overflow-hidden sm:h-[456px]">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={i === index ? img.alt : ""}
          width={img.width}
          height={img.height}
          sizes="(max-width: 1060px) 90vw, 853px"
          priority={i === 0}
          // natural ratio: w-full + h-auto, anchored top, crossfaded
          className="absolute inset-x-0 top-0 h-auto w-full transition-opacity duration-700 ease-[cubic-bezier(0.44,0,0.56,1)]"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      <span aria-live="polite" className="sr-only">
        {images[index]?.alt}
      </span>
    </div>
  );
}