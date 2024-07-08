import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import CursorWaveTexture from "../molecules/textures/CursorWaveTexture";
import { Button } from "@nextui-org/button";
import StillTexture from "../molecules/textures/StillTexture";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70% 30%;
  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);
  margin: 2rem;
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

const Box = styled.section<{ big?: boolean; vAlign: string; align: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  justify-content: ${({ vAlign }) =>
    vAlign === "top"
      ? "flex-start"
      : vAlign === "center"
        ? "center"
        : "flex-end"};
  font-size: ${({ big }) => (big ? "3rem" : "1rem")};
  font-family: ${({ big }) =>
    big ? "var(--font-heading)" : "var(--font-heading)"};
  padding: 0 1rem;

  p {
    margin: 0;
    padding: 0;
    font-size: ${({ big }) => (big ? "6vw" : "1rem")};
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      margin-bottom: 0.5rem;
      text-decoration: none;
      color: black;
    }
  }

  @media (max-width: 1023px) {
    font-size: ${({ big }) => (big ? "3rem" : "1rem")};
  }

  @media (max-width: 767px) {
    font-size: ${({ big }) => (big ? "2rem" : "0.75rem")};
  }
`;

const Home = () => {
  const footerPath = "/dev.png";
  const headerPath = "/name.png";
  return (
    <Container>
      <Box align="left" vAlign="top" big aria-labelledby="name">
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
      </Box>
      <Box align="right" vAlign="top">
        <nav aria-labelledby="navigation">
          <p id="navigation" hidden>
            Navigation
          </p>
          <a href="about">ABOUT</a>
          <a href="portfolio">PORTFOLIO</a>
          <a href="contact">CONTACT</a>
        </nav>
      </Box>
      <Box align="left" vAlign="bottom">
        <article aria-labelledby="introduction">
          <p id="introduction" hidden>
            Introduction
          </p>
          <p>
            Hi! I am Lavinia, an experienced Web Developer based in Bucharest,
            RO.
          </p>
          <Button color="success" variant="shadow">
            Available for work
          </Button>
        </article>
      </Box>
      <Box align="right" vAlign="bottom" big>
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
      </Box>
    </Container>
  );
};

export default Home;
