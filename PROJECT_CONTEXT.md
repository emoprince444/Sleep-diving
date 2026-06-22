# Project Context

## 1. Описание проекта

Sleep Diving is a premium mattress product detail page built as a React/Vite frontend prototype. It presents a high-end mattress shopping experience inspired by premium direct-to-consumer sleep brands, with a product gallery, purchase panel, trust badges, model comparison, layers/materials section, editorial lifestyle content, bed frame carousel, and FAQ.

The target user is a shopper evaluating a premium mattress online who needs clear product information, trust signals, model comparisons, and a fast path to add the selected mattress to cart.

## 2. Цель проекта

The main goal is to build a polished, responsive Product Detail Page for the Sleep Diving brand that feels premium and conversion-focused. The intended end result is a production-ready ecommerce PDP frontend that can later be connected to real product data, checkout, analytics, hosting, and backend services.

## 3. Технологический стек

- Frontend: Vite, React, TypeScript, Tailwind CSS v4, shadcn/ui, Base UI primitives, lucide-react, framer-motion, embla-carousel-react
- Backend: TODO - no backend is implemented yet
- Database: TODO - no database is implemented yet
- Auth: TODO - no auth is implemented yet
- Payments: TODO - no payment integration is implemented yet
- Hosting: TODO - hosting/deployment target is not configured yet
- Other: Generated local branded Sleep Diving image assets in `src/assets`; static product data in `src/data/product.ts`

## 4. Текущая архитектура

Folder structure:

- `src/App.tsx` - top-level page composition only
- `src/components/brand/` - brand primitives
  - `BrandMark.tsx`
  - `Rating.tsx`
- `src/components/layout/` - page layout and persistent UI
  - `Header.tsx`
  - `Footer.tsx`
  - `StickyBuyBar.tsx`
- `src/components/product/` - product page sections
  - `ProductGallery.tsx`
  - `PurchasePanel.tsx`
  - `TrustBadges.tsx`
  - `ProductComparison.tsx`
  - `ReviewsSection.tsx`
  - `WhySleepDivingSection.tsx`
  - `TrustedBySleepersSection.tsx`
  - `LayersSection.tsx`
  - `EditorialSection.tsx`
  - `BedFrameRail.tsx`
  - `ProductSpecsSection.tsx`
  - `FAQSection.tsx`
- `src/components/ui/` - shadcn/ui base components
  - `Button`
  - `Card`
  - `Badge`
  - `Accordion`
  - `Dialog`
  - `Tabs`
- `src/data/product.ts` - static product data, navigation labels, copy, product models, FAQ, image references
- `src/data/products.ts` - real mattress catalog data extracted from PDF, including public RRC prices and internal wholesale prices
- `src/assets/` - generated raster assets for the PDP
- `src/index.css` - Tailwind imports, shadcn theme variables, Sleep Diving color tokens
- `src/lib/utils.ts` - shared `cn` utility

Key modules:

- `App.tsx` composes the page sections in order.
- `Header` renders brand navigation and account/cart/menu icons.
- `ProductGallery` owns selected image state and animates gallery image changes.
- `PurchasePanel` renders promo timer, rating/title, product tabs, upgrades, material selector, size selector, and CTA.
- `StickyBuyBar` renders the desktop sticky size/price/add-to-cart bar, section navigation, and a mobile fixed bottom Add to Cart bar.
- `ProductComparison` renders model cards and rating bars.
- `ProductCatalogSection` renders the Russian product catalog with category, firmness, height, and size filters.
- `WhySleepDivingSection` renders conversion-focused product reasons using branded cooling imagery.
- `TrustedBySleepersSection` renders extended social proof, stats, and verified quotes.
- `LayersSection` renders the mattress layer accordion and layer diagram.
- `BedFrameRail` uses `embla-carousel-react` for the bed frame rail.
- `Footer` also owns the floating live chat button.

Main page/screens:

- Single-page Product Detail Page at the Vite root route (`/`).

API endpoints:

- TODO - no API endpoints exist yet.

Important services:

- TODO - no external services are integrated yet.

Component relationships:

- `App` imports layout and product sections.
- Product sections consume static data from `src/data/product.ts`.
- Brand primitives are reused by layout/product sections.
- UI primitives from `src/components/ui` are composed by feature components.

## 5. Что уже реализовано

