import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import PortfolioContainer from "../../organisms/PortfolioContainer/PortfolioContainer";
import Layout from "../../organisms/Layout/Layout";
import ProjectCard from "../../molecules/ProjectCard/ProjectCard";
import MDivider from "../../molecules/Divider/MDivider";
import styled from "styled-components";
import { Project, ProjectCategories, projects } from "../../const/projects";

const Wrapper = styled.div`
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
              category={category.toUpperCase()}
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
                      imagePath={`/projects/${project.name.replaceAll(/\s+/g, "-")}/headshot-img.webp`}
                      gifPath={`/projects/${project.name.replaceAll(/\s+/g, "-")}/headshot.webp`}
                      techText={project.techStackPreview}
                    />
                  );
                },
              )}
            </PortfolioContainer>
            <MDivider />
          </>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Portfolio;
