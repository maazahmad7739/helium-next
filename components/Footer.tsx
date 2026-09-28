import Link from "next/link";
import {
  FOOTER_LINKS,
  LEGAL_LINKS,
  NEWSLETTER_URL,
  SOCIALS,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto">
      <section className="bg-black px-4 py-14 sm:px-[70px] sm:py-16">
        <div className="mx-auto max-w-[1920px]">
          <div className="flex w-full flex-wrap items-start justify-between gap-10 border-t border-white/20 pt-10">
            <div className="flex max-w-[360px] flex-col gap-5">
              <h4 className="text-display text-[28px] text-white">
                D2C Growth Forum
              </h4>
              <p className="text-base leading-[1.6] text-[#87868a]">
                A shared space for D2C teams to trade playbooks, guides,
                updates, and working ideas on and ecommerce growth.
              </p>
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-[250px] items-center justify-center gap-2 rounded-full bg-[#0A66C2] px-6 py-2.5 text-lg font-semibold whitespace-nowrap text-white transition-colors hover:bg-[#004182]"
              >
                <LinkedInGlyph />
                Subscribe on LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-[15px] pt-1">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-[30px] w-[30px] items-center justify-center text-white transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:scale-[1.05] hover:opacity-60"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-[10px]">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base leading-[1.6] text-[#adacb0] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 flex w-full flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/20 pt-6">
            <p className="text-xs leading-[1.5] font-medium text-[#8a8a8e]">
              © 2025 Oxpecker Technology Pvt. Ltd.
            </p>
            <span className="text-xs leading-[1.5] font-medium text-[#8a8a8e]">
              All rights reserved
            </span>
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs leading-[1.5] font-medium text-[#8a8a8e] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}

function LinkedInGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 5.4H1.2V15h2.4V5.4zM2.4 4.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zM15 9.2c0-2.5-1.3-4.2-3.6-4.2-1 0-1.9.5-2.4 1.3V5.4H6.6V15H9v-5.1c0-1.2.6-2 1.7-2 1 0 1.6.7 1.6 2V15H15V9.2z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: "x" | "linkedin" | "instagram" | "youtube" }) {
  switch (name) {
    case "x":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 6-7zm-1.3 19.5h2L6.9 3.3h-2.2l12.9 17.4z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.2 7.4a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2zM7 20.4H3.4V9H7v11.4z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.4-4.8zM10 15.2V8.8L15.2 12 10 15.2z" />
        </svg>
      );
  }
}