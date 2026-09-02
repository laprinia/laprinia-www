import styled, { css } from "styled-components";

export type TagVariant = "outline" | "rect" | "muted";
export type TagSize = "xs" | "sm" | "md";

const fillOnHover = css`
  &:hover {
    background-color: var(--tag-border);
    color: var(--tag-on-ink, var(--background-color));
  }
`;

const variants = {
  outline: css`
    border-radius: var(--radius-pill);

    ${fillOnHover}
  `,
  rect: css`
    border-radius: 0;

    ${fillOnHover}
  `,
  muted: css`
    --tag-ink: var(--neutral-700);
    --tag-border: var(--neutral-600);

    border-radius: var(--radius-pill);
  `,
} satisfies Record<TagVariant, ReturnType<typeof css>>;

const sizes = {
  xs: css`
    --tag-pad-y: var(--space-1);
    --tag-pad-x: var(--space-2);

    font-size: 0.75rem;
  `,
  sm: css`
    --tag-pad-y: var(--space-1);
    --tag-pad-x: var(--space-3);

    font-size: var(--font-size-ui-xs);
  `,
  md: css`
    --tag-pad-y: var(--space-2);
    --tag-pad-x: var(--space-4);

    font-size: var(--font-size-ui-sm);
  `,
} satisfies Record<TagSize, ReturnType<typeof css>>;

export const StyledTag = styled.li<{
  $variant: TagVariant;
  $size: TagSize;
}>`
  --tag-ink: var(--pill-ink, var(--section-accent, var(--neutral-700)));
  --tag-border: var(--tag-ink);

  display: inline-block;
  margin: 0;
  padding: 0;
  border: 1px solid var(--tag-border);
  background-color: transparent;
  color: var(--tag-ink);
  font-family: var(--font-mono);
  font-weight: var(--font-weight-regular);
  line-height: 1.6;
  white-space: nowrap;
  transition:
    background-color 0.25s ease,
    color 0.25s ease;

  span {
    display: block;
    padding: var(--tag-pad-y) var(--tag-pad-x);
    color: inherit;
    transition: color 0.25s ease;
  }

  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}

  &[aria-pressed] {
    cursor: pointer;
  }

  &[aria-pressed="true"] {
    background-color: var(--tag-border);
    color: var(--tag-on-ink, var(--background-color));
  }

  &:focus-visible {
    outline: 2px solid var(--tag-ink);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    span {
      transition: none;
    }
  }
`;
