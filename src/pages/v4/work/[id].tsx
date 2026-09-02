import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import NavBar from "../../../components/organisms/NavBar/NavBar";
import CaseStudyV4 from "../../../components/v4/CaseStudy/CaseStudy";
import Footer from "../../../components/v2/Footer/Footer";
import ScrollTopButton from "../../../components/v2/ScrollTopButton/ScrollTopButton";
import { Stage, FooterSlot } from "../../../components/v4/stage.styles";
import { backToTopLabel } from "../../../consts.v2.case";
import { v4NavItems, v4WorkHrefBase } from "../../../consts.v4";
import {
  allProjects,
  findProjectBySlug,
  toProjectSlug,
} from "../../../lib/projects";
import type { Project } from "../../../../scripts/const/projects";

const CaseStudyPageV4 = ({ project }: { project: Project }) => (
  <>
    <Head>
      <title>{`${project.name} v4 - Lavinia Dumitrenco`}</title>
      <meta name="description" content={project.description} />
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <NavBar
      items={v4NavItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/v4/home"
      currentHref={v4WorkHrefBase}
    />

    <Stage>
      <main>
        <CaseStudyV4 project={project} />
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
  if (process.env.VERCEL_ENV === "production") {
    return { notFound: true };
  }

  const project = findProjectBySlug(String(params?.id));
  if (!project || !project.published) {
    return { notFound: true };
  }

  return { props: { project } };
};

export default CaseStudyPageV4;
