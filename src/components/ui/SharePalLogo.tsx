import { LogoPalText, LogoShareText } from "./icons";

interface SharePalLogoProps {
  /** Colour of the "Pal" half of the wordmark. */
  palColor?: string;
  className?: string;
}

/** The two-part SharePal wordmark ("Share" in white, "Pal" in lime by default). */
export function SharePalLogo({ palColor = "#9EFF00", className = "" }: SharePalLogoProps) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <LogoShareText className="h-auto w-[63%]" />
      <LogoPalText className="h-auto w-[37%]" fill={palColor} />
    </span>
  );
}
