"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

/**
 * ScrollStageCard — the full "customer journey" panel on /audience-signals
 * (live `#main … > div.framer-9o9hsz`, measured 1180×2224, radius 25, bg
 * #fafafa). All coordinates below are panel-relative px, probed from the
 * live DOM at ≥1024px:
 *
 *  - dashed connector SVG at (129,163), 938×1850
 *  - left timeline: Visitor Data avatar (88,124), Intent Score donut
 *    (91,500), Audience Set icon (87,942), each with a purple chip
 *  - card column at x348 w818 h1110: white 699×313 card, sticky top 104
 *    (693px pin travel); content swaps through 3 stages at panelTop+219
 *    and +489 (thirds of the pin travel) — live swap is instant
 *  - audience tree, then the "Send Signals to Meta & Google" band
 *
 * <1024px the live site renders the same 1180px design scaled to the
 * viewport with three static (non-sticky) cards at y104/450/797; we
 * replicate that with a ResizeObserver-measured scale wrapper.
 */

const A = "/content/ad-stack";

const STAGES = [
  {
    heading: "Capture and Synthesise Visitor Data",
    sub: "Read 40+ live signals of how the person moves through the site.",
    img: "jeWMJ0WCKxMGiQBbV89lVG9iMtg.png",
  },
  {
    heading: "Infer Personas & Intent Scores",
    sub: "Learns if the visit shows buying signs or not",
    img: "ubdrEYWcewlvoPRcqn4EKV2Im7k.png",
  },
  {
    heading: "Build ready to run audiences",
    sub: "Transforms raw sessions into pre-qualified audiences, built in seconds.",
    img: "eP16o4bz9Byv3Ix9ICeSFlX118.png",
  },
] as const;

const PANEL_W = 1180;
const PANEL_H = 2224;
/** Scroll offsets (from panel top) where the sticky card flips stage. */
const FLIP_1 = 219;
const FLIP_2 = 489;
/** Static card tops for the scaled (mobile) variant. */
const STATIC_TOPS = [104, 450, 797];

export function ScrollStageCard({ className }: { className?: string }) {
  return (
    <section className={className}>
      {/* ≥1024px: sticky scroll-driven card */}
      <div className="hidden lg:block">
        <ScaledPanel sticky />
      </div>
      {/* <1024px: same design scaled, cards static */}
      <div className="lg:hidden">
        <ScaledPanel />
      </div>
    </section>
  );
}

/** Scales the fixed 1180px panel down when the viewport is narrower. */
function ScaledPanel({ sticky = false }: { sticky?: boolean }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / PANEL_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outerRef} className="w-full">
      <div
        className="relative mx-auto"
        style={{ width: PANEL_W * scale, height: PANEL_H * scale }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left rounded-[25px] bg-[#fafafa]"
          style={{ width: PANEL_W, height: PANEL_H, transform: `scale(${scale})` }}
        >
          <PanelBody sticky={sticky} />
        </div>
      </div>
    </div>
  );
}

