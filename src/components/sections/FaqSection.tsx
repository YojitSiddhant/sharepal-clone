"use client";

import { useEffect, useState } from "react";
import { faqs } from "@/data/site";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { XIcon } from "@/components/ui/icons";

const PREVIEW_LIMIT = 5;

function FaqSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-[visibility] duration-300 ${open ? "visible" : "pointer-events-none invisible"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="FAQs"
        inert={!open}
        className={`absolute inset-y-0 right-0 flex h-full w-full max-w-2xl flex-col bg-neutral-150 shadow-lg transition-transform duration-300 ease-out md:min-w-[40%] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-gray-100 px-4 py-4 md:px-6">
          <h2 className="text-h4 text-neutral-900">FAQs</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1 text-neutral-500 transition-colors hover:bg-neutral-150"
          >
            <XIcon className="size-5" />
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-4 md:p-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              trigger={faq.question}
              triggerClassName={`bg-gray-100 px-4 py-3 text-left text-base font-semibold text-gray-950 hover:underline ${
                openIndex === index ? "rounded-t-xl" : "rounded-xl"
              }`}
              contentClassName="rounded-b-xl bg-gray-100 px-4 py-3 text-sm font-medium text-neutral-500"
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <section className="container-sp my-10 rounded-3xl bg-gray-100 p-4 py-10">
      <div className="flex h-full w-full flex-col items-start gap-2 p-4 pt-0 md:p-6 md:pt-0">
        <h3 className="flex flex-col flex-wrap items-start gap-0.5 py-2 text-h4 text-neutral-900 md:flex-row md:items-center md:gap-2 md:text-h2">
          Frequently Asked Questions (FAQs)
        </h3>
        <div className="w-full">
          {faqs.slice(0, PREVIEW_LIMIT).map((faq, index) => (
            <AccordionItem
              key={faq.question}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              trigger={faq.question}
              className="rounded-xl bg-gray-100 transition-colors duration-300 hover:bg-gray-150"
              triggerClassName="px-4 py-4 text-left text-sh4 text-gray-950 hover:underline md:text-sh3"
              contentClassName="px-4 pb-4 text-xs text-gray-700 md:text-sm"
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
        {faqs.length > PREVIEW_LIMIT && (
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="inline-flex h-11 w-full items-center justify-center rounded-4xl bg-neutral-150 px-8 text-sm font-semibold text-primary-900 transition-colors hover:bg-neutral-200 active:opacity-90 md:text-base"
          >
            View more FAQ&apos;s
          </button>
        )}
      </div>
      <FaqSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </section>
  );
}
