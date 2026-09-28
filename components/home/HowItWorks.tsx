"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";
import { HOW_IT_WORKS } from "@/lib/home-data";

/* =====================================================================
   HowItWorks — live "How it works?" section.

   Three 340×255 white cards (radius 18, soft 3-stop shadow, cards 2/3
   have a 1px white/30 border) each with a 296–304px wide line-art SVG
   and a centered 19px Poppins purple caption. The container is scaled
   1.1 on desktop (live .framer-ubcas) with a lavender radial glow
   tucked behind the third card and a wide periwinkle radial under the
   row (live .framer-kznolr).
   ===================================================================== */

const CARDS = [
  { key: "grid", src: "/content/how/script-grid.svg", w: 296, h: 129, padTop: 0 },
  { key: "browser", src: "/content/how/personalisation-browser.svg", w: 304, h: 141, padTop: 0 },
  { key: "path", src: "/content/how/learning-path.svg", w: 298, h: 137, padTop: 0 },
] as const;

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white pb-[140px] pt-[90px]">
      {/* wide lavender glow under the card row (live BG Radial 1) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[45px] left-1/2 h-[292px] w-[720px] -translate-x-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(208,208,255,0.5) 49.0428%, rgba(255,255,255,0) 100%)",
        }}
      />

      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 15 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={reduce ? { duration: 0 } : SCROLL_TWEEN}
        className="text-display relative text-center text-[32px] leading-[1.25em] tracking-[-1px] text-grape sm:text-[50px]"
      >
        {HOW_IT_WORKS.heading}
      </motion.h2>

      {/* live renders this row at scale(1.1) on desktop */}
      <div className="relative mx-auto mt-[47px] flex w-fit flex-col justify-center gap-6 max-md:scale-[0.7] sm:flex-row sm:gap-6 lg:scale-110">
        {HOW_IT_WORKS.steps.map((step, i) => {
          const card = CARDS[i];
          return (
            <motion.article
              key={step.n}
              initial={reduce ? false : { opacity: 0, y: 50 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: i * 0.08 }}
              className={`flex h-[255px] w-[340px] flex-col items-center overflow-hidden rounded-[18px] bg-white px-[15px] pb-[30px] pt-[30px] ${
                i > 0 ? "border border-white/30" : ""
              }`}
              style={{
                boxShadow:
                  "0 4.98758px 17.3568px #1e232905, 0 16.7522px 58.2978px #1e23290a, 0 75px 261px #1e23290f",
              }}
            >
              <div className="flex w-full items-center justify-center">
                <Image
                  src={card.src}
                  alt=""
                  aria-hidden
                  width={card.w}
                  height={card.h}
                  unoptimized
                  style={{ width: card.w, height: card.h }}
                />
              </div>
              <p className="mt-5 text-center font-display text-[19px] font-medium leading-[1.35] text-[#563E69]">
                {step.text}
              </p>
            </motion.article>
          );
        })}
      </div>

      {/* lavender radial behind card 3 (live BG Radial 2) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[60px] top-0 hidden h-[339px] w-[339px] opacity-60 lg:block"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #ecd8f3 49.5724%, rgba(255,255,255,0) 100%)",
        }}
      />
    </section>
  );
}