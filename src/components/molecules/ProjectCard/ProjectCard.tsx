import { useState, useEffect } from "react";
import Image from "next/image";
import { cloudinaryRawUrl } from "../../../lib/cloudinary";
import {
  StyledLink,
  CardContainer,
  ImageContainer,
  TextContainer,
  HeaderContainer,
  ProjectName,
  Year,
  TechText,
} from "./ProjectCard.styles";

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
            src={imagePath}
            alt={projectName}
            loading="lazy"
            layout="fill"
            objectFit="cover"
            quality={10}
            style={{
              opacity: !isMobile && !isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cloudinaryRawUrl(gifPath)}
            alt={projectName}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isMobile || isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
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
