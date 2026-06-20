import { useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import {
  CalendarCheck,
  Check,
  ChevronDown,
  CircleUserRound,
  Eye,
  Infinity,
  Menu,
  MessageCircle,
  Play,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  Waves,
} from "lucide-react"

import heroMattress from "@/assets/hero-mattress.png"
import modelCard from "@/assets/model-card.png"
import lifestyleCouple from "@/assets/lifestyle-couple.png"
import layersDiagram from "@/assets/layers-diagram.png"
import bedFrame from "@/assets/bed-frame.png"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const galleryItems = [
  { label: "Room view", image: heroMattress },
  { label: "Close detail", image: modelCard },
  { label: "Layer view", image: layersDiagram },
  { label: "Lifestyle", image: lifestyleCouple },
  { label: "Frame pairing", image: bedFrame },
]

const upgrades = [
  {
    name: "Sleep Diving Classic",
    price: "Included",
    image: modelCard,
    details: ["12 in profile", "Airwoven comfort cover"],
    selected: true,
  },
  {
    name: "Sleep Diving Premier",
    price: "+$420",
    image: modelCard,
    details: ["13 in profile", "Extra cooling contour layer"],
    selected: false,
  },
]

const models = [
  {
    badge: "Best value",
    name: "The Sleep Diving Classic",
    reviews: "8,214 Reviews",
    height: "12 in",
    copy: "Balanced pressure relief with breathable memory foam and steady everyday support.",
    scores: [5, 4, 4, 4],
    quote: "Supportive without feeling stiff. The first week already felt calmer.",
    customer: "Maya R.",
  },
  {
    badge: "Most popular",
    name: "The Sleep Diving Premier",
    reviews: "5,706 Reviews",
    height: "13 in",
    copy: "A cooler, plusher build for sleepers who want a deeper cradled feel.",
    scores: [4, 5, 4, 5],
    quote: "The top feels soft, but the support underneath is exactly right.",
    customer: "Andre L.",
  },
  {
    badge: "Tri-zone support",
    name: "The Sleep Diving Luxe",
    reviews: "1,340 Reviews",
    height: "14 in",
    copy: "Targeted comfort zones with a taller profile and refined hotel-room finish.",
    scores: [4, 5, 5, 5],
    quote: "Premium feel, strong edge support, and noticeably better cooling.",
    customer: "Nina B.",
  },
]

const layerItems = [
  {
    title: "AeroKnit Cooling Top",
    what: "A quilted cover with cooling fibers and a smooth stitched finish.",
    does: "Helps move warmth away from the surface while keeping the first touch soft.",
  },
  {
    title: "Contour Memory Foam Layer",
    what: "Responsive memory foam designed to cushion shoulders and hips.",
    does: "Reduces pressure points without the slow, sinking feel of old foam.",
  },
  {
    title: "Adaptive Support Layer",
    what: "A transitional foam layer that steadies movement through the mattress.",
    does: "Keeps comfort balanced for back, side, and combination sleepers.",
  },
  {
    title: "Stabilizing Foundation Layer",
    what: "Dense support foam that gives the mattress its durable base.",
    does: "Improves edge stability and helps the mattress hold shape over time.",
  },
  {
    title: "Protective Bottom Cover",
    what: "A tailored navy base wrap with a structured woven finish.",
    does: "Protects the core and gives the mattress a clean premium profile.",
  },
]

const bedFrames = [
  { name: "Cloudbase Foundation", price: "$349", value: "$561" },
  { name: "Harbor Adjustable Frame", price: "$749", value: "$1,639" },
  { name: "Bamboo Platform Frame", price: "$399", value: "$1,609" },
  { name: "Stillwater Platform Bed", price: "$299", value: "$899" },
]

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-9 items-center justify-center text-sd-navy">
        <svg viewBox="0 0 42 30" className="size-9" aria-hidden="true">
          <path
            d="M7 24c5.7 0 5.7-7.4 11.4-7.4S24.1 24 29.8 24 35.5 16.6 41 16.6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3.2"
          />
          <path
            d="M2 14.2C5.5 7.5 12.2 5.8 18.3 9c2.5-5.9 10.7-6.7 14.4-1.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3.2"
          />
        </svg>
      </div>
      <span className="text-[18px] font-semibold tracking-[0.26em] text-sd-navy max-sm:text-[15px]">
        SLEEP DIVING
      </span>
    </div>
  )
}

