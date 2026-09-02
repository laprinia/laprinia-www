# Design System

Reference for the tokens and conventions in this site. The source of truth is
[`src/styles/globalStyle.ts`](src/styles/globalStyle.ts) — this document describes it, it does not
replace it. If the two disagree, the code is right.

Everything is CSS custom properties on `:root`, consumed through styled-components. There is no
theme object and no Tailwind config in play.

---

## Principles

1. **Tokens over literals.** Spacing, colour, radius and type all come from the scale. A raw
   `rem` or hex in a component is a bug unless it is documented as an exception.
2. **Semantic layer over palette.** Sections read `--section-*`, not `--neutral-700`. A surface is
   recoloured by redefining the semantic token on its root, not by rewriting its children.
3. **Fluid over breakpoint-stepped.** Prefer `clamp()` between two scale steps to adding a media
   query.
4. **Motion is optional.** Every transition and animation has a `prefers-reduced-motion` escape.
5. **Server-rendered content stays in the DOM.** Collapse and hide with CSS; never conditionally
   render text out of the markup.

---

## Typefaces

| Token            | Value                                              | Used for                            |
| ---------------- | -------------------------------------------------- | ----------------------------------- |
| `--font-body`    | Atkinson Hyperlegible Next Variable → system stack | Paragraph and UI copy               |
| `--font-heading` | Px Grotesk → sans-serif                            | Headings, nav, buttons, wordmarks   |
| `--font-mono`    | IBM Plex Mono → monospace                          | Labels, eyebrows, numbers, metadata |

Px Grotesk is self-hosted from `public/fonts/` as three `@font-face` declarations: **300, 400 and
700**, all `font-display: swap`. Atkinson and IBM Plex Mono come from `@fontsource` packages.

Headings default to `--font-weight-light` globally.

### Weights

| Token                   | Value |
| ----------------------- | ----- |
| `--font-weight-light`   | 300   |
| `--font-weight-regular` | 400   |
| `--font-weight-bold`    | 700   |

Three tokens, each mapping to a Px Grotesk face that is actually loaded. There is deliberately no
`lighter` or `semibold` — a weight token that resolves to a face the browser has to substitute is
a lie about what will render.

---

## Type scale

Named by role, not by size. Editing one line resizes every component using it at every viewport.

| Token                 | Value                                      | Role                                       |
| --------------------- | ------------------------------------------ | ------------------------------------------ |
| `--font-size-display` | `clamp(2rem, 5vw, 5.5rem)`                 | Hero name, section headings — loudest type |
| `--font-size-title`   | `clamp(1.6rem, 2.6vw, 2.25rem)`            | Project and panel headings                 |
| `--font-size-nav`     | `clamp(1.125rem, 1.95vw, 2rem)`            | Primary navigation                         |
| `--font-size-body`    | `clamp(1rem, 0.583rem + 0.667vw, 1.25rem)` | Paragraph copy — 16px to 20px              |
| `--font-size-eyebrow` | `clamp(0.7rem, 1vw, 1.1rem)`               | Small labels above/beside larger type      |

### Controls ramp

One fixed ramp shared by buttons and pills, so a medium pill and a small button are deliberately
the same size.

| Token               | Value            |
| ------------------- | ---------------- |
| `--font-size-ui-xs` | 0.8125rem (13px) |
| `--font-size-ui-sm` | 0.9375rem (15px) |
| `--font-size-ui-md` | 1rem (16px)      |
| `--font-size-ui-lg` | 1.125rem (18px)  |
| `--font-size-ui-xl` | 1.25rem (20px)   |

Also `--text-stroke-width: max(0.75px, 0.025em)` for hollowed display type via
`-webkit-text-stroke`.

`body` sets `--font-size-body` globally; there are no breakpoint-stepped font-size overrides.

---

## Colour

### Brand

| Token                       | Value     |
| --------------------------- | --------- |
| `--accent-color`            | `#0141D5` |
| `--darker-accent-color`     | `#0136af` |
| `--way-darker-accent-color` | `#002986` |
| `--support-color`           | `#DAFE71` |

### Neutrals

A warm-cast ramp from white to black.

