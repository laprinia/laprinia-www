import styled from "styled-components";
import React from "react";

const ContainerWrapper = styled.main`
  margin: 0;
  padding: 0rem 1rem;
  width: 100%;
`;

const CategoryHeader = styled.article`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;

const CategoryText = styled.div`
  font-size: var(--font-size-heading1-desktop);
  font-weight: var(--font-weight-semibold);
  color: var(--accent-color);
`;

const Line = styled.div`
  height: 0.25rem;
  background-color: var(--accent-color);
  border-radius: 1rem;
  margin: 1rem 0;
`;

const GridContainer = styled.div`
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

const PortfolioContainer = ({
  category,
  no,
  children,
}: {
  category: string;
  no: string;
  children: React.ReactNode;
}) => {
  return (
    <ContainerWrapper>
      <CategoryHeader>
        <CategoryText>{`${no}) ${category}`}</CategoryText>
      </CategoryHeader>
      <Line />
      <GridContainer>{children}</GridContainer>
    </ContainerWrapper>
  );
};

export default PortfolioContainer;