function Rating({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-sd-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={small ? "size-4 fill-current" : "size-[18px] fill-current"} strokeWidth={1.7} />
        ))}
      </div>
      <span className={small ? "text-sm text-sd-muted" : "text-[15px] text-sd-muted"}>8,214 Reviews</span>
    </div>
  )
}

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
          {[
            ["0", "Days"],
            ["9", "Hrs"],
            ["53", "Min"],
            ["48", "Sec"],
          ].map(([num, label]) => (
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

function ProductGallery() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="grid grid-cols-[76px_1fr] gap-7 max-md:grid-cols-1">
      <div className="flex flex-col gap-3 max-md:order-2 max-md:flex-row max-md:overflow-x-auto">
        {galleryItems.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setSelected(index)}
            className={`h-[80px] w-[76px] shrink-0 overflow-hidden border bg-white transition ${
              selected === index ? "border-sd-navy" : "border-transparent opacity-65 hover:opacity-100"
            }`}
            aria-label={`Show ${item.label}`}
          >
            <img src={item.image} alt="" className="size-full object-cover" />
          </button>
        ))}
      </div>
      <div className="relative min-h-[520px] overflow-hidden bg-sd-soft max-lg:min-h-[440px] max-md:min-h-[330px]">
        <motion.img
          key={galleryItems[selected].image}
          src={galleryItems[selected].image}
          alt="Sleep Diving premium mattress in a bright bedroom"
          className="size-full object-cover"
          initial={{ opacity: 0.85, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        />
        <Button className="absolute bottom-7 left-7 h-14 gap-3 rounded-[4px] bg-white px-8 text-[18px] font-bold text-sd-navy shadow-md hover:bg-white">
          <Play data-icon="inline-start" className="fill-transparent" />
          Watch Video
        </Button>
      </div>
    </div>
  )
}

function TrustBadges() {
  const badges = [
    { icon: CalendarCheck, label: "120-Night Home Trial" },
    { icon: Infinity, label: "Lifetime Comfort Warranty" },
    { icon: Truck, label: "Free Shipping & Returns" },
  ]

  return (
    <div className="grid grid-cols-3 gap-6 py-8 max-sm:grid-cols-1">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-3 text-center text-sd-muted max-sm:flex-row max-sm:justify-center">
          <Icon className="size-9 text-sd-copper" strokeWidth={1.8} />
          <span className="text-sm font-bold">{label}</span>
        </div>
      ))}
    </div>
  )
}

