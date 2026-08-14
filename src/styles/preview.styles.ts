import Link from "next/link";
import styled from "styled-components";

export const PreviewMain = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 1.5rem;
`;

export const PreviewBadge = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-color);
`;

export const PreviewTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: var(--font-size-heading2-desktop);
  font-weight: var(--font-weight-light);
  text-transform: uppercase;
  color: var(--neutral-800);

  @media (max-width: 1023px) {
    font-size: var(--font-size-heading3-tablet);
  }
`;

export const PreviewNote = styled.p`
  max-width: 42ch;
  color: var(--neutral-600);
`;

export const PreviewLink = styled(Link)`
  color: var(--accent-color);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;

  &:hover,
  &:focus-visible {
    color: var(--darker-accent-color);
  }
`;
