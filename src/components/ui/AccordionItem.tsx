"use client";

import { useId, type ReactNode } from "react";
import { ChevronDownIcon } from "./icons";

interface AccordionItemProps {
  open: boolean;
  onToggle: () => void;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  chevronClassName?: string;
}

/** Disclosure row with an animated height transition (grid-rows 0fr -> 1fr). */
export function AccordionItem({
  open,
  onToggle,
  trigger,
  children,
  className = "",
  triggerClassName = "",
  contentClassName = "",
  chevronClassName = "text-muted-foreground",
}: AccordionItemProps) {
  const id = useId();

  return (
    <div className={className} data-state={open ? "open" : "closed"}>
      <h3 className="flex">
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-content`}
          onClick={onToggle}
          data-state={open ? "open" : "closed"}
          className={`flex flex-1 items-center justify-between gap-2 transition-all ${triggerClassName}`}
        >
          {trigger}
          <ChevronDownIcon
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${chevronClassName}`}
          />
        </button>
      </h3>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className={contentClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
}
