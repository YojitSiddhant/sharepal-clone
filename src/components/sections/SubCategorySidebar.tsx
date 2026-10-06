import Image from "next/image";
import {
  CURRENT_CATEGORY,
  allProductsImage,
  categoryHref,
  gamingSubCategories,
} from "@/data/site";

const tileBase =
  "relative flex aspect-square w-12 items-center justify-center overflow-hidden rounded-lg p-1 transition-all duration-300 group-hover:bg-gray-100 md:w-14 md:rounded-xl md:p-1.5 lg:w-16";
const labelBase =
  "text-center text-[10px] font-semibold leading-tight md:text-xs md:font-bold lg:text-sh5";

/** Sticky vertical rail of sub-category tiles shown to the left of the listing. */
export function SubCategorySidebar() {
  return (
    <aside className="block w-[80px] shrink-0 md:w-full">
      <div className="scrollbar-none sticky top-[140px] h-full max-h-[calc(100dvh-160px)] overflow-y-auto rounded-lg bg-gray-100 p-1 shadow-soft transition-all duration-300 max-md:py-3 md:max-h-[calc(100dvh-10rem)] md:rounded-xl md:p-3">
        <nav className="flex flex-col gap-2 md:gap-3 lg:gap-4" aria-label="Gaming sub-categories">
          <a
            href={categoryHref(CURRENT_CATEGORY)}
            aria-current="page"
            className="group flex flex-col items-center justify-center gap-0.5 transition-all duration-300 md:gap-1"
          >
            <div className={`${tileBase} border-2 border-primary-500 bg-gray-100`}>
              <Image
                src={allProductsImage}
                alt="All Products"
                width={80}
                height={80}
                className="h-full w-full scale-105 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className={`${labelBase} text-primary-500`}>
              All
              <span className="mx-auto mt-0.5 block h-[2px] w-4 rounded-full bg-primary-500 md:w-6 lg:w-8" />
            </span>
          </a>

          {gamingSubCategories.map((item) => (
            <a
              key={item.slug}
              href={`${categoryHref(CURRENT_CATEGORY)}/${item.slug}`}
              className="group flex flex-col items-center justify-center gap-0.5 transition-all duration-300 md:gap-1"
            >
              <div className={`${tileBase} border bg-gray-50`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-full w-full scale-100 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span
                className={`${labelBase} line-clamp-2 max-w-[50px] text-neutral-900 md:max-w-[60px] lg:max-w-[80px]`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