- Vite + React + TypeScript project setup
- Tailwind CSS v4 setup and Sleep Diving design tokens
- shadcn/ui setup with Button, Card, Badge, Accordion, Dialog, and Tabs
- Premium Sleep Diving PDP visual system
- Premium ecommerce visual polish across the PDP
- Sticky header with brand mark and ecommerce navigation
- Product gallery with premium hero framing, thumbnails, hover states, and animated main image
- Framed purchase panel with promo timer, rating/title, tabs, upgrade cards, material selector, size selector, and add-to-cart CTA
- Polished trust badges
- Sticky buy bar, section navigation, and mobile fixed Add to Cart CTA
- Product comparison section with elevated cards and premium media framing
- Conversion optimization pass with denser section rhythm, stronger purchase-card trust signals, financing, delivery estimate, stock urgency, and expanded social proof
- Why Sleep Diving section
- Trusted By Thousands Of Sleepers section
- Mattress layers/materials section with controlled accordion
- Editorial lifestyle content
- Bed frame carousel using Embla
- FAQ section
- Customer reviews section connected to sticky navigation
- Product specs section connected to sticky navigation
- Ecommerce-style footer with link columns, trust chips, email capture, and live chat
- Responsive mobile layout
- Generated image assets in `src/assets`
- Branded Sleep Diving image asset set for hero, gallery, layers, cooling close-up, lifestyle, bed frames, and comparison cards
- Russian product catalog with real Sleep Diving mattress models, categories, firmness, height, layers, load, sizes, public RRC prices, and internal-only wholesale prices
- Category, firmness, height, and size filtering with dynamic price updates by size
- Premium product-card copy layer with short display names, product types, calm descriptions, benefits, and collection labels
- Full Russian premium ecommerce copy across visible site sections
- Project pushed to GitHub repository `emoprince444/Sleep-diving`
- Architecture refactored into `brand`, `layout`, `product`, and `data` modules

## 6. Что сейчас в работе

Текущая задача:

- Sleep Diving Catalog Card Compression Pass завершён: мобильные карточки каталога сжаты для быстрого просмотра, desktop-карточки сохранены.

Текущие проблемы:

- TODO - no backend, database, auth, payments, analytics, or deployment pipeline yet.
- TODO - product content and prices are static mock data.
- TODO - generated PNG assets are large and should be compressed or converted to responsive WebP/AVIF before production.
- TODO - local cart and consultation form are frontend placeholders until backend/checkout/CRM integration is added.

## 7. Важные решения

- Use React + Vite + TypeScript for the frontend.
- Use Tailwind CSS v4 and shadcn/ui as the styling/component foundation.
- Keep DreamCloud/Saatva/Helix as visual-market references only; do not copy protected brand assets, logos, texts, or images.
- Use Sleep Diving as an original premium mattress brand.
- Use generated project-local raster assets instead of external copied images.
- Do not use direct DreamCloud, Saatva, Helix, or other competitor imagery/assets; keep those brands as quality references only.
- Keep the branded asset direction consistent: photorealistic luxury sleep brand, hotel-quality interiors, soft natural lighting, cream/white/navy palette, premium mattress tailoring.
- Keep static product data centralized in `src/data/product.ts`.
- Keep `App.tsx` as composition-only; feature UI lives in section components.
- Preserve premium ecommerce visual details: white background, navy anchor color, gold CTA/trust accents, serif section headings, thin borders, small radii, dense purchase panel, strong sticky buy bar.
- Use a consistent premium surface language: 6px radii, thin warm borders, restrained navy/gold accents, soft elevation, and hover/micro-motion states.
- Keep mobile purchase access prominent with a fixed bottom Add to Cart CTA.
- Keep vertical spacing premium but conversion-focused; avoid large empty gaps between sections.
- Keep purchase-card reassurance visible near the CTA: badges, financing, estimated delivery, low-stock indicator, rating/trial/shipping proof.
- Do not commit `node_modules` or `dist`; `.gitignore` excludes them.
- Maintain `PROJECT_CONTEXT.md` automatically after every completed task without requiring a separate user reminder.
- When updating `PROJECT_CONTEXT.md`, always update latest changes, changed files, architecture decisions, current tasks, next steps, and update date.
- Dedicated sticky-nav anchors should map to real sections before adding more navigation labels.
- Keep PDP content data in `src/data/product.ts`; sections should consume that data rather than hardcoding repeated product content.
- Keep real mattress catalog data in `src/data/products.ts`; never render internal `wholesalePrice` or the word "опт" to buyers.
- Use RRC as the buyer-facing public price.
- Use Framer Motion for restrained premium micro-interactions and always respect `prefers-reduced-motion`.
- Keep imported mattress facts/prices intact; use a separate premium display-copy layer for customer-facing product-card naming and descriptions.
- Keep Product Detail Page focused on conversion: first viewport must show price, old price, savings, size selection, buy CTA, warranty, delivery, and collection label.
- On mobile Product Detail Page, keep the hero compact and show product name, short description, price, selected size, size picker, and Add to Cart before deeper materials/details.
- On mobile catalog cards, prioritize browsing speed: image, collection label, name, short subtitle, price, discount, and one primary CTA; detailed specs belong on PDP or desktop catalog cards.

