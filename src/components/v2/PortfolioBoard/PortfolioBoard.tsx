import DictionaryEntry from "../DictionaryEntry/DictionaryEntry";
import LabTile from "../LabTile/LabTile";
import { projects, type Project } from "../../../../scripts/const/projects";
import {
  labHeading,
  labProjectNames,
  portfolioHeading,
  selectedProjectNames,
} from "../../../consts.v2.portfolio";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Board, EntryList, LabGrid } from "./PortfolioBoard.styles";

const toSlug = (name: string) => name.replaceAll(/\s+/g, "-");

const byName = (names: string[]) => {
  const all = Object.values(projects).flat() as Project[];
  return names
    .map((name) => all.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));
};

const PortfolioBoard = () => {
  const selected = byName(selectedProjectNames);
  const lab = byName(labProjectNames);

  return (
    <Board>
      <section aria-labelledby="selected-work-heading">
        <SectionHeading id="selected-work-heading" text={portfolioHeading} />
        <EntryList>
          {selected.map((project, index) => (
            <DictionaryEntry
              key={project.name}
              index={index}
              term={project.name}
              definition={project.description}
              roles={project.roles}
              imageSrc={project.headshot}
              href={`/v2/portfolio/${toSlug(project.name)}`}
              liveHref={project.buttons[0]?.link}
            />
          ))}
        </EntryList>
      </section>

      <section aria-labelledby="lab-heading">
        <SectionHeading id="lab-heading" text={labHeading} />
        <LabGrid>
          {lab.map((project) => (
            <li key={project.name}>
              <LabTile
                title={project.name}
                imageSrc={project.headshot}
                motionSrc={project.headshotGif}
                year={project.year}
                tag={project.tags[0]}
                href={`/v2/portfolio/${toSlug(project.name)}`}
              />
            </li>
          ))}
        </LabGrid>
      </section>
    </Board>
  );
};

export default PortfolioBoard;
