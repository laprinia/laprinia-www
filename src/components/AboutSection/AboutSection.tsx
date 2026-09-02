import { ArrowRight } from "lucide-react";
import Button from "../Button/Button";
import ArrowLink from "../ArrowLink/ArrowLink";
import { githubLink, linkedinLink } from "../../consts";
import { aboutMeParagraphs } from "../../consts.content";
import {
  aboutCta,
  aboutLabel,
  aboutMeta,
  contactCta,
} from "../../consts.site";
import { Container, Rail, RailLabel, RailHeading } from "../shared.styles";
import {
  AboutSection,
  Columns,
  Copy,
  Paragraph,
  Meta,
  MetaRow,
  MetaTerm,
  MetaDetail,
  Profiles,
  CtaSlot,
} from "./AboutSection.styles";

const AboutV4 = () => (
  <AboutSection id="about">
    <Container>
      <Rail>
        <RailLabel>
          <RailHeading>{aboutLabel}</RailHeading>
        </RailLabel>

        <Columns>
          <Copy>
            {aboutMeParagraphs.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
            <ArrowLink href="/about">{aboutCta}</ArrowLink>
          </Copy>

          <Meta>
            {aboutMeta.map((row) => (
              <MetaRow key={row.term}>
                <MetaTerm>{row.term}</MetaTerm>
                <MetaDetail>{row.detail}</MetaDetail>
              </MetaRow>
            ))}

            <MetaRow>
              <MetaTerm>profiles</MetaTerm>
              <Profiles>
                <ArrowLink href={linkedinLink} size="sm">
                  linkedin
                </ArrowLink>
                <ArrowLink href={githubLink} size="sm">
                  github
                </ArrowLink>
              </Profiles>
            </MetaRow>

            <CtaSlot>
              <Button
                asChild
                variant="solid"
                size="lg"
                icon={<ArrowRight strokeWidth={2.5} />}
              >
                <a href="/contact">{contactCta}</a>
              </Button>
            </CtaSlot>
          </Meta>
        </Columns>
      </Rail>
    </Container>
  </AboutSection>
);

export default AboutV4;
