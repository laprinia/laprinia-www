import React from "react";
import styled from "styled-components";
import CarouselContainer from "../../molecules/CarouselContainer/CarouselContainer";
import ProjectDescriptionContainer from "../../molecules/ProjectDescriptionContainer/ProjectDescriptionContainer";
import ColorSwatchesContainer from "../../molecules/ColorSwatchesContainer/ColorSwatchesContainer";
import {
  Button,
  MediaContent,
  ProjectCategories,
  projects,
  TextArticle,
} from "../../const/projects";

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

const ProjectTemplate = ({
  projectName,
  tags,
  buttons,
  content,
  mediaContents,
  colors,
}: {
  projectName: string;
  tags: string[];
  buttons: Button[];
  content: TextArticle[];
  mediaContents: MediaContent[];
  colors: string[];
}) => {
  const getPositionByName = () => {
    let position = "";
    let categoryIndex = -1;
    for (const [category, categoryProjects] of Object.entries(projects)) {
      categoryIndex++;
      const projectIndex = categoryProjects.findIndex(
        (project) => project.name.toLowerCase() === projectName.toLowerCase(),
      );

      if (projectIndex !== -1) {
        position = `${categoryIndex + 1}.${projectIndex + 1}`;
        break;
      }
    }
    return position;
  };
  return (
    <ContainerWrapper>
      <Container>
        <h2 hidden id="media-carousel">
          Media Carousel
        </h2>
        <CarouselContainer
          aria-labelledby="media-carousel"
          items={mediaContents}
        />
        <DetailsContainer aria-labelledby="project-media">
          <h2 hidden id="project-description">
            Project Description
          </h2>
          <ProjectDescriptionContainer
            projectName={`${getPositionByName()} ${projectName}`}
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

export default ProjectTemplate;
