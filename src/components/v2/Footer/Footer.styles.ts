import styled from "styled-components";

export const FooterShell = styled.footer`
  --footer-ink: var(--neutral-000);

  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  padding: clamp(var(--space-12), 7vw, var(--space-24))
    clamp(var(--space-6), 5vw, var(--space-20))
    clamp(var(--space-8), 4vw, var(--space-12));
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
  gap: var(--space-3);

  > :first-child {
    margin-bottom: clamp(var(--space-5), 3vw, var(--space-10));
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
  gap: var(--space-4);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: inherit;
  font-family: var(--font-heading);
  font-size: var(--font-size-ui-sm);
  text-transform: lowercase;
  text-underline-offset: 0.25em;

  svg {
    flex-shrink: 0;
  }

  &:focus-visible {
    outline: 2px solid var(--footer-ink);
    outline-offset: 3px;
  }
`;
