import styled from "styled-components";
import { Section } from "../shared.styles";
import { media } from "../../../styles/breakpoints";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-10), 5vw, var(--space-16));
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Row = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(var(--space-4), 3vw, var(--space-10));
  align-items: center;

  ${media.md} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 240px);
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
`;

export const Roles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: var(--space-4) 0 0;
  padding: 0;
  list-style: none;
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
  transform: rotate(var(--shot-tilt, 0deg));
  transition:
    opacity 0.3s ease,
    transform 0.45s var(--ease-out);

  img {
    object-fit: cover;
  }

  ${Row}[data-active="true"] & {
    opacity: 1;
    transform: rotate(0deg) scale(1.04);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const More = styled.li`
  display: flex;
  justify-content: flex-end;
`;

export const WorkSection = styled(Section)`
  padding-block: clamp(var(--space-12), 6vw, var(--space-20));
`;
