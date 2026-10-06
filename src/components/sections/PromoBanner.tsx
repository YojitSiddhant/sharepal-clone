import Image from "next/image";
import type { Banner } from "@/types";

/** Full-width promotional banner with separate desktop and mobile artwork. */
export function PromoBanner({ banner, className = "" }: { banner: Banner; className?: string }) {
  return (
    <div className={`col-span-full ${className}`}>
      <a href={banner.href} target="_blank" rel="noopener noreferrer" className="block">
        <Image
          src={banner.desktopImage}
          alt="Banner"
          width={1920}
          height={400}
          sizes="(min-width: 1216px) 1064px, 85vw"
          className="hidden h-auto w-full rounded-2xl object-cover md:block"
        />
        <Image
          src={banner.mobileImage}
          alt="Banner"
          width={768}
          height={400}
          sizes="90vw"
          className="block h-auto w-full rounded-lg object-cover md:hidden"
        />
      </a>
    </div>
  );
}
