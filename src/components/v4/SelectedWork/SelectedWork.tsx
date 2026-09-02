import { useState } from "react";
import ProjectRow from "../ProjectRow/ProjectRow";
import { projects, type Project } from "../../../../scripts/const/projects";
import {
  v4WorkHrefBase,
  v4SelectedWorkNames,
  v4ShotTilts,
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
import { SelectedSection, List } from "./SelectedWork.styles";

const SelectedWork = () => {
  const [active, setActive] = useState<number | null>(null);

  const all = Object.values(projects).flat() as Project[];
  const selected = v4SelectedWorkNames
    .map((name) => all.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));

  const total = String(selected.length).padStart(2, "0");
  const counter =
    active === null
      ? `${total} projects`
      : `${String(active + 1).padStart(2, "0")} / ${total}`;

  return (
    <SelectedSection id="selected-work">
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
            {selected.map((project, index) => (
              <ProjectRow
                hrefBase={v4WorkHrefBase}
                key={project.name}
                name={project.name}
                description={project.description}
                roles={project.roles}
                headshot={project.headshot}
                meta={`${String(index + 1).padStart(2, "0")} · ${project.year} · ${project.client.toLowerCase()}`}
                tilt={v4ShotTilts[index % v4ShotTilts.length]}
                active={active === index}
                onActivate={() => setActive(index)}
                onDeactivate={() =>
                  setActive((current) => (current === index ? null : current))
                }
              />
            ))}
          </List>
        </Rail>
      </Container>
    </SelectedSection>
  );
};

export default SelectedWork;
