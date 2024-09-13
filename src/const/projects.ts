export type Project = {
  name: string;
  year: number;
  techStackPreview: string;
};

export type ProjectCategories = {
  web: Project[];
  "ui/ux": Project[];
};

export const projects: ProjectCategories = {
  web: [
    {
      name: "fullstack authentication",
      year: 2023,
      techStackPreview: "*/react, node.js mongodb*/",
    },
  ],
  "ui/ux": [
    {
      name: "personal portfolio",
      year: 2024,
      techStackPreview: "*/figma, photoshop*/",
    },
    {
      name: "personal portfolio",
      year: 2024,
      techStackPreview: "*/figma, photoshop*/",
    },
    {
      name: "personal portfolio",
      year: 2024,
      techStackPreview: "*/figma, photoshop*/",
    },
    {
      name: "personal portfolio",
      year: 2024,
      techStackPreview: "*/figma, photoshop*/",
    },
  ],
};

//     web: [{ name: "1.1" }],
//     graphics: [{ name: "2.1" }],
//     ux: [{ name: "3.1" }],
//     other: [{ name: "4.1" }],
