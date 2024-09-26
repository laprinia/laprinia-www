import styled from "styled-components";
import HeadshotImage from "../../molecules/HeadshotImage/HeadshotImage";
import Description from "../../molecules/Description/Description";
import DoubleTextRibbon from "../../organisms/TextRibbon/DoubleTextRibbon";
import ArticlesContainer from "../../organisms/ArticlesContainer/ArticlesContainer";
import SocialButtonsContainer from "../../organisms/SocialButtonsContainer/SocialButtonsContainer";
import { useEffect } from "react";

const MobileContainerWrapper = styled.section`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: calc(var(--vh, 1vh) * 100 - 4rem);
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
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVh();
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, []);
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);
  return (
    <MobileContainerWrapper>
      <DoubleTextRibbon tags={technologies} />
      <HeadshotImage src={"/headshot.png"} relativeHeight={"50%"} />
      <SocialButtonsContainer buttons={buttons} />
      <Description content={descriptionText} />
      <ArticlesContainer leftColumn={leftColumn} rightColumn={rightColumn} />
    </MobileContainerWrapper>
  );
};

export default MobileAboutLayout;
