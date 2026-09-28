"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * YouTube click-to-play facade for the hero preview frame.
 * Renders the local thumbnail + play button; swaps to the
 * youtube-nocookie iframe only after click (keeps LCP fast).
 */
export function HeroVideoFacade({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full">
      <Image
        src={`/content/yt-${videoId}.jpg`}
        alt="Why Static Websites Are Killing Your Conversions — Helium Pulse video"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 837px"
        className="object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video: Why Static Websites Are Killing Your Conversions"
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-transparent"
        >
          {/* Live play chip: 61px circle, white/6→grey/6 gradient, blur 7.5px, 27px icon */}
          <span className="flex h-[61px] w-[61px] items-center justify-center rounded-full border border-white/5 bg-[linear-gradient(0.0164deg,rgba(255,255,255,0.06)_0%,rgba(153,153,153,0.06)_100%)] backdrop-blur-[7.5px] transition-transform hover:scale-105">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5L8 5.5Z" fill="#ffffff" fillOpacity="0.9" />
            </svg>
          </span>
        </button>
      )}
      {playing && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Why Static Websites Are Killing Your Conversions (And How AI Can Save Them) | Helium Pulse"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
}