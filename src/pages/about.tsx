import React from "react";
import NavBar from "../organisms/NavBar/NavBar";
import { navItems } from "../consts";
import Layout from "../organisms/Layout/Layout";
import styled from "styled-components";
import CurriculumComponent from "../molecules/CurriculumComponent/CurriculumComponent";
import HeadshotComponent from "../molecules/HeadshotComponent/HeadshotComponent";
import ExperienceArticle from "../molecules/ExperienceArticle/ExperienceArticle";
import KeyStrenghtsArticle from "../molecules/KeyStrengthsArticle/KeyStrenghtsArticle";
import HobbiesArticle from "../molecules/HobbiesArticle/HobbiesArticle";
import EducationArticle from "../molecules/EducationArticle/EducationArticle";
import LanguageArticle from "../molecules/LanguageArticle/LanguageArticle";
import CertificationArticle from "../molecules/CertificationsArticle/CertificationArticle";

// const Wrapper = styled.div`
//   margin: 0 1.5rem;
// `;

const ContainerWrapper = styled.section`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0 0rem;
  border-top: 0.25rem solid var(--accent-color);
  overflow: auto;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
`;

const About = () => {
  const articles = [
    <ExperienceArticle />,
    <KeyStrenghtsArticle />,
    <HobbiesArticle />,
    <EducationArticle />,
    <CertificationArticle />,
    <LanguageArticle />,
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
