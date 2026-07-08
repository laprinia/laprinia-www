import { useRouter } from "next/router";
import Layout from "../../components/organisms/Layout/Layout";
import { PageContent } from "../../components/organisms/Layout/Layout.styles";
import NavBar from "../../components/organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import ProjectTemplate from "../../components/organisms/ProjectContainer/ProjectTemplate";
import { Project, projects } from "../../../scripts/const/projects";

const PortfolioItemPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const getProjectById = (
    id: string | string[] | undefined,
  ): Project | null => {
    if (!id) return null;
    const allProjects = Object.values(projects).flat();
    const normalizedId = id.toString().toLowerCase();
    return (
      allProjects.find((project) => {
        const projectSlug = project.name.toLowerCase().replaceAll(" ", "-");
        const projectNameSpaces = project.name.toLowerCase().replaceAll("-", " ");
        return (
          project.name.toLowerCase() === normalizedId ||
          projectSlug === normalizedId ||
          projectNameSpaces === normalizedId
        );
      }) || null
    );
  };

  const project = getProjectById(id);

  return (
    <Layout>
      <NavBar items={navItems} highlightedIndex={0} />
      <PageContent>
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
      </PageContent>
    </Layout>
  );
};

export default PortfolioItemPage;
