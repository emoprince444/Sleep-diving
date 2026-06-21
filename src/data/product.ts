import bedFrameAdjustable from "@/assets/sleep-diving-bed-frame-adjustable.png"
import bedFramePlatform from "@/assets/sleep-diving-bed-frame-platform.png"
import bedroomLifestyle from "@/assets/sleep-diving-bedroom-lifestyle.png"
import comparisonClassic from "@/assets/sleep-diving-comparison-classic.png"
import comparisonLuxe from "@/assets/sleep-diving-comparison-luxe.png"
import comparisonPremier from "@/assets/sleep-diving-comparison-premier.png"
import coolingCloseup from "@/assets/sleep-diving-cooling-closeup.png"
import coupleSleeping from "@/assets/sleep-diving-couple-sleeping.png"
import fabricCloseup from "@/assets/sleep-diving-fabric-closeup.png"
import heroMattress from "@/assets/sleep-diving-hero-mattress.png"
import layersDiagram from "@/assets/sleep-diving-layers-exploded.png"
import mattressAngle from "@/assets/sleep-diving-mattress-angle.png"
import mattressSide from "@/assets/sleep-diving-mattress-side.png"

export const productName = "Матрас Sleep Diving Classic"
export const reviewCount = "8 214 отзывов"

export const breadcrumbs = ["Главная", "Матрасы", productName]

export const headerNavItems = [
  { label: "Матрасы", href: "#catalog" },
  { label: "Сравнение", href: "#compare" },
  { label: "Кровати", href: "#bed-frames" },
  { label: "Материалы", href: "#layers-and-materials" },
]

export const stickyNavItems = [
  { label: "Обзор", href: "#overview", active: true },
  { label: "Каталог", href: "#catalog", active: false },
  { label: "Отзывы", href: "#reviews", active: false },
  { label: "FAQ", href: "#faq", active: false },
  { label: "Слои и материалы", href: "#layers-and-materials", active: false },
  { label: "Характеристики", href: "#product-specs", active: false },
  { label: "Сравнение", href: "#compare", active: false },
]

export const promoTimerParts = [
  { num: "0", label: "Days" },
  { num: "9", label: "Hrs" },
  { num: "53", label: "Min" },
  { num: "48", label: "Sec" },
]

export const galleryItems = [
  { label: "Интерьер", image: heroMattress },
  { label: "Ракурс", image: mattressAngle },
  { label: "Профиль", image: mattressSide },
  { label: "Ткань", image: fabricCloseup },
  { label: "Слои", image: layersDiagram },
  { label: "Охлаждение", image: coolingCloseup },
  { label: "Спальня", image: bedroomLifestyle },
  { label: "Основание", image: bedFramePlatform },
]

export const trustBadges = [
  { icon: "star", label: "Рейтинг 4.8/5" },
  { icon: "verified", label: "8 214 проверенных отзывов" },
  { icon: "calendar", label: "120 ночей на тест" },
  { icon: "infinity", label: "Гарантия комфорта" },
  { icon: "truck", label: "Бесплатная доставка" },
]

export const purchaseHighlights = [
  { label: "Рассрочка", value: "Доступна оплата частями без переплаты" },
  { label: "Доставка", value: "Ориентировочно 3-7 дней по России" },
  { label: "Наличие", value: "Осталось мало популярных размеров" },
]

export const upgrades = [
  {
    name: "Sleep Diving Classic",
    price: "В базе",
    image: comparisonClassic,
    details: ["Профиль 12 см", "Дышащий премиальный чехол"],
    selected: true,
  },
  {
    name: "Sleep Diving Premier",
    price: "+42 000 ₽",
    image: comparisonPremier,
    details: ["Профиль 13 см", "Дополнительный охлаждающий слой"],
    selected: false,
  },
]

export const modelScoreLabels = ["Жёсткость", "Комфорт", "Поддержка", "Охлаждение"]

