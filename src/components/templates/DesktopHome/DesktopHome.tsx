import { Canvas } from "@react-three/fiber";
import StillTexture from "../../molecules/Texture/StillTexture";
import HomeNavBar from "../../organisms/HomeNavBar/HomeNavBar";
import { landingName, landingPageIntroduction } from "../../../consts";
import CursorWaveTexture from "../../molecules/Texture/CursorWaveTexture";
import { useEffect, useState } from "react";
import PulsatingBadge from "../../organisms/PulsatingBadge/PulsatingBadge";
import { HorseCanvas } from "./HorseCanvas";
import {
  DesktopContainer,
  TopAlignedBox,
  BottomAlignedBox,
  BottomAlignedBoxContent,
  CanvasSection,
  CenterCanvasSection,
} from "./DesktopHome.styles";

const DesktopHome = ({
  headerHeroPath,
  footerHeroPath,
}: {
  headerHeroPath: string;
  footerHeroPath: string;
}) => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const debounce = (func: Function, delay: number) => {
      let timer: NodeJS.Timeout;
      return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
      };
    };

    const handleResize = debounce(() => {
      setIsTablet(window.innerWidth <= 1023);
    }, 100);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DesktopContainer>
      <CenterCanvasSection aria-hidden>
        <HorseCanvas />
      </CenterCanvasSection>

      <TopAlignedBox align="left" aria-labelledby="name">
        <p id="name" hidden>
          {landingName}
        </p>
        <header
          aria-labelledby="name"
          style={{ width: "100%", height: "100%" }}
        >
          <CanvasSection>
            <Canvas
              resize={{ debounce: { scroll: 50, resize: 50 } }}
              gl={{ antialias: true }}
              style={{ width: "100%", height: "100%" }}
              camera={{ position: [0, 0, 5] }}
            >
              <ambientLight />
              <StillTexture texturePath={headerHeroPath} />
            </Canvas>
          </CanvasSection>
        </header>
      </TopAlignedBox>

      <TopAlignedBox align="right">
        <HomeNavBar />
      </TopAlignedBox>

      <BottomAlignedBox align="left">
        <BottomAlignedBoxContent>
          <article aria-labelledby="introduction">
            <p id="introduction" hidden>
              Introduction
            </p>
            <p>{landingPageIntroduction}</p>
          </article>
          <PulsatingBadge />
        </BottomAlignedBoxContent>
      </BottomAlignedBox>

      <BottomAlignedBox align="right">
        <p id="title" hidden>
          Web Developer
        </p>
        <footer
          aria-labelledby="job-title"
          style={{ width: "100%", height: "100%" }}
        >
          <CanvasSection>
            <Canvas
              gl={{ antialias: true }}
              style={{ width: "100%", height: "100%" }}
              camera={{ position: [0, 0, 5] }}
            >
              <ambientLight />
              <CursorWaveTexture
                texturePath={footerHeroPath}
                isAutoAnimated={isTablet}
                animationSpeed={0.4}
              />
            </Canvas>
          </CanvasSection>
        </footer>
      </BottomAlignedBox>
    </DesktopContainer>
  );
};

export default DesktopHome;
