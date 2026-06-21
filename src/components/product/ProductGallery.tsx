import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { galleryItems } from "@/data/product"

export function ProductGallery() {
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
