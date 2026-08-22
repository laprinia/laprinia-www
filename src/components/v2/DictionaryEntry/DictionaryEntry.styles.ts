import styled from "styled-components";

export const Entry = styled.article`
  --entry-surface: var(--neutral-200);
  --entry-padding: 0.9rem 1rem 1.05rem;
  --pill-ink: var(--section-ink);

  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "thumb"
    "content";
  overflow: hidden;
  border-radius: var(--radius-card);
  background-color: var(--entry-surface);

  @media (min-width: 800px) {
    --entry-padding: clamp(1.5rem, 3vw, 2.5rem);

    grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
    grid-template-areas: "content thumb";
    min-height: clamp(16rem, 26vw, 21rem);
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
  padding: var(--entry-padding);

  @media (min-width: 800px) {
    gap: var(--space-3);
  }
`;

export const EntryIndex = styled.span`
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  opacity: 0.75;
`;

export const Head = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  min-width: 0;

  @media (min-width: 800px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Term = styled.h3`
  min-width: 0;
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: lowercase;
  line-height: 1;
  font-size: var(--font-size-ui-xl);
  text-wrap: balance;

  @media (min-width: 800px) {
    line-height: 0.95;
    font-size: var(--font-size-title);
  }
`;

export const TermLink = styled.a`
  display: inline;
  color: inherit;
  text-decoration: none;
  background-image: linear-gradient(var(--support-color), var(--support-color));
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

  ${Entry}:hover & {
    background-size: 100% 0.42em;
  }

  &:focus-visible {
    background-size: 100% 0.42em;
    outline: 2px solid var(--section-ink);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Definition = styled.p`
  margin-bottom: var(--space-1);
  max-width: 48ch;
  font-size: var(--font-size-ui-sm);
  line-height: 1.45;

  @media (min-width: 800px) {
    margin-bottom: var(--space-2);
    font-size: var(--font-size-body);
    line-height: 1.5;
  }
`;

export const MetaRule = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2) var(--space-4);
  margin-top: auto;
  padding-top: var(--space-2);
  border-top: 1px solid var(--neutral-300);

  @media (min-width: 800px) {
    padding-top: var(--space-4);
  }
`;

export const Roles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
`;

export const CaseCue = styled.span`
  color: var(--accent-color);
  font-size: var(--font-size-ui-md);
`;

export const CueText = styled.span`
  display: none;

  @media (min-width: 800px) {
    display: inline;
    font-size: var(--font-size-ui-xs);
  }
`;

export const MetaLink = styled.a`
  position: relative;
  z-index: 1;
  color: inherit;
  opacity: 0.7;
  text-underline-offset: 0.2em;

  &:hover,
  &:focus-visible {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--section-ink);
    outline-offset: 3px;
  }
`;

export const Thumb = styled.div`
  grid-area: thumb;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--neutral-300);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  ${Entry}:hover & img {
    transform: scale(1.04);
  }

  @media (min-width: 800px) {
    height: 100%;
    aspect-ratio: auto;
    border-left: 1px solid var(--neutral-300);
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
