import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { layerItems, productImages } from "@/data/product"

export function LayersSection() {
  const [openLayer, setOpenLayer] = useState(0)

  return (
    <section id="layers-and-materials" className="bg-white px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto max-w-[1640px]">
        <h2 className="text-center font-serif text-[46px] leading-tight text-sd-charcoal max-md:text-[34px]">
          Что внутри матрасов Sleep Diving
        </h2>
        <div className="mt-12 grid grid-cols-[0.9fr_1.25fr] items-center gap-14 max-lg:mt-10 max-lg:grid-cols-1">
          <div className="flex w-full flex-col rounded-[6px] border border-sd-line bg-white px-6 shadow-[0_18px_44px_rgba(24,33,45,0.08)] max-sm:px-4">
            {layerItems.map((item, index) => (
              <div key={item.title} className="border-b border-sd-line">
                <button
                  type="button"
                  onClick={() => setOpenLayer(openLayer === index ? -1 : index)}
                  className="flex w-full items-center justify-between py-6 text-left transition hover:text-sd-navy"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex size-8 items-center justify-center rounded-full border text-sm font-semibold ${
                        openLayer === index
                          ? "border-sd-copper bg-sd-copper text-white"
                          : "border-sd-line bg-white text-sd-copper"
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
                      <p className="text-xs font-bold uppercase tracking-[0.06em] text-sd-charcoal">Что это</p>
                      <p className="mt-3 text-[16px] leading-7 text-sd-muted">{item.what}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.06em] text-sd-charcoal">Что даёт</p>
                      <p className="mt-3 text-[16px] leading-7 text-sd-muted">{item.does}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <img
            src={productImages.layersDiagram}
            alt="Слои матраса Sleep Diving в разрезе"
            className="w-full rounded-[6px] object-contain shadow-[0_24px_70px_rgba(24,33,45,0.10)]"
          />
        </div>
      </div>
    </section>
  )
}
