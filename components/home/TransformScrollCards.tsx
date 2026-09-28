"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { TRANSFORM } from "@/lib/home-data";

type TransformStat = (typeof TRANSFORM)["stats"][number];

/* ---------- Phosphor duotone bullet icons (live site) ---------- */

export function CheckCircleIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 256 256" className="h-full w-full" fill={color} aria-hidden>
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
    </svg>
  );
}

export function TriangleIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 256 256" className="h-full w-full" fill={color} aria-hidden>
      <path d="M208,160H48l80-80Z" opacity="0.2" />
      <path d="M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z" />
    </svg>
  );
}

export function ArrowsOutIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 256 256" className="h-full w-full" fill={color} aria-hidden>
      <path d="M240,128l-72,64H88L16,128,88,64h80Z" opacity="0.2" />
      <path d="M93.31,70,28,128l65.27,58a8,8,0,1,1-10.62,12l-72-64a8,8,0,0,1,0-12l72-64A8,8,0,1,1,93.31,70Zm152,52-72-64a8,8,0,0,0-10.62,12L228,128l-65.27,58a8,8,0,1,0,10.62,12l72-64a8,8,0,0,0,0-12Z" />
    </svg>
  );
}

export const BULLET_COLORS = ["#03a174", "#00b505", "#ffb407"] as const;
const BULLET_ICONS = [CheckCircleIcon, TriangleIcon, ArrowsOutIcon];

export function BulletIcon({ i, color }: { i: number; color: string }) {
  const Icon = BULLET_ICONS[i % BULLET_ICONS.length];
  return <Icon color={color} />;
}

/* ---------- Card 1 visual: rotating orbit around center avatar ---------- */

const ORBIT_ICONS = [
  { size: 37, style: { bottom: 37, left: 25 } },
  { size: 29, style: { bottom: 108, left: 0 } },
  { size: 34, style: { top: 69, left: 13 } },
  { size: 32, style: { top: 14, left: 64 } },
  { size: 37, style: { top: 0, left: 158 } },
  { size: 37, style: { top: 39, left: 222 } },
  { size: 26, style: { top: 111, right: 0 } },
  { size: 35, style: { bottom: 0, left: 87 } },
  { size: 35, style: { bottom: 2, left: 173 } },
  { size: 37, style: { bottom: 55, left: 239 } },
] as const;

/** Small product/feature glyphs placed on the orbit ring (Phosphor-style). */
function OrbitGlyph({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size * 0.45}
      height={size * 0.45}
      fill="none"
      stroke="rgba(255,255,255,0.55)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M9 12h6" />
    </svg>
  );
}

export function OrbitVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-[292px] w-[292px] shrink-0 overflow-hidden">
      {/* rotating outer ring: icons spin with it */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 60, ease: "linear", repeat: Infinity }}
      >
        {ORBIT_ICONS.map((ic, i) => (
          <span
            key={i}
            className="absolute flex items-center justify-center rounded-full border border-[#58585840] bg-[#2A2337]"
            style={{ width: ic.size, height: ic.size, ...ic.style }}
          >
            <OrbitGlyph size={ic.size} />
          </span>
        ))}
      </motion.div>

      {/* static rings (counter-rotate not needed: rings are round) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full border-[0.52px] border-[#58585840] backdrop-blur-[6px]"
      />
      <div
        aria-hidden
        className="absolute top-[77px] left-[80px] h-[136px] w-[136px] rounded-full border-[0.52px] border-[#58585840]"
      />

      {/* center avatar: glass ring + rounded photo */}
      <div className="absolute top-[103px] left-[105px] h-[78px] w-[78px]">
        <div className="absolute inset-0 rounded-full border-[0.52px] border-[#58585840] backdrop-blur-[6px]" />
        <Image
          src="/content/B778rpCvrDwKD5ve7xAwaWsFw.png"
          alt=""
          aria-hidden
          width={67}
          height={67}
          className="absolute top-[5px] left-[5px] h-[67px] w-[67px] rounded-full object-cover"
        />
      </div>

      {/* persona chips — fixed positions, do not rotate */}
      <span className="absolute top-[60px] left-[78px] rounded-[13px] border-[0.52px] border-[#5858584f] bg-[#271f36cf] px-3 py-1.5 font-micro text-[8px] font-medium text-white">
        Window Shopper
      </span>
      <span className="absolute top-[130px] right-[8px] rounded-[13px] border-[0.52px] border-[#5858584f] bg-[#271f36cf] px-3 py-2 font-micro text-[8px] font-medium text-white">
        Returner
      </span>
      <span className="absolute top-[242px] left-[64px] rounded-[13px] border-[0.52px] border-[#5858584f] bg-[#271f36cf] px-3 py-2 font-micro text-[8px] font-medium text-white">
        First - Time Visitor
      </span>
      <span className="absolute top-[174px] left-[8px] rounded-[13px] border-[0.52px] border-[#5858584f] bg-[#271f36cf] px-3 py-2 font-micro text-[8px] font-medium text-white">
        Offer Thrifter
      </span>
    </div>
  );
}

