import styled from "styled-components";
import HeadshotImage from "../../molecules/HeadshotImage/HeadshotImage";
import Description from "../../molecules/Description/Description";
import DoubleTextRibbon from "../../organisms/TextRibbon/DoubleTextRibbon";
import ArticlesContainer from "../../organisms/ArticlesContainer/ArticlesContainer";
import SocialButtonsContainer from "../../organisms/SocialButtonsContainer/SocialButtonsContainer";

const MobileContainerWrapper = styled.section`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
`;

const MobileAboutLayout = ({
  descriptionText,
  articles,
  technologies,
  buttons,
}: {
  descriptionText: string;
  articles: React.ReactNode[];
  technologies: string[];
  buttons: { id: string; href: string; imgSrc: string; alt: string }[];
}) => {
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);
  return (
    <MobileContainerWrapper>
      <HeadshotImage src={"/headshot.png"} relativeHeight={"40%"} />
      <DoubleTextRibbon tags={technologies} />
      <Description content={descriptionText} />
      <ArticlesContainer leftColumn={leftColumn} rightColumn={rightColumn} />
      <SocialButtonsContainer buttons={buttons} />
    </MobileContainerWrapper>
  );
};

export default MobileAboutLayout;
