import { Fragment } from "react";
import Image from "next/image";
import ArrowLink from "../../v2/ArrowLink/ArrowLink";
import Tag from "../../v2/Tag/Tag";
import { Mark } from "../shared.styles";
import { githubLink, linkedinLink } from "../../../consts";
import {
  aboutIntro,
  aboutLocation,
  aboutName,
  aboutRole,
  aboutSections,
} from "../../../consts.v2.about";
import {
  v4AboutStatus,
  v4PortraitAlt,
  v4PortraitPath,
} from "../../../consts.v4";
import {
  Layout,
  Rail,
  Portrait,
  Name,
  Standfirst,
  Role,
  Place,
  Status,
  Intro,
  RailLinks,
  Content,
  Section,
  SectionHead,
  SectionIndex,
  SectionTitle,
  Timeline,
  TimelineRow,
  Period,
  EntryTitle,
  EntryOrg,
  EntryText,
  TagRow,
  Groups,
  GroupRow,
  GroupLabel,
  Pairs,
  PairLabel,
  PairValue,
  BodyText,
} from "./AboutPage.styles";

const slug = (value: string) =>
  value.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");

const AboutPageV4 = () => (
  <Layout>
    <Rail>
      <Portrait>
        <Image
          src={v4PortraitPath}
          alt={v4PortraitAlt}
          width={802}
          height={1088}
          sizes="(min-width: 1000px) 176px, 40vw"
          priority
        />
      </Portrait>

      <Name>
        <Mark>{aboutName}</Mark>
      </Name>

      <Standfirst>
        <Role>{aboutRole}</Role>
        <Place>{aboutLocation}</Place>
        <Status>{v4AboutStatus}</Status>
      </Standfirst>

      <Intro>{aboutIntro}</Intro>

      <RailLinks>
        <li>
          <ArrowLink href={linkedinLink} mono iconSize={14}>
            linkedin
          </ArrowLink>
        </li>
        <li>
          <ArrowLink href={githubLink} mono iconSize={14}>
            github
          </ArrowLink>
        </li>
      </RailLinks>
    </Rail>

    <Content>
      {aboutSections.map((section, index) => {
        const headingId = `${slug(section.title)}-heading`;

        return (
          <Section key={section.title} aria-labelledby={headingId}>
            <SectionHead>
              <SectionIndex aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </SectionIndex>
              <SectionTitle id={headingId}>{section.title}</SectionTitle>
            </SectionHead>

            {section.kind === "timeline" ? (
              <Timeline>
                {section.entries.map((entry) => (
                  <TimelineRow key={`${entry.period}-${entry.title}`}>
                    <Period>{entry.period}</Period>
                    <div>
                      <EntryTitle>{entry.title}</EntryTitle>
                      {entry.org ? <EntryOrg>{entry.org}</EntryOrg> : null}
                      {entry.description ? (
                        <EntryText>{entry.description}</EntryText>
                      ) : null}
                    </div>
                  </TimelineRow>
                ))}
              </Timeline>
            ) : null}

            {section.kind === "tags" ? (
              <TagRow>
                {section.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagRow>
            ) : null}

            {section.kind === "groups" ? (
              <Groups>
                {section.groups.map((group) => (
                  <GroupRow key={group.label}>
                    <GroupLabel>{group.label}</GroupLabel>
                    <TagRow>
                      {group.tags.map((tag) => (
                        <Tag key={tag} shape="rect" tone="muted">
                          {tag}
                        </Tag>
                      ))}
                    </TagRow>
                  </GroupRow>
                ))}
              </Groups>
            ) : null}

            {section.kind === "pairs" ? (
              <Pairs>
                {section.pairs.map((pair) => (
                  <Fragment key={pair.label}>
                    <PairLabel>{pair.label}</PairLabel>
                    <PairValue>{pair.value}</PairValue>
                  </Fragment>
                ))}
              </Pairs>
            ) : null}

            {section.kind === "text" ? (
              <BodyText>{section.text}</BodyText>
            ) : null}
          </Section>
        );
      })}
    </Content>
  </Layout>
);

export default AboutPageV4;
