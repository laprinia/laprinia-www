import { ArrowRight } from "lucide-react";
import Button from "../../v2/Button/Button";
import ArrowLink from "../../v2/ArrowLink/ArrowLink";
import { githubLink, linkedinLink } from "../../../consts";
import { aboutMeParagraphs } from "../../../consts.v2";
import {
  v4AboutCta,
  v4AboutLabel,
  v4AboutMeta,
  v4ContactCta,
} from "../../../consts.v4";
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
} from "./About.styles";

const AboutV4 = () => (
  <AboutSection id="about">
    <Container>
      <Rail>
        <RailLabel>
          <RailHeading>{v4AboutLabel}</RailHeading>
        </RailLabel>

        <Columns>
          <Copy>
            {aboutMeParagraphs.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
            <ArrowLink href="/about">{v4AboutCta}</ArrowLink>
          </Copy>

          <Meta>
            {v4AboutMeta.map((row) => (
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
                <a href="/contact">{v4ContactCta}</a>
              </Button>
            </CtaSlot>
          </Meta>
        </Columns>
      </Rail>
    </Container>
  </AboutSection>
);

export default AboutV4;
