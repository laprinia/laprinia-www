import Head from "next/head";
import NavBar from "../../components/organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import { previewGate } from "../../lib/preview";
import { V2GlobalStyle } from "../../styles/v2GlobalStyle";
import HomeStage from "../../components/v2/HomeStage/HomeStage";
import Footer from "../../components/v2/Footer/Footer";

const HomeV2 = () => {
  return (
    <>
      <Head>
        <title>homepage v2 — preview</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <V2GlobalStyle />
      <NavBar
        items={navItems}
        highlightedIndex={0}
        variant="highlight"
        currentHref="/"
      />
      <main>
        <HomeStage />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = previewGate;

export default HomeV2;
