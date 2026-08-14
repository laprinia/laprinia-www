import Head from "next/head";
import dynamic from "next/dynamic";
import { previewGate } from "../../lib/preview";
import HomeHero from "../../components/v2/HomeHero/HomeHero";

/**
 * The only client-only piece on the page. Everything else — name, role, bio,
 * nav — is server-rendered, so the page is meaningful without JavaScript.
 */
const HeroCanvas = dynamic(
  () => import("../../components/v2/HeroCanvas/HeroCanvas"),
  { ssr: false },
);

const HomeV2 = () => {
  return (
    <>
      <Head>
        <title>homepage v2 — preview</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>
        <HomeHero canvas={<HeroCanvas />} />
      </main>
    </>
  );
};

export const getStaticProps = previewGate;

export default HomeV2;
