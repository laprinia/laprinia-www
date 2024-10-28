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
      colors: ["#FB6009", "#2E2623", "#ECE3E1", "#040406"],
    },

    {
      name: "web 3d terrain generator",
      year: 2022,
      techStackPreview: "*/react, webgl*/",
      tags: [
        "react",
        "typescript",
        "react-three-fiber",
        "drei",
        "mantine",
        "glsl-noise",
      ],
      mediaContents: [
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/1.png",
        },
        {
          type: "video",
          src: "/projects/web-3d-terrain-generator/content/intro.mp4",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/2.png",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/3.png",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/4.png",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/5.png",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/6.png",
        },
        {
          type: "video",
          src: "/projects/web-3d-terrain-generator/content/outro.mp4",
        },
      ],
      buttons: [
        {
          imageSrc: "/social/github.png",
          alt: "GitHub",
          link: "https://github.com/laprinia/phea",
        },
      ],
      textContents: [
        {
          header: "A) About",
          text: "React 3D terrain generation using React-Three-Fiber, using the marching cubes algo",
        },
        {
          header: "B) Frontend Recipe",
          text:
            "<ul>\n" +
            "  <li>react three fiber, a React renderer for three.js</li>\n" +
            "  <li>drei addons for react three fiber</li>\n" +
            "  <li>glsl-noise for Simplex noise</li>\n" +
            "  <li>Mantine for UI components</li>\n" +
            "</ul>\n",
        },
        {
          header: "C) Key Feats",
          text:
            "<ul>\n" +
            "  <li><h3>🧊 Marching cubes algorithm implementation</h3> Divides a volume in 3D space into cubes to approximate rendered faces for a mesh. Utilizes voxels to determine density and surface points.</li>\n" +
            "  <li><h3>📼 Simplex Noise</h3> A 3D noise function for randomizing terrain height values. Parameters include noiseScale, octaves, weightMultiplier, persistencePerOctave, detailPerOctave, and noiseWeight.</li>\n" +
            "  <li><h3>🏔️ Terracing</h3> Clamps terrain height on levels, with spacing set by <strong>terracingLevel</strong>.</li>\n" +
            "  <li><h3>🌈 Color Height Map</h3> Uses a .png gradient for coloring fragments in the fragment shader.</li>\n" +
            "  <li><h3>🍄 Visual Smoothing</h3> Smooths low-poly terrain by removing the world normal vector from height calculation in the fragment shader.</li>\n" +
            "  <li><h3>✨ Post Processing</h3> Effects like TiltShift, Bloom, Noise, and BrightnessContrast achieved using r3f's postprocessing wrapper.</li>\n" +
            "  <li><h3>🏊 Floating Effect & Mesh Rotation</h3> Uses a height vertex shader with elapsed time-based disturbance, and rotates the mesh on the y-axis.</li>\n" +
            "  <li><h3>🎛️ The UI</h3> Controls gradient, marching cubes, and Simplex noise parameters, and regenerates the mesh.</li>\n" +
            "</ul>\n",
        },
      ],
      colors: ["#0C1210", "#1D4636", "#2C5C64", "#99ABB7", "#6BADE7"],
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
        "imgui",
        "post processing",
        "sphere ray tracing",
        "various materials",
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
          link: "https://github.com/laprinia/hyzu",
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
    {
      name: "volumetric light",
      year: 2021,
      techStackPreview: "*/opengl, glsl shaders*/",
      tags: [
        "opengl",
        "c++",
        "shaders",
        "imgui",
        "post processing",
        "scene rendering",
      ],
      mediaContents: [
        { type: "image", src: "/projects/volumetric-light/content/1.png" },
        { type: "video", src: "/projects/volumetric-light/content/2.mp4" },
        { type: "image", src: "/projects/volumetric-light/content/3.png" },
        { type: "image", src: "/projects/volumetric-light/content/4.png" },
        { type: "image", src: "/projects/volumetric-light/content/5.png" },
      ],
      buttons: [
        {
          imageSrc: "/social/behance.png",
          alt: "Behance",
          link: "https://www.behance.net/gallery/162428687/-OpenGL-volumetric-light-study",
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
          text: "OpenGL lighting project made from scratch, destined to be a volumetric light implementation. 🌈",
        },
        {
          header: "B) Includes",
          text:
            "<ol>\n" +
            "    <li>Blinn-Phong model</li>\n" +
            "    <li>Multiple light sources:\n" +
            "        <ul>\n" +
            "            <li>Directional</li>\n" +
            "            <li>Point</li>\n" +
            "            <li>Spotlight</li>\n" +
            "        </ul>\n" +
            "    </li>\n" +
            "    <li>Normal mapping</li>\n" +
            "    <li>Shadow mapping using a depth map rendered from the light's point of view, projected in perspective</li>\n" +
            "</ol>\n" +
            "\n",
        },
        {
          header: "C) Process",
          text:
            "<p><strong>Initial Setup:</strong> I implemented the Blinn-Phong lighting model in the Fragment shader using only a directional light. Normal mapping was used to enhance specular highlights.</p>\n" +
            "\n" +
            '<p>The colors still appeared "crunchy" due to the lack of Gamma Correction. To address this, I added a Post Processing shader for Gamma Correction and HDR, using another framebuffer to render the scene into a texture before applying Post Processing effects.</p>\n' +
            "\n" +
            "<p><strong>Adding Shadows:</strong> I used an additional depth framebuffer to render the scene from the directional light's perspective, which uses a perspective projection. The render result is stored in a texture.</p>\n" +
            "\n" +
            "<p>Then, I integrated the computed shadow with the directional light’s diffuse and specular components. To add more dynamic lighting, I placed two point lights near the pool's ends and added two spotlights from side lamps for a more fitting ambiance.</p>\n" +
            "\n" +
            "<p><strong>Volumetric Lighting:</strong> This was achieved using the occlusion texture and a ray marching technique.</p>\n",
        },
        {
          header: "D) For Short",
          text:
            "<ul>\n" +
            "    <li>Post Processing effects: HDR, Gamma Correction, and Grain</li>\n" +
            "    <li>Additional techniques: Anti-Aliasing, Blending, Depth Testing, and Skybox implementation</li>\n" +
            "</ul>",
        },
      ],
      colors: ["#e97972", "#E53190", "#2EABD3", "#E3E874", "#E4E3EA"],
    },
  ],
};

//     web: [{ name: "1.1" }],
//     graphics: [{ name: "2.1" }],
//     ux: [{ name: "3.1" }],
//     other: [{ name: "4.1" }],
