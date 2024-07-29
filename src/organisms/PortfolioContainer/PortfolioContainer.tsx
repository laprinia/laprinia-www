import styled from "styled-components";
import MDivider from "../../molecules/Divider/MDivider";
import React from "react";

const ContainerWrapper = styled.div`
  margin: 0;
  padding: 0rem 1rem;
  width: 100%;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;

const CategoryText = styled.div`
  font-family: var(--font-heading);
  font-size: var(--font-size-L);
  font-weight: var(--font-weight-bold);
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1023px) {
    gap: 3rem;
  }
  @media (max-width: 767px) {
    gap: 2rem;
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
      <MDivider />
      <CategoryHeader>
        <CategoryText>{`${no}) ${category}`}</CategoryText>
      </CategoryHeader>
      <Line />
      <GridContainer>{children}</GridContainer>
    </ContainerWrapper>
  );
};

export default PortfolioContainer;
