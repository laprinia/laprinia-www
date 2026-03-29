// Auto-generated from content/projects/*.yaml
// Media paths (/projects/...) are Cloudinary public IDs (upload with: npm run upload:cloudinary -- public/projects/<slug>).

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
  playground: Project[];
};

export const projects: ProjectCategories = {
  "branding & design": [
    {
      "name": "ai playbooks",
      "year": 2026,
      "techStackPreview": "*/webflow, figma*/",
      "tags": [
        "webflow",
        "figma",
        "design engineering",
        "gsap",
        "css",
        "design systems"
      ],
      "headshot": "/projects/ai-playbooks/headshot-img.avif",
      "headshotGif": "/projects/ai-playbooks/headshot.webp",
      "mediaContents": [
        {
          "type": "video",
          "src": "/projects/ai-playbooks/content/1.mov"
        },
        {
          "type": "video",
          "src": "/projects/ai-playbooks/content/2.mov"
        },
        {
          "type": "video",
          "src": "/projects/ai-playbooks/content/3.mov"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/web",
          "alt": "ITP Webpage",
          "link": "https://www.inthepocket.com/ai-playbooks"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "Design engineering work for In The Pocket on AI Playbooks 🌈, a dedicated page for their AI maturity consultation practice. The page helps potential clients understand In The Pocket's AI focus and expertise, and spark a conversation."
        },
        {
          "header": "B) Aesthetic Direction",
          "text": "The visual language blends movement in photography with the actual motion of the page itself."
        },
        {
          "header": "C) Scroll-Driven Card Spread",
          "text": "The hero interaction is a card spread effect that unfolds as the user scrolls, built with scroll-triggered GSAP animations in Webflow. It draws visitors in by turning passive scrolling into an act of discovery, setting the tone for how In The Pocket approaches AI."
        },
        {
          "header": "D) Interactive Card System",
          "text": "Tool and event cards respond to hover and pointer movement with a 3D tilt effect powered by CSS perspective, giving the interface a tactile, dimensional quality. Each card layout is designed so the information hierarchy is immediately clear, what the tool or event is, when it was added, and when it takes place, making it easy for visitors to scan and orient themselves in time."
        },
        {
          "header": "E) Visual System",
          "text": "The page is a showcase of In The Pocket's new design system, leaning into gradients and a pastel palette that communicates curiosity and playfulness rather than the cold, corporate tone AI content often defaults to."
        },
        {
          "header": "F) User Research",
          "text": "While there was no formal user research phase, the design decisions were informed indirectly, through stakeholder conversations, observing how visitors navigated similar pages, and iterating on what made the offering easier to understand at a glance."
        },
        {
          "header": "G) Impact",
          "text": "The page has brought more customers into active AI consultation discussions, made the AI roadmap clearer and more tangible for stakeholders, and served as a flagship example of the new design system in production."
        }
      ],
      "colors": [
        "#E9EAF4",
        "#181A43",
        "#EDAC7D"
      ]
    },
    {
      "name": "dytto rebrand",
      "year": 2025,
      "techStackPreview": "*/figma*/",
      "tags": [
        "branding",
        "design systems",
        "prototyping",
        "user research",
        "wireframes",
        "interaction design",
        "figma"
      ],
      "headshot": "/projects/dytto-rebrand/headshot-img.avif",
      "headshotGif": "/projects/dytto-rebrand/headshot.webp",
      "mediaContents": [
        {
          "type": "video",
          "src": "/projects/dytto-rebrand/content/1.mov"
        },
        {
          "type": "image",
          "src": "/projects/dytto-rebrand/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/dytto-rebrand/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/dytto-rebrand/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/dytto-rebrand/content/5.avif"
        },
        {
          "type": "image",
          "src": "/projects/dytto-rebrand/content/6.avif"
        },
        {
          "type": "image",
          "src": "/projects/dytto-rebrand/content/7.avif"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/web",
          "alt": "Dytto Website",
          "link": "https://www.dytto.ai/"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "A full rebrand and design system build for Dytto, an AI-powered accounting assistant that intercepts incoming mail, extracts financial data, and handles bookkeeping tasks for you. The project spanned user research, brand exploration, a component-level design system, and an interactive prototype for the desktop app."
        },
        {
          "header": "B) Brand Exploration",
          "text": "Using style tiles, we had the client adjust brand sliders (formal vs. warm, affordable vs. premium) to map out the tonal space. After several rounds, we landed on a playful, approachable direction: hand-drawn animation, a warm color palette, and rounded corners that soften the experience without losing professionalism."
        },
        {
          "header": "C) Design System",
          "text": "I extracted a complete design system from the wireframes: tokens for color, typography, spacing, and radius; reusable components for buttons, inputs, cards, modals, and navigation; and documentation to keep the branding consistent as the product grows."
        },
        {
          "header": "D) Prototype & Interaction",
          "text": "Using the design system, I built an interactive Figma prototype covering login, the chat flow, and email detail views. Key interaction decisions: the pigeon mascot animates across states (idle, thinking, waiting) inspired by Notion AI, glow effects highlight incoming email actions and AI-processed components, and referenced files or customer profiles pop out inline so users never lose context."
        },
        {
          "header": "E) Flow & Polish",
          "text": "The focus was on making every transition feel intentional. Chat responses build smoothly, email cards surface the right details at the right moment, and the pigeon's state changes give users a clear signal of what the AI is doing without relying on loading spinners or text."
        },
        {
          "header": "F) Impact",
          "text": "Following the rebrand and prototype delivery, Dytto secured additional funding and is now an actively growing product. The design system continues to serve as the foundation for their website and app."
        }
      ],
      "colors": [
        "#C65C31",
        "#EFBB55",
        "#F6F6F4"
      ]
    },
    {
      "name": "veloura brand guide",
      "year": 2025,
      "techStackPreview": "*/figma, illustrator*/",
      "tags": [
        "branding",
        "visual identity",
        "logo design",
        "color systems",
        "typography",
        "mockups",
        "ui",
        "ux research"
      ],
      "headshot": "/projects/veloura-brand-guide/headshot-img.avif",
      "headshotGif": "/projects/veloura-brand-guide/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/veloura-brand-guide/content/1.avif"
        },
        {
          "type": "image",
          "src": "/projects/veloura-brand-guide/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/veloura-brand-guide/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/veloura-brand-guide/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/veloura-brand-guide/content/5.avif"
        },
        {
          "type": "image",
          "src": "/projects/veloura-brand-guide/content/6.avif"
        },
        {
          "type": "image",
          "src": "/projects/veloura-brand-guide/content/7.avif"
        },
        {
          "type": "image",
          "src": "/projects/veloura-brand-guide/content/8.avif"
        }
      ],
      "buttons": [],
      "textContents": [
        {
          "header": "A) About",
          "text": "Capstone brand identity for VELOURA, created as my final project for Coursera's Graphic Design Specialization 🍬. I wanted to explore how a brand could speak to the new generation and tackle overconsumption, while still feeling playful, mystical, and fashion-forward 👢."
        },
        {
          "header": "B) Problem & Intent",
          "text": "I envisioned a brand that felt like a cult favorite, rather than a polished corporate brand, which was something out of my comfort zone. My startup is a brand that sells vintage fashion items, based on tarot card readings, a business started in the dorms by two friends."
        },
        {
          "header": "C) Research & Ideation",
          "text": "Through mind mapping, I explored clusters of ideas around ritual, barter, sustaintability, which lead me to a curated aesthetic."
        },
        {
          "header": "D) Naming & Positioning",
          "text": "I chose the name VELOURA (velour + aura) to fuse tactile, vintage fashion with the idea of the tarot card readings. The core qualities I aimed for were mystical, hip, and timeless."
        },
        {
          "header": "E) Visual Decisions",
          "text": "I pulled from 1960s–80s psychedelia, pop culture, and editorial designs."
        },
        {
          "header": "F) Logotype",
          "text": "The VELOURA logotype is set in bold, uppercase psychedelic letterforms to feel iconic and instantly recognizable."
        },
        {
          "header": "G) Typography",
          "text": "I paired an expressive display font for headlines with a clean, neutral sans-serif for copy to balance personality with clarity."
        },
        {
          "header": "H) Color System",
          "text": "The color system combines saturated, psychedelic primaries with softer supporting tones for imagery, and neutrals for UI."
        },
        {
          "header": "I) Imagery",
          "text": "Imagery is treated like modern tarot cards, using high-fashion editorial photos framed with symbols, borders, and layered graphics."
        },
        {
          "header": "J) Mockups",
          "text": "I translated the system into store signage, tags, and responsive web mockups to show how VELOURA lives both offline and online."
        }
      ],
      "colors": [
        "#DF3912",
        "#5DA24E",
        "#EA4574",
        "#DFC6F9",
        "#37373E"
      ]
    },
    {
      "name": "mood ring",
      "year": 2024,
      "techStackPreview": "*/figma*/",
      "tags": [
        "figma",
        "design systems",
        "ui design",
        "prototyping",
        "wireframes",
        "user flows",
        "responsive design"
      ],
      "headshot": "/projects/mood-ring/headshot-img.avif",
      "headshotGif": "/projects/mood-ring/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/mood-ring/content/0.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/1.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/5.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/6.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/7.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/8.avif"
        },
        {
          "type": "image",
          "src": "/projects/mood-ring/content/9.avif"
        }
      ],
      "buttons": [],
      "textContents": [
        {
          "header": "A) About",
          "text": "Capstone project for SuperHi's User Interface course: a design system and interface for Mood Ring, a journaling app that blends birth chart astrology with color therapy to deliver personalized self-reflection prompts."
        },
        {
          "header": "B) Problem & Idea",
          "text": "I wanted to experiment with creating reusable design elements and creating a good structure for my design files."
        },
        {
          "header": "C) Design System",
          "text": "I set up a reusable design system in Figma with color tokens, typography scales, spacing, and component variants so that buttons, cards, inputs could be reused and iterated on quickly."
        },
        {
          "header": "D) Flows & Prototyping",
          "text": "Wireframes and user flows map how someone moves from logging in to onboarding, then I turned them into interactive prototypes to test navigation, hierarchy, and microinteractions."
        },
        {
          "header": "E) Responsive UI",
          "text": "Layouts are designed mobile-first, then adapted to tablet and desktop, focusing on flexible grids and component behavior so the mood journal feels consistent yet tailored across screen sizes."
        },
        {
          "header": "F) Color Palette",
          "text": "The palette uses a warm primary coral, a soft neutral secondary, deep near-black, and white to balance emotional intensity with calm, legible UI."
        },
        {
          "header": "G) Key Learnings",
          "text": "This project solidified how to structure a design system, design for multiple breakpoints, build reusable variants, and prototype user journeys end to end."
        }
      ],
      "colors": [
        "hsla(10, 81%, 60%, 1)",
        "hsla(240, 6%, 80%, 1)",
        "hsla(0, 0%, 5%, 1)"
      ]
    },
    {
      "name": "personal website ux",
      "year": 2024,
      "techStackPreview": "*/figma, adobe*/",
      "tags": [
        "ux",
        "interaction design",
        "3d",
        "figma",
        "responsive design",
        "affinity designer"
      ],
      "headshot": "/projects/personal-website-ux/headshot-img.avif",
      "headshotGif": "/projects/personal-website-ux/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/personal-website-ux/content/1.avif"
        },
        {
          "type": "image",
          "src": "/projects/personal-website-ux/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/personal-website-ux/content/3.avif"
        },
        {
          "type": "video",
          "src": "/projects/personal-website-ux/content/4.mp4"
        },
        {
          "type": "video",
          "src": "/projects/personal-website-ux/content/5.mp4"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/github",
          "alt": "GitHub",
          "link": "https://github.com/laprinia/laprinia-www"
        }
      ],
      "textContents": [
        {
          "header": "A) Goals",
          "text": "I wanted a portfolio that feels like me, not a template 🙂‍↕️, clear like the layout of an old dictionary, but lightened up with 3D and motion so it stays curious and fun. Easy to explore, and meant to show my work with warmth and a bit of play."
        },
        {
          "header": "B) Problem",
          "text": "Most portfolio patterns assume one rhythm: similar tiles, similar areas of work, everything flattened to the same kind of proof. My work doesn’t look that way. Some ideas need motion or a screen recording before they make sense, whereas others need the quiet of a wireframe or a layout study, sometimes I need to show a small bit of logic or interface detail. I needed one place that could hold that range without pretending every project is the same story, and that could stay truthful as the mix of work I take on changes over time."
        },
        {
          "header": "C) Process",
          "text": "I approached it like a tiny product: map the journeys (arrive, browse, go deep on one piece), then design for curiosity—moments where you can look closer, move something, or feel pacing change instead of only scrolling. Alongside that, I designed the portfolio’s structure itself: groupings and labels that match how I think about my practice today, with room to rename and shuffle sections tomorrow so the site can grow with my role: not locking me into last year’s categories."
        },
        {
          "header": "D) Outcome",
          "text": "What I got is closer to a living introduction than a stiff deck: something I can show almost anyone and they still leave with a felt sense of what I do and how I work, the <em>shape</em> of my process."
        }
      ],
      "colors": [
        "#0141D5",
        "#F5F4F1",
        "#49453D"
      ]
    }
  ],
  "web": [
    {
      "name": "engie chatgpt widget",
      "year": 2026,
      "techStackPreview": "*/react, mcp, chatgpt sdk*/",
      "tags": [
        "react",
        "mcp",
        "chatgpt apps sdk",
        "node.js",
        "drizzle",
        "vite",
        "data visualization",
        "design systems"
      ],
      "headshot": "/projects/engie-chatgpt-widget/headshot-img.avif",
      "headshotGif": "/projects/engie-chatgpt-widget/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/engie-chatgpt-widget/content/1.avif"
        },
        {
          "type": "video",
          "src": "/projects/engie-chatgpt-widget/content/2.mp4"
        },
        {
          "type": "video",
          "src": "/projects/engie-chatgpt-widget/content/3.mp4"
        },
        {
          "type": "video",
          "src": "/projects/engie-chatgpt-widget/content/4.mp4"
        }
      ],
      "buttons": [],
      "textContents": [
        {
          "header": "A) About",
          "text": "A ChatGPT-embedded experience for Engie that gives customers clear, interactive visualizations of their energy consumption and contract, suggests realistic advance payments, and flags whether they'll pay more or less than expected, all through a conversational interface powered by a custom MCP server."
        },
        {
          "header": "B) Problem",
          "text": "Engie customers often struggle to understand their energy usage patterns, whether their advance payment is set correctly, and what they can do to optimize costs. This information exists across multiple screens and requires manual interpretation, making it hard to act on."
        },
        {
          "header": "C) User Flow",
          "text": "A customer opens ChatGPT with the Engie app context, asks about their households, and immediately sees their data. They can request a consumption graph, filter it by date range, hover for details, and prompt the agent directly from the widget to analyze trends or suggest optimizations. For advance payments, the agent compares past usage against the contract and recommends an adjusted amount, flagging overpayment or underpayment before the next billing cycle."
        },
        {
          "header": "D) Features",
          "text": "Interactive consumption graph with month filtering and hover details. Two-way prompting: users can ask ChatGPT to analyze data directly from within the widget. Advance payment tools: view, edit, and get AI-suggested values based on actual consumption. Household management: view, update, and delete records, all reflected in the real database."
        },
        {
          "header": "E) Design Approach",
          "text": "The widgets follow Engie's design system (colors, typography, spacing) while adapting to ChatGPT's constrained viewport, where they need to feel native next to chat bubbles. Minimal chrome, clear data hierarchy, and familiar brand language so customers read the visualizations at a glance without leaving the conversation."
        },
        {
          "header": "F) Impact",
          "text": "After the internal demo, Engie reached out to present the project to their board. The exploration is now being considered for a future production implementation as a new customer-facing channel."
        }
      ],
      "colors": [
        "#05A8FD",
        "#23A9A3",
        "#004A46"
      ]
    },
    {
      "name": "kbc bike leasing",
      "year": 2025,
      "techStackPreview": "*/react, figma*/",
      "tags": [
        "react",
        "typescript",
        "figma",
        "design systems",
        "radix ui",
        "tailwind css",
        "accessibility",
        "react hook form",
        "zod"
      ],
      "headshot": "/projects/kbc-bike-leasing/headshot-img.avif",
      "headshotGif": "/projects/kbc-bike-leasing/headshot.webp",
      "mediaContents": [
        {
          "type": "video",
          "src": "/projects/kbc-bike-leasing/content/1.mov"
        },
        {
          "type": "image",
          "src": "/projects/kbc-bike-leasing/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/kbc-bike-leasing/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/kbc-bike-leasing/content/4.avif"
        }
      ],
      "buttons": [],
      "textContents": [
        {
          "header": "A) About",
          "text": "A bike leasing price simulator for KBC Bank Belgium. Users walk through a multi-step wizard to estimate their monthly leasing cost based on bike type, marital and salary status, and commute distance, replacing a process that previously required calling a KBC employee."
        },
        {
          "header": "B) Problem",
          "text": "Calculating bike leasing costs in Belgium depends on salary taxation rules, marital status, and commute details. Before this tool, customers had to call a KBC employee who would run the numbers in a spreadsheet. There was no self-service option."
        },
        {
          "header": "C) Design System",
          "text": "The Figma wireframes I inherited were static and didn't use components. I built a full component library from them: design tokens for KBC's brand colors, typography (MuseoSans), spacing, and radius; and component variants for inputs, buttons, radio groups, progress bars, and form states. Every component was created both in the Figma file and as a React component, giving KBC a reusable library for future projects."
        },
        {
          "header": "D) User Flow",
          "text": "A four-step wizard guides the user through: selecting bike type and price, entering marital and salary status, adding commute details, and reviewing the calculated monthly cost. Each step validates input before progressing, and the progress bar gives a clear sense of where you are and how much is left."
        },
        {
          "header": "E) Accessibility & Interaction",
          "text": "Built on Radix UI primitives for keyboard navigation, focus management, and screen reader support out of the box. Microanimations on step transitions, input focus states, and the progress bar make the flow feel responsive without distracting from the task."
        },
        {
          "header": "F) Challenge",
          "text": "The core complexity was modeling Belgian salary taxation rules correctly: how gross-to-net calculations shift based on marital status, tax brackets, and employer contributions. Getting this right was essential since the simulator replaces a manual expert calculation."
        },
        {
          "header": "G) Impact",
          "text": "Customers can now estimate their bike leasing cost independently, removing the need to call a KBC employee. The React component library built alongside the product serves as a reusable foundation for future KBC web projects."
        }
      ],
      "colors": [
        "#0074B8",
        "#00263E",
        "#00B8C9"
      ]
    },
    {
      "name": "tectonic",
      "year": 2025,
      "techStackPreview": "*/webflow, figma*/",
      "tags": [
        "webflow",
        "figma",
        "design engineering",
        "design",
        "glassmorphism"
      ],
      "headshot": "/projects/tectonic/headshot-img.avif",
      "headshotGif": "/projects/tectonic/headshot.webp",
      "mediaContents": [
        {
          "type": "video",
          "src": "/projects/tectonic/content/1.mp4"
        },
        {
          "type": "image",
          "src": "/projects/tectonic/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/tectonic/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/tectonic/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/tectonic/content/5.avif"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/web",
          "alt": "Tectonic Website",
          "link": "https://www.tectonicconf.eu/program"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "Design engineering work for In The Pocket on Tectonic, a major Belgian tech conference where industry experts share talks and panels."
        },
        {
          "header": "B) Role & Collaboration",
          "text": "As a Design Engineer, I collaborated with volunteers from Nexent and In The Pocket engineers to help bring the Webflow site to life, including key program and schedule sections."
        },
        {
          "header": "C) Program Timeline",
          "text": "Using data from the Webflow CMS, I designed and styled a flexible timeline component that can display multiple days and events across different stages, each on its own swimlane."
        },
        {
          "header": "D) User Research",
          "text": "Decisions were shaped by the organizing team's real pain points, frequent schedule changes, multi-stage layouts, and the need to update content on the fly during the event itself. I also studied how attendees navigate a conference: needing to see which events run in parallel across stages, filtering by stage to narrow their view, and opening a details modal to get the full picture without leaving the schedule page."
        },
        {
          "header": "E) Impact",
          "text": "The component streamlined adding and updating events, crucial for a live conference where times and sessions change frequently, and the result was a huge success for the organizing team."
        },
        {
          "header": "F) Visual Direction",
          "text": "I followed Tectonic's futurist typography and color system, and introduced subtle glass-like effects on buttons and event cards to give the interface a polished, tech-forward feel."
        }
      ],
      "colors": [
        "#764ba2"
      ]
    },
    {
      "name": "web 3d terrain generator",
      "year": 2022,
      "techStackPreview": "*/react, webgl*/",
      "tags": [
        "react",
        "typescript",
        "react-three-fiber",
        "drei",
        "mantine",
        "glsl-noise"
      ],
      "headshot": "/projects/web-3d-terrain-generator/headshot-img.avif",
      "headshotGif": "/projects/web-3d-terrain-generator/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/web-3d-terrain-generator/content/1.avif"
        },
        {
          "type": "video",
          "src": "/projects/web-3d-terrain-generator/content/intro.mp4"
        },
        {
          "type": "image",
          "src": "/projects/web-3d-terrain-generator/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/web-3d-terrain-generator/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/web-3d-terrain-generator/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/web-3d-terrain-generator/content/5.avif"
        },
        {
          "type": "image",
          "src": "/projects/web-3d-terrain-generator/content/6.avif"
        },
        {
          "type": "video",
          "src": "/projects/web-3d-terrain-generator/content/outro.mp4"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/github",
          "alt": "GitHub",
          "link": "https://github.com/laprinia/phea"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "A browser-based 3D terrain editor that lets you sculpt, tweak, and visualize procedural landscapes in real time, bringing the creative loop of 3D generation directly into the web."
        },
        {
          "header": "B) Recipe",
          "text": "<ul>\n<li>React Three Fiber as a React renderer for Three.js</li>\n<li>Drei addons for camera, lighting, and helpers</li>\n<li>GLSL Noise for Simplex noise generation</li>\n<li>Mantine for the editor UI</li>\n</ul>\n"
        },
        {
          "header": "C) Real-Time Feedback Loop",
          "text": "Every parameter change, noise scale, octaves, terracing, instantly regenerates the terrain, so the creative process feels like direct manipulation rather than a build-and-wait cycle."
        },
        {
          "header": "D) Layered Control",
          "text": "<ul>\n<li><h3>🧊 Shape</h3> Marching cubes turn a volume of density values into a visible mesh, giving full control over how terrain surfaces emerge.</li>\n<li><h3>📼 Noise</h3> Simplex noise drives height variation with tunable octaves, persistence, and detail, small tweaks produce dramatically different landscapes.</li>\n<li><h3>🏔️ Terracing</h3> Clamping height into discrete levels carves plateaus and cliff faces, adding structure to organic forms.</li>\n<li><h3>🌈 Color Mapping</h3> A gradient texture maps elevation to color, so visual identity shifts as the terrain evolves.</li>\n</ul>\n"
        },
        {
          "header": "E) Visual Polish",
          "text": "<ul>\n<li><h3>🍄 Smoothing</h3> Softens the low-poly facets into a more organic surface without losing the procedural character.</li>\n<li><h3>✨ Post-Processing</h3> Tilt-shift, bloom, noise grain, and brightness/contrast turn the raw mesh into something that feels cinematic.</li>\n<li><h3>🏊 Ambient Motion</h3> A gentle float and slow rotation keep the terrain alive even when idle, inviting exploration.</li>\n</ul>\n"
        },
        {
          "header": "F) Editor UI",
          "text": "The control panel exposes every generation parameter in a clear, grouped layout, gradient, marching cubes, so users can experiment freely."
        }
      ],
      "colors": [
        "#0C1210",
        "#1D4636",
        "#2C5C64",
        "#99ABB7",
        "#6BADE7"
      ]
    }
  ],
  "3d": [],
  playground: []
};
