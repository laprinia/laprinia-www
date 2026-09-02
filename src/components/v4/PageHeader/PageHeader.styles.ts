import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + clamp(var(--space-10), 6vw, 4.5rem))
    clamp(var(--space-5), 4vw, var(--space-12)) 0;
`;

export const RibbonSlot = styled.div`
  margin-bottom: clamp(var(--space-4), 2vw, var(--space-6));
`;

export const Title = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-light);
  font-size: clamp(2rem, 5.5vw, 4.5rem);
  line-height: 0.95;
  letter-spacing: -0.01em;
  text-transform: lowercase;
  color: var(--accent-color);
`;

export const Intro = styled.p`
  margin: clamp(var(--space-5), 2.5vw, var(--space-8)) 0 0;
  max-width: 52ch;
  font-size: clamp(1rem, 1.2vw, 1.25rem);
  line-height: 1.55;
  color: var(--neutral-700);
`;
