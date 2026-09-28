import Image from "next/image";
import { CtaPill } from "@/components/sections/CtaPill";
import { CrossfadeCarousel } from "@/components/mdx/CrossfadeCarousel";
import { MARQUEE_LOGOS } from "@/lib/home-data";
import { LogoMarquee } from "@/components/home/LogoMarquee";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * MdxImage — body image in MDX. Plain `![](/content/x.png)` renders through
 * here. MDX wraps standalone images in a `<p>`, so this renders only
 * phrasing-content elements (`span`) to keep HTML nesting valid; next/image
 * supplies the `<img>`. Fixed-height box with object-cover so mixed aspect
 * ratios keep a uniform frame.
 */
export function MdxImage({
  src,
  alt = "",
  className,
  width = 1600,
  height = 900,
  maxW,
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  /** optional centered max width in px (inline style, beats w-full) */
  maxW?: number;
}) {
  return (
    <span
      className={cx(
        "relative block w-full overflow-hidden rounded-2xl border border-black/5",
        maxW ? "mx-auto" : null,
        className
      )}
      style={{
        aspectRatio: `${width} / ${height}`,
        ...(maxW ? { maxWidth: maxW } : {}),
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes="(min-width: 760px) 760px, 100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </span>
  );
}

/**
 * StatCard — big metric + caption. Stacks vertically in a `grid` (see
 * StatCardGroup) or renders inline-block on its own.
 */
export function StatCard({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cx("rounded-2xl bg-paper-2 p-6 text-center", className)}>
      <div className="font-display text-4xl font-semibold tracking-[-0.02em] text-grape-deep sm:text-5xl">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-grape-soft/80">{label}</div>
    </div>
  );
}

/** Vertical stack of StatCards (matches live stat band look). */
export function StatCardGroup({
  items,
  className,
}: {
  items: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={cx("my-8 grid grid-cols-1 gap-4 sm:grid-cols-3", className)}>
      {items.map((s, i) => (
        <StatCard key={i} value={s.value} label={s.label} />
      ))}
    </div>
  );
}

/**
 * QuoteBlock — testimonial. Children = the quote; props carry the person.
 * Styled like the live testimonial card: light lavender tint, serif quote.
 */
export function QuoteBlock({
  name,
  role,
  className,
  children,
}: {
  name?: string;
  role?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className={cx(
        "my-8 rounded-2xl bg-lavender/30 p-8 sm:p-10",
        className
      )}
    >
      <blockquote className="font-display text-xl leading-[1.5] text-grape-deep sm:text-2xl">
        “{children}”
      </blockquote>
      {(name || role) && (
        <figcaption className="mt-6 text-sm font-medium text-grape-soft/80">
          {name}
          {role && <span className="font-normal text-grape-soft/60"> — {role}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * SolutionCard — numbered feature card (Lenskart "01/02/03" pattern).
 * Put the card's copy as children; `image` renders below the text.
 */
export function SolutionCard({
  number,
  title,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  className,
  children,
}: {
  number?: string;
  title: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cx("my-8 rounded-2xl bg-paper-2 p-6 sm:p-8", className)}>
      <div className="flex items-baseline gap-3">
        {number && (
          <span className="font-display text-sm font-semibold text-plum">{number}</span>
        )}
        <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-grape-deep">
          {title}
        </h3>
      </div>
      {children && (
        <div className="mt-3 text-[17px] leading-[1.7] text-grape-soft">{children}</div>
      )}
      {image && (
        <span className="mt-6 block">
          <MdxImage
            src={image}
            alt={imageAlt ?? title}
            width={imageWidth}
            height={imageHeight}
          />
        </span>
      )}
    </section>
  );
}

/**
 * BeforeAfter — two-column shift/result comparison (the "Who They Chased in
 * Ads / Shift / Result" pattern from Sudathi).
 */
export function BeforeAfter({
  title,
  before,
  after,
  className,
}: {
  title: string;
  before: string;
  after: string;
  className?: string;
}) {
  return (
    <div className={cx("my-6 rounded-2xl border border-black/5 bg-paper-2 p-6", className)}>
      <div className="font-display text-lg font-semibold text-grape-deep">{title}</div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className="text-xs font-semibold tracking-[0.08em] text-lilac uppercase">
            Shift
          </div>
          <p className="mt-1 text-[15px] leading-[1.6] text-grape-soft">{before}</p>
        </div>
        <div>
          <div className="text-xs font-semibold tracking-[0.08em] text-plum uppercase">
            Result
          </div>
          <p className="mt-1 text-[15px] leading-[1.6] text-grape-soft">{after}</p>
          <div className="mt-2 text-xs text-lilac">Shift → Result comparison</div>
        </div>
      </div>
    </div>
  );
}

/**
 * MdxCta — end-of-article call to action (links to /contact by default).
 */
export function MdxCta({
  label = "Get in touch with us",
  href = "/contact",
  className,
}: {
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={cx("my-10 flex justify-center", className)}>
      <CtaPill label={label} href={href} variant="gradient" />
    </div>
  );
}

/**
 * AuthorByline — author + optional date row (rendered under the H1 in
 * blogs; also usable inside MDX).
 */
export function AuthorByline({
  author,
  date,
  className,
}: {
  author: string;
  date?: string;
  className?: string;
}) {
  return (
    <div className={cx("flex items-center gap-3 text-sm text-grape-soft/70", className)}>
      <span className="font-medium text-grape-deep">{author}</span>
      {date && <span className="text-grape-soft/50">{date}</span>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Case-study designed-page components (measured against live          */
/* /helium-case-studies/lenskart screenshots + extracted Framer CSS)   */
/* ------------------------------------------------------------------ */

/**
 * CaseStudySection — full-bleed section wrapper with the live rhythm:
 * generous vertical padding + hairline divider below (except last).
 * Headings inside render centered Poppins display, like live.
 */
export function CaseStudySection({
  divider = true,
  bare = false,
  className,
  children,
}: {
  divider?: boolean;
  /** bare strips default padding so className controls all spacing */
  bare?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cx(
        bare
          ? "mx-auto w-full max-w-[1200px] px-6 text-left"
          : "mx-auto w-full max-w-[1200px] px-6 py-[72px] text-center sm:py-[100px]",
        divider && "border-b border-black/8",
        className
      )}
    >
      {children}
    </section>
  );
}

/** CaseStudyH2 — centered Poppins display heading (live: 36–40px, -0.02em). */
export function CaseStudyH2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cx(
        "font-display text-[32px] leading-[1.15] font-semibold tracking-[-0.02em] text-ink sm:text-[40px]",
        className
      )}
    >
      {children}
    </h2>
  );
}

/** CaseStudyP — body copy block (live: Satoshi 20px/1.5 near-black).
 * Renders a div (not p) so MDX block children (paragraphs) nest validly;
 * consecutive paragraphs get the live ~20px gap. */
export function CaseStudyP({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "mx-auto mt-5 max-w-[810px] text-left [font-family:var(--font-satoshi)] text-[17px] leading-[1.55] text-ink/90 first:mt-0 sm:text-[20px] [&>p]:mt-5 [&>p:first-child]:mt-0 [&>ul]:mt-4 [&>ul]:list-outside [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mt-3 [&>ul>li]:pl-1 marker:text-ink/40",
        className
      )}
    >
      {children}
    </div>
  );
}

/** CaseStudyLead — centered gray summary line under a section H2. */
export function CaseStudyLead({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cx(
        "mx-auto mt-5 max-w-[810px] text-[16px] leading-[1.55] text-ink/70 sm:text-[18px]",
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * WallsGrid / WallCard — live "The Walls They Hit in D2C" 2×2 card grid:
 * white cards (~285px), radius ~14px, soft shadow, title top-left in
 * Poppins ~24px, copy pinned to the bottom, white→purple gradient
 * (#f7f3fb→#cbb3e8) rising from the card bottom.
 */
export function WallsGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "mx-auto mt-12 grid max-w-[810px] grid-cols-1 gap-6 text-left sm:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function WallCard({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "relative flex min-h-[286px] flex-col justify-between overflow-hidden rounded-[14px] bg-white p-6",
        "shadow-[0_2px_6px_rgba(0,0,0,0.06),0_10px_24px_rgba(0,0,0,0.07)]",
        className
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background: "linear-gradient(180deg, rgba(203,179,232,0) 0%, rgba(203,179,232,0.55) 100%)",
        }}
      />
      <h3 className="relative font-display text-[24px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink">
        {title}
      </h3>
      <p className="relative mt-auto pt-10 [font-family:var(--font-satoshi)] text-[15px] leading-[1.5] text-ink/85">
        {children}
      </p>
    </div>
  );
}

/**
 * SolutionBlock — live "Helium's Solution" entry: giant number (Poppins
 * ~96px) + left-aligned H3 + copy, with media below.
 */
export function SolutionBlock({
  number,
  title,
  className,
  children,
}: {
  number: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cx("mx-auto mt-16 max-w-[810px] text-left first:mt-10", className)}>
      <div className="font-display text-[72px] leading-none font-semibold tracking-[-0.02em] text-ink sm:text-[96px]">
        {number}
      </div>
      <h3 className="mt-6 font-display text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[32px]">
        {title}
      </h3>
      {children && (
        <div className="mt-4 [font-family:var(--font-satoshi)] text-[17px] leading-[1.55] text-ink/90 sm:text-[20px]">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * SolutionMedia — browser-frame media card under a SolutionBlock (live:
 * ~781px wide, radius 14px, triple-layer soft shadow). Children can be a
 * CrossfadeCarousel or a plain image.
 */
export function SolutionMedia({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx("mx-auto mt-10 max-w-[960px]", className)}>
      <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_0.6px_2px_-0.9px_rgba(0,0,0,0.14),0_2.3px_7.8px_-1.8px_rgba(0,0,0,0.13),0_10px_34px_-2.75px_rgba(0,0,0,0.11)]">
        {children}
      </div>
    </div>
  );
}

/** Carousel inside a SolutionMedia frame (rounded corners handled there). */
export function SolutionCarousel({
  images,
  intervalMs,
  width,
  className,
}: {
  images: { src: string; width: number; height: number; alt?: string }[];
  intervalMs?: number;
  /** explicit CSS width, e.g. "315px" for the centered phone mockup */
  width?: string;
  className?: string;
}) {
  return (
    <CrossfadeCarousel
      images={images}
      intervalMs={intervalMs}
      width={width}
      className={cx("rounded-none bg-white shadow-none", className)}
    />
  );
}

/**
 * LessonNote — centered closing copy with the live bold-italic kicker line.
 */
export function LessonNote({
  kicker,
  className,
  children,
}: {
  kicker?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx("mx-auto mt-6 max-w-[810px]", className)}>
      <div className="[&>div]:mt-5 [&>div:first-child]:mt-0">{children}</div>
      {kicker && (
        <p className="mt-7 [font-family:var(--font-satoshi)] text-[18px] font-bold italic text-ink sm:text-[20px]">
          {kicker}
        </p>
      )}
    </div>
  );
}

/**
 * BigCtaBand — live end-of-page CTA: full-bleed purple→black gradient
 * (#553687 → #000), Poppins ~56–64px white headline, gray subline, white
 * "Get Started →" pill. Negative margins bleed past the article column.
 */
export function BigCtaBand({
  title,
  sub = "Book a demo to see Helium adapt your store in real time.",
  label = "Get Started",
  href = "/contact",
  className,
}: {
  title: string;
  sub?: string;
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "relative left-1/2 mt-[80px] w-screen -translate-x-1/2 overflow-hidden px-6 py-[100px] text-center sm:py-[130px]",
        className
      )}
      style={{ background: "linear-gradient(180deg, rgb(85,54,135) 0%, rgb(0,0,0) 100%)" }}
    >
      <h2 className="mx-auto max-w-[820px] font-display text-[44px] leading-[1.08] font-semibold tracking-[-0.02em] text-white sm:text-[64px]">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-[560px] text-[17px] text-white/75 sm:text-[19px]">{sub}</p>
      <a
        href={href}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-sans text-[16px] font-medium text-ink transition-transform hover:scale-[1.03]"
      >
        {label}
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

/**
 * LawCallout — Noise live psychology-law pill: pastel tinted card, emoji
 * bulb on the left, colored Poppins title + 👉 body line. Measured tints:
 * Hick's (cream #fdf6e7/#a16207), Fitts's (blue #eff6ff/#2563eb),
 * Recognition (tan #fdf3e7/#c2410c), Choice (lavender #f5f3ff/#7c3aed).
 */
export function LawCallout({
  title,
  color = "amber",
  className,
  children,
}: {
  title: string;
  color?: "amber" | "blue" | "orange" | "violet";
  className?: string;
  children: React.ReactNode;
}) {
  const tints = {
    amber: { bg: "#fdf6e7", title: "#a16207", body: "#78716c" },
    blue: { bg: "#eff6ff", title: "#2563eb", body: "#64748b" },
    orange: { bg: "#fdf3e7", title: "#c2410c", body: "#78716c" },
    violet: { bg: "#f5f3ff", title: "#7c3aed", body: "#64748b" },
  } as const;
  const t = tints[color];
  return (
    <div
      className={cx("relative mx-auto mt-8 flex max-w-[810px] gap-4 rounded-[14px] p-6 pl-14 text-left", className)}
      style={{ background: t.bg }}
    >
      <span aria-hidden className="absolute -left-3 top-[26px] text-[44px] leading-none">
        💡
      </span>
      <div>
        <div
          className="font-display text-[18px] font-semibold tracking-[-0.01em]"
          style={{ color: t.title }}
        >
          {title}
        </div>
        <p className="mt-1.5 text-[16px] leading-[1.55]" style={{ color: t.body }}>
          👉 {children}
        </p>
      </div>
    </div>
  );
}

/**
 * PersonaCards — Noise live "three visitors" row: 3 pastel rounded cards
 * (blue/yellow/pink) with 217px memoji avatars centered.
 */
export function PersonaCards({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const tints = ["#cce4f6", "#fbf3cd", "#fbd0e2"];
  return (
    <div className={cx("mx-auto mt-8 flex max-w-[810px] justify-center gap-8", className)}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className="flex h-[217px] w-[217px] items-center justify-center overflow-hidden rounded-[22px]"
              style={{ background: tints[i % tints.length] }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

/**
 * StatBandDark — Noise live metrics band: solid near-black rounded card,
 * 3 stat columns (white ~56px value + small white label).
 */
export function StatBandDark({
  items,
  className,
}: {
  items: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div
      className={cx(
        "mx-auto mt-12 grid max-w-[810px] grid-cols-1 gap-8 rounded-[18px] bg-ink px-8 py-10 text-center sm:grid-cols-3",
        className
      )}
    >
      {items.map((s, i) => (
        <div key={i}>
          <div className="font-display text-[44px] leading-none font-semibold text-white sm:text-[56px]">
            {s.value}
          </div>
          <div className="mt-2 text-[13px] font-medium text-white/80">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * LogoStrip — static single-row brand logo strip (Noise live footer band,
 * ~18-62px logos, evenly spaced, subtle opacity). Same logo set as the
 * homepage ticker.
 */
export function LogoStrip({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        "mx-auto mt-14 flex max-w-[1100px] flex-wrap items-center justify-center gap-x-10 gap-y-4",
        className
      )}
    >
      {MARQUEE_LOGOS.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt="Brand logo"
          width={logo.aw}
          height={logo.ah}
          style={{ height: Math.round(logo.h * 0.85), width: "auto" }}
          className="shrink-0 object-contain opacity-70"
        />
      ))}
    </div>
  );
}

/**
 * FeatureSplit — Noise live feature sections: text column left (~40%),
 * phone-mockup image right (~55%) with annotation arrows baked into the
 * PNG. Italic "result" line styles the closing paragraph via [data-result].
 */
export function FeatureSplit({
  title,
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  className,
  children,
}: {
  title: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx("mx-auto mt-20 grid max-w-[1000px] grid-cols-1 items-center gap-10 text-left lg:grid-cols-[1fr_1.15fr]", className)}>
      <div>
        <h3 className="font-display text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[32px]">
          {title}
        </h3>
        <div className="mt-4 [font-family:var(--font-satoshi)] text-[17px] leading-[1.6] text-ink/90 sm:text-[19px] [&_p[data-result]]:mt-5 [&_p[data-result]]:font-medium [&_p[data-result]]:italic">
          {children}
        </div>
      </div>
      {image && (
        <MdxImage
          src={image}
          alt={imageAlt ?? title}
          width={imageWidth}
          height={imageHeight}
          className="border-0 shadow-none"
        />
      )}
    </div>
  );
}

/**
 * ArticleSection — article-flow section wrapper (W4W live pattern):
 * no default padding/spacing (unlike CaseStudySection) so every gap is
 * set explicitly per section from measured live y-offsets.
 */
export function ArticleSection({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cx("mx-auto w-full max-w-[1200px] px-6 text-left", className)}>
      {children}
    </section>
  );
}

/** Spacer — explicit vertical gap (inline style, immune to class conflicts). */
export function Spacer({ h }: { h: number }) {
  return <div aria-hidden style={{ height: h }} />;
}

/**
 * ArticleHeading — live W4W article-flow heading: left-aligned Satoshi
 * regular. Two tiers measured: major 38px/45.6px, sub 25px/30px.
 */
export function ArticleHeading({
  tier = "major",
  className,
  children,
}: {
  tier?: "major" | "sub";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cx(
        "mx-auto max-w-[777px] text-left [font-family:var(--font-satoshi)] font-normal tracking-[-0.3px] text-ink",
        tier === "major"
          ? "text-[30px] leading-[1.2] sm:text-[38px] sm:leading-[1.2]"
          : "text-[21px] leading-[1.2] sm:text-[25px] sm:leading-[1.2]",
        className
      )}
    >
      {children}
    </h2>
  );
}

/**
 * ArticleBody — live W4W article-flow body copy: left-aligned Satoshi
 * 20px/28px, full column width (~780px), ~28px gap between siblings.
 */
export function ArticleBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "mx-auto mt-[10px] max-w-[777px] [font-family:var(--font-satoshi)] text-[17px] leading-[1.4] text-ink sm:text-[20px] sm:leading-[1.4] tracking-[-0.3px] [&>p]:mt-[28px] [&>p:first-child]:mt-0",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * ArticleList — live W4W bullet list: custom "•" markers (::before) at
 * ~27px left padding, 20px/28px items, ~22px gaps.
 */
export function ArticleList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ul
      className={cx(
        "mx-auto mt-[10px] w-full max-w-[777px] list-none pl-[27px] [font-family:var(--font-satoshi)] text-[17px] leading-[1.4] text-ink sm:text-[20px] tracking-[-0.3px] [&>li]:relative [&>li]:mt-[28px] [&>li:first-child]:mt-0 [&>li]:pl-0 [&>li>span]:absolute [&>li>span]:-left-[27px] marker:hidden",
        className
      )}
    >
      {children}
    </ul>
  );
}

/**
 * StatBandRed — W4W live metrics band: solid #E10106 rounded band (772px
 * wide, radius 14px), 2 stat columns (white 48px Poppins value + 14px/600
 * white label), 34px/32px padding.
 */
export function StatBandRed({
  items,
  className,
}: {
  items: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div
      className={cx(
        "mx-auto mt-11 grid max-w-[772px] grid-cols-2 gap-8 rounded-[14px] px-8 py-[34px] text-center",
        className
      )}
      style={{ background: "rgb(225, 1, 6)" }}
    >
      {items.map((s, i) => (
        <div key={i}>
          <div className="font-display text-[38px] leading-none font-medium text-white sm:text-[48px]">
            {s.value}
          </div>
          <div className="mt-1.5 font-display text-[13px] font-semibold text-white sm:text-[14px]">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Everything MDX files get in scope. Keys = tag names usable in .mdx. */
export const mdxComponents = {
  StatCard,
  StatCardGroup,
  QuoteBlock,
  SolutionCard,
  BeforeAfter,
  MdxCta,
  AuthorByline,
  img: MdxImage,
  MdxImage,
  CaseStudySection,
  CaseStudyH2,
  CaseStudyP,
  CaseStudyLead,
  WallsGrid,
  WallCard,
  SolutionBlock,
  SolutionMedia,
  SolutionCarousel,
  LessonNote,
  BigCtaBand,
  CrossfadeCarousel,
  LawCallout,
  PersonaCards,
  StatBandDark,
  LogoStrip,
  FeatureSplit,
  ArticleHeading,
  ArticleBody,
  ArticleList,
  StatBandRed,
  ArticleSection,
  Spacer,
  LogoMarquee,
} as const;