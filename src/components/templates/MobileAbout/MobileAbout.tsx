import Description from "../../molecules/Description/Description";
import DoubleTextRibbon from "../../organisms/TextRibbon/DoubleTextRibbon";
import ArticlesContainer from "../../organisms/ArticlesContainer/ArticlesContainer";
import SocialButtonsContainer from "../../organisms/SocialButtonsContainer/SocialButtonsContainer";
import CardPlayground from "../../organisms/CardPlayground/CardPlayground";
import { type ReactNode } from "react";
import { MobileScrollWrapper } from "./MobileAbout.styles";

const MobileAboutLayout = ({
  descriptionText,
  articles,
  technologies,
  buttons,
}: {
  descriptionText: string;
  articles: ReactNode[];
  technologies: string[];
  buttons: { id: string; href: string; imgSrc: string; alt: string; label: string }[];
}) => {
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);
  return (
    <MobileScrollWrapper>
      <DoubleTextRibbon tags={technologies} />
      <CardPlayground interactive={false} />
      <SocialButtonsContainer buttons={buttons} />
      <Description content={descriptionText} />
      <ArticlesContainer leftColumn={leftColumn} rightColumn={rightColumn} />
    </MobileScrollWrapper>
  );
};

export default MobileAboutLayout;
