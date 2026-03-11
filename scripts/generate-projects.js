const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const CONTENT_DIR = path.join(__dirname, "..", "content", "projects");
const OUTPUT_FILE = path.join(__dirname, "..", "src", "const", "projects.ts");

const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);

const readProject = (slug) => {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.yaml`), "utf8");
  const data = yaml.load(raw);

  if (!data.media) {
    throw new Error(`${slug}.yaml is missing a required "media" array`);
  }
  if (!data.headshot || !data.headshotGif) {
    throw new Error(
      `${slug}.yaml is missing required "headshot" / "headshotGif" fields`,
    );
  }

  const mediaContents = data.media.map((f) => ({
    type: VIDEO_EXTENSIONS.has(path.extname(f).toLowerCase())
      ? "video"
      : "image",
    src: `/projects/${slug}/content/${f}`,
  }));

  return {
    name: data.name,
    year: data.year,
    techStackPreview: data.techStackPreview,
    tags: data.tags || [],
    headshot: `/projects/${slug}/${data.headshot}`,
    headshotGif: `/projects/${slug}/${data.headshotGif}`,
    mediaContents,
    buttons: (data.buttons || []).map((b) => ({
      imageSrc: b.imageSrc,
      alt: b.alt,
      link: b.link,
    })),
    textContents: (data.articles || []).map((a) => ({
      header: a.header,
      text: a.text,
    })),
    colors: data.colors || [],
  };
};

const order = yaml.load(
  fs.readFileSync(path.join(CONTENT_DIR, "_order.yaml"), "utf8"),
);

const projects = {};
for (const [category, slugs] of Object.entries(order)) {
  projects[category] = slugs.map((slug) => {
    console.log(`  Reading ${slug}.yaml`);
    return readProject(slug);
  });
}

const TYPE_DEFS = `\
export type MediaContent = {
  type: string;
  src: string;
};
export type Button = {
  imageSrc: string;
  alt: string;
  link: string;
};
export type TextArticle = {
  header: string;
  text: string;
};
export type Project = {
  name: string;
  year: number;
  techStackPreview: string;
  tags: string[];
  headshot: string;
  headshotGif: string;
  mediaContents: MediaContent[];
  buttons: Button[];
  textContents: TextArticle[];
  colors: string[];
};

export type ProjectCategories = {
  "branding & design": Project[];
  web: Project[];
  "3d": Project[];
  experimental: Project[];
};`;

const output = `// Auto-generated from content/projects/*.yaml

${TYPE_DEFS}

export const projects: ProjectCategories = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync(OUTPUT_FILE, output, "utf8");

const totalProjects = Object.values(projects).flat().length;
console.log(
  `\nGenerated ${OUTPUT_FILE} (${totalProjects} projects across ${Object.keys(projects).length} categories)`,
);
