import { CircleUserRound, Menu, ShoppingCart } from "lucide-react"

import { BrandMark } from "@/components/brand/BrandMark"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { headerNavItems } from "@/data/product"

export function Header() {
  return (
    <header className="border-b border-sd-line bg-white">
      <div className="mx-auto flex h-[60px] max-w-[1640px] items-center justify-between px-8 max-lg:px-5">
        <BrandMark />
        <nav className="flex items-center gap-8 text-[18px] font-bold text-sd-navy max-lg:hidden">
          <a href={headerNavItems[0].href}>{headerNavItems[0].label}</a>
          <a href={headerNavItems[1].href}>{headerNavItems[1].label}</a>
          <Badge className="rounded-none bg-sd-soft px-4 py-2 text-xs font-bold text-sd-navy">Save up to 55%</Badge>
          <a href={headerNavItems[2].href}>{headerNavItems[2].label}</a>
          <a href={headerNavItems[3].href}>{headerNavItems[3].label}</a>
          <Button className="h-11 rounded-[4px] bg-sd-cream px-6 text-sm font-bold text-sd-navy hover:bg-sd-cream/80">
            Take Mattress Quiz
          </Button>
        </nav>
        <div className="flex items-center gap-4 text-sd-muted">
          <CircleUserRound className="size-6 max-sm:hidden" strokeWidth={1.8} />
          <span className="h-6 w-px bg-sd-line max-sm:hidden" />
          <ShoppingCart className="size-6" strokeWidth={1.8} />
          <Menu className="size-7 lg:hidden" strokeWidth={1.8} />
        </div>
      </div>
    </header>
  )
}