| Token           | Value     |
| --------------- | --------- |
| `--neutral-000` | `#FFFFFF` |
| `--neutral-100` | `#F5F4F0` |
| `--neutral-200` | `#E8E6DF` |
| `--neutral-300` | `#D4D1C8` |
| `--neutral-400` | `#B5B1A6` |
| `--neutral-500` | `#918C80` |
| `--neutral-600` | `#5F5A49` |
| `--neutral-700` | `#48453D` |
| `--neutral-800` | `#2A2923` |
| `--neutral-900` | `#000000` |

### Semantic layer

A section reads these rather than the raw palette, so a surface can be recoloured by redefining
them on its root. A section that wants different treatment overrides only what differs — the work
and contact grounds set `--section-ink` to the accent, and `NotebookSection` sets `--section-ink`
per notebook at runtime.

| Token               | Default                                     |
| ------------------- | ------------------------------------------- |
| `--section-ink`     | `--foreground-color` (`--neutral-800`)      |
| `--section-accent`  | `--accent-color`                            |
| `--section-muted`   | `--neutral-600`                             |
| `--section-surface` | `--background-color` (`--neutral-100`)      |
| `--surface-tint`    | `--neutral-200` — cards, chips, media wells |

Page-level: `--background-color` is `--neutral-100`, `--foreground-color` is `--neutral-800`.

Components also expose local contracts that callers set, rather than being restyled from outside:
`--button-ink` / `--button-on-ink`, `--folder-surface` / `--folder-ink`, `--notebook-background`,
`--footer-ink`, `--crossword-block` / `--crossword-rule`.

### Verified contrast

| Pair                                | Ratio |
| ----------------------------------- | ----- |
| `--neutral-800` on `--neutral-100`  | 13.25 |
| `--accent-color` on `--neutral-100` | 7.02  |
| `--neutral-600` on `--neutral-100`  | 6.27  |
| `--neutral-600` on `--surface-tint` | 5.52  |

`--section-muted` on `--surface-tint` is still the tightest pair in the system, but at 5.52 it now
has real headroom over the 4.5 AA threshold rather than the 0.02 it had before `--neutral-600` was
darkened. Re-check it before changing either token.

---

## Spacing

4px basis. Step _n_ equals _n_ × 4px, so `--space-6` is 24px. Every gap, margin and padding comes
from this scale, **including the bounds inside `clamp()`**. Never write a literal rem for spacing —
pick the nearest step.

Reach for the smallest step that still separates two things. Closer spacing reads as "these belong
together", so the jump between two groups should be visibly larger than the spacing inside either.

**Inside one element**

| Token       | px  | Use                                          |
| ----------- | --- | -------------------------------------------- |
| `--space-1` | 4   | Hairline: icon to label, chip padding        |
| `--space-2` | 8   | Tightly bound pair: index to title, tag rows |
| `--space-3` | 12  | Within a text block: heading to body         |

**Between elements in a component**

| Token       | px  | Use                                       |
| ----------- | --- | ----------------------------------------- |
| `--space-4` | 16  | Grouped siblings: body copy to a tag row  |
| `--space-5` | 20  | Sub-groups inside one component           |
| `--space-6` | 24  | Compact component padding, block to block |

**Component level**

| Token        | px  | Use                                     |
| ------------ | --- | --------------------------------------- |
| `--space-7`  | 28  | Roomier component padding               |
| `--space-8`  | 32  | Card padding, gap between sibling cards |
| `--space-9`  | 36  | Wide-viewport card padding              |
| `--space-10` | 40  | List row rhythm, stacked card gaps      |
| `--space-12` | 48  | Major blocks inside one section         |

**Section level**

| Token        | px  | Use                                 |
| ------------ | --- | ----------------------------------- |
| `--space-14` | 56  | Section separation, tight viewports |
| `--space-16` | 64  | Section separation, mobile          |
| `--space-20` | 80  | Section separation, desktop         |
| `--space-24` | 96  | Page-level breaks, large screens    |

For fluid spacing, clamp between two steps rather than inventing a value:

```css
padding: clamp(var(--space-6), 3vw, var(--space-12));
```

---

## Radius and layout

