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
  "branding & design": Project[];
  web: Project[];
  "3d": Project[];
  experimental: Project[];
};

export const projects: ProjectCategories = {
  "branding & design": [
    {
      name: "personal website ux",
      year: 2024,
      techStackPreview: "*/figma, adobe*/",
      tags: [
        "figma",
        "adobe fonts",
        "adobe photoshop",
        "adobe rush",
        "responsive design",
      ],
      mediaContents: [
        {
          type: "image",
          src: "/projects/personal-website-ux/content/1.avif",
        },
        {
          type: "image",
          src: "/projects/personal-website-ux/content/2.avif",
        },
        {
          type: "image",
          src: "/projects/personal-website-ux/content/3.avif",
        },
        {
          type: "image",
          src: "/projects/personal-website-ux/content/4.avif",
        },
        {
          type: "image",
          src: "/projects/personal-website-ux/content/5.avif",
        },
        {
          type: "image",
          src: "/projects/personal-website-ux/content/6.avif",
        },
        {
          type: "image",
          src: "/projects/personal-website-ux/content/7.avif",
        },
        {
          type: "image",
          src: "/projects/personal-website-ux/content/8.avif",
        },
      ],
      buttons: [
        {
          imageSrc: "/social/github.avif",
          alt: "GitHub",
          link: "hhttps://github.com/laprinia/laprinia-www",
        },
      ],
      textContents: [
        {
          header: "A) Goals",
          text: "The primary goal of this personal website was to craft an engaging user experience that reflects my journey as a UX designer and web developer 🙂‍↕️. The site serves as a portfolio to showcase my projects in a fun and engaging. Iwanted to create a responsive, user-friendly interface that highlights my skills, creativity, and technical expertise. By drawing inspiration from the structured, ordered design of old dictionaries, I aimed to establish a clear hierarchy and clean aesthetic.",
        },
        {
          header: "B) Process & Solution",
          text:
            "<ul>\n" +
            "<li><h3>🔍 Research & Planning</h3> I began by identifying the key sections of the website: a Landing Page for a quick introduction, a Portfolio Overview for an at-a-glance view of all projects, Individual Project Pages for detailed insights, and an About Page for personal background and contact information.</li>\n" +
            "<li><h3>🖌️ Design & Prototyping</h3> Using Figma, I designed wireframes and high-fidelity mockups to visualize the site layout and interactions. I selected Adobe Fonts, specifically Raleway, for its minimalist and elegant appearance. I also utilized Adobe Photoshop for crafting mockup images and applying text textures. Adobe Rush was used to create short, impactful videos for my project showcases.</li>\n" +
            "<li><h3>🎨 Visual Design & Accessibility</h3> The color palette was chosen to balance a clean look with bold accents: a soft background color (#F6F6F6) paired with striking blue tones (#0141D5, #0136af, #002986). These colors were applied thoughtfully to maintain accessibility and contrast ratios. Typography breakpoints were defined for XL desktops, desktops, tablets, and phones, ensuring readability across all devices.</li>\n" +
            "<li><h3>💻 Development & Implementation</h3> Leveraged Next.js for SEO optimization and fast page loading. Used React with TypeScript for type safety and component reusability. Integrated react-three-fiber for dynamic 3D text animations, bringing the site to life, and Framer Motion for smooth transitions and micro-interactions. Focused on a mobile-first responsive design that adapts seamlessly from small screens to large desktops, offering unique perspectives for different devices.</li>\n" +
            "<li><h3>🖼️ Content Structure & Navigation</h3> The content was structured to allow easy navigation: the Landing Page offers a clear introduction, while the Portfolio section provides a snapshot of each project. Individual Project Pages delve into technologies used, code snippets, and include a mixed-media carousel of images and videos. The About Page connects visitors to my background and personal interests.</li>\n" +
            "</ul>\n",
        },
      ],
      colors: ["#0141D5", "#F6F6F6", "#000000"],
    },
    {
      name: "veloura brand guide",
      year: 2025,
      techStackPreview: "*/figma, illustrator*/",
      tags: [
        "branding",
        "visual identity",
        "logo design",
        "color systems",
        "typography",
        "mockups",
        "ui",
      ],
      mediaContents: [
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/0.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/1.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/2.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/3.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/4.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/5.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/6.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/7.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/8.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/9.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/10.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/11.avif",
        },
        {
          type: "image",
          src: "/projects/veloura-brand-guide/content/12.avif",
        },
      ],
      buttons: [],
      textContents: [
        {
          header: "A) About",
          text:
            "Capstone brand identity for VELOURA, created as my final project for Coursera's Graphic Design Specialization. I wanted to explore how a brand could speak to the new generation and tackle overconsumption, while still feeling playful, mystical, and fashion-forward.",
        },
        {
          header: "B) Problem & Intent",
          text:
            "I envisioned a brand that felt like a cult favorite, rather than a polished corporate brand, which was something out of my comfort zone. My startup is a brand that sells vintage fashion items, based on tarot card readings, a business started in the dorms by two friends.",
        },
        {
          header: "C) Research & Ideation",
          text:
            "Through mind mapping, I explored clusters of ideas around ritual, barter, sustaintability, which lead me to a curated aesthetic.",
        },
        {
          header: "D) Naming & Positioning",
          text:
            "I chose the name VELOURA (velour + aura) to fuse tactile, vintage fashion with the idea of the tarot card readings. The core qualities I aimed for were mystical, hip, and timeless.",
        },
        {
          header: "E) Visual Decisions",
          text:
            "I pulled from 1960s–80s psychedelia, pop culture, and editorial designs.",
        },
        {
          header: "F) Logotype",
          text:
            "The VELOURA logotype is set in bold, uppercase psychedelic letterforms to feel iconic and instantly recognizable.",
        },
        {
          header: "G) Typography",
          text:
            "I paired an expressive display font for headlines with a clean, neutral sans-serif for copy to balance personality with clarity.",
        },
        {
          header: "H) Color System",
          text:
            "The color system combines saturated, psychedelic primaries with softer supporting tones for imagery, and neutrals for UI.",
        },
        {
          header: "I) Imagery",
          text:
            "Imagery is treated like modern tarot cards, using high-fashion editorial photos framed with symbols, borders, and layered graphics.",
        },
        {
          header: "J) Mockups",
          text:
            "I translated the system into store signage, tags, and responsive web mockups to show how VELOURA lives both offline and online.",
        },
      ],
      colors: ["#DF3912", "#5DA24E", "#EA4574", "#DFC6F9", "#37373E"],
    },
  ],
  web: [
    {
      name: "personal website",
      year: 2024,
      techStackPreview: "*/react, next.js*/",
      tags: [
        "react",
        "typescript",
        "react-three-fiber",
        "css",
        "html",
        "seo",
        "next.js",
        "styled components",
        "webpack",
        "vercel",
        "ffmpeg",
        "magick",
      ],
      mediaContents: [
        {
          type: "video",
          src: "/projects/personal-website/content/1.mov",
        },
        {
          type: "video",
          src: "/projects/personal-website/content/2.mov",
        },
        {
          type: "video",
          src: "/projects/personal-website/content/3.mov",
        },
        {
          type: "video",
          src: "/projects/personal-website/content/4.mov",
        },
        {
          type: "image",
          src: "/projects/personal-website/content/5.avif",
        },
      ],
      buttons: [
        {
          imageSrc: "/social/github.avif",
          alt: "GitHub",
          link: "hhttps://github.com/laprinia/laprinia-www",
        },
      ],
      textContents: [
        {
          header: "A) About",
          text: "My personal website that acts as a love 💌 to all my favorite UX design trends and best practices I've gained over the years as a web developer. It highlights my creative approach to website building, combining simplicity in style and typography with engaging animations, CSS transitions, and bold colors. The site is a showcase of both creativity and technical prowess, designed to keep users engaged and ensure a fun experience. Enjoy!",
        },
        {
          header: "B) Recipe",
          text:
            "<ul>\n" +
            "<li>Next.js for improved SEO and faster load times through server-side rendering</li>\n" +
            "<li>React with TypeScript for type safety and robust code management</li>\n" +
            "<li>React Three Fiber for 3D text animations and visual effects</li>\n" +
            "<li>Framer Motion for smooth, CSS-based animations and transitions</li>\n" +
            "<li>Focus on accessibility features and responsive design for a seamless experience on all devices</li>\n" +
            "</ul>\n",
        },
        {
          header: "C) Key Feats",
          text:
            "<ul>\n" +
            "<li>🌐 SEO & Performance Optimization</li>\n" +
            "<li>🎨 Responsive Design</li>\n" +
            "<li>✨ 3D Text Animations</li>\n" +
            "<li>🖼️ Mixed Media Carousel</li>\n" +
            "<li>📄 Modular Page Structure</li>\n" +
            "<li>🛠️ Framer Motion Animations</li>\n" +
            "</ul>\n",
        },
      ],
      colors: ["#0141D5", "#F6F6F6", "#000000"],
    },
    {
      name: "text wave",
      year: 2024,
      techStackPreview: "*/react, webgl*/",
      tags: [
        "react",
        "typescript",
        "react-three-fiber",
        "drei",
        "styled components",
      ],
      mediaContents: [
        {
          type: "video",
          src: "/projects/text-wave/content/0.mov",
        },
        {
          type: "video",
          src: "/projects/text-wave/content/1.mov",
        },
        {
          type: "video",
          src: "/projects/text-wave/content/3.mov",
        },
        {
          type: "video",
          src: "/projects/text-wave/content/4.mov",
        },
      ],
      buttons: [
        {
          imageSrc: "/social/github.avif",
          alt: "GitHub",
          link: "https://github.com/laprinia/laprinia-www",
        },
      ],
      textContents: [
        {
          header: "A) About",
          text: "Animating text textures for my web apps using React Three Fiber. This project explores dynamic 3D text textures that can either auto-animate or respond to the cursor position, controlling the intensity of the animation in real-time.",
        },
        {
          header: "B) Follows",
          text:
            "<ul>\n" +
            "<li>React Three Fiber for rendering 3D scenes within React</li>\n" +
            "<li>Drei addons, specifically <code>Plane</code>, for easier creation of textured planes</li>\n" +
            "<li>Three.js for texture management and geometry manipulation</li>\n" +
            "<li>Raleway font used for my text samples</li>\n" +
            "</ul>\n",
        },
        {
          header: "C) Key Feats",
          text:
            "<ul>\n" +
            "<li><h3>🌊 Wave Animation Based on Cursor</h3> The 3D text texture deforms dynamically based on cursor distance from the top left of the canvas. The animation's intensity scales with the cursor's proximity to the edges, achieved via custom shaders and vertex displacement.</li>\n" +
            "<li><h3>🔄 Auto-Animation Mode</h3> Enables a continuous, smooth wave effect on the text texture without requiring user interaction. This mode can be toggled, using a parameter to control the animation speed.</li>\n" +
            "<li><h3>📄 Texture Handling</h3> Efficiently loads and maps textures using <code>THREE.TextureLoader</code>, ensuring optimal aspect ratio scaling on different viewports.</li>\n" +
            "<li><h3>💻 Real-Time Vertex Displacement</h3> The vertex positions are recalculated every frame to create a wave effect using a combination of sinusoidal functions. For instance:</li>\n" +
            "<code>const waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\n" +
            "const waveY1 = 0.25 * Math.sin(vertex.y * 2.5 + time * 2);\n" +
            "vertex.z = targetIntensityRef.current * (waveX1 + waveY1);</code>\n" +
            "</li>\n" +
            "<li><h3>📐 Responsive Scaling</h3> Automatically adjusts the plane size to maintain texture quality across different screen sizes.</li>\n" +
            "</ul>\n",
        },
      ],
      colors: ["#01692B", "#004392", "#F17019"],
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
          src: "/projects/fullstack-authentication/content/1.avif",
        },
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/2.avif",
        },
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/3.avif",
        },
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/4.avif",
        },
        {
          type: "image",
          src: "/projects/fullstack-authentication/content/5.avif",
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
          imageSrc: "/social/github.avif",
          alt: "GitHub",
          link: "https://github.com/laprinia/opea",
        },
        {
          imageSrc: "/social/behance.avif",
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
            "      <li>Radix UI icons</li>\n" +
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
            "<li>Joi for data validation in the backend</li>\n" +
            "<li>Mongoose DB schema using TypeScript types to enforce accepted color outputs and formats</li>\n" +
            "<li>Randomized custom backgrounds provided by the Unsplash API</li>\n" +
            "<li>Glassmorphism components styled with custom CSS inside Mantine components</li>\n" +
            "<li>Field & form validation implemented</li>\n" +
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
          src: "/projects/web-3d-terrain-generator/content/1.avif",
        },
        {
          type: "video",
          src: "/projects/web-3d-terrain-generator/content/intro.mp4",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/2.avif",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/3.avif",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/4.avif",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/5.avif",
        },
        {
          type: "image",
          src: "/projects/web-3d-terrain-generator/content/6.avif",
        },
        {
          type: "video",
          src: "/projects/web-3d-terrain-generator/content/outro.mp4",
        },
      ],
      buttons: [
        {
          imageSrc: "/social/github.avif",
          alt: "GitHub",
          link: "https://github.com/laprinia/phea",
        },
      ],
      textContents: [
        {
          header: "A) About",
          text: "React 3D terrain generation editor and visualiser using React-Three-Fiber, using the marching cubes algo.",
        },
        {
          header: "B) Frontend Recipe",
          text:
            "<ul>\n" +
            "<li>React Three Fiber, a React renderer for Three.js</li>\n" +
            "<li>Drei addons for React Three Fiber</li>\n" +
            "<li>GLSL Noise for Simplex noise</li>\n" +
            "<li>Mantine for UI components</li>\n" +
            "</ul>\n",
        },
        {
          header: "C) Key Feats",
          text:
            "<ul>\n" +
            "<li><h3>🧊 Marching cubes algorithm implementation</h3> Divides a volume in 3D space into cubes to approximate rendered faces for a mesh. Utilizes voxels to determine density and surface points.</li>\n" +
            "<li><h3>📼 Simplex Noise</h3> A 3D noise function for randomizing terrain height values. Parameters include noiseScale, octaves, weightMultiplier, persistencePerOctave, detailPerOctave, and noiseWeight.</li>\n" +
            "<li><h3>🏔️ Terracing</h3> Clamps terrain height on levels, with spacing set by <strong>terracingLevel</strong>.</li>\n" +
            "<li><h3>🌈 Color Height Map</h3> Uses a .png gradient for coloring fragments in the fragment shader.</li>\n" +
            "<li><h3>🍄 Visual Smoothing</h3> Smooths low-poly terrain by removing the world normal vector from height calculation in the fragment shader.</li>\n" +
            "<li><h3>✨ Post Processing</h3> Effects like TiltShift, Bloom, Noise, and BrightnessContrast achieved using r3f's postprocessing wrapper.</li>\n" +
            "<li><h3>🏊 Floating Effect & Mesh Rotation</h3> Uses a height vertex shader with elapsed time-based disturbance, and rotates the mesh on the y-axis.</li>\n" +
            "<li><h3>🎛️ The UI</h3> Controls gradient, marching cubes, and Simplex noise parameters, and regenerates the mesh.</li>\n" +
            "</ul>\n",
        },
      ],
      colors: ["#0C1210", "#1D4636", "#2C5C64", "#99ABB7", "#6BADE7"],
    },
    {
      name: "ghent bikes",
      year: 2024,
      techStackPreview: "*/react, next.js, figma*/",
      tags: [
        "react",
        "typescript",
        "accessibility",
        "next.js",
        "figma",
        "chakra ui",
        "joi",
        "winston",
        "google maps",
      ],
      mediaContents: [
        {
          type: "image",
          src: "/projects/ghent-bikes/content/1.avif",
        },
        {
          type: "image",
          src: "/projects/ghent-bikes/content/2.avif",
        },
        {
          type: "image",
          src: "/projects/ghent-bikes/content/3.avif",
        },
        {
          type: "image",
          src: "/projects/ghent-bikes/content/4.avif",
        },
      ],
      buttons: [],
      textContents: [
        {
          header: "A) About",
          text:
            "Web app that surfaces bike and parking stations in Ghent from the city's open data API. Each station shows capacity, live availability, a copyable name, and a Google Maps preview so riders can quickly decide where to park.",
        },
        {
          header: "B) UI & Accessibility",
          text:
            "<ul>\n" +
            "<li>Chakra UI provides semantic building blocks, theming, and responsive breakpoints with minimal custom CSS.</li>\n" +
            "<li>Hidden helper text (e.g., <code>&lt;p hidden&gt;</code>) describes map previews for screen readers.</li>\n" +
            "<li><code>as</code> props and rem-based sizing support better semantics and scalable typography.</li>\n" +
            "<li>Axe is used during development to catch and fix accessibility issues early.</li>\n" +
            "</ul>\n",
        },
        {
          header: "C) Problem & Data Source",
          text:
            "Using the Stad Gent open data catalog for bikes, I wanted to turn raw datasets into a practical city tool: clear lists of bike stations and parking spots that are easy to scan, compare, and locate on a map.",
        },
        {
          header: "D) Architecture & Validation",
          text:
            "<ul>\n" +
            "<li>Next.js API routes handle fetching and routing, with Joi schemas validating incoming responses from the Ghent endpoints.</li>\n" +
            "<li>Winston is used for logging validation issues or unexpected data shapes.</li>\n" +
            "<li>This setup keeps the API layer small and opinionated, ideal for a focused, dataset-driven app.</li>\n" +
            "</ul>\n",
        },
        {
          header: "E) Queries & Endpoints",
          text:
            "<pre><code>Bike spots\nSELECT name, bikes_in_use, bikes_available, geopoint\nORDER BY name ASC\n\nPark spots\nSELECT name, description, type, categorie, totalcapacity, availablecapacity, occupation, isopennow\nWHERE (availablecapacity / totalcapacity * 100) &gt; 50 AND isopennow = 1\nORDER BY availablecapacity DESC\n</code></pre>\n" +
            "These structured queries are used to build the data.stad.gent URLs that power the bikes and parkings views.",
        },
        {
          header: "F) Routing & Data Fetching",
          text:
            "<ul>\n" +
            "<li>/ — landing page with hero and links into the bikes and parkings flows.</li>\n" +
            "<li>/bikes — shows the four Blue Bikes locations with capacity information.</li>\n" +
            "<li>/parkings — lists parking spots with at least 50% availability.</li>\n" +
            "<li>/parkings/[slug] — details view for a single parking, where the slug is generated from the fetched data.</li>\n" +
            "<li>Most data is fetched client-side to keep it fresh; /parkings uses static generation with revalidation around every minute.</li>\n" +
            "</ul>\n",
        },
      ],
      colors: ["#0141D5", "#42A5F5", "#1B5E20"],
    },
  ],
  "3d": [
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
        { type: "image", src: "/projects/ray-tracer/content/1.avif" },
        { type: "image", src: "/projects/ray-tracer/content/2.avif" },
        { type: "image", src: "/projects/ray-tracer/content/3.avif" },
        { type: "image", src: "/projects/ray-tracer/content/4.avif" },
        { type: "image", src: "/projects/ray-tracer/content/5.avif" },
        { type: "image", src: "/projects/ray-tracer/content/6.avif" },
        { type: "image", src: "/projects/ray-tracer/content/7.avif" },
        { type: "image", src: "/projects/ray-tracer/content/8.avif" },
        { type: "image", src: "/projects/ray-tracer/content/9.avif" },
        { type: "image", src: "/projects/ray-tracer/content/10.avif" },
        { type: "image", src: "/projects/ray-tracer/content/11.avif" },
        { type: "image", src: "/projects/ray-tracer/content/12.avif" },
        { type: "video", src: "/projects/ray-tracer/content/13.mp4" },
      ],
      buttons: [
        {
          imageSrc: "/social/behance.avif",
          alt: "Behance",
          link: "https://www.behance.net/gallery/161536343/-OpenGL-real-time-ray-tracer",
        },
        {
          imageSrc: "/social/github.avif",
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
            "<h3>1. Matte Materials</h3>\n" +
            "<p>\n" +
            "    The process is simple: normalizing the y coordinate and interpolating between two colors.\n" +
            "    Checking if the rays hit the sphere and displaying the color. The resulting color is computed\n" +
            "    by picking a random point inside a unit radius sphere, whose normal starts from the initial ray hit point.\n" +
            "    This is done recursively until a ray doesn't hit anything or a maximum depth is reached.\n" +
            "  </p>\n" +
            "\n" +
            "<h3>2. Metallic Surfaces</h3>\n" +
            "<p>\n" +
            "    For metallic surfaces, rays aren't randomly scattered. Luckily, GLSL has the \n" +
            "    <code>reflect()</code> function, which returns the reflected ray. Randomizing the reflected\n" +
            "    ray by choosing a random endpoint, as we did for the matte surface, gives rough (fuzzy) surfaces.\n" +
            "  </p>\n" +
            "\n" +
            "<h3>3. Dielectric Surfaces</h3>\n" +
            "<p>\n" +
            "    A ray is split into both a reflected one and a refracted one. Assuming that all rays are \n" +
            "    only refracted results in one outcome. Using Schlick's polynomial approximation, we can \n" +
            "    determine if rays must be reflected instead of refracted, producing the final result.\n" +
            "  </p>\n" +
            "\n" +
            "<h3>4. Cornell Box</h3>\n" +
            "<p>\n" +
            "    Adding a Cornell Box introduces more complexity into the scene. To make things more \n" +
            "    realistic, emissive materials are added for ceiling lights and spheres. Rays hitting \n" +
            "    an emissive surface won't scatter, so they retain their true albedo color output.\n" +
            "  </p>\n" +
            "\n" +
            "<h3>5. Post-Processing</h3>\n" +
            "<p>\n" +
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
        { type: "image", src: "/projects/volumetric-light/content/1.avif" },
        { type: "video", src: "/projects/volumetric-light/content/2.mp4" },
        { type: "image", src: "/projects/volumetric-light/content/3.avif" },
        { type: "image", src: "/projects/volumetric-light/content/4.avif" },
        { type: "image", src: "/projects/volumetric-light/content/5.avif" },
      ],
      buttons: [
        {
          imageSrc: "/social/behance.avif",
          alt: "Behance",
          link: "https://www.behance.net/gallery/162428687/-OpenGL-volumetric-light-study",
        },
        {
          imageSrc: "/social/github.avif",
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
            "<li>Blinn-Phong model</li>\n" +
            "<li>Multiple Light Sources:\n" +
            "        <ul>\n" +
            "<li>Directional</li>\n" +
            "<li>Point</li>\n" +
            "<li>Spotlight</li>\n" +
            "        </ul>\n" +
            "</li>\n" +
            "<li>Normal Mapping</li>\n" +
            "<li>Shadow Mapping using a depth map rendered from the light's point of view, projected in perspective</li>\n" +
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
            "<li>Post-Processing effects: HDR, Gamma Correction, and Grain</li>\n" +
            "<li>Additional techniques: Anti-Aliasing, Blending, Depth Testing, and Skybox implementation</li>\n" +
            "</ul>",
        },
      ],
      colors: ["#e97972", "#E53190", "#2EABD3", "#E3E874", "#E4E3EA"],
    },
  ],
  experimental: [
    {
      name: "lissajous curves",
      year: 2024,
      techStackPreview: "*/touchdesigner, python*/",
      tags: [
        "touchdesigner",
        "math",
        "python",
        "generative art",
        "rendering",
        "3d",
      ],
      mediaContents: [
        { type: "video", src: "/projects/lissajous-curves/content/1.mp4" },
        { type: "image", src: "/projects/lissajous-curves/content/3.avif" },
        { type: "image", src: "/projects/lissajous-curves/content/2.avif" },
        { type: "image", src: "/projects/lissajous-curves/content/4.avif" },
      ],
      buttons: [
        {
          imageSrc: "/social/behance.avif",
          alt: "Behance",
          link: "https://www.behance.net/gallery/195409049/-Touch-Designer-lissajous-curves",
        },
      ],
      textContents: [
        {
          header: "A) About",
          text: "This project is a TouchDesigner application that visualizes <em>Lissajous curves</em> using various bases. Each base (e.g., <code>base31</code>, <code>base51</code>, etc.) renders in a separate window, creating a unique 3x3 grid composition with emissive materials on a red background. The visual design utilizes custom scripts to manage the dynamic parameters of each base and add depth to the visual output.",
        },
        {
          header: "B) Process",
          text:
            "<section>\n" +
            "<h3>1. Setup and Initialization</h3>\n" +
            "<p>\n" +
            "    Each base is controlled by an Execute DAT script. The script adjusts parameters such as\n" +
            "    <code>transform</code> positions and rotation based on the base name. During initialization,\n" +
            "    the script extracts specific characters from the name of each base to determine its parameters.\n" +
            "  </p>\n" +
            "\n" +
            "<h3>2. Curve Manipulation</h3>\n" +
            "<p>\n" +
            "    Inside the <code>onFrameStart()</code> function, variables are set to control each curve's\n" +
            "    position and rotation. For instance:\n" +
            "    <pre><code>\n" +
            "      BaseName = op('..').name\n" +
            "      Name = list(BaseName)\n" +
            "      NameLength = len(Name)\n" +
            "      op('transform1').par.tx = Name[NameLength - 2]\n" +
            "      op('transform1').par.ty = float(Name[NameLength - 1]) * 1.5\n" +
            "    </code></pre>\n" +
            "    These values are dynamically applied, ensuring that each curve has a distinct placement and\n" +
            "    rotation within the grid.\n" +
            "  </p>\n" +
            "\n" +
            "</section>\n",
        },
      ],
      colors: ["#790B0B"],
    },
  ],
};

//     web: [{ name: "1.1" }],
//     graphics: [{ name: "2.1" }],
//     ux: [{ name: "3.1" }],
//     other: [{ name: "4.1" }],