function PanelBody({ sticky }: { sticky: boolean }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!sticky) return;
    const onScroll = () => {
      const top = panelRef.current?.getBoundingClientRect().top;
      if (top === undefined) return;
      const past = -top;
      const next = past < FLIP_1 ? 0 : past < FLIP_2 ? 1 : 2;
      setStage((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sticky]);

  return (
    <div ref={panelRef} className="relative h-full w-full">
      <DashedLines />

      {/* start avatar above the panel */}
      <Image
        src={`${A}/oOuJfV3tTXs1JcvlFyzca9QTLE.png`}
        alt=""
        width={54}
        height={54}
        className="absolute top-[-101px] left-[54px] h-[54px] w-[54px] rounded-full"
      />

      {/* left timeline */}
      <Image
        src={`${A}/dEsgAty95se83mJrJ5gfr8mRmyg.png`}
        alt=""
        width={82}
        height={82}
        className="absolute top-[124px] left-[88px] h-[82px] w-[82px] rounded-full"
      />
      <Chip x={188} y={144}>Visitor Data</Chip>

      <DonutScore />
      <Chip x={188} y={522}>Intent Score</Chip>

      <div className="absolute top-[942px] left-[87px]">
        <PersonIcon />
      </div>
      <Chip x={194} y={967}>Audience Set</Chip>

      {/* stage card(s) */}
      {sticky ? (
        <div className="absolute top-0 left-[348px] h-[1110px] w-[818px]">
          <div className="sticky top-[104px] mt-[104px] ml-[60px] h-[313px] w-[699px] overflow-hidden rounded-[20px] bg-white shadow-chip">
            <StageCardContent stage={stage} />
          </div>
        </div>
      ) : (
        STAGES.map((s, i) => (
          <div
            key={s.heading}
            className="absolute left-[408px] h-[313px] w-[699px] overflow-hidden rounded-[20px] bg-white shadow-chip"
            style={{ top: STATIC_TOPS[i] }}
          >
            <StageCardContent stage={i} />
          </div>
        ))
      )}

      {/* audience tree */}
      <Image
        src={`${A}/gZLAafH1JaNckQYQRj61VaGjAE.png`}
        alt=""
        width={82}
        height={82}
        className="absolute top-[1188px] left-[90px] h-[82px] w-[82px] rounded-full"
      />
      <Image
        src={`${A}/dEsgAty95se83mJrJ5gfr8mRmyg.png`}
        alt=""
        width={82}
        height={82}
        className="absolute top-[1187px] left-[549px] h-[82px] w-[82px] rounded-full"
      />
      <Image
        src={`${A}/1ADbuxEK3KWSZJaCcR1zjzTOI.png`}
        alt=""
        width={82}
        height={82}
        className="absolute top-[1188px] left-[1028px] h-[82px] w-[82px] rounded-full"
      />
      <Image
        src={`${A}/u0YqHIxtZtitdTP5wdWRHNQ0.png`}
        alt="Low Intent"
        width={178}
        height={51}
        className="absolute top-[1294px] left-[41px]"
      />
      <Image
        src={`${A}/SPc7DIVwfC2sbFeCxyiNDcUuTA.png`}
        alt="High intent"
        width={226}
        height={65}
        className="absolute top-[1313px] left-[477px]"
      />
      <Image
        src={`${A}/J6AJkMOaw2hrKwvmaOQRq8KfYo.png`}
        alt="Medium Intent"
        width={178}
        height={51}
        className="absolute top-[1294px] left-[979px]"
      />
      <Image
        src={`${A}/Nz6pYQm5pcOrwvQjUcYv50vmc.png`}
        alt=""
        width={59}
        height={59}
        className="absolute top-[1383px] left-[103px] h-[59px] w-[59px] rounded-full"
      />
      <Image
        src={`${A}/ViokixcKqW1yiLka8wRGe80m4.png`}
        alt=""
        width={59}
        height={59}
        className="absolute top-[1382px] left-[1040px] h-[59px] w-[59px] rounded-full"
      />
      <Image
        src={`${A}/mDjwnJiMAjMXp5ji0xpsdLug.png`}
        alt=""
        width={82}
        height={82}
        className="absolute top-[1450px] left-[549px] h-[82px] w-[82px] rounded-full"
      />
      <Image
        src={`${A}/Ws9WGudKaS96eFMnlHmyQ284Ks.png`}
        alt=""
        width={82}
        height={82}
        className="absolute top-[1595px] left-[238px] h-[82px] w-[82px] rounded-full"
      />
      <Image
        src={`${A}/A59gReyh7IeeBQIXpgqdc1cJ4.png`}
        alt=""
        width={82}
        height={82}
        className="absolute top-[1594px] left-[860px] h-[82px] w-[82px] rounded-full"
      />

      {/* send signals band */}
      <h2 className="absolute top-[1702px] w-full text-center font-display text-[56px] leading-none font-medium tracking-[-1px] text-[#181818]">
        Send Signals to{" "}
        <span className="font-semibold text-[#5603C0]">Meta &amp; Google</span>
      </h2>
      <p className="absolute top-[1780px] left-1/2 w-[616px] -translate-x-1/2 text-center text-[18px] leading-[1.5] [font-family:var(--font-dm-sans)] text-[#46484d]">
        It pushes these audiences and hints straight to your ad accounts so your
        platforms fund the right users and ignore the junk.
      </p>
      <Image
        src={`${A}/veQavKKi8OVXgAElb5x8m7TM9Io.png`}
        alt="Meta audiences halo"
        width={274}
        height={274}
        className="absolute top-[1854px] left-[142px]"
      />
      <Image
        src={`${A}/kDoMkQICP60k1aO7YGIcH20sz9g.png`}
        alt="Google audiences halo"
        width={274}
        height={274}
        className="absolute top-[1855px] left-[764px]"
      />
      <a
        href="/contact"
        className="absolute top-[1988px] left-[494px] block h-[49px] w-[192px]"
      >
        <span
          aria-hidden
          className="absolute bottom-[-8px] left-1/2 h-6 w-[127px] -translate-x-1/2 rounded-[135px]"
          style={{
            background:
              "linear-gradient(90deg, rgb(33,204,238) 0%, rgb(20,112,239) 33.28%, rgb(105,39,218) 68.47%, rgb(242,61,148) 100%)",
            filter: "blur(17px)",
          }}
        />
        <span
          className="relative flex h-full w-full items-center justify-center rounded-full font-sans text-[14px] leading-none font-medium text-white"
          style={{
            background:
              "linear-gradient(180deg, rgb(255,255,255) -51%, rgb(16,2,2) 18%, rgb(16,2,2) 132%)",
          }}
        >
          +20% ROAS in 30 days
        </span>
      </a>
    </div>
  );
}

