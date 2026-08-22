import styled from "styled-components";

export const MetricGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: clamp(var(--space-3), 1.5vw, var(--space-5));
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Card = styled.li`
  --metric-ink: var(--accent-color);
  --metric-surface: var(--neutral-200);
  --metric-label-ink: var(--neutral-600);
  --metric-value-size: clamp(2.25rem, 5vw, 3.25rem);

  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: clamp(var(--space-5), 2.5vw, var(--space-7));
  border-radius: var(--border-radius);
  background-color: var(--metric-surface);
`;

export const Value = styled.p`
  color: var(--metric-ink);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--metric-value-size);
  line-height: 0.9;
  font-variant-numeric: tabular-nums;
`;

export const Label = styled.p`
  color: var(--metric-label-ink);
  font-size: var(--font-size-ui-sm);
  line-height: 1.35;
  text-wrap: balance;
`;
