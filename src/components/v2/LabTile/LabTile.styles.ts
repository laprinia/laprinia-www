import styled from "styled-components";

export const TileThumb = styled.span`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--border-radius);
  background-color: var(--neutral-200);
`;

export const TileMotion = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TileStill = styled.span`
  position: absolute;
  inset: 0;
  transition: opacity 0.35s ease;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TileName = styled.span`
  display: block;
  margin-top: 0.6rem;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-ui-sm);
  text-transform: lowercase;
  line-height: 1.2;
`;

export const TileMeta = styled.span`
  display: block;
  margin-top: 0.15rem;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  line-height: 1.4;
  opacity: 0.7;
`;

export const TileLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;

  &:hover ${TileStill},
  &:focus-visible ${TileStill} {
    opacity: 0;
  }

  &:focus-visible {
    outline: 2px solid var(--section-ink);
    outline-offset: 4px;
    border-radius: var(--border-radius);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover ${TileStill},
    &:focus-visible ${TileStill} {
      opacity: 1;
    }
  }
`;
