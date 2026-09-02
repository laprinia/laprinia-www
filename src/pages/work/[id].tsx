import type { GetStaticPaths, GetStaticProps } from "next";
import Seo from "../../components/Seo/Seo";
import NavBar from "../../components/NavBar/NavBar";
import CaseStudy from "../../components/CaseStudy/CaseStudy";
import Footer from "../../components/Footer/Footer";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";
import { Stage, FooterSlot } from "../../components/stage.styles";
import { backToTopLabel } from "../../consts.case";
import { workHrefBase } from "../../consts.site";
import {
  allProjects,
  findProjectBySlug,
  toProjectSlug,
} from "../../lib/projects";
import type { Project } from "../../../scripts/const/projects";
import { navItems } from "../../consts";

const CaseStudyPage = ({ project }: { project: Project }) => (
  <>
    <Seo
      title={`${project.name} - Lavinia Dumitrenco`}
      description={project.description}
      path={`/work/${toProjectSlug(project.name)}`}
      image={project.headshot}
    />

    <NavBar
      items={navItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/"
      currentHref={workHrefBase}
    />

    <Stage>
      <main>
        <CaseStudy project={project} />
      </main>
      <FooterSlot>
        <Footer />
      </FooterSlot>
    </Stage>

    <ScrollTopButton label={backToTopLabel} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allProjects()
    .filter((project) => project.published)
    .map((project) => ({ params: { id: toProjectSlug(project.name) } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = findProjectBySlug(String(params?.id));
  if (!project || !project.published) {
    return { notFound: true };
  }

  return { props: { project } };
};

export default CaseStudyPage;
