import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-16), 9vw, var(--space-24));
`;

export const EntryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-4), 2vw, var(--space-6));
  margin-top: var(--space-10);
`;

export const LabGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: var(--space-12) var(--space-8);
  margin: var(--space-10) 0 0;
  padding: 0;
  list-style: none;
`;
