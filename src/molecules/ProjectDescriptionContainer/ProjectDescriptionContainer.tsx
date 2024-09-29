import React from "react";
import styled from "styled-components";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

const TextContainer = styled.aside`
  flex: 1;
  max-height: 85vh;
  padding: 1rem 1rem 1rem;
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

const Header = styled.h1`
  font-size: calc(1.2 * var(--font-size-heading1-desktop));
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
  h3 {
    font-size: var(--font-size-base-desktop);
    font-weight: var(--font-weight-regular);
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
      <Header>
        <strong>{projectName}</strong>
      </Header>
      <LoopingTextContainer>
        {/*<LoopingText items={tags} />*/}
      </LoopingTextContainer>
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
  );
};

export default ProjectDescriptionContainer;
