import React from "react";
import styled from "styled-components";
import { aboutIntroduction } from "../../consts";
import LoopingText from "../LoopingText/LoopingText";

const Container = styled.main`
  font-family: var(--font-heading);
  width: 65%;
  padding: 1.5rem;
  box-sizing: border-box;
`;

const Description = styled.section`
  font-size: var(--font-size-M);
  height: 20%;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: top;
  p {
    text-align: justify;
  }
`;

const CurriculumText = styled.section`
  height: 70%;
  display: flex;
  padding-bottom: 2rem;
`;

const Column = styled.article`
  flex: 1;
  padding-right: 0 0.5rem;
`;

const TechnologiesComponent = styled.section`
  padding-bottom: 1rem;
  height: 10%;
`;

const LoopingTextContainer = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  flex-shrink: 0;
  position: relative;
  height: 100%;
  width: 100%;
`;

const CurriculumComponent = ({ articles }: { articles: React.ReactNode[] }) => {
  const midIndex = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, midIndex);
  const rightColumn = articles.slice(midIndex);
  const tags = [
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "Figma",
    "Adobe XD",
    "Next.js",
    "WebGL",
    "D3",
    "SASS",
    "Storybook",
    "Playwright",
    "Redux",
    "Node.js",
    "REST",
    "React Testing Library",
    "Jest",
    "AWS",
    "Docker",
    "Angular",
    "OpenGL",
    "C++",
    "Responsive Design",
    "Accessibility",
    "SEO",
  ];
  const loopingTextContent = tags.map((tag, index) => (
    <span key={index} style={{ paddingRight: "1rem" }}>{`${tag}`}</span>
  ));
  return (
    <Container>
      <Description aria-labelledby="description">
        <p>{aboutIntroduction}</p>
      </Description>
      <CurriculumText aria-labelledby="curriculum">
        <Column>{leftColumn}</Column>
        <Column>{rightColumn}</Column>
      </CurriculumText>
      <TechnologiesComponent aria-labelledby="skills">
        <section hidden aria-labelledby="skills-used">
          {tags.map((tag, index) => (
            <p hidden key={index}>
              {tag}
            </p>
          ))}
        </section>
        <LoopingTextContainer>
          <LoopingText loopingTextContent={loopingTextContent} reverse={true} />
        </LoopingTextContainer>
      </TechnologiesComponent>
    </Container>
  );
};

export default CurriculumComponent;
