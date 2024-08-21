import React from "react";
import styled from "styled-components";
import { aboutIntroduction } from "../../consts";

const Container = styled.main`
  font-family: var(--font-heading);
  width: 65%;
  padding: 1.5rem;
  box-sizing: border-box;
`;

const Description = styled.section`
  font-size: var(--font-size-M);
  height: 20%;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: top;
  p {
    text-align: justify;
  }
`;

const CurriculumText = styled.section`
  height: 70%;
  display: flex;
  padding-bottom: 2rem;
`;

const Column = styled.article`
  flex: 1;
  padding-right: 0 0.5rem;
`;

const TechnologiesComponent = styled.section`
  padding-bottom: 1rem;
  height: 10%;
  background: #e0e0e0;
`;

const CurriculumComponent = ({ articles }: { articles: React.ReactNode[] }) => {
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);

  return (
    <Container>
      <Description aria-labelledby="description">
        <p>{aboutIntroduction}</p>
      </Description>
      <CurriculumText aria-labelledby="curriculum">
        <Column>{leftColumn}</Column>
        <Column>{rightColumn}</Column>
      </CurriculumText>
      <TechnologiesComponent aria-labelledby="technologies"></TechnologiesComponent>
    </Container>
  );
};

export default CurriculumComponent;
