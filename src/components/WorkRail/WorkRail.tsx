import { useState } from "react";
import ArrowLink from "../ArrowLink/ArrowLink";
import ProjectRow from "../ProjectRow/ProjectRow";
import { projects, type Project } from "../../../scripts/const/projects";
import { featuredProjectNames, workHref } from "../../consts.content";
import {
  workHrefBase,
  shotTilts,
  workCta,
  workHint,
  workLabel,
} from "../../consts.site";
import {
  Container,
  Rail,
  RailLabel,
  RailHeading,
  RailNote,
} from "../shared.styles";
import { List, More, WorkSection } from "./WorkRail.styles";

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
            <RailHeading>{workLabel}</RailHeading>
            <RailNote>
              {counter}
              <br />
              {workHint}
            </RailNote>
          </RailLabel>

          <List>
            {featured.map((project, index) => (
              <ProjectRow
                hrefBase={workHrefBase}
                key={project.name}
                name={project.name}
                description={project.description}
                roles={project.roles}
                headshot={project.headshot}
                index={index + 1}
                tilt={shotTilts[index % shotTilts.length]}
                active={active === index}
                onActivate={() => setActive(index)}
                onDeactivate={() =>
                  setActive((current) => (current === index ? null : current))
                }
              />
            ))}

            <More>
              <ArrowLink href={workHref}>{workCta}</ArrowLink>
            </More>
          </List>
        </Rail>
      </Container>
    </WorkSection>
  );
};

export default WorkRail;
