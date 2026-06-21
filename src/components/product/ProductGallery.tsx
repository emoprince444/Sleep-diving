import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { galleryItems } from "@/data/product"

export function ProductGallery() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="grid grid-cols-[82px_1fr] gap-5 max-md:grid-cols-1">
      <div className="flex flex-col gap-3 max-md:order-2 max-md:flex-row max-md:overflow-x-auto max-md:pb-1">
        {galleryItems.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setSelected(index)}
            className={`h-[82px] w-[82px] shrink-0 overflow-hidden rounded-[6px] border bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
              selected === index ? "border-sd-navy opacity-100 ring-2 ring-sd-gold/55" : "border-white opacity-70 hover:opacity-100"
            }`}
            aria-label={`Показать ${item.label}`}
          >
            <img src={item.image} alt="" className="size-full object-cover transition duration-500 hover:scale-105" />
          </button>
        ))}
      </div>
      <div className="relative min-h-[620px] overflow-hidden rounded-[6px] border border-white bg-sd-soft shadow-[0_28px_80px_rgba(24,33,45,0.14)] max-lg:min-h-[500px] max-md:min-h-[360px] max-sm:min-h-[315px]">
        <motion.img
          key={galleryItems[selected].image}
          src={galleryItems[selected].image}
          alt="Премиальный матрас Sleep Diving в светлой спальне"
          className="size-full object-cover"
          initial={{ opacity: 0.82, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(24,33,45,0.34)_100%)]" />
        <Button className="absolute bottom-7 left-7 h-14 gap-3 rounded-[6px] bg-white px-8 text-[17px] font-bold text-sd-navy shadow-[0_14px_34px_rgba(24,33,45,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_42px_rgba(24,33,45,0.28)] max-sm:bottom-5 max-sm:left-5 max-sm:h-12 max-sm:px-5 max-sm:text-sm">
          <Play data-icon="inline-start" className="fill-transparent" />
          Смотреть обзор
        </Button>
      </div>
    </div>
  )
}
