import { LucideStarIcon } from "@/components/ui/icons";

const STAR_CLASS = "size-3 max-w-none shrink-0 md:size-3.5";

/** Five lucide stars with a clipped partial star, matching SharePal's rating widget. */
export function StarRating({ rating, total = 5 }: { rating: number; total?: number }) {
  const full = Math.floor(rating);
  const fraction = rating - full;

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of ${total}`}>
      {Array.from({ length: total }, (_, index) => {
        if (index < full) {
          return <LucideStarIcon key={index} className={`${STAR_CLASS} fill-current text-gray-900`} />;
        }
        if (index === full && fraction > 0) {
          return (
            <span key={index} className="relative inline-block">
              <LucideStarIcon className={`${STAR_CLASS} text-gray-900`} />
              <span
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${fraction * 100}%` }}
              >
                <LucideStarIcon className={`${STAR_CLASS} fill-current text-gray-900`} />
              </span>
            </span>
          );
        }
        return <LucideStarIcon key={index} className={`${STAR_CLASS} text-muted-foreground`} />;
      })}
    </div>
  );
}
