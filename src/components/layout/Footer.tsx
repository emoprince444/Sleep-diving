import { MessageCircle } from "lucide-react"

import { BrandMark } from "@/components/brand/BrandMark"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <>
      <Button className="fixed bottom-6 right-8 z-50 h-14 gap-3 rounded-[6px] bg-sd-chat px-5 text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-sd-chat/95 max-md:bottom-24 max-sm:right-4">
        <span className="size-3 rounded-full bg-[#52d841]" />
        Чат
        <MessageCircle data-icon="inline-end" />
      </Button>
      <footer className="border-t border-sd-line bg-sd-navy px-8 pb-10 pt-16 text-white max-lg:px-5 max-md:pb-28 max-sm:px-4">
        <div className="mx-auto max-w-[1640px]">
          <div className="grid grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr] gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div>
              <div className="[&_*]:text-white">
                <BrandMark />
              </div>
              <p className="mt-6 max-w-sm text-[16px] leading-7 text-white/70">
                Премиальные системы сна с дышащими материалами, продуманной поддержкой и спокойным сервисом.
              </p>
              <div className="mt-7 flex gap-3">
                {["120 ночей на тест", "Доставка по России", "Гарантия комфорта"].map((item) => (
                  <span key={item} className="rounded-[4px] border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.06em] text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-sd-gold">Каталог</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm font-semibold text-white/72">
                <a className="transition hover:text-white" href="#catalog">Матрасы</a>
                <a className="transition hover:text-white" href="#compare">Сравнение моделей</a>
                <a className="transition hover:text-white" href="#bed-frames">Основания</a>
                <a className="transition hover:text-white" href="#product-specs">Характеристики</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-sd-gold">Поддержка</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm font-semibold text-white/72">
                <a className="transition hover:text-white" href="#faq">Вопросы и ответы</a>
                <a className="transition hover:text-white" href="#reviews">Отзывы</a>
                <a className="transition hover:text-white" href="#layers-and-materials">Материалы</a>
                <a className="transition hover:text-white" href="#catalog">Гид по размерам</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-sd-gold">Будьте на связи</h3>
              <p className="mt-5 text-sm leading-6 text-white/70">
                Получайте предложения, советы по уходу и рекомендации по выбору матраса.
              </p>
              <div className="mt-5 flex overflow-hidden rounded-[6px] border border-white/15 bg-white/8">
                <input
                  aria-label="Электронная почта"
                  placeholder="Ваш e-mail"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none"
                />
                <Button className="h-auto rounded-none bg-sd-gold px-5 text-sm font-bold text-sd-navy hover:bg-sd-gold/90">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-7 text-xs font-semibold text-white/50 max-sm:flex-col max-sm:items-start max-sm:gap-3">
            <span>Sleep Diving — премиальные матрасы и системы сна.</span>
            <span>Конфиденциальность / Условия / Доступность</span>
          </div>
        </div>
      </footer>
    </>
  )
}
