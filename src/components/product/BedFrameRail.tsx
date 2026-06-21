import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronDown } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { bedFrames, productImages } from "@/data/product"

export function BedFrameRail() {
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
                <img src={productImages.bedFrame} alt="" className="aspect-[1.52] w-full object-cover" />
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
