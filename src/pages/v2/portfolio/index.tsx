import Head from "next/head";
import NavBar from "../../../components/organisms/NavBar/NavBar";
import { navItems } from "../../../consts";
import { previewGate } from "../../../lib/preview";
import { V2GlobalStyle } from "../../../styles/v2GlobalStyle";
import PortfolioBoard from "../../../components/v2/PortfolioBoard/PortfolioBoard";
import Footer from "../../../components/v2/Footer/Footer";
import { PortfolioGround } from "../../../styles/portfolio.v2.styles";

const PortfolioV2 = () => {
  return (
    <>
      <Head>
        <title>portfolio v2 — preview</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <V2GlobalStyle />
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

export const getStaticProps = previewGate;

export default PortfolioV2;
