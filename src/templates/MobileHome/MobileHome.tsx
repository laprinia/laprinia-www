import HomeNavBar from "../../organisms/HomeNavBar/HomeNavBar";
import { Canvas } from "@react-three/fiber";
import CursorWaveTexture from "../../molecules/Texture/CursorWaveTexture";
import { introductionItems } from "../../consts";
import React, { useEffect } from "react";
import styled from "styled-components";

const MobileContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5rem);
  flex: 1;
  @media (max-width: 767px) {
    padding: 1.25rem 1.5rem 1.5rem;
    gap: 0.5rem;
  }
`;

const CanvasSectionWrapper = styled.section`
  height: 60%;
  display: flex;
  align-items: flex-end;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40%;
  text-align: center;

  @media (max-width: 767px) {
    justify-content: space-evenly !important;
  }
`;

const CanvasSection = styled.article`
  width: 100%;
  height: 100%;
`;

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
        <p id="introduction" hidden>
          Introduction
        </p>
        {introductionItems.map((item, index) => (
          <p>{item}</p>
        ))}
      </InfoSection>
    </MobileContainer>
  );
};

export default MobileHome;
