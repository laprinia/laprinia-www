import { useState } from "react";
import ArrowLink from "../../v2/ArrowLink/ArrowLink";
import ProjectRow from "../ProjectRow/ProjectRow";
import { projects, type Project } from "../../../../scripts/const/projects";
import { featuredProjectNames, workHref } from "../../../consts.v2";
import {
  v4WorkHrefBase,
  v4ShotTilts,
  v4WorkCta,
  v4WorkHint,
  v4WorkLabel,
} from "../../../consts.v4";
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
            <RailHeading>{v4WorkLabel}</RailHeading>
            <RailNote>
              {counter}
              <br />
              {v4WorkHint}
            </RailNote>
          </RailLabel>

          <List>
            {featured.map((project, index) => (
              <ProjectRow
                hrefBase={v4WorkHrefBase}
                key={project.name}
                name={project.name}
                description={project.description}
                roles={project.roles}
                headshot={project.headshot}
                index={index + 1}
                tilt={v4ShotTilts[index % v4ShotTilts.length]}
                active={active === index}
                onActivate={() => setActive(index)}
                onDeactivate={() =>
                  setActive((current) => (current === index ? null : current))
                }
              />
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
