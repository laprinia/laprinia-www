import styled from "styled-components";

export const FooterShell = styled.footer`
  --footer-ink: var(--neutral-000);

  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem)
    clamp(2rem, 4vw, 3rem);
  color: var(--footer-ink);
  background-color: var(--accent-color);

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > :first-child {
    margin-bottom: clamp(1.25rem, 3vw, 2.5rem);
  }
`;

export const Wink = styled.span`
  display: inline-flex;
  align-items: baseline;
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 0.8;
  font-size: var(--font-size-display);

  &::after {
    content: ")";
  }
`;

export const WinkEye = styled.span`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    transition: opacity 0.35s ease;
  }

  &::before {
    content: ";";
  }

  &::after {
    content: ":";
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  ${FooterShell}:hover &::before {
    opacity: 0;
  }

  ${FooterShell}:hover &::after {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }
`;

export const Wordmark = styled.p`
  font-family: var(--font-heading);
  font-size: var(--font-size-ui-lg);
  text-transform: lowercase;
`;

export const Note = styled.p`
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  opacity: 0.7;
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FooterLink = styled.a`
  color: inherit;
  font-family: var(--font-heading);
  font-size: var(--font-size-ui-sm);
  text-transform: lowercase;
  text-underline-offset: 0.25em;

  &:focus-visible {
    outline: 2px solid var(--footer-ink);
    outline-offset: 3px;
  }
`;
