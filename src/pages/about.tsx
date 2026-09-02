import Seo from "../components/Seo/Seo";
import NavBar from "../components/NavBar/NavBar";
import Bloom from "../components/Bloom/Bloom";
import AboutPage from "../components/AboutPage/AboutPage";
import Footer from "../components/Footer/Footer";
import { Stage, FooterSlot } from "../components/stage.styles";
import { navItems } from "../consts";
import { aboutPageDescription, aboutPageTitle } from "../consts.site";

const About = () => (
  <>
    <Seo
      title={aboutPageTitle}
      description={aboutPageDescription}
      path="/about"
    />

    <NavBar
      items={navItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/"
      currentHref="/about"
    />

    <Stage>
      <Bloom />
      <main>
        <AboutPage />
      </main>
      <FooterSlot>
        <Footer />
      </FooterSlot>
    </Stage>
  </>
);

export default About;
