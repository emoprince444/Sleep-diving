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
import { ProductCatalogSection } from "@/components/product/ProductCatalogSection"
import { ProductGallery } from "@/components/product/ProductGallery"
import { PurchasePanel } from "@/components/product/PurchasePanel"
import { ReviewsSection } from "@/components/product/ReviewsSection"
import { TrustBadges } from "@/components/product/TrustBadges"
import { TrustedBySleepersSection } from "@/components/product/TrustedBySleepersSection"
import { WhySleepDivingSection } from "@/components/product/WhySleepDivingSection"
import { breadcrumbs } from "@/data/product"

function App() {
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
      <ProductCatalogSection />
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

export default App
