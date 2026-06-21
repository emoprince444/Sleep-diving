import { useMemo, useState } from "react"
import { BadgeCheck, ChevronDown, PackageCheck, Ruler, ShieldCheck, SlidersHorizontal, Truck } from "lucide-react"

import { useCart } from "@/components/cart/CartContext"
import { Button } from "@/components/ui/button"
import {
  firmnessOptions,
  heightOptions,
  mattressProducts,
  productCategories,
  type MattressProduct,
} from "@/data/products"

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
  const { addItem } = useCart()
  const defaultSize = product.sizes[Math.max(product.sizes.length - 2, 0)]?.size ?? product.sizes[0].size
  const [selectedSize, setSelectedSize] = useState(defaultSize)
  const selectedPrice = product.sizes.find((item) => item.size === selectedSize) ?? product.sizes[0]

  return (
    <article className="group overflow-hidden rounded-[6px] border border-sd-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sd-copper/60 hover:shadow-[0_22px_54px_rgba(24,33,45,0.13)]">
      <a href={`/product/${product.id}`} className="relative block h-[245px] overflow-hidden bg-sd-soft" aria-label={`Открыть ${product.name}`}>
        <img src={product.image} alt={product.name} className="size-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-[4px] bg-sd-navy px-3 py-2 text-xs font-bold uppercase tracking-[0.06em] text-white">
          {product.category}
        </div>
        <div className="absolute bottom-4 right-4 rounded-[4px] bg-white px-3 py-2 text-sm font-bold text-sd-navy shadow-md">
          {product.heightCm} см
        </div>
      </a>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">{product.collection}</p>
            <h3 className="mt-2 font-serif text-[30px] leading-tight text-sd-charcoal">
              <a href={`/product/${product.id}`} className="transition hover:text-sd-navy">
                {product.name}
              </a>
            </h3>
          </div>
          <span className="rounded-full bg-sd-cream px-3 py-1 text-xs font-bold text-sd-navy">{product.firmness}</span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-sm max-sm:grid-cols-1">
          <span className="flex items-center gap-2 rounded-[4px] bg-sd-soft px-3 py-2 font-semibold text-sd-muted">
            <Ruler className="size-4 text-sd-copper" />
            {selectedSize}
          </span>
          <span className="flex items-center gap-2 rounded-[4px] bg-sd-soft px-3 py-2 font-semibold text-sd-muted">
            <ShieldCheck className="size-4 text-sd-copper" />
            {product.warranty}
          </span>
          <span className="flex items-center gap-2 rounded-[4px] bg-sd-soft px-3 py-2 font-semibold text-sd-muted">
            <Truck className="size-4 text-sd-copper" />
            Доставка
          </span>
        </div>

        <label className="mt-5 block text-xs font-bold uppercase tracking-[0.07em] text-sd-muted" htmlFor={`${product.id}-size`}>
          Выберите размер
        </label>
        <div className="relative mt-2">
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

        <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-sd-line pt-5">
          <div>
            <p className="text-sm font-semibold text-sd-muted line-through">{formatRub(selectedPrice.oldPrice)}</p>
            <p className="font-serif text-[34px] leading-none text-sd-navy">{formatRub(selectedPrice.rrp)}</p>
            <p className="mt-1 text-sm font-bold text-sd-rose">Выгода {formatRub(selectedPrice.savings)}</p>
          </div>
          <Button
            onClick={() => addItem({ id: product.id, name: product.name, image: product.image, size: selectedPrice.size, price: selectedPrice.rrp })}
            className="h-12 rounded-[6px] bg-sd-gold px-6 text-base font-bold text-sd-navy shadow-[0_10px_24px_rgba(194,132,34,0.24)] transition hover:-translate-y-0.5 hover:bg-sd-gold/90"
          >
            Добавить
          </Button>
        </div>

        <div className="mt-5 rounded-[6px] bg-sd-panel p-4">
          <p className="flex items-center gap-2 text-sm font-bold text-sd-charcoal">
            <PackageCheck className="size-4 text-sd-copper" />
            Состав
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-6 text-sd-muted">
            {product.layers.slice(0, 4).map((layer) => (
              <li key={layer} className="flex gap-2">
                <BadgeCheck className="mt-1 size-4 shrink-0 text-sd-green" />
                <span>{layer}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm font-bold text-sd-charcoal">
            Нагрузка: {product.loadKg ? `до ${product.loadKg} кг на спальное место` : "для корректировки комфорта основного матраса"}
          </p>
        </div>
      </div>
    </article>
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

        <div className="mt-8 grid grid-cols-4 gap-7 max-2xl:grid-cols-2 max-lg:grid-cols-1">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
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

          <div className="rounded-[6px] border border-sd-line bg-sd-panel p-5 shadow-inner">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.07em] text-sd-charcoal">
              <SlidersHorizontal className="size-4 text-sd-copper" />
              Фильтры
            </div>
            <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
              <select value={category} onChange={(event) => setCategory(event.target.value as typeof category)} className="h-12 rounded-[6px] border border-sd-line bg-white px-4 font-bold text-sd-charcoal outline-none transition hover:border-sd-copper/60">
                {productCategories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <select value={firmness} onChange={(event) => setFirmness(event.target.value as typeof firmness)} className="h-12 rounded-[6px] border border-sd-line bg-white px-4 font-bold text-sd-charcoal outline-none transition hover:border-sd-copper/60">
                {firmnessOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <select value={height} onChange={(event) => setHeight(event.target.value as typeof height)} className="h-12 rounded-[6px] border border-sd-line bg-white px-4 font-bold text-sd-charcoal outline-none transition hover:border-sd-copper/60">
                {heightOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-y border-sd-line py-4 max-sm:flex-col max-sm:items-start">
          <p className="text-sm font-bold text-sd-muted">
            Найдено моделей: <span className="text-sd-charcoal">{filteredProducts.length}</span>
          </p>
          <p className="text-sm font-semibold text-sd-muted">Для покупателей показана только публичная цена РРЦ.</p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-7 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
