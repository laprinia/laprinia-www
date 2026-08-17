import FeaturedProjectCard from "../FeaturedProjectCard/FeaturedProjectCard";
import { projects, type Project } from "../../../../scripts/const/projects";
import { Grid, Cell } from "./ProjectGrid.styles";

const toSlug = (name: string) => name.replaceAll(/\s+/g, "-");

const ProjectGrid = ({ names }: { names: string[] }) => {
  const all = Object.values(projects).flat() as Project[];
  const featured = names
    .map((name) => all.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));

  return (
    <Grid>
      {featured.map((project) => (
        <Cell key={project.name}>
          <FeaturedProjectCard
            title={project.name}
            description={project.description}
            tags={project.tags.slice(0, 2)}
            imageSrc={project.headshot}
            href={`/portfolio/${toSlug(project.name)}`}
          />
        </Cell>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
