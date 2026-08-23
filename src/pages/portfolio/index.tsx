import Head from "next/head";
import NavBar from "../../components/organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import PortfolioBoard from "../../components/v2/PortfolioBoard/PortfolioBoard";
import Footer from "../../components/v2/Footer/Footer";
import { PortfolioGround } from "../../styles/portfolio.v2.styles";

const PortfolioV2 = () => {
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
        currentHref="/portfolio"
      />
      <PortfolioGround>
        <main>
          <PortfolioBoard />
        </main>
      </PortfolioGround>
      <Footer />
    </>
  );
};

export default PortfolioV2;
