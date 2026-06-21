import { ChevronDown } from "lucide-react"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { StickyBuyBar } from "@/components/layout/StickyBuyBar"
import { BedFrameRail } from "@/components/product/BedFrameRail"
import { EditorialSection } from "@/components/product/EditorialSection"
import { FAQSection } from "@/components/product/FAQSection"
import { LayersSection } from "@/components/product/LayersSection"
import { ProductSpecsSection } from "@/components/product/ProductSpecsSection"
import { ProductComparison } from "@/components/product/ProductComparison"
import { ProductGallery } from "@/components/product/ProductGallery"
import { PurchasePanel } from "@/components/product/PurchasePanel"
import { ReviewsSection } from "@/components/product/ReviewsSection"
import { TrustBadges } from "@/components/product/TrustBadges"
import { breadcrumbs } from "@/data/product"

function App() {
  return (
    <main id="overview" className="min-h-screen bg-white text-sd-charcoal">
      <Header />
      <section className="mx-auto max-w-[1640px] px-8 pb-8 pt-6 max-lg:px-5">
        <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-sd-muted">
          <a className="underline" href="#overview">
            {breadcrumbs[0]}
          </a>
          {breadcrumbs.slice(1).map((item) => (
            <span key={item} className="contents">
              <ChevronDown className="-rotate-90" />
              <span>{item}</span>
            </span>
          ))}
        </div>
        <div className="grid grid-cols-[1.56fr_0.86fr] gap-9 max-xl:grid-cols-1">
          <div>
            <ProductGallery />
            <TrustBadges />
          </div>
          <PurchasePanel />
        </div>
      </section>
      <StickyBuyBar />
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

export default App
