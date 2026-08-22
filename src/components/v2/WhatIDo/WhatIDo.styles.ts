import styled from "styled-components";

export const EntryList = styled.dl`
  --entry-badge-size: 1.9rem;
  --entry-badge-gap: 0.85rem;

  margin: 0;
  border-top: 1px solid var(--section-ink);
`;

export const Entry = styled.div`
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--section-ink);
`;

export const EntryTerm = styled.dt`
  display: flex;
  align-items: center;
  gap: var(--entry-badge-gap);
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: lowercase;
  line-height: 1;
  font-size: var(--font-size-title);
`;

export const EntryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--entry-badge-size);
  height: var(--entry-badge-size);
  border-radius: var(--radius-pill);
  background-color: var(--section-ink);
  color: var(--notebook-background);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  text-transform: uppercase;
`;

export const EntryDefinition = styled.dd`
  margin: 0.5rem 0 0 calc(var(--entry-badge-size) + var(--entry-badge-gap));
  max-width: 62ch;
  font-size: var(--font-size-body);
  line-height: 1.5;
`;
