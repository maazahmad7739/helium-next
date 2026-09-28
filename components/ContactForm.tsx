"use client";

import { useState } from "react";

const PROBLEMS = [
  "Conversion rates",
  "Average order value improvement",
  "Marketing Efficiency",
  "AI product tagging",
  "All of the above",
  "Custom Pricing",
] as const;

/* Live Framer tokens (contact Form card):
   input bg rgba(222,222,222,0.8) = #dededecc, radius 8, padding 12,
   no border, text rgb(19,19,20); labels 16px black with "*" */
const inputClasses =
  "w-full rounded-lg bg-[#dededecc] px-3 py-3 text-base font-normal text-ink-2 placeholder:text-ink-2/40 outline-none transition-shadow focus:ring-2 focus:ring-[#6236ad]/30";

const labelClasses = "text-base font-normal text-black";

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label htmlFor={htmlFor} className={labelClasses}>
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
    } catch {
      // swallow â€” success state mirrors the live Framer behaviour
    }
    setSending(false);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[28px] bg-white p-10 text-center">
        <p className="font-display text-2xl font-medium text-ink">
          Thank you ðŸŽ‰
        </p>
        <p className="text-base leading-[1.6] text-ink/70">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-x-4 gap-y-6 sm:grid-cols-2"
    >
      <Field label="First Name*" htmlFor="first_name">
        <input
          id="first_name"
          name="first_name"
          type="text"
          required
          placeholder="Jane"
          className={inputClasses}
        />
      </Field>
      <Field label="Last Name*" htmlFor="last_name">
        <input
          id="last_name"
          name="last_name"
          type="text"
          required
          placeholder="Doe"
          className={inputClasses}
        />
      </Field>
      <Field label="Business email*" htmlFor="email" className="sm:col-span-2">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className={inputClasses}
        />
      </Field>
      <Field label="Website URL*" htmlFor="website" className="sm:col-span-2">
        <input
          id="website"
          name="website"
          type="text"
          required
          placeholder="https://"
          className={inputClasses}
        />
      </Field>
      <Field label="Key problem*" htmlFor="problem" className="sm:col-span-2">
        <select
          id="problem"
          name="problem"
          className={inputClasses}
          defaultValue=""
          required
        >
          <option value="" disabled>
            - select -
          </option>
          {PROBLEMS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" htmlFor="message" className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Your Message"
          className={inputClasses}
        />
      </Field>
      <button
        type="submit"
        disabled={sending}
        className="col-span-full w-full cursor-pointer rounded-lg bg-[#131314] px-4 py-[15px] text-base font-normal text-white transition-colors hover:bg-black disabled:opacity-60"
      >
        {sending ? "Submittingâ€¦" : "Submit"}
      </button>
    </form>
  );
}