export const models = [
  {
    badge: "Лучший выбор",
    name: "Sleep Diving Classic",
    reviews: "8 214 отзывов",
    height: "12 см",
    image: comparisonClassic,
    copy: "Сбалансированное снижение давления, дышащий комфортный слой и уверенная ежедневная поддержка.",
    scores: [5, 4, 4, 4],
    quote: "Поддерживает тело, но не кажется жестким. Уже первая неделя стала спокойнее.",
    customer: "Maya R.",
  },
  {
    badge: "Хит продаж",
    name: "Sleep Diving Premier",
    reviews: "5 706 отзывов",
    height: "13 см",
    image: comparisonPremier,
    copy: "Более прохладная и мягкая конструкция для тех, кто любит глубокое комфортное погружение.",
    scores: [4, 5, 4, 5],
    quote: "Верх мягкий, а поддержка внутри ровно такая, как нужно.",
    customer: "Andre L.",
  },
  {
    badge: "Зональная поддержка",
    name: "Sleep Diving Luxe",
    reviews: "1 340 отзывов",
    height: "14 см",
    image: comparisonLuxe,
    copy: "Выраженные зоны комфорта, высокий профиль и ощущение премиального гостиничного матраса.",
    scores: [4, 5, 5, 5],
    quote: "Премиальное ощущение, уверенный край и заметно более прохладный сон.",
    customer: "Nina B.",
  },
]

export const reviewSummary = {
  score: "4.8",
  count: reviewCount,
  headline: "Комфорт, который ощущается уже с первой ночи",
  copy: "Покупатели чаще всего отмечают снижение давления, аккуратную поддержку и ощущение дорогого гостиничного сна дома.",
  breakdown: [
    { label: "5 звезд", value: 86 },
    { label: "4 звезды", value: 10 },
    { label: "3 звезды", value: 3 },
    { label: "2 звезды", value: 1 },
    { label: "1 звезда", value: 0 },
  ],
}

export const reviews = [
  {
    customer: "Maya R.",
    sleeper: "Сон на боку",
    title: "Поддержка без ощущения жесткости",
    quote:
      "Плечам комфортно, но поясница не проваливается. Матрас быстро принял форму, спать стало спокойнее.",
    meta: "Проверенный покупатель - 160x200",
  },
  {
    customer: "Andre L.",
    sleeper: "Комбинированный сон",
    title: "Прохладнее, чем мой старый матрас",
    quote:
      "Я часто ворочаюсь, но матрас не мешает двигаться. Чехол ощущается прохладнее, а край держит лучше ожиданий.",
    meta: "Проверенный покупатель - 180x200",
  },
  {
    customer: "Nina B.",
    sleeper: "Сон на спине",
    title: "Ощущение отеля дома",
    quote:
      "Матрас выглядит и ощущается солидно. Достаточно упругий для поддержки и достаточно мягкий, чтобы не просыпаться от давления.",
    meta: "Проверенный покупатель - 140x200",
  },
]

export const whySleepDiving = [
  {
    title: "Комфорт уровня хорошего отеля",
    copy: "Стеганая поверхность мягко принимает плечи и бедра, а поддерживающая основа сохраняет ровное положение тела.",
  },
  {
    title: "Продуманная прохлада",
    copy: "Дышащий трикотаж и современные комфортные слои помогают избежать перегрева и сохраняют ощущение свежести.",
  },
  {
    title: "Понятный выбор без давления",
    copy: "Фильтры по жёсткости, высоте и категории помогают быстро найти модель под привычку сна и бюджет.",
  },
]

export const trustedStats = [
  { value: "8 214", label: "проверенных отзывов" },
  { value: "4.8/5", label: "средний рейтинг" },
  { value: "120", label: "ночей на тест" },
  { value: "26", label: "моделей в каталоге" },
]

export const trustedQuotes = [
  {
    quote: "Первый матрас, который ощущается мягким, но не теряет поддержку.",
    customer: "Elena P.",
  },
  {
    quote: "Доставка прошла спокойно, а понятный тестовый период помог решиться.",
    customer: "Marcus T.",
  },
  {
    quote: "Ощущается как кровать в хорошем бутик-отеле, только дома.",
    customer: "Priya S.",
  },
]

