import { createGlobalStyle } from "styled-components";
import { raleway, robotoFlex } from "./fonts";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-body: ${robotoFlex.style.fontFamily};
        --font-heading: ${raleway.style.fontFamily};
        --background-color: #F6F6F6;
        --accent-color: #0141D5;
        --cursor-size: 16;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: var(--background-color);
        font-family: var(--font-body),sans-serif;
        cursor: url('/cursor.png') var(--cursor-size) var(--cursor-size), auto;
    }
    *:hover, *:active, *:focus {
        cursor: url('/cursor.png') var(--cursor-size) var(--cursor-size), auto;
    }
`;
