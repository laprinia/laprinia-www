import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CardContainer = styled.article`
  overflow: hidden;
  height: 18.7rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1800px) {
    height: 30.5rem;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.figure`
  width: max(16rem, 100%);
  height: 70%;
  margin: 0;
  position: relative;
  align-self: center;

  @media (min-width: 1800px) {
    width: 100%;
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

  @media (min-width: 1800px) {
    justify-content: space-evenly;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectName = styled.h2`
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-base-desktop);
  margin: 0;

  @media (min-width: 1800px) {
    font-size: var(--font-size-base-xl);
  }
`;

const Year = styled.h3`
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-base-desktop);
  margin: 0;

  @media (min-width: 1800px) {
    font-size: var(--font-size-base-xl);
  }
`;

const TechText = styled.p`
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  font-weight: var(--font-weight-lighter);
  margin: 0.5rem 0;

  @media (max-width: 1023px) {
    font-size: var(--font-size-base-tablet);
  }

  @media (min-width: 1800px) {
    font-size: var(--font-size-base-xl);
  }
`;

const ProjectCard = ({
  projectName,
  projectId,
  year,
  imagePath,
  gifPath,
  techText,
}: {
  projectName: string;
  projectId: string;
  year: string;
  imagePath: string;
  gifPath: string;
  techText: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(max-width: 900px)").matches);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledLink
      href={`/portfolio/${projectId.replaceAll(/\s+/g, "-")}`}
      passHref
    >
      <CardContainer
        aria-labelledby={`project-${projectName}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ImageContainer>
          <Image
            src={isMobile ? gifPath : isHovered ? gifPath : imagePath}
            alt={projectName}
            loading="lazy"
            layout="fill"
            objectFit="cover"
            quality={10}
          />
        </ImageContainer>
        <TextContainer id={`project-${projectName}`}>
          <HeaderContainer>
            <ProjectName>{projectName}</ProjectName>
            <Year>{year}</Year>
          </HeaderContainer>
          <TechText>{techText}</TechText>
        </TextContainer>
      </CardContainer>
    </StyledLink>
  );
};

export default ProjectCard;
