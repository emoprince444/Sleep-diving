import { Check, ChevronDown, Share2 } from "lucide-react"

import { Rating } from "@/components/brand/Rating"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { productName, promoTimerParts, upgrades } from "@/data/product"

type Upgrade = (typeof upgrades)[number]

function PromoTimer() {
  return (
    <div className="bg-sd-navy px-5 py-4 text-white">
      <div className="grid grid-cols-[1fr_auto] items-center gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-gold">Summer sleep event</p>
          <p className="mt-1 max-w-[290px] text-[20px] font-semibold leading-snug">
            Save up to 55% on mattresses + curated bundles
          </p>
        </div>
        <div className="grid grid-cols-4 gap-1 bg-white px-4 py-2 text-center text-sd-navy">
          {promoTimerParts.map(({ num, label }) => (
            <div key={label} className="min-w-10">
              <div className="text-xl font-bold leading-none">{num}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase text-sd-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2 text-right text-sm font-semibold text-white/80">Order today for fastest shipping</p>
    </div>
  )
}

function UpgradeCard({ upgrade }: { upgrade: Upgrade }) {
  return (
    <button
      type="button"
      className={`relative flex min-h-[205px] flex-col items-start border bg-white p-4 text-left transition ${
        upgrade.selected ? "border-[2px] border-sd-navy" : "border-sd-line hover:border-sd-muted/50"
      }`}
    >
      {!upgrade.selected && (
        <Badge className="absolute -top-8 left-0 rounded-none bg-sd-slate px-3 py-2 text-xs font-bold uppercase text-white">
          Most popular
        </Badge>
      )}
      <span className="text-base font-bold text-sd-navy">{upgrade.name}</span>
      <span className="text-sm font-semibold text-sd-muted">{upgrade.price}</span>
      <img src={upgrade.image} alt="" className="mx-auto mt-2 h-16 w-32 object-cover" />
      <div className="mt-3 flex flex-col gap-2">
        {upgrade.details.map((detail) => (
          <span key={detail} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.04em] text-sd-muted">
            <Check className="size-4 text-sd-green" strokeWidth={2.4} />
            {detail}
          </span>
        ))}
      </div>
      <span className="absolute right-4 top-4 flex size-6 items-center justify-center rounded-full border-[2px] border-sd-navy">
        {upgrade.selected && <span className="size-3 rounded-full bg-sd-navy" />}
      </span>
    </button>
  )
}

export function PurchasePanel() {
  return (
    <aside className="flex flex-col gap-6">
      <PromoTimer />
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-4">
          <Rating />
          <h1 className="font-serif text-[34px] leading-[1.06] text-sd-charcoal max-sm:text-[30px]">
            {productName}
          </h1>
        </div>
        <Button variant="ghost" size="icon" aria-label="Share product">
          <Share2 />
        </Button>
      </div>
      <Tabs defaultValue="love" className="w-full">
        <TabsList className="h-auto justify-start gap-8 border-b border-sd-line bg-transparent p-0">
          <TabsTrigger
            value="love"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 pt-0 text-base font-bold data-[state=active]:border-sd-navy data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            What you'll love
          </TabsTrigger>
          <TabsTrigger
            value="benefits"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 pt-0 text-base font-bold data-[state=active]:border-sd-navy data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Benefits
          </TabsTrigger>
        </TabsList>
        <TabsContent value="love" className="mt-4 text-[16px] leading-7 text-sd-muted">
          A five-layer memory foam design with cooling fibers, pressure relief, and a balanced
          medium feel made for restorative rest.
        </TabsContent>
        <TabsContent value="benefits" className="mt-4 text-[16px] leading-7 text-sd-muted">
          Breathable comfort, motion isolation, contouring support, and an easy home trial.
        </TabsContent>
      </Tabs>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-sd-charcoal">Available upgrades</h2>
        <a className="text-base font-medium text-sd-muted underline underline-offset-2" href="#compare">
          Compare
        </a>
      </div>
      <div className="grid grid-cols-2 gap-5 pt-2 max-sm:grid-cols-1">
        {upgrades.map((upgrade) => (
          <UpgradeCard key={upgrade.name} upgrade={upgrade} />
        ))}
      </div>
      <div className="bg-sd-panel p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-bold text-sd-charcoal">Choose your material</h2>
          <a href="#layers" className="text-sm font-medium text-sd-muted underline underline-offset-2">
            What is memory foam?
          </a>
        </div>
        <div className="grid grid-cols-2 overflow-hidden rounded-[3px] border border-sd-line bg-white">
          <button className="flex h-14 flex-col items-center justify-center border-r border-sd-line text-base font-bold text-sd-charcoal">
            Hybrid
            <span className="text-xs font-medium text-sd-muted">Foam + Springs</span>
          </button>
          <button className="h-14 border-[2px] border-sd-navy bg-sd-cream text-lg font-bold text-sd-charcoal">
            Memory Foam
          </button>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-base font-bold text-sd-charcoal">Select Size</h2>
          <a href="#faq" className="text-sm font-medium text-sd-muted underline underline-offset-2">
            Size Guide
          </a>
        </div>
        <button className="mt-3 flex h-16 w-full items-center justify-between rounded-[3px] border border-sd-line bg-white px-4 text-left">
          <span className="text-xl font-bold text-sd-charcoal">Queen</span>
          <span className="flex items-center gap-2">
            <span className="text-sm font-bold text-sd-rose">(Total Value $1,615)</span>
            <span className="text-2xl font-bold text-sd-navy">$799</span>
            <ChevronDown className="size-4 text-sd-muted" />
          </span>
        </button>
      </div>
      <Button className="h-16 rounded-[4px] bg-sd-gold text-xl font-bold text-sd-navy hover:bg-sd-gold/90">
        Add To Cart
      </Button>
    </aside>
  )
}
