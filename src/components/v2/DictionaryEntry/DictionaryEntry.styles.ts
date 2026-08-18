import styled from "styled-components";

export const Entry = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  column-gap: 1rem;
  row-gap: 0.5rem;
  padding: 2.5rem 0.75rem 2.5rem 0;
  border-top: 1px solid var(--section-ink);

  @media (min-width: 900px) {
    grid-template-columns: 2.5rem minmax(0, 13rem) minmax(0, 1fr) auto;
    column-gap: 2rem;
    align-items: start;
  }
`;

export const Letter = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--neutral-700);
  color: var(--support-color);
  border: 1px solid var(--support-color);
  font-family: var(--font-heading);
  font-size: var(--font-size-ui-xs);
  font-weight: var(--font-weight-bold);
`;

export const Term = styled.h3`
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: lowercase;
  line-height: 0.9;
  font-size: var(--font-size-title);
`;

export const TermLink = styled.a`
  display: inline;
  color: inherit;
  text-decoration: none;
  background-image: linear-gradient(
    var(--support-color),
    var(--support-color)
  );
  background-repeat: no-repeat;
  background-position: 0 88%;
  background-size: 0% 0.42em;
  box-decoration-break: clone;
  transition: background-size 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  /* stylelint-disable property-no-vendor-prefix -- Safari needs the prefix */
  -webkit-box-decoration-break: clone;
  /* stylelint-enable property-no-vendor-prefix */

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  ${Entry}:hover &,
  &:focus-visible {
    background-size: 100% 0.42em;
  }

  &:focus-visible {
    outline: 2px solid var(--section-ink);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Identity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  grid-column: 2;

  @media (min-width: 900px) {
    grid-column: auto;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  grid-column: 2;

  @media (min-width: 900px) {
    grid-column: auto;
  }
`;

export const Definition = styled.p`
  max-width: 46ch;
  font-size: var(--font-size-body);
  line-height: 1.5;
`;

export const Roles = styled.ul`
  --pill-ink: var(--section-ink);

  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Meta = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  opacity: 0.75;
`;

export const MetaLink = styled.a`
  position: relative;
  z-index: 1;
  color: inherit;
  text-underline-offset: 0.2em;

  &:focus-visible {
    outline: 2px solid var(--section-ink);
    outline-offset: 3px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  grid-column: 2;
  width: 100%;
  max-width: 12rem;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--border-radius);
  background-color: var(--neutral-200);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  ${Entry}:hover & img {
    transform: scale(1.05);
  }

  @media (min-width: 900px) {
    grid-column: auto;
    width: 11rem;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }

    ${Entry}:hover & img {
      transform: none;
    }
  }
`;
