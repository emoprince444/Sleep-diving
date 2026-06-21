import { ChevronDown } from "lucide-react"

import { Rating } from "@/components/brand/Rating"
import { Button } from "@/components/ui/button"
import { productName, stickyNavItems } from "@/data/product"

export function StickyBuyBar() {
  return (
    <div className="sticky top-0 z-30 border-b border-sd-line bg-white/96 shadow-[0_2px_9px_rgba(17,24,39,0.14)] backdrop-blur">
      <div className="mx-auto grid max-w-[1640px] grid-cols-[1fr_1fr] items-center gap-8 px-8 py-2 max-lg:grid-cols-1 max-lg:gap-3 max-lg:px-5">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <Rating small />
          <span className="font-serif text-[25px] leading-tight text-sd-charcoal max-sm:text-lg">
            {productName}
          </span>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-8 max-sm:grid-cols-1 max-sm:gap-2">
          <button className="flex h-16 items-center justify-between rounded-[3px] border border-sd-line bg-white px-4">
            <span className="text-lg font-bold text-sd-charcoal">Queen</span>
            <span className="flex items-center gap-3">
              <span className="text-sm font-bold text-sd-rose">(Total Value $1,615)</span>
              <span className="text-xl font-bold text-sd-navy">$799</span>
              <ChevronDown className="size-4 text-sd-muted" />
            </span>
          </button>
          <Button className="h-16 rounded-[4px] bg-sd-gold text-xl font-bold text-sd-navy hover:bg-sd-gold/90">
            Add To Cart
          </Button>
        </div>
      </div>
      <nav className="border-t border-sd-line bg-white">
        <div className="mx-auto flex max-w-[1640px] gap-9 overflow-x-auto px-8 max-lg:px-5">
          {stickyNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`shrink-0 py-3 text-base font-bold text-sd-muted ${
                item.active ? "border-b-[3px] border-sd-navy text-sd-charcoal" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}
