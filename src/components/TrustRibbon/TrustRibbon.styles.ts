import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-33.3333%);
  }
`;

export const Banner = styled.div`
  --ribbon-height: clamp(var(--space-14), 8vw, var(--space-20));
  --ribbon-logo-height: var(--space-6);

  width: 100%;
  background-color: var(--background-color);
  color: var(--ribbon-ink, var(--way-darker-accent-color));

  &[data-bordered="true"] {
    border-top: 1px solid var(--neutral-300);
    border-bottom: 1px solid var(--neutral-300);
  }

  &[data-variant="inline"] {
    --ribbon-height: auto;
    --ribbon-logo-height: var(--space-5);

    background-color: transparent;
  }

  @media (width >= 700px) {
    --ribbon-logo-height: var(--space-8);

    &[data-variant="inline"] {
      --ribbon-logo-height: var(--space-5);
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  height: var(--ribbon-height);
  padding-inline: clamp(var(--space-4), 4vw, var(--space-10));

  [data-variant="inline"] & {
    gap: var(--space-6);
    padding-inline: 0;
  }
`;

export const Label = styled.p`
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  line-height: 1;
  text-transform: lowercase;
  white-space: nowrap;
  opacity: 0.75;
`;

export const Viewport = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 6%,
    #000 94%,
    transparent
  );
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${marquee} var(--ribbon-speed, 48s) linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Group = styled.ul`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: clamp(var(--space-8), 5vw, var(--space-16));
  margin: 0;
  padding-inline: clamp(var(--space-6), 3vw, var(--space-10));
  list-style: none;

  @media (prefers-reduced-motion: reduce) {
    &[aria-hidden="true"] {
      display: none;
    }
  }
`;

export const LogoItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    display: block;
    width: auto;
    height: calc(var(--ribbon-logo-height) * var(--logo-scale, 1));
  }

  text {
    font-family: var(--font-heading);
    font-weight: 700;
  }
`;