function StageCardContent({ stage }: { stage: number }) {
  const s = STAGES[stage];
  return (
    <div className="flex h-full w-full flex-col items-center">
      <h3 className="pt-[18px] text-center font-display text-[27px] leading-8 font-medium tracking-[-0.3px] text-[#181818]">
        {s.heading}
      </h3>
      <p className="mt-[15px] text-center text-[15px] leading-5 [font-family:var(--font-dm-sans)] text-[#46484d]">
        {s.sub}
      </p>
      <div className="relative mt-[12px] w-full">
        <Image
          src={`${A}/${s.img}`}
          alt=""
          width={2208}
          height={762}
          className="h-[242px] w-full object-cover object-top"
        />
        {stage === 0 && (
          <Image
            src={`${A}/hxZwIS4xeL7LLVvUd29KhGWgBs.png`}
            alt=""
            width={47}
            height={47}
            className="absolute top-[9px] left-1/2 h-[47px] w-[47px] -translate-x-1/2 rounded-full"
          />
        )}
      </div>
    </div>
  );
}

function Chip({
  x,
  y,
  children,
}: {
  x: number;
  y: number;
  children: string;
}) {
  return (
    <span
      className="absolute z-[1] inline-flex h-8 items-center justify-center rounded-full bg-[#5603C1] px-3.5 font-display text-[20px] leading-none font-medium whitespace-nowrap text-white shadow-chip"
      style={{ left: x, top: y }}
    >
      {children}
    </span>
  );
}

