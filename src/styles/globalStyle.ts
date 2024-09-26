import { createGlobalStyle } from "styled-components";
import { lora, raleway, robotoFlex } from "./fonts";

const baseFontSizeDesktop = "18px";
const baseFontSizeTablet = "16px";
const baseFontSizePhone = "16px";

const remDesktop = (size: string) => `${parseFloat(size) / 18}rem`;
const remTablet = (size: string) => `${parseFloat(size) / 16}rem`;
const remPhone = (size: string) => `${parseFloat(size) / 16}rem`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-body: ${lora.style.fontFamily};
        --font-heading: ${raleway.style.fontFamily};
        --font-weight-lighter: 200;
        --font-weight-light: 400;
        --font-weight-regular: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        // Desktop Sizes
        --font-size-base-desktop: ${baseFontSizeDesktop};
        --font-size-heading1-desktop: ${remDesktop("22px")};
        --font-size-heading2-desktop: ${remDesktop("20px")};
        --font-size-body-desktop: ${remDesktop("18px")};

        // Tablet Sizes
        --font-size-base-tablet: ${baseFontSizeTablet};
        --font-size-heading1-tablet: ${remTablet("20px")};
        --font-size-heading2-tablet: ${remTablet("18px")};
        --font-size-body-tablet: ${remTablet("16px")};

        // Phone Sizes
        --font-size-base-phone: ${baseFontSizePhone};
        --font-size-heading1-phone: ${remPhone("20px")};
        --font-size-heading2-phone: ${remPhone("18px")};
        --font-size-body-phone: ${remPhone("16px")};

        --background-color: #F6F6F6;
        --accent-color: #0141D5;
        --darker-accent-color: #0136af;
        --way-darker-accent-color: #002986;

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
        font-family: var(--font-heading), sans-serif;
        //cursor: url('/cursor.png') 4 4, auto;  /* Hardcoded cursor size */
    }

    *:hover, *:active, *:focus {
        //cursor: url('/cursor.png') 4 4, auto;  /* Hardcoded cursor size */
    }
`;
