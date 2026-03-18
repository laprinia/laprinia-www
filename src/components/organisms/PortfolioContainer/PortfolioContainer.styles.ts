import styled from "styled-components";

export const ContainerWrapper = styled.fieldset`
  border: 1.5px solid var(--accent-color);
  border-radius: 0.5rem;
  margin: 0 0 2.5rem;
  padding: 2rem;
  width: 100%;

  @media (max-width: 767px) {
    padding: 1.25rem;
    border-radius: 0.75rem;
  }
`;

export const Legend = styled.legend`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
  font-family: var(--font-heading);
  font-size: var(--font-size-heading1-desktop);
  font-weight: var(--font-weight-regular);
  color: var(--neutral-700);

  @media (max-width: 1023px) {
    font-size: var(--font-size-heading1-tablet);
  }
`;

export const LetterBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  background-color: var(--neutral-700);
  color: var(--support-color);
  border: 1px solid var(--support-color);
  font-family: var(--font-heading);
  font-size: 0.7em;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  box-sizing: border-box;
  gap: 2.5rem 2rem;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
