import { useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { BadgeCheck, ChevronDown, Maximize2, RotateCcw, ShieldCheck, SlidersHorizontal, Sparkles, Truck } from "lucide-react"

import { useCart } from "@/components/cart/CartContext"
import { Button } from "@/components/ui/button"
import {
  firmnessOptions,
  getProductCardCopy,
  heightOptions,
  mattressProducts,
  productCategoryLabels,
  productCategories,
  type MattressProduct,
} from "@/data/products"
import { premiumTransition, staggerContainer } from "@/lib/motion"

function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value)
}

function matchesHeight(heightCm: number, option: string) {
  if (option === "до 15 см") return heightCm <= 15
  if (option === "16-20 см") return heightCm >= 16 && heightCm <= 20
  if (option === "21-25 см") return heightCm >= 21 && heightCm <= 25
  if (option === "26 см и выше") return heightCm >= 26
  return true
}

function formatSize(size: string) {
  return `${size.replace("x", "×")} см`
}

export function ProductCard({ product }: { product: MattressProduct }) {
  const { addItem } = useCart()
  const reducedMotion = useReducedMotion()
  const defaultSize = product.sizes[Math.max(product.sizes.length - 2, 0)]?.size ?? product.sizes[0].size
  const [selectedSize, setSelectedSize] = useState(defaultSize)
  const selectedPrice = product.sizes.find((item) => item.size === selectedSize) ?? product.sizes[0]
  const copy = getProductCardCopy(product)
  const stats = [
    { label: "Размер", value: formatSize(selectedSize), icon: Maximize2 },
    { label: "Гарантия", value: product.warranty, icon: ShieldCheck },
    { label: "Доставка", value: "По всей стране", icon: Truck },
    { label: "Возврат", value: "14 дней", icon: RotateCcw },
  ]

  return (
    <motion.article
      layout
      transition={premiumTransition}
      whileHover={reducedMotion ? undefined : { y: -6, boxShadow: "0 24px 58px rgba(24,33,45,0.14)" }}
      className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-sd-line bg-white shadow-sm transition-colors duration-300 hover:border-sd-copper/60"
    >
      <a href={`/product/${product.id}`} className="relative block h-[245px] overflow-hidden bg-sd-soft max-sm:h-[108px]" aria-label={`Открыть ${copy.displayName}`}>
        <img src={product.image} alt={product.name} className="size-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-[4px] bg-white/95 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-sd-navy shadow-[0_10px_24px_rgba(24,33,45,0.10)] max-sm:hidden">
          {productCategoryLabels[product.category]}
        </div>
        <div className="absolute bottom-4 right-4 rounded-[4px] bg-sd-navy px-3 py-2 text-sm font-bold text-white shadow-md max-sm:hidden">
          {product.heightCm} см
        </div>
      </a>
      <div className="flex flex-1 flex-col p-6 max-sm:p-3">
        <div className="flex items-start justify-between gap-4 max-sm:gap-2">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-sd-copper max-sm:text-[10px]">{productCategoryLabels[product.category]}</p>
            <h3 className="mt-2 font-serif text-[34px] leading-[1.02] text-sd-charcoal max-sm:mt-0.5 max-sm:text-[28px]">
              <a href={`/product/${product.id}`} className="transition hover:text-sd-navy">
                {copy.displayName}
              </a>
            </h3>
            <p className="mt-3 text-[15px] font-semibold leading-6 text-sd-navy max-sm:mt-0.5 max-sm:overflow-hidden max-sm:text-sm max-sm:leading-5 max-sm:[-webkit-box-orient:vertical] max-sm:[-webkit-line-clamp:1] max-sm:[display:-webkit-box]">{copy.productType}</p>
          </div>
          <span className="shrink-0 rounded-full bg-sd-cream px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-sd-navy max-sm:hidden">{product.firmness}</span>
        </div>

        <p className="mt-5 min-h-[78px] text-[15px] leading-7 text-sd-muted max-sm:hidden">
          {copy.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2.5 text-sm max-sm:hidden">
          {stats.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.label} className="flex items-start gap-3 rounded-[6px] border border-sd-line bg-sd-soft/70 px-3.5 py-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sd-copper shadow-[0_6px_16px_rgba(24,33,45,0.06)]">
                  <Icon className="size-4" strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.08em] text-sd-muted">{item.label}</span>
                  <span className="mt-1 block font-bold leading-5 text-sd-charcoal">{item.value}</span>
                </span>
              </div>
            )
          })}
        </div>

        <label className="mt-6 block text-xs font-bold uppercase tracking-[0.07em] text-sd-muted max-sm:hidden" htmlFor={`${product.id}-size`}>
          Выберите размер
        </label>
        <div className="relative mt-2 max-sm:hidden">
          <select
            id={`${product.id}-size`}
            value={selectedSize}
            onChange={(event) => setSelectedSize(event.target.value)}
            className="h-12 w-full appearance-none rounded-[6px] border border-sd-line bg-white px-4 pr-10 text-base font-bold text-sd-charcoal outline-none transition hover:border-sd-copper/60 focus:border-sd-navy"
          >
            {product.sizes.map((item) => (
              <option key={item.size} value={item.size}>
                {item.size}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-sd-muted" />
        </div>

        <div className="mt-5 rounded-[6px] border border-sd-line bg-white p-4 shadow-[0_12px_34px_rgba(24,33,45,0.04)] max-sm:hidden">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-sd-charcoal">
            <Sparkles className="size-4 text-sd-copper" strokeWidth={1.7} />
            Что вы почувствуете
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-sd-muted">
            {copy.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2">
                <BadgeCheck className="mt-1 size-4 shrink-0 text-sd-green" strokeWidth={1.7} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-sd-line pt-5 max-sm:mt-2.5 max-sm:items-center max-sm:gap-2 max-sm:pt-2.5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold text-sd-muted line-through max-sm:text-xs">{formatRub(selectedPrice.oldPrice)}</p>
              <p className="hidden text-xs font-bold text-sd-rose max-sm:block">-{Math.round((selectedPrice.savings / selectedPrice.oldPrice) * 100)}%</p>
            </div>
            <p className="font-serif text-[34px] leading-none text-sd-navy max-sm:text-[30px]">{formatRub(selectedPrice.rrp)}</p>
            <p className="mt-1 text-sm font-bold text-sd-rose max-sm:hidden">Выгода {formatRub(selectedPrice.savings)}</p>
          </div>
          <Button
            onClick={() => addItem({ id: product.id, name: copy.displayName, image: product.image, size: selectedPrice.size, price: selectedPrice.rrp })}
            className="h-12 rounded-[6px] bg-sd-gold px-6 text-base font-bold text-sd-navy shadow-[0_10px_24px_rgba(194,132,34,0.24)] transition hover:-translate-y-0.5 hover:bg-sd-gold/90 max-sm:hidden"
          >
            Добавить
          </Button>
          <a
            href={`/product/${product.id}`}
            className="hidden h-11 items-center justify-center rounded-[6px] bg-sd-navy px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(24,33,45,0.14)] transition hover:bg-sd-navy/92 max-sm:inline-flex"
          >
            Подробнее
          </a>
        </div>

        <div className="mt-5 rounded-[6px] bg-sd-panel p-4 max-sm:hidden">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-charcoal">
            Материалы
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-6 text-sd-muted">
            {product.layers.slice(0, 4).map((layer) => (
              <li key={layer} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sd-copper" />
                <span>{layer}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm font-bold text-sd-charcoal">
            Нагрузка: {product.loadKg ? `до ${product.loadKg} кг на спальное место` : "для корректировки комфорта основного матраса"}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export function PopularMattressesSection() {
  const popularProducts = mattressProducts.slice(0, 4)

  return (
    <section id="popular-mattresses" className="bg-white px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto max-w-[1640px]">
        <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
          <div className="max-w-[760px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">Популярные матрасы</p>
            <h2 className="mt-4 font-serif text-[48px] leading-tight text-sd-charcoal max-md:text-[34px]">
              Бестселлеры Sleep Diving для спокойного выбора
            </h2>
            <p className="mt-5 text-lg leading-8 text-sd-muted">
              Короткая подборка моделей, с которых удобно начать знакомство с каталогом.
            </p>
          </div>
          <a
            href="/catalog"
            className="inline-flex h-12 items-center justify-center rounded-[6px] bg-sd-navy px-6 text-base font-bold text-white shadow-[0_12px_28px_rgba(24,33,45,0.16)] transition hover:-translate-y-0.5 hover:bg-sd-navy/92"
          >
            Смотреть весь каталог
          </a>
        </div>

        <motion.div
          className="mt-8 grid grid-cols-4 gap-7 max-2xl:grid-cols-2 max-lg:grid-cols-1"
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
        >
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function ProductCatalogSection() {
  const [category, setCategory] = useState<(typeof productCategories)[number]>("Все")
  const [firmness, setFirmness] = useState<(typeof firmnessOptions)[number]>("Все")
  const [height, setHeight] = useState<(typeof heightOptions)[number]>("Все")

  const filteredProducts = useMemo(
    () =>
      mattressProducts.filter((product) => {
        const categoryMatches = category === "Все" || product.category === category
        const firmnessMatches = firmness === "Все" || product.firmness === firmness
        const heightMatches = height === "Все" || matchesHeight(product.heightCm, height)

        return categoryMatches && firmnessMatches && heightMatches
      }),
    [category, firmness, height],
  )

  return (
    <section id="catalog" className="bg-white px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto max-w-[1640px]">
        <div className="grid grid-cols-[0.36fr_0.64fr] gap-10 max-lg:grid-cols-1">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">Каталог матрасов</p>
            <h2 className="mt-4 font-serif text-[48px] leading-tight text-sd-charcoal max-md:text-[34px]">
              Подберите матрас Sleep Diving под свой сценарий сна
            </h2>
            <p className="mt-5 text-lg leading-8 text-sd-muted">
              В каталоге собраны актуальные модели фабрики: от практичных решений до премиальных систем с латексом, кокосовой койрой и независимыми пружинными блоками.
            </p>
          </div>

          <motion.div layout className="rounded-[6px] border border-sd-line bg-sd-panel p-5 shadow-inner">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.07em] text-sd-charcoal">
              <SlidersHorizontal className="size-4 text-sd-copper" />
              Фильтры
            </div>
            <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
              <motion.select layout value={category} onChange={(event) => setCategory(event.target.value as typeof category)} className="h-12 rounded-[6px] border border-sd-line bg-white px-4 font-bold text-sd-charcoal outline-none transition hover:border-sd-copper/60 focus:border-sd-copper focus:shadow-[0_0_0_3px_rgba(194,132,34,0.12)]">
                {productCategories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </motion.select>
              <motion.select layout value={firmness} onChange={(event) => setFirmness(event.target.value as typeof firmness)} className="h-12 rounded-[6px] border border-sd-line bg-white px-4 font-bold text-sd-charcoal outline-none transition hover:border-sd-copper/60 focus:border-sd-copper focus:shadow-[0_0_0_3px_rgba(194,132,34,0.12)]">
                {firmnessOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </motion.select>
              <motion.select layout value={height} onChange={(event) => setHeight(event.target.value as typeof height)} className="h-12 rounded-[6px] border border-sd-line bg-white px-4 font-bold text-sd-charcoal outline-none transition hover:border-sd-copper/60 focus:border-sd-copper focus:shadow-[0_0_0_3px_rgba(194,132,34,0.12)]">
                {heightOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </motion.select>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-y border-sd-line py-4 max-sm:flex-col max-sm:items-start">
          <p className="text-sm font-bold text-sd-muted">
            Найдено моделей: <span className="text-sd-charcoal">{filteredProducts.length}</span>
          </p>
          <p className="text-sm font-semibold text-sd-muted">Для покупателей показана только публичная цена РРЦ.</p>
        </div>

        <motion.div
          layout
          className="mt-8 grid grid-cols-3 gap-7 max-xl:grid-cols-2 max-lg:grid-cols-1"
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
