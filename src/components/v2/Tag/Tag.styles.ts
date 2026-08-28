import styled, { css } from "styled-components";

export type TagVariant = "outline" | "rect";
export type TagSize = "sm" | "md";

const radii = {
  outline: "var(--radius-pill)",
  rect: "0",
} satisfies Record<TagVariant, string>;

const sizes = {
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

  display: inline-block;
  margin: 0;
  border: 1px solid var(--tag-ink);
  color: var(--tag-ink);
  font-family: var(--font-mono);
  font-weight: var(--font-weight-regular);
  line-height: 1.6;
  white-space: nowrap;
  transition: background-color 0.25s ease;

  span {
    display: block;
    padding: var(--tag-pad-y) var(--tag-pad-x);
    color: inherit;
    transition: color 0.25s ease;
  }

  border-radius: ${({ $variant }) => radii[$variant]};

  ${({ $size }) => sizes[$size]}

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    span {
      transition: none;
    }
  }
`;
