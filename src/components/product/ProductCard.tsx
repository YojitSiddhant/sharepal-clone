"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product, ProductTag } from "@/types";
import {
  CalendarXIcon,
  CircleCheckIcon,
  FlameIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from "@/components/ui/icons";
import { StarRating } from "./StarRating";

const MAX_QUANTITY = 3;

const tagStyles: Record<ProductTag, string> = {
  Trending: "border-decorative-orange text-decorative-orange",
  New: "border-decorative-blue text-decorative-blue",
  Best: "border-decorative-pink text-decorative-pink",
  "Vote to Launch":
    "border-secondary-400 bg-secondary-100 text-o3 text-secondary-850 md:text-o2",
};

const formatRent = (value: number) => `₹${value.toLocaleString("en-IN")}`;

function TagBadge({ tag }: { tag: ProductTag }) {
  return (
    <span
      className={`absolute left-2 top-2 inline-flex items-center rounded-lg border px-1.5 py-0 text-[10px] font-semibold md:left-3 md:top-3 md:border-2 md:px-2.5 md:py-0.5 md:text-xs ${tagStyles[tag]}`}
    >
      {tag}
    </span>
  );
}

function QuantityStepper({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (next: number) => void;
}) {
  return (
    <div className="flex h-8 items-center justify-between gap-1 rounded-full border-2 border-primary-900 bg-gray-100 px-2 max-md:w-full md:h-10 md:px-3">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(quantity - 1)}
        className="flex items-center justify-center rounded-full transition-colors hover:bg-neutral-100"
      >
        <MinusIcon className="size-4 text-primary-900 lg:size-5" />
      </button>
      <span className="flex min-w-[20px] items-center justify-center text-sm font-bold text-primary-900 md:min-w-[24px] md:text-base">
        {quantity}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(quantity + 1, MAX_QUANTITY))}
        disabled={quantity >= MAX_QUANTITY}
        className="flex items-center justify-center rounded-full transition-colors hover:bg-neutral-100 disabled:opacity-50"
      >
        <PlusIcon className="size-4 text-primary-900 lg:size-5" />
      </button>
    </div>
  );
}

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);

  const isWaitlist = product.tag === "Vote to Launch";
  const isOutOfStock = !isWaitlist && product.outOfStock;
  const canBuy = !isWaitlist && !isOutOfStock;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-transparent p-2.5 leading-5 transition-all duration-300 max-md:bg-gray-100 md:rounded-3xl md:p-3 ${
        isOutOfStock ? "hover:bg-gray-200" : "hover:bg-gray-100"
      }`}
    >
      <div className="relative aspect-square shrink-0 overflow-hidden rounded-lg bg-gray-100 p-1.5 md:rounded-2xl md:p-3">
        <div className="relative h-full w-full p-3 md:p-5">
          <div className="relative h-full w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 260px, (min-width: 768px) 30vw, 45vw"
              className="object-contain"
            />
          </div>
        </div>

        {product.tag && !isOutOfStock && <TagBadge tag={product.tag} />}

        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          onClick={() => setWishlisted((value) => !value)}
          className={`absolute right-1 top-1 scale-[0.8] p-0 opacity-10 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 md:right-3 md:top-3 md:opacity-0 ${
            wishlisted ? "text-red-500 opacity-100 md:opacity-100" : "text-gray-500"
          }`}
        >
          <HeartIcon className={`size-4 md:size-6 ${wishlisted ? "fill-current" : ""}`} />
        </button>

        {isOutOfStock && (
          <div className="absolute inset-x-0 bottom-0 flex w-full flex-col items-center justify-center bg-black/80 p-1.5 text-gray-100 md:p-2 md:leading-5">
            <p className="text-xs font-bold md:text-sm md:leading-5">Out of Stock</p>
            <p className="text-[10px] md:text-xs md:leading-5">Will be available soon</p>
          </div>
        )}
      </div>

      {isWaitlist && (
        <div className="mt-2 flex w-full items-start gap-1.5 rounded-xl bg-secondary-100 p-2">
          <CircleCheckIcon className="size-3.5 shrink-0 text-success-400" />
          <p role="status" aria-live="polite" className="text-pretty text-o4 text-success-700">
            {joinedWaitlist
              ? "You joined the waitlist. We'll WhatsApp you when it's live."
              : `We launch if ${product.bookedCount / 1000}k people join the waitlist. Get notified first!`}
          </p>
        </div>
      )}

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-start justify-center gap-1 p-0 pb-1 pt-2.5 md:gap-1.5 md:p-2 md:pb-0">
          <h2 className="line-clamp-2 text-b6 font-bold text-neutral-900 md:text-sh2">
            {product.name}
          </h2>
          {product.rating > 0 && (
            <div className="flex items-center gap-1.5 md:gap-2">
              <StarRating rating={product.rating} />
              <span className="text-sh7 font-bold text-neutral-800 md:text-sh6">
                ({product.rating})
              </span>
            </div>
          )}
          {!isWaitlist && product.bookedCount > 0 && (
            <div className="flex items-center gap-1 text-sh7 font-bold text-success-700 md:gap-1.5 md:text-sh6">
              <FlameIcon className="size-3.5 shrink-0 fill-success-400 text-success-400 md:size-4" />
              <span>
                {product.bookedCount} booked<span className="hidden md:inline"> this month</span>
              </span>
            </div>
          )}
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-1 md:px-2">
          <div className="my-1 h-px w-full bg-neutral-200" />

          {canBuy && (
            <div className="flex w-full items-end justify-between gap-1 max-md:flex-wrap md:gap-2">
              <div className="flex flex-col items-baseline justify-between gap-0 md:gap-1">
                <span className="flex items-center gap-1 text-o3 font-normal text-gray-600 md:text-sh5 md:font-normal">
                  Rent per day
                </span>
                <span className="text-sh4 text-gray-900 md:text-h6">
                  {formatRent(product.perDayRent)}
                </span>
                <span className="rounded bg-secondary-500 px-1 py-px text-o3 text-secondary-900 md:px-1.5 md:py-0.5 md:text-sh7">
                  Incl. of GST
                </span>
              </div>

              <div className="flex items-center gap-1 max-md:w-full md:gap-2">
                {quantity > 0 ? (
                  <QuantityStepper quantity={quantity} onChange={setQuantity} />
                ) : (
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    onClick={() => setQuantity(1)}
                    className="flex h-8 items-center justify-center rounded-full border border-primary-900 bg-transparent text-neutral-900 transition-all duration-300 hover:bg-neutral-150 active:opacity-90 max-md:w-full max-md:px-4 md:h-9 md:w-9 md:p-2 lg:h-12 lg:w-12"
                  >
                    <span className="text-bt4 md:hidden">Add to Cart</span>
                    <PlusIcon className="hidden size-4 text-primary-900 md:block md:size-5 lg:size-6" />
                  </button>
                )}
              </div>
            </div>
          )}

          {isOutOfStock && (
            <>
              <p className="flex w-full items-center justify-center gap-1 overflow-hidden text-sh7 text-gray-700 md:mt-2 md:gap-2 md:text-sh5">
                <CalendarXIcon className="w-4 shrink-0 text-gray-500 md:w-5" />
                <span className="line-clamp-1">Out of Stock</span>
              </p>
              <button
                type="button"
                onClick={() => setWishlisted((value) => !value)}
                className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-4xl border border-primary-900 bg-gray-100 py-3 text-sm font-medium transition-colors hover:bg-neutral-150 active:opacity-90 md:min-h-10"
              >
                {wishlisted ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </>
          )}

          {isWaitlist &&
            (joinedWaitlist ? (
              <div
                role="status"
                className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-full border-2 border-secondary-500 text-bt3 text-secondary-850 md:h-10"
              >
                <CircleCheckIcon className="size-4 shrink-0" />
                Waitlist Joined!
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setJoinedWaitlist(true)}
                className="mt-2 inline-flex h-9 w-full items-center justify-center rounded-full bg-secondary-500 text-bt3 text-primary-900 transition-[transform,background-color] duration-150 ease-out hover:bg-secondary-400 active:scale-[0.98] md:h-10"
              >
                Join Waitlist
              </button>
            ))}
        </div>
      </div>
    </article>
  );
}
