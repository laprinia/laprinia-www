import { Canvas } from "@react-three/fiber";
import StillTexture from "../../molecules/Texture/StillTexture";
import HomeNavBar from "../../organisms/HomeNavBar/HomeNavBar";
import { introductionItems } from "../../consts";
import CursorWaveTexture from "../../molecules/Texture/CursorWaveTexture";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PulsatingBadge from "../../organisms/PulsatingBadge/PulsatingBadge";

const DesktopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 2.5rem);
  height: calc(100vh - 2.5rem);
  margin: 1.25rem;
  padding: 0;

  @media (max-width: 1023px) {
    flex-direction: column;
    height: calc(100vh - 2.5rem);
    width: calc(100vw - 2.5rem);
    margin: 1.25rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const Box = styled.section`
  position: absolute;
  width: calc(50% - 1.25rem);
  height: calc(50% - 1.25rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
`;

const TopAlignedBox = styled(Box)<{ align: string }>`
  top: 0;
  ${({ align }) => (align === "left" ? "left: 0;" : "right: 0;")}
  margin-right: 1.25rem;
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
    font-size: 1rem;
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

const BottomAlignedBox = styled(Box)<{ align: string }>`
  margin-left: 1.25rem;
  margin-bottom: 0.5rem;
  bottom: 0;
  ${({ align }) => (align === "left" ? "left: 0;" : "right: 0;")}
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const BottomAlignedBoxContent = styled.section`
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 40%;
  height: 100%;

  p {
    text-align: justify;
  }

  @media (max-width: 1023px) {
    font-size: var(--font-size-heading1-tablet);
    width: 50%;
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-heading1-tablet);
  }
`;

const CanvasSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const DesktopHome = ({
  headerHeroPath,
  footerHeroPath,
}: {
  headerHeroPath: string;
  footerHeroPath: string;
}) => {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1023);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <DesktopContainer>
      <TopAlignedBox align="left" aria-labelledby="name">
        <p id="name" hidden>
          Lavinia Dumitrenco
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
            <p>{introductionItems[0]}</p>
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
              resize={{ debounce: { scroll: 50, resize: 50 } }}
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
