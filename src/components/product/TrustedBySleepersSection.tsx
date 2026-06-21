import { BadgeCheck, Star } from "lucide-react"

import { productImages, trustedQuotes, trustedStats } from "@/data/product"

export function TrustedBySleepersSection() {
  return (
    <section className="bg-sd-panel px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto max-w-[1640px]">
        <div className="grid grid-cols-[0.42fr_0.58fr] gap-10 max-lg:grid-cols-1">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">Нам доверяют тысячи покупателей</p>
            <h2 className="mt-4 font-serif text-[46px] leading-tight text-sd-charcoal max-md:text-[34px]">
              Доверие, которое ощущается спокойно
            </h2>
            <p className="mt-5 text-lg leading-8 text-sd-muted">
              Покупатели выбирают Sleep Diving за понятный подбор, премиальные материалы, аккуратную доставку и возможность протестировать матрас дома.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {trustedStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[6px] border border-sd-line bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sd-copper/60 hover:shadow-md"
                >
                  <p className="font-serif text-[38px] leading-none text-sd-navy">{item.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.07em] text-sd-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-6 max-xl:grid-cols-1">
            <img
              src={productImages.bedroomLifestyle}
              alt="Luxury Sleep Diving bedroom"
              className="h-full min-h-[360px] rounded-[6px] object-cover shadow-[0_20px_54px_rgba(24,33,45,0.12)] max-xl:min-h-[300px]"
            />
            <div className="grid gap-4">
              {trustedQuotes.map((item) => (
                <article
                  key={item.customer}
                  className="rounded-[6px] border border-sd-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sd-copper/60 hover:shadow-[0_18px_44px_rgba(24,33,45,0.10)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex text-sd-gold">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" />
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.06em] text-sd-green">
                      <BadgeCheck className="size-4" />
                      Проверено
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-7 text-sd-charcoal">"{item.quote}"</p>
                  <p className="mt-4 text-sm font-bold text-sd-muted">{item.customer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
