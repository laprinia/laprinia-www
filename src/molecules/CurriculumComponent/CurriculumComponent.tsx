import React from "react";
import styled from "styled-components";
import { aboutIntroduction, technologiesTags } from "../../consts";
import Description from "../Description/Description";
import DoubleTextRibbon from "../../organisms/TextRibbon/DoubleTextRibbon";
import ArticlesContainer from "../../organisms/ArticlesContainer/ArticlesContainer";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const ScrollableWrapper = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

// Parent component that uses Container
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const CurriculumComponent = ({ articles }: { articles: React.ReactNode[] }) => {
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);

  return (
    <LayoutWrapper>
      <Container>
        <ScrollableWrapper aria-labelledby="about">
          <Description content={aboutIntroduction} />
          <ArticlesContainer
            leftColumn={leftColumn}
            rightColumn={rightColumn}
          />
        </ScrollableWrapper>
        <DoubleTextRibbon tags={technologiesTags} />
      </Container>
    </LayoutWrapper>
  );
};

export default CurriculumComponent;
