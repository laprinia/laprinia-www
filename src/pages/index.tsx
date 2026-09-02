import Seo from "../components/Seo/Seo";
import PersonSchema from "../components/Seo/PersonSchema";
import NavBar from "../components/NavBar/NavBar";
import Bloom from "../components/Bloom/Bloom";
import HomeHero from "../components/HomeHero/HomeHero";
import WorkRail from "../components/WorkRail/WorkRail";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import AboutSection from "../components/AboutSection/AboutSection";
import Footer from "../components/Footer/Footer";
import { Stage, FooterSlot } from "../components/stage.styles";
import { personDescription } from "../consts.seo";
import { homeTitle } from "../consts.site";
import { navItems } from "../consts";

const Home = () => (
  <>
    <Seo title={homeTitle} description={personDescription} path="/" />
    <PersonSchema />

    <NavBar
      items={navItems}
      highlightedIndex={0}
      variant="highlight"
      layout="grouped"
      homeHref="/"
      currentHref="/"
    />

    <Stage>
      <Bloom />
      <main>
        <HomeHero />
        <WorkRail />
        <WhatIDo />
        <AboutSection />
      </main>
      <FooterSlot>
        <Footer />
      </FooterSlot>
    </Stage>
  </>
);

export default Home;
