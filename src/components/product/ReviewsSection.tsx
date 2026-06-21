import { CheckCircle2, Star } from "lucide-react"

import { Rating } from "@/components/brand/Rating"
import { Card, CardContent } from "@/components/ui/card"
import { reviewSummary, reviews } from "@/data/product"

function RatingBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="grid grid-cols-[64px_1fr_38px] items-center gap-3 text-sm">
      <span className="font-bold text-sd-charcoal">{label}</span>
      <span className="h-2 overflow-hidden rounded-full bg-sd-line">
        <span className="block h-full rounded-full bg-sd-gold transition-all duration-700" style={{ width: `${value}%` }} />
      </span>
      <span className="text-right font-semibold text-sd-muted">{value}%</span>
    </div>
  )
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <Card className="rounded-[6px] border-sd-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(24,33,45,0.12)]">
      <CardContent className="flex h-full flex-col p-7">
        <div className="flex items-center justify-between gap-4">
          <Rating small />
          <span className="flex items-center gap-2 text-sm font-bold text-sd-green">
            <CheckCircle2 className="size-4" />
            Проверено
          </span>
        </div>
        <h3 className="mt-6 text-2xl font-bold leading-tight text-sd-charcoal">{review.title}</h3>
        <p className="mt-4 flex-1 text-[16px] leading-7 text-sd-muted">"{review.quote}"</p>
        <div className="mt-7 border-t border-sd-line pt-5">
          <p className="font-bold text-sd-charcoal">{review.customer}</p>
          <p className="mt-1 text-sm text-sd-muted">
            {review.sleeper} / {review.meta}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-sd-panel px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto grid max-w-[1640px] grid-cols-[0.38fr_0.62fr] gap-10 max-lg:grid-cols-1">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.06em] text-sd-copper">Отзывы покупателей</p>
          <h2 className="mt-4 font-serif text-[46px] leading-tight text-sd-charcoal max-md:text-[34px]">
            {reviewSummary.headline}
          </h2>
          <p className="mt-5 text-lg leading-8 text-sd-muted">{reviewSummary.copy}</p>
          <div className="mt-8 rounded-[6px] border border-sd-line bg-white p-7 shadow-[0_18px_44px_rgba(24,33,45,0.08)]">
            <div className="flex items-end gap-4">
              <span className="font-serif text-[64px] leading-none text-sd-charcoal">{reviewSummary.score}</span>
              <div className="pb-2">
                <div className="flex gap-1 text-sd-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm font-bold text-sd-muted">{reviewSummary.count}</p>
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-3">
              {reviewSummary.breakdown.map((item) => (
                <RatingBar key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
          {reviews.map((review) => (
            <ReviewCard key={review.customer} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
