import { createGlobalStyle } from "styled-components";
import { raleway, robotoFlex } from "./fonts";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-body: ${robotoFlex.style.fontFamily};
        --font-heading: ${raleway.style.fontFamily};
        --background-color: #E5E5E5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: var(--background-color);
        font-family: var(--font-body),sans-serif;
    }
`;
