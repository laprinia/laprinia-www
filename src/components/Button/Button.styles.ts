import styled, { css } from "styled-components";

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

const hoverInk = css`
  background-color: var(--neutral-700);
  color: var(--support-color);
`;

const variants = {
  solid: css`
    background-color: var(--button-ink, var(--accent-color));
    color: var(--button-on-ink, var(--neutral-000));
    border-color: transparent;

    &:hover:not(:disabled) {
      ${hoverInk}
    }
  `,
  outline: css`
    background-color: transparent;
    color: var(--button-ink, var(--accent-color));
    border-color: var(--button-ink, var(--accent-color));

    &:hover:not(:disabled) {
      background-color: var(--button-ink, var(--accent-color));
      color: var(--button-on-ink, var(--neutral-000));
    }
  `,
  ghost: css`
    background-color: transparent;
    color: inherit;
    border-color: transparent;
    text-transform: lowercase;

    &:hover:not(:disabled) {
      ${hoverInk}
      text-decoration: underline;
    }
  `,
} satisfies Record<ButtonVariant, ReturnType<typeof css>>;

const sizes = {
  sm: css`
    min-height: 2rem;
    padding: 0 var(--space-2);
    font-size: var(--font-size-ui-sm);
    gap: var(--space-2);
  `,
  md: css`
    min-height: 2.25rem;
    padding: 0 var(--space-4);
    font-size: var(--font-size-ui-md);
    gap: var(--space-2);
  `,
  lg: css`
    min-height: 2.75rem;
    padding: 0 var(--space-5);
    font-size: var(--font-size-ui-lg);
    gap: var(--space-2);
  `,
  xl: css`
    min-height: 3.5rem;
    padding: 0 var(--space-6);
    font-size: var(--font-size-ui-xl);
    gap: var(--space-3);
  `,
} satisfies Record<ButtonSize, ReturnType<typeof css>>;

const iconOnlySizes = {
  sm: css`
    width: 2rem;
    padding: 0;
  `,
  md: css`
    width: 2.25rem;
    padding: 0;
  `,
  lg: css`
    width: 2.75rem;
    padding: 0;
  `,
  xl: css`
    width: 3.5rem;
    padding: 0;
  `,
} satisfies Record<ButtonSize, ReturnType<typeof css>>;

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $iconOnly: boolean;
  $fullWidth: boolean;
  $pill: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1.5px solid transparent;
  border-radius: ${({ $pill }) =>
    $pill ? "var(--radius-pill)" : "var(--border-radius)"};
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  ${({ $size }) => sizes[$size]}
  ${({ $variant }) => variants[$variant]}
  ${({ $iconOnly, $size }) =>
    $iconOnly &&
    css`
      --button-icon-size: 1.6em;

      ${iconOnlySizes[$size]}
    `}
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &:focus-visible {
    outline: 2px solid var(--way-darker-accent-color);
    outline-offset: 3px;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled,
  &[aria-disabled="true"],
  &[data-loading="true"] {
    opacity: 0.5;
    pointer-events: none;
  }

  @media (hover: none) {
    &:hover {
      background-color: initial;
      color: inherit;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active:not(:disabled) {
      transform: none;
    }
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    width: var(--button-icon-size, 1.15em);
    height: var(--button-icon-size, 1.15em);
  }
`;
