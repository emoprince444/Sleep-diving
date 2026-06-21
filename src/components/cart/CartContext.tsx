import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

export type CartProduct = {
  id: string
  name: string
  image: string
  size: string
  price: number
}

type CartItem = CartProduct & {
  key: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  totalQuantity: number
  totalPrice: number
  isCartOpen: boolean
  isConsultationOpen: boolean
  addItem: (product: CartProduct) => void
  removeItem: (key: string) => void
  openCart: () => void
  closeCart: () => void
  openConsultation: () => void
  closeConsultation: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const storageKey = "sleep-diving-cart"

function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value)
}

function readStoredCart() {
  if (typeof window === "undefined") return []

  try {
    const raw = window.localStorage.getItem(storageKey)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product: CartProduct) => {
    const key = `${product.id}-${product.size}`

    setItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) => (item.key === key ? { ...item, quantity: item.quantity + 1 } : item))
      }

      return [...current, { ...product, key, quantity: 1 }]
    })
    setIsCartOpen(true)
  }, [])

  const removeItem = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }, [])

  const value = useMemo<CartContextValue>(() => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return {
      items,
      totalQuantity,
      totalPrice,
      isCartOpen,
      isConsultationOpen,
      addItem,
      removeItem,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      openConsultation: () => setIsConsultationOpen(true),
      closeConsultation: () => setIsConsultationOpen(false),
    }
  }, [addItem, isCartOpen, isConsultationOpen, items, removeItem])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const value = useContext(CartContext)

  if (!value) {
    throw new Error("useCart must be used inside CartProvider")
  }

  return value
}

export function CartDrawer() {
  const { closeCart, isCartOpen, items, openConsultation, removeItem, totalPrice } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[70] bg-sd-charcoal/35 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Корзина">
      <button type="button" className="absolute inset-0 cursor-default" onClick={closeCart} aria-label="Закрыть корзину" />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-white shadow-[0_24px_80px_rgba(24,33,45,0.24)]">
        <div className="flex items-center justify-between border-b border-sd-line px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">Корзина</p>
            <h2 className="mt-1 font-serif text-[32px] leading-tight text-sd-charcoal">Ваш заказ</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={closeCart} aria-label="Закрыть корзину" className="rounded-full">
            <X />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="rounded-[6px] border border-sd-line bg-sd-panel p-5 text-sm font-semibold text-sd-muted">
              Корзина пуста. Выберите матрас в каталоге или на главной странице.
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <article key={item.key} className="grid grid-cols-[84px_1fr] gap-4 rounded-[6px] border border-sd-line p-3">
                  <img src={item.image} alt="" className="h-20 w-full rounded-[4px] object-cover" />
                  <div>
                    <h3 className="font-bold leading-snug text-sd-charcoal">{item.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-sd-muted">{item.size} / {item.quantity} шт.</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="font-bold text-sd-navy">{formatRub(item.price * item.quantity)}</span>
                      <button type="button" onClick={() => removeItem(item.key)} className="text-sm font-bold text-sd-rose underline underline-offset-4">
                        Удалить
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-sd-line p-6">
          <div className="flex items-center justify-between text-lg font-bold text-sd-charcoal">
            <span>Итого</span>
            <span>{formatRub(totalPrice)}</span>
          </div>
          <Button
            onClick={() => {
              closeCart()
              openConsultation()
            }}
            className="mt-5 h-14 w-full rounded-[6px] bg-sd-gold text-lg font-bold text-sd-navy hover:bg-sd-gold/90"
          >
            Оформить заказ
          </Button>
          <p className="mt-3 text-center text-xs font-semibold text-sd-muted">Оформление пока работает как заявка без онлайн-оплаты.</p>
        </div>
      </aside>
    </div>
  )
}

export function ConsultationModal() {
  const { closeConsultation, isConsultationOpen } = useCart()
  const [sent, setSent] = useState(false)

  if (!isConsultationOpen) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-sd-charcoal/40 px-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Консультация">
      <button type="button" className="absolute inset-0 cursor-default" onClick={closeConsultation} aria-label="Закрыть консультацию" />
      <form
        className="relative w-full max-w-[520px] rounded-[6px] bg-white p-7 shadow-[0_24px_80px_rgba(24,33,45,0.24)]"
        onSubmit={(event) => {
          event.preventDefault()
          setSent(true)
        }}
      >
        <Button variant="ghost" size="icon" type="button" onClick={closeConsultation} aria-label="Закрыть консультацию" className="absolute right-4 top-4 rounded-full">
          <X />
        </Button>
        {sent ? (
          <div className="py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">Заявка отправлена</p>
            <h2 className="mt-3 font-serif text-[36px] leading-tight text-sd-charcoal">Спасибо, мы свяжемся с вами</h2>
            <p className="mt-4 text-base leading-7 text-sd-muted">Консультант Sleep Diving поможет подобрать модель, размер и удобную доставку.</p>
            <Button type="button" onClick={closeConsultation} className="mt-6 h-12 rounded-[6px] bg-sd-navy px-6 font-bold text-white">
              Закрыть
            </Button>
          </div>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-sd-copper">Консультация</p>
            <h2 className="mt-3 font-serif text-[36px] leading-tight text-sd-charcoal">Поможем выбрать матрас</h2>
            <div className="mt-6 grid gap-4">
              <input required name="name" placeholder="Имя" className="h-12 rounded-[6px] border border-sd-line px-4 font-semibold outline-none focus:border-sd-navy" />
              <input required name="phone" placeholder="Телефон" className="h-12 rounded-[6px] border border-sd-line px-4 font-semibold outline-none focus:border-sd-navy" />
              <textarea name="comment" placeholder="Комментарий" rows={4} className="rounded-[6px] border border-sd-line px-4 py-3 font-semibold outline-none focus:border-sd-navy" />
            </div>
            <Button type="submit" className="mt-5 h-13 w-full rounded-[6px] bg-sd-gold text-lg font-bold text-sd-navy hover:bg-sd-gold/90">
              Отправить
            </Button>
          </>
        )}
      </form>
    </div>
  )
}
