import { contactFacts } from "./consts.v2";

export type TimelineEntry = {
  period: string;
  title: string;
  org?: string;
  description?: string;
};

export type ToolGroup = {
  label: string;
  tags: string[];
};

export type AboutSection =
  | { title: string; kind: "timeline"; entries: TimelineEntry[] }
  | { title: string; kind: "tags"; tags: string[] }
  | { title: string; kind: "groups"; groups: ToolGroup[] }
  | { title: string; kind: "pairs"; pairs: { label: string; value: string }[] }
  | { title: string; kind: "text"; text: string };

export const aboutId = "about-top";
export const aboutName = "lavinia dumitrenco";
export const aboutRole = "technical product designer";
export const aboutLocation = "based in bucharest, romania";
export const aboutIntro =
  "Five years designing for complex, technical products. Research, interaction design and design systems are the core of the work; I build what I design so it survives contact with production.";

export const aboutLinksLabel = "elsewhere";

export const aboutSections: AboutSection[] = [
  {
    title: "experience",
    kind: "timeline",
    entries: [
      {
        period: "2025-2026",
        title: "Product Designer & Developer",
        org: "In The Pocket",
        description:
          "Sole UX/UI designer and engineer on cross-functional product work, from research through shipped frontend.",
      },
      {
        period: "2024-2025",
        title: "UX Designer & Developer",
        org: "Siemens Energy",
        description:
          "Designed and built data visualization flows for complex B2B systems, running continuous user testing and iteration. Kept wireframes and React implementation consistent through semantic tokens.",
      },
      {
        period: "2023-2024",
        title: "Frontend Developer, Design Systems & UX",
        org: "Adobe",
        description:
          "Mapped complex UX flows and built accessible components contributing to Spectrum, Adobe's core design system.",
      },
      {
        period: "2022-2023",
        title: "Web Developer, Frontend & UI",
        org: "Ubisoft",
        description:
          "Designed and built user flows for a high-traffic web platform. Improved load time by 30%.",
      },
      {
        period: "2021-2022",
        title: "Frontend Developer & UX Designer",
        org: "Adobe",
        description:
          "Designed UI components aligned to Spectrum and contributed accessible component libraries in Storybook. Promoted from intern.",
      },
    ],
  },
  {
    title: "capabilities",
    kind: "tags",
    tags: [
      "user research & testing",
      "interaction design",
      "user flows & IA",
      "design systems & semantic tokens",
      "accessibility (WCAG)",
      "data visualization for complex B2B",
      "graphic design",
      "motion design",
      "design–engineering handoff",
      "AI-assisted design workflows",
    ],
  },
  {
    title: "tools",
    kind: "groups",
    groups: [
      {
        label: "design",
        tags: [
          "figma",
          "figma variables",
          "figma make",
          "prototyping",
          "wireframing",
          "adobe illustrator",
          "framer",
          "webflow",
          "lovable",
        ],
      },
      {
        label: "systems",
        tags: ["design tokens", "storybook", "component documentation"],
      },
      {
        label: "code",
        tags: ["typescript", "react", "next.js", "html & css"],
      },
    ],
  },
  {
    title: "education",
    kind: "timeline",
    entries: [
      {
        period: "2020-2022",
        title: "MSc Computer Graphics, Multimedia & Virtual Reality",
        org: "Politehnica University of Bucharest",
      },
      {
        period: "2017-2020",
        title: "BSc Economic Informatics",
        org: "Bucharest Academy of Economic Studies",
      },
    ],
  },
  {
    title: "certifications",
    kind: "timeline",
    entries: [
      { period: "2025", title: "Visual Design & Branding", org: "SuperHi" },
      {
        period: "2025",
        title: "Graphic Design Specialization",
        org: "Coursera",
      },
      { period: "2024", title: "Introduction to User Design", org: "SuperHi" },
    ],
  },
  {
    title: "languages",
    kind: "pairs",
    pairs: [
      { label: "romanian", value: "native" },
      { label: "english", value: "proficient" },
      { label: "spanish", value: "beginner" },
    ],
  },
  {
    title: "looking for",
    kind: "pairs",
    pairs: contactFacts
      .filter((fact) => fact.label !== "Based in")
      .map((fact) => ({ label: fact.label.toLowerCase(), value: fact.value })),
  },
  {
    title: "hobbies",
    kind: "text",
    text: "photography, videography, image processing, generative art",
  },
];
