import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import { navItems } from "../../consts";
import PortfolioContainer from "../../organisms/PortfolioContainer/PortfolioContainer";
import Layout from "../../organisms/Layout/Layout";
import ProjectCard from "../../molecules/ProjectCard/ProjectCard";
import MDivider from "../../molecules/Divider/MDivider";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 1.5rem;
  overflow-y: auto;
`;

const Portfolio = () => (
  <Layout>
    <NavBar items={navItems} highlightedIndex={0} />
    <Wrapper>
      <PortfolioContainer category="UI/UX" no="A">
        <ProjectCard
          projectName="1.1 fullstack authentication"
          year="2023"
          imagePath="/1.1/1.png"
          gifPath="/1.1/2.gif"
          techText="/*react, mongodb*/"
        />
        <ProjectCard
          projectName="1.1 fullstack authentication"
          year="2023"
          imagePath="/1.1/1.png"
          gifPath="/1.1/2.gif"
          techText="/*react, mongodb*/"
        />
        <ProjectCard
          projectName="1.1 fullstack authentication"
          year="2023"
          imagePath="/1.1/1.png"
          gifPath="/1.1/2.gif"
          techText="/*react, mongodb*/"
        />
      </PortfolioContainer>
      <MDivider />
      <PortfolioContainer category="WEB" no="B">
        <ProjectCard
          projectName="1.1 fullstack authentication"
          year="2023"
          imagePath="/1.1/1.png"
          gifPath="/1.1/2.gif"
          techText="/*react, mongodb*/"
        />
        <ProjectCard
          projectName="1.1 fullstack authentication"
          year="2023"
          imagePath="/1.1/1.png"
          gifPath="/1.1/2.gif"
          techText="/*react, mongodb*/"
        />
        <ProjectCard
          projectName="1.1 fullstack authentication"
          year="2023"
          imagePath="/1.1/1.png"
          gifPath="/1.1/2.gif"
          techText="/*react, mongodb*/"
        />
      </PortfolioContainer>
    </Wrapper>
  </Layout>
);

export default Portfolio;
