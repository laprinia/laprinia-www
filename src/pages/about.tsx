import React from "react";
import DummyContainer from "../atoms/DummyContainer/DummyContainer";
import DummyHeading from "../atoms/DummyHeading/DummyHeading";
import NavBar from "../organisms/NavBar/NavBar";
import { navItems } from "../consts";
import Layout from "../organisms/Layout/Layout";

const About = () => (
  <Layout>
    <NavBar items={navItems} highlightedIndex={2} />
    <DummyContainer>
      <DummyHeading sizing={4}>/* work in progress */</DummyHeading>
    </DummyContainer>
  </Layout>
);

export default About;
