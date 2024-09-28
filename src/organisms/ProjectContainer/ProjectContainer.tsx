import React from "react";
import styled from "styled-components";
import CarouselContainer from "../../molecules/CarouselContainer/CarouselContainer";
import ProjectDescriptionContainer from "../../molecules/ProjectDescriptionContainer/ProjectDescriptionContainer";
import ColorSwatchesContainer from "../../molecules/ColorSwatchesContainer/ColorSwatchesContainer";
import {Button, MediaContent, TextArticle} from "../../const/projects";


const ContainerWrapper = styled.main`
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

const ProjectContainer = ({
                            projectName,
                            tags,
                            buttons,
                            content,
                            mediaContents,
                          }: {
  projectName: string;
  tags: string[];
  buttons: Button[];
  content: TextArticle[];
  mediaContents: MediaContent[];
}) => {
  return (
      <ContainerWrapper>
        <Container>
          <h2 hidden id="media-carousel">
            Media Carousel
          </h2>
          <CarouselContainer aria-labelledby="media-carousel" items={mediaContents} />
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
            <ColorSwatchesContainer colors={["#FF5733", "#33FF57", "#3357FF"]} /> {/* Example colors */}
          </DetailsContainer>
        </Container>
      </ContainerWrapper>
  );
};

export default ProjectContainer;
