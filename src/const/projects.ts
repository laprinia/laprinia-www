export type MediaContent = {
  type: string,
  src: string,
}
export type Button = {
  imageSrc: string,
  alt: string,
  link: string,
}
export type TextArticle = {
  header: string,
  text: string,
}
export type Project = {
  name: string;
  year: number;
  techStackPreview: string;
  tags: string[];
  mediaContents: MediaContent[];
  buttons: Button[];
  textContents: TextArticle[];
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
          "jwt"
      ],
      mediaContents: [
        {type: "image", src:"projects/fullstack-authentication/content/1.png"},
        {type: "image", src:"projects/fullstack-authentication/content/2.png"},
        {type: "image", src:"projects/fullstack-authentication/content/3.png"},
        {type: "image", src:"projects/fullstack-authentication/content/4.png"},
        {type: "image", src:"projects/fullstack-authentication/content/5.png"},
        {type: "video", src:"projects/fullstack-authentication/content/6.mp4"},
        {type: "video", src:"projects/fullstack-authentication/content/7.mp4"},
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
        }
      ],
      textContents : [
        {
          header: "A) About",
          text: "React & Node.js full-stack authentication for a creative web app written in TypeScript where I dabbled in glassmorphism 🥛.",
        },
        {
          header: "B) Recipe",
          text: "Frontend:\n" +
              " - Mantine for UI components\n" +
              " - Radix-UI icons\n" +
              " - Axios for services\n" +
              " - Unsplash API for randomized backgrounds\n" +
              " - Backend:\n" +
              " - BCrypt for encrypting passwords\n" +
              " - Mongoose for interacting with the MongoDB Atlas data base\n" +
              " - Joi for data validation\n" +
              " - JWT for creating authentication tokens\n" +
              " - Nodemon for better server management",
        },
        {
          header: "C) Key Feats",
          text: " - Joi data validation for the backend\n"+
              " - Mongoose DB schema uses TypeScript types to impose accepted color outputs and formats\n"+
              " - Randomized custom background provided by the unsplash API\n"+
              " - Glassmorphism components using custom CSS inside Mantine components\n"+
              " - Field & form validation",
        }
      ],
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
        {type: "image", src:"projects/ray-tracer/content/1.png"},
        {type: "image", src:"projects/ray-tracer/content/2.png"},
        {type: "image", src:"projects/ray-tracer/content/3.png"},
        {type: "image", src:"projects/ray-tracer/content/4.png"},
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
      textContents : [
        {
          header: "A) About",
          text: "OpenGL real-time ray tracer using Compute Shaders. Based on the \"Ray Tracing in One Weekend series\".",
        },
        {
          header: "B) Process",
          text: "1. For matte materials the process is simple: normalizing the y coordinate and interpolating between two colors. Checking if the rays hit the sphere and displaying the color. Computed the resulting color by picking a random point inside a unit radius sphere, whose normal starts from the initial ray hit point. This is done recursively until a ray doesn't hit anything or a maximum depth is reached.\n" +
          "3. For metallic surfaces, rays aren't randomly scattered. Luckily, GLSL has the reflect function which returns the reflected ray. Randomizing the reflected ray by choosing a random endpoint as we did for the matte surface, we can get more rough (fuzzy) surfaces.\n"+
          "4. For a dielectric surface, a ray is split into both a reflected one and a refracted one. Assuming that all rays are only refracted we get this result. Using Schlick's polynomial approximation we can determine if rays must pe reflected instead of refracted, giving the final result.\n"+
          "5. Next is adding a Cornell Box for more complexity in the scene. To make things more realistic, I added an emissive material for some ceiling lights & spheres. Rays hitting an emissive surface won't scatter so they retain their true albedo color output.\n"+
           "6. On the Post Processing layer, I added HDR, so the emissive material pops out more. I also added Bloom, which basically renders our lights as blurred (using Gaussian Blur), and adds the result on top of the base color."

        },
      ],
    },
  ],
};

//     web: [{ name: "1.1" }],
//     graphics: [{ name: "2.1" }],
//     ux: [{ name: "3.1" }],
//     other: [{ name: "4.1" }],
