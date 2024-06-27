import styled from "styled-components";

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
  font-size: ${({ big }) => (big ? "5rem" : "1rem")};
  font-family: ${({ big }) =>
    big ? "var(--font-heading)" : "var(--font-heading)"};
  padding: 0 1rem;

  p {
    margin: 0;
    padding: 0;

    margin-top: ${({ big }) => (big ? "0rem" : "2rem")};
    margin-bottom: ${({ big }) => (big ? "0rem" : "1rem")};
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

const SpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Box align="left" vAlign="top" big aria-labelledby="name">
        <header>
          <p>LAVINIA</p>
          <p>DUMITRENCO</p>
        </header>
      </Box>
      <Box align="right" vAlign="top">
        <nav aria-labelledby="navigation">
          <p id="navigation" hidden>
            Navigation
          </p>
          <a href="#about">ABOUT</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
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
          <p>AVAILABLE FOR WORK</p>
        </article>
      </Box>
      <Box align="right" vAlign="bottom" big>
        <footer aria-labelledby="job-title">
          <p id="job-title" hidden>
            Job Title
          </p>
          <p>WEB</p>
          <p>DEVELOPER</p>
        </footer>
      </Box>
    </Container>
  );
};

export default Home;
