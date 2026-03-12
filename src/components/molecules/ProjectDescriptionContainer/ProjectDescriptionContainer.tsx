import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import ColorSwatchesContainer from "../ColorSwatchesContainer/ColorSwatchesContainer";
import LoopingText from "../../molecules/LoopingText/LoopingText";
import {
  BottomSection,
  TextContainer,
  Header,
  MobileColorSwatches,
  LoopingTextWrapper,
  StyledScrollRoot,
  StyledScrollViewport,
  StyledScrollbar,
  StyledThumb,
  Section,
} from "./ProjectDescriptionContainer.styles";

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
        <VisuallyHidden.Root asChild>
          <h2 id="project-description">Project Description</h2>
        </VisuallyHidden.Root>
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
        <StyledScrollRoot>
          <StyledScrollViewport>
            {content.map((item, index) => (
              <Section key={index}>
                <h2>{item.header.toUpperCase()}</h2>
                <article dangerouslySetInnerHTML={{ __html: item.text }} />
              </Section>
            ))}
          </StyledScrollViewport>
          <StyledScrollbar orientation="vertical">
            <StyledThumb />
          </StyledScrollbar>
        </StyledScrollRoot>
      </TextContainer>
      <BottomSection>
        <VisuallyHidden.Root asChild>
          <h2 id="color-swatches">Color Swatches</h2>
        </VisuallyHidden.Root>
        <ColorSwatchesContainer colors={colors} />
      </BottomSection>
    </>
  );
};

export default ProjectDescriptionContainer;
