import Head from "next/head";
import type { GetStaticProps } from "next";
import NavBar from "../../components/organisms/NavBar/NavBar";
import Bloom from "../../components/v4/Bloom/Bloom";
import HomeHeroV4 from "../../components/v4/HomeHero/HomeHero";
import WorkRail from "../../components/v4/WorkRail/WorkRail";
import WhatIDoV4 from "../../components/v4/WhatIDo/WhatIDo";
import AboutV4 from "../../components/v4/About/About";
import Footer from "../../components/v2/Footer/Footer";
import { v4HomeDescription, v4HomeTitle, v4NavItems } from "../../consts.v4";
import { Stage } from "../../components/v4/stage.styles";

const HomeV4 = () => (
  <>
    <Head>
      <title>{v4HomeTitle}</title>
      <meta name="description" content={v4HomeDescription} />
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <NavBar
      items={v4NavItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="#top"
      currentHref="#top"
    />

    <Stage>
      <Bloom />
      <main>
        <HomeHeroV4 />
        <WorkRail />
        <WhatIDoV4 />
        <AboutV4 />
      </main>
      <Footer />
    </Stage>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.VERCEL_ENV === "production") {
    return { notFound: true };
  }

  return { props: {} };
};

export default HomeV4;
