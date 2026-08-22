import styled from "styled-components";

export const HeadingBlock = styled.header`
  --heading-index-width: 3rem;
  --heading-index-gap: var(--space-6);
  --heading-index-align: left;

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-2);

  @media (min-width: 700px) {
    grid-template-columns: var(--heading-index-width) minmax(0, 1fr);
    column-gap: var(--heading-index-gap);
  }
`;

export const HeadingIndex = styled.span`
  color: var(--section-ink);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  opacity: 0.6;

  @media (min-width: 700px) {
    padding-top: var(--space-2);
    text-align: var(--heading-index-align);
  }
`;

export const HeadingText = styled.h2`
  min-width: 0;
  color: var(--section-ink);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--font-size-title);
  line-height: 1;
  text-transform: lowercase;
  text-wrap: balance;

  &:only-child {
    grid-column: 1 / -1;
  }
`;
