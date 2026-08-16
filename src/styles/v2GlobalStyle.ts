import { createGlobalStyle } from "styled-components";

export const V2GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;
