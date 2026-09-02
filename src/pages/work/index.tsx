import Seo from "../../components/Seo/Seo";
import NavBar from "../../components/NavBar/NavBar";
import Bloom from "../../components/Bloom/Bloom";
import PageHeader from "../../components/PageHeader/PageHeader";
import SelectedWork from "../../components/SelectedWork/SelectedWork";
import LabRail from "../../components/LabRail/LabRail";
import Footer from "../../components/Footer/Footer";
import { Stage, FooterSlot } from "../../components/stage.styles";
import { navItems } from "../../consts";
import {
  workHeader,
  workPageDescription,
  workPageTitle,
} from "../../consts.site";

const Work = () => (
  <>
    <Seo title={workPageTitle} description={workPageDescription} path="/work" />

    <NavBar
      items={navItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/"
      currentHref="/work"
    />

    <Stage>
      <Bloom />
      <main>
        <PageHeader ribbon={workHeader.ribbon} title={workHeader.title} />
        <SelectedWork />
        <LabRail />
      </main>
      <FooterSlot>
        <Footer />
      </FooterSlot>
    </Stage>
  </>
);

export default Work;
