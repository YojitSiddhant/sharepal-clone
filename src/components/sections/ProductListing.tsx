"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { centerBanner, topBanner } from "@/data/site";
import { ProductCard } from "@/components/product/ProductCard";
import { PromoBanner } from "./PromoBanner";

const PAGE_SIZE = 12;

// Like the original, in-stock items are listed first and sold-out items are
// held back until the shopper asks for them.
const inStock = products.filter((product) => !product.outOfStock);
const outOfStock = products.filter((product) => product.outOfStock);

const outlineButton =
  "inline-flex w-full items-center justify-center whitespace-nowrap rounded-4xl border-2 border-neutral-900 bg-gray-100 p-5 text-base font-medium transition-colors hover:bg-neutral-150 active:opacity-90 sm:max-w-72 md:p-6";

export function ProductListing() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [showOutOfStock, setShowOutOfStock] = useState(false);

  const shown = inStock.slice(0, visible);
  const hasMore = visible < inStock.length;
  const shownCount = shown.length + (showOutOfStock ? outOfStock.length : 0);

  return (
    <section id="products-section" className="relative z-[1] pb-10">
      <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-3 md:py-4">
        <h1 className="font-inter text-sh4 capitalize text-gray-950 md:text-h2">
          gaming gadgets on rent
        </h1>
        <p className="flex items-center justify-center gap-1 text-b6 text-neutral-300 md:text-b2">
          <span className="hidden md:inline-flex">Total items: </span>
          <span className="text-neutral-500">{products.length} items</span>
        </p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-5 md:mt-6 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {shown.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} priority />
        ))}
        <PromoBanner banner={topBanner} className="md:my-5" />
        {shown.slice(4, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <PromoBanner banner={centerBanner} className="py-2 md:py-4 lg:py-6" />
        {shown.slice(8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {showOutOfStock &&
          outOfStock.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

      <div className="mt-5 flex w-full flex-col items-center justify-center border-t border-gray-200 py-7 md:mt-10">
        <p className="pb-3 text-sm text-gray-400 md:text-base">
          Showing {shownCount} of {products.length} results
        </p>
        {hasMore && (
          <button
            type="button"
            className={outlineButton}
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
          >
            Show More
          </button>
        )}
        {!hasMore && !showOutOfStock && outOfStock.length > 0 && (
          <button type="button" className={`${outlineButton} mt-4`} onClick={() => setShowOutOfStock(true)}>
            Show Out of Stock Products ({outOfStock.length})
          </button>
        )}
      </div>
    </section>
  );
}
