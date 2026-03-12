import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import CarouselContainer from "../../molecules/CarouselContainer/CarouselContainer";
import ProjectDescriptionContainer from "../../molecules/ProjectDescriptionContainer/ProjectDescriptionContainer";
import {
  projects,
  type Button,
  type MediaContent,
  type Project,
  type ProjectCategories,
  type TextArticle,
} from "../../../../scripts/const/projects";
import {
  CarouselWrapper,
  Container,
  ContainerWrapper,
  DetailsContainer,
} from "./ProjectTemplate.styles";

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
    for (const [, categoryProjects] of Object.entries(projects) as [
      keyof ProjectCategories,
      Project[],
    ][]) {
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
        <VisuallyHidden.Root asChild>
          <h2 id="media-carousel">Media Carousel</h2>
        </VisuallyHidden.Root>
        <CarouselContainer
          aria-labelledby="media-carousel"
          items={mediaContents}
        />
        <CarouselWrapper />
        <DetailsContainer aria-labelledby="project-details">
          <VisuallyHidden.Root asChild>
            <h2 id="project-description">Project Description</h2>
          </VisuallyHidden.Root>
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
