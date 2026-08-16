import Head from "next/head";
import { previewGate } from "../../lib/preview";
import { V2GlobalStyle } from "../../styles/v2GlobalStyle";
import HomeStage from "../../components/v2/HomeStage/HomeStage";

const HomeV2 = () => {
  return (
    <>
      <Head>
        <title>homepage v2 — preview</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <V2GlobalStyle />
      <main>
        <HomeStage />
      </main>
    </>
  );
};

export const getStaticProps = previewGate;

export default HomeV2;
