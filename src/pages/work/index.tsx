import Head from "next/head";
import NavBar from "../../components/organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import PortfolioBoard from "../../components/v2/PortfolioBoard/PortfolioBoard";
import Footer from "../../components/v2/Footer/Footer";
import { WorkGround } from "../../styles/work.v2.styles";

const WorkPage = () => {
  return (
    <>
      <Head>
        <title>work — Lavinia Dumitrenco</title>
        <meta
          name="description"
          content="Selected product design and development work: enterprise platforms, design systems and experiments."
        />
      </Head>
      <NavBar
        items={navItems}
        highlightedIndex={0}
        variant="highlight"
        currentHref="/work"
      />
      <WorkGround>
        <main>
          <PortfolioBoard />
        </main>
      </WorkGround>
      <Footer />
    </>
  );
};

export default WorkPage;
