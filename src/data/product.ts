import bedFrame from "@/assets/bed-frame.png"
import heroMattress from "@/assets/hero-mattress.png"
import layersDiagram from "@/assets/layers-diagram.png"
import lifestyleCouple from "@/assets/lifestyle-couple.png"
import modelCard from "@/assets/model-card.png"

export const productName = "Sleep Diving Classic Memory Foam Mattress"
export const reviewCount = "8,214 Reviews"

export const breadcrumbs = ["Home", "Mattresses", productName]

export const headerNavItems = [
  { label: "Mattresses", href: "#overview" },
  { label: "Bundles", href: "#compare" },
  { label: "Bed Frames", href: "#bed-frames" },
  { label: "Bedding", href: "#layers-and-materials" },
]

export const stickyNavItems = [
  { label: "Overview", href: "#overview", active: true },
  { label: "Reviews", href: "#reviews", active: false },
  { label: "FAQ", href: "#faq", active: false },
  { label: "Layers & Materials", href: "#layers-and-materials", active: false },
  { label: "Product Specs", href: "#product-specs", active: false },
  { label: "Compare", href: "#compare", active: false },
]

export const promoTimerParts = [
  { num: "0", label: "Days" },
  { num: "9", label: "Hrs" },
  { num: "53", label: "Min" },
  { num: "48", label: "Sec" },
]

export const galleryItems = [
  { label: "Room view", image: heroMattress },
  { label: "Close detail", image: modelCard },
  { label: "Layer view", image: layersDiagram },
  { label: "Lifestyle", image: lifestyleCouple },
  { label: "Frame pairing", image: bedFrame },
]

export const trustBadges = [
  { icon: "calendar", label: "120-Night Home Trial" },
  { icon: "infinity", label: "Lifetime Comfort Warranty" },
  { icon: "truck", label: "Free Shipping & Returns" },
]

export const upgrades = [
  {
    name: "Sleep Diving Classic",
    price: "Included",
    image: modelCard,
    details: ["12 in profile", "Airwoven comfort cover"],
    selected: true,
  },
  {
    name: "Sleep Diving Premier",
    price: "+$420",
    image: modelCard,
    details: ["13 in profile", "Extra cooling contour layer"],
    selected: false,
  },
]

export const modelScoreLabels = ["Firmness", "Comfort", "Support", "Cooling"]

export const models = [
  {
    badge: "Best value",
    name: "The Sleep Diving Classic",
    reviews: "8,214 Reviews",
    height: "12 in",
    copy: "Balanced pressure relief with breathable memory foam and steady everyday support.",
    scores: [5, 4, 4, 4],
    quote: "Supportive without feeling stiff. The first week already felt calmer.",
    customer: "Maya R.",
  },
  {
    badge: "Most popular",
    name: "The Sleep Diving Premier",
    reviews: "5,706 Reviews",
    height: "13 in",
    copy: "A cooler, plusher build for sleepers who want a deeper cradled feel.",
    scores: [4, 5, 4, 5],
    quote: "The top feels soft, but the support underneath is exactly right.",
    customer: "Andre L.",
  },
  {
    badge: "Tri-zone support",
    name: "The Sleep Diving Luxe",
    reviews: "1,340 Reviews",
    height: "14 in",
    copy: "Targeted comfort zones with a taller profile and refined hotel-room finish.",
    scores: [4, 5, 5, 5],
    quote: "Premium feel, strong edge support, and noticeably better cooling.",
    customer: "Nina B.",
  },
]

export const reviewSummary = {
  score: "4.8",
  count: reviewCount,
  headline: "Comfort that holds up after the first night",
  copy: "Customers most often call out pressure relief, easy setup, and the balanced feel that works across sleeping styles.",
  breakdown: [
    { label: "5 stars", value: 86 },
    { label: "4 stars", value: 10 },
    { label: "3 stars", value: 3 },
    { label: "2 stars", value: 1 },
    { label: "1 star", value: 0 },
  ],
}

