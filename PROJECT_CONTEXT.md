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
- Other: Generated local image assets in `src/assets`; static product data in `src/data/product.ts`

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
  - `LayersSection.tsx`
  - `EditorialSection.tsx`
  - `BedFrameRail.tsx`
  - `FAQSection.tsx`
- `src/components/ui/` - shadcn/ui base components
  - `Button`
  - `Card`
  - `Badge`
  - `Accordion`
  - `Dialog`
  - `Tabs`
- `src/data/product.ts` - static product data, navigation labels, copy, product models, FAQ, image references
- `src/assets/` - generated raster assets for the PDP
- `src/index.css` - Tailwind imports, shadcn theme variables, Sleep Diving color tokens
- `src/lib/utils.ts` - shared `cn` utility

Key modules:

- `App.tsx` composes the page sections in order.
- `Header` renders brand navigation and account/cart/menu icons.
- `ProductGallery` owns selected image state and animates gallery image changes.
- `PurchasePanel` renders promo timer, rating/title, product tabs, upgrades, material selector, size selector, and CTA.
- `StickyBuyBar` renders the sticky size/price/add-to-cart bar and section navigation.
- `ProductComparison` renders model cards and rating bars.
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
- Header with brand mark and ecommerce navigation
- Product gallery with thumbnails and animated main image
- Purchase panel with promo timer, rating/title, tabs, upgrade cards, material selector, size selector, and add-to-cart CTA
- Trust badges
- Sticky buy bar and section navigation
- Product comparison section
- Mattress layers/materials section with controlled accordion
- Editorial lifestyle content
- Bed frame carousel using Embla
- FAQ section
- Customer reviews section connected to sticky navigation
- Product specs section connected to sticky navigation
- Responsive mobile layout
- Generated image assets in `src/assets`
- Project pushed to GitHub repository `emoprince444/Sleep-diving`
- Architecture refactored into `brand`, `layout`, `product`, and `data` modules

## 6. Что сейчас в работе

Текущая задача:

- Continue the Sleep Diving PDP by filling missing sticky-navigation destinations and keeping project context synchronized.

Текущие проблемы:

- TODO - no real ecommerce cart or checkout behavior yet.
- TODO - no backend, database, auth, payments, analytics, or deployment pipeline yet.
- TODO - product content and prices are static mock data.
- TODO - browser-based visual QA is limited because the in-app Browser runtime failed in this environment and Playwright is not installed in the project.

## 7. Важные решения

- Use React + Vite + TypeScript for the frontend.
- Use Tailwind CSS v4 and shadcn/ui as the styling/component foundation.
- Keep DreamCloud/Saatva/Helix as visual-market references only; do not copy protected brand assets, logos, texts, or images.
- Use Sleep Diving as an original premium mattress brand.
- Use generated project-local raster assets instead of external copied images.
- Keep static product data centralized in `src/data/product.ts`.
- Keep `App.tsx` as composition-only; feature UI lives in section components.
- Preserve premium ecommerce visual details: white background, navy anchor color, gold CTA/trust accents, serif section headings, thin borders, small radii, dense purchase panel, strong sticky buy bar.
- Do not commit `node_modules` or `dist`; `.gitignore` excludes them.
- Maintain `PROJECT_CONTEXT.md` automatically after every completed task without requiring a separate user reminder.
- When updating `PROJECT_CONTEXT.md`, always update latest changes, changed files, architecture decisions, current tasks, next steps, and update date.
- Dedicated sticky-nav anchors should map to real sections before adding more navigation labels.
- Keep PDP content data in `src/data/product.ts`; sections should consume that data rather than hardcoding repeated product content.

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

Дата обновления: 2026-06-21

Последние изменения:

- Read and restored project context from `AGENT.md` and `PROJECT_CONTEXT.md`.
- Added a dedicated `ReviewsSection` for the existing `#reviews` sticky navigation anchor.
- Added a dedicated `ProductSpecsSection` for the existing `#product-specs` sticky navigation anchor.
- Extended centralized product data with review summary, review cards, and grouped product specs.
- Connected the new sections in `App.tsx`.
- Verified `npm run build` successfully.
- Started the Vite dev server on `http://127.0.0.1:5173` after sandbox escalation; HTTP smoke returned the Vite app shell.
- Attempted in-app Browser QA, but the Browser runtime failed with `missing field sandboxPolicy`; attempted Playwright fallback, but Playwright is not installed and `npm exec playwright -- --version` did not complete without fetching packages.

Измененные файлы:

- `AGENT.md`
- `PROJECT_CONTEXT.md`
- `src/App.tsx`
- `src/data/product.ts`
- `src/components/product/ReviewsSection.tsx`
- `src/components/product/ProductSpecsSection.tsx`

Краткое резюме текущего состояния:

- The project is a working frontend-only Sleep Diving PDP prototype.
- The architecture has been refactored into clear `brand`, `layout`, `product`, and `data` modules.
- `npm run build` passed after adding Reviews and Product Specs sections.
- The page is still static and not connected to real backend/cart/checkout services.
- Agent maintenance rules are now documented in `AGENT.md` and mirrored in `PROJECT_CONTEXT.md`.
- Sticky navigation now has real destinations for Overview, Reviews, FAQ, Layers & Materials, Product Specs, and Compare.

## 10. Следующие шаги

- Add interactive cart behavior for the Add To Cart CTAs.
- Add size selection state shared between the purchase panel and sticky buy bar.
- Decide cart/checkout architecture and whether to integrate Stripe or another payment provider.
- Decide hosting/deployment target.
- Add automated visual or component tests for the PDP, preferably with Playwright installed/configured.
- Run full rendered QA once the in-app Browser runtime is available or Playwright is added.
- Continue updating this file after major product, architecture, or integration changes.
- Keep `PROJECT_CONTEXT.md` synchronized after every completed task, including changed files and latest decisions.
