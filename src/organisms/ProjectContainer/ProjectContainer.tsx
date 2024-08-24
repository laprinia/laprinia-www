import React from "react";
import styled from "styled-components";
import CarouselContainer from "../../molecules/CarouselContainer/CarouselContainer";
import ProjectDescriptionContainer from "../../molecules/ProjectDescriptionContainer/ProjectDescriptionContainer";
import ColorSwatchesContainer from "../../molecules/ColorSwatchesContainer/ColorSwatchesContainer";

const ContainerWrapper = styled.div`
  font-family: var(--font-heading), serif;
  flex-direction: column;
  margin: 0;
  padding: 0 0rem;
  display: flex;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  border-top: 0.25rem solid var(--accent-color);

  @media (max-width: 900px) {
    border: none;
    flex-direction: column;
    overflow-y: auto;
  }
`;

const DetailsContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
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
      imageSrc: "/social/behance.png",
      alt: "Behance",
      link: "https://www.behance.com/",
    },
    {
      imageSrc: "/social/github.png",
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
    {
      header: "A) About",
      text: "This project is a demonstration of a modern minimalist UI implemented in React. The primary focus was on creating a user-friendly, visually appealing interface that prioritizes efficiency and clarity. The development process involved addressing numerous challenges, including optimizing performance and ensuring cross-browser compatibility.",
    },
    {
      header: "B) Process",
      text: "This project is a demonstration of a modern minimalist UI implemented in React. The primary focus was on creating a user-friendly, visually appealing interface that prioritizes efficiency and clarity. The development process involved addressing numerous challenges, including optimizing performance and ensuring cross-browser compatibility.",
    },
    {
      header: "A) About",
      text: "This project is a demonstration of a modern minimalist UI implemented in React. The primary focus was on creating a user-friendly, visually appealing interface that prioritizes efficiency and clarity. The development process involved addressing numerous challenges, including optimizing performance and ensuring cross-browser compatibility.",
    },
    {
      header: "B) Process",
      text: "This project is a demonstration of a modern minimalist UI implemented in React. The primary focus was on creating a user-friendly, visually appealing interface that prioritizes efficiency and clarity. The development process involved addressing numerous challenges, including optimizing performance and ensuring cross-browser compatibility.",
    },
  ];

  const colors = [
    "#ECE3E1",
    "#FB6008",
    "#FAC205",
    "#040406",
    "#040406",
    "#040406",
  ];

  return (
    <ContainerWrapper>
      <Container>
        <h2 hidden id="media-carousel">
          Media Carousel
        </h2>
        <CarouselContainer aria-labelledby="media-carousel" items={items} />
        <DetailsContainer aria-labelledby="project-media">
          <h2 hidden id="project-description">
            Project Description
          </h2>
          <ProjectDescriptionContainer
            projectName={projectName}
            tags={tags}
            buttons={buttons}
            content={content}
          />
          <h2 hidden id="color-swatches">
            Color Swatches
          </h2>
          <ColorSwatchesContainer colors={colors} />
        </DetailsContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default ProjectContainer;
