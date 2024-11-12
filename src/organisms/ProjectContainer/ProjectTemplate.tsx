import React from "react";
import styled from "styled-components";
import CarouselContainer from "../../molecules/CarouselContainer/CarouselContainer";
import ProjectDescriptionContainer from "../../molecules/ProjectDescriptionContainer/ProjectDescriptionContainer";
import {
  Button,
  MediaContent,
  projects,
  TextArticle,
} from "../../const/projects";

const ContainerWrapper = styled.main`
  display: flex;
  overflow: hidden;
  flex: 1;
  margin: 0;
  padding: 0 0rem;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  @media (max-width: 900px) {
    flex: none;
    flex-direction: column;
    overflow: auto;
    height: auto;
  }
`;
const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  border-top: 0.25rem solid var(--accent-color);

  @media (max-width: 900px) {
    border: none;
    flex-direction: column;
  }
`;

const CarouselWrapper = styled.main`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
    height: 40%;
  }
`;

const DetailsContainer = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    overflow: visible;
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
        <CarouselWrapper />
        <DetailsContainer aria-labelledby="project-details">
          <h2 hidden id="project-description">
            Project Description
          </h2>
          <ProjectDescriptionContainer
            projectName={`${getPositionByName()} ${projectName}`}
            tags={tags}
            buttons={buttons}
            content={content}
            colors={colors}
          />
        </DetailsContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default ProjectTemplate;
