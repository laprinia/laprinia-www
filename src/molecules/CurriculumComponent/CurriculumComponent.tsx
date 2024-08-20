import React from "react";
import styled from "styled-components";

const Container = styled.main`
  font-family: var(--font-heading);
  background-color: aquamarine;
  width: 70%;
  padding: 1rem;
  box-sizing: border-box;
`;

const Description = styled.section`
  height: 20%;
  margin-bottom: 1rem;
  background: #e0e0e0;
`;

const CurriculumText = styled.section`
  height: 60%;
  display: flex;
  padding-bottom: 1rem;
`;

const Column = styled.article`
  background-color: darkgreen;
  flex: 1;
  padding: 0 0.5rem;
`;

const TechnologiesComponent = styled.section`
  padding-bottom: 1rem;
  height: 20%;
  background: #e0e0e0;
`;

const CurriculumComponent = ({ articles }: { articles: React.ReactNode[] }) => {
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);

  return (
    <Container>
      <Description aria-labelledby="description">Description here</Description>
      <CurriculumText aria-labelledby="curriculum">
        <Column>{leftColumn}</Column>
        <Column>{rightColumn}</Column>
      </CurriculumText>
      <TechnologiesComponent aria-labelledby="technologies">
        Technologies here
      </TechnologiesComponent>
    </Container>
  );
};

export default CurriculumComponent;
