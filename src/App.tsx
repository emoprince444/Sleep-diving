import { ChevronDown } from "lucide-react"

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
import { TrustBadges } from "@/components/product/TrustBadges"
import { TrustedBySleepersSection } from "@/components/product/TrustedBySleepersSection"
import { WhySleepDivingSection } from "@/components/product/WhySleepDivingSection"
import { breadcrumbs } from "@/data/product"
import { mattressProducts } from "@/data/products"

function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value)
}

function HomePage() {
  return (
    <main id="overview" className="min-h-screen bg-white text-sd-charcoal">
      <Header />
      <section className="bg-[linear-gradient(180deg,#fbfaf7_0%,#ffffff_78%)] px-8 pb-10 pt-7 max-lg:px-5 max-sm:px-4 max-sm:pt-5">
        <div className="mx-auto max-w-[1640px]">
          <div className="mb-7 flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] text-sd-muted">
            <a className="text-sd-navy underline decoration-sd-gold underline-offset-4 transition hover:text-sd-copper" href="#overview">
              {breadcrumbs[0]}
            </a>
            {breadcrumbs.slice(1).map((item) => (
              <span key={item} className="contents">
                <ChevronDown className="size-3 shrink-0 -rotate-90 text-sd-copper" />
                <span>{item}</span>
              </span>
            ))}
          </div>
          <div className="grid grid-cols-[1.58fr_0.82fr] items-start gap-10 max-xl:grid-cols-1">
            <div>
              <ProductGallery />
              <TrustBadges />
            </div>
            <PurchasePanel />
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
  const defaultPrice = product.sizes[Math.max(product.sizes.length - 2, 0)] ?? product.sizes[0]

  return (
    <main className="min-h-screen bg-white text-sd-charcoal">
      <Header />
      <section className="px-8 py-12 max-lg:px-5 max-sm:px-4">
        <div className="mx-auto grid max-w-[1340px] grid-cols-[0.9fr_1.1fr] gap-10 max-lg:grid-cols-1">
          <img src={product.image} alt={product.name} className="min-h-[420px] w-full rounded-[6px] object-cover shadow-[0_24px_70px_rgba(24,33,45,0.12)] max-sm:min-h-[280px]" />
          <div>
            <a href="/catalog" className="text-sm font-bold text-sd-copper underline underline-offset-4">Вернуться в каталог</a>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">{product.category}</p>
            <h1 className="mt-3 font-serif text-[56px] leading-tight text-sd-charcoal max-md:text-[38px]">{product.name}</h1>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-sd-muted">
              <span className="rounded-[4px] bg-sd-soft px-3 py-2">{product.heightCm} см</span>
              <span className="rounded-[4px] bg-sd-soft px-3 py-2">{product.firmness}</span>
              <span className="rounded-[4px] bg-sd-soft px-3 py-2">{product.warranty}</span>
            </div>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-sd-muted">
              {product.collection}. Нагрузка: {product.loadKg ? `до ${product.loadKg} кг на спальное место` : "для корректировки комфорта основного матраса"}.
            </p>
            <div className="mt-7 rounded-[6px] border border-sd-line bg-sd-panel p-5">
              <p className="text-sm font-bold uppercase tracking-[0.07em] text-sd-charcoal">Состав</p>
              <ul className="mt-3 grid gap-2 text-base leading-7 text-sd-muted">
                {product.layers.map((layer) => (
                  <li key={layer}>{layer}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-sd-line pt-6">
              <div>
                <p className="text-sm font-semibold text-sd-muted">Размер {defaultPrice.size}</p>
                <p className="font-serif text-[42px] leading-none text-sd-navy">{formatRub(defaultPrice.rrp)}</p>
              </div>
              <button
                type="button"
                onClick={() => addItem({ id: product.id, name: product.name, image: product.image, size: defaultPrice.size, price: defaultPrice.rrp })}
                className="inline-flex h-14 items-center rounded-[6px] bg-sd-gold px-8 text-lg font-bold text-sd-navy shadow-[0_14px_34px_rgba(194,132,34,0.24)] transition hover:-translate-y-0.5 hover:bg-sd-gold/90"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </section>
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
