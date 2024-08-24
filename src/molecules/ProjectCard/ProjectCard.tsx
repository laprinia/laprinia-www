import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.article`
  overflow: hidden;
  width: 100%;
  height: 18.7rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.figure`
  width: max(16rem, 100%);
  height: 70%;
  margin: 0;
  background-size: cover;
  background-position: center;
  align-self: center;
  background-image: url(${(props) => props.imagePath});

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.figcaption`
  text-align: left;
  margin: 0;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectName = styled.h2`
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  font-weight: var(--font-weight-regular);
  margin: 0;
  @media (max-width: 1023px) {
    font-size: var(--font-size-S);
  }
`;

const Year = styled.h3`
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  font-weight: var(--font-weight-regular);
  margin: 0;
  @media (max-width: 1023px) {
    font-size: var(--font-size-S);
  }
`;

const TechText = styled.p`
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  font-weight: var(--font-weight-lighter);
  margin: 0.5rem 0;
  @media (max-width: 1023px) {
    font-size: var(--font-size-S);
  }
`;

const ProjectCard = ({
  projectName,
  year,
  imagePath,
  gifPath,
  techText,
}: {
  projectName: string;
  year: string;
  imagePath: string;
  gifPath: string;
  techText: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer
      aria-labelledby={`project-${projectName}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageContainer
        imagePath={isHovered ? gifPath : imagePath}
      ></ImageContainer>
      <TextContainer id={`project-${projectName}`}>
        <HeaderContainer>
          <ProjectName>{projectName}</ProjectName>
          <Year>{year}</Year>
        </HeaderContainer>
        <TechText>{techText}</TechText>
      </TextContainer>
    </CardContainer>
  );
};

export default ProjectCard;
