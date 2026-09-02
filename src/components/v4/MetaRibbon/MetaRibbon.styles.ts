import styled from "styled-components";

export const Ribbon = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--foreground-color);
`;

export const Highlight = styled.span`
  background-image: linear-gradient(var(--support-color), var(--support-color));
  background-repeat: no-repeat;
  background-position: 0 92%;
  background-size: 100% 0.5em;
`;

export const Muted = styled.span`
  color: var(--section-muted);
`;

export const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--accent-color);

  &::before {
    content: "";
    width: var(--space-2);
    height: var(--space-2);
    border-radius: 50%;
    background-color: var(--accent-color);
  }
`;
