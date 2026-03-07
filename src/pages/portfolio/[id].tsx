import { useRouter } from "next/router";
import Layout from "../../organisms/Layout/Layout";
import NavBar from "../../organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import React from "react";
import ProjectTemplate from "../../organisms/ProjectContainer/ProjectTemplate";
import { Project, projects } from "../../const/projects";

const PortfolioItemPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const getProjectById = (
    id: string | string[] | undefined,
  ): Project | null => {
    if (!id) return null;
    const allProjects = [
      ...projects["branding & design"],
      ...projects.web,
      ...projects["3d"],
      ...projects.experimental,
    ];
    return (
      allProjects.find(
        (project) =>
          project.name.toLowerCase() ===
          id.toString().toLowerCase().replaceAll("-", " "),
      ) || null
    );
  };

  const project = getProjectById(id);

  return (
    <Layout>
      <NavBar items={navItems} highlightedIndex={0} />
      {project && (
        <ProjectTemplate
          projectName={project.name}
          tags={project.tags}
          buttons={project.buttons}
          content={project.textContents}
          mediaContents={project.mediaContents}
          colors={project.colors}
        />
      )}
      {!project && <p>Project not found</p>}
    </Layout>
  );
};

export default PortfolioItemPage;
