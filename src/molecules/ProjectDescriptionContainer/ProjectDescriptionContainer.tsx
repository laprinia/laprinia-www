import React from "react";
import styled from "styled-components";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import ColorSwatchesContainer from "../ColorSwatchesContainer/ColorSwatchesContainer";
import LoopingText from "../../molecules/LoopingText/LoopingText";

const BottomSection = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.aside`
  flex: 1;
  height: 95%;
  padding: 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding-top: 0rem;
    border: none;
    flex: 0 0 40rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Header = styled.h1`
  font-size: calc(1.2 * var(--font-size-heading1-desktop));
  font-weight: var(--font-weight-semibold);
  color: var(--accent-color);
`;

const LoopingTextWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  padding-bottom: 1rem;
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  @media (max-width: 900px) {
    overflow-y: inherit;
  }
`;

const Section = styled.section`
  margin-bottom: 1rem;

  h2 {
    font-size: var(--font-size-base-desktop);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.5rem;
  }

  p {
    text-align: justify;
    font-weight: var(--font-weight-light);
    margin-bottom: 0.5rem;
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
      <TextContainer aria-labelledby="project-description">
        <h2 hidden id="project-description">
          Project Description
        </h2>
        <Header>
          <strong>{projectName}</strong>
        </Header>
        <LoopingTextWrapper>
          <LoopingText items={tags} padding={"0rem"} withDivider />
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
