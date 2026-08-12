import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import HomeNavBar from "../../organisms/HomeNavBar/HomeNavBar";
import { landingName, landingPageIntroduction, landingTitle } from "../../../consts";
import PulsatingBadge from "../../organisms/PulsatingBadge/PulsatingBadge";
import { HorseCanvas } from "./HorseCanvas";
import {
  DesktopContainer,
  TopAlignedBox,
  BottomAlignedBox,
  BottomAlignedBoxContent,
  CenterCanvasSection,
} from "./DesktopHome.styles";

const splitIntoTwoLines = (value: string) => {
  const [firstWord, ...rest] = value.split(" ");

  return {
    firstWord: firstWord.toUpperCase(),
    remainingWords: rest.join(" ").toUpperCase(),
  };
};

const DesktopHome = () => {
  const landingNameLines = splitIntoTwoLines(landingName);
  const landingTitleLines = splitIntoTwoLines(landingTitle);

  return (
    <DesktopContainer>
      <CenterCanvasSection aria-hidden data-cursor-text="drag!">
        <HorseCanvas />
      </CenterCanvasSection>

      <TopAlignedBox align="left">
        <header aria-label={landingName} style={{ width: "100%", height: "100%" }}>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span>{landingNameLines.firstWord}</span>
            <span>{landingNameLines.remainingWords}</span>
          </p>
        </header>
      </TopAlignedBox>

      <TopAlignedBox align="right">
        <HomeNavBar />
      </TopAlignedBox>

      <BottomAlignedBox align="left">
        <BottomAlignedBoxContent>
          <article aria-labelledby="introduction">
            <VisuallyHidden.Root asChild>
              <p id="introduction">Introduction</p>
            </VisuallyHidden.Root>
            <p>{landingPageIntroduction}</p>
          </article>
          <PulsatingBadge />
        </BottomAlignedBoxContent>
      </BottomAlignedBox>

      <BottomAlignedBox align="right">
        <footer
          aria-label={landingTitle}
          style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span>{landingTitleLines.firstWord}</span>
            <span>{landingTitleLines.remainingWords}</span>
          </p>
        </footer>
      </BottomAlignedBox>
    </DesktopContainer>
  );
};

export default DesktopHome;
