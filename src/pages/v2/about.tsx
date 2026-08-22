import Head from "next/head";
import NavBar from "../../components/organisms/NavBar/NavBar";
import Footer from "../../components/v2/Footer/Footer";
import About from "../../components/v2/About/About";
import ScrollTopButton from "../../components/v2/ScrollTopButton/ScrollTopButton";
import { navItems } from "../../consts";
import { aboutId } from "../../consts.v2.about";
import { backToTopLabel } from "../../consts.v2.case";
import { previewGate } from "../../lib/preview";
import { V2GlobalStyle } from "../../styles/v2GlobalStyle";

const AboutV2 = () => (
  <>
    <Head>
      <title>about v2 — preview</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <V2GlobalStyle />
    <NavBar
      items={navItems}
      highlightedIndex={2}
      variant="highlight"
      currentHref="/about"
    />
    <main>
      <About />
    </main>
    <Footer />
    <ScrollTopButton href={`#${aboutId}`} label={backToTopLabel} />
  </>
);

export const getStaticProps = previewGate;

export default AboutV2;
