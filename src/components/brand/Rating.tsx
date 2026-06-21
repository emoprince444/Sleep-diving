import { Star } from "lucide-react"

import { reviewCount } from "@/data/product"

const stars = [0, 1, 2, 3, 4]

export function Rating({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-sd-gold" aria-hidden="true">
        {stars.map((index) => (
          <Star key={index} className={small ? "size-4 fill-current" : "size-[18px] fill-current"} strokeWidth={1.7} />
        ))}
      </div>
      <span className={small ? "text-sm text-sd-muted" : "text-[15px] text-sd-muted"}>{reviewCount}</span>
    </div>
  )
}
