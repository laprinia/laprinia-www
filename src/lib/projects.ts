import { projects, type Project } from "../../scripts/const/projects";

export const toProjectSlug = (name: string): string =>
  name.toLowerCase().replaceAll(/\s+/g, "-");

export const allProjects = (): Project[] => Object.values(projects).flat();

export const findProjectBySlug = (slug: string): Project | null =>
  allProjects().find((project) => toProjectSlug(project.name) === slug) ?? null;
