import { reviews, stats } from "@/data/site";
import { GoogleIcon, StarIcon } from "@/components/ui/icons";
import type { Review } from "@/types";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex min-w-[328px] max-w-[328px] flex-col justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-100 p-3 md:rounded-3xl lg:min-w-[360px] lg:max-w-[360px] lg:p-4 lg:px-0">
      <div className="flex flex-col gap-2 p-0 md:px-4">
        <div className="flex gap-2">
          <GoogleIcon className="size-6" />
          <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: review.rating }, (_, index) => (
              <StarIcon key={index} className="size-5" />
            ))}
          </div>
        </div>
        <p className="line-clamp-4 whitespace-pre-line text-sh6 text-primary-900 lg:text-sh2">
          “{review.text}”
        </p>
      </div>
      <div className="flex gap-5 p-0 md:px-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-150 text-xs font-semibold text-primary-600 md:text-base">
          {review.initials}
        </span>
        <div>
          <h4 className="text-xs font-medium text-gray-600 lg:text-sm">{review.name}</h4>
          <p className="text-[10px] text-gray-400 lg:text-sm">
            {review.city} • {review.category}
          </p>
        </div>
      </div>
    </div>
  );
}

/** "Served more than 1 Lakh Orders" marquee of reviews, followed by impact stats. */
export function Testimonials() {
  return (
    <section className="flex flex-col gap-5 bg-gray-100 py-4 lg:gap-12 lg:py-12">
      <h2 className="px-4 text-center font-ubuntu text-d7 text-gray-950 md:text-d4">
        Served more than <span className="text-decorative-orange">1 Lakh Orders</span>
      </h2>

      <div className="flex gap-5 overflow-hidden py-3">
        <div className="group overflow-hidden p-2">
          <div className="flex w-max animate-marquee flex-row gap-4 px-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-4" aria-hidden={copy === 1}>
                {reviews.map((review) => (
                  <ReviewCard key={review.name} review={review} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1216px] grid-cols-3 justify-between gap-3 border-y-2 border-neutral-150 py-4 md:gap-6 md:py-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <h3 className="bg-[linear-gradient(92deg,#002CD1_27.44%,#1945E8_48.86%,#7EC904_70.28%)] bg-clip-text py-0 text-center font-ubuntu text-2xl font-bold text-transparent md:py-3 lg:text-6xl">
              {stat.value}
            </h3>
            <p className="text-center text-xs capitalize text-gray-800 sm:text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
