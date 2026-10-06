import { CITY, categoryHref } from "@/data/site";
import { ChevronRightIcon } from "@/components/ui/icons";

export function Breadcrumbs() {
  return (
    <nav aria-label="breadcrumb" className="container-sp py-3 md:py-6">
      <ol className="flex items-center justify-start gap-1.5 overflow-hidden break-words text-sm text-muted-foreground sm:gap-2.5">
        <li className="inline-flex items-center gap-1.5">
          <a
            href={categoryHref("")}
            className="text-sh7 text-neutral-500 transition-colors hover:text-neutral-600 md:text-sh5"
          >
            {CITY}
          </a>
        </li>
        <li role="presentation" aria-hidden="true">
          <ChevronRightIcon className="h-3.5 w-3.5" />
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span aria-current="page" className="text-sh7 text-neutral-900 md:text-sh5">
            Gaming gadgets on rent
          </span>
        </li>
      </ol>
    </nav>
  );
}
