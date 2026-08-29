import Head from "next/head";
import type { GetStaticProps } from "next";
import NavBar from "../../components/organisms/NavBar/NavBar";
import HomeFolders from "../../components/v3/HomeFolders/HomeFolders";
import { navItems } from "../../consts";
import { v3HomeDescription, v3HomeTitle } from "../../consts.v3";

const HomeV3 = () => (
  <>
    <Head>
      <title>{v3HomeTitle}</title>
      <meta name="description" content={v3HomeDescription} />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <NavBar
      items={navItems}
      highlightedIndex={0}
      variant="highlight"
      currentHref="/"
    />
    <main>
      <HomeFolders />
    </main>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.VERCEL_ENV === "production") {
    return { notFound: true };
  }

  return { props: {} };
};

export default HomeV3;
