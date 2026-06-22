import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { BadgeCheck, BedDouble, CheckCircle2, HeartHandshake, Maximize2, RotateCcw, ShieldCheck, Truck } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { CartDrawer, CartProvider, ConsultationModal, useCart } from "@/components/cart/CartContext"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { StickyBuyBar } from "@/components/layout/StickyBuyBar"
import { BedFrameRail } from "@/components/product/BedFrameRail"
import { EditorialSection } from "@/components/product/EditorialSection"
import { FAQSection } from "@/components/product/FAQSection"
import { LayersSection } from "@/components/product/LayersSection"
import { ProductSpecsSection } from "@/components/product/ProductSpecsSection"
import { ProductComparison } from "@/components/product/ProductComparison"
import { PopularMattressesSection, ProductCatalogSection } from "@/components/product/ProductCatalogSection"
import { ProductGallery } from "@/components/product/ProductGallery"
import { PurchasePanel } from "@/components/product/PurchasePanel"
import { ReviewsSection } from "@/components/product/ReviewsSection"
import { GalleryBenefitsPanel, TrustBadges } from "@/components/product/TrustBadges"
import { TrustedBySleepersSection } from "@/components/product/TrustedBySleepersSection"
import { WhySleepDivingSection } from "@/components/product/WhySleepDivingSection"
import { breadcrumbs } from "@/data/product"
import { getProductCardCopy, mattressProducts, similarProductMap, type MattressProduct, type ProductCategory } from "@/data/products"
import { fadeUp, premiumTransition, staggerContainer } from "@/lib/motion"

function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value)
}

function formatSize(size: string) {
  return `${size.replace("x", "×")} см`
}

const productDetailCategoryLabels: Record<ProductCategory, string> = {
  "Эконом класс": "Базовая коллекция",
  "Средний ценовой сегмент": "Comfort Collection",
  "Премиум класс": "Signature Collection",
}

function getDiscountPercent(oldPrice: number, price: number) {
  return Math.round(((oldPrice - price) / oldPrice) * 100)
}

function getAudience(product: MattressProduct) {
  const audience = [
    product.firmness.includes("мяг") ? "Тем, кто любит мягкое первое касание и расслабленное положение плеч." : "Тем, кто хочет ровную поддержку без ощущения лишней мягкости.",
    product.loadKg ? `Парам и взрослым спальням с нагрузкой до ${product.loadKg} кг на спальное место.` : "Для диванов, гостевых зон и обновления привычного матраса без полной замены.",
    product.heightCm >= 25 ? "Тем, кто ценит высокий гостиничный профиль и выразительную посадку кровати." : "Для аккуратных интерьеров, где важны комфорт и визуальная лёгкость.",
  ]

  if (product.layers.some((layer) => layer.toLowerCase().includes("кокос"))) {
    audience.push("Покупателям, которым нужна более собранная поверхность и стабильная поддержка.")
  } else if (product.layers.some((layer) => layer.toLowerCase().includes("латекс"))) {
    audience.push("Тем, кто предпочитает эластичное, деликатно пружинящее ощущение сна.")
  } else {
    audience.push("Тем, кто ищет спокойный ежедневный комфорт без сложной настройки.")
  }

  return audience
}

function HomePage() {
  const reducedMotion = useReducedMotion()

  return (
    <main id="overview" className="min-h-screen bg-white text-sd-charcoal">
      <Header />
      <section className="bg-[linear-gradient(180deg,#fbfaf7_0%,#ffffff_78%)] px-8 pb-5 pt-7 max-xl:pb-10 max-lg:px-5 max-sm:px-4 max-sm:pt-5">
        <div className="mx-auto max-w-[1640px]">
          <motion.div
            className="mb-7 flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] text-sd-muted"
            initial={reducedMotion ? false : "hidden"}
            animate="show"
            variants={staggerContainer}
          >
            <a className="text-sd-navy underline decoration-sd-gold underline-offset-4 transition hover:text-sd-copper" href="#overview">
              {breadcrumbs[0]}
            </a>
            {breadcrumbs.slice(1).map((item) => (
              <motion.span key={item} className="contents" variants={fadeUp} transition={premiumTransition}>
                <ChevronDown className="size-3 shrink-0 -rotate-90 text-sd-copper" />
                <span>{item}</span>
              </motion.span>
            ))}
          </motion.div>
          <div className="grid grid-cols-[1.58fr_0.82fr] items-start gap-10 max-xl:grid-cols-1">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...premiumTransition, delay: 0.08 }}
            >
              <ProductGallery />
              <TrustBadges />
              <GalleryBenefitsPanel />
            </motion.div>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...premiumTransition, delay: 0.18 }}
            >
              <PurchasePanel />
            </motion.div>
          </div>
        </div>
      </section>
      <StickyBuyBar />
      <PopularMattressesSection />
      <WhySleepDivingSection />
      <TrustedBySleepersSection />
      <ProductComparison />
      <ReviewsSection />
      <LayersSection />
      <EditorialSection />
      <section id="bed-frames">
        <BedFrameRail />
      </section>
      <ProductSpecsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

