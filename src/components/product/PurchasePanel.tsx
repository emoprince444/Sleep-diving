import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { BadgeCheck, Check, ChevronDown, Clock3, CreditCard, PackageCheck, Share2, Sparkles } from "lucide-react"

import { Rating } from "@/components/brand/Rating"
import { useCart } from "@/components/cart/CartContext"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { productName, promoTimerParts, purchaseHighlights, upgrades } from "@/data/product"
import { premiumEase, premiumTransition } from "@/lib/motion"

type Upgrade = (typeof upgrades)[number]

function PromoTimer() {
  return (
    <div className="overflow-hidden rounded-[6px] bg-sd-navy text-white shadow-[0_18px_42px_rgba(24,33,45,0.18)]">
      <div className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3 max-sm:grid-cols-1 max-sm:py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-gold">Сезон комфортного сна</p>
          <p className="mt-1 max-w-[290px] text-[18px] font-semibold leading-snug max-sm:text-[20px]">
            Выгодные условия на матрасы и комплекты Sleep Diving
          </p>
        </div>
        <div className="grid grid-cols-4 gap-1 rounded-[4px] bg-white px-4 py-2 text-center text-sd-navy shadow-inner max-sm:w-full">
          {promoTimerParts.map(({ num, label }) => (
            <div key={label} className="min-w-10">
              <div className="text-xl font-bold leading-none">{num}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase text-sd-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-2 text-right text-sm font-semibold text-white/80 max-sm:text-left">
        Закажите сегодня, чтобы получить ближайшую дату доставки
      </p>
    </div>
  )
}

const panelSizes = [
  { size: "140x200", price: 15900, oldPrice: 19900 },
  { size: "160x200", price: 17500, oldPrice: 23400 },
  { size: "180x200", price: 18900, oldPrice: 25900 },
]

function UpgradeCard({ upgrade, onSelect, selected }: { upgrade: Upgrade; onSelect: () => void; selected: boolean }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex min-h-[178px] flex-col items-start rounded-[6px] border bg-white p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(24,33,45,0.12)] max-sm:min-h-[210px] ${
        selected ? "border-sd-navy ring-2 ring-sd-gold/55" : "border-sd-line hover:border-sd-copper/60"
      }`}
    >
      {!selected && (
        <Badge className="absolute -top-4 left-4 rounded-[4px] bg-sd-slate px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.05em] text-white">
          Хит выбора
        </Badge>
      )}
      <span className="text-base font-bold text-sd-navy">{upgrade.name}</span>
      <span className="text-sm font-semibold text-sd-muted">{upgrade.price}</span>
      <img src={upgrade.image} alt="" className="mx-auto mt-2 h-14 w-32 rounded-[4px] object-cover max-sm:mt-3 max-sm:h-16" />
      <div className="mt-2 flex flex-col gap-1.5 max-sm:mt-3 max-sm:gap-2">
        {upgrade.details.map((detail) => (
          <span key={detail} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.04em] text-sd-muted">
            <Check className="size-4 text-sd-green" strokeWidth={2.4} />
            {detail}
          </span>
        ))}
      </div>
      <span className="absolute right-4 top-4 flex size-6 items-center justify-center rounded-full border-[2px] border-sd-navy bg-white">
        {selected && <span className="size-3 rounded-full bg-sd-navy" />}
      </span>
    </button>
  )
}

export function PurchasePanel() {
  const { addItem } = useCart()
  const reducedMotion = useReducedMotion()
  const highlightIcons = [CreditCard, PackageCheck, Clock3]
  const [selectedUpgrade, setSelectedUpgrade] = useState(upgrades[0].name)
  const [selectedBase, setSelectedBase] = useState<"spring" | "foam">("foam")
  const [selectedSize, setSelectedSize] = useState(panelSizes[1].size)
  const [shareLabel, setShareLabel] = useState("Поделиться")
  const selectedPrice = panelSizes.find((item) => item.size === selectedSize) ?? panelSizes[1]

  function addPanelProduct() {
    addItem({
      id: `classic-${selectedSize}`,
      name: productName,
      image: upgrades[0].image,
      size: selectedSize,
      price: selectedPrice.price,
    })
  }

  async function shareProduct() {
    try {
      const shareData = { title: productName, url: window.location.href }
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
      }
      setShareLabel("Ссылка скопирована")
    } catch {
      setShareLabel("Поделиться")
    }
    window.setTimeout(() => setShareLabel("Поделиться"), 1800)
  }

  return (
    <motion.aside
      layout
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={premiumTransition}
      className="sticky top-28 flex flex-col gap-4 rounded-[6px] border border-sd-line bg-white p-5 shadow-[0_24px_70px_rgba(24,33,45,0.12)] max-xl:static max-sm:-mx-1 max-sm:gap-5 max-sm:p-4"
    >
      <PromoTimer />
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge className="rounded-[4px] bg-sd-navy px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
              <Sparkles className="mr-1 size-3" />
              Бестселлер
            </Badge>
            <Badge className="rounded-[4px] bg-sd-gold px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-sd-navy">
              Популярный выбор
            </Badge>
          </div>
          <Rating />
          <h1 className="font-serif text-[32px] leading-[1.06] text-sd-charcoal max-sm:text-[30px]">
            {productName}
          </h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Поделиться товаром"
          title={shareLabel}
          onClick={shareProduct}
          className="rounded-full transition hover:bg-sd-cream hover:text-sd-navy"
        >
          <Share2 />
        </Button>
      </div>
      <Tabs defaultValue="love" className="w-full">
        <TabsList className="h-auto justify-start gap-8 border-b border-sd-line bg-transparent p-0">
          <TabsTrigger
            value="love"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 pt-0 text-base font-bold transition hover:text-sd-navy data-[state=active]:border-sd-navy data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Что понравится
          </TabsTrigger>
          <TabsTrigger
            value="benefits"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 pt-0 text-base font-bold transition hover:text-sd-navy data-[state=active]:border-sd-navy data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Преимущества
          </TabsTrigger>
        </TabsList>
        <TabsContent value="love" className="mt-3 text-[15px] leading-7 text-sd-muted max-sm:mt-4 max-sm:text-[16px]">
          Многослойная конструкция с дышащим чехлом, снижением давления и сбалансированной поддержкой для глубокого восстановления.
        </TabsContent>
        <TabsContent value="benefits" className="mt-3 text-[15px] leading-7 text-sd-muted max-sm:mt-4 max-sm:text-[16px]">
          Деликатная адаптация к телу, устойчивость к движениям партнёра, понятный подбор размера и тестовый период дома.
        </TabsContent>
      </Tabs>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-sd-charcoal">Доступные версии</h2>
        <a className="text-base font-medium text-sd-muted underline underline-offset-4 transition hover:text-sd-navy" href="#compare">
          Сравнить
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-1 max-sm:grid-cols-1 max-sm:gap-5 max-sm:pt-2">
        {upgrades.map((upgrade) => (
          <UpgradeCard key={upgrade.name} upgrade={upgrade} selected={selectedUpgrade === upgrade.name} onSelect={() => setSelectedUpgrade(upgrade.name)} />
        ))}
      </div>
      <div className="rounded-[6px] border border-sd-line bg-sd-panel p-4 shadow-inner max-sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-bold text-sd-charcoal">Выберите основу</h2>
          <a href="#layers-and-materials" className="text-sm font-medium text-sd-muted underline underline-offset-4 transition hover:text-sd-navy">
            Что внутри?
          </a>
        </div>
        <div className="grid grid-cols-2 overflow-hidden rounded-[6px] border border-sd-line bg-white">
          <button
            type="button"
            onClick={() => setSelectedBase("spring")}
            className={`flex h-14 flex-col items-center justify-center border-r border-sd-line text-base font-bold transition hover:bg-sd-soft ${selectedBase === "spring" ? "bg-sd-cream text-sd-charcoal" : "text-sd-charcoal"}`}
          >
            Пружинный
            <span className="text-xs font-medium text-sd-muted">Пена + пружины</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedBase("foam")}
            className={`h-14 text-lg font-bold text-sd-charcoal transition hover:bg-sd-cream/80 ${selectedBase === "foam" ? "border-[2px] border-sd-navy bg-sd-cream shadow-inner" : "bg-white"}`}
          >
            Пенный
          </button>
        </div>
        <div className="mt-5 flex items-center justify-between max-sm:mt-6">
          <h2 className="text-base font-bold text-sd-charcoal">Выберите размер</h2>
          <a href="#faq" className="text-sm font-medium text-sd-muted underline underline-offset-4 transition hover:text-sd-navy">
            Гид по размерам
          </a>
        </div>
        <motion.label
          key={selectedSize}
          animate={reducedMotion ? undefined : { boxShadow: ["0 0 0 rgba(194,132,34,0)", "0 0 0 4px rgba(194,132,34,0.13)", "0 0 0 rgba(194,132,34,0)"] }}
          transition={{ duration: 0.7, ease: premiumEase }}
          className="mt-3 grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[6px] border border-sd-line bg-white px-4 text-left shadow-sm transition hover:border-sd-copper/60 hover:shadow-md max-sm:flex max-sm:h-auto max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:py-4"
        >
          <select
            value={selectedSize}
            onChange={(event) => setSelectedSize(event.target.value)}
            className="min-w-[130px] appearance-none bg-transparent text-xl font-bold text-sd-charcoal outline-none"
            aria-label="Выберите размер матраса"
          >
            {panelSizes.map((item) => (
              <option key={item.size}>{item.size}</option>
            ))}
          </select>
          <span className="justify-self-end text-right max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-between max-sm:gap-2 max-sm:text-left">
            <span className="block text-2xl font-bold leading-none text-sd-navy max-sm:order-2">от {new Intl.NumberFormat("ru-RU").format(selectedPrice.price)} ₽</span>
            <span className="mt-1 block text-xs font-bold uppercase tracking-[0.06em] text-sd-rose max-sm:order-1 max-sm:mt-0">Экономия {new Intl.NumberFormat("ru-RU").format(selectedPrice.oldPrice - selectedPrice.price)} ₽</span>
            <ChevronDown className="size-4 text-sd-muted max-sm:order-3" />
          </span>
        </motion.label>
      </div>
      <div className="grid gap-3">
        {purchaseHighlights.map((item, index) => {
          const Icon = highlightIcons[index] ?? BadgeCheck

          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-[6px] border border-sd-line bg-white px-4 py-2.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sd-copper/60 hover:shadow-md max-sm:py-3"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sd-cream text-sd-copper">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.07em] text-sd-muted">{item.label}</p>
                <p className={`mt-0.5 text-sm font-bold ${item.label === "Наличие" ? "text-sd-rose" : "text-sd-charcoal"}`}>
                  {item.value}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <motion.div whileHover={reducedMotion ? undefined : { y: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.99 }}>
        <Button onClick={addPanelProduct} className="h-14 w-full rounded-[6px] bg-sd-gold text-xl font-bold text-sd-navy shadow-[0_14px_34px_rgba(194,132,34,0.24)] transition duration-300 hover:bg-sd-gold/90 hover:shadow-[0_18px_44px_rgba(194,132,34,0.30)] max-sm:h-16">
        Добавить в корзину
        </Button>
      </motion.div>
      <div className="grid grid-cols-3 gap-2 text-center max-sm:grid-cols-1">
        {["Рейтинг 4.8/5", "120 ночей на тест", "Доставка по России"].map((item) => (
          <span key={item} className="rounded-[4px] bg-sd-soft px-2 py-2 text-xs font-bold text-sd-muted">
            {item}
          </span>
        ))}
      </div>
    </motion.aside>
  )
}
