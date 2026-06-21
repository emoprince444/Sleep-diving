import { CircleUserRound, Menu, ShoppingCart } from "lucide-react"

import { BrandMark } from "@/components/brand/BrandMark"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { headerNavItems } from "@/data/product"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sd-line bg-white/95 shadow-[0_1px_0_rgba(24,33,45,0.03)] backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1640px] items-center justify-between px-8 max-lg:px-5 max-sm:h-[60px] max-sm:px-4">
        <BrandMark />
        <nav className="flex items-center gap-8 text-[16px] font-bold text-sd-navy max-lg:hidden">
          <a className="transition hover:text-sd-copper" href={headerNavItems[0].href}>{headerNavItems[0].label}</a>
          <a className="transition hover:text-sd-copper" href={headerNavItems[1].href}>{headerNavItems[1].label}</a>
          <Badge className="rounded-[4px] bg-sd-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] text-sd-navy">
            Выгода до 20%
          </Badge>
          <a className="transition hover:text-sd-copper" href={headerNavItems[2].href}>{headerNavItems[2].label}</a>
          <a className="transition hover:text-sd-copper" href={headerNavItems[3].href}>{headerNavItems[3].label}</a>
          <Button className="h-11 rounded-[6px] bg-sd-navy px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(24,33,45,0.16)] transition hover:-translate-y-0.5 hover:bg-sd-navy/92">
            Подобрать матрас
          </Button>
        </nav>
        <div className="flex items-center gap-4 text-sd-muted">
          <CircleUserRound className="size-6 transition hover:text-sd-navy max-sm:hidden" strokeWidth={1.8} />
          <span className="h-6 w-px bg-sd-line max-sm:hidden" />
          <ShoppingCart className="size-6 transition hover:text-sd-navy" strokeWidth={1.8} />
          <Menu className="size-7 text-sd-navy lg:hidden" strokeWidth={1.8} />
        </div>
      </div>
    </header>
  )
}