/* ---------- Card 2 visual: 3-card fan with search pill ---------- */

const FAN_CARDS = [
  { img: "/content/kQnkdz8ArGjcylWi0cFKnhapro.png", price: "$90.00", tag: "Similar Product", rotate: -14, x: -150, y: 8, z: 1 },
  { img: "/content/2IWx2xEZI4QlBpRtniJq5ObVzA.png", price: "$100.00", tag: "4.5/5 recommended", rotate: 0, x: 0, y: 26, z: 3 },
  { img: "/content/ER74UqEKt1mygqpYCq7i1CvFcuM.png", price: "$110.00", tag: "Similar Product", rotate: 14, x: 150, y: 8, z: 2 },
] as const;

export function ProductFanVisual() {
  return (
    <div className="relative flex h-[330px] w-[440px] shrink-0 items-center justify-center">
      {FAN_CARDS.map((c, i) => (
        <div
          key={c.price}
          className="absolute w-[210px] rounded-[26px] bg-[#332C45] p-2.5"
          style={{
            transform: `translate(${c.x}px, ${c.y}px) rotate(${c.rotate}deg)`,
            zIndex: c.z,
          }}
        >
          <div className="overflow-hidden rounded-[18px] bg-white">
            <Image
              src={c.img}
              alt="Track Jacket"
              width={300}
              height={300}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="px-2 pt-2 pb-1 text-center">
            {iCenter(i) && (
              <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-black px-2.5 py-1 font-micro text-[9px] text-white">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2.5" />
                  <path d="M20 20l-3.5-3.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                Show me a good track suit
              </span>
            )}
            <p className="font-micro text-[10px] text-white/60">{c.tag}</p>
            <p className="mt-0.5 font-sans text-[13px] font-medium text-white">
              Track Jacket <span className="font-semibold">{c.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const iCenter = (i: number) => i === 1;

/* ---------- Card 3 visual: retention collage (asset) ---------- */

export function RetainVisual() {
  return (
    <div className="relative h-[330px] w-[440px] shrink-0">
      <Image
        src="/content/MODUsRsJOI2AW1QZ1Ge7dxHIlZk.png"
        alt="Dynamic retention landing pages preview"
        fill
        sizes="440px"
        className="object-contain"
      />
    </div>
  );
}

/* ---------- Section: pinned horizontal scroll ---------- */

/**
 * Pinned horizontal card track ("Transform. Personalize. Elevate." stats).
 * Replicates the live site (#r0WBgwCNw transform band): the section pins
 * while scrolling and the three dark cards translate sideways one by one,
 * driven 1:1 by scroll progress. Mobile falls back to native swipe/snap.
 */
export function TransformScrollCards() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  const visual = (s: TransformStat) => {
    if (s.visual === "personas") return <OrbitVisual />;
    if (s.visual === "products") return <ProductFanVisual />;
    return <RetainVisual />;
  };

  const card = (s: TransformStat) => (
    <div className="flex h-full w-[min(84vw,1160px)] shrink-0 items-center justify-between gap-10 rounded-[30px] bg-[#1D1729] p-10 shadow-grape">
      <div className="max-w-[475px]">
        <h3 className="font-display text-[34px] leading-[1.2] font-normal text-white">
          {s.title.map((seg, i) =>
            seg.b ? <strong key={i} className="font-bold">{seg.t}</strong> : <span key={i}>{seg.t}</span>,
          )}
        </h3>
        <p className="mt-4 font-sans text-base font-medium text-white">{s.kicker}</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {s.points.map((p, i) => (
            <li key={p} className="flex items-center gap-3">
              <span className="h-[22px] w-[22px] shrink-0">
                <BulletIcon i={i} color={BULLET_COLORS[s.visual === "products" ? 1 : s.visual === "retain" ? 2 : 0]} />
              </span>
              <span className="font-display text-[15px] leading-[1.5] text-white">{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden shrink-0 md:block">{visual(s)}</div>
    </div>
  );

  if (reduce) {
    return (
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6">
        {TRANSFORM.stats.map((s) => (
          <div key={s.kicker}>{card(s)}</div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Desktop/tablet: pinned scroll-driven track */}
      <div ref={sectionRef} className="relative hidden h-[280vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max items-center gap-[clamp(24px,9vw,200px)] pr-[max(1.5rem,calc(50vw-580px))] pl-[max(1.5rem,calc(50vw-580px))] will-change-transform"
          >
            {TRANSFORM.stats.map((s) => (
              <div key={s.kicker} className="h-[min(72vh,600px)]">
                {card(s)}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: native horizontal swipe */}
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pl-[max(1.5rem,calc(50vw-620px))] lg:hidden">
        {TRANSFORM.stats.map((s) => (
          <div key={s.kicker} className="shrink-0 snap-start">
            {card(s)}
          </div>
        ))}
      </div>
    </>
  );
}