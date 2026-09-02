import Head from "next/head";
import type { GetStaticProps } from "next";
import NavBar from "../../components/organisms/NavBar/NavBar";
import Bloom from "../../components/v4/Bloom/Bloom";
import PageHeader from "../../components/v4/PageHeader/PageHeader";
import SelectedWork from "../../components/v4/SelectedWork/SelectedWork";
import LabRail from "../../components/v4/LabRail/LabRail";
import Footer from "../../components/v2/Footer/Footer";
import {
  v4NavItems,
  v4WorkHeader,
  v4WorkPageDescription,
  v4WorkPageTitle,
} from "../../consts.v4";
import { Stage, FooterSlot } from "../../components/v4/stage.styles";

const WorkV4 = () => (
  <>
    <Head>
      <title>{v4WorkPageTitle}</title>
      <meta name="description" content={v4WorkPageDescription} />
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <NavBar
      items={v4NavItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/v4/home"
      currentHref="/v4/work"
    />

    <Stage>
      <Bloom />
      <main>
        <PageHeader
          ribbon={v4WorkHeader.ribbon}
          title={v4WorkHeader.title}
          intro={v4WorkHeader.intro}
        />
        <SelectedWork />
        <LabRail />
      </main>
      <FooterSlot>
        <Footer />
      </FooterSlot>
    </Stage>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.VERCEL_ENV === "production") {
    return { notFound: true };
  }

  return { props: {} };
};

export default WorkV4;
