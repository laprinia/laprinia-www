import Head from "next/head";
import NavBar from "../components/organisms/NavBar/NavBar";
import Footer from "../components/v2/Footer/Footer";
import About from "../components/v2/About/About";
import ScrollTopButton from "../components/v2/ScrollTopButton/ScrollTopButton";
import { navItems } from "../consts";
import { backToTopLabel } from "../consts.v2.case";

const AboutV2 = () => (
  <>
    <Head>
      <title>about - Lavinia Dumitrenco</title>
      <meta
        name="description"
        content="Five years designing for complex, technical products — research, interaction design and design systems, built as well as designed."
      />
    </Head>
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
    <ScrollTopButton label={backToTopLabel} />
  </>
);

export default AboutV2;
