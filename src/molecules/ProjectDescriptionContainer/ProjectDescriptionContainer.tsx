import React from "react";
import styled from "styled-components";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import ColorSwatchesContainer from "../ColorSwatchesContainer/ColorSwatchesContainer";
import LoopingText from "../../molecules/LoopingText/LoopingText";

const BottomSection = styled.section`
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const TextContainer = styled.aside`
  flex: 1;
  height: 95%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding-top: 0rem;
    border: none;
    width: 100%;
    padding-bottom: 1rem;
    height: auto;
  }
`;

const Header = styled.h1`
  font-size: calc(1.2 * var(--font-size-heading1-desktop));
  font-weight: var(--font-weight-semibold);
  color: var(--accent-color);
  @media (max-width: 900px) {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;

const MobileColorSwatches = styled.aside`
  display: none;
  @media (max-width: 900px) {
    display: block;
    height: 2rem;
    width: 100%;
  }
`;

const LoopingTextWrapper = styled.aside`
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  padding-bottom: 1rem;
  @media (max-width: 900px) {
    margin-bottom: 0.5rem;
  }
`;

const ScrollArea = styled.article`
  overflow-y: auto;
  height: 100%;
  max-height: 100%;

  @media (max-width: 900px) {
    height: auto;
    padding-bottom: 4rem;
  }
`;

const Section = styled.section`
  margin-bottom: 1rem;
  @media (max-width: 1280px) {
    font-size: var(--font-size-body-desktop);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }
  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }
  h2,
  h3 {
    font-size: var(--font-size-base-desktop);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.5rem;
  }
  strong {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-base-desktop);
  }
  p {
    text-align: justify;
    font-weight: var(--font-weight-light);
    margin-bottom: 0.5rem;
  }
  ul {
    text-align: justify;
    list-style-type: none;
    margin-left: 1.5rem;
  }
  li {
    text-align: justify;
    margin-bottom: 0.5rem;
  }
  code {
    font-size: 14px;
    font-weight: var(--font-weight-light);
    background-color: var(--accent-color);
    color: var(--background-color);
  }
`;

const ProjectDescriptionContainer = ({
  projectName,
  tags,
  buttons,
  content,
  colors,
}: {
  projectName: string;
  tags: string[];
  buttons: { imageSrc: string; alt: string; link: string }[];
  content: { header: string; text: string }[];
  colors: string[];
}) => {
  return (
    <>
      <MobileColorSwatches>
        <ColorSwatchesContainer colors={colors} />
      </MobileColorSwatches>
      <TextContainer aria-labelledby="project-description">
        <h2 hidden id="project-description">
          Project Description
        </h2>
        <Header>
          <strong>{projectName}</strong>
        </Header>
        <LoopingTextWrapper>
          <LoopingText
            items={tags}
            padding={"0rem"}
            withDivider
            marqueeSpeed={"30s"}
          />
        </LoopingTextWrapper>
        <ButtonContainer buttons={buttons} />
        <ScrollArea>
          {content.map((item, index) => (
            <Section key={index}>
              <h2>{item.header.toUpperCase()}</h2>
              <article dangerouslySetInnerHTML={{ __html: item.text }} />
            </Section>
          ))}
        </ScrollArea>
      </TextContainer>
      <BottomSection>
        <h2 hidden id="color-swatches">
          Color Swatches
        </h2>
        <ColorSwatchesContainer colors={colors} />
      </BottomSection>
    </>
  );
};

export default ProjectDescriptionContainer;
