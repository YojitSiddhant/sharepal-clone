"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CURRENT_CATEGORY, categoryHref, superCategories } from "@/data/site";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import type { SuperCategory } from "@/types";

const LINKS_PER_COLUMN = 4;
const COLUMN_WIDTH = 240;

function CategoryTab({ category }: { category: SuperCategory }) {
  const ref = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState<{ top: number; left: number; width: number } | null>(
    null,
  );
  const active = category.slug === CURRENT_CATEGORY;
  const columns = Math.ceil(category.subCategories.length / LINKS_PER_COLUMN);

  const openMenu = () => {
    if (!ref.current || !window.matchMedia("(min-width: 768px)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const width = Math.min(COLUMN_WIDTH * columns, window.innerWidth - 40);
    const left = rect.left - (width - rect.width) / 2;
    setMenu({
      top: rect.bottom,
      left: Math.max(20, Math.min(left, window.innerWidth - width - 20)),
      width,
    });
  };

  return (
    <div
      ref={ref}
      className="relative w-full"
      onMouseEnter={openMenu}
      onMouseLeave={() => setMenu(null)}
    >
      <a
        href={categoryHref(category.slug)}
        className="relative inline-block w-full max-w-44 px-3"
        aria-current={active ? "page" : undefined}
      >
        <span
          className={`inline-block text-gray-200 transition-transform duration-200 hover:text-sh5 md:text-neutral-700 md:hover:text-gray-900 ${
            active ? "text-sh4" : "text-sh5"
          }`}
        >
          {category.name}
          {active && (
            <span className="absolute left-1/2 mt-2 block h-[2px] w-full -translate-x-1/2 rounded-full bg-category-purple md:w-10/12" />
          )}
        </span>
      </a>

      {/* Desktop-only sub-category menu, shown on hover like the original. The
          top padding bridges the 10px gap so the pointer can travel into it. */}
      {menu && (
        <div
          className="fixed z-50 hidden animate-[menu-in_300ms_ease-out] pt-2.5 md:block"
          style={{ top: menu.top, left: menu.left, width: menu.width }}
        >
          <div className="flex gap-6 overflow-hidden rounded-3xl bg-gray-100 p-6 text-left shadow-lg">
            {Array.from({ length: columns }, (_, col) => (
              <div key={col} className="flex min-w-0 flex-1 flex-col gap-4">
                {category.subCategories
                  .slice(col * LINKS_PER_COLUMN, (col + 1) * LINKS_PER_COLUMN)
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="line-clamp-1 block rounded-lg px-2 py-1 text-b4 text-neutral-900 transition-colors duration-200 hover:bg-gray-150"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function CategoryTabs() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Bring the active tab into view on load, mirroring Swiper's slideTo().
    const active = el.querySelector<HTMLElement>("[aria-current='page']");
    if (active) {
      const slide = active.closest<HTMLElement>("[data-slide]");
      if (slide) el.scrollLeft = slide.offsetLeft - el.offsetLeft;
    }
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.4, behavior: "smooth" });
  };

  const arrowClass =
    "absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-primary-900 disabled:pointer-events-none disabled:opacity-50 md:hidden";

  return (
    <div className="sticky top-0 z-20 bg-transparent py-1 md:top-[102px] md:w-full md:bg-neutral-150 lg:top-[84px]">
      <div className="relative mx-auto w-full max-w-3xl px-8">
        <div
          ref={trackRef}
          onScroll={updateEdges}
          className="scrollbar-none flex w-full snap-x items-center overflow-x-auto"
        >
          {superCategories.map((category) => (
            <div
              key={category.slug}
              data-slide
              className="shrink-0 basis-[40%] snap-start px-2 py-2 text-center sm:basis-1/2 md:basis-1/3 md:px-4 lg:basis-1/4"
            >
              <CategoryTab category={category} />
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Previous categories"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          className={`${arrowClass} left-1`}
        >
          <ChevronLeftIcon className="size-4 text-gray-400" />
        </button>
        <button
          type="button"
          aria-label="Next categories"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          className={`${arrowClass} right-1`}
        >
          <ChevronRightIcon className="size-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
