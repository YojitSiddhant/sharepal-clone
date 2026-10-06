import { Fragment } from "react";
import Image from "next/image";
import { hero } from "@/data/site";
import { SharePalLogo } from "@/components/ui/SharePalLogo";

export const GAMING_GRADIENT = "linear-gradient(360deg, #8A2BE2 0%, #4C187C 100%)";

/** Purple category banner: title, tagline with inline logo, brand logos and side art. */
export function CategoryHero() {
  return (
    <div
      className="relative flex h-full min-h-[150px] w-full items-center justify-center overflow-hidden rounded-xl max-md:shadow-lg md:min-h-[228px]"
      style={{ background: GAMING_GRADIENT }}
    >
      <div className="absolute -bottom-12 left-0 z-0 hidden overflow-hidden md:flex">
        <Image
          src={hero.leftImage}
          alt=""
          width={250}
          height={250}
          priority
          className="h-auto w-44 object-contain xl:w-[250px]"
        />
      </div>
      <div className="absolute -bottom-11 right-0 z-0 overflow-hidden sm:-bottom-10 md:-bottom-12">
        <Image
          src={hero.rightImage}
          alt=""
          width={250}
          height={250}
          priority
          className="h-auto w-48 object-contain sm:w-60 md:w-44 xl:w-[250px]"
        />
      </div>

      <div className="relative z-10 flex w-full flex-col items-start justify-center gap-1.5 px-4 text-center text-white md:items-center md:gap-3">
        <h1 className="font-ubuntu text-h5 font-bold capitalize leading-tight tracking-tight drop-shadow-lg md:text-d5">
          {hero.title}
        </h1>
        <div className="flex flex-col items-start md:items-center md:gap-1">
          <h2 className="w-[75%] text-o4 font-bold drop-shadow-md max-md:text-start sm:text-b4 sm:font-bold md:max-w-[70%] lg:text-sh1 lg:font-bold xl:text-h6">
            Rent the latest gaming gadgets from
            <SharePalLogo
              palColor="#fff"
              className="mx-1 w-14 align-middle md:w-20"
            />
            PS5, Xbox, Oculus VR, Racing Wheel on rent.
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-5">
          <div className="flex w-full flex-wrap items-center justify-center gap-0 md:mt-3 md:max-w-lg md:gap-2">
            {hero.brandLogos.map((logo, index) => (
              <Fragment key={logo.alt}>
                {index > 0 && (
                  <span className="h-4 w-[2px] rounded-full bg-category-purple opacity-50 md:h-6 md:w-[3px] md:opacity-70" />
                )}
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  unoptimized
                  className="h-auto w-12 object-contain md:w-24"
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
