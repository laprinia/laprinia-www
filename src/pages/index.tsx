import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import CursorWaveTexture from "../molecules/Texture/CursorWaveTexture";
import StillTexture from "../molecules/Texture/StillTexture";

const Container = styled.div`
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
    margin: 1rem;
    width: calc(100vw - 2rem);
    height: calc(100vh - 2rem);
    gap: 0.5rem;
  }
`;

const BottomBox = styled.section`
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
const TopBox = styled.section<{ align: string }>`
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
    font-size: var(--font-size-S);
  }
`;

const Home = () => {
  const footerPath = "/dev.png";
  const headerPath = "/name.png";
  return (
    <Container>
      <TopBox align="left" aria-labelledby="name">
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
      </TopBox>
      <TopBox align="right">
        <nav aria-labelledby="navigation">
          <p id="navigation" hidden>
            Navigation
          </p>
          <a href="about">ABOUT</a>
          <a href="portfolio">PORTFOLIO</a>
          <a href="contact">CONTACT</a>
        </nav>
      </TopBox>
      <BottomBox>
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
      </BottomBox>
      <TopBox align="right">
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
      </TopBox>
    </Container>
  );
};

export default Home;
