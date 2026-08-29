import Seo from "../../components/Seo/Seo";
import NavBar from "../../components/organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import PortfolioBoard from "../../components/v2/PortfolioBoard/PortfolioBoard";
import Footer from "../../components/v2/Footer/Footer";
import { WorkGround } from "../../styles/work.v2.styles";

const WorkPage = () => {
  return (
    <>
      <Seo
        title="Work — Lavinia Dumitrenco"
        description="Selected product design and development work: enterprise platforms, design systems and experiments."
        path="/work"
      />
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
