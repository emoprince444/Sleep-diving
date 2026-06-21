import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { faqs } from "@/data/product"

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section id="faq" className="bg-sd-panel px-8 py-16 max-lg:px-5 max-sm:py-12">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[0.35fr_0.65fr] gap-14 max-lg:grid-cols-1">
        <div>
          <h2 className="font-serif text-[44px] leading-tight text-sd-charcoal">Вопросы и ответы</h2>
          <p className="mt-5 text-lg leading-8 text-sd-muted">
            Главное перед выбором матраса: доставка, тестовый период, материалы и сравнение моделей.
          </p>
        </div>
        <div className="rounded-[6px] border border-sd-line bg-white px-8 shadow-[0_18px_44px_rgba(24,33,45,0.08)] max-sm:px-5">
          {faqs.map((item, index) => (
            <div key={item.question} className="border-b border-sd-line">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left text-xl font-bold text-sd-charcoal transition hover:text-sd-navy max-sm:text-lg"
              >
                {item.question}
                <ChevronDown className={`size-5 text-sd-copper transition ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              {openFaq === index && <p className="pb-7 text-[16px] leading-7 text-sd-muted">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