| Token             | Value | Use                                                    |
| ----------------- | ----- | ------------------------------------------------------ |
| `--radius-sm`     | 4px   | Crossword cells, small tiles                           |
| `--border-radius` | 8px   | Dropdowns, generic surfaces                            |
| `--radius-card`   | 1rem  | Cards and panels                                       |
| `--radius-pill`   | 999px | Pills and chips                                        |
| `--nav-height`    | 4rem  | Fixed nav; 4.5rem ≥1800px, 3.5rem ≤1024px, 3rem ≤768px |

`--nav-height` is the only responsive token — everything else is fluid or fixed.

---

## Elevation

| Token      | Value                                     |
| ---------- | ----------------------------------------- |
| `--lift-1` | `0 2px 6px rgb(var(--lift-tint) / 10%)`   |
| `--lift-2` | `0 6px 14px rgb(var(--lift-tint) / 12%)`  |
| `--lift-3` | `0 14px 28px rgb(var(--lift-tint) / 16%)` |
| `--lift-4` | `0 28px 56px rgb(var(--lift-tint) / 20%)` |

`--lift-tint` is `72 69 61` — the RGB channels of `--neutral-700`. Shadows are **never pure
black**: black over the warm grounds reads as dirt rather than depth. Reach for the smallest step
that still separates two planes.

The scale exists as a token; a handful of older ad-hoc `box-shadow` values have not yet been
migrated onto it. See _Known gaps_.

## Bloom

| Token          | Value     |
| -------------- | --------- |
| `--bloom-lime` | `#DAFE71` |
| `--bloom-blue` | `#0141D5` |

Depth without bevels. These are **colour tokens only** — the effect is a usage recipe, not a token:
place a large shape behind content, blur it heavily, and blend it into the ground.

```css
filter: blur(70px);
mix-blend-mode: multiply;
pointer-events: none;
```

The blurred element must sit behind content and never intercept pointer events. `mix-blend-mode`
creates a stacking context and behaves differently over the warm grounds than over white — check
both before committing to a placement.

---

## Breakpoints

Five named breakpoints, defined in [`src/styles/breakpoints.ts`](src/styles/breakpoints.ts).

| Name  | Value  |
| ----- | ------ |
| `sm`  | 480px  |
| `md`  | 700px  |
| `lg`  | 1000px |
| `xl`  | 1230px |
| `xxl` | 1800px |

`md` (700px) is the primary breakpoint.

**These are TypeScript constants, not CSS custom properties, and that is deliberate.** CSS does not
permit `var()` inside a media query condition — `@media (min-width: var(--bp-md))` is invalid and
fails silently, taking the whole rule with it. So they are interpolated into styled-components:

```ts
import { media } from "../../styles/breakpoints";

export const Panel = styled.div`
  padding: var(--space-4);

  ${media.md} {
    padding: var(--space-8);
  }
`;
```

`media.*` is mobile-first (`width >= n`); `mediaBelow.*` is the inverse where a max-width query is
genuinely needed. Both emit modern range syntax, which also satisfies stylelint's
`media-feature-range-notation` rule.

Existing components still carry 14 hand-written values including near-duplicate pairs
(`767`/`768`, `999`/`1000`, `1023`/`1024`). New work uses the named set; the back-catalogue is
migrated opportunistically. See _Known gaps_.

---

## Motion

| Token        | Value                            | Use                               |
| ------------ | -------------------------------- | --------------------------------- |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | House curve. Default for movement |
| `--dur-fast` | `0.18s`                          | Colour and opacity                |
| `--dur-mid`  | `0.35s`                          | Transforms and shadows            |
| `--dur-slow` | `0.6s`                           | Entrances and sweeps              |

These codify what the codebase already did — `--ease-out` matches the curve with 17 existing uses,
and the durations match the existing clusters. Two other easings survive for specific jobs:
`cubic-bezier(0.16, 1, 0.3, 1)` (sharper, 3 uses) and `cubic-bezier(0.45, 0, 0.25, 1)` (the
highlight sweep on the solution line).

Framer Motion handles layout, drag and scroll-linked effects.

### Reduced motion

**Non-negotiable.** 35 `prefers-reduced-motion` blocks exist across the codebase. Every animation
or transition needs one. Three patterns are in use:

