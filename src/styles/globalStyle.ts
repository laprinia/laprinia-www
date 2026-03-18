import { createGlobalStyle } from "styled-components";

const baseFontSizeXL = "22px";
const baseFontSizeDesktop = "18px";
const baseFontSizeTablet = "16px";
const baseFontSizePhone = "16px";

const remXL = (size: string) => `${parseFloat(size) / 16}rem`;
const remDesktop = (size: string) => `${parseFloat(size) / 16}rem`;
const remTablet = (size: string) => `${parseFloat(size) / 16}rem`;
const remPhone = (size: string) => `${parseFloat(size) / 16}rem`;

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
        --font-body: "Atkinson Hyperlegible Next Variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --font-heading: "Px Grotesk", sans-serif;
        --font-weight-lighter: 200;
        --font-weight-light: 300;
        --font-weight-regular: 400;
        --font-weight-semibold: 500;
        --font-weight-bold: 600;
        // XL Desktop Sizes
        --font-size-base-xl: ${baseFontSizeXL};
        --font-size-heading1-xl: ${remXL("26px")};
        --font-size-heading2-xl: ${remXL("80px")};
        --font-size-heading3-xl: ${remXL("80px")};
        --font-size-body-xl: ${remXL("22px")};
        // Desktop Sizes
        --font-size-base-desktop: ${baseFontSizeDesktop};
        --font-size-heading1-desktop: ${remDesktop("22px")};
        --font-size-heading2-desktop: ${remDesktop("60px")};
        --font-size-heading3-desktop: ${remDesktop("60px")};
        --font-size-body-desktop: ${remDesktop("18px")};

        // Tablet Sizes
        --font-size-base-tablet: ${baseFontSizeTablet};
        --font-size-heading1-tablet: ${remTablet("18px")};
        --font-size-heading2-tablet: ${remTablet("20px")};
        --font-size-heading3-tablet: ${remTablet("40px")};
        --font-size-body-tablet: ${remTablet("16px")};

        // Phone Sizes
        --font-size-base-phone: ${baseFontSizePhone};
        --font-size-heading1-phone: ${remPhone("18px")};
        --font-size-heading2-phone: ${remPhone("20px")};
        --font-size-heading3-phone: ${remPhone("40px")};
        --font-size-body-phone: ${remPhone("16px")};

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

        --border-radius: 4px;

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

    @media (max-width: 1024px) {
        body {
            font-size: var(--font-size-base-tablet);
        }
    }

    @media (max-width: 768px) {
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
    
`;
