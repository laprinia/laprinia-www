import HomeNavBar from "../../organisms/HomeNavBar/HomeNavBar";
import { Canvas } from "@react-three/fiber";
import CursorWaveTexture from "../../molecules/Texture/CursorWaveTexture";
import { introductionItems } from "../../consts";
import React from "react";
import styled from "styled-components";

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  margin: 2.5rem;
  gap: 1rem;

  @media (max-width: 767px) {
    width: calc(100vw - 2rem);
    height: calc(100vh - 2rem);
    margin: 1rem;
    gap: 0.5rem;
  }
`;

const CanvasSectionWrapper = styled.div`
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
  font-size: var(--font-size-L);
  p {
    margin: 0;
  }
  @media (max-width: 1023px) {
    font-size: "1rem";
  }

  @media (max-width: 767px) {
    font-size: "0.75rem";
  }
  @media (max-width: 767px) {
    justify-content: space-evenly !important;
  }
`;

const CanvasSection = styled.div`
  width: 100%;
  height: 100%;
`;

const MobileHome = ({ mobileHeroPath }: { mobileHeroPath: string }) => {
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
