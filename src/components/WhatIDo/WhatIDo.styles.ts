import styled from "styled-components";
import { Section } from "../shared.styles";

export const Entries = styled.dl`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(var(--space-8), 3.5vw, var(--space-12));
  margin: 0;
`;

export const Entry = styled.div`
  display: grid;
  grid-template-columns: var(--space-10) minmax(0, 1fr);
  gap: var(--space-4);
  transition: padding-left 0.3s var(--ease-out);

  @media (hover: hover) {
    &:hover {
      padding-left: var(--space-3);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Marker = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-7);
  height: var(--space-7);
  border-radius: 50%;
  background-color: var(--support-color);
  color: var(--way-darker-accent-color);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
`;

export const Term = styled.dt`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  line-height: 1.2;
  text-transform: lowercase;
`;

export const Detail = styled.dd`
  margin: var(--space-2) 0 0;
  max-width: 68ch;
  font-size: var(--font-size-ui-md);
  line-height: 1.55;
  color: var(--neutral-700);
`;

export const WhatIDoSection = styled(Section)`
  padding-block: clamp(var(--space-8), 6vw, var(--space-20));
`;
