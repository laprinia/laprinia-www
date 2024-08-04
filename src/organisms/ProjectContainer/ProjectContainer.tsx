import React from "react";
import styled from "styled-components";
import MDivider from "../../molecules/Divider/MDivider";
import ContentCarousel from "../../molecules/ContentCarousel/ContentCarousel";
import ColorSwatches from "../../molecules/ColorSwatches/ColorSwatches";

const ContainerWrapper = styled.div`
  font-family: var(--font-heading), serif;
  flex-direction: column;
  margin: 0;
  padding: 0 1rem;
  display: flex;
  flex: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const CarouselContainer = styled.article`
  flex: 0 0 60%;
  margin-right: 1rem;

  border: 2px solid var(--accent-color);
  @media (max-width: 900px) {
    flex: 0 0 60rem;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const DetailsContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
  }
`;

const TextContainer = styled.aside`
  flex: 0 0 92%;
  margin-bottom: 1rem;
  padding: 1rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 2px solid var(--accent-color);
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex: 0 0 30rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const ColorComponent = styled.aside`
  flex: 0 0 8%;
  border: 2px solid var(--accent-color);
  @media (max-width: 900px) {
    flex: 0 0 10rem;
    width: 100%;
  }
`;

const Header = styled.div`
  font-size: var(--font-size-L);
  font-weight: var(--font-weight-bold);
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const LoopingTextContainer = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  flex-shrink: 0;
  position: relative;
  height: 1.5rem;
`;

const LoopingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: scroll 30s linear infinite;
  font-size: var(--font-size-M);
  font-weight: var(--font-weight-bold);
  color: var(--accent-color);
  position: absolute;
  will-change: transform;

  span {
    display: inline-flex;
    align-items: end;
  }

  .asterisk {
    margin: 0 0.5rem;
    transform: translateY(35%);
    font-size: var(--font-size-L);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2.5rem;

  button {
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: none;
    background: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  flex: 1;
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: var(--font-size-M);
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: var(--font-size-M);
    text-align: justify;
  }
`;

const ProjectContainer = () => {
  const projectName = "1.1. frontend project";
  const tags = [
    "React",
    "Tailwind",
    "Node.js",
    "React",
    "Tailwind",
    "Node.js",
    "React",
    "Tailwind",
    "Node.js",
    "React",
    "Tailwind",
    "Node.js",
    "React",
    "Tailwind",
    "Node.js",
  ];
  const items = [
    { type: "image", src: "/1.1/1.png" },
    { type: "image", src: "/insta-template.png" },
  ];
  const buttons = [
    {
      imageSrc: "/behance.png",
      alt: "Behance",
      link: "https://www.behance.com/",
    },
    {
      imageSrc: "/github.png",
      alt: "GitHub",
      link: "https://github.com/",
    },
  ];

  const content = [
    {
      header: "A) About",
      text: "This project is a demonstration of a modern minimalist UI implemented in React. The primary focus was on creating a user-friendly, visually appealing interface that prioritizes efficiency and clarity. The development process involved addressing numerous challenges, including optimizing performance and ensuring cross-browser compatibility.",
    },
    {
      header: "B) Process",
      text: "This project is a demonstration of a modern minimalist UI implemented in React. The primary focus was on creating a user-friendly, visually appealing interface that prioritizes efficiency and clarity. The development process involved addressing numerous challenges, including optimizing performance and ensuring cross-browser compatibility.",
    },
  ];

  const loopingTextContent = tags.map((tag, index) => (
    <span key={index}>
      {tag}
      <span className="asterisk">*</span>
    </span>
  ));
  return (
    <ContainerWrapper>
      <MDivider />
      <ContentContainer>
        <CarouselContainer aria-labelledby="media-carousel">
          <h1 hidden id="media-carousel">
            Media Carousel
          </h1>
          <ContentCarousel items={items} />
        </CarouselContainer>
        <DetailsContainer aria-labelledby="project-media">
          <TextContainer aria-labelledby="project-description">
            <h2 hidden id="project-description">
              Project Container
            </h2>
            <Header>{projectName}</Header>
            <LoopingTextContainer>
              <LoopingText>{loopingTextContent}</LoopingText>
            </LoopingTextContainer>
            <ButtonContainer>
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => (window.location.href = button.link)}
                >
                  <img src={button.imageSrc} alt={button.alt} />
                </button>
              ))}
            </ButtonContainer>
            <ScrollArea>
              {content.map((item, index) => (
                <Section key={index}>
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </Section>
              ))}
            </ScrollArea>
          </TextContainer>
          <ColorComponent aria-labelledby="color-swatches">
            <h2 hidden id="color-swatches">
              Color Swatches
            </h2>
            <ColorSwatches
              colors={["#ECE3E1", "#FB6008", "#FAC205", "#040406", "#040406"]}
            />
          </ColorComponent>
        </DetailsContainer>
      </ContentContainer>
    </ContainerWrapper>
  );
};

export default ProjectContainer;
