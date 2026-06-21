import { PackageCheck, Ruler, ShieldCheck } from "lucide-react"

import { productSpecs } from "@/data/product"

const specIcons = [Ruler, ShieldCheck, PackageCheck]

function SpecGroup({ group, index }: { group: (typeof productSpecs)[number]; index: number }) {
  const Icon = specIcons[index] ?? PackageCheck

  return (
    <div className="rounded-[6px] border border-sd-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(24,33,45,0.10)]">
      <div className="flex items-center gap-3 border-b border-sd-line px-6 py-5">
        <span className="flex size-10 items-center justify-center rounded-full bg-sd-navy text-white">
          <Icon className="size-5" />
        </span>
        <h3 className="text-xl font-bold text-sd-charcoal">{group.group}</h3>
      </div>
      <dl className="divide-y divide-sd-line">
        {group.items.map((item) => (
          <div key={item.label} className="grid grid-cols-[0.42fr_0.58fr] gap-5 px-6 py-5 max-sm:grid-cols-1 max-sm:gap-1">
            <dt className="text-sm font-bold uppercase tracking-[0.05em] text-sd-muted">{item.label}</dt>
            <dd className="text-[17px] font-semibold leading-7 text-sd-charcoal">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function ProductSpecsSection() {
  return (
    <section id="product-specs" className="bg-white px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto max-w-[1640px]">
        <div className="grid grid-cols-[0.34fr_0.66fr] gap-14 max-lg:grid-cols-1">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.06em] text-sd-copper">Характеристики</p>
            <h2 className="mt-4 font-serif text-[46px] leading-tight text-sd-charcoal max-md:text-[34px]">
              Конструкция, ощущение и уход
            </h2>
            <p className="mt-5 text-lg leading-8 text-sd-muted">
              Коротко о материалах, высоте, поддержке и условиях владения матрасами Sleep Diving.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-1">
            {productSpecs.map((group, index) => (
              <SpecGroup key={group.group} group={group} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
