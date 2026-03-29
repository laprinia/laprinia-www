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
      "name": "eumar redesign",
      "year": 2026,
      "techStackPreview": "*/figma, react*/",
      "tags": [
        "product design",
        "user research",
        "user journeys",
        "figma",
        "design systems",
        "data visualization",
        "accessibility",
        "enterprise ux",
        "prototyping"
      ],
      "headshot": "/projects/eumar-redesign/headshot-img.avif",
      "headshotGif": "/projects/eumar-redesign/headshot.webp",
      "mediaContents": [
        {
          "type": "video",
          "src": "/projects/eumar-redesign/content/1.mp4"
        },
        {
          "type": "image",
          "src": "/projects/eumar-redesign/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/eumar-redesign/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/eumar-redesign/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/eumar-redesign/content/5.avif"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/web",
          "alt": "EuMAR website",
          "link": "https://www.eshre.eu/Data-collection-and-research/EuMAR/For-professionals"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "EuMAR is a pan-European platform led by ESHRE and financed by the EU, designed to support fertility clinics by providing a shared record of medically assisted reproduction (MAR) treatments and outcomes. The product connects multiple actors: system admins, national registries, and clinic staff—into one unified system while enforcing strict access control and governance."
        },
        {
          "header": "B) Problem",
          "text": "Fertility treatment data across Europe is fragmented across clinics and national systems, with no unified structure for oversight or research. The challenge was to design a system that centralizes data, respects role-based permissions, and remains efficient for daily use."
        },
        {
          "header": "C) Users & Research",
          "text": "Discovery identified three primary user groups: system admins, national registries, and clinic staff. Interviews clarified their needs: admins require a cross-country overview and configuration control; registries focus on national-level insights and oversight; clinic staff manage detailed patient and treatment data over time."
        },
        {
          "header": "D) User Journeys",
          "text": "The prototype emphasizes the system admin journey: the role that enables the entire ecosystem. Key flows include onboarding users, configuring countries and registries, and managing centers."
        },
        {
          "header": "E) Navigation & Product Structure",
          "text": "The interface is built around a stable application shell with a sidebar, main content area, and account controls. Navigation reflects the system’s hierarchy: users, centers, registries, and reporting. Data-heavy screens use consistent table patterns with search, sorting, pagination, and action columns, making complex datasets easy to scan and manage."
        },
        {
          "header": "F) Design System",
          "text": "A token-based design system ensures consistency across the platform, including typography, spacing, and color. Components such as tables, toolbars, and forms are designed for scalability."
        },
        {
          "header": "G) Key Design Decisions",
          "text": "Role-based editing was central: system admins can configure users and structures but cannot modify clinical data, which remains under clinic control. The UI balances density with clarity, using structured layouts and predictable interaction patterns. Consistency across navigation, layout, and components reinforces trust in a complex, data-heavy environment."
        }
      ],
      "colors": [
        "#036CA8"
      ]
    },
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
          "type": "image",
          "src": "/projects/kbc-bike-leasing/content/1.avif"
        },
        {
          "type": "image",
          "src": "/projects/kbc-bike-leasing/content/2.avif"
        },
        {
          "type": "video",
          "src": "/projects/kbc-bike-leasing/content/3.mp4"
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
          "type": "image",
          "src": "/projects/tectonic/content/1.avif"
        },
        {
          "type": "video",
          "src": "/projects/tectonic/content/2.mp4"
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
      "headshot": "/projects/web-terrain-visualizer/headshot-img.avif",
      "headshotGif": "/projects/web-terrain-visualizer/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/web-terrain-visualizer/content/1.avif"
        },
        {
          "type": "video",
          "src": "/projects/web-terrain-visualizer/content/intro.mp4"
        },
        {
          "type": "image",
          "src": "/projects/web-terrain-visualizer/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/web-terrain-visualizer/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/web-terrain-visualizer/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/web-terrain-visualizer/content/5.avif"
        },
        {
          "type": "image",
          "src": "/projects/web-terrain-visualizer/content/6.avif"
        },
        {
          "type": "video",
          "src": "/projects/web-terrain-visualizer/content/outro.mp4"
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
  "3d": [
    {
      "name": "ray tracer",
      "year": 2022,
      "techStackPreview": "*/opengl, compute shaders*/",
      "tags": [
        "opengl",
        "c++",
        "shaders",
        "imgui",
        "post processing",
        "sphere ray tracing",
        "various materials"
      ],
      "headshot": "/projects/ray-tracer/headshot-img.avif",
      "headshotGif": "/projects/ray-tracer/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/1.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/5.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/6.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/7.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/8.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/9.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/10.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/11.avif"
        },
        {
          "type": "image",
          "src": "/projects/ray-tracer/content/12.avif"
        },
        {
          "type": "video",
          "src": "/projects/ray-tracer/content/13.mp4"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/behance",
          "alt": "Behance",
          "link": "https://www.behance.net/gallery/161536343/-OpenGL-real-time-ray-tracer"
        },
        {
          "imageSrc": "/socials/github",
          "alt": "GitHub",
          "link": "https://github.com/laprinia/hyzu"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "OpenGL real-time ray tracer using Compute Shaders. Based on the \"Ray Tracing in One Weekend series\" 🌄."
        },
        {
          "header": "B) Process",
          "text": "<section>\n<h3>1. Matte Materials</h3>\n<p>\n    The process is simple: normalizing the y coordinate and interpolating between two colors.\n    Checking if the rays hit the sphere and displaying the color. The resulting color is computed\n    by picking a random point inside a unit radius sphere, whose normal starts from the initial ray hit point.\n    This is done recursively until a ray doesn't hit anything or a maximum depth is reached.\n  </p>\n\n<h3>2. Metallic Surfaces</h3>\n<p>\n    For metallic surfaces, rays aren't randomly scattered. Luckily, GLSL has the \n    <code>reflect()</code> function, which returns the reflected ray. Randomizing the reflected\n    ray by choosing a random endpoint, as we did for the matte surface, gives rough (fuzzy) surfaces.\n  </p>\n\n<h3>3. Dielectric Surfaces</h3>\n<p>\n    A ray is split into both a reflected one and a refracted one. Assuming that all rays are \n    only refracted results in one outcome. Using Schlick's polynomial approximation, we can \n    determine if rays must be reflected instead of refracted, producing the final result.\n  </p>\n\n<h3>4. Cornell Box</h3>\n<p>\n    Adding a Cornell Box introduces more complexity into the scene. To make things more \n    realistic, emissive materials are added for ceiling lights and spheres. Rays hitting \n    an emissive surface won't scatter, so they retain their true albedo color output.\n  </p>\n\n<h3>5. Post-Processing</h3>\n<p>\n    On the post-processing layer, HDR is applied, making the emissive material stand out more. \n    Bloom is also added, which renders lights as blurred (using Gaussian Blur) and adds the \n    result on top of the base color.\n  </p>\n</section>\n"
        }
      ],
      "colors": [
        "#AD2337",
        "#0b5caf",
        "#68CEE9",
        "#E3E874",
        "#E57CE0",
        "#efedff"
      ]
    },
    {
      "name": "volumetric light",
      "year": 2021,
      "techStackPreview": "*/opengl, glsl shaders*/",
      "tags": [
        "opengl",
        "c++",
        "shaders",
        "imgui",
        "post processing",
        "scene rendering"
      ],
      "headshot": "/projects/volumetric-light/headshot-img.avif",
      "headshotGif": "/projects/volumetric-light/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/volumetric-light/content/1.avif"
        },
        {
          "type": "video",
          "src": "/projects/volumetric-light/content/2.mp4"
        },
        {
          "type": "image",
          "src": "/projects/volumetric-light/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/volumetric-light/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/volumetric-light/content/5.avif"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/behance",
          "alt": "Behance",
          "link": "https://www.behance.net/gallery/162428687/-OpenGL-volumetric-light-study"
        },
        {
          "imageSrc": "/socials/github",
          "alt": "GitHub",
          "link": "https://github.com/laprinia/mozu/tree/main"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "An OpenGL exploration of how light behaves in a 3D space, from basic surface shading all the way to volumetric god rays."
        },
        {
          "header": "B) Lighting Layers",
          "text": "<ul>\n<li><h3>☀️ Surface Shading</h3> Blinn-Phong reflectance with normal mapping gives every surface believable highlights and depth, even on flat geometry.</li>\n<li><h3>💡 Mixed Light Sources</h3> Directional, point, and spotlights each contribute differently, ambient fill, localized warmth near the pool, and focused beams from side lamps,creating a layered atmosphere.</li>\n<li><h3>🌑 Shadows</h3> A depth pass from the light's perspective produces shadow maps that ground objects in the scene and add contrast.</li>\n<li><h3>🌈 Volumetric Rays</h3> Ray marching through an occlusion texture produces visible light shafts, turning the lighting from a surface property into something you can see in the air.</li>\n</ul>\n"
        },
        {
          "header": "C) Building Up",
          "text": "The scene evolved in stages, starting with a single directional light and flat shading, then layering in normal maps for surface detail, gamma correction and HDR to fix color accuracy, shadow mapping for spatial grounding, and finally volumetric rays as the visual payoff. Each step visibly improved the mood."
        },
        {
          "header": "D) Visual Polish",
          "text": "<ul>\n<li>HDR and Gamma Correction for accurate, rich color</li>\n<li>Film grain for texture and warmth</li>\n<li>Anti-aliasing and depth testing for clean geometry</li>\n<li>Skybox for environmental context</li>\n</ul>\n"
        }
      ],
      "colors": [
        "#e97972",
        "#E53190",
        "#2EABD3",
        "#E3E874",
        "#E4E3EA"
      ]
    }
  ],
  "experimental": [
    {
      "name": "media pipe",
      "year": 2025,
      "techStackPreview": "*/touchdesigner*/",
      "tags": [
        "touchdesigner",
        "mediapipe",
        "instancing",
        "image processing"
      ],
      "headshot": "/projects/media-pipe/headshot-img.avif",
      "headshotGif": "/projects/media-pipe/headshot.webp",
      "mediaContents": [
        {
          "type": "video",
          "src": "/projects/media-pipe/content/1.mp4"
        }
      ],
      "buttons": [],
      "textContents": [
        {
          "header": "A) About",
          "text": "Immersive viewing experience for my family photos, built in TouchDesigner using MediaPipe."
        },
        {
          "header": "B) MediaPipe Controls",
          "text": "Two tracked hands drive the interaction: one hand reveals the current image based on the distance between two fingers, and when the angle between the fingers of the other hand exceeds about 45 degrees the index advances to the next image in the sequence."
        },
        {
          "header": "C) Instancing from Table",
          "text": "Images are populated from a DAT table of file paths and instanced across the viewport, with positions and transforms randomized so the archive feels like a living field of photos rather than a static grid."
        },
        {
          "header": "D) Halftone & Transparency",
          "text": "Halftone shaders and layered transparency emulate looking through a camera viewfinder."
        }
      ],
      "colors": [
        "#000000"
      ]
    },
    {
      "name": "lissajous curves",
      "year": 2024,
      "techStackPreview": "*/touchdesigner, python*/",
      "tags": [
        "touchdesigner",
        "math",
        "python",
        "generative art",
        "rendering",
        "3d"
      ],
      "headshot": "/projects/lissajous-curves/headshot-img.avif",
      "headshotGif": "/projects/lissajous-curves/headshot.webp",
      "mediaContents": [
        {
          "type": "video",
          "src": "/projects/lissajous-curves/content/1.mp4"
        },
        {
          "type": "image",
          "src": "/projects/lissajous-curves/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/lissajous-curves/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/lissajous-curves/content/4.avif"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/behance",
          "alt": "Behance",
          "link": "https://www.behance.net/gallery/195409049/-Touch-Designer-lissajous-curves"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "This project is a TouchDesigner application that visualizes <em>Lissajous curves</em> using various bases. Each base (e.g., <code>base31</code>, <code>base51</code>, etc.) renders in a separate window, creating a unique 3x3 grid composition with emissive materials on a red background. The visual design utilizes custom scripts to manage the dynamic parameters of each base and add depth to the visual output."
        },
        {
          "header": "B) Process",
          "text": "<section>\n<h3>1. Setup and Initialization</h3>\n<p>\n    Each base is controlled by an Execute DAT script. The script adjusts parameters such as\n    <code>transform</code> positions and rotation based on the base name. During initialization,\n    the script extracts specific characters from the name of each base to determine its parameters.\n  </p>\n\n<h3>2. Curve Manipulation</h3>\n<p>\n    Inside the <code>onFrameStart()</code> function, variables are set to control each curve's\n    position and rotation. For instance:\n    <pre><code>\n      BaseName = op('..').name\n      Name = list(BaseName)\n      NameLength = len(Name)\n      op('transform1').par.tx = Name[NameLength - 2]\n      op('transform1').par.ty = float(Name[NameLength - 1]) * 1.5\n    </code></pre>\n    These values are dynamically applied, ensuring that each curve has a distinct placement and\n    rotation within the grid.\n  </p>\n\n</section>\n"
        }
      ],
      "colors": [
        "#790B0B"
      ]
    }
  ],
  "archive": [
    {
      "name": "text wave",
      "year": 2024,
      "techStackPreview": "*/react, webgl*/",
      "tags": [
        "react",
        "typescript",
        "react-three-fiber",
        "drei",
        "styled components"
      ],
      "headshot": "/projects/text-wave/headshot-img.avif",
      "headshotGif": "/projects/text-wave/headshot.webp",
      "mediaContents": [
        {
          "type": "video",
          "src": "/projects/text-wave/content/0.mov"
        },
        {
          "type": "video",
          "src": "/projects/text-wave/content/1.mov"
        },
        {
          "type": "video",
          "src": "/projects/text-wave/content/3.mov"
        },
        {
          "type": "video",
          "src": "/projects/text-wave/content/4.mov"
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
          "header": "A) About",
          "text": "Animating text textures for my web apps using React Three Fiber. This project explores dynamic 3D text textures that can either auto-animate or respond to the cursor position, controlling the intensity of the animation in real-time."
        },
        {
          "header": "B) Follows",
          "text": "<ul>\n<li>React Three Fiber for rendering 3D scenes within React</li>\n<li>Drei addons, specifically <code>Plane</code>, for easier creation of textured planes</li>\n<li>Three.js for texture management and geometry manipulation</li>\n<li>Raleway font used for my text samples</li>\n</ul>\n"
        },
        {
          "header": "C) Key Feats",
          "text": "<ul>\n<li><h3>🌊 Wave Animation Based on Cursor</h3> The 3D text texture deforms dynamically based on cursor distance from the top left of the canvas. The animation's intensity scales with the cursor's proximity to the edges, achieved via custom shaders and vertex displacement.</li>\n<li><h3>🔄 Auto-Animation Mode</h3> Enables a continuous, smooth wave effect on the text texture without requiring user interaction. This mode can be toggled, using a parameter to control the animation speed.</li>\n<li><h3>📄 Texture Handling</h3> Efficiently loads and maps textures using <code>THREE.TextureLoader</code>, ensuring optimal aspect ratio scaling on different viewports.</li>\n<li><h3>💻 Real-Time Vertex Displacement</h3> The vertex positions are recalculated every frame to create a wave effect using a combination of sinusoidal functions. For instance:</li>\n<code>const waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\nconst waveY1 = 0.25 * Math.sin(vertex.y * 2.5 + time * 2);\nvertex.z = targetIntensityRef.current * (waveX1 + waveY1);</code>\n</li>\n<li><h3>📐 Responsive Scaling</h3> Automatically adjusts the plane size to maintain texture quality across different screen sizes.</li>\n</ul>\n"
        }
      ],
      "colors": [
        "#01692B",
        "#004392",
        "#F17019"
      ]
    },
    {
      "name": "ghent bikes",
      "year": 2024,
      "techStackPreview": "*/react, next.js, figma*/",
      "tags": [
        "react",
        "typescript",
        "accessibility",
        "next.js",
        "figma",
        "chakra ui",
        "joi",
        "winston",
        "google maps"
      ],
      "headshot": "/projects/ghent-bikes/headshot-img.avif",
      "headshotGif": "/projects/ghent-bikes/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/ghent-bikes/content/1.avif"
        },
        {
          "type": "image",
          "src": "/projects/ghent-bikes/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/ghent-bikes/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/ghent-bikes/content/4.avif"
        }
      ],
      "buttons": [],
      "textContents": [
        {
          "header": "A) About",
          "text": "Web app that surfaces bike and parking stations in Ghent from the city's open data API. Each station shows capacity, live availability, a copyable name, and a Google Maps preview so riders can quickly decide where to park."
        },
        {
          "header": "B) UI & Accessibility",
          "text": "<ul>\n<li>Chakra UI provides semantic building blocks, theming, and responsive breakpoints with minimal custom CSS.</li>\n<li>Hidden helper text (e.g., <code>&lt;p hidden&gt;</code>) describes map previews for screen readers.</li>\n<li><code>as</code> props and rem-based sizing support better semantics and scalable typography.</li>\n<li>Axe is used during development to catch and fix accessibility issues early.</li>\n</ul>\n"
        },
        {
          "header": "C) Problem & Data Source",
          "text": "Using the Stad Gent open data catalog for bikes, I wanted to turn raw datasets into a practical city tool: clear lists of bike stations and parking spots that are easy to scan, compare, and locate on a map."
        },
        {
          "header": "D) Architecture & Validation",
          "text": "<ul>\n<li>Next.js API routes handle fetching and routing, with Joi schemas validating incoming responses from the Ghent endpoints.</li>\n<li>Winston is used for logging validation issues or unexpected data shapes.</li>\n<li>This setup keeps the API layer small and opinionated, ideal for a focused, dataset-driven app.</li>\n</ul>\n"
        },
        {
          "header": "E) Queries & Endpoints",
          "text": "<pre><code>Bike spots\nSELECT name, bikes_in_use, bikes_available, geopoint\nORDER BY name ASC\n\nPark spots\nSELECT name, description, type, categorie, totalcapacity, availablecapacity, occupation, isopennow\nWHERE (availablecapacity / totalcapacity * 100) &gt; 50 AND isopennow = 1\nORDER BY availablecapacity DESC\n</code></pre>\nThese structured queries are used to build the data.stad.gent URLs that power the bikes and parkings views.\n"
        },
        {
          "header": "F) Routing & Data Fetching",
          "text": "<ul>\n<li>/ - landing page with hero and links into the bikes and parkings flows.</li>\n<li>/bikes - shows the four Blue Bikes locations with capacity information.</li>\n<li>/parkings - lists parking spots with at least 50% availability.</li>\n<li>/parkings/[slug] - details view for a single parking, where the slug is generated from the fetched data.</li>\n<li>Most data is fetched client-side to keep it fresh; /parkings uses static generation with revalidation around every minute.</li>\n</ul>\n"
        }
      ],
      "colors": [
        "#0141D5",
        "#42A5F5",
        "#1B5E20"
      ]
    },
    {
      "name": "fullstack authentication",
      "year": 2023,
      "techStackPreview": "*/react, mongodb*/",
      "tags": [
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
      "headshot": "/projects/fullstack-authentication/headshot-img.avif",
      "headshotGif": "/projects/fullstack-authentication/headshot.webp",
      "mediaContents": [
        {
          "type": "image",
          "src": "/projects/fullstack-authentication/content/1.avif"
        },
        {
          "type": "image",
          "src": "/projects/fullstack-authentication/content/2.avif"
        },
        {
          "type": "image",
          "src": "/projects/fullstack-authentication/content/3.avif"
        },
        {
          "type": "image",
          "src": "/projects/fullstack-authentication/content/4.avif"
        },
        {
          "type": "image",
          "src": "/projects/fullstack-authentication/content/5.avif"
        },
        {
          "type": "video",
          "src": "/projects/fullstack-authentication/content/6.mp4"
        },
        {
          "type": "video",
          "src": "/projects/fullstack-authentication/content/7.mp4"
        }
      ],
      "buttons": [
        {
          "imageSrc": "/socials/github",
          "alt": "GitHub",
          "link": "https://github.com/laprinia/opea"
        },
        {
          "imageSrc": "/socials/behance",
          "alt": "Behance",
          "link": "https://www.behance.net/gallery/195410123/-React-fullstack-authentication-with-glassmorphism"
        }
      ],
      "textContents": [
        {
          "header": "A) About",
          "text": "A full-stack authentication app built in React and Node.js, designed as a playground for combining secure auth flows with a glassmorphism-driven visual identity."
        },
        {
          "header": "B) Problem",
          "text": "Most authentication templates are either visually bland or treat the login screen as an afterthought. I wanted to build a full auth flow that felt intentional from the first pixel: secure on the backend, delightful on the frontend."
        },
        {
          "header": "C) What It Solves",
          "text": "<ul>\n<li><h3>🔐 Secure by default</h3> Passwords hashed with BCrypt, sessions managed via JWT, and input validated with Joi on the server before anything touches the database.</li>\n<li><h3>✅ Clear form feedback</h3> Field-level and form-level validation guide users through sign-up and login without guesswork.</li>\n<li><h3>🎨 Personality from the start</h3> Randomized Unsplash backgrounds make every session feel fresh, while glassmorphism keeps the UI readable on any image.</li>\n</ul>\n"
        },
        {
          "header": "D) Recipe",
          "text": "<section>\n  <h3>Frontend:</h3>\n  <ul>\n    <li>Mantine for UI components</li>\n    <li>Radix UI icons</li>\n    <li>Axios for API calls</li>\n    <li>Unsplash API for dynamic backgrounds</li>\n  </ul>\n  <h3>Backend:</h3>\n  <ul>\n    <li>BCrypt for password hashing</li>\n    <li>Mongoose with TypeScript-enforced schemas</li>\n    <li>Joi for input validation</li>\n    <li>JWT for token-based auth</li>\n  </ul>\n</section>\n"
        },
        {
          "header": "E) Glassmorphism",
          "text": "Semi-transparent panels with backdrop blur let the background imagery bleed through while keeping text and inputs fully legible, giving the UI depth without sacrificing usability."
        }
      ],
      "colors": [
        "#FB6009",
        "#2E2623",
        "#ECE3E1",
        "#040406"
      ]
    }
  ]
};
