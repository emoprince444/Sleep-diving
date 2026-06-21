import { editorialBlocks } from "@/data/product"

export function EditorialSection() {
  return (
    <section className="bg-white px-8 py-20 max-lg:px-5">
      <div className="mx-auto grid max-w-[1640px] grid-cols-2 gap-x-28 gap-y-32 max-lg:grid-cols-1">
        <img src={editorialBlocks.lifestyle.image} alt="" className="aspect-[1.56] w-full object-cover" />
        <div className="max-w-[560px] pt-16 max-lg:pt-0">
          <h2 className="font-serif text-[43px] leading-tight text-sd-charcoal max-md:text-[34px]">
            {editorialBlocks.lifestyle.title}
          </h2>
          <p className="mt-6 text-xl leading-8 text-sd-muted">{editorialBlocks.lifestyle.copy}</p>
        </div>
        <div className="max-w-[560px] self-end pb-4">
          <h2 className="font-serif text-[43px] leading-tight text-sd-charcoal max-md:text-[34px]">
            {editorialBlocks.trial.title}
          </h2>
          <p className="mt-6 text-xl leading-8 text-sd-muted">{editorialBlocks.trial.copy}</p>
        </div>
        <img src={editorialBlocks.trial.image} alt="" className="aspect-[1.56] w-full object-cover object-bottom" />
      </div>
    </section>
  )
}
