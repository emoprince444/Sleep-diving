import { motion, useReducedMotion } from "framer-motion"
import { BadgeCheck, CalendarCheck, Infinity, Star, Truck } from "lucide-react"

import { trustBadges } from "@/data/product"
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