function CatalogPage() {
  return (
    <main className="min-h-screen bg-white text-sd-charcoal">
      <Header />
      <ProductCatalogSection />
      <Footer />
    </main>
  )
}

function ProductDetailPage({ productId }: { productId: string }) {
  const { addItem } = useCart()
  const product = mattressProducts.find((item) => item.id === productId) ?? mattressProducts[0]
  const copy = getProductCardCopy(product)
  const defaultPrice = product.sizes[Math.max(product.sizes.length - 2, 0)] ?? product.sizes[0]
  const [selectedSize, setSelectedSize] = useState(defaultPrice.size)
  const selectedPrice = product.sizes.find((item) => item.size === selectedSize) ?? defaultPrice
  const discountPercent = getDiscountPercent(selectedPrice.oldPrice, selectedPrice.rrp)
  const audience = getAudience(product)
  const proofItems = [
    { label: "Высота", value: `${product.heightCm} см`, icon: Maximize2 },
    { label: "Гарантия", value: product.warranty, icon: ShieldCheck },
    { label: "Доставка", value: "По всей стране", icon: Truck },
    { label: "Возврат", value: "14 дней", icon: RotateCcw },
  ]
  const ctaTrustItems = [
    { label: "Доставка", value: "3-7 дней", icon: Truck },
    { label: "Гарантия", value: product.warranty, icon: ShieldCheck },
    { label: "Тест дома", value: "120 ночей", icon: BadgeCheck },
  ]
  const reasons = [
    "Премиальные материалы подобраны под ежедневный сон, а не только под красивую спецификацию.",
    "Каждая модель держит баланс между мягким первым касанием и стабильной поддержкой тела.",
    "Корзина и заявка помогают быстро зафиксировать выбранный размер без лишних шагов.",
  ]
  const similarProducts = (similarProductMap[product.id] ?? [])
    .map((item) => {
      const similarProduct = mattressProducts.find((candidate) => candidate.id === item.productId)

      return similarProduct
        ? {
          product: similarProduct,
          copy: getProductCardCopy(similarProduct),
          bullets: item.bullets.slice(0, 3),
        }
        : null
    })
    .filter((item): item is { product: MattressProduct; copy: ReturnType<typeof getProductCardCopy>; bullets: string[] } => Boolean(item))
  const addSelectedToCart = () => addItem({ id: product.id, name: copy.displayName, image: product.image, size: selectedPrice.size, price: selectedPrice.rrp })

  return (
    <main className="min-h-screen bg-white pb-24 text-sd-charcoal sm:pb-0">
      <Header />
      <section className="bg-[linear-gradient(180deg,#fbfaf7_0%,#ffffff_84%)] px-8 py-10 max-lg:px-5 max-sm:px-4 max-sm:py-3">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[0.92fr_1.08fr] gap-12 max-lg:grid-cols-1 max-sm:gap-4">
          <div className="min-w-0">
            <a href="/catalog" className="text-sm font-bold text-sd-copper underline underline-offset-4 transition hover:text-sd-navy max-sm:text-xs">Вернуться в каталог</a>
            <div className="relative mt-6 overflow-hidden rounded-[6px] border border-sd-line bg-sd-soft shadow-[0_28px_80px_rgba(24,33,45,0.13)] max-sm:mt-3 max-sm:shadow-[0_16px_42px_rgba(24,33,45,0.10)]">
              <img src={product.image} alt={copy.displayName} className="aspect-[1.12/1] w-full object-cover max-sm:aspect-[1.55/1]" />
              <div className="absolute left-4 top-4 rounded-[4px] bg-white/95 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-sd-navy shadow-[0_10px_28px_rgba(24,33,45,0.10)] max-sm:hidden">
                {productDetailCategoryLabels[product.category]}
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-sd-copper max-sm:text-[10px]">{productDetailCategoryLabels[product.category]}</p>
            <h1 className="mt-3 font-serif text-[64px] leading-[0.98] text-sd-charcoal max-xl:text-[54px] max-md:text-[42px] max-sm:mt-2 max-sm:text-[38px]">
              {copy.displayName}
            </h1>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-sd-navy max-sm:mt-2 max-sm:text-xs">
              {copy.positioningLabel}
            </p>
            <p className="mt-2 max-w-2xl text-xl font-semibold leading-8 text-sd-navy max-sm:text-base max-sm:leading-6">
              {copy.productType}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-sd-muted max-sm:mt-2 max-sm:overflow-hidden max-sm:text-sm max-sm:leading-6 max-sm:[-webkit-box-orient:vertical] max-sm:[-webkit-line-clamp:2] max-sm:[display:-webkit-box]">
              {copy.description} Модель создана для спокойного, уверенного сна: с продуманной высотой, чистой посадкой на кровати и ощущением комфорта, которое не требует громких обещаний.
            </p>

            <div className="mt-7 rounded-[6px] border border-sd-line bg-white p-6 shadow-[0_24px_70px_rgba(24,33,45,0.10)] max-sm:mt-4 max-sm:p-4 max-sm:shadow-[0_14px_38px_rgba(24,33,45,0.08)]">
              <div className="flex flex-wrap items-start justify-between gap-4 max-sm:gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-sd-muted line-through max-sm:text-xs">{formatRub(selectedPrice.oldPrice)}</p>
                    <p className="text-sm font-bold text-sd-rose max-sm:text-xs">Выгода {formatRub(selectedPrice.savings)}</p>
                  </div>
                  <div className="mt-1 flex flex-wrap items-end gap-3 max-sm:gap-2">
                    <p className="font-serif text-[48px] leading-none text-sd-navy max-sm:text-[44px]">{formatRub(selectedPrice.rrp)}</p>
                    <span className="mb-1 rounded-[4px] bg-sd-rose px-3 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-white">
                      -{discountPercent}%
                    </span>
                  </div>
                </div>
                <div className="rounded-[4px] bg-sd-panel px-4 py-3 text-right max-sm:w-auto max-sm:px-3 max-sm:py-2 max-sm:text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-sd-muted">Выбранный размер</p>
                  <p className="mt-1 font-bold text-sd-charcoal">{formatSize(selectedSize)}</p>
                </div>
              </div>

              <label className="mt-6 block text-xs font-bold uppercase tracking-[0.08em] text-sd-muted max-sm:mt-4" htmlFor={`${product.id}-detail-size`}>
                Выберите размер
              </label>
              <div className="relative mt-2">
                <select
                  id={`${product.id}-detail-size`}
                  value={selectedSize}
                  onChange={(event) => setSelectedSize(event.target.value)}
                  className="h-14 w-full appearance-none rounded-[6px] border border-sd-line bg-white px-4 pr-11 text-base font-bold text-sd-charcoal outline-none transition hover:border-sd-copper/60 focus:border-sd-navy max-sm:h-12"
                >
                  {product.sizes.map((item) => (
                    <option key={item.size} value={item.size}>
                      {formatSize(item.size)}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-sd-muted" />
              </div>

              <button
                type="button"
                onClick={addSelectedToCart}
                className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-[6px] bg-sd-gold px-8 text-lg font-bold text-sd-navy shadow-[0_14px_34px_rgba(194,132,34,0.24)] transition hover:-translate-y-0.5 hover:bg-sd-gold/90 max-sm:mt-3 max-sm:h-12"
              >
                Добавить в корзину
              </button>

              <div className="mt-3 grid grid-cols-3 gap-2 max-sm:grid-cols-1">
                {ctaTrustItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.label} className="flex items-center gap-2 rounded-[6px] border border-sd-line bg-sd-panel px-3 py-2.5 max-sm:px-3 max-sm:py-2">
                      <Icon className="size-4 shrink-0 text-sd-copper" strokeWidth={1.8} />
                      <span className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-sd-muted">{item.label}</span>
                        <span className="block truncate text-sm font-bold leading-5 text-sd-charcoal">{item.value}</span>
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 hidden rounded-[6px] bg-sd-panel p-3 max-sm:block">
                <ul className="grid gap-1.5 text-sm leading-5 text-sd-muted">
                  {copy.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-sd-green" strokeWidth={1.7} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 max-sm:mt-3 max-sm:gap-2">
                {proofItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.label} className="flex items-start gap-3 rounded-[6px] bg-sd-soft px-3.5 py-3 max-sm:gap-2 max-sm:px-2.5 max-sm:py-2.5">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sd-copper shadow-[0_6px_16px_rgba(24,33,45,0.06)] max-sm:size-7">
                        <Icon className="size-4 max-sm:size-3.5" strokeWidth={1.7} />
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.08em] text-sd-muted max-sm:text-[10px]">{item.label}</span>
                        <span className="mt-1 block font-bold leading-5 text-sd-charcoal max-sm:text-sm max-sm:leading-4">{item.value}</span>
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {similarProducts.length > 0 && (
        <section id="similar-models" className="bg-white px-8 py-14 max-lg:px-5 max-sm:px-4 max-sm:py-7">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start max-sm:gap-3">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-sd-copper">Похожие модели</p>
                <h2 className="mt-3 font-serif text-[44px] leading-tight text-sd-charcoal max-md:text-[34px] max-sm:text-[30px]">
                  Сравните ощущение без технической таблицы
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-sd-muted max-sm:text-sm max-sm:leading-6">
                Подобрали ближайшие альтернативы к {copy.displayName}, чтобы было проще выбрать между мягкостью, плотностью и стабильностью поддержки.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-sm:mt-5 max-sm:gap-3">
              {similarProducts.map((item) => (
                <article key={item.product.id} className="group grid grid-rows-[180px_1fr] overflow-hidden rounded-[6px] border border-sd-line bg-white shadow-[0_16px_46px_rgba(24,33,45,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sd-copper/60 hover:shadow-[0_22px_60px_rgba(24,33,45,0.10)] max-sm:grid-rows-[132px_1fr]">
                  <a href={`/product/${item.product.id}`} className="block overflow-hidden bg-sd-soft" aria-label={`Открыть ${item.copy.displayName}`}>
                    <img src={item.product.image} alt={item.product.name} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                  </a>
                  <div className="flex flex-col p-5 max-sm:p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-sd-copper">{item.copy.positioningLabel}</p>
                    <h3 className="mt-2 font-serif text-[30px] leading-none text-sd-charcoal max-sm:text-[26px]">
                      {item.copy.displayName}
                    </h3>
                    <p className="mt-2 text-sm font-bold leading-5 text-sd-navy">{item.copy.productType}</p>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-sd-muted max-sm:text-sm max-sm:leading-5">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-sd-green" strokeWidth={1.8} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`/product/${item.product.id}`} className="mt-5 inline-flex h-10 w-fit items-center justify-center rounded-[6px] border border-sd-line px-4 text-sm font-bold text-sd-navy transition hover:border-sd-copper/70 hover:bg-sd-panel">
                      Смотреть модель
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-8 py-14 max-lg:px-5 max-sm:px-4 max-sm:py-7">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[0.42fr_0.58fr] gap-10 max-lg:grid-cols-1">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-sd-copper">Слои и ощущения</p>
            <h2 className="mt-3 font-serif text-[44px] leading-tight text-sd-charcoal max-md:text-[34px] max-sm:text-[30px]">
              Состав, который читается как комфорт
            </h2>
            <p className="mt-5 text-lg leading-8 text-sd-muted max-sm:mt-3 max-sm:text-sm max-sm:leading-6">
              Мы показываем слои не как складскую спецификацию, а как понятную карту ощущений: что отвечает за мягкость, что за опору, а что помогает матрасу сохранять форму.
            </p>
          </div>
          <div className="grid gap-4 max-sm:gap-3">
            {product.layers.map((layer, index) => (
              <article key={layer} className="grid grid-cols-[52px_1fr] gap-4 rounded-[6px] border border-sd-line bg-white p-5 shadow-[0_14px_40px_rgba(24,33,45,0.05)] max-sm:grid-cols-[38px_1fr] max-sm:gap-3 max-sm:p-3.5">
                <span className="flex size-12 items-center justify-center rounded-full bg-sd-panel text-sm font-bold text-sd-navy max-sm:size-9 max-sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold leading-6 text-sd-charcoal max-sm:text-sm max-sm:leading-5">{layer}</h3>
                  <p className="mt-2 text-sm leading-6 text-sd-muted max-sm:mt-1 max-sm:text-xs max-sm:leading-5">
                    {index === 0
                      ? "Отвечает за первое тактильное ощущение и аккуратный внешний вид матраса."
                      : index === product.layers.length - 1
                        ? "Формирует устойчивую основу и помогает матрасу сохранять геометрию."
                        : "Работает на баланс давления, упругости и поддержки в ежедневном сне."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sd-panel px-8 py-14 max-lg:px-5 max-sm:px-4 max-sm:py-7">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 max-lg:grid-cols-1 max-sm:gap-4">
          <div className="rounded-[6px] border border-sd-line bg-white p-7 shadow-[0_18px_54px_rgba(24,33,45,0.07)] max-sm:p-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-sd-copper">
              <BedDouble className="size-4" strokeWidth={1.7} />
              Для кого подходит
            </p>
            <h2 className="mt-3 font-serif text-[38px] leading-tight text-sd-charcoal max-sm:text-[28px]">Спокойный выбор под ваш сценарий сна</h2>
            <ul className="mt-6 grid gap-3 text-base leading-7 text-sd-muted max-sm:mt-4 max-sm:text-sm max-sm:leading-6">
              {audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-sd-green" strokeWidth={1.7} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[6px] border border-sd-line bg-white p-7 shadow-[0_18px_54px_rgba(24,33,45,0.07)] max-sm:p-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-sd-copper">
              <HeartHandshake className="size-4" strokeWidth={1.7} />
              Почему выбирают Sleep Diving
            </p>
            <h2 className="mt-3 font-serif text-[38px] leading-tight text-sd-charcoal max-sm:text-[28px]">Премиальность без лишнего шума</h2>
            <ul className="mt-6 grid gap-3 text-base leading-7 text-sd-muted max-sm:mt-4 max-sm:text-sm max-sm:leading-6">
              {reasons.map((item) => (
                <li key={item} className="flex gap-3">
                  <BadgeCheck className="mt-1 size-5 shrink-0 text-sd-green" strokeWidth={1.7} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center max-sm:grid-cols-1">
              <div className="rounded-[6px] bg-sd-soft px-4 py-3">
                <p className="font-serif text-2xl text-sd-navy">4.8/5</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-sd-muted">Рейтинг</p>
              </div>
              <div className="rounded-[6px] bg-sd-soft px-4 py-3">
                <p className="font-serif text-2xl text-sd-navy">120</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-sd-muted">Ночей теста</p>
              </div>
              <div className="rounded-[6px] bg-sd-soft px-4 py-3">
                <p className="font-serif text-2xl text-sd-navy">0 ₽</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-sd-muted">Доставка</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sd-line bg-white/96 px-4 py-3 shadow-[0_-16px_36px_rgba(24,33,45,0.14)] backdrop-blur sm:hidden">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-bold uppercase tracking-[0.08em] text-sd-muted">{formatSize(selectedSize)}</p>
            <p className="font-serif text-2xl leading-none text-sd-navy">от {formatRub(selectedPrice.rrp)}</p>
          </div>
          <button
            type="button"
            onClick={addSelectedToCart}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-[6px] bg-sd-gold px-5 text-base font-bold text-sd-navy shadow-[0_10px_24px_rgba(194,132,34,0.24)]"
          >
            Купить
          </button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

function AppContent() {
  const path = window.location.pathname

  if (path === "/catalog" || path === "/matrasy") {
    return <CatalogPage />
  }

  if (path.startsWith("/product/")) {
    return <ProductDetailPage productId={decodeURIComponent(path.replace("/product/", ""))} />
  }

  return <HomePage />
}

function App() {
  return (
    <CartProvider>
      <AppContent />
      <CartDrawer />
      <ConsultationModal />
    </CartProvider>
  )
}

export default App