function UpgradeCard({ upgrade }: { upgrade: (typeof upgrades)[number] }) {
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

function PurchasePanel() {
  return (
    <aside className="flex flex-col gap-6">
      <PromoTimer />
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-4">
          <Rating />
          <h1 className="font-serif text-[34px] leading-[1.06] text-sd-charcoal max-sm:text-[30px]">
            Sleep Diving Classic Memory Foam Mattress
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

function StickyBuyBar() {
  return (
    <div className="sticky top-0 z-30 border-b border-sd-line bg-white/96 shadow-[0_2px_9px_rgba(17,24,39,0.14)] backdrop-blur">
      <div className="mx-auto grid max-w-[1640px] grid-cols-[1fr_1fr] items-center gap-8 px-8 py-2 max-lg:grid-cols-1 max-lg:gap-3 max-lg:px-5">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <Rating small />
          <span className="font-serif text-[25px] leading-tight text-sd-charcoal max-sm:text-lg">
            Sleep Diving Classic Memory Foam Mattress
          </span>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-8 max-sm:grid-cols-1 max-sm:gap-2">
          <button className="flex h-16 items-center justify-between rounded-[3px] border border-sd-line bg-white px-4">
            <span className="text-lg font-bold text-sd-charcoal">Queen</span>
            <span className="flex items-center gap-3">
              <span className="text-sm font-bold text-sd-rose">(Total Value $1,615)</span>
              <span className="text-xl font-bold text-sd-navy">$799</span>
              <ChevronDown className="size-4 text-sd-muted" />
            </span>
          </button>
          <Button className="h-16 rounded-[4px] bg-sd-gold text-xl font-bold text-sd-navy hover:bg-sd-gold/90">
            Add To Cart
          </Button>
        </div>
      </div>
      <nav className="border-t border-sd-line bg-white">
        <div className="mx-auto flex max-w-[1640px] gap-9 overflow-x-auto px-8 max-lg:px-5">
          {["Overview", "Reviews", "FAQ", "Layers & Materials", "Product Specs", "Compare"].map((item, index) => (
            <a
              key={item}
              href={index === 0 ? "#overview" : `#${item.toLowerCase().split(" ").join("-").replace("&", "and")}`}
              className={`shrink-0 py-3 text-base font-bold text-sd-muted ${
                index === 0 ? "border-b-[3px] border-sd-navy text-sd-charcoal" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}

function ScoreBars({ value }: { value: number }) {
  return (
    <div className="grid flex-1 grid-cols-5 gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`h-[7px] rounded-full ${index < value ? "bg-sd-navy" : "bg-sd-line"}`}
        />
      ))}
    </div>
  )
}

function ModelCard({ model, index }: { model: (typeof models)[number]; index: number }) {
  return (
    <Card className="overflow-hidden rounded-none border-0 bg-white shadow-none">
      <div className="relative h-[400px] overflow-hidden max-xl:h-[330px] max-md:h-[280px]">
        <img src={modelCard} alt="" className="size-full object-cover" />
        <Badge className="absolute left-5 top-5 rounded-none bg-sd-navy px-4 py-2 text-sm font-bold uppercase text-white">
          {model.badge}
        </Badge>
        {index === 0 && (
          <span className="absolute bottom-8 left-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-white">
            <Eye className="size-4" />
            Now viewing
          </span>
        )}
        <span className="absolute bottom-5 right-5 rounded-[4px] bg-white px-4 py-3 text-xl font-bold text-sd-navy">
          {model.height}
        </span>
      </div>
      <CardContent className="flex flex-col gap-4 p-7">
        <Rating small />
        <h3 className="font-serif text-[32px] leading-tight text-sd-charcoal">{model.name}</h3>
        <p className="text-[17px] leading-7 text-sd-muted">{model.copy}</p>
        <div className="flex flex-col gap-2 pt-2">
          {["Firmness", "Comfort", "Support", "Cooling"].map((label, scoreIndex) => (
            <div key={label} className="grid grid-cols-[82px_1fr] items-center gap-2">
              <span className="text-base font-bold text-sd-charcoal">{label}</span>
              <ScoreBars value={model.scores[scoreIndex]} />
            </div>
          ))}
        </div>
        <div className="mt-4 bg-sd-panel p-6">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full bg-[linear-gradient(135deg,#d7c1a1,#182333)]" />
            <div>
              <p className="font-bold text-sd-charcoal">{model.customer}</p>
              <p className="text-sm text-sd-muted">Verified Customer</p>
            </div>
          </div>
          <p className="mt-4 text-[16px] leading-7 text-sd-muted">"{model.quote}"</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ComparisonSection() {
  return (
    <section id="compare" className="bg-white px-8 py-20 max-lg:px-5">
      <div className="mx-auto max-w-[1640px]">
        <h2 className="text-center font-serif text-[48px] leading-tight text-sd-charcoal max-md:text-[34px]">
          Choose the perfect Sleep Diving for you
        </h2>
        <div className="mx-auto mt-12 grid h-[56px] max-w-[520px] grid-cols-2 overflow-hidden rounded-[3px] border border-sd-line">
          <button className="bg-white text-center text-lg font-bold text-sd-charcoal">
            Hybrid
            <span className="block text-xs font-medium text-sd-muted">Foam + Springs</span>
          </button>
          <button className="border-[2px] border-sd-navy bg-sd-cream text-lg font-bold text-sd-charcoal">
            Memory Foam
          </button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-9 max-lg:grid-cols-1">
          {models.map((model, index) => (
            <ModelCard key={model.name} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LayersSection() {
  const [openLayer, setOpenLayer] = useState(0)

  return (
    <section id="layers-and-materials" className="bg-white px-8 py-20 max-lg:px-5">
      <div className="mx-auto max-w-[1640px]">
        <h2 className="text-center font-serif text-[46px] leading-tight text-sd-charcoal max-md:text-[34px]">
          Inside the Sleep Diving Classic
        </h2>
        <div className="mt-24 grid grid-cols-[0.9fr_1.25fr] items-center gap-20 max-lg:mt-12 max-lg:grid-cols-1">
          <div className="flex w-full flex-col">
            {layerItems.map((item, index) => (
              <div key={item.title} className="border-b border-sd-line">
                <button
                  type="button"
                  onClick={() => setOpenLayer(openLayer === index ? -1 : index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex size-8 items-center justify-center rounded-full border text-sm font-semibold ${
                        openLayer === index ? "border-sd-copper bg-sd-copper text-white" : "border-sd-line bg-white text-sd-copper"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-xl font-bold text-sd-charcoal">{item.title}</span>
                  </span>
                  <ChevronDown
                    className={`size-4 text-sd-muted transition ${openLayer === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openLayer === index && (
                  <div className="grid grid-cols-2 gap-10 pb-7 pl-12 max-sm:grid-cols-1">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.06em] text-sd-charcoal">What it is</p>
                      <p className="mt-3 text-[16px] leading-7 text-sd-muted">{item.what}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.06em] text-sd-charcoal">What it does</p>
                      <p className="mt-3 text-[16px] leading-7 text-sd-muted">{item.does}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <img src={layersDiagram} alt="Exploded view of Sleep Diving mattress layers" className="w-full object-contain" />
        </div>
      </div>
    </section>
  )
}

function EditorialSection() {
  return (
    <section className="bg-white px-8 py-20 max-lg:px-5">
      <div className="mx-auto grid max-w-[1640px] grid-cols-2 gap-x-28 gap-y-32 max-lg:grid-cols-1">
        <img src={lifestyleCouple} alt="" className="aspect-[1.56] w-full object-cover" />
        <div className="max-w-[560px] pt-16 max-lg:pt-0">
          <h2 className="font-serif text-[43px] leading-tight text-sd-charcoal max-md:text-[34px]">
            Safer materials for deeper sleep
          </h2>
          <p className="mt-6 text-xl leading-8 text-sd-muted">
            Sleep Diving is built with certified foams, breathable textiles, and durable support
            materials chosen for comfort, cleaner rest, and everyday peace of mind.
          </p>
        </div>
        <div className="max-w-[560px] self-end pb-4">
          <h2 className="font-serif text-[43px] leading-tight text-sd-charcoal max-md:text-[34px]">
            As risk-free as it gets
          </h2>
          <p className="mt-6 text-xl leading-8 text-sd-muted">
            Try your mattress at home with a 120-night comfort trial, simple returns, and a
            lifetime warranty designed to keep the decision easy.
          </p>
        </div>
        <img src={heroMattress} alt="" className="aspect-[1.56] w-full object-cover object-bottom" />
      </div>
    </section>
  )
}

function BedFrameRail() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true })
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="overflow-hidden bg-white px-8 py-20 max-lg:px-5">
      <div className="mx-auto max-w-[1640px]">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-[42px] leading-tight text-sd-charcoal">Shop Bed Frames</h2>
          <a className="text-xl font-bold text-sd-muted underline underline-offset-2" href="#overview">
            View All
          </a>
        </div>
        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-9">
            {bedFrames.map((frame, index) => (
              <article key={frame.name} className="min-w-[31%] max-lg:min-w-[48%] max-sm:min-w-[82%]">
                <img src={bedFrame} alt="" className="aspect-[1.52] w-full object-cover" />
                <h3 className="mt-4 font-serif text-2xl leading-tight text-sd-charcoal">{frame.name}</h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-xl font-bold text-sd-charcoal">{frame.price}</span>
                  <Badge className="rounded-none bg-sd-cream px-3 py-1 text-xs font-bold text-sd-muted">
                    Total Value {frame.value}
                  </Badge>
                </div>
                {index === 2 && (
                  <div className="mt-5 flex gap-3">
                    <span className="size-9 rounded-full border-[3px] border-sd-slate bg-sd-cream" />
                    <span className="size-9 rounded-full bg-[#7c6656]" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
        <div className="mt-14 flex items-center gap-6">
          <div className="h-[5px] flex-1 rounded-full bg-sd-line">
            <div className="h-full w-[14%] rounded-full bg-sd-charcoal" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous frames">
              <ChevronDown className="rotate-90" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Next frames">
              <ChevronDown className="-rotate-90" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0)
  const faqs = [
    ["How does the home trial work?", "Sleep on it at home for up to 120 nights. If it is not the right fit, our team helps with a return."],
    ["When will my mattress ship?", "Most sizes leave the warehouse within a few business days, with tracking sent as soon as it moves."],
    ["Is Memory Foam right for hot sleepers?", "This model uses an airflow cover and cooling comfort layer to reduce heat buildup through the night."],
    ["Can I compare models before buying?", "Yes. The comparison cards above show profile height, comfort feel, support, cooling, reviews, and upgrade paths."],
  ]

  return (
    <section id="faq" className="bg-sd-panel px-8 py-20 max-lg:px-5">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[0.35fr_0.65fr] gap-20 max-lg:grid-cols-1">
        <div>
          <h2 className="font-serif text-[44px] leading-tight text-sd-charcoal">Questions, answered</h2>
          <p className="mt-5 text-lg leading-8 text-sd-muted">
            The essentials before you choose a mattress, gathered in the same plain-spoken purchase flow.
          </p>
        </div>
        <div className="bg-white px-8">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="border-b border-sd-line">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="flex w-full items-center justify-between py-6 text-left text-xl font-bold text-sd-charcoal"
              >
                {question}
                <ChevronDown className={`size-5 text-sd-copper transition ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              {openFaq === index && <p className="pb-7 text-[16px] leading-7 text-sd-muted">{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="border-b border-sd-line bg-white">
      <div className="mx-auto flex h-[60px] max-w-[1640px] items-center justify-between px-8 max-lg:px-5">
        <BrandMark />
        <nav className="flex items-center gap-8 text-[18px] font-bold text-sd-navy max-lg:hidden">
          <a href="#overview">Mattresses</a>
          <a href="#compare">Bundles</a>
          <Badge className="rounded-none bg-sd-soft px-4 py-2 text-xs font-bold text-sd-navy">Save up to 55%</Badge>
          <a href="#bed-frames">Bed Frames</a>
          <a href="#layers-and-materials">Bedding</a>
          <Button className="h-11 rounded-[4px] bg-sd-cream px-6 text-sm font-bold text-sd-navy hover:bg-sd-cream/80">
            Take Mattress Quiz
          </Button>
        </nav>
        <div className="flex items-center gap-4 text-sd-muted">
          <CircleUserRound className="size-6 max-sm:hidden" strokeWidth={1.8} />
          <span className="h-6 w-px bg-sd-line max-sm:hidden" />
          <ShoppingCart className="size-6" strokeWidth={1.8} />
          <Menu className="size-7 lg:hidden" strokeWidth={1.8} />
        </div>
      </div>
    </header>
  )
}

function App() {
  return (
    <main id="overview" className="min-h-screen bg-white text-sd-charcoal">
      <Header />
      <section className="mx-auto max-w-[1640px] px-8 pb-8 pt-6 max-lg:px-5">
        <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-sd-muted">
          <a className="underline" href="#overview">Home</a>
          <ChevronDown className="-rotate-90" />
          <span>Mattresses</span>
          <ChevronDown className="-rotate-90" />
          <span>Sleep Diving Classic Memory Foam Mattress</span>
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
      <ComparisonSection />
      <LayersSection />
      <EditorialSection />
      <section id="bed-frames">
        <BedFrameRail />
      </section>
      <FaqSection />
      <Button className="fixed bottom-6 right-8 z-50 h-14 gap-3 rounded-[8px] bg-sd-chat px-5 text-base font-bold text-white shadow-xl hover:bg-sd-chat/95 max-sm:right-4">
        <span className="size-3 rounded-full bg-[#52d841]" />
        Live chat
        <MessageCircle data-icon="inline-end" />
      </Button>
      <footer className="border-t border-sd-line bg-white px-8 py-10 text-center text-sm font-semibold text-sd-muted">
        Sleep Diving premium sleep systems. Original visual design and assets for this project.
      </footer>
    </main>
  )
}

export default App
