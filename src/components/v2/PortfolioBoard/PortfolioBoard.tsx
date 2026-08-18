import DictionaryEntry from "../DictionaryEntry/DictionaryEntry";
import LabTile from "../LabTile/LabTile";
import { projects, type Project } from "../../../../scripts/const/projects";
import {
  labHeading,
  labProjectNames,
  portfolioHeading,
  selectedProjectNames,
} from "../../../consts.v2.portfolio";
import {
  Board,
  SectionHeading,
  HeadingFilled,
  HeadingOutlined,
  EntryList,
  LabGrid,
} from "./PortfolioBoard.styles";

const toSlug = (name: string) => name.replaceAll(/\s+/g, "-");

const byName = (names: string[]) => {
  const all = Object.values(projects).flat() as Project[];
  return names
    .map((name) => all.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));
};

const SplitHeading = ({ id, text }: { id: string; text: string }) => {
  const [filled, ...rest] = text.split(" ");
  const outlined = rest.join(" ");

  return (
    <SectionHeading id={id}>
      <HeadingFilled>{filled}</HeadingFilled>{" "}
      {outlined ? <HeadingOutlined>{outlined}</HeadingOutlined> : null}
    </SectionHeading>
  );
};

const PortfolioBoard = () => {
  const selected = byName(selectedProjectNames);
  const lab = byName(labProjectNames);

  return (
    <Board>
      <section aria-labelledby="selected-work-heading">
        <SplitHeading id="selected-work-heading" text={portfolioHeading} />
        <EntryList>
          {selected.map((project, index) => (
            <DictionaryEntry
              key={project.name}
              letter={String.fromCharCode(65 + index)}
              term={project.name}
              definition={project.description}
              roles={project.roles}
              year={project.year}
              imageSrc={project.headshot}
              href={`/portfolio/${toSlug(project.name)}`}
              liveHref={project.buttons[0]?.link}
            />
          ))}
        </EntryList>
      </section>

      <section aria-labelledby="lab-heading">
        <SplitHeading id="lab-heading" text={labHeading} />
        <LabGrid>
          {lab.map((project) => (
            <li key={project.name}>
              <LabTile
                title={project.name}
                imageSrc={project.headshot}
                motionSrc={project.headshotGif}
                year={project.year}
                tag={project.tags[0]}
                href={`/portfolio/${toSlug(project.name)}`}
              />
            </li>
          ))}
        </LabGrid>
      </section>
    </Board>
  );
};

export default PortfolioBoard;