function DonutScore() {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");
  return (
    <div className="absolute top-[500px] left-[91px] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#5603C1]">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
        <mask id={`${id}-m`} fill="white">
          <path d="M28 0C34.2465 7.44885e-08 40.3136 2.08873 45.2363 5.93394C50.1589 9.77915 53.6545 15.16 55.1669 21.2206C56.6793 27.2813 56.1217 33.6736 53.5828 39.3808C51.0438 45.088 46.6694 49.7824 41.1553 52.7172C35.6412 55.652 29.3041 56.6586 23.1519 55.5771C16.9998 54.4956 11.386 51.3879 7.20344 46.7484C3.02088 42.1089 0.509802 36.2041 0.0696113 29.9732C-0.37058 23.7422 1.2854 17.543 4.77415 12.3616L10.6962 16.349C8.09701 20.2093 6.86326 24.8279 7.19122 29.4701C7.51917 34.1123 9.38998 38.5115 12.5061 41.968C15.6222 45.4245 19.8046 47.7398 24.3881 48.5456C28.9716 49.3513 33.6929 48.6013 37.801 46.4149C41.9092 44.2284 45.1682 40.731 47.0597 36.4789C48.9513 32.2269 49.3667 27.4645 48.24 22.9492C47.1132 18.4339 44.5089 14.425 40.8414 11.5603C37.1739 8.6955 32.6538 7.13935 28 7.13935L28 0Z" />
        </mask>
        <path
          d="M28 0C34.2465 7.44885e-08 40.3136 2.08873 45.2363 5.93394C50.1589 9.77915 53.6545 15.16 55.1669 21.2206C56.6793 27.2813 56.1217 33.6736 53.5828 39.3808C51.0438 45.088 46.6694 49.7824 41.1553 52.7172C35.6412 55.652 29.3041 56.6586 23.1519 55.5771C16.9998 54.4956 11.386 51.3879 7.20344 46.7484C3.02088 42.1089 0.509802 36.2041 0.0696113 29.9732C-0.37058 23.7422 1.2854 17.543 4.77415 12.3616L10.6962 16.349C8.09701 20.2093 6.86326 24.8279 7.19122 29.4701C7.51917 34.1123 9.38998 38.5115 12.5061 41.968C15.6222 45.4245 19.8046 47.7398 24.3881 48.5456C28.9716 49.3513 33.6929 48.6013 37.801 46.4149C41.9092 44.2284 45.1682 40.731 47.0597 36.4789C48.9513 32.2269 49.3667 27.4645 48.24 22.9492C47.1132 18.4339 44.5089 14.425 40.8414 11.5603C37.1739 8.6955 32.6538 7.13935 28 7.13935L28 0Z"
          stroke="white"
          strokeWidth={10}
          mask={`url(#${id}-m)`}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[14px] font-medium text-white [font-family:var(--font-dm-sans)]">
        8/10
      </span>
    </div>
  );
}

function PersonIcon() {
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden>
      <circle cx="42" cy="42" r="42" fill="#5603C1" />
      <circle cx="34" cy="32" r="9" fill="#fff" />
      <path
        d="M19 59c0-9.5 6.5-15.5 15-15.5S49 49.5 49 59c0 .9-.7 1.6-1.6 1.6H20.6c-.9 0-1.6-.7-1.6-1.6Z"
        fill="#fff"
      />
      <circle cx="55.5" cy="34.5" r="6.5" fill="#fff" opacity=".8" />
      <path
        d="M53.5 45.2c6.6-.5 11.5 4.4 11.5 11.2 0 1.5-.5 2.2-2 2.2h-9.5"
        fill="none"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        opacity=".8"
      />
    </svg>
  );
}

/** Exact dashed connector paths from the live panel (audit/asw-lines.svg). */
function DashedLines() {
  return (
    <svg
      width={938.114}
      height={1850}
      viewBox="0 0 938.114 1850"
      fill="none"
      aria-hidden
      className="absolute top-[163px] left-[129px]"
    >
      <path
        d="M 0 0 L 0 1066.844 C 0 1066.844 234.529 1066.876 469.057 1066.907 C 703.586 1066.939 938.114 1066.97 938.114 1066.97 L 938.114 1247.823"
        stroke="rgba(85, 4, 191, 0.49)"
        strokeWidth="2"
        strokeDasharray="7"
      />
      <path
        d="M 465.351 1065.84 L 465.477 1336.24 L 149.5 1336.5 L 149.5 1850"
        stroke="rgba(85, 4, 191, 0.42)"
        strokeWidth="2"
        strokeDasharray="8"
      />
      <path
        d="M 465.1 1336.366 L 772 1336 L 772.151 1843.76"
        stroke="rgba(85, 4, 191, 0.42)"
        strokeWidth="2"
        strokeDasharray="8"
      />
      <path
        d="M 0.754 1066.593 L 0.879 1248.074"
        stroke="rgba(85, 4, 191, 0.49)"
        strokeWidth="2"
        strokeDasharray="7"
      />
    </svg>
  );
}