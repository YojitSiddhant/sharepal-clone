import { CITY, categoryHref } from "@/data/site";
import { SharePalLogo } from "@/components/ui/SharePalLogo";
import {
  CalendarAddIcon,
  CartIcon,
  ChevronDownSmallIcon,
  DeliveryDateIcon,
  LocationIcon,
  PickupDateIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/icons";

const homeHref = categoryHref("");

function DesktopHeader() {
  return (
    <div className="container-sp hidden w-full items-end justify-between gap-1 lg:flex">
      <a href={homeHref} className="h-full" aria-label="SharePal home">
        <div className="flex h-[68px] w-40 flex-col items-center justify-end gap-1 rounded-b-2xl bg-primary-500 p-3 pt-[18px] shadow-sm">
          <SharePalLogo className="w-full" />
        </div>
      </a>

      <div className="relative flex items-center justify-center gap-2 rounded-full border-2 border-category-purple bg-gray-100">
        <button
          type="button"
          className="flex items-center justify-center gap-1 rounded-l-full bg-neutral-200 px-[10px] py-[6px] text-sm font-semibold text-primary-900 transition-colors hover:bg-neutral-250"
        >
          <LocationIcon className="w-5" />
          {CITY}
          <ChevronDownSmallIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Edit Dates"
          className="flex w-max items-center justify-center gap-4 bg-gray-100 text-neutral-700"
        >
          <span className="flex items-center justify-center gap-2 text-sh5">
            <DeliveryDateIcon className="h-4 w-4" />
            Delivery Date
          </span>
          <span className="flex items-center justify-center gap-2 text-sh5">
            <PickupDateIcon className="h-4 w-4" />
            Pickup Date
          </span>
        </button>
        <button
          type="button"
          className="inline-flex h-full items-center justify-center gap-1 whitespace-nowrap rounded-4xl bg-primary-900 px-3 py-[8px] text-bt3 text-white transition-opacity active:opacity-90"
        >
          <CalendarAddIcon className="size-4" />
          <span className="pr-1 font-semibold leading-5 tracking-wide">Select</span>
        </button>
      </div>

      <div className="flex items-end justify-end gap-3 text-gray-100">
        <button
          type="button"
          aria-label="Search"
          className="inline-flex h-11 w-11 items-center justify-center rounded-4xl p-2 transition-colors hover:bg-neutral-150 hover:text-neutral-900"
        >
          <SearchIcon className="min-h-7 min-w-7" />
        </button>
        <button
          type="button"
          aria-label="Cart"
          className="inline-flex h-11 w-11 items-center justify-center rounded-4xl p-2 transition-colors hover:bg-neutral-150 hover:text-neutral-900"
        >
          <CartIcon className="min-h-7 min-w-7" />
        </button>
        <button type="button" className="flex cursor-pointer items-center justify-end gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-category-purple bg-gray-100 p-0.5 text-neutral-900 transition-colors duration-300 hover:bg-gray-200">
            <UserIcon className="min-h-6 min-w-6" />
          </span>
          <span className="text-bt2 font-medium">Hi, Login</span>
        </button>
      </div>
    </div>
  );
}

function MobileHeader() {
  return (
    <div className="container-sp flex w-full flex-col items-center justify-center gap-3 lg:hidden">
      <div className="flex h-full w-full items-center justify-between gap-1">
        <a
          href={homeHref}
          aria-label="SharePal home"
          className="flex h-10 shrink-0 flex-col items-center justify-end gap-1 rounded-b-xl bg-primary-500 px-3 pb-1 pt-3"
        >
          <SharePalLogo className="w-28" />
        </a>
        <div className="flex w-full items-center justify-end gap-1.5 pt-1.5 md:gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-1 rounded-full border border-category-purple bg-category-purple px-2 py-0.5 text-xs font-medium text-gray-100 shadow-md"
          >
            <LocationIcon className="w-4 md:w-5" />
            {CITY}
            <ChevronDownSmallIcon className="w-3 md:w-4" />
          </button>
          <button
            type="button"
            aria-label="Login"
            className="inline-flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full border-2 border-neutral-200 bg-neutral-900 p-0.5 text-gray-100 transition-colors hover:bg-neutral-800"
          >
            <UserIcon className="size-5" />
          </button>
        </div>
      </div>
      <div className="flex h-[34px] w-full items-center justify-between gap-1 rounded-full border-2 border-category-purple bg-gray-100">
        <div className="flex w-max items-center justify-center gap-1 px-2">
          <CalendarAddIcon className="mx-1 w-4 text-neutral-700" />
          <span className="text-sh5 text-neutral-700">Select Rental Dates</span>
        </div>
        <button
          type="button"
          className="inline-flex h-full items-center justify-center gap-1 whitespace-nowrap rounded-4xl bg-primary-900 px-2 py-[6px] pr-3 text-xs font-medium text-white active:opacity-90"
        >
          <CalendarAddIcon className="min-h-3 min-w-3 size-3.5" />
          Select
        </button>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-max w-full flex-col items-center justify-center gap-1 overflow-hidden bg-[#4C187C] pb-3 pt-[env(safe-area-inset-top)] md:pb-4 lg:flex-row">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}
