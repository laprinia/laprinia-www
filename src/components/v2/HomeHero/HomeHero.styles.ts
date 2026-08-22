import styled, { keyframes } from "styled-components";

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(0.2rem); }
`;

export const HeroSection = styled.section`
  --hero-pad-block: clamp(var(--space-4), 2vw, var(--space-6));
  --board-h: calc(100svh - var(--nav-height) - var(--hero-pad-block) * 2);

  display: flex;
  flex-direction: column;
  gap: var(--hero-pad-block);
  min-height: 100svh;
  padding: calc(var(--nav-height) + var(--hero-pad-block))
    clamp(var(--space-4), 4vw, var(--space-10)) var(--hero-pad-block);
  padding-bottom: clamp(var(--space-12), 12vw, var(--space-20));
  box-sizing: border-box;
  background-color: var(--background-color);

  @media (min-width: 1230px) {
    height: 100svh;
    padding-bottom: var(--hero-pad-block);
  }
`;

export const HeroCtaSlot = styled.div`
  --button-ink: var(--accent-color);
  --button-on-ink: var(--background-color);

  display: none;
  justify-content: flex-end;

  @media (min-width: 1230px) {
    display: flex;
  }

  svg {
    animation: ${bob} 2.4s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
`;
