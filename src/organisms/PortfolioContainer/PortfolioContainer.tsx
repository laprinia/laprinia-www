import styled from "styled-components";

const ContainerWrapper = styled.div`
  margin: 1rem 1rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
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
