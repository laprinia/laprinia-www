import styled from "styled-components";

export const PortfolioGround = styled.div`
  --section-ink: var(--accent-color);
  --section-surface: var(--background-color);

  min-height: 100svh;
  padding: calc(var(--nav-height) + clamp(var(--space-8), 5vw, var(--space-16)))
    clamp(var(--space-6), 5vw, var(--space-20))
    clamp(var(--space-20), 10vw, var(--space-24));
  background-color: var(--section-surface);
  box-sizing: border-box;
`;

