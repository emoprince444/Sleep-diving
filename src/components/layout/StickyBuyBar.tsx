import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { Rating } from "@/components/brand/Rating"
import { useCart } from "@/components/cart/CartContext"
import { Button } from "@/components/ui/button"
import { productName, stickyNavItems } from "@/data/product"
import comparisonClassic from "@/assets/sleep-diving-comparison-classic.png"
import { premiumEase } from "@/lib/motion"

const sizes = [
  { size: "140x200", price: 15900 },
  { size: "160x200", price: 17500 },
  { size: "180x200", price: 18900 },
]

export function StickyBuyBar() {
  const { addItem } = useCart()
  const reducedMotion = useReducedMotion()
  const [selectedSize, setSelectedSize] = useState("160x200")
  const selectedPrice = sizes.find((item) => item.size === selectedSize) ?? sizes[1]

  function addStickyProduct() {
    addItem({
      id: `classic-${selectedSize}`,
      name: productName,
      image: comparisonClassic,
      size: selectedSize,
      price: selectedPrice.price,
    })
  }

  return (
    <>
      <div className="sticky top-[68px] z-30 border-b border-sd-line bg-white/96 shadow-[0_8px_24px_rgba(17,24,39,0.09)] backdrop-blur max-sm:top-[60px]">
        <div className="mx-auto grid max-w-[1640px] grid-cols-[1fr_0.9fr] items-center gap-8 px-8 py-3 max-lg:grid-cols-1 max-lg:gap-3 max-lg:px-5 max-md:hidden">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Rating small />
            <span className="font-serif text-[23px] leading-tight text-sd-charcoal">
              {productName}
            </span>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-4">
            <label className="flex h-14 items-center justify-between rounded-[6px] border border-sd-line bg-white px-4 shadow-sm transition hover:border-sd-copper/60 hover:shadow-md">
              <select value={selectedSize} onChange={(event) => setSelectedSize(event.target.value)} aria-label="Выберите размер" className="appearance-none bg-transparent text-lg font-bold text-sd-charcoal outline-none">
                {sizes.map((item) => (
                  <option key={item.size}>{item.size}</option>
                ))}
              </select>
              <span className="flex items-center gap-3">
                <span className="text-sm font-bold text-sd-rose">Выгода 5 900 ₽</span>
                <span className="text-xl font-bold text-sd-navy">от {new Intl.NumberFormat("ru-RU").format(selectedPrice.price)} ₽</span>
                <ChevronDown className="size-4 text-sd-muted" />
              </span>
            </label>
            <Button onClick={addStickyProduct} className="h-14 rounded-[6px] bg-sd-gold text-lg font-bold text-sd-navy shadow-[0_12px_28px_rgba(194,132,34,0.20)] transition hover:-translate-y-0.5 hover:bg-sd-gold/90">
              Добавить в корзину
            </Button>
          </div>
        </div>
        <nav className="border-t border-sd-line bg-white">
          <div className="mx-auto flex max-w-[1640px] gap-9 overflow-x-auto px-8 max-lg:px-5 max-sm:px-4">
            {stickyNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`shrink-0 py-3 text-sm font-bold text-sd-muted transition hover:text-sd-navy ${
                  item.active ? "border-b-[3px] border-sd-navy text-sd-charcoal" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <motion.div
        className="fixed inset-x-0 bottom-0 z-50 hidden border-t border-sd-line bg-white/96 px-4 py-3 shadow-[0_-14px_34px_rgba(24,33,45,0.14)] backdrop-blur max-md:block"
        initial={reducedMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.46, ease: premiumEase, delay: 0.18 }}
      >
        <div className="mx-auto grid max-w-md grid-cols-[1fr_auto] items-center gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.06em] text-sd-muted">{selectedSize} / каталог</p>
            <p className="text-xl font-bold text-sd-navy">от {new Intl.NumberFormat("ru-RU").format(selectedPrice.price)} ₽</p>
          </div>
          <Button onClick={addStickyProduct} className="h-12 rounded-[6px] bg-sd-gold px-6 text-base font-bold text-sd-navy shadow-[0_10px_24px_rgba(194,132,34,0.24)] hover:bg-sd-gold/90">
            В корзину
          </Button>
        </div>
      </motion.div>
    </>
  )
}
