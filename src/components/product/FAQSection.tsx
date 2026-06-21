import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { faqs } from "@/data/product"

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section id="faq" className="bg-sd-panel px-8 py-20 max-lg:px-5">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[0.35fr_0.65fr] gap-20 max-lg:grid-cols-1">
        <div>
          <h2 className="font-serif text-[44px] leading-tight text-sd-charcoal">Questions, answered</h2>
          <p className="mt-5 text-lg leading-8 text-sd-muted">
            The essentials before you choose a mattress, gathered in the same plain-spoken purchase flow.
          </p>
        </div>
        <div className="bg-white px-8">
          {faqs.map((item, index) => (
            <div key={item.question} className="border-b border-sd-line">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="flex w-full items-center justify-between py-6 text-left text-xl font-bold text-sd-charcoal"
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
