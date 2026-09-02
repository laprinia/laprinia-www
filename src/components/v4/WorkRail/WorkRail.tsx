import { useState, type CSSProperties } from "react";
import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Tag from "../../v2/Tag/Tag";
import ArrowLink from "../../v2/ArrowLink/ArrowLink";
import { projects, type Project } from "../../../../scripts/const/projects";
import { toProjectSlug } from "../../../lib/projects";
import { featuredProjectNames, workHref } from "../../../consts.v2";
import { v4WorkCta, v4WorkHint, v4WorkLabel } from "../../../consts.v4";
import {
  Container,
  Rail,
  RailLabel,
  RailHeading,
  RailNote,
} from "../shared.styles";
import {
  List,
  Row,
  Head,
  Index,
  Title,
  TitleLink,
  Description,
  Roles,
  Shot,
  More,
  WorkSection,
} from "./WorkRail.styles";

const tilts = ["-1.2deg", "1deg", "-0.8deg", "1.4deg"];

const WorkRail = () => {
  const [active, setActive] = useState<number | null>(null);

  const all = Object.values(projects).flat() as Project[];
  const featured = featuredProjectNames
    .map((name) => all.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));

  const total = String(featured.length).padStart(2, "0");
  const counter =
    active === null
      ? `${total} projects`
      : `${String(active + 1).padStart(2, "0")} / ${total}`;

  return (
    <WorkSection id="work">
      <Container>
        <Rail>
          <RailLabel>
            <RailHeading>{v4WorkLabel}</RailHeading>
            <RailNote>
              {counter}
              <br />
              {v4WorkHint}
            </RailNote>
          </RailLabel>

          <List>
            {featured.map((project, index) => (
              <Row
                key={project.name}
                data-active={active === index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() =>
                  setActive((current) => (current === index ? null : current))
                }
              >
                <div>
                  <Head>
                    <Index aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </Index>
                    <Title>
                      <TitleLink
                        href={`/work/${toProjectSlug(project.name)}`}
                        onFocus={() => setActive(index)}
                        onBlur={() =>
                          setActive((current) =>
                            current === index ? null : current,
                          )
                        }
                      >
                        {project.name}
                        <VisuallyHidden.Root>
                          {" "}
                          - read the case study
                        </VisuallyHidden.Root>
                      </TitleLink>
                    </Title>
                  </Head>

                  <Description>{project.description}</Description>

                  {project.roles.length ? (
                    <Roles aria-label={`Disciplines for ${project.name}`}>
                      {project.roles.slice(0, 3).map((role) => (
                        <Tag key={role}>{role}</Tag>
                      ))}
                    </Roles>
                  ) : null}
                </div>

                <Shot
                  style={
                    {
                      "--shot-tilt": tilts[index % tilts.length],
                    } as CSSProperties
                  }
                >
                  <Image
                    src={project.headshot}
                    alt=""
                    fill
                    sizes="(min-width: 700px) 240px, 100vw"
                    quality={75}
                  />
                </Shot>
              </Row>
            ))}

            <More>
              <ArrowLink href={workHref}>{v4WorkCta}</ArrowLink>
            </More>
          </List>
        </Rail>
      </Container>
    </WorkSection>
  );
};

export default WorkRail;
