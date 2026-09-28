"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN } from "@/lib/motion";
import { AGENTIC } from "@/lib/home-data";

/* =====================================================================
   AgenticPlatform — live "End to End Agentic growth enabler platform"
   section (#main > … > div.framer-pr37y4).

   Four fixed 250×370 glass cards (Inputs / Decisions / Action / Output),
   each with a segmented progress bar (fills 1→4), Poppins title + purple
   value line, and a contained dashboard mockup visual. A hairline
   connector runs behind the row (horizontal on desktop, vertical on
   mobile), replicating the live 828×1 divider / 2×1160 spine.

   Geometry below is measured from the live DOM (framer-ejNwT desktop
   variant) and rebuilt natively; the tiny 4–10px type is intentional —
   the mockups are decorative (aria-hidden).
   ===================================================================== */

const A = "/content/agentic";

/* ---------- shared micro-pieces ---------- */

function SegmentBar({ filled }: { filled: number }) {
  return (
    <div aria-hidden className="absolute left-[13px] top-[26px] flex h-[3px] w-[221px] gap-[3px]">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-full flex-1 rounded-[2px] ${i < filled ? "bg-[#060606]" : "bg-[#060606]/10"}`}
        />
      ))}
    </div>
  );
}

function GreenUp({ size = 5 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-1 -1 7 7" fill="none" aria-hidden>
      <path
        d="M0 2.03737L2.09558 0M2.09558 0L4.19115 2.03737M2.09558 0L2.09558 4.88968"
        stroke="#13BB2E"
        strokeWidth="0.679"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RedDown({ size = 5 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-1 -1 7 7" fill="none" aria-hidden>
      <path
        d="M4.19115 2.85231L2.09558 4.88968M2.09558 4.88968L0 2.85231M2.09558 4.88968L2.09558 0"
        stroke="#FF1852"
        strokeWidth="0.679"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowNE({ size = 9 }: { size?: number }) {
  return (
    <Image
      src={`${A}/arrow-ne.svg`}
      alt=""
      aria-hidden
      width={size}
      height={size}
      unoptimized
      className="h-auto w-full"
    />
  );
}

function Chip({
  x,
  label,
  active,
  top = 28,
}: {
  x: string;
  label: string;
  active?: boolean;
  top?: number;
}) {
  return (
    <span
      className={`absolute flex h-[7px] w-[38px] items-center justify-center rounded-[12px] text-[4px] font-medium leading-none text-black/85 ${
        active ? "bg-white" : ""
      }`}
      style={{ top, left: `calc(${x} - 19px)` }}
    >
      {label}
    </span>
  );
}

/** Tilted-paper background stack (shadow-less gradient art from the live mockups). */
function PaperLayers({ variant }: { variant: "a" | "b" | "c" }) {
  if (variant === "a") {
    return (
      <>
        <Image src={`${A}/shadow-a.svg`} alt="" aria-hidden width={173} height={196} unoptimized className="absolute left-[-15px] top-[-12px] h-[196px] w-[173px]" />
        <Image src={`${A}/paper-a.svg`} alt="" aria-hidden width={173} height={196} unoptimized className="absolute left-[-15px] top-[-12px] h-[196px] w-[173px]" />
        <Image src={`${A}/pageborder-a.svg`} alt="" aria-hidden width={156} height={112} unoptimized className="absolute left-[-7px] top-[-12px] h-[112px] w-[156px]" />
      </>
    );
  }
  if (variant === "b") {
    return (
      <>
        <Image src={`${A}/shadow-b.svg`} alt="" aria-hidden width={144} height={173} unoptimized className="absolute left-[-1px] top-[-1px] h-[173px] w-[144px]" />
        <Image src={`${A}/paper-b.svg`} alt="" aria-hidden width={144} height={173} unoptimized className="absolute left-[-1px] top-[-1px] h-[173px] w-[144px]" />
        <Image src={`${A}/pageborder-b.svg`} alt="" aria-hidden width={143} height={87} unoptimized className="absolute left-0 top-0 h-[87px] w-[143px]" />
      </>
    );
  }
  return (
    <>
      <Image src={`${A}/shadow-c.svg`} alt="" aria-hidden width={171} height={195} unoptimized className="absolute left-[-14px] top-[-12px] h-[195px] w-[171px]" />
      <Image src={`${A}/paper-c.svg`} alt="" aria-hidden width={171} height={195} unoptimized className="absolute left-[-14px] top-[-12px] h-[195px] w-[171px]" />
      <Image src={`${A}/pageborder-c.svg`} alt="" aria-hidden width={156} height={111} unoptimized className="absolute left-[-6px] top-[-12px] h-[111px] w-[156px]" />
    </>
  );
}

function PulseLabel() {
  return (
    <span className="absolute left-[34%] top-[9%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[7px] font-medium text-black/85">
      Analytics AI (Pulse)
    </span>
  );
}

/* ---------- Decisions card: 3 stacked Pulse papers ---------- */

function PaperOne() {
  return (
    <div className="absolute left-[74px] top-[127px] h-[147px] w-[143px] rotate-[11deg]">
      <PaperLayers variant="a" />
      <PulseLabel />
      <Image src={`${A}/icon-chart-a.svg`} alt="" aria-hidden width={5} height={5} unoptimized className="absolute left-[11px] top-[11px]" />
      <div aria-hidden className="absolute left-1/2 top-[26px] h-[10px] w-[123px] -translate-x-1/2 rounded-full bg-black/[0.02]" />
      <div aria-hidden className="absolute left-1/2 top-[41px] h-[116px] w-[123px] -translate-x-1/2 rounded-[5px] bg-white shadow-chip" />
      <Chip x="22.0282%" label="Intent score" />
      <Chip x="50.1529%" label="Revenue" />
      <Chip x="78.2711%" label="Insights" active />
      <span className="absolute left-[20px] top-[99px] text-[4px] font-medium leading-none text-black/50">
        Total Intent Score
      </span>
      <span className="absolute left-[106px] top-[99px] flex h-[5px] w-[5px] items-center justify-center rounded-[1px] bg-[#13BB2E]/[0.05]">
        <GreenUp size={5} />
      </span>
      <span className="absolute left-[112px] top-[100px] text-[4px] font-medium leading-none text-[#13BB2E]">N2</span>
      <p className="absolute left-[20px] top-[107px] text-[6px] font-semibold leading-none text-black/75">
        N<span className="text-[13px]">7.5/10</span>
      </p>
      <span className="absolute left-[54px] top-[51px] text-[4px] font-medium leading-none text-black/85">Top User</span>
      <span className="absolute left-[54px] top-[65px] text-[4px] font-medium leading-none text-black/85">Pain Point</span>
      <p className="absolute left-[54px] top-[56px] text-[6px] font-medium leading-none text-black/75">Shubham Tiwari</p>
      <p className="absolute left-[54px] top-[71px] w-[69px] text-[6px] font-medium leading-[1.2] text-black/75">
        Run ads to a better audience
      </p>
      <Image
        src={`${A}/avatar-shubham.png`}
        alt=""
        aria-hidden
        width={28}
        height={28}
        className="absolute left-[20px] top-[51px] h-[28px] w-[28px] rounded-full object-cover"
      />
      <Image src={`${A}/line.svg`} alt="" aria-hidden width={103} height={21} unoptimized className="absolute left-[20px] top-[83px] h-[21px] w-[103px]" />
      {[
        { img: "avatar-1.png", left: 20 },
        { img: "avatar-2.png", left: 28 },
        { img: "avatar-3.png", left: 37 },
        { img: "avatar-4.png", left: 46 },
      ].map((av) => (
        <Image
          key={av.left}
          src={`${A}/${av.img}`}
          alt=""
          aria-hidden
          width={15}
          height={15}
          className="absolute top-[131px] h-[15px] w-[15px] rounded-full border border-[#EBEBEB] object-cover"
          style={{ left: av.left }}
        />
      ))}
      <span className="absolute flex h-[7px] w-[29px] items-center justify-center rounded-[12px] bg-black/[0.02] text-[4px] font-medium leading-none text-black/85" style={{ top: 137, left: "calc(75.7904% - 14.7px)" }}>
        View All
      </span>
    </div>
  );
}

function MiniRatingBar({
  top,
  label,
  tone,
}: {
  top: number;
  label: string;
  tone: "green" | "red";
}) {
  const segments = [
    { filled: false },
    { filled: true },
    { filled: true },
    { filled: true },
    { filled: true },
  ];
  return (
    <div className="absolute h-[27px] w-[113px]" style={{ top, left: 15 }}>
      <span className="absolute left-0 top-[81%] -translate-y-1/2 text-[6px] leading-[9.8px] text-[#696C6D]">
        Low Intent
      </span>
      <span className="absolute left-[84px] top-[81%] -translate-y-1/2 text-right text-[6px] leading-[9.8px] text-[#696C6D]">
        High Intent
      </span>
      <span className="absolute left-0 top-[19%] -translate-y-1/2 text-[7px] font-bold leading-[9.8px] text-[#414D55]">
        {label}
      </span>
      <div aria-hidden className="absolute left-0 top-[13px] flex h-[3px] w-[113px]">
        {segments.map((s, i) => (
          <span
            key={i}
            className="absolute inset-y-0 rounded-[1px]"
            style={{
              ...(i === 0
                ? { left: 94, right: 0 }
                : i === 1
                  ? { left: 70, right: 23 }
                  : i === 2
                    ? { left: 47, right: 47 }
                    : i === 3
                      ? { left: 23, right: 70 }
                      : { left: 0, right: 94 }),
              background: s.filled
                ? tone === "green"
                  ? "linear-gradient(0deg, rgb(79, 255, 4) 0%, rgb(86, 224, 40) 100%)"
                  : "linear-gradient(0deg, rgb(255, 4, 4) 0%, rgb(224, 40, 40) 100%)"
                : "rgba(184, 210, 222, 0.3)",
              border: s.filled ? "none" : "0.48px solid rgb(162, 196, 212)",
              opacity: s.filled ? 1 : 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PaperTwo() {
  return (
    <div className="absolute left-[52px] top-[139px] h-[147px] w-[143px]">
      <PaperLayers variant="b" />
      <PulseLabel />
      <Image src={`${A}/icon-chart-b.svg`} alt="" aria-hidden width={5} height={5} unoptimized className="absolute left-[11px] top-[11px]" />
      <div aria-hidden className="absolute left-1/2 top-[26px] h-[10px] w-[123px] -translate-x-1/2 rounded-full bg-black/[0.02]" />
      <div aria-hidden className="absolute left-1/2 top-[41px] h-[25px] w-[123px] -translate-x-1/2 rounded-[5px] bg-white shadow-chip" />
      <div aria-hidden className="absolute left-1/2 top-[70px] h-[87px] w-[123px] -translate-x-1/2 rounded-[5px] bg-white shadow-chip" />
      <Chip x="22.0286%" label="Intent score" active top={28} />
      <Chip x="50.1515%" label="Revenue" top={28} />
      <Chip x="78.2743%" label="Insights" top={28} />
      <div className="absolute left-[20px] top-[46px] h-[14px] w-[36px]">
        <span className="absolute left-[7px] top-0 text-[4px] font-medium leading-none text-black/50">Person Score</span>
        <div className="absolute left-0 top-[8px] flex h-[7px] w-[36px] items-center">
          <span className="ml-[6px] text-[10px] font-medium leading-none text-black">7.27/10</span>
          <span className="ml-[2px] flex h-[5px] w-[5px] items-center justify-center rounded-[1px] border border-[#13BB2E]/25 bg-[#13BB2E]/15">
            <GreenUp size={5} />
          </span>
        </div>
      </div>
      <div className="absolute left-[86px] top-[46px] h-[14px] w-[36px]">
        <span className="absolute left-[8px] top-0 text-[4px] font-medium leading-none text-black/50">Intent Score</span>
        <div className="absolute left-0 top-[8px] flex h-[7px] w-[36px] items-center">
          <span className="ml-[6px] text-[10px] font-medium leading-none text-black">5.99/10</span>
          <span className="ml-[2px] flex h-[5px] w-[5px] rotate-180 items-center justify-center rounded-[1px] border border-[#FF1852]/25 bg-[#FF1852]/15">
            <RedDown size={5} />
          </span>
        </div>
      </div>
      <span className="absolute left-[115px] top-[74px] flex h-[5px] w-[5px] items-center justify-center rounded-[1px] bg-[#13BB2E]/[0.05]">
        <GreenUp size={5} />
      </span>
      <span className="absolute left-[15px] top-[75px] text-[4px] font-medium leading-none text-black/50">Total Conversions</span>
      <span className="absolute left-[121px] top-[75px] text-[4px] font-medium leading-none text-[#13BB2E]">500</span>
      <p className="absolute left-[15px] top-[83px] text-[13px] font-semibold leading-none text-black/75">800 (every 1,000)</p>
      <MiniRatingBar top={125} label="Person Score" tone="green" />
      <MiniRatingBar top={98} label="Intent Score" tone="red" />
    </div>
  );
}

function PaperThree() {
  return (
    <div className="absolute left-[33px] top-[162px] h-[147px] w-[143px] -rotate-[10deg]">
      <PaperLayers variant="c" />
      <PulseLabel />
      <Image src={`${A}/icon-chart-c.svg`} alt="" aria-hidden width={5} height={5} unoptimized className="absolute left-[11px] top-[11px]" />
      <div aria-hidden className="absolute left-1/2 top-[24px] h-[10px] w-[123px] -translate-x-1/2 rounded-full bg-black/[0.02]" />
      <div aria-hidden className="absolute left-1/2 top-[38px] h-[25px] w-[123px] -translate-x-1/2 rounded-[5px] bg-white shadow-chip" />
      <div aria-hidden className="absolute left-1/2 top-[68px] h-[87px] w-[123px] -translate-x-1/2 rounded-[5px] bg-white shadow-chip" />
      <Chip x="22.0284%" label="Intent score" top={25} />
      <Chip x="50.1506%" label="Revenue" active top={25} />
      <Chip x="78.2727%" label="Insights" top={25} />
      <div className="absolute left-[20px] top-[43px] h-[14px] w-[45px]">
        <span className="absolute left-[14px] top-0 text-[4px] font-medium leading-none text-black/50">This Week</span>
        <div className="absolute left-0 top-[8px] flex h-[7px] items-center">
          <span className="ml-[6px] text-[10px] font-medium leading-none text-black">$2,000.0</span>
          <span className="ml-[2px] flex h-[5px] w-[5px] items-center justify-center rounded-[1px] border border-[#13BB2E]/25 bg-[#13BB2E]/15">
            <GreenUp size={5} />
          </span>
        </div>
      </div>
      <div className="absolute left-[82px] top-[43px] h-[14px] w-[41px]">
        <span className="absolute left-[12px] top-0 text-[4px] font-medium leading-none text-black/50">Past Week</span>
        <div className="absolute left-0 top-[8px] flex h-[7px] items-center">
          <span className="ml-[6px] text-[10px] font-medium leading-none text-black">$1,255.0</span>
          <span className="ml-[2px] flex h-[5px] w-[5px] rotate-180 items-center justify-center rounded-[1px] border border-[#FF1852]/25 bg-[#FF1852]/15">
            <RedDown size={5} />
          </span>
        </div>
      </div>
      <Image src={`${A}/charts-c.svg`} alt="" aria-hidden width={136} height={103} unoptimized className="absolute left-[4px] top-[61px] h-[103px] w-[136px]" />
      <span className="absolute left-[106px] top-[72px] flex h-[5px] w-[5px] items-center justify-center rounded-[1px] bg-[#13BB2E]/[0.05]">
        <GreenUp size={5} />
      </span>
      <span className="absolute left-[15px] top-[73px] text-[4px] font-medium leading-none text-black/50">Total Monthly Sales</span>
      <span className="absolute left-[112px] top-[73px] text-[4px] font-medium leading-none text-[#13BB2E]">10.52%</span>
      <p className="absolute left-[15px] top-[80px] text-[13px] font-semibold leading-none text-black/75">$25,000</p>
      {[
        ["Mon", 17],
        ["Tues", 34],
        ["Wed", 52],
        ["Thurs", 69],
        ["Fri", 88],
        ["Sat", 102],
        ["Sun", 118],
      ].map(([d, l]) => (
        <span key={d as string} className="absolute top-[142px] text-[4px] font-medium leading-none text-black/50" style={{ left: l as number }}>
          {d}
        </span>
      ))}
      <Image src={`${A}/status-dot.svg`} alt="" aria-hidden width={7} height={7} unoptimized className="absolute left-[109px] top-[97px] h-[7px] w-[7px]" />
      <div className="absolute left-[101px] top-[83px] h-[13px] w-[23px]">
        <Image src={`${A}/tooltip-wide.svg`} alt="" aria-hidden width={25} height={17} unoptimized className="absolute left-[-1px] top-[-2px] h-[17px] w-[25px]" />
        <span className="absolute left-[2px] top-[1px] text-center text-[6px] font-medium uppercase leading-[9.8px] tracking-[0.24px] text-black/75">
          15,000
        </span>
      </div>
      <p className="absolute left-1/2 top-[159px] -translate-x-1/2 whitespace-nowrap text-[4px] font-medium text-black/50">
        <span className="font-bold text-black/70">15%</span> until you achieve your target for this month
      </p>
    </div>
  );
}

/* ---------- Output card: 3 tilted notification cards ---------- */

function OutputVisual() {
  return (
    <div className="absolute left-[20px] top-[135px] h-[195px] w-[206px]">
      {/* back — Analytics / Your revenue is up */}
      <div className="absolute left-[27px] top-[10px] h-[117px] w-[147px] rotate-[8deg]">
        <div className="absolute inset-0 rounded-[9.59px] border border-[#386641]/[0.1] bg-white shadow-[2.05px_2.05px_21.26px_0px_rgba(0,0,0,0.25)]" />
        <span className="absolute left-[12px] top-[12px] text-[10px] font-medium leading-none text-black/50">Analytics</span>
        <div className="absolute left-[12px] top-[29px] flex h-[5px] w-[66px] items-center">
          <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-[#23C200]" />
          <span className="ml-[3px] whitespace-nowrap text-[7px] leading-none text-[#171717]">Your revenue is up</span>
        </div>
        <Image src={`${A}/graph.svg`} alt="" aria-hidden width={117} height={67} unoptimized className="absolute left-[15px] top-[46px] h-[67px] w-[117px]" />
        <div className="absolute left-[117px] top-[39px] h-[14px] w-[17px]">
          <Image src={`${A}/tooltip.svg`} alt="" aria-hidden width={19} height={16} unoptimized className="absolute left-[-1px] top-[-1px] h-[16px] w-[19px]" />
          <Image src={`${A}/tooltip-20.svg`} alt="" aria-hidden width={18} height={13} unoptimized className="absolute left-0 top-0 h-[13px] w-[15px]" />
        </div>
        <span className="absolute left-[127px] top-[10px] flex h-[9px] w-[9px] items-center justify-center">
          <ArrowNE size={9} />
        </span>
      </div>
      {/* middle — Quick Actions (black accept strip) */}
      <div className="absolute left-[42px] top-[47px] h-[124px] w-[156px] -rotate-[7deg]">
        <div className="absolute inset-0 rounded-[10.17px] border border-[#386641]/[0.1] bg-white shadow-[-1.24px_2.49px_15.52px_0px_rgba(0,0,0,0.25)]" />
        <div aria-hidden className="absolute left-[12px] top-[88px] h-[24px] w-[132px] rounded-[10.17px] bg-black" />
        <span className="absolute left-[12px] top-[12px] text-[10px] font-medium leading-none text-black/50">Quick Actions</span>
        <div className="absolute left-[12px] top-[28px] flex h-[5px] w-[100px] items-center">
          <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-[#06BC00]" />
          <span className="ml-[3px] whitespace-nowrap text-[9px] leading-none text-[#171717]">
            Revenue increased by <span className="text-[#06BC00]">20%</span>
          </span>
        </div>
        <span className="absolute left-[134px] top-[11px] flex h-[10px] w-[10px] items-center justify-center">
          <ArrowNE size={10} />
        </span>
        <span className="absolute left-1/2 top-[97px] -translate-x-1/2 whitespace-nowrap text-[9px] font-medium leading-none text-[#E5E5E5]">
          Accept Action
        </span>
        <div className="absolute left-[12px] top-[45px] h-[39px] w-[132px] rounded-[10.17px] border border-[#386641]/[0.1] bg-black/[0.04] px-2 py-[6px]">
          <div className="flex items-start justify-between">
            <span className="text-[7px] font-medium leading-none text-[#171717]">Tue, 22 July</span>
            <span className="text-[7px] font-medium leading-[1.2] text-[#171717]">Run ads to a better audience</span>
          </div>
          <div className="mt-[6px] flex items-center justify-between">
            <span className="text-[6px] leading-none text-black/50">08:02pm</span>
            <span className="text-[6px] font-medium leading-none text-[#FF0000]">Priority: High</span>
          </div>
        </div>
      </div>
      {/* front — Analytics / New Revenue analytics available */}
      <div className="absolute left-[11px] top-[62px] h-[117px] w-[147px] -rotate-[13deg]">
        <div className="absolute inset-0 rounded-[9.59px] border border-[#386641]/[0.1] bg-white shadow-[2.05px_2.05px_21.26px_0px_rgba(0,0,0,0.25)]" />
        <div aria-hidden className="absolute left-[12px] top-[43px] h-[63px] w-[124px] rounded-[9.59px] bg-black/10" />
        <span className="absolute left-[12px] top-[12px] text-[10px] font-medium leading-none text-black/50">Analytics</span>
        <div className="absolute left-[12px] top-[26px] flex h-[5px] w-[114px] items-center">
          <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-[#23C200]" />
          <span className="ml-[3px] whitespace-nowrap text-[7px] leading-none text-[#171717]">New Revenue analytics available</span>
        </div>
        <Image src={`${A}/charts-b.svg`} alt="" aria-hidden width={135} height={90} unoptimized className="absolute left-[6px] top-[29px] h-[90px] w-[135px]" />
        <span className="absolute left-[127px] top-[10px] flex h-[9px] w-[9px] items-center justify-center">
          <ArrowNE size={9} />
        </span>
      </div>
    </div>
  );
}

/* ---------- card shell ---------- */

function FlowCard({
  index,
  label,
  value,
  children,
}: {
  index: number;
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 50 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { ...SCROLL_TWEEN, delay: index * 0.1 }}
      className="relative h-[370px] w-[250px] shrink-0 overflow-hidden rounded-[15px] bg-white/50 shadow-card backdrop-blur-[10px]"
    >
      <SegmentBar filled={index + 1} />
      <h3 className="absolute left-4 top-[38px] font-display text-base font-normal leading-none text-black/85">
        {label}
      </h3>
      <p className="absolute left-1/2 top-[64px] w-[226px] -translate-x-1/2 text-center font-display text-[17px] font-medium leading-[1.35] text-[#543E68]">
        {value}
      </p>
      {children}
    </motion.article>
  );
}

/* ---------- section ---------- */

export function AgenticPlatform() {
  const reduce = useReducedMotion();
  const visuals = [
    <Image
      key="inputs"
      src={`${A}/inputs-phone.png`}
      alt=""
      aria-hidden
      width={834}
      height={555}
      className="absolute left-1/2 top-[22px] h-[555px] w-[834px] -translate-x-1/2 object-cover"
    />,
    <>
      <PaperOne key="p1" />
      <PaperTwo key="p2" />
      <PaperThree key="p3" />
    </>,
    <Image
      key="action"
      src={`${A}/action-phone.png`}
      alt=""
      aria-hidden
      width={625}
      height={416}
      className="absolute left-[88%] top-[74px] h-[416px] w-[625px] -translate-x-1/2 object-cover"
    />,
    <OutputVisual key="output" />,
  ];

  return (
    <section aria-label={AGENTIC.heading} className="bg-white pb-24">
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 15 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={reduce ? { duration: 0 } : SCROLL_TWEEN}
        className="text-display mx-auto max-w-[760px] text-center text-[25px] leading-[1.25em] tracking-[-1px] text-grape sm:text-[30px]"
      >
        {AGENTIC.heading}
      </motion.h2>

      {/* Desktop row: fixed 250×370 cards + hairline connector behind */}
      <div className="relative mx-auto mt-10 hidden max-w-[1200px] justify-center gap-[33px] px-6 py-8 md:flex">
        <div
          aria-hidden
          className="absolute left-1/2 top-[53%] h-px w-[828px] -translate-x-1/2 bg-black/15"
        />
        {AGENTIC.flow.map((f, i) => (
          <FlowCard key={f.label} index={i} label={f.label} value={f.value}>
            {visuals[i]}
          </FlowCard>
        ))}
      </div>

      {/* Mobile column: centered stack + vertical spine behind */}
      <div className="relative mx-auto mt-10 flex max-w-[420px] flex-col items-center gap-8 px-6 py-8 md:hidden">
        <div aria-hidden className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-black/15" />
        {AGENTIC.flow.map((f, i) => (
          <FlowCard key={f.label} index={i} label={f.label} value={f.value}>
            {visuals[i]}
          </FlowCard>
        ))}
      </div>
    </section>
  );
}