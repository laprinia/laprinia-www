import { Canvas } from "@react-three/fiber";
import StillTexture from "../../molecules/Texture/StillTexture";
import HomeNavBar from "../../organisms/HomeNavBar/HomeNavBar";
import { introductionItems } from "../../consts";
import CursorWaveTexture from "../../molecules/Texture/CursorWaveTexture";
import React from "react";
import styled from "styled-components";

const DesktopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70% 30%;
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  margin: 2.5rem;
  gap: 1rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const CanvasSection = styled.div`
  width: 100%;
  height: 100%;
`;

const BottomAllignedBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 1rem;
  }
  font-size: var(--font-size-L);
  @media (max-width: 1023px) {
    font-size: "1rem";
  }

  @media (max-width: 767px) {
    font-size: "0.75rem";
  }
`;

const AvailabilityBox = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const TopAllignedBox = styled.section<{ align: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  justify-content: "flex-start";
  font-size: var(--font-size-L);
  font-weight: var(--font-weight-light);
  padding: 0 1rem;

  p {
    margin: 0;
    padding: 0;
    font-size: "1rem";
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      font-weight: var(--font-weight-light);
      margin-bottom: 0.5rem;
      text-decoration: none;
      color: black;
    }
  }

  @media (max-width: 1023px) {
    font-size: var(--font-size-L);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const DesktopHome = ({
  headerHeroPath,
  footerHeroPath,
}: {
  headerHeroPath: string;
  footerHeroPath: string;
}) => {
  return (
    <DesktopContainer>
      <TopAllignedBox align="left" aria-labelledby="name">
        <header
          aria-labelledby="name"
          style={{ width: "100%", height: "100%" }}
        >
          <CanvasSection>
            <Canvas>
              <ambientLight intensity={1} />
              <pointLight position={[10, 10, 10]} />
              <StillTexture texturePath={headerHeroPath} />
            </Canvas>
          </CanvasSection>
        </header>
      </TopAllignedBox>
      <TopAllignedBox align="right">
        <HomeNavBar />
      </TopAllignedBox>
      <BottomAllignedBox style={{ marginTop: "4rem" }}>
        <article aria-labelledby="introduction">
          <p id="introduction" hidden>
            Introduction
          </p>
          <p>{introductionItems[0]}</p>
        </article>
        <AvailabilityBox aria-labelledby="availability">
          <p>{introductionItems[1]}</p>
        </AvailabilityBox>
      </BottomAllignedBox>
      <TopAllignedBox align="right">
        <footer
          aria-labelledby="job-title"
          style={{ width: "100%", height: "100%" }}
        >
          <CanvasSection>
            <Canvas>
              <ambientLight intensity={1} />
              <pointLight position={[10, 10, 10]} />
              <CursorWaveTexture texturePath={footerHeroPath} />
            </Canvas>
          </CanvasSection>
        </footer>
      </TopAllignedBox>
    </DesktopContainer>
  );
};

export default DesktopHome;
