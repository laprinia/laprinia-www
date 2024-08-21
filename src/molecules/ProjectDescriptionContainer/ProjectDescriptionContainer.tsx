import React from "react";
import styled from "styled-components";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

const TextContainer = styled.aside`
  flex: 1;
  max-height: 85vh;
  padding: 2rem 1rem 1rem;
  border-bottom: 0.25rem solid var(--accent-color);
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

const Header = styled.div`
  font-size: var(--font-size-M-heading);
  font-weight: var(--font-weight-semibold);
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const LoopingTextContainer = styled.div`
  display: flex;
  flex: 1;
  height: 1.5rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: var(--font-size-M);
    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-heading);
    font-size: var(--font-size-M);
    text-align: justify;
  }
`;

const ProjectDescriptionContainer = ({
  projectName,
  tags,
  buttons,
  content,
}: {
  projectName: string;
  tags: string[];
  buttons: { imageSrc: string; alt: string; link: string }[];
  content: { header: string; text: string }[];
}) => {
  return (
    <TextContainer aria-labelledby="project-description">
      <h2 hidden id="project-description">
        Project Description
      </h2>
      <Header>{projectName}</Header>
      <LoopingTextContainer>
        {/*<LoopingText items={tags} />*/}
      </LoopingTextContainer>
      <ButtonContainer buttons={buttons} />
      <ScrollArea>
        {content.map((item, index) => (
          <Section key={index}>
            <h2>{item.header}</h2>
            <p>{item.text}</p>
          </Section>
        ))}
      </ScrollArea>
    </TextContainer>
  );
};

export default ProjectDescriptionContainer;
