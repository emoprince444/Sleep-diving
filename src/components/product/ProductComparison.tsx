import { Eye } from "lucide-react"

import { Rating } from "@/components/brand/Rating"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { modelScoreLabels, models, productImages } from "@/data/product"

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
        <img src={productImages.modelCard} alt="" className="size-full object-cover" />
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
          {modelScoreLabels.map((label, scoreIndex) => (
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

export function ProductComparison() {
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
