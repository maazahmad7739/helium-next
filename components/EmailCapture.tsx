"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

/** Live hero email capture: white pill input + black submit button. */
export function EmailCapture({ cta }: { cta: string }) {
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  if (sent) {
    return (
      <p className="mt-8 rounded-pill-cta bg-white px-6 py-3 font-sans text-base font-medium text-ink shadow-card">
        Thank you 🎉 Check your inbox shortly.
      </p>
    );
  }

  return (
    <form
      className="mt-8 flex w-full max-w-[440px] items-center gap-2 rounded-pill-cta bg-white p-2 pl-6 shadow-card"
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: input.value }),
        }).catch(() => undefined);
        setSent(true);
      }}
    >
      <input
        name="email"
        type="email"
        required
        placeholder="Email address"
        aria-label="Email address"
        className="min-w-0 flex-1 bg-transparent font-sans text-base text-ink outline-none placeholder:text-ink/40"
      />
      <motion.button
        type="submit"
        whileHover={reduce ? undefined : { scale: 1.02 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        transition={reduce ? { duration: 0 } : SPRING}
        className="shrink-0 rounded-pill-cta bg-ink px-5 py-2.5 font-sans text-sm font-medium text-white"
      >
        {cta}
      </motion.button>
    </form>
  );
}