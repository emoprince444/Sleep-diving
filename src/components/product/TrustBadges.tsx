import { CalendarCheck, Infinity, Truck } from "lucide-react"

import { trustBadges } from "@/data/product"

const badgeIcons = {
  calendar: CalendarCheck,
  infinity: Infinity,
  truck: Truck,
}

export function TrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-6 py-8 max-sm:grid-cols-1">
      {trustBadges.map(({ icon, label }) => {
        const Icon = badgeIcons[icon as keyof typeof badgeIcons]

        return (
          <div key={label} className="flex flex-col items-center gap-3 text-center text-sd-muted max-sm:flex-row max-sm:justify-center">
            <Icon className="size-9 text-sd-copper" strokeWidth={1.8} />
            <span className="text-sm font-bold">{label}</span>
          </div>
        )
      })}
    </div>
  )
}
