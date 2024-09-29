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
  mediaContents: MediaContent[];
  buttons: Button[];
  textContents: TextArticle[];
  colors: string[];
};

export type ProjectCategories = {
  web: Project[];
  graphics: Project[];
  //"ui/ux": Project[];
};

export const projects: ProjectCategories = {
  web: [
    {
      name: "fullstack authentication",
      year: 2023,
      techStackPreview: "*/react, mongodb*/",
      tags: [
        "react",
        "typescript",
        "glassmorphism",
        "mantine",
        "radix-ui",
        "axios",
        "unsplash api",
        "bcrypt",
        "mongoose",
        "joi",
        "jwt",
      ],
      mediaContents: [
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/1.png",
        },
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/2.png",
        },
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/3.png",
        },
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/4.png",
        },
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/5.png",
        },
        {
          type: "video",
          src: "/projects/fullstack-authentication/content/6.mp4",
        },
        {
          type: "video",
          src: "/projects/fullstack-authentication/content/7.mp4",
        },
      ],
      buttons: [
        {
          imageSrc: "/social/github.png",
          alt: "GitHub",
          link: "https://github.com/laprinia/opea",
        },
        {
          imageSrc: "/social/behance.png",
          alt: "Behance",
          link: "https://www.behance.net/gallery/195410123/-React-fullstack-authentication-with-glassmorphism",
        },
      ],
      textContents: [
        {
          header: "A) About",
          text: "React & Node.js full-stack authentication for a creative web app, written in TypeScript with the purpose of using glassmorphism 🫥.",
        },
        {
          header: "B) Recipe",
          text:
            "\n" +
            "  <section>\n" +
            "    <h3>Frontend:</h3>\n" +
            "    <ul>\n" +
            "      <li>Mantine for UI components</li>\n" +
            "      <li>Radix-UI icons</li>\n" +
            "      <li>Axios for services</li>\n" +
            "      <li>Unsplash API for randomized backgrounds</li>\n" +
            "    </ul>\n" +
            "\n" +
            "    <h3>Backend:</h3>\n" +
            "    <ul>\n" +
            "      <li>BCrypt for encrypting passwords</li>\n" +
            "      <li>Mongoose for interacting with the MongoDB Atlas database</li>\n" +
            "      <li>Joi for data validation</li>\n" +
            "      <li>JWT for creating authentication tokens</li>\n" +
            "      <li>Nodemon for better server management</li>\n" +
            "    </ul>\n" +
            "  </section>",
        },
        {
          header: "C) Key Feats",
          text:
            "<ul>\n" +
            "  <li>Joi for data validation in the backend</li>\n" +
            "  <li>Mongoose DB schema using TypeScript types to enforce accepted color outputs and formats</li>\n" +
            "  <li>Randomized custom backgrounds provided by the Unsplash API</li>\n" +
            "  <li>Glassmorphism components styled with custom CSS inside Mantine components</li>\n" +
            "  <li>Field & form validation implemented</li>\n" +
            "</ul>\n",
        },
        {
          header: "D) Glassmorphism",
          text:
            "<code>sx={{\n" +
            "       background: `rgba(24,24,24,0.5)`,\n" +
            '       boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",\n' +
            "       backdropFilter: `blur(5px)`,\n" +
            "     }}</code>",
        },
      ],
      colors: ["#FB6009", "#2E2623", "#ECE3E1", "#040406"],
    },
  ],
  graphics: [
    {
      name: "ray tracer",
      year: 2022,
      techStackPreview: "*/opengl, compute shaders*/",
      tags: [
        "opengl",
        "c++",
        "shaders",
        "styled components",
        "imgui",
        "post processing",
      ],
      mediaContents: [
        { type: "image", src: "/projects/ray-tracer/content/1.png" },
        { type: "image", src: "/projects/ray-tracer/content/2.png" },
        { type: "image", src: "/projects/ray-tracer/content/3.png" },
        { type: "image", src: "/projects/ray-tracer/content/4.png" },
        { type: "image", src: "/projects/ray-tracer/content/5.png" },
        { type: "image", src: "/projects/ray-tracer/content/6.png" },
        { type: "image", src: "/projects/ray-tracer/content/7.png" },
        { type: "image", src: "/projects/ray-tracer/content/8.png" },
        { type: "image", src: "/projects/ray-tracer/content/9.png" },
        { type: "image", src: "/projects/ray-tracer/content/10.png" },
        { type: "image", src: "/projects/ray-tracer/content/11.png" },
        { type: "image", src: "/projects/ray-tracer/content/12.png" },
        { type: "video", src: "/projects/ray-tracer/content/13.mp4" },
      ],
      buttons: [
        {
          imageSrc: "/social/behance.png",
          alt: "Behance",
          link: "https://www.behance.net/gallery/161536343/-OpenGL-real-time-ray-tracer",
        },
        {
          imageSrc: "/social/github.png",
          alt: "GitHub",
          link: "https://github.com/laprinia/mozu/tree/main",
        },
      ],
      textContents: [
        {
          header: "A) About",
          text: 'OpenGL real-time ray tracer using Compute Shaders. Based on the "Ray Tracing in One Weekend series" 🌄.',
        },
        {
          header: "B) Process",
          text:
            "<section>\n" +
            "  <h3>1. Matte Materials</h3>\n" +
            "  <p>\n" +
            "    The process is simple: normalizing the y coordinate and interpolating between two colors.\n" +
            "    Checking if the rays hit the sphere and displaying the color. The resulting color is computed\n" +
            "    by picking a random point inside a unit radius sphere, whose normal starts from the initial ray hit point.\n" +
            "    This is done recursively until a ray doesn't hit anything or a maximum depth is reached.\n" +
            "  </p>\n" +
            "\n" +
            "  <h3>2. Metallic Surfaces</h3>\n" +
            "  <p>\n" +
            "    For metallic surfaces, rays aren't randomly scattered. Luckily, GLSL has the \n" +
            "    <code>reflect()</code> function, which returns the reflected ray. Randomizing the reflected\n" +
            "    ray by choosing a random endpoint, as we did for the matte surface, gives rough (fuzzy) surfaces.\n" +
            "  </p>\n" +
            "\n" +
            "  <h3>3. Dielectric Surfaces</h3>\n" +
            "  <p>\n" +
            "    A ray is split into both a reflected one and a refracted one. Assuming that all rays are \n" +
            "    only refracted results in one outcome. Using Schlick's polynomial approximation, we can \n" +
            "    determine if rays must be reflected instead of refracted, producing the final result.\n" +
            "  </p>\n" +
            "\n" +
            "  <h3>4. Cornell Box</h3>\n" +
            "  <p>\n" +
            "    Adding a Cornell Box introduces more complexity into the scene. To make things more \n" +
            "    realistic, emissive materials are added for ceiling lights and spheres. Rays hitting \n" +
            "    an emissive surface won't scatter, so they retain their true albedo color output.\n" +
            "  </p>\n" +
            "\n" +
            "  <h3>5. Post-Processing</h3>\n" +
            "  <p>\n" +
            "    On the post-processing layer, HDR is applied, making the emissive material stand out more. \n" +
            "    Bloom is also added, which renders lights as blurred (using Gaussian Blur) and adds the \n" +
            "    result on top of the base color.\n" +
            "  </p>\n" +
            "</section>\n",
        },
      ],
      colors: [
        "#AD2337",
        "#0b5caf",
        "#68CEE9",
        "#E3E874",
        "#E57CE0",
        "#efedff",
      ],
    },
  ],
};

//     web: [{ name: "1.1" }],
//     graphics: [{ name: "2.1" }],
//     ux: [{ name: "3.1" }],
//     other: [{ name: "4.1" }],
