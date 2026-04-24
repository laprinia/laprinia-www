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

const DesktopHome = () => {
  return (
    <DesktopContainer>
      <CenterCanvasSection aria-hidden data-cursor-text="drag!">
        <HorseCanvas />
      </CenterCanvasSection>

      <TopAlignedBox align="left">
        <header aria-label={landingName} style={{ width: "100%", height: "100%" }}>
          <p style={{ fontFamily: "var(--font-heading)" }}>{landingName.toUpperCase()}</p>
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
          <p style={{ fontFamily: "var(--font-heading)" }}>{landingTitle.toUpperCase()}</p>
        </footer>
      </BottomAlignedBox>
    </DesktopContainer>
  );
};

export default DesktopHome;
