import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import CursorWaveTexture from "../molecules/Texture/CursorWaveTexture";
import StillTexture from "../molecules/Texture/StillTexture";

const Container = styled.div`
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

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    font-weight: var(--font-weight-light);
    text-decoration: none;
    color: black;
  }

  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const CanvasSectionWrapper = styled.div`
  height: 60%;
  display: flex;
  align-items: flex-end;
`;

const CanvasSection = styled.div`
  width: 100%;
  height: 60%;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40%; /* Remaining 40% height */
  text-align: center;

  p {
    margin: 0;
  }

  @media (max-width: 767px) {
    justify-content: space-evenly !important;
  }
`;

// Styled components for tablet/desktop
const OriginalContainer = styled.div`
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

const BottomAllignedBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

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

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const footerPath = "/dev.png";
  const headerPath = "/name.png";
  const mobilePath = "/mobile.png";

  return isMobile ? (
    <Container>
      <Navbar aria-labelledby="navigation">
        <p id="navigation" hidden>
          Navigation
        </p>
        <a href="about">ABOUT</a>
        <a href="portfolio">PORTFOLIO</a>
        <a href="contact">CONTACT</a>
      </Navbar>

      <CanvasSectionWrapper>
        <CanvasSection>
          <Canvas>
            <ambientLight intensity={3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <CursorWaveTexture texturePath={mobilePath} isAutoAnimated />
          </Canvas>
        </CanvasSection>
      </CanvasSectionWrapper>

      <InfoSection>
        <p id="introduction" hidden>
          Introduction
        </p>
        <p>
          Hi! I am Lavinia, an experienced Web Developer based in Bucharest, RO.
        </p>
        <p>AVAILABLE FOR WORK</p>
      </InfoSection>
    </Container>
  ) : (
    <OriginalContainer>
      <TopAllignedBox align="left" aria-labelledby="name">
        <header
          aria-labelledby="name"
          style={{ width: "100%", height: "100%" }}
        >
          <Canvas>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <StillTexture texturePath={headerPath} />
          </Canvas>
        </header>
      </TopAllignedBox>
      <TopAllignedBox align="right">
        <nav aria-labelledby="navigation">
          <p id="navigation" hidden>
            Navigation
          </p>
          <a href="about">ABOUT</a>
          <a href="portfolio">PORTFOLIO</a>
          <a href="contact">CONTACT</a>
        </nav>
      </TopAllignedBox>
      <BottomAllignedBox>
        <article aria-labelledby="introduction">
          <p id="introduction" hidden>
            Introduction
          </p>
          <p>
            Hi! I am Lavinia, an experienced Web Developer based in Bucharest,
            RO.
          </p>
        </article>
        <AvailabilityBox aria-labelledby="availability">
          <p>AVAILABLE FOR WORK</p>
        </AvailabilityBox>
      </BottomAllignedBox>
      <TopAllignedBox align="right">
        <footer
          aria-labelledby="job-title"
          style={{ width: "100%", height: "100%" }}
        >
          <Canvas>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <CursorWaveTexture texturePath={footerPath} />
          </Canvas>
        </footer>
      </TopAllignedBox>
    </OriginalContainer>
  );
};

export default Home;
