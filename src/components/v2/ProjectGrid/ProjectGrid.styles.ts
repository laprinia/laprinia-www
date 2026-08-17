import styled from "styled-components";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: var(--section-ink);
  border: 1px solid var(--section-ink);
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Cell = styled.li`
  display: flex;
`;
