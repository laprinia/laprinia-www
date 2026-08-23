import Head from "next/head";
import NavBar from "../components/organisms/NavBar/NavBar";
import CustomCursor from "../components/atoms/CustomCursor/CustomCursor";
import { navItems } from "../consts";
import { backToTopLabel } from "../consts.v2.case";
import HomeStage from "../components/v2/HomeStage/HomeStage";
import Footer from "../components/v2/Footer/Footer";
import ScrollTopButton from "../components/v2/ScrollTopButton/ScrollTopButton";

const HomeV2 = () => {
  return (
    <>
      <Head>
        <title>Lavinia Dumitrenco — product designer & developer</title>
        <meta
          name="description"
          content="Product designer and developer in Bucharest. Five years of user research, flows and design systems, shipped into production."
        />
      </Head>
      <NavBar
        items={navItems}
        highlightedIndex={0}
        variant="highlight"
        currentHref="/"
      />
      <CustomCursor scoped />
      <main>
        <HomeStage />
      </main>
      <Footer />
      <ScrollTopButton label={backToTopLabel} />
    </>
  );
};

export default HomeV2;
