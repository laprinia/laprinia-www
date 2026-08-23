import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import NavBar from "../../components/organisms/NavBar/NavBar";
import DoubleTextRibbon from "../../components/organisms/TextRibbon/DoubleTextRibbon";
import Footer from "../../components/v2/Footer/Footer";
import ScrollTopButton from "../../components/v2/ScrollTopButton/ScrollTopButton";
import CaseStudy from "../../components/v2/CaseStudy/CaseStudy";
import { RibbonBand } from "../../components/v2/CaseStudy/CaseStudy.styles";
import { navItems } from "../../consts";
import { backToTopLabel, caseTopId, keywordsLabel } from "../../consts.v2.case";
import {
  allProjects,
  findProjectBySlug,
  toProjectSlug,
} from "../../lib/projects";
import type { Project } from "../../../scripts/const/projects";

const CaseStudyPage = ({ project }: { project: Project }) => (
  <>
    <Head>
      <title>{`${project.name} — Lavinia Dumitrenco`}</title>
    </Head>
    <NavBar
      items={navItems}
      highlightedIndex={0}
      variant="highlight"
      currentHref="/portfolio"
    />
    <main>
      <CaseStudy project={project} />
    </main>
    {project.tags.length ? (
      <RibbonBand>
        <VisuallyHidden.Root asChild>
          <h2 id="skills">{keywordsLabel}</h2>
        </VisuallyHidden.Root>
        <DoubleTextRibbon tags={project.tags} />
      </RibbonBand>
    ) : null}
    <Footer />
    <ScrollTopButton href={`#${caseTopId}`} label={backToTopLabel} />
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
