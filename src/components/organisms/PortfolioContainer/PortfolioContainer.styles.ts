import styled from "styled-components";
import * as Separator from "@radix-ui/react-separator";

export const ContainerWrapper = styled.main`
  margin: 0;
  padding: 0rem 1rem;
  width: 100%;
`;

export const CategoryHeader = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CategoryText = styled.article`
  font-family: var(--font-heading);
  font-size: var(--font-size-heading1-desktop);
  font-weight: var(--font-weight-regular);
  color: var(--accent-color);
`;

export const Line = styled(Separator.Root)`
  height: 0.25rem;
  background-color: var(--accent-color);
  border-radius: 1rem;
  margin: 1rem 0;
`;

export const GridContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  box-sizing: border-box;
  gap: 3rem;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @media (min-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
