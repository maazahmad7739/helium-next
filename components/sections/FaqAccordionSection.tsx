"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/lib/product-pages";

/**
 * FaqAccordionSection — shadcn/ui Accordion (Radix primitive) restyled
 * with project tokens: rounded-2xl white cards, first item open by
 * default, ×/+ circular toggle matching the live ad-stack FAQ.
 * Animation handled by Radix's data-state + CSS keyframes in globals.css.
 *
 * Reused by: /ad-stack, /audience-signals, /attribution, /pulse
 */
export function FaqAccordionSection({
  items,
  className,
}: {
  items: readonly FaqItem[];
  className?: string;
}) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue="item-0"
      className={cn("mx-auto flex max-w-[800px] flex-col gap-3", className)}
    >
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={item.q}
          value={`item-${i}`}
          className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
              <span className="text-lg leading-[1.4] font-medium text-ink">{item.q}</span>
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-2 text-xl text-ink transition-transform duration-300 group-data-[state=open]:rotate-45"
              >
                +
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="faq-content overflow-hidden data-[state=closed]:animate-faq-collapse data-[state=open]:animate-faq-expand">
            <p className="px-6 pb-6 text-base leading-[1.6] text-ink/70">{item.a}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}