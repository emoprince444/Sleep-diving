import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { CircleUserRound, Menu, ShoppingCart, X } from "lucide-react"

import { BrandMark } from "@/components/brand/BrandMark"
import { useCart } from "@/components/cart/CartContext"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { headerNavItems } from "@/data/product"
import { premiumEase } from "@/lib/motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openCart, openConsultation, totalQuantity } = useCart()
  const reducedMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 border-b border-sd-line bg-white/95 shadow-[0_1px_0_rgba(24,33,45,0.03)] backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1640px] items-center justify-between px-8 max-lg:px-5 max-sm:h-[60px] max-sm:px-4">
        <a href="/" aria-label="На главную Sleep Diving">
          <BrandMark />
        </a>
        <nav className="flex items-center gap-8 text-[16px] font-bold text-sd-navy max-lg:hidden">
          <a className="transition hover:text-sd-copper" href={headerNavItems[0].href}>{headerNavItems[0].label}</a>
          <a className="transition hover:text-sd-copper" href={headerNavItems[1].href}>{headerNavItems[1].label}</a>
          <Badge className="rounded-[4px] bg-sd-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] text-sd-navy">
            Выгода до 20%
          </Badge>
          <a className="transition hover:text-sd-copper" href={headerNavItems[2].href}>{headerNavItems[2].label}</a>
          <a className="transition hover:text-sd-copper" href={headerNavItems[3].href}>{headerNavItems[3].label}</a>
          <Button onClick={openConsultation} className="h-11 rounded-[6px] bg-sd-navy px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(24,33,45,0.16)] transition hover:-translate-y-0.5 hover:bg-sd-navy/92">
            Подобрать матрас
          </Button>
        </nav>
        <div className="flex items-center gap-4 text-sd-muted">
          <button type="button" onClick={openConsultation} aria-label="Открыть консультацию" className="transition hover:text-sd-navy max-sm:hidden">
            <CircleUserRound className="size-6" strokeWidth={1.8} />
          </button>
          <span className="h-6 w-px bg-sd-line max-sm:hidden" />
          <button type="button" onClick={openCart} aria-label="Открыть корзину" className="relative transition hover:text-sd-navy">
            <ShoppingCart className="size-6" strokeWidth={1.8} />
            {totalQuantity > 0 && (
              <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-sd-gold text-[11px] font-bold text-sd-navy">
                {totalQuantity}
              </span>
            )}
          </button>
          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Открыть меню" className="text-sd-navy lg:hidden">
            {mobileMenuOpen ? <X className="size-7" strokeWidth={1.8} /> : <Menu className="size-7" strokeWidth={1.8} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
        <motion.nav
          className="border-t border-sd-line bg-white px-4 py-4 shadow-[0_14px_34px_rgba(24,33,45,0.10)] lg:hidden"
          initial={reducedMotion ? false : { opacity: 0, y: -12, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -8, height: 0 }}
          transition={{ duration: 0.34, ease: premiumEase }}
        >
          <div className="flex flex-col gap-3 text-base font-bold text-sd-navy">
            {headerNavItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="rounded-[6px] bg-sd-soft px-4 py-3">
                {item.label}
              </a>
            ))}
            <button type="button" onClick={() => { setMobileMenuOpen(false); openConsultation() }} className="rounded-[6px] bg-sd-navy px-4 py-3 text-left text-white">
              Подобрать матрас
            </button>
          </div>
        </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