## 8. Правила для AI-агента

- Перед изменениями всегда изучай текущий код.
- Не переписывай архитектуру без явной необходимости.
- Не удаляй существующий функционал без причины.
- Сохраняй стиль кода проекта.
- После изменений кратко объясняй, что было сделано.
- Если контекста не хватает, сначала задай уточняющие вопросы.
- Обновляй этот файл после важных изменений.
- После каждой завершенной задачи автоматически обновляй `PROJECT_CONTEXT.md` без отдельного напоминания пользователя.
- При обновлении `PROJECT_CONTEXT.md` обязательно обновляй последние изменения, измененные файлы, архитектурные решения, текущие задачи, следующие шаги и дату обновления.

## 9. Последнее состояние проекта

Дата обновления: 2026-06-22

Последние изменения:

- Выполнен Sleep Diving Catalog Card Compression Pass только для мобильных карточек каталога и блока популярных товаров.
- На mobile карточка теперь показывает только image, collection label, product name, short subtitle, price/discount and one CTA `Подробнее`.
- С mobile-карточек скрыты size selector, size/warranty/delivery/return blocks, benefits section, materials section, load/spec details and duplicated image badges.
- Высота mobile hero image в карточке уменьшена до компактного формата; отступы между title/subtitle/price/CTA сокращены.
- Desktop catalog card layout intentionally preserved, including size selector, cart CTA, specs, benefits and materials.
- Проверено локально в Chromium mobile: первая карточка около 335px высотой, price and CTA visible, CTA leads to Product Detail Page, console errors нет.
- Выполнен Mobile Product Page Optimization Pass только для мобильной Product Detail Page.
- На mobile hero image стал компактнее, убран повторяющийся бейдж коллекции поверх изображения, сокращены вертикальные отступы.
- На первом мобильном экране теперь видны название, короткое описание, цена, выбранный размер и покупка.
- Описание на mobile ограничено двумя строками, чтобы цена и CTA появлялись раньше.
- Блок цены стал компактнее: старая цена и выгода рядом, крупная текущая цена, размер рядом с ценой.
- CTA переименован в «Добавить в корзину» и поднят сразу под выбор размера.
- Характеристики на mobile оформлены как компактная сетка 2×2: высота, гарантия, доставка, возврат.
- Добавлен sticky mobile CTA снизу: «Купить» + «от ... ₽» с текущим выбранным размером.
- Материалы и подробные блоки на mobile получили меньшие отступы и компактные карточки; desktop smoke confirmed unchanged.
- Проверено локально в Chromium mobile: в первом viewport есть имя, цена, размер и покупка; размер меняет цену; sticky CTA открывает корзину; console errors нет.
- Выполнен Premium Product Page Pass только для Product Detail Page (`/product/:id`).
- Первый экран товара теперь показывает цену, старую цену, процент скидки, выгоду, выбор размера, кнопку «Купить», гарантию, доставку, возврат и высоту.
- Product Detail Page использует premium display-copy (`getProductCardCopy`): короткие имена, тип товара и спокойное продающее описание вместо складского описания.
- Старый buyer-facing термин «Эконом класс» на странице товара заменён через label map на «Базовая коллекция»; также используются `Comfort Collection` и `Signature Collection`.
- Блок состава оформлен как «Слои и ощущения» с объяснением роли каждого слоя.
- Добавлены блоки «Для кого подходит» и «Почему выбирают Sleep Diving».
- Улучшена мобильная версия страницы товара: адаптивное изображение, full-width CTA, компактная сетка trust-параметров и читаемые секции.
- Проверено локально в Chromium mobile/desktop: цена и старая цена видны, размер меняет цену, «Купить» открывает корзину, «Эконом класс» не отображается, console errors нет.
- Выполнен Premium Typography & Content Pass для карточек товаров каталога и блока бестселлеров.
- Добавлен слой `productCardCopy` для всех 26 матрасов: короткие display-названия, отдельный тип товара, спокойные премиальные описания и преимущества.
- Бейджи категорий в карточках заменены на premium labels: «Базовая коллекция», «Комфорт коллекция», `Signature Collection`.
- Характеристики карточек перестроены в формат «Размер / Гарантия / Доставка / Возврат» с единым премиальным стилем и иконками.
- Перед ценой добавлен блок преимуществ; для Shamsa используются преимущества про комфорт спального места, снижение давления, диваны/матрасы и гипоаллергенные материалы.
- Улучшены заголовки, межстрочные интервалы, мобильная читаемость и CTA/cart naming из карточек.
- Проверено локально в Chromium mobile и desktop: `/catalog` показывает 26 товаров, старое `Shamsa Topper` в карточках не отображается, новый бейдж и преимущества видны, console errors нет.
- Исправлен риск белого экрана/невидимых товаров в каталоге после motion polish.
- Для критичных списков товаров убрана зависимость видимости от `whileInView`/`AnimatePresence`; карточки каталога и бестселлеров теперь видимы сразу, motion остаётся только как безопасное улучшение.
- Проверено локально в Chromium mobile viewport: `/catalog` показывает 26 товаров, фильтр «Премиум класс» показывает 6 товаров, на главной есть «Популярные матрасы» и кнопка «Смотреть весь каталог».
- Добавлен restrained premium motion polish на Framer Motion без изменения архитектуры сайта.
- Hero/PDP верх страницы получил плавное появление хлебных крошек, галереи и purchase card.
- Product gallery получил мягкий scroll parallax/scale для главного изображения с fallback для reduced motion.
- Карточки товаров и каталога получили fade-in при появлении, hover lift, subtle shadow и stagger-анимации.
- Фильтры каталога получили layout/smooth transitions и аккуратные active/focus состояния.
- Purchase card получил плавное появление, CTA hover/tap motion и subtle highlight блока цены при смене размера.
- Trust badges получили stagger fade-in и лёгкий hover на карточках/иконках.
- FAQ accordion получил smooth open/close и вращение иконки.
- Cart drawer и consultation modal получили backdrop fade, slide/scale enter/exit через `AnimatePresence`.
- Mobile menu получил slide-down animation, а sticky Add to Cart - плавное появление.
- Проверено в Chromium: 14 интерактивных сценариев прошли после motion polish; reduced-motion smoke-тест также прошёл.
- `npm run build` passed; Vite still reports the existing bundle-size warning above 500 kB.

