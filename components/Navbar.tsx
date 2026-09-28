"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { CONTACT_URL, NAV_ITEMS } from "@/lib/site";
import { SPRING } from "@/lib/motion";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-[30px] pb-[30px] backdrop-blur-[8px] sm:px-10">
      <nav className="flex items-center justify-between">
        <div className="flex h-[60px] w-fit items-center gap-1 rounded-[72px] border border-black/[0.06] bg-white py-2 pl-1.5 pr-2.5 shadow-chip backdrop-blur-[25px]">
          <Link
            href="/"
            aria-label="Helium"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <Image
              src="/brand/logo.png"
              alt="Helium"
              width={144}
              height={37}
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-[32px] px-5 py-[9px] font-micro text-base leading-[1.6] tracking-[-0.04em] transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] ${
                    active
                      ? "bg-[linear-gradient(27deg,#6628d3_23%,#d563d9_56%)] text-white"
                      : "text-ink/90 hover:bg-hover-tint"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <a
          href={CONTACT_URL}
          className="hidden items-center rounded-[48px] bg-[#6236AD] px-[30px] py-[14px] font-sans text-base font-medium text-white transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:bg-[#a864d9] xl:inline-flex"
        >
          Contact Us
        </a>

        <motion.button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          whileTap={reduce ? undefined : { scale: 0.92 }}
          transition={SPRING}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-black/[0.06] bg-white shadow-chip backdrop-blur-[25px] xl:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
            transition={SPRING}
            className="mt-3 flex flex-col gap-1 origin-top rounded-[24px] border border-black/[0.06] bg-white/95 p-3 shadow-card backdrop-blur-[25px] xl:hidden"
          >
            {NAV_ITEMS.map((item, i) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={reduce ? undefined : { opacity: 1, x: 0 }}
                  transition={{ ...SPRING, delay: 0.03 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex rounded-[32px] px-5 py-2.5 font-micro text-base leading-[1.6] tracking-[-0.04em] transition-colors ${
                      active
                        ? "bg-[linear-gradient(27deg,#6628d3_23%,#d563d9_56%)] text-white"
                        : "text-ink/90 hover:bg-hover-tint"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
            <a
              href={CONTACT_URL}
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center rounded-[32px] bg-[#6236AD] px-5 py-3 font-sans text-base font-medium text-white"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 6h14M3 10h14M3 14h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}