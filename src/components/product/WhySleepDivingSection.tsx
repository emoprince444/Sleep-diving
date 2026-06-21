import { Moon, ShieldCheck, Snowflake } from "lucide-react"

import { productImages, whySleepDiving } from "@/data/product"

const reasonIcons = [Moon, Snowflake, ShieldCheck]

export function WhySleepDivingSection() {
  return (
    <section className="bg-white px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto grid max-w-[1640px] grid-cols-[0.9fr_1.1fr] items-center gap-12 max-lg:grid-cols-1">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">Почему Sleep Diving</p>
          <h2 className="mt-4 font-serif text-[46px] leading-tight text-sd-charcoal max-md:text-[34px]">
            Премиальный комфорт, который проще выбрать
          </h2>
          <p className="mt-5 text-lg leading-8 text-sd-muted">
            Хороший матрас должен быть понятным: честные характеристики, актуальные размеры, комфортные материалы и поддержка, которая ощущается с первой ночи.
          </p>
          <div className="mt-8 grid gap-4">
            {whySleepDiving.map((item, index) => {
              const Icon = reasonIcons[index] ?? ShieldCheck

              return (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-[6px] border border-sd-line bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sd-copper/60 hover:shadow-[0_18px_44px_rgba(24,33,45,0.11)]"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sd-navy text-white transition group-hover:bg-sd-copper">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-sd-charcoal">{item.title}</h3>
                    <p className="mt-2 text-[16px] leading-7 text-sd-muted">{item.copy}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="overflow-hidden rounded-[6px] shadow-[0_24px_70px_rgba(24,33,45,0.12)]">
          <img
            src={productImages.coolingCloseup}
            alt="Крупный план охлаждающей ткани и пены Sleep Diving"
            className="aspect-[1.25] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
