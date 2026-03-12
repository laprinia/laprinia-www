import HeadshotImage from "../../molecules/HeadshotImage/HeadshotImage";
import Description from "../../molecules/Description/Description";
import DoubleTextRibbon from "../../organisms/TextRibbon/DoubleTextRibbon";
import ArticlesContainer from "../../organisms/ArticlesContainer/ArticlesContainer";
import SocialButtonsContainer from "../../organisms/SocialButtonsContainer/SocialButtonsContainer";
import { useEffect, type ReactNode } from "react";
import {
  MobileScrollRoot,
  MobileScrollbar,
  MobileScrollViewport,
  MobileThumb,
} from "./MobileAbout.styles";

const MobileAboutLayout = ({
  descriptionText,
  articles,
  technologies,
  buttons,
}: {
  descriptionText: string;
  articles: ReactNode[];
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
    <MobileScrollRoot>
      <MobileScrollViewport>
        <DoubleTextRibbon tags={technologies} />
        <HeadshotImage src={"/headshot.avif"} relativeHeight={"50%"} />
        <SocialButtonsContainer buttons={buttons} />
        <Description content={descriptionText} />
        <ArticlesContainer leftColumn={leftColumn} rightColumn={rightColumn} />
      </MobileScrollViewport>
      <MobileScrollbar orientation="vertical">
        <MobileThumb />
      </MobileScrollbar>
    </MobileScrollRoot>
  );
};

export default MobileAboutLayout;
