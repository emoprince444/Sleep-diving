import { motion, useReducedMotion } from "framer-motion"
import { BadgeCheck, CalendarCheck, Infinity, Star, Truck } from "lucide-react"

import { reviewCount, trustBadges } from "@/data/product"
import { fadeUp, premiumTransition, staggerContainer } from "@/lib/motion"

const badgeIcons = {
  calendar: CalendarCheck,
  infinity: Infinity,
  star: Star,
  truck: Truck,
  verified: BadgeCheck,
}

export function TrustBadges() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="grid grid-cols-5 gap-3 py-5 max-xl:grid-cols-3 max-sm:grid-cols-1 max-sm:py-4"
      initial={reducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={staggerContainer}
    >
      {trustBadges.map(({ icon, label }) => {
        const Icon = badgeIcons[icon as keyof typeof badgeIcons]

        return (
          <motion.div
            key={label}
            variants={fadeUp}
            transition={premiumTransition}
            whileHover={reducedMotion ? undefined : { y: -4 }}
            className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-[6px] border border-sd-line bg-white/85 px-3 text-center text-sd-muted shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sd-copper/60 hover:bg-white hover:shadow-[0_16px_34px_rgba(24,33,45,0.10)] max-sm:min-h-14 max-sm:flex-row max-sm:justify-start max-sm:text-left"
          >
            <motion.span whileHover={reducedMotion ? undefined : { scale: 1.06 }} className="flex size-10 items-center justify-center rounded-full bg-sd-cream text-sd-copper">
              <Icon className="size-5" strokeWidth={1.8} />
            </motion.span>
            <span className="text-[13px] font-bold leading-snug text-sd-charcoal">{label}</span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function GalleryBenefitsPanel() {
  const reducedMotion = useReducedMotion()
  const benefitItems = [
    {
      icon: BadgeCheck,
      title: reviewCount,
      copy: "Проверенная оценка покупателей после сна дома.",
    },
    {
      icon: CalendarCheck,
      title: "120 ночей на тест",
      copy: "Достаточно времени, чтобы понять комфорт без спешки.",
    },
    {
      icon: Infinity,
      title: "Гарантия комфорта",
      copy: "Поддержка и материалы рассчитаны на ежедневный сон.",
    },
    {
      icon: Truck,
      title: "Бесплатная доставка",
      copy: "Привезём выбранный размер по России.",
    },
  ]
  const supportItems = ["Подбор без давления", "Понятные условия возврата", "Доставка выбранного размера"]

  return (
    <motion.section
      className="mt-1 hidden rounded-[6px] border border-sd-line bg-white p-6 shadow-[0_20px_56px_rgba(24,33,45,0.08)] xl:grid xl:grid-cols-[0.82fr_1.18fr] xl:gap-6"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={premiumTransition}
      aria-label="Преимущества Sleep Diving"
    >
      <div className="flex min-h-[230px] flex-col justify-between rounded-[6px] bg-sd-panel p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-sd-copper">Покупка без лишнего риска</p>
          <h2 className="mt-3 font-serif text-[34px] leading-tight text-sd-charcoal">
            Доверие сразу после первого впечатления
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-7 text-sd-muted">
          Спокойные условия покупки помогают выбрать матрас уверенно: с проверенными отзывами, тестовым периодом и понятной доставкой.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {benefitItems.map((item) => {
          const Icon = item.icon

          return (
            <article key={item.title} className="rounded-[6px] border border-sd-line bg-white p-4 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-full bg-sd-cream text-sd-copper">
                <Icon className="size-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[16px] font-bold leading-snug text-sd-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-sd-muted">{item.copy}</p>
            </article>
          )
        })}
      </div>
      <div className="col-span-2 grid grid-cols-3 gap-3 border-t border-sd-line pt-5">
        {supportItems.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-[6px] bg-sd-soft px-4 py-3">
            <BadgeCheck className="size-4 shrink-0 text-sd-green" strokeWidth={1.8} />
            <span className="text-sm font-bold leading-5 text-sd-charcoal">{item}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
