import React, { useEffect, useState } from "react";
import NavBar from "../organisms/NavBar/NavBar";
import {
  aboutIntroduction,
  navItems,
  socialButtons,
  technologiesTags,
} from "../consts";
import Layout from "../organisms/Layout/Layout";
import styled from "styled-components";
import CurriculumComponent from "../molecules/CurriculumComponent/CurriculumComponent";
import HeadshotComponent from "../molecules/HeadshotComponent/HeadshotComponent";
import ExperienceArticle from "../molecules/AboutArticles/ExperienceArticle/ExperienceArticle";
import KeyStrengthsArticle from "../molecules/AboutArticles/KeyStrengthsArticle/KeyStrenghtsArticle";
import HobbiesArticle from "../molecules/AboutArticles/HobbiesArticle/HobbiesArticle";
import EducationArticle from "../molecules/AboutArticles/EducationArticle/EducationArticle";
import LanguageArticle from "../molecules/AboutArticles/LanguageArticle/LanguageArticle";
import CertificationArticle from "../molecules/AboutArticles/CertificationsArticle/CertificationArticle";
import MobileAbout from "../templates/MobileAbout/MobileAbout";

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

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const About = () => {
  const articles = [
    <ExperienceArticle />,
    <KeyStrengthsArticle />,
    <HobbiesArticle />,
    <EducationArticle />,
    <CertificationArticle />,
    <LanguageArticle />,
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      <NavBar items={navItems} highlightedIndex={2} />
      {isMobile ? (
        <MobileAbout
          descriptionText={aboutIntroduction}
          articles={articles}
          technologies={technologiesTags}
          buttons={socialButtons}
        />
      ) : (
        <ContainerWrapper>
          <HeadshotComponent />
          <CurriculumComponent articles={articles} />
        </ContainerWrapper>
      )}
    </Layout>
  );
};

export default About;
