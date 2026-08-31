import Seo from "../components/Seo/Seo";
import NavBar from "../components/organisms/NavBar/NavBar";
import CustomCursor from "../components/atoms/CustomCursor/CustomCursor";
import { navItems } from "../consts";
import { personDescription } from "../consts.seo";
import PersonSchema from "../components/Seo/PersonSchema";
import { backToTopLabel } from "../consts.v2.case";
import HomeStage from "../components/v2/HomeStage/HomeStage";
import Footer from "../components/v2/Footer/Footer";
import ScrollTopButton from "../components/v2/ScrollTopButton/ScrollTopButton";

const HomeV2 = () => {
  return (
    <>
      <Seo
        title="Lavinia Dumitrenco - Technical Product Designer"
        description={personDescription}
        path="/"
      />
      <PersonSchema />
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
