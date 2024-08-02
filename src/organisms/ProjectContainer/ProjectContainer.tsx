import React from "react";
import styled from "styled-components";
import MDivider from "../../molecules/Divider/MDivider";
import ContentCarousel from "../../molecules/ContentCarousel/ContentCarousel";
import ColorSwatches from "../../molecules/ColorSwatches/ColorSwatches";

const ContainerWrapper = styled.div`
  flex-direction: column;
  margin: 0;
  padding: 0rem 1rem;
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

const ProjectDescriptionContainer = styled.article`
  flex: 0 0 60%;
  background-color: #999999;
  margin-right: 1rem;

  @media (max-width: 900px) {
    flex: 0 0 60rem;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProjectMediaContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
  }
`;

const MediaComponent = styled.aside`
  flex: 0 0 92%;
  background-color: #7a4b4b;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    flex: 0 0 30rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const ColorComponent = styled.aside`
  flex: 0 0 8%;
  @media (max-width: 768px) {
    flex: 0 0 10rem;
    width: 100%;
  }
`;

const ProjectContainer = () => {
  const items = [
    { type: "image", src: "/1.1/1.png" },
    { type: "image", src: "/insta-template.png" },
  ];
  return (
    <ContainerWrapper>
      <MDivider />
      <ContentContainer>
        <ProjectDescriptionContainer aria-labelledby="project-description">
          <h1 hidden id="project-description">
            Project Description
          </h1>
        </ProjectDescriptionContainer>
        <ProjectMediaContainer aria-labelledby="project-media">
          <MediaComponent aria-labelledby="media-carousel">
            <h2 hidden id="media-carousel">
              Picture Carousel
            </h2>
            <ContentCarousel items={items} />
          </MediaComponent>
          <ColorComponent aria-labelledby="color-swatches">
            <h2 hidden id="color-swatches">
              Color Swatches
            </h2>
            <ColorSwatches
              colors={["#ECE3E1", "#FB6008", "#FAC205", "#040406", "#040406"]}
            />
          </ColorComponent>
        </ProjectMediaContainer>
      </ContentContainer>
    </ContainerWrapper>
  );
};

export default ProjectContainer;
