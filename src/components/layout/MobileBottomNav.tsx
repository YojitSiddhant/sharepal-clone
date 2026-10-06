import { BagIcon, BottomSearchIcon, GridIcon, HomeIcon } from "@/components/ui/icons";
import { categoryHref } from "@/data/site";

const items = [
  { label: "Home", Icon: HomeIcon, href: categoryHref("") },
  { label: "Category", Icon: GridIcon },
  { label: "Search", Icon: BottomSearchIcon },
  { label: "Cart", Icon: BagIcon },
];

/** Fixed bottom tab bar shown below the lg breakpoint. */
export function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t bg-gray-100 px-1.5 pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="relative mx-auto flex w-full max-w-sm gap-0.5 py-1.5">
        {items.map(({ label, Icon, href }) => {
          const className =
            "flex flex-1 flex-col items-center justify-center rounded-lg px-1 py-1.5 text-primary-900 transition-colors hover:text-primary-800";
          const content = (
            <>
              <Icon className="h-5 w-5" />
              <span className="mt-0.5 text-[10px] opacity-50">{label}</span>
            </>
          );
          return href ? (
            <a key={label} href={href} className={className}>
              {content}
            </a>
          ) : (
            <button key={label} type="button" className={className}>
              {content}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
