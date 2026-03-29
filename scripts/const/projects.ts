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
  // web: Project[];
  // "3d": Project[];
  // playground: Project[];
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
  ]
};
