import HomeNavBar from "../../organisms/HomeNavBar/HomeNavBar";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { landingPageIntroduction } from "../../../consts";
import { useEffect } from "react";
import PulsatingBadge from "../../organisms/PulsatingBadge/PulsatingBadge";
import CursorWaveTexture from "../../molecules/Texture/CursorWaveTexture";
import { Canvas } from "@react-three/fiber";
import {
  CanvasSection,
  CanvasSectionWrapper,
  InfoSection,
  MobileContainer,
} from "./MobileHome.styles";

const MobileHome = ({ mobileHeroPath }: { mobileHeroPath: string }) => {
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

  return (
    <MobileContainer>
      <HomeNavBar isMobile />
      <CanvasSectionWrapper>
        <CanvasSection>
          <Canvas>
            <ambientLight intensity={3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <CursorWaveTexture texturePath={mobileHeroPath} isAutoAnimated />
          </Canvas>
        </CanvasSection>
      </CanvasSectionWrapper>

      <InfoSection>
        <VisuallyHidden.Root asChild>
          <p id="introduction">Introduction</p>
        </VisuallyHidden.Root>
        <p>{landingPageIntroduction}</p>
        <PulsatingBadge />
      </InfoSection>
    </MobileContainer>
  );
};

export default MobileHome;
