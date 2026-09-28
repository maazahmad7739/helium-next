import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
      <p className="font-display text-8xl font-semibold tracking-tight text-[#00cf94]">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-[1.6] text-ink/60">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-[32px] bg-[linear-gradient(27deg,#6628d3_23%,#d563d9_56%)] px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </section>
  );
}