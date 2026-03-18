import NavBar from "../../components/organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import PortfolioContainer from "../../components/organisms/PortfolioContainer/PortfolioContainer";
import Layout from "../../components/organisms/Layout/Layout";
import ProjectCard from "../../components/molecules/ProjectCard/ProjectCard";
import styled from "styled-components";
import {
  Project,
  ProjectCategories,
  projects,
} from "../../../scripts/const/projects";

const Wrapper = styled.div`
  padding-top: 2rem;
  margin: 0 1.5rem;
  overflow-y: auto;
`;

const Portfolio = () => {
  const categories = Object.keys(projects) as (keyof ProjectCategories)[];

  return (
    <Layout>
      <NavBar items={navItems} highlightedIndex={0} />
      <Wrapper>
        {categories.map((category, categoryIndex) => (
          <>
            <PortfolioContainer
              key={category}
              category={category}
              no={String.fromCharCode(65 + categoryIndex)}
            >
              {projects[category].map(
                (project: Project, projectIndex: number) => {
                  const projectNumber = `${categoryIndex + 1}.${projectIndex + 1}`;
                  return (
                    <ProjectCard
                      key={project.name}
                      projectName={`${projectNumber} ${project.name}`}
                      projectId={project.name}
                      year={String(project.year)}
                      imagePath={project.headshot}
                      gifPath={project.headshotGif}
                      techText={project.techStackPreview}
                    />
                  );
                },
              )}
            </PortfolioContainer>
          </>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Portfolio;
