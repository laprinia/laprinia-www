import React from "react";
import styled from "styled-components";
import { aboutIntroduction } from "../../consts";
import LoopingText from "../LoopingText/LoopingText";

const Container = styled.main`
  font-family: var(--font-heading);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const ScrollableWrapper = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Description = styled.section`
  flex: 0 1 auto;
  font-size: var(--font-size-M);
  padding-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;

  p {
    text-align: justify;
  }
`;

const CurriculumText = styled.section`
  flex: 1 1 auto;
  display: flex;
  padding-bottom: 2rem;
`;

const Column = styled.article`
  flex: 1;
  padding-right: 0 0.5rem;
`;

const TechnologiesComponent = styled.section`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// Parent component that uses Container
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
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

  return (
    <LayoutWrapper>
      <Container>
        <ScrollableWrapper aria-labelledby="about">
          <Description aria-labelledby="description">
            <p>{aboutIntroduction}</p>
          </Description>
          <CurriculumText aria-labelledby="curriculum">
            <Column>{leftColumn}</Column>
            <Column>{rightColumn}</Column>
          </CurriculumText>
        </ScrollableWrapper>
        <TechnologiesComponent aria-labelledby="skills">
          <LoopingText items={tags} />
          <LoopingText items={tags.reverse()} isReverse />
        </TechnologiesComponent>
      </Container>
    </LayoutWrapper>
  );
};

export default CurriculumComponent;
