"use client";

import { useEffect, useState } from "react";
import { CalendarAddIcon } from "@/components/ui/icons";

const SHOW_AFTER_PX = 400;

/** Pill that slides up once the header's date picker has scrolled out of view. */
export function FloatingDatePrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-[49] mx-auto flex max-w-max justify-center transition-all duration-300 ease-out md:bottom-10 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[100px] opacity-0"
      }`}
    >
      <button
        type="button"
        tabIndex={visible ? 0 : -1}
        className="relative rounded-full border-2 border-secondary-500 bg-primary-900 transition-transform active:scale-95"
      >
        <span className="flex items-center justify-center gap-2 px-[18px] py-[14px] text-sh5 text-gray-100">
          <CalendarAddIcon className="h-4 w-4" />
          Select rental dates to view prices
        </span>
      </button>
    </div>
  );
}