export const layerItems = [
  {
    title: "Охлаждающий чехол AeroKnit",
    what: "Стеганый трикотаж высокой плотности с мягкой премиальной фактурой.",
    does: "Помогает отводить лишнее тепло от поверхности и сохраняет приятное первое касание.",
  },
  {
    title: "Слой анатомической пены",
    what: "Комфортный слой, который деликатно принимает плечи и бедра.",
    does: "Снижает давление без ощущения вязкого проваливания.",
  },
  {
    title: "Адаптивная поддержка",
    what: "Переходный слой, который стабилизирует движение и распределяет нагрузку.",
    does: "Сохраняет баланс комфорта для сна на спине, боку и в разных положениях.",
  },
  {
    title: "Стабилизирующее основание",
    what: "Плотная основа, отвечающая за долговечность и устойчивость конструкции.",
    does: "Усиливает поддержку по краям и помогает матрасу сохранять форму.",
  },
  {
    title: "Защитный нижний чехол",
    what: "Аккуратная нижняя отделка с плотной тканевой фактурой.",
    does: "Защищает основу и формирует чистый премиальный профиль матраса.",
  },
]

export const bedFrames = [
  { name: "Cloudbase Foundation", price: "34 900 ₽", value: "56 100 ₽", image: bedFramePlatform },
  { name: "Harbor Adjustable Frame", price: "74 900 ₽", value: "163 900 ₽", image: bedFrameAdjustable },
  { name: "Bamboo Platform Frame", price: "39 900 ₽", value: "160 900 ₽", image: bedFramePlatform },
  { name: "Stillwater Platform Bed", price: "29 900 ₽", value: "89 900 ₽", image: bedFrameAdjustable },
]

export const faqs = [
  {
    question: "Как работает тестовый период?",
    answer: "Вы спите на матрасе дома до 120 ночей. Если модель не подходит, команда помогает подобрать альтернативу или оформить возврат.",
  },
  {
    question: "Когда матрас будет доставлен?",
    answer: "Популярные размеры обычно отправляются в течение нескольких рабочих дней. После передачи в доставку вы получаете информацию по заказу.",
  },
  {
    question: "Подойдёт ли пенный матрас тем, кому жарко спать?",
    answer: "В моделях используются дышащий чехол и комфортные слои, которые помогают уменьшить накопление тепла ночью.",
  },
  {
    question: "Можно ли сравнить модели перед покупкой?",
    answer: "Да. В каталоге и блоке сравнения можно оценить высоту, жёсткость, состав, нагрузку, цену и доступные размеры.",
  },
]

export const productSpecs = [
  {
    group: "Конструкция",
    items: [
      { label: "Профиль", value: "от 5 до 30 см" },
      { label: "Ощущение", value: "от мягкого до повышенной жесткости" },
      { label: "Тип", value: "пенные и пружинные модели" },
      { label: "Слои", value: "комфортные системы до 6+ слоев" },
    ],
  },
  {
    group: "Материалы",
    items: [
      { label: "Чехол", value: "трикотаж высокой плотности" },
      { label: "Комфорт", value: "ППУ, латекс, пена Memory Foam" },
      { label: "Поддержка", value: "пружинные блоки TFK/Multi и плотная основа" },
      { label: "Наполнители", value: "кокосовая койра, войлок, пены разной плотности" },
    ],
  },
  {
    group: "Доставка и уход",
    items: [
      { label: "Тест", value: "до 120 ночей дома" },
      { label: "Гарантия", value: "от 18 до 36 месяцев" },
      { label: "Доставка", value: "по России" },
      { label: "Уход", value: "поворачивать каждые 3-6 месяцев" },
    ],
  },
]

export const editorialBlocks = {
  lifestyle: {
    image: bedroomLifestyle,
    title: "Материалы, которым доверяешь каждую ночь",
    copy: "Sleep Diving объединяет плотные чехлы, комфортные пены, кокосовую койру, латекс и независимые пружинные блоки, чтобы сон ощущался устойчивым и дорогим.",
  },
  trial: {
    image: coupleSleeping,
    title: "Покупка без лишнего риска",
    copy: "Выберите размер, сравните модели и протестируйте матрас дома. Доставка, гарантия и понятные условия помогают принять решение спокойно.",
  },
}

export const productImages = {
  bedFrameAdjustable,
  bedFramePlatform,
  bedroomLifestyle,
  comparisonClassic,
  comparisonLuxe,
  comparisonPremier,
  coupleSleeping,
  coolingCloseup,
  fabricCloseup,
  layersDiagram,
  mattressAngle,
  mattressSide,
}
