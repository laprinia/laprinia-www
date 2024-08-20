import React from "react";
import NavBar from "../organisms/NavBar/NavBar";
import { navItems } from "../consts";
import Layout from "../organisms/Layout/Layout";
import styled from "styled-components";
import CurriculumComponent from "../molecules/CurriculumComponent/CurriculumComponent";
import HeadshotComponent from "../molecules/HeadshotComponent/HeadshotComponent";

const Wrapper = styled.div`
  margin: 0 1.5rem;
`;

const ContainerWrapper = styled.section`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0 0rem;
  border-top: 0.25rem solid var(--accent-color);
`;

const About = () => {
  const articles = [
    <p key="1">Article 1</p>,
    <p key="2">Article 2</p>,
    <p key="3">Article 3</p>,
    <p key="4">Article 4</p>,
  ];
  return (
    <Layout>
      <NavBar items={navItems} highlightedIndex={2} />
      <ContainerWrapper>
        <HeadshotComponent />
        <CurriculumComponent articles={articles} />
      </ContainerWrapper>
    </Layout>
  );
};

export default About;
