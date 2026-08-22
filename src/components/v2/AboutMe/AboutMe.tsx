import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import NotebookSection from "../NotebookSection/NotebookSection";
import Button from "../Button/Button";
import { githubLink, linkedinLink } from "../../../consts";
import {
  aboutMeHeading,
  aboutMeId,
  aboutMeLink,
  aboutMeParagraphs,
  contactCta,
  contactFacts,
  contactLinksLabel,
} from "../../../consts.v2";
import {
  AboutGrid,
  AboutColumn,
  AboutParagraph,
  ColumnAction,
  ContactColumn,
  ContactList,
  ContactRow,
  ContactLabel,
  ContactValue,
  ContactLinks,
  ContactSeparator,
} from "./AboutMe.styles";

const socials = [
  { label: "LinkedIn", href: linkedinLink },
  { label: "GitHub", href: githubLink },
];

const AboutMe = () => (
  <NotebookSection
    id={aboutMeId}
    heading={aboutMeHeading}
    background="var(--neutral-700)"
    color="var(--support-color)"
  >
    <AboutGrid>
      <AboutColumn>
        {aboutMeParagraphs.map((paragraph) => (
          <AboutParagraph key={paragraph}>{paragraph}</AboutParagraph>
        ))}
        <ColumnAction>
          <Button
            asChild
            variant="outline"
            size="lg"
            icon={<ArrowRight strokeWidth={2.5} />}
          >
            <a href={aboutMeLink.href}>{aboutMeLink.label}</a>
          </Button>
        </ColumnAction>
      </AboutColumn>

      <ContactColumn>
        <ContactList>
          {contactFacts.map((fact) => (
            <ContactRow key={fact.label}>
              <ContactLabel>{fact.label}</ContactLabel>
              <ContactValue>{fact.value}</ContactValue>
            </ContactRow>
          ))}

          <ContactRow>
            <ContactLabel>{contactLinksLabel}</ContactLabel>
            <ContactValue>
              <ContactLinks>
                {socials.map((social, index) => (
                  <Fragment key={social.href}>
                    {index > 0 ? (
                      <ContactSeparator aria-hidden="true">·</ContactSeparator>
                    ) : null}
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  </Fragment>
                ))}
              </ContactLinks>
            </ContactValue>
          </ContactRow>
        </ContactList>

        <ColumnAction>
          <Button
            asChild
            variant="solid"
            size="lg"
            icon={<ArrowRight strokeWidth={2.5} />}
          >
            <a href={contactCta.href}>{contactCta.label}</a>
          </Button>
        </ColumnAction>
      </ContactColumn>
    </AboutGrid>
  </NotebookSection>
);

export default AboutMe;
