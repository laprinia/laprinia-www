import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Tag from "../Tag/Tag";
import { githubLink, linkedinLink } from "../../../consts";
import { heroPortraitAlt, heroPortraitPath } from "../../../consts.v2";
import {
  aboutId,
  aboutIntro,
  aboutLocation,
  aboutName,
  aboutRole,
  aboutSections,
} from "../../../consts.v2.about";
import {
  AboutGround,
  AboutLayout,
  Rail,
  Portrait,
  Identity,
  Name,
  NameMark,
  Role,
  Location,
  Intro,
  RailLinks,
  RailLink,
  Sections,
  Section,
  SectionIndex,
  HeadingSlot,
  SectionContent,
  Timeline,
  Period,
  Detail,
  DetailTitle,
  DetailOrg,
  DetailDescription,
  Groups,
  GroupLabel,
  HobbyLine,
  Tags,
  Pairs,
  PairLabel,
  PairValue,
} from "./About.styles";

const links = [
  { label: "linkedin", href: linkedinLink },
  { label: "github", href: githubLink },
];

const About = () => (
  <AboutGround id={aboutId}>
    <AboutLayout>
      <Rail>
        <Portrait>
          <Image
            src={heroPortraitPath}
            alt={heroPortraitAlt}
            fill
            sizes="(min-width: 1000px) 17rem, 12rem"
            quality={75}
            priority
          />
        </Portrait>

        <Name>
          <NameMark>{aboutName}</NameMark>
        </Name>

        <Identity>
          <Role>{aboutRole}</Role>
          <Location>{aboutLocation}</Location>
        </Identity>

        <Intro>{aboutIntro}</Intro>

        <RailLinks>
          {links.map((link) => (
            <li key={link.href}>
              <RailLink
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </RailLink>
            </li>
          ))}
        </RailLinks>
      </Rail>

      <Sections>
        {aboutSections.map((section, index) => (
          <Section
            key={section.title}
            aria-labelledby={`${section.title}-heading`}
          >
            <SectionIndex aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </SectionIndex>

            <HeadingSlot>
              <SectionHeading
                id={`${section.title}-heading`}
                text={section.title}
              />
            </HeadingSlot>

            <SectionContent>
              {section.kind === "timeline" ? (
                <Timeline>
                  {section.entries.map((entry) => (
                    <div
                      key={`${entry.period}-${entry.title}`}
                      style={{ display: "contents" }}
                    >
                      <Period>{entry.period}</Period>
                      <Detail>
                        <DetailTitle>{entry.title}</DetailTitle>
                        {entry.org ? <DetailOrg>{entry.org}</DetailOrg> : null}
                        {entry.description ? (
                          <DetailDescription>
                            {entry.description}
                          </DetailDescription>
                        ) : null}
                      </Detail>
                    </div>
                  ))}
                </Timeline>
              ) : null}

              {section.kind === "tags" ? (
                <Tags aria-label={section.title}>
                  {section.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Tags>
              ) : null}

              {section.kind === "groups" ? (
                <Groups>
                  {section.groups.map((group) => (
                    <div key={group.label} style={{ display: "contents" }}>
                      <GroupLabel>{group.label}</GroupLabel>
                      <Tags aria-label={group.label}>
                        {group.tags.map((tag) => (
                          <Tag key={tag} variant="rect">
                            {tag}
                          </Tag>
                        ))}
                      </Tags>
                    </div>
                  ))}
                </Groups>
              ) : null}

              {section.kind === "text" ? (
                <HobbyLine>{section.text}</HobbyLine>
              ) : null}

              {section.kind === "pairs" ? (
                <Pairs>
                  {section.pairs.map((pair) => (
                    <div key={pair.label} style={{ display: "contents" }}>
                      <PairLabel>{pair.label}</PairLabel>
                      <PairValue>{pair.value}</PairValue>
                    </div>
                  ))}
                </Pairs>
              ) : null}
            </SectionContent>
          </Section>
        ))}
      </Sections>
    </AboutLayout>
  </AboutGround>
);

export default About;
