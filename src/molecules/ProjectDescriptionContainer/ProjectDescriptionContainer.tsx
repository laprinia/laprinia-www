import ButtonContainer from "../ButtonContainer/ButtonContainer";
import React from "react";
import styled from "styled-components";

const TextContainer = styled.aside`
  flex: 0 0 85%;
  padding: 1rem;
  padding-top: 2rem;
  border-bottom: 0.25rem solid var(--accent-color);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 900px) {
    border: none;
    flex: 0 0 30rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Header = styled.div`
  font-size: var(--font-size-L);
  font-weight: var(--font-weight-bold);
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const LoopingTextContainer = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  flex-shrink: 0;
  position: relative;
  height: 1.5rem;
`;

const LoopingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: scroll 30s linear infinite;
  font-size: var(--font-size-M);
  font-weight: var(--font-weight-bold);
  color: var(--accent-color);
  position: absolute;
  will-change: transform;

  span {
    display: inline-flex;
    align-items: end;
  }

  .asterisk {
    margin: 0 0.5rem;
    transform: translateY(35%);
    font-size: var(--font-size-L);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  flex: 1;
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: var(--font-size-M);
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
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
  const loopingTextContent = tags.map((tag, index) => (
    <span key={index}>
      {tag}
      <span className="asterisk">*</span>
    </span>
  ));

  return (
    <TextContainer aria-labelledby="project-description">
      <h2 hidden id="project-description">
        Project Description
      </h2>
      <Header>{projectName}</Header>
      <LoopingTextContainer>
        <h2 hidden id="project-description">
          Technologies Used
        </h2>
        <LoopingText>{loopingTextContent}</LoopingText>
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
