import { createGlobalStyle } from "styled-components";
import { lora, raleway } from "./fonts";

const baseFontSizeXL = "22px";
const baseFontSizeDesktop = "18px";
const baseFontSizeTablet = "16px";
const baseFontSizePhone = "16px";

const remXL = (size: string) => `${parseFloat(size) / 16}rem`;
const remDesktop = (size: string) => `${parseFloat(size) / 16}rem`;
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
        --font-size-heading1-phone: ${remPhone("18x")};
        --font-size-heading2-phone: ${remPhone("20px")};
        --font-size-heading3-phone: ${remPhone("40px")};
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
        @media (min-width: 900px) {
            *:hover, *:active, *:focus {
                cursor:none;
            }
            cursor:none;
        }
      
        
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
    }
    
`;
