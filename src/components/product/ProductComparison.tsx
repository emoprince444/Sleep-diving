import { useState } from "react"
import { Eye } from "lucide-react"

import { Rating } from "@/components/brand/Rating"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { modelScoreLabels, models } from "@/data/product"

function ScoreBars({ value }: { value: number }) {
  return (
    <div className="grid flex-1 grid-cols-5 gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`h-[7px] rounded-full transition ${index < value ? "bg-sd-navy" : "bg-sd-line"}`}
        />
      ))}
    </div>
  )
}

function ModelCard({ model, index }: { model: (typeof models)[number]; index: number }) {
  return (
    <Card className="group overflow-hidden rounded-[6px] border border-sd-line bg-white shadow-[0_20px_54px_rgba(24,33,45,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(24,33,45,0.14)]">
      <div className="relative h-[400px] overflow-hidden bg-sd-soft max-xl:h-[330px] max-md:h-[280px]">
        <img src={model.image} alt="" className="size-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(24,33,45,0)_0%,rgba(24,33,45,0.42)_100%)]" />
        <Badge className="absolute left-5 top-5 rounded-[4px] bg-sd-navy px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] text-white">
          {model.badge}
        </Badge>
        {index === 0 && (
          <span className="absolute bottom-8 left-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-white">
            <Eye className="size-4" />
            Сейчас смотрят
          </span>
        )}
        <span className="absolute bottom-5 right-5 rounded-[6px] bg-white px-4 py-3 text-xl font-bold text-sd-navy shadow-[0_12px_26px_rgba(24,33,45,0.16)]">
          {model.height}
        </span>
      </div>
      <CardContent className="flex flex-col gap-4 p-7 max-sm:p-6">
        <Rating small />
        <h3 className="font-serif text-[32px] leading-tight text-sd-charcoal">{model.name}</h3>
        <p className="text-[17px] leading-7 text-sd-muted">{model.copy}</p>
        <div className="flex flex-col gap-2 pt-2">
          {modelScoreLabels.map((label, scoreIndex) => (
            <div key={label} className="grid grid-cols-[82px_1fr] items-center gap-2">
              <span className="text-base font-bold text-sd-charcoal">{label}</span>
              <ScoreBars value={model.scores[scoreIndex]} />
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-[6px] bg-sd-panel p-6">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full bg-[linear-gradient(135deg,#d7c1a1,#182333)]" />
            <div>
              <p className="font-bold text-sd-charcoal">{model.customer}</p>
              <p className="text-sm text-sd-muted">Проверенный покупатель</p>
            </div>
          </div>
          <p className="mt-4 text-[16px] leading-7 text-sd-muted">"{model.quote}"</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProductComparison() {
  const [comparisonType, setComparisonType] = useState<"spring" | "foam">("foam")

  return (
    <section id="compare" className="bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf7_100%)] px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto max-w-[1640px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-serif text-[52px] leading-tight text-sd-charcoal max-md:text-[34px]">
            Сравните модели Sleep Diving
          </h2>
          <p className="mt-5 text-lg leading-8 text-sd-muted">
            Оцените высоту, ощущение, поддержку и охлаждение в одном спокойном блоке.
          </p>
        </div>
        <div className="mx-auto mt-8 grid h-[60px] max-w-[520px] grid-cols-2 overflow-hidden rounded-[6px] border border-sd-line bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setComparisonType("spring")}
            className={`rounded-[4px] text-center text-lg font-bold transition hover:bg-sd-soft ${comparisonType === "spring" ? "bg-sd-navy text-white shadow-[0_10px_22px_rgba(24,33,45,0.18)]" : "text-sd-charcoal"}`}
          >
            Пружинные
            <span className={`block text-xs font-medium ${comparisonType === "spring" ? "text-white/70" : "text-sd-muted"}`}>Пена + блок</span>
          </button>
          <button
            type="button"
            onClick={() => setComparisonType("foam")}
            className={`rounded-[4px] text-lg font-bold transition hover:bg-sd-soft ${comparisonType === "foam" ? "bg-sd-navy text-white shadow-[0_10px_22px_rgba(24,33,45,0.18)]" : "text-sd-charcoal"}`}
          >
            Пенные
          </button>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-7 max-lg:grid-cols-1">
          {models.map((model, index) => (
            <ModelCard key={model.name} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
