import { useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { SlidersHorizontal } from "lucide-react"

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

export function ProductCard({ product }: { product: MattressProduct }) {
  const reducedMotion = useReducedMotion()
  const selectedPrice = product.sizes[Math.max(product.sizes.length - 2, 0)] ?? product.sizes[0]
  const copy = getProductCardCopy(product)

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
      </a>
      <div className="flex flex-1 flex-col p-6 max-sm:p-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-sd-copper max-sm:text-[10px]">{productCategoryLabels[product.category]}</p>
        <h3 className="mt-2 font-serif text-[34px] leading-[1.02] text-sd-charcoal max-sm:mt-0.5 max-sm:text-[28px]">
          <a href={`/product/${product.id}`} className="transition hover:text-sd-navy">
            {copy.displayName}
          </a>
        </h3>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.06em] text-sd-navy max-sm:mt-1 max-sm:text-[11px]">{copy.positioningLabel}</p>
        <p className="mt-3 min-h-[48px] text-[15px] font-semibold leading-6 text-sd-navy max-sm:mt-1 max-sm:min-h-0 max-sm:overflow-hidden max-sm:text-sm max-sm:leading-5 max-sm:[-webkit-box-orient:vertical] max-sm:[-webkit-line-clamp:2] max-sm:[display:-webkit-box]">
          {copy.productType}
        </p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-sd-line pt-5 max-sm:mt-3 max-sm:items-center max-sm:gap-2 max-sm:pt-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-muted max-sm:text-[10px]">от</p>
            <p className="font-serif text-[34px] leading-none text-sd-navy max-sm:text-[30px]">{formatRub(selectedPrice.rrp)}</p>
          </div>
          <a
            href={`/product/${product.id}`}
            className="inline-flex h-12 items-center justify-center rounded-[6px] bg-sd-navy px-6 text-base font-bold text-white shadow-[0_10px_24px_rgba(24,33,45,0.14)] transition hover:-translate-y-0.5 hover:bg-sd-navy/92 max-sm:h-11 max-sm:px-5 max-sm:text-sm"
          >
            Подробнее
          </a>
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
