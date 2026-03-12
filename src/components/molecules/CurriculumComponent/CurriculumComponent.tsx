import { type ReactNode } from "react";
import { aboutIntroduction, skillTags } from "../../../consts";
import Description from "../Description/Description";
import DoubleTextRibbon from "../../organisms/TextRibbon/DoubleTextRibbon";
import ArticlesContainer from "../../organisms/ArticlesContainer/ArticlesContainer";
import {
  Container,
  LayoutWrapper,
  StyledScrollbar,
  StyledScrollRoot,
  StyledScrollViewport,
  StyledThumb,
} from "./CurriculumComponent.styles";

const CurriculumComponent = ({ articles }: { articles: ReactNode[] }) => {
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);

  return (
    <LayoutWrapper>
      <Container>
        <StyledScrollRoot>
          <StyledScrollViewport>
            <Description content={aboutIntroduction} />
            <ArticlesContainer
              leftColumn={leftColumn}
              rightColumn={rightColumn}
            />
          </StyledScrollViewport>
          <StyledScrollbar orientation="vertical">
            <StyledThumb />
          </StyledScrollbar>
        </StyledScrollRoot>
        <DoubleTextRibbon tags={skillTags} />
      </Container>
    </LayoutWrapper>
  );
};

export default CurriculumComponent;
