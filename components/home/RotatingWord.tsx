"use client";

import { HERO } from "@/lib/home-data";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SCROLL_TWEEN, SPRING } from "@/lib/motion";

export function RotatingWord() {
  return <RotatingWords words={HERO.words} />;
}

export function RotatingWords({ words }: { words: readonly string[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-block min-w-[8ch] text-left align-baseline">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -6 }}
          transition={reduce ? { duration: 0 } : SCROLL_TWEEN}
          className="inline-block text-grape"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}