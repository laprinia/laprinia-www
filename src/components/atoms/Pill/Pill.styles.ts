import styled, { css } from "styled-components";

export type PillVariant = "filled" | "outline" | "muted";
export type PillSize = "sm" | "md";

const variants = {
  filled: css`
    background-color: var(--pill-surface, var(--neutral-700));
    color: var(--pill-ink, var(--support-color));
    border-color: transparent;
  `,
  outline: css`
    background-color: transparent;
    color: var(--pill-ink, var(--neutral-700));
    border-color: var(--pill-ink, var(--neutral-700));
  `,
  muted: css`
    background-color: var(--pill-surface, var(--background-color));
    color: var(--pill-ink, var(--neutral-900));
    border-color: transparent;
  `,
} satisfies Record<PillVariant, ReturnType<typeof css>>;

const sizes = {
  sm: css`
    padding: 0.2rem 0.6rem;
    font-size: var(--font-size-ui-xs);
  `,
  md: css`
    padding: 0.25rem 0.7rem;
    font-size: var(--font-size-ui-sm);
  `,
} satisfies Record<PillSize, ReturnType<typeof css>>;

export const StyledPill = styled.span<{
  $variant: PillVariant;
  $size: PillSize;
}>`
  display: inline-flex;
  align-items: center;
  margin: 0;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-weight: var(--font-weight-regular);
  line-height: 1.6;
  white-space: nowrap;

  ${({ $size }) => sizes[$size]}
  ${({ $variant }) => variants[$variant]}
`;
