import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Px Grotesk";
        src: url("/fonts/Px-Grotesk-Light.woff") format("woff");
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Px Grotesk";
        src: url("/fonts/Px-Grotesk-Regular.woff") format("woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Px Grotesk";
        src: url("/fonts/Px-Grotesk-Bold.woff") format("woff");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    :root {
        /* ============================================================
           TYPEFACES
           ============================================================ */
        --font-body: "Atkinson Hyperlegible Next Variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --font-heading: "Px Grotesk", sans-serif;
        --font-mono: "IBM Plex Mono", monospace;

        --font-weight-light: 300;
        --font-weight-regular: 400;
        --font-weight-bold: 700;

        /* ============================================================
           FLUID TYPE SCALE
           Named by role. clamp(min, fluid, max) — edit any one line to
           resize every component using it, at every breakpoint.
           ============================================================ */

        /* Hero name and section headings. The loudest type on the page. */
        --font-size-display: clamp(2rem, 5vw, 5.5rem);

        /* Project card headings. */
        --font-size-title: clamp(1.6rem, 2.6vw, 2.25rem);

        /* Small uppercase labels sitting above or beside larger type. */
        --font-size-eyebrow: clamp(0.7rem, 1vw, 1.1rem);

        /* Primary navigation links. */
        --font-size-nav: clamp(1.125rem, 1.95vw, 2rem);

        /* Paragraph copy. 16px up to ~1000px, then grows to 20px by 1600px. */
        --font-size-body: clamp(1rem, 0.583rem + 0.667vw, 1.25rem);

        /* Controls: buttons and pills. One ramp shared by both, so a
           medium pill and a small button are deliberately the same size. */
        --font-size-ui-xs: 0.8125rem;
        --font-size-ui-sm: 0.9375rem;
        --font-size-ui-md: 1rem;
        --font-size-ui-lg: 1.125rem;
        --font-size-ui-xl: 1.25rem;

        /* Outline width for hollowed display type (-webkit-text-stroke). */
        --text-stroke-width: max(0.75px, 0.025em);

        /* ============================================================
           COLOUR
           ============================================================ */
        --background-color: var(--neutral-100);
        --background-rgb: 241 239 233;
        --foreground-color: var(--neutral-800);
        --accent-color: #0141D5;
        --accent-rgb: 1 65 213;
        --darker-accent-color: #0136af;
        --way-darker-accent-color: #002986;
        --support-color: #DAFE71;

        --neutral-000: #FFFFFF;
        --neutral-100: #F1EFE9;
        --neutral-200: #E8E6DF;
        --neutral-300: #D4D1C8;
        --neutral-400: #B5B1A6;
        --neutral-500: #918C80;
        --neutral-600: #5F5A49;
        --neutral-700: #48453D;
        --neutral-800: #2A2923;
        --neutral-900: #000000;

        /* ============================================================
           SEMANTIC SURFACE
           A v2 section reads these rather than the raw palette, so a
           surface can be recoloured by redefining them on its root.
           These are the defaults; a section that wants a different
           treatment overrides only what differs (the work and
           contact grounds set --section-ink to the accent, for example),
           and NotebookSection sets --section-ink per notebook at runtime.
           ============================================================ */
        --section-ink: var(--foreground-color);
        --section-accent: var(--accent-color);
        --section-muted: var(--neutral-600);
        --section-surface: var(--background-color);

        /* The tinted surface used for cards, chips and media wells. */
        --surface-tint: var(--neutral-200);

        /* ============================================================
           SPACING
           4px basis. Step n == n * 4px.

           Every gap, margin and padding comes from this scale, including
           the bounds inside clamp(). Never write a literal rem value for
           spacing: pick the nearest step instead. The step number is the
           multiplier, so --space-6 is 6 * 4px = 24px.

           Reach for the smallest step that still separates two things.
           Closer spacing reads as "these belong together", so the jump
           between two groups should be visibly larger than the spacing
           inside either one.

           INSIDE ONE ELEMENT
           --space-1    4px  hairline: icon to its label, chip padding
           --space-2    8px  tightly bound pair: index to title, tag rows,
                             icon to text inside a link
           --space-3   12px  within a single text block: heading to body

           BETWEEN ELEMENTS IN A COMPONENT
           --space-4   16px  grouped siblings: body copy to a tag row
           --space-5   20px  sub-groups inside one component
           --space-6   24px  compact component padding, block to block

           COMPONENT LEVEL
           --space-7   28px  roomier component padding
           --space-8   32px  card padding, gap between sibling cards
           --space-9   36px  wide-viewport card padding
           --space-10  40px  list row rhythm, stacked card gaps
           --space-12  48px  major blocks inside one section

           SECTION LEVEL
           --space-14  56px  section separation, tight viewports
           --space-16  64px  section separation, mobile
           --space-20  80px  section separation, desktop
           --space-24  96px  page-level breaks, large screens

           For fluid spacing, clamp between two steps rather than
           inventing a value: clamp(var(--space-6), 3vw, var(--space-12)).
           ============================================================ */
        --space-1: 0.25rem;   /* 4px  */
        --space-2: 0.5rem;    /* 8px  */
        --space-3: 0.75rem;   /* 12px */
        --space-4: 1rem;      /* 16px */
        --space-5: 1.25rem;   /* 20px */
        --space-6: 1.5rem;    /* 24px */
        --space-7: 1.75rem;   /* 28px */
        --space-8: 2rem;      /* 32px */
        --space-9: 2.25rem;   /* 36px */
        --space-10: 2.5rem;   /* 40px */
        --space-12: 3rem;     /* 48px */
        --space-14: 3.5rem;   /* 56px */
        --space-16: 4rem;     /* 64px */
        --space-18: 4.5rem;   /* 72px */
        --space-20: 5rem;     /* 80px */
        --space-24: 6rem;     /* 96px */
        --space-28: 7rem;     /* 112px */

        /* ============================================================
           RADIUS AND LAYOUT
           ============================================================ */
        --radius-sm: 4px;
        --border-radius: 8px;
        --radius-card: 1rem;
        --radius-pill: 999px;
        --nav-height: 4rem;

        /* ============================================================
           ELEVATION
           Tinted with --neutral-700, never pure black: a black shadow
           over the warm grounds reads as dirt. Reach for the smallest
           step that still separates two planes.
           ============================================================ */
        --lift-tint: 72 69 61;
        --lift-1: 0 2px 6px rgb(var(--lift-tint) / 10%);
        --lift-2: 0 6px 14px rgb(var(--lift-tint) / 12%);
        --lift-3: 0 14px 28px rgb(var(--lift-tint) / 16%);
        --lift-4: 0 28px 56px rgb(var(--lift-tint) / 20%);

        /* ============================================================
           BLOOM
           Depth without bevels. Colour only: apply as a large blurred
           shape behind content with filter: blur(70px) and
           mix-blend-mode: multiply, plus pointer-events: none.
           ============================================================ */
        --bloom-lime: #DAFE71;
        --bloom-blue: #0141D5;

        /* ============================================================
           MOTION
           --ease-out is the house curve. Fast for colour and opacity,
           mid for transforms and shadows, slow for entrances.
           Every use needs a prefers-reduced-motion escape.
           ============================================================ */
        --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
        --dur-fast: 0.18s;
        --dur-mid: 0.35s;
        --dur-slow: 0.6s;

        /* ============================================================
           THIRD PARTY
           ============================================================ */
        --toastify-color-success: #0141D5;
        --toastify-color-error: #0141D5;
        --toastify-text-color-success: #F6F6F6;
        --toastify-text-color-error: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (width >= 1800px) {
        :root {
            --nav-height: 4.5rem;
        }
    }

    @media (width <= 1024px) {
        :root {
            --nav-height: 3.5rem;
        }
    }

    @media (width <= 768px) {
        :root {
            --nav-height: 3rem;
        }
    }

    body {
        background-color: var(--background-color);
        font-family: var(--font-body);
        font-size: var(--font-size-body);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
        font-weight: var(--font-weight-light);
    }
`;
