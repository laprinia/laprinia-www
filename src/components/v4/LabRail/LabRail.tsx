import { useState } from "react";
import Tag from "../../v2/Tag/Tag";
import ProjectRow from "../ProjectRow/ProjectRow";
import { projects, type Project } from "../../../../scripts/const/projects";
import {
  v4WorkHrefBase,
  v4LabFilterAll,
  v4LabFilters,
  v4LabHint,
  v4LabLabel,
  v4LabNames,
} from "../../../consts.v4";
import {
  Container,
  Rail,
  RailLabel,
  RailHeading,
  RailNote,
} from "../shared.styles";
import { LabSection, Body, Filters, List } from "./LabRail.styles";

const LabRail = () => {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>(v4LabFilterAll);

  const all = Object.values(projects).flat() as Project[];
  const experiments = v4LabNames
    .map((name) => all.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));

  const isVisible = (project: Project) =>
    filter === v4LabFilterAll || project.tags.includes(filter);

  const total = String(experiments.length).padStart(2, "0");
  const shown = String(experiments.filter(isVisible).length).padStart(2, "0");
  const counter =
    filter === v4LabFilterAll
      ? `${total} experiments`
      : `${shown} of ${total} · ${filter}`;

  return (
    <LabSection id="lab">
      <Container>
        <Rail>
          <RailLabel>
            <RailHeading>{v4LabLabel}</RailHeading>
            <RailNote>
              {counter}
              <br />
              {v4LabHint}
            </RailNote>
          </RailLabel>

          <Body>
            <Filters role="group" aria-label="Filter experiments by tag">
              {v4LabFilters.map((tag) => (
                <Tag
                  key={tag}
                  as="button"
                  type="button"
                  active={filter === tag}
                  onClick={() => setFilter(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </Filters>

            <List>
              {experiments.map((project, index) => (
                <ProjectRow
                  hrefBase={v4WorkHrefBase}
                  key={project.name}
                  variant="compact"
                  name={project.name}
                  description={project.description}
                  roles={project.tags}
                  headshot={project.headshot}
                  meta={`${project.year} · ${project.client}`}
                  active={active === index}
                  filtered={!isVisible(project)}
                  onActivate={() => setActive(index)}
                  onDeactivate={() =>
                    setActive((current) => (current === index ? null : current))
                  }
                />
              ))}
            </List>
          </Body>
        </Rail>
      </Container>
    </LabSection>
  );
};

export default LabRail;
