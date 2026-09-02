import Seo from "../components/Seo/Seo";
import NavBar from "../components/NavBar/NavBar";
import Bloom from "../components/Bloom/Bloom";
import ContactPage from "../components/ContactPage/ContactPage";
import Footer from "../components/Footer/Footer";
import { Stage, FooterSlot } from "../components/stage.styles";
import { navItems } from "../consts";
import { contactPageDescription, contactPageTitle } from "../consts.site";

const Contact = () => (
  <>
    <Seo
      title={contactPageTitle}
      description={contactPageDescription}
      path="/contact"
    />

    <NavBar
      items={navItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/"
      currentHref="/contact"
    />

    <Stage>
      <Bloom />
      <ContactPage />
      <FooterSlot>
        <Footer />
      </FooterSlot>
    </Stage>
  </>
);

export default Contact;
