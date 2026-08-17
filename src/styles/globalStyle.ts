import { createGlobalStyle } from "styled-components";

const baseFontSizeXL = "22px";
const baseFontSizeDesktop = "18px";
const baseFontSizeTablet = "16px";
const baseFontSizePhone = "16px";

const rem = (px: string) => `${parseFloat(px) / 16}rem`;

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

        --font-weight-lighter: 200;
        --font-weight-light: 300;
        --font-weight-regular: 400;
        --font-weight-semibold: 500;
        --font-weight-bold: 600;

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

        /* Paragraph copy. */
        --font-size-body: 1rem;

        /* Controls: buttons and pills. One ramp shared by both, so a
           medium pill and a small button are deliberately the same size. */
        --font-size-ui-xs: 0.75rem;
        --font-size-ui-sm: 0.875rem;
        --font-size-ui-md: 1rem;
        --font-size-ui-lg: 1.125rem;
        --font-size-ui-xl: 1.25rem;

        /* Outline width for hollowed display type (-webkit-text-stroke). */
        --text-stroke-width: max(0.75px, 0.025em);

        /* ============================================================
           LEGACY BREAKPOINT TYPE SCALE
           Used by the live pages only. Superseded by the fluid scale
           above; remove once the v2 redesign replaces those pages.
           ============================================================ */
        --font-size-base-xl: ${baseFontSizeXL};
        --font-size-heading1-xl: ${rem("26px")};
        --font-size-heading2-xl: ${rem("80px")};
        --font-size-heading3-xl: ${rem("80px")};
        --font-size-body-xl: ${rem("22px")};

        --font-size-base-desktop: ${baseFontSizeDesktop};
        --font-size-heading1-desktop: ${rem("22px")};
        --font-size-heading2-desktop: ${rem("60px")};
        --font-size-heading3-desktop: ${rem("60px")};
        --font-size-body-desktop: ${rem("18px")};

        --font-size-base-tablet: ${baseFontSizeTablet};
        --font-size-heading1-tablet: ${rem("18px")};
        --font-size-heading2-tablet: ${rem("20px")};
        --font-size-heading3-tablet: ${rem("40px")};
        --font-size-body-tablet: ${rem("16px")};

        --font-size-base-phone: ${baseFontSizePhone};
        --font-size-heading1-phone: ${rem("18px")};
        --font-size-heading2-phone: ${rem("20px")};
        --font-size-heading3-phone: ${rem("40px")};
        --font-size-body-phone: ${rem("16px")};

        /* ============================================================
           COLOUR
           ============================================================ */
        --background-color: var(--neutral-100);
        --accent-color: #0141D5;
        --darker-accent-color: #0136af;
        --way-darker-accent-color: #002986;
        --support-color: #DAFE71;

        --neutral-000: #FFFFFF;
        --neutral-100: #F5F4F0;
        --neutral-200: #E8E6DF;
        --neutral-300: #D4D1C8;
        --neutral-400: #B5B1A6;
        --neutral-500: #918C80;
        --neutral-600: #6B675C;
        --neutral-700: #48453D;
        --neutral-800: #2A2923;
        --neutral-900: #000000;

        /* ============================================================
           RADIUS AND LAYOUT
           ============================================================ */
        --border-radius: 8px;
        --radius-pill: 999px;
        --nav-height: 4rem;

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

    body {
        font-size: var(--font-size-base-desktop);
    }

    @media (min-width: 1800px) {
        :root {
            --nav-height: 4.5rem;
        }
    }

    @media (max-width: 1024px) {
        :root {
            --nav-height: 3.5rem;
        }
        body {
            font-size: var(--font-size-base-tablet);
        }
    }

    @media (max-width: 768px) {
        :root {
            --nav-height: 3rem;
        }
        body {
            font-size: var(--font-size-base-phone);
        }
    }

    body {
        background-color: var(--background-color);
        font-family: var(--font-body);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
        font-weight: var(--font-weight-light);
    }

    @media (hover: hover) {
        * {
            cursor: none !important;
        }
    }
`;
