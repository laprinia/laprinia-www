import styled from "styled-components";

export const List = styled.ul`
  --row-index-width: 1.5rem;
  --row-thumb-width: clamp(4.5rem, 20vw, 6rem);
  --row-padding: clamp(var(--space-6), 5vw, var(--space-9));
  --row-gap-x: var(--space-3);
  --pill-ink: var(--section-ink);

  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid var(--section-ink);

  @media (min-width: 700px) {
    --row-index-width: 2rem;
    --row-thumb-width: clamp(8rem, 18vw, 13rem);
    --row-padding: clamp(var(--space-8), 3.5vw, var(--space-12));
    --row-gap-x: clamp(var(--space-7), 3.5vw, var(--space-12));
  }
`;

export const Row = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: var(--row-index-width) minmax(0, 1fr) var(
      --row-thumb-width
    );
  grid-template-areas: "index content thumb";
  align-items: start;
  gap: var(--row-gap-x);
  padding: var(--row-padding) 0;
  border-top: 1px solid var(--section-ink);

  @media (min-width: 700px) {
    align-items: stretch;
  }
`;

export const RowIndex = styled.span`
  grid-area: index;
  padding-top: var(--space-1);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  opacity: 0.6;

  @media (min-width: 700px) {
    align-self: center;
    padding-top: 0;
  }
`;

export const Body = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;

  @media (min-width: 700px) {
    justify-content: center;
    gap: var(--space-4);
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  min-width: 0;
`;

export const Title = styled.h3`
  min-width: 0;
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: lowercase;
  line-height: 1;
  font-size: var(--font-size-ui-xl);

  @media (min-width: 700px) {
    line-height: 0.95;
    font-size: var(--font-size-title);
  }
`;

export const TitleLink = styled.a`
  color: inherit;
  text-decoration: none;
  text-underline-offset: 0.22em;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  ${Row}:hover & {
    text-decoration: underline;
  }

  &:focus-visible {
    text-decoration: underline;
    outline: 2px solid var(--section-ink);
    outline-offset: 4px;
  }
`;

export const Cue = styled.span`
  flex-shrink: 0;
  font-size: var(--font-size-ui-md);
  line-height: 1;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  ${Row}:hover & {
    transform: translateX(0.2rem);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${Row}:hover & {
      transform: none;
    }
  }
`;

export const Description = styled.p`
  max-width: 52ch;
  font-size: var(--font-size-ui-sm);
  line-height: 1.45;
  opacity: 0.85;

  @media (min-width: 700px) {
    font-size: var(--font-size-body);
    line-height: 1.5;
  }
`;

export const Roles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: var(--space-2) 0 0;
  padding: 0;
  list-style: none;

  @media (min-width: 700px) {
    margin-top: var(--space-4);
  }
`;

export const Thumb = styled.div`
  grid-area: thumb;
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--border-radius);
  background-color: var(--section-ink);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  ${Row}:hover & img {
    transform: scale(1.05);
  }

  @media (min-width: 700px) {
    height: 100%;
    aspect-ratio: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }

    ${Row}:hover & img {
      transform: none;
    }
  }
`;
