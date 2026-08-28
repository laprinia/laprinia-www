const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { marked } = require("marked");

const CONTENT_DIR = path.join(__dirname, "..", "content", "projects");
const OUTPUT_FILE = path.join(
  __dirname,
  "..",
  "scripts",
  "const",
  "projects.ts",
);

const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);

// Articles authored as raw HTML pass through untouched; anything else is
// markdown. Running the legacy HTML through marked would turn its indented
// lines into code blocks.
const renderArticle = (text) => {
  const body = (text || "").trim();
  if (body.startsWith("<")) return body;
  return marked.parse(body, { async: false }).trim();
};

const parseProjectYaml = (slug, raw) => {
  try {
    return yaml.load(raw);
  } catch (error) {
    const hint = /sequence entry|mapping entry|bad indentation/.test(
      error.message,
    )
      ? `\n\nThis is usually a "text: |" block whose body is not indented deeper\nthan the "text:" key itself. Every line of the block must sit at least\ntwo spaces further in:\n\n  - header: "Design System"\n    text: |\n      - first bullet\n      - second bullet\n`
      : "";
    throw new Error(`${slug}.yaml could not be parsed.\n\n${error.message}${hint}`);
  }
};

const readProject = (slug) => {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.yaml`), "utf8");
  const data = parseProjectYaml(slug, raw);

  if (!data.media) {
    throw new Error(`${slug}.yaml is missing a required "media" array`);
  }
  if (!data.headshot) {
    throw new Error(`${slug}.yaml is missing a required "headshot" field`);
  }

  const toMedia = (f) => ({
    type: VIDEO_EXTENSIONS.has(path.extname(f).toLowerCase())
      ? "video"
      : "image",
    src: `/projects/${slug}/content/${f}`,
  });

  const known = new Set(data.media);
  const referenced = [
    ...(data.walkthrough ? [data.walkthrough] : []),
    ...(data.articles || []).flatMap((a) => a.media || []),
  ];
  for (const f of referenced) {
    if (!known.has(f)) {
      throw new Error(
        `${slug}.yaml references "${f}" which is not listed in "media"`,
      );
    }
  }

  return {
    name: data.name,
    year: data.year,
    published: data.published !== false,
    description: data.description,
    client: data.client || "",
    role: data.role || "",
    timeline: data.timeline || "",
    tags: data.tags || [],
    roles: data.roles || [],
    headshot: `/projects/${slug}/${data.headshot}`,
    headshotGif: data.headshotGif
      ? `/projects/${slug}/${data.headshotGif}`
      : "",
    walkthrough: data.walkthrough ? toMedia(data.walkthrough) : null,
    links: (data.links || [])
      .filter((l) => {
        if (l.url) return true;
        console.warn(
          `  ! ${slug}.yaml: link "${l.label || "(no label)"}" has no "url" and was skipped`,
        );
        return false;
      })
      .map((l) => ({
        label: l.label,
        url: l.url,
        livePreview: l.livePreview !== false,
      })),
    textContents: (data.articles || []).map((a) => ({
      header: a.header,
      html: renderArticle(a.text),
      metrics: (a.metrics || []).map((m) => ({
        value: m.value,
        prefix: m.prefix || "",
        suffix: m.suffix || "",
        label: m.label,
      })),
      media: (a.media || []).map(toMedia),
    })),
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
export type ProjectLink = {
  label: string;
  url: string;
  livePreview: boolean;
};
export type Metric = {
  value: number | string;
  prefix: string;
  suffix: string;
  label: string;
};
export type TextArticle = {
  header: string;
  html: string;
  metrics: Metric[];
  media: MediaContent[];
};
export type Project = {
  name: string;
  year: number;
  published: boolean;
  description: string;
  client: string;
  role: string;
  timeline: string;
  tags: string[];
  roles: string[];
  headshot: string;
  headshotGif: string;
  walkthrough: MediaContent | null;
  links: ProjectLink[];
  textContents: TextArticle[];
};

export type ProjectCategories = {
${Object.keys(projects)
  .map((category) => `  ${JSON.stringify(category)}: Project[];`)
  .join("\n")}
};`;

const output = `// Auto-generated from content/projects/*.yaml
// Media paths (/projects/...) are Cloudinary public IDs (upload with: npm run upload:cloudinary -- public/projects/<slug>).

${TYPE_DEFS}

export const projects: ProjectCategories = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync(OUTPUT_FILE, output, "utf8");

const totalProjects = Object.values(projects).flat().length;
console.log(
  `\nGenerated ${OUTPUT_FILE} (${totalProjects} projects across ${Object.keys(projects).length} categories)`,
);
