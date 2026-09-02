import styled from "styled-components";
import { Section } from "../shared.styles";

export const SelectedSection = styled(Section)`
  padding-block: clamp(var(--space-12), 7vw, var(--space-24))
    clamp(var(--space-10), 5vw, var(--space-16));
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-10), 5vw, var(--space-16));
  margin: 0;
  padding: 0;
  list-style: none;
`;
