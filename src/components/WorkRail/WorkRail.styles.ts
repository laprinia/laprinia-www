import styled from "styled-components";
import { Section } from "../shared.styles";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-10), 5vw, var(--space-16));
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const More = styled.li`
  display: flex;
  justify-content: flex-end;
`;

export const WorkSection = styled(Section)`
  padding-block: clamp(var(--space-8), 6vw, var(--space-20));
`;
