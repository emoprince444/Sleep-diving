# Agent Instructions

## Project

Sleep Diving is a premium mattress e-commerce experience inspired by DreamCloud, Saatva, Eight Sleep, and Casper.

Stack:

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion

Design principles:

- Premium
- Minimal
- Calm
- Editorial
- High-end DTC brand
- Not a marketplace
- Not a generic ecommerce template

Priority order for all decisions:

1. Conversion
2. UX
3. Visual polish
4. Motion

## Current State

Completed:

- Russian localization
- Real mattress catalog
- Dedicated catalog page
- Dedicated product pages
- Cart functionality
- Premium product descriptions
- Product benefits
- Improved icons
- Improved interactions
- Vercel deployment

Completed optimization passes:

- Mobile Product Page Optimization Pass
- Catalog Card Compression Pass
- Catalog Image Ratio Pass
- PDP Comparison Pass

### Mobile Product Page Optimization Pass

Status: Completed.

Changes:

- Reduced mobile PDP height
- Improved above-the-fold layout
- Price moved higher
- CTA moved higher
- Reduced unnecessary spacing
- Reduced scrolling before purchase actions
- Mobile-first optimization
- Desktop preserved

### Catalog Card Compression Pass

Status: Completed.

Changes:

- Removed specification blocks from catalog cards on mobile
- Removed warranty block on mobile
- Removed delivery block on mobile
- Removed return block on mobile
- Removed size selector on mobile
- Removed "what you will feel" section on mobile
- Reduced information density
- Surfaced price and CTA earlier
- Desktop preserved

### Catalog Image Ratio Pass

Status: Completed.

Changes:

- Reduced mobile image height
- Reduced overall card height
- Increased catalog browsing speed
- Preserved premium visual quality
- Desktop preserved

### PDP Comparison Pass

Status: Completed.

Changes:

- Added compact PDP similar-model comparison section
- Uses approved product-to-similar-products relationships
- Uses customer-facing comparison copy instead of raw specifications
- Shows 2-3 relevant alternatives per PDP
- Keeps comparison bullets grounded in original catalog pages and current product data
- Avoids large technical tables and marketplace-style comparison UI
- Preserves compact desktop and mobile PDP layouts

## Important Rules

- Перед изменениями всегда изучай текущий код.
- Не переписывай архитектуру без явной необходимости.
- Не удаляй существующий функционал без причины.
- Сохраняй стиль кода проекта.
- После изменений кратко объясняй, что было сделано.
- Если контекста не хватает, сначала задай уточняющие вопросы.
- После каждой завершенной задачи автоматически обновляй `PROJECT_CONTEXT.md` без отдельного напоминания пользователя.
- После каждой завершенной задачи автоматически обновляй production сайт на Vercel без отдельного напоминания пользователя.
- При обновлении `PROJECT_CONTEXT.md` обязательно обновляй:
  - последние изменения;
  - измененные файлы;
  - архитектурные решения;
  - текущие задачи;
  - следующие шаги;
  - дату обновления.

Catalog cards are discovery surfaces.

Do not add detailed specifications back into catalog cards.

Catalog cards should contain only:

- Product image
- Collection label
- Product name
- Short subtitle
- Price
- CTA

Detailed information belongs on PDP.

## Next Planned Phase

### PDP Conversion Pass

Focus:

Improve purchase confidence around the primary CTA.

Potential work:

- Compact trust block near CTA
- Shipping reassurance
- Warranty reassurance
- Trial period reassurance

Keep changes small and conversion-focused.

Do not redesign the PDP.

## Future Phase

### Premium Motion Pass

Only after conversion work is complete.

Potential work:

- Scroll reveal animations
- Stagger animations
- Premium hover states
- Subtle parallax
- Mattress layer animations

Avoid:

- Excessive motion
- Bouncy animations
- Marketplace-style effects
- Attention-grabbing gimmicks

Motion should feel luxury, calm, and intentional.

## Working Style

Make changes in small passes.

After each pass:

1. Implement
2. Review mobile result
3. Validate conversion impact
4. Proceed to next pass

Avoid large redesigns.

Prefer incremental improvements with measurable UX gains.
