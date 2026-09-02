import Head from "next/head";
import type { GetStaticProps } from "next";
import NavBar from "../../components/organisms/NavBar/NavBar";
import Bloom from "../../components/v4/Bloom/Bloom";
import AboutPageV4 from "../../components/v4/About/AboutPage";
import Footer from "../../components/v2/Footer/Footer";
import { Stage, FooterSlot } from "../../components/v4/stage.styles";
import {
  v4AboutPageDescription,
  v4AboutPageTitle,
  v4NavItems,
} from "../../consts.v4";

const AboutV4 = () => (
  <>
    <Head>
      <title>{v4AboutPageTitle}</title>
      <meta name="description" content={v4AboutPageDescription} />
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <NavBar
      items={v4NavItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/v4/home"
      currentHref="/v4/about"
    />

    <Stage>
      <Bloom />
      <main>
        <AboutPageV4 />
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

export default AboutV4;