export const reviews = [
  {
    customer: "Maya R.",
    sleeper: "Side sleeper",
    title: "Supportive without feeling stiff",
    quote:
      "The top has enough give for my shoulders, but I still feel lifted through my lower back. Setup was simple and the mattress settled quickly.",
    meta: "Verified buyer - Queen",
  },
  {
    customer: "Andre L.",
    sleeper: "Combination sleeper",
    title: "Cooler than my old foam mattress",
    quote:
      "I move around at night and this stays steady without feeling trapped. The cover feels cooler and the edge support is better than expected.",
    meta: "Verified buyer - King",
  },
  {
    customer: "Nina B.",
    sleeper: "Back sleeper",
    title: "Hotel feel at home",
    quote:
      "It has the polished, substantial feel I wanted. Firm enough for support, soft enough that I stopped waking up with pressure points.",
    meta: "Verified buyer - Full",
  },
]

export const layerItems = [
  {
    title: "AeroKnit Cooling Top",
    what: "A quilted cover with cooling fibers and a smooth stitched finish.",
    does: "Helps move warmth away from the surface while keeping the first touch soft.",
  },
  {
    title: "Contour Memory Foam Layer",
    what: "Responsive memory foam designed to cushion shoulders and hips.",
    does: "Reduces pressure points without the slow, sinking feel of old foam.",
  },
  {
    title: "Adaptive Support Layer",
    what: "A transitional foam layer that steadies movement through the mattress.",
    does: "Keeps comfort balanced for back, side, and combination sleepers.",
  },
  {
    title: "Stabilizing Foundation Layer",
    what: "Dense support foam that gives the mattress its durable base.",
    does: "Improves edge stability and helps the mattress hold shape over time.",
  },
  {
    title: "Protective Bottom Cover",
    what: "A tailored navy base wrap with a structured woven finish.",
    does: "Protects the core and gives the mattress a clean premium profile.",
  },
]

export const bedFrames = [
  { name: "Cloudbase Foundation", price: "$349", value: "$561" },
  { name: "Harbor Adjustable Frame", price: "$749", value: "$1,639" },
  { name: "Bamboo Platform Frame", price: "$399", value: "$1,609" },
  { name: "Stillwater Platform Bed", price: "$299", value: "$899" },
]

export const faqs = [
  {
    question: "How does the home trial work?",
    answer: "Sleep on it at home for up to 120 nights. If it is not the right fit, our team helps with a return.",
  },
  {
    question: "When will my mattress ship?",
    answer: "Most sizes leave the warehouse within a few business days, with tracking sent as soon as it moves.",
  },
  {
    question: "Is Memory Foam right for hot sleepers?",
    answer: "This model uses an airflow cover and cooling comfort layer to reduce heat buildup through the night.",
  },
  {
    question: "Can I compare models before buying?",
    answer: "Yes. The comparison cards above show profile height, comfort feel, support, cooling, reviews, and upgrade paths.",
  },
]

export const productSpecs = [
  {
    group: "Build",
    items: [
      { label: "Profile", value: "12 in" },
      { label: "Comfort feel", value: "Medium-firm" },
      { label: "Mattress type", value: "Memory foam" },
      { label: "Layers", value: "5-layer comfort system" },
    ],
  },
  {
    group: "Materials",
    items: [
      { label: "Cover", value: "AeroKnit cooling textile" },
      { label: "Comfort layer", value: "Contour memory foam" },
      { label: "Support core", value: "Dense stabilizing foam" },
      { label: "Certifications", value: "CertiPUR-US style low-emission foams" },
    ],
  },
  {
    group: "Shipping & Care",
    items: [
      { label: "Trial", value: "120 nights" },
      { label: "Warranty", value: "Lifetime comfort warranty" },
      { label: "Shipping", value: "Free delivery and returns" },
      { label: "Care", value: "Rotate every 3-6 months" },
    ],
  },
]

export const editorialBlocks = {
  lifestyle: {
    image: lifestyleCouple,
    title: "Safer materials for deeper sleep",
    copy: "Sleep Diving is built with certified foams, breathable textiles, and durable support materials chosen for comfort, cleaner rest, and everyday peace of mind.",
  },
  trial: {
    image: heroMattress,
    title: "As risk-free as it gets",
    copy: "Try your mattress at home with a 120-night comfort trial, simple returns, and a lifetime warranty designed to keep the decision easy.",
  },
}

export const productImages = {
  bedFrame,
  layersDiagram,
  modelCard,
}