Измененные файлы:

- `PROJECT_CONTEXT.md`
- `src/components/product/ProductCatalogSection.tsx`

Краткое резюме текущего состояния:

- The project is a working frontend-only Sleep Diving PDP prototype.
- The architecture has been refactored into clear `brand`, `layout`, `product`, and `data` modules.
- `npm run build` passed after the mobile catalog card compression pass, with a bundle-size warning above the default 500 kB threshold.
- The page is still frontend-only and not connected to real backend/cart/checkout services, but has local cart and lead-form behavior.
- Agent maintenance rules are now documented in `AGENT.md` and mirrored in `PROJECT_CONTEXT.md`.
- Sticky navigation now has Russian labels and real destinations for the overview, reviews, questions, materials, specs, and comparison sections.
- The visual system now uses cohesive branded Sleep Diving imagery instead of the original temporary placeholders.
- The page now has stronger conversion signals: denser rhythm, purchase urgency, financing/delivery reassurance, and expanded social proof.
- The homepage now shows only a short popular-products section, while the full real Sleep Diving catalog data from the PDF is available on `/catalog`.
- Browser QA confirmed mobile catalog cards are compressed, show price and one `Подробнее` CTA, and route to the Product Detail Page while desktop cards remain detailed.

## 10. Следующие шаги

- Replace local cart/lead-form placeholders with backend order and CRM integration.
- Add real checkout or payment flow after cart review.
- Add real newsletter form handling.
- Compress and generate responsive WebP/AVIF variants for the new PNG assets before production deployment.
- Decide cart/checkout architecture and whether to integrate Stripe or another payment provider.
- Decide hosting/deployment target.
- Add automated visual or component tests for the PDP, preferably with Playwright installed/configured.
- Run full rendered QA once the in-app Browser runtime is available or Playwright is added.
- Continue updating this file after major product, architecture, or integration changes.
- Keep `PROJECT_CONTEXT.md` synchronized after every completed task, including changed files and latest decisions.
