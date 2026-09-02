import styled from "styled-components";
import { Section } from "../shared.styles";

export const LabSection = styled(Section)`
  padding-block: clamp(var(--space-10), 5vw, var(--space-16))
    clamp(var(--space-16), 8vw, var(--space-28));
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-8), 4vw, var(--space-12));
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-7), 3.5vw, 2.75rem);
  margin: 0;
  padding: 0;
  list-style: none;
`;
