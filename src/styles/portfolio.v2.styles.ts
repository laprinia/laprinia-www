import styled from "styled-components";

export const PortfolioGround = styled.div`
  --section-ink: var(--accent-color);
  --section-surface: var(--background-color);

  min-height: 100svh;
  padding: calc(var(--nav-height) + clamp(2rem, 5vw, 4rem))
    clamp(1.5rem, 5vw, 5rem) clamp(5rem, 10vw, 9rem);
  background-color: var(--section-surface);
  box-sizing: border-box;
`;

