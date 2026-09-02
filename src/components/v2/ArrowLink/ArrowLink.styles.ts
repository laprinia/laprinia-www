import styled, { css } from "styled-components";

export type ArrowLinkSize = "sm" | "md";

const sizes = {
  sm: css`
    font-size: var(--font-size-ui-sm);
  `,
  md: css`
    font-size: var(--font-size-ui-md);
  `,
} satisfies Record<ArrowLinkSize, ReturnType<typeof css>>;

export const StyledArrowLink = styled.a<{
  $external: boolean;
  $size: ArrowLinkSize;
}>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--link-ink, var(--section-accent, var(--accent-color)));
  font-family: var(--font-heading);
  text-transform: lowercase;
  text-decoration: none;
  text-underline-offset: 0.25em;

  ${({ $size }) => sizes[$size]}

  &:hover {
    text-decoration: underline;
  }

  svg {
    flex-shrink: 0;
    transition: transform var(--dur-mid) var(--ease-out);
  }

  &:hover svg,
  &:focus-visible svg {
    transform: ${({ $external }) =>
      $external ? "translate(0.15rem, -0.15rem)" : "translateX(0.25rem)"};
  }

  &:focus-visible {
    outline: 2px solid
      var(--link-ink, var(--section-accent, var(--accent-color)));
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }

    &:hover svg,
    &:focus-visible svg {
      transform: none;
    }
  }
`;
