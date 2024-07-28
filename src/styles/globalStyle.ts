import { createGlobalStyle } from "styled-components";
import { raleway, robotoFlex } from "./fonts";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-body: ${robotoFlex.style.fontFamily};
        --font-heading: ${raleway.style.fontFamily};
        --font-weight-lighter: 200;
        --font-weight-light: 400;
        --font-weight-regular: 500;
        --font-weight-bold: 700;
        --font-size-XL: 5rem;
        --font-size-L: 1.25rem;
        --font-size-M: 1.0rem;
        --font-size-S: 0.75rem;
        --background-color: #F6F6F6;
        --accent-color: #0141D5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background-color);
        font-family: var(--font-body),sans-serif;
        cursor: url('/cursor.png') 4 4, auto;  /* Hardcoded cursor size */
    }

    *:hover, *:active, *:focus {
        cursor: url('/cursor.png') 4 4, auto;  /* Hardcoded cursor size */
    }
`;