```css
@media (prefers-reduced-motion: reduce) { transition: none; }        /* drop the transition */
@media (prefers-reduced-motion: reduce) { animation: none; opacity: 1; }  /* land on end state */
@media (prefers-reduced-motion: reduce) { animation-name: ${fadeOnly}; }  /* swap for a fade */
```

`html { scroll-behavior: smooth }` is set in
[`v2GlobalStyle.ts`](src/styles/v2GlobalStyle.ts) and reverts to `auto` under reduced motion.
Framer Motion components read `useReducedMotion()` and pass `{ duration: 0 }`.

---

## Accessibility conventions

- **Focus.** 36 `:focus-visible` rules. The pattern is
  `outline: 2px solid <local ink>; outline-offset: 3px` — never `outline: none`.
- **Hidden but present.** `@radix-ui/react-visually-hidden` for text that must stay in the DOM and
  the a11y tree (9 files). For decorative-only hiding use `aria-hidden`. For removing a collapsed
  region from the a11y tree while keeping it crawlable, use `inert`.
- **Icons.** Decorative icons get `aria-hidden="true"`. Meaningful SVGs get `role="img"` plus
  `aria-labelledby` pointing at a `<title>`.
- **Interactive elements are real elements.** `<button>` or `<a>`, never a div with a handler.
  `Button` uses Radix `Slot` via `asChild` to render as an anchor without losing styling.
- **Never remove content from the static HTML.** Collapse with `grid-template-rows: 1fr → 0fr`, or
  clip with `clip-path: inset(50%)`. Do not use `{isOpen && <Content />}`.

---

## Components

**Primitives** — `Button` (`variant`: solid | outline | ghost; `size`: sm | md | lg | xl; plus
`icon`, `iconPosition`, `iconOnly`, `fullWidth`, `pill`, `loading`, `asChild`), `Tag`,
`SectionHeading`, `CustomCursor`, `LoopingText`.

**Composite** — `Crossword`, `Notebook` / `NotebookSection`, `WorkList`, `MetricCard`, `LabTile`,
`DictionaryEntry`, `PortfolioBoard`, `MediaBento`, `ContactForm`, `TrustRibbon`, `ErrorState`,
`ScrollTopButton`, `StackLayer`.

**Layout** — `NavBar`, `Footer`, `HomeStage`, `HomeHero`, `CaseStudy`, `TextRibbon`.

Directory convention: `ComponentName/ComponentName.tsx` + `ComponentName.styles.ts`. Copy lives in
`consts.*.ts`, never inline in components. No explanatory comments in component code.

---

## Known gaps

Honest list of where the system is inconsistent. None of these are broken — they are the places
where a change would pay off.

1. **Ad-hoc shadows not yet migrated.** `--lift-*` exists, but four hand-written `box-shadow`
   values still sit in `Crossword`, `NavBar` (`DropdownContent`) and elsewhere, with unrelated
   numbers and pure-black tints. They should be swapped onto the scale.
2. **The back-catalogue of breakpoints.** The five named breakpoints exist and are used by new
   code, but ~14 hand-written values remain across older components, including the near-duplicate
   pairs (`767`/`768`, `999`/`1000`, `1023`/`1024`).
3. **Mixed media query syntax.** Older files use `(min-width: 700px)`; `breakpoints.ts` and
   `TrustRibbon` use modern range notation. Stylelint's `media-feature-range-notation` flags the
   former, which is why several older files carry standing lint errors. Migrating gap 2 closes
   this one too.
4. **Low chroma against saturated accents.** The neutrals carry roughly 2–8% chroma while
   `--accent-color` and `--support-color` are near-maximum saturation. Large neutral fields
   therefore read as flat grey next to them — most visible where `--neutral-300` fills the
   crossword's block cells, the biggest surface in the hero.
5. **Noise is still inline.** `NavBar` carries an `feTurbulence` data-URI at 0.15 opacity on
   scroll. `--bloom-*` covers coloured depth, but there is no shared noise token.
6. **Lowercase everywhere flattens hierarchy.** `text-transform: lowercase` appears 28 times across
   14 style files. It is a strong voice, but with body copy also lowercased there is little
   left to signal rank. Sentence-case body with lowercase headings and nav is being trialled on the
   v4 homepage before any site-wide change.
