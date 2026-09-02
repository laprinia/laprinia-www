import styled, { css } from "styled-components";
import { media } from "../../styles/breakpoints";

export type RowVariant = "feature" | "compact";

const rowVariants = {
  feature: css`
    gap: clamp(var(--space-4), 3vw, var(--space-10));

    ${media.lg} {
      grid-template-columns: minmax(0, 1fr) minmax(0, 240px);
    }
  `,
  compact: css`
    gap: clamp(var(--space-4), 2.5vw, var(--space-8));

    ${media.lg} {
      grid-template-columns: minmax(0, 1fr) minmax(0, 160px);
    }
  `,
} satisfies Record<RowVariant, ReturnType<typeof css>>;

export const Row = styled.li<{ $variant: RowVariant }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;

  ${({ $variant }) => rowVariants[$variant]}

  &[data-filtered="true"] {
    display: none;
  }
`;

export const Meta = styled.p`
  margin: 0 0 var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--section-muted);

  ${Row}[data-variant="compact"] & {
    margin-bottom: 0.35rem;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`;

export const Index = styled.span`
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  color: var(--section-muted);
`;

export const Title = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-light);
  font-size: clamp(1.75rem, 4vw, 3.5rem);
  line-height: 1;
  text-transform: lowercase;
  color: var(--accent-color);

  ${Row}[data-variant="compact"] & {
    font-weight: var(--font-weight-regular);
    font-size: clamp(1.25rem, 2.2vw, 1.875rem);
    line-height: 1.05;
  }
`;

export const TitleLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 4px;
  }
`;

export const Description = styled.p`
  margin: var(--space-3) 0 0;
  max-width: 56ch;
  font-size: var(--font-size-ui-md);
  line-height: 1.5;
  color: var(--neutral-700);

  ${Row}[data-variant="compact"] & {
    margin-top: 0.4rem;
    max-width: 60ch;
    font-size: var(--font-size-ui-sm);
  }
`;

export const Roles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: var(--space-4) 0 0;
  padding: 0;
  list-style: none;

  ${Row}[data-variant="compact"] & {
    gap: 0.4rem;
    margin-top: var(--space-3);
  }
`;

export const Shot = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background-color: var(--surface-tint);
  background-image: repeating-linear-gradient(
    135deg,
    rgb(var(--accent-rgb) / 14%) 0 6px,
    transparent 6px 14px
  );
  box-shadow: var(--lift-2);
  opacity: 0.5;
  transform: scale(1);
  transition:
    opacity 0.3s ease,
    transform 0.45s var(--ease-out);

  img {
    object-fit: cover;
  }

  ${Row}[data-active="true"] & {
    opacity: 1;
    transform: scale(1.04);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
