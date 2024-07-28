import React from "react";
import DummyContainer from "../atoms/DummyContainer/DummyContainer";
import DummyHeading from "../atoms/DummyHeading/DummyHeading";
import NavBar from "../organisms/NavBar/NavBar";
import { navItems } from "../consts";
import Layout from "../organisms/Layout/Layout";

const Contact = () => (
  <Layout>
    <NavBar items={navItems} highlightedIndex={1} />
    <DummyContainer>
      <DummyHeading sizing={4}>/* work in progress */</DummyHeading>
    </DummyContainer>
  </Layout>
);

export default Contact;
