import Image from "next/image";

/**
 * Live /pulse page-level background clouds (ref: live DOM between
 * section#hero and section#features on gethelium.co/pulse). On the live site
 * these are direct children of the page wrapper (framer-7xNPW), NOT inside
 * #hero — they sit behind every section: one "bg" wash + 7 cloud instances
 * of the same asset (framerusercontent dDB4JCGfoX5DJBUD3qohcdOK9U.png,
 * 617x400, extracted to /content/pulse-cloud.png). All layers use
 * mix-blend-mode:screen over the page gradient, clouds at z:1, page content
 * (sections) at z:2. Live desktop offsets (1200px wrapper):
 *   framer-3vyipq  w900 top 47   centered          opacity 1
 *   framer-rih74v  w900 top 658  right -170        opacity .7
 *   framer-c605hh  w900 top 849  right -170        opacity .7
 *   framer-1blkslk w900 top 658  left -390         opacity 1
 *   framer-60ihnd  w900 top 849  left -390         opacity 1
 *   framer-129yf6e w900 top 1186 left 20% centered opacity 1
 *   framer-jlj0mr  w1111 top 1078 left 66% centered opacity .7
 * Wash (framer-1m7f5m6): #f0f8ffe6, screen blend, page-wide, stops 581px
 * above page bottom.
 */

const CLOUD_SRC = "/content/pulse-cloud.png";

const CLOUDS = [
  { id: "top-center", top: 47, left: "50%", width: 900, opacity: 1, tx: "-50%" },
  { id: "right-a", top: 658, right: -170, width: 900, opacity: 0.7 },
  { id: "right-b", top: 849, right: -170, width: 900, opacity: 0.7 },
  { id: "left-a", top: 658, left: -390, width: 900, opacity: 1 },
  { id: "left-b", top: 849, left: -390, width: 900, opacity: 1 },
  { id: "bottom-center", top: 1186, left: "20%", width: 900, opacity: 1, tx: "-50%" },
  { id: "bottom-right", top: 1078, left: "66%", width: 1111, opacity: 0.7, tx: "-50%" },
] as const;

export function PulseClouds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
      {/* page-wide light wash behind the clouds (live framer-1m7f5m6) */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          bottom: 581,
          backgroundColor: "#f0f8ffe6",
          mixBlendMode: "screen",
        }}
      />
      {CLOUDS.map((cloud) => (
        <div
          key={cloud.id}
          className={`absolute ${cloud.id === "top-center" ? "" : "max-lg:hidden"}`}
          style={{
            top: cloud.top,
            left: "left" in cloud ? cloud.left : undefined,
            right: "right" in cloud ? cloud.right : undefined,
            width: cloud.width,
            aspectRatio: "1.5425",
            opacity: cloud.opacity,
            mixBlendMode: "screen",
            transform: "tx" in cloud ? `translateX(${cloud.tx})` : undefined,
          }}
        >
          <Image
            src={CLOUD_SRC}
            alt=""
            fill
            sizes={`${cloud.width}px`}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}