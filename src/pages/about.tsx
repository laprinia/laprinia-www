import { useEffect, useState } from "react";
import NavBar from "../components/organisms/NavBar/NavBar";
import {
  aboutIntroduction,
  navItems,
  socialButtons,
  skillTags,
} from "../consts";
import Layout from "../components/organisms/Layout/Layout";
import { PageContent } from "../components/organisms/Layout/Layout.styles";
import styled from "styled-components";
import CurriculumComponent from "../components/molecules/CurriculumComponent/CurriculumComponent";
import HeadshotComponent from "../components/organisms/HeadshotComponent/HeadshotComponent";
import ExperienceArticle from "../components/molecules/AboutArticles/ExperienceArticle/ExperienceArticle";
import KeyStrengthsArticle from "../components/molecules/AboutArticles/KeyStrengthsArticle/KeyStrenghtsArticle";
import HobbiesArticle from "../components/molecules/AboutArticles/HobbiesArticle/HobbiesArticle";
import EducationArticle from "../components/molecules/AboutArticles/EducationArticle/EducationArticle";
import LanguageArticle from "../components/molecules/AboutArticles/LanguageArticle/LanguageArticle";
import CertificationArticle from "../components/molecules/AboutArticles/CertificationsArticle/CertificationArticle";
import MobileAbout from "../components/templates/MobileAbout/MobileAbout";

const ContainerWrapper = styled.section`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0 0rem;
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
      <PageContent>
        {isMobile ? (
          <MobileAbout
            descriptionText={aboutIntroduction}
            articles={articles}
            technologies={skillTags}
            buttons={socialButtons}
          />
        ) : (
          <ContainerWrapper>
            <HeadshotComponent />
            <CurriculumComponent articles={articles} />
          </ContainerWrapper>
        )}
      </PageContent>
    </Layout>
  );
};

export default About;
