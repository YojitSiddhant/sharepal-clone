"use client";

import { useState } from "react";
import { footerCategoryGroups, footerCompanyGroups } from "@/data/site";
import { AccordionItem } from "@/components/ui/AccordionItem";
import {
  ChevronUpIcon,
  FacebookIcon,
  FooterLogo,
  HeadsetIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoPalText,
  MailIcon,
} from "@/components/ui/icons";

const categoryLink =
  "text-b6 text-neutral-300 transition-all duration-75 hover:text-neutral-200 hover:underline md:text-b4";
const companyLink =
  "w-full min-w-max py-1.5 text-b6 decoration-transparent transition-all duration-300 hover:text-primary-100 hover:underline hover:decoration-white md:py-3 md:text-b4";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/Sharepal.in", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/sharepal.in/", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sharepal/", Icon: LinkedInIcon },
];

function MobileCategoryAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col gap-3 md:hidden">
      {footerCategoryGroups.map((group, index) => (
        <AccordionItem
          key={group.title}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          trigger={group.title}
          triggerClassName="rounded-[8px] bg-primary-800 px-3 py-3 text-left text-xs font-semibold text-gray-100"
          chevronClassName="text-gray-100"
          contentClassName="flex flex-col gap-3 px-3 pb-1 pt-3"
        >
          {group.links.map((link) => (
            <a key={link.href} href={link.href} className={categoryLink}>
              {link.label}
            </a>
          ))}
        </AccordionItem>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="bg-primary-900 py-5 pb-16 md:py-[72px] md:pb-10">
      <div className="container-sp flex w-full flex-col gap-5 md:gap-12">
        <div className="grid gap-6 max-md:hidden md:grid-cols-4 md:gap-10 lg:grid-cols-5">
          {footerCategoryGroups.map((group) => (
            <div key={group.title} className="flex w-full flex-col gap-4">
              <h2 className="line-clamp-2 h-max text-lg font-semibold text-gray-100">{group.title}</h2>
              {group.links.map((link) => (
                <a key={link.href} href={link.href} className={categoryLink}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <MobileCategoryAccordion />

        <div className="flex w-full flex-col gap-8">
          <div className="flex h-10 w-full items-center gap-0.5 bg-[linear-gradient(90deg,#030D31,#03134F)]">
            <FooterLogo className="h-auto w-24" />
            <LogoPalText className="h-auto w-[43px]" />
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-4">
            <div className="grid w-full grid-cols-2 gap-x-3 gap-y-6 md:justify-between md:gap-3 lg:grid-cols-5">
              {footerCompanyGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="mb-3 min-w-max text-sh4 text-gray-100 md:mb-6">{group.title}</h2>
                  <div className="flex min-w-max flex-col gap-1 text-xs font-medium text-neutral-300">
                    {group.links.map((link) => {
                      const isNew = group.badges?.includes(link.label);
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          className={companyLink}
                          {...(isNew ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {link.label}
                          {isNew && (
                            <span className="ml-1 inline-flex -translate-y-2 items-center rounded-full bg-secondary-500 px-2.5 py-[0.5px] text-[10px] font-bold text-secondary-900 transition-colors hover:bg-secondary-600">
                              New
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div>
                <h2 className="mb-3 min-w-max text-sh4 text-gray-100 md:mb-6">Need Help</h2>
                <div className="flex min-w-max flex-col gap-2 text-xs font-medium text-neutral-300">
                  <a
                    href="https://sharepal.in/support"
                    className="flex items-center gap-2 py-1.5 text-neutral-300 transition-colors duration-300 hover:text-white md:py-3"
                  >
                    <HeadsetIcon className="h-4 w-4 shrink-0" />
                    <span className="text-b6 md:text-b4">Contact Support</span>
                  </a>
                  <a
                    href="https://sharepal.in/support"
                    className="flex items-center gap-2 py-1.5 transition-colors duration-300 hover:text-white md:py-3"
                  >
                    <span className="text-b6 md:text-b4">Contact Us</span>
                  </a>
                  <a
                    href="mailto:care@sharepal.in"
                    className="flex items-center gap-2 py-1.5 transition-colors duration-300 hover:text-white md:py-3"
                  >
                    <MailIcon className="h-6 w-[25px] shrink-0" />
                    <span className="text-b6 md:text-b4">care@sharepal.in</span>
                  </a>
                  <div className="flex items-center gap-3 py-1.5 md:py-3">
                    {socials.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit SharePal on ${label}`}
                        className="transition-opacity duration-300 hover:opacity-80"
                      >
                        <Icon className="h-8 w-8" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-4 border-t border-primary-700 py-6 text-sm font-medium text-primary-300 max-md:flex-col">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex cursor-pointer items-center gap-2 max-md:w-full max-md:justify-center max-md:rounded-sm max-md:bg-primary-850 max-md:py-2"
            >
              Go up
              <ChevronUpIcon className="h-4 w-4" />
            </button>
            <p>© 2026. SWNAC E-Kiraya Services Pvt Ltd</p>
            <p>Made with ♥️ for India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
