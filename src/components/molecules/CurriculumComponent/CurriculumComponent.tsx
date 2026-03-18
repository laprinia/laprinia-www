import { type ReactNode } from "react";
import { aboutIntroduction, skillTags } from "../../../consts";
import Description from "../Description/Description";
import DoubleTextRibbon from "../../organisms/TextRibbon/DoubleTextRibbon";
import ArticlesContainer from "../../organisms/ArticlesContainer/ArticlesContainer";
import { Container, LayoutWrapper } from "./CurriculumComponent.styles";
import {
  ScrollRoot,
  ScrollViewport,
  ScrollBar,
  ScrollThumb,
} from "../../atoms/ScrollArea/ScrollArea";

const CurriculumComponent = ({ articles }: { articles: ReactNode[] }) => {
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);

  return (
    <LayoutWrapper>
      <Container>
        <ScrollRoot>
          <ScrollViewport>
            <Description content={aboutIntroduction} />
            <ArticlesContainer
              leftColumn={leftColumn}
              rightColumn={rightColumn}
            />
          </ScrollViewport>
          <ScrollBar orientation="vertical">
            <ScrollThumb />
          </ScrollBar>
        </ScrollRoot>
        <DoubleTextRibbon tags={skillTags} />
      </Container>
    </LayoutWrapper>
  );
};

export default CurriculumComponent;
