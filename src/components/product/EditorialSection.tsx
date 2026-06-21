import { editorialBlocks } from "@/data/product"

export function EditorialSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf7_100%)] px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto grid max-w-[1640px] grid-cols-2 gap-x-24 gap-y-18 max-lg:grid-cols-1">
        <img
          src={editorialBlocks.lifestyle.image}
          alt=""
          className="aspect-[1.56] w-full rounded-[6px] object-cover shadow-[0_24px_70px_rgba(24,33,45,0.12)]"
        />
        <div className="max-w-[560px] pt-10 max-lg:pt-0">
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
        <img
          src={editorialBlocks.trial.image}
          alt=""
          className="aspect-[1.56] w-full rounded-[6px] object-cover object-bottom shadow-[0_24px_70px_rgba(24,33,45,0.12)]"
        />
      </div>
    </section>
  )
}
