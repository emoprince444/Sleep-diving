import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronDown } from "lucide-react"

import { useCart } from "@/components/cart/CartContext"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { bedFrames } from "@/data/product"

export function BedFrameRail() {
  const { openConsultation } = useCart()
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true })
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="overflow-hidden bg-white px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto max-w-[1640px]">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-[42px] leading-tight text-sd-charcoal">Основания и кровати</h2>
          <button type="button" onClick={openConsultation} className="text-xl font-bold text-sd-muted underline underline-offset-4 transition hover:text-sd-navy max-sm:text-base">
            Получить консультацию
          </button>
        </div>
        <div className="mt-9 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-9">
            {bedFrames.map((frame, index) => (
              <article key={frame.name} className="group min-w-[31%] max-lg:min-w-[48%] max-sm:min-w-[82%]">
                <div className="overflow-hidden rounded-[6px] bg-sd-soft shadow-[0_18px_44px_rgba(24,33,45,0.10)]">
                  <img src={frame.image} alt="" className="aspect-[1.52] w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-sd-charcoal">{frame.name}</h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-xl font-bold text-sd-charcoal">{frame.price}</span>
                  <Badge className="rounded-[4px] bg-sd-cream px-3 py-1 text-xs font-bold text-sd-muted">
                    Старая цена {frame.value}
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
        <div className="mt-9 flex items-center gap-6">
          <div className="h-[5px] flex-1 rounded-full bg-sd-line">
            <div className="h-full w-[14%] rounded-full bg-sd-charcoal" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Предыдущие основания" className="rounded-[6px] transition hover:-translate-y-0.5">
              <ChevronDown className="rotate-90" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Следующие основания" className="rounded-[6px] transition hover:-translate-y-0.5">
              <ChevronDown className="-rotate-90" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
