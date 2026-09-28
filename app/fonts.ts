import localFont from "next/font/local";

/**
 * Verbatim webfonts extracted from https://gethelium.co
 * (fonts.gstatic.com latin subsets as served by the live Framer site,
 * plus Framer CDN Inter and Fontshare Satoshi/Switzer variable files).
 *
 * Display (H1/H2/H3): Poppins Medium 500 — letter-spacing -0.05em, line-height 1em
 * Body & CTAs:        Onest 500 — 18px/1.5em
 * Micro-labels:       Inter Tight 500 — 12px, 0.1px tracking
 * Badges/ticker:      DM Sans
 * Case studies:       Satoshi / Switzer
 */

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const onest = localFont({
  src: [{ path: "./fonts/onest-variable.woff2", weight: "300 700", style: "normal" }],
  variable: "--font-onest",
  display: "swap",
});

const dmSans = localFont({
  src: [{ path: "./fonts/dmsans-variable.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-dm-sans",
  display: "swap",
});

const interTight = localFont({
  src: [{ path: "./fonts/intertight-variable.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSans = localFont({
  src: [{ path: "./fonts/instrumentsans-variable.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-instrument-sans",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/inter-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const switzer = localFont({
  src: [{ path: "./fonts/switzer-600.woff2", weight: "600", style: "normal" }],
  variable: "--font-switzer",
  display: "swap",
});

const manrope = localFont({
  src: [{ path: "./fonts/manrope-variable.woff2", weight: "200 800", style: "normal" }],
  variable: "--font-manrope",
  display: "swap",
});

/** Catalog hero panel display face (reference2.md.txt "Hero Section": Geist 500)
 *  Blog detail pages: live Framer serves "Geist Variable" (H1 400 / body 500).
 *  The variable woff2 covers the full weight axis so wrapping matches live. */
const geist = localFont({
  src: [{ path: "./fonts/geist-variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-geist",
  display: "swap",
});

export const fontVariables = [
  poppins.variable,
  onest.variable,
  dmSans.variable,
  interTight.variable,
  instrumentSans.variable,
  inter.variable,
  satoshi.variable,
  switzer.variable,
  manrope.variable,
  geist.variable,
].join(" ");