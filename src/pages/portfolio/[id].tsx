import { useRouter } from "next/router";
import Layout from "../../organisms/Layout/Layout";
import NavBar from "../../organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import React from "react";
import ProjectContainer from "../../organisms/ProjectContainer/ProjectContainer";

const PortfolioItemPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <NavBar items={navItems} highlightedIndex={0} />
      {id === "1" && <ComponentForProjectOne />}
    </Layout>
  );
};

const ComponentForProjectOne = () => {
  return <ProjectContainer />;
};

export default PortfolioItemPage;
