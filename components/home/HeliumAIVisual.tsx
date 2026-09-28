"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";

/**
 * HeliumAIVisual — live "Visitor intelligence" collage
 * (gethelium.co #main … framer-1s4rkd3 / framer-rvlgu6):
 * a soft rounded background tile with a centered memoji and floating
 * chips/cards that slide in from off-screen when the section scrolls
 * into view (perspective 1200px tweens, 0.6s ease [0.44, 0, 0.56, 1]).
 *
 * The name / location / weather cards and the memoji face stay put.
 * The three circular icons (globe, Apple, male symbol) fade with a
 * scroll-linked opacity: fully visible the whole time the section is
 * in view, fading only as it scrolls toward the viewport edge.
 * Re-entering replays the fly-in.
 */

const EASE = SCROLL_TWEEN.ease as readonly [number, number, number, number];

const FLY: Transition = {
  duration: 0.6,
  ease: EASE,
};

/** Scroll-linked icon fade window (fractions of root progress).
 *  Progress 0 = section below viewport, 1 = above viewport.
 *  Icons fade in/out only near the edges — fully visible in between,
 *  i.e. the entire time the user is on the section. */
const FADE_IN_END = 0.25;
const FADE_OUT_START = 0.75;

type Piece = {
  key: string;
  src: string;
  alt: string;
  /** natural image pixel size (for next/image) */
  w: number;
  h: number;
  /** display box width inside the stage (live-site framer sizes) */
  boxW: number;
  /** absolutely positioned box inside the stage (desktop) */
  style: React.CSSProperties;
  /** off-screen start position (px) */
  from: { x: number; y?: number };
  /** live-site layering (framer z-index) */
  z: number;
  /** fades out like the live memoji/icons */
  fadeOut?: boolean;
};

const PIECES: Piece[] = [
  {
    key: "weather",
    src: "/content/dzHRW66UzCc9r9xy7yD3SNkT3w.png",
    alt: "28°C cloudy, average temperature",
    w: 810,
    h: 424,
    boxW: 209,
    style: { bottom: "13px", left: "52%" },
    from: { x: -800 },
    z: 1,
  },
  {
    key: "name",
    src: "/content/2xNPhjcjYQX2DeRXea5ivG3TLM.png",
    alt: "Ron Rollington, age 20-24",
    w: 970,
    h: 582,
    boxW: 190,
    style: { bottom: "257px", left: "45px" },
    from: { x: -800 },
    z: 1,
  },
  {
    key: "location",
    src: "/content/ykr8yOggRVt6FIE9d1umSw3UR0A.png",
    alt: "Los Angeles, U.S.A",
    w: 834,
    h: 356,
    boxW: 203,
    style: { top: "20px", right: "23px" },
    from: { x: 200 },
    z: 1,
  },
  {
    key: "memoji",
    src: "/content/mXqVNnHA0iDP9UOVfUFGvHJI.png",
    alt: "",
    w: 1000,
    h: 1000,
    boxW: 337,
    style: {
      top: "50%",
      left: "50%",
      marginLeft: "-168px",
      marginTop: "-168px",
    },
    from: { x: 0, y: 800 },
    z: 1,
  },
  {
    key: "male",
    src: "/content/VGDWPdpHqqmBqfHTwH7g3IByk8.png",
    alt: "",
    w: 400,
    h: 400,
    boxW: 108,
    style: { bottom: 0, left: "8px" },
    from: { x: 300 },
    z: 1,
    fadeOut: true,
  },
  {
    key: "globe",
    src: "/content/TRJSI7T8VCm8qDUHPjPrvR05QH4.png",
    alt: "",
    w: 566,
    h: 566,
    boxW: 80,
    style: { top: "50%", left: "9px", marginTop: "-40px" },
    from: { x: 600 },
    z: 1,
    fadeOut: true,
  },
  {
    key: "apple",
    src: "/content/cskYXJwwb5XROZsnj4KGW6ErrIg.png",
    alt: "",
    w: 400,
    h: 400,
    boxW: 101,
    style: { top: "104px", right: "-2px" },
    from: { x: -400 },
    z: 1,
    fadeOut: true,
  },
];

export function HeliumAIVisual({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  // Scroll-linked icon fade: icons stay fully visible while the section
  // is in view, and only fade out as it scrolls toward the viewport edge.
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "end start"],
  });
  const iconOpacity = useTransform(
    scrollYProgress,
    [0, FADE_IN_END, FADE_OUT_START, 1],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      ref={rootRef}
      className={`relative aspect-[1.2] w-full overflow-hidden rounded-[20px] ${className ?? ""}`}
      aria-label="Visitor intelligence"
      role="img"
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
    >
      {/* soft rounded background tile (framer-yosovv → framer-12zm5sp) */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 aspect-square w-[79%] -translate-x-1/2 -translate-y-1/2 rounded-[28px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 42%, #ffffff 0%, #f3effc 55%, rgba(243,239,252,0) 100%)",
          boxShadow:
            "0 0 60px 12px rgba(255,255,255,0.35), 0 0 120px 30px rgba(163,140,255,0.25)",
        }}
      />

      {PIECES.map((p, i) => (
        <motion.div
          key={p.key}
          aria-hidden={p.fadeOut || p.alt === ""}
          className="absolute"
          style={{ ...p.style, width: "100%", maxWidth: p.boxW, zIndex: p.z }}
          custom={i}
          variants={{
            hidden: reduce
              ? { opacity: 1, x: 0, y: 0 }
              : { opacity: 0, x: p.from.x, y: p.from.y ?? 0 },
            show: { opacity: 1, x: 0, y: 0 },
          }}
          transition={{
            delay: reduce ? 0 : 0.15 + i * 0.07,
            duration: reduce ? 0.3 : FLY.duration,
            ease: EASE,
          }}
        >
          {/* memoji + icon chips: hidden on the live site once cards settle.
              Scroll-linked fade — fully visible while the section is in
              view, fades out only as it scrolls toward the viewport edge.
              The wrapper is always rendered so SSR/CSR DOM matches even
              under reduced motion (opacity just stays at 1). */}
          <motion.div
            className="h-full w-full"
            style={{ opacity: p.fadeOut && !reduce ? iconOpacity : 1 }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}