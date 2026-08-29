// Auto-generated from content/projects/*.yaml
// Media paths (/projects/...) are Cloudinary public IDs (upload with: npm run upload:cloudinary -- public/projects/<slug>).

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
  "ux & branding": Project[];
  "web": Project[];
  "3d": Project[];
  "experimental": Project[];
};

export const projects: ProjectCategories = {
  "ux & branding": [
    {
      "name": "eumar revamp",
      "year": 2026,
      "published": true,
      "description": "Redesign, branding and development of a data-heavy medical web platform for ESHRE.",
      "client": "ESHRE",
      "role": "Product Designer & Frontend Developer",
      "timeline": "6 months",
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
      "roles": [
        "research",
        "ux",
        "data viz",
        "web dev"
      ],
      "headshot": "/projects/eumar-redesign/headshot-img.avif",
      "headshotGif": "/projects/eumar-redesign/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/eumar-redesign/content/1.mp4"
      },
      "links": [
        {
          "label": "EuMAR Platform",
          "url": "https://www.eshre.eu/Data-collection-and-research/EuMAR/EuMAR2",
          "livePreview": false
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>EuMAR is a pan-European platform led by ESHRE and financed by the EU, designed to support fertility clinics by providing a shared record of medically assisted reproduction (MAR) treatments and outcomes. The product connects multiple actors: system admins, national registries, and clinic staff, into one unified system, enforcing strict access control and governance.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Problem",
          "html": "<p>Fertility treatment data across Europe is fragmented across clinics and national systems, with no unified structure for oversight or research. The challenge was to revamp an EU-wide web platform that centralizes data, respects role-based permissions, and remains efficient for daily use.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Presales & Winning the Work",
          "html": "<p>ESHRE already ran a legacy MAR registry, so this was never a blank page.\nWinning the contract meant proving, before anything was signed, that we\nunderstood the product and the challenges they had.</p>\n<p>I led the presales work and built an interactive prototype that redesigned\nthe legacy platform rather than replacing it wholesale.</p>\n<p>Winning the contest on the strength of it was how we secured the contract.</p>\n<p>The showcase below tracks all three stages (Original, Presales, Production) for 3 key screens users use: Login, Dashboard and Patients.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/eumar-redesign/content/5.avif"
            }
          ]
        },
        {
          "header": "Branding Before Development",
          "html": "<p>The identity was reworked before a line of production code was written, so\nthe design system had something settled to build on.</p>\n<ul>\n<li><strong>Typography chosen for legibility</strong> - Raleway was replaced with Work\nSans for headings and Open Sans for body and data, both of which hold up\nat small sizes and in dense tables where the previous face blurred.</li>\n<li><strong>A more suggestive colour system with a neutrals ramp</strong> - a full ramp of\nneutrals carries the interface, and every pairing used for graphs,\nstatuses and text passes WCAG contrast, so data visualisation stays\nreadable rather than decorative.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/eumar-redesign/content/6.avif"
            },
            {
              "type": "image",
              "src": "/projects/eumar-redesign/content/7.avif"
            }
          ]
        },
        {
          "header": "Users & Research",
          "html": "<p>Discovery identified three primary user groups, and interviews clarified\nwhat each one needs from the platform.</p>\n<ul>\n<li><strong>System admins</strong> - onboarding new users and a cross-country overview, viewing data visualisation of\nthe key metrics across every participating registry.</li>\n<li><strong>National registries</strong> - viewing national-level insights and oversight of the\nclinics reporting into them.</li>\n<li><strong>Clinic staff</strong> - registering new patients, entering partial treatment data and viewing detailed patient and treatment records, managed over\nthe full course of a treatment cycle. clinic staff also have their own levels of access.</li>\n</ul>\n<p>Those three lenses on the same dataset drove the role-based structure the\nrest of the product is built on.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/eumar-redesign/content/8.avif"
            }
          ]
        },
        {
          "header": "User Journeys",
          "html": "<p>The prototype emphasizes the system admin journey: the role that enables the entire ecosystem. Key flows include onboarding users, configuring countries and registries, managing centers and viewing key metrics about all centres across EU.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Navigation & Product Structure",
          "html": "<p>The interface is built around a stable application shell with a sidebar, main content area, and account controls. Navigation reflects the system’s hierarchy: users, centers, registries, and reporting. Data-heavy screens use consistent table patterns with search, sorting, pagination, and action columns, making complex datasets easy to scan and manage by all our roles.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Design System",
          "html": "<ul>\n<li>A token-based design system ensures consistency across the platform,\nincluding typography, spacing, and color.</li>\n<li>Semantic tokens give meaning to each design decision and are easy to map\nto real use cases.</li>\n<li>Components such as tables, toolbars, and forms are designed for\nscalability and are previewed along their key states &amp; types.</li>\n<li>Primitives and reusable components are defined in Storybook, being the\nsource-of-truth for the design decisions.</li>\n</ul>",
          "metrics": [],
          "media": [
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
            }
          ]
        },
        {
          "header": "Key Design Decisions",
          "html": "<p>Three roles act on the same clinical records with different rights, and a\ntreatment cycle takes months to complete. Most decisions came down to\nprotecting the integrity of that data without slowing down daily work.</p>\n<ul>\n<li><strong>Role-based editing, not role-based interfaces</strong> - every role gets the\nsame layout and navigation, and permissions scope the actions rather than\nthe screens. System Admins configure the ecosystem but cannot open\ntreatment details or register patients; National Registries oversee their\nclinics without editing patient records. A separate interface per role\nwould have multiplied the surface to maintain and split a mental model\nthat all three groups benefit from sharing.</li>\n<li><strong>Restrictions are shown, not hidden</strong> - where an action is out of scope\nthe UI says so explicitly, and the active role is stated in the left\nsidebar. Silently removing controls reads as a broken product or missing\ndata and turns into support requests; an explained restriction teaches\nthe permission model instead of hiding it.</li>\n<li><strong>Filtering is the primary way to find a record</strong> - GDPR keeps patients\nanonymous, so there are no names to search for and no identifier anyone\ncan recall. Retrieval has to work by narrowing attributes such as country,\ncentre, birth year, cycle and status, which makes sorting and advanced\nfilters core navigation here rather than a power-user extra.</li>\n<li><strong>Partial entry, with validation limited to filled fields</strong> - data arrives\nas the treatment progresses, so a record is rarely complete in one sitting.\nValidating the whole form on submit would block saving a legitimately\nincomplete record and push staff to invent placeholder values, corrupting\nthe dataset the registry exists to protect. Records can be saved, reopened\nand extended, and only entered fields are checked.</li>\n<li><strong>A stepper for patient and treatment entry</strong> - related fields are grouped\ninto steps so an entry interrupted for weeks can be resumed at the right\nplace. One long form gives no sense of position and forces scrolling to\nreach the section that finally has data.</li>\n<li><strong>A collapsible side panel on data-heavy screens</strong> - tables like the\npatient registry need horizontal room, and navigation competes with the\ncontent for it.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/eumar-redesign/content/9.avif"
            },
            {
              "type": "image",
              "src": "/projects/eumar-redesign/content/10.avif"
            },
            {
              "type": "image",
              "src": "/projects/eumar-redesign/content/11.avif"
            }
          ]
        },
        {
          "header": "Results",
          "html": "<p>The platform is live, with onboarding continuing across Europe as more\nnational registries join.</p>",
          "metrics": [
            {
              "value": 6,
              "prefix": "",
              "suffix": "",
              "label": "countries with researchers and clinicians already onboarded"
            },
            {
              "value": "all",
              "prefix": "",
              "suffix": "",
              "label": "European languages supported"
            },
            {
              "value": 50,
              "prefix": "",
              "suffix": "%",
              "label": "faster patient data entry"
            }
          ],
          "media": []
        }
      ]
    },
    {
      "name": "dytto rebrand",
      "year": 2025,
      "published": true,
      "description": "Brand and product refresh for an AI-powered accounting assistant desktop app.",
      "client": "Dytto",
      "role": "Product Designer",
      "timeline": "5 days",
      "tags": [
        "branding",
        "design systems",
        "prototyping",
        "user research",
        "wireframes",
        "interaction design",
        "figma"
      ],
      "roles": [
        "research",
        "branding",
        "micro-interactions"
      ],
      "headshot": "/projects/dytto-rebrand/headshot-img.avif",
      "headshotGif": "/projects/dytto-rebrand/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/dytto-rebrand/content/1.mov"
      },
      "links": [
        {
          "label": "Dytto Website",
          "url": "https://www.dytto.ai/",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>A full rebrand and design system build for Dytto, an AI-powered accounting assistant that intercepts incoming mail, extracts financial data, and handles bookkeeping tasks for you. The project spanned user research, brand exploration, a component-level design system, and an interactive prototype for the desktop app.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Brand Exploration",
          "html": "<p>Using style tiles, we had the client adjust brand sliders (formal vs. warm, affordable vs. premium) to map out the tonal space. After several rounds, we landed on a playful, approachable direction: hand-drawn animation, a warm color palette, and rounded corners that soften the experience without losing professionalism.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/dytto-rebrand/content/9.avif"
            },
            {
              "type": "image",
              "src": "/projects/dytto-rebrand/content/10.avif"
            }
          ]
        },
        {
          "header": "Design System",
          "html": "<p>I extracted a complete design system from the wireframes: tokens for color, typography, spacing, and radius; reusable components for buttons, inputs, cards, modals, and navigation; and documentation to keep the branding consistent as the product grows.</p>",
          "metrics": [],
          "media": [
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
          ]
        },
        {
          "header": "Prototype & Interaction",
          "html": "<p>Using the design system, I built an interactive Figma prototype covering\nlogin, the chat flow and email detail views. The key interaction decisions:</p>\n<ul>\n<li><strong>The pigeon mascot carries the AI&#39;s state</strong> - it animates across idle,\nthinking and waiting, inspired by Notion AI, so the assistant&#39;s status is\nlegible from the mascot alone.</li>\n<li><strong>Glow marks what the AI touched</strong> - incoming email actions and\nAI-processed components are highlighted, separating the assistant&#39;s work\nfrom the user&#39;s own.</li>\n<li><strong>Referenced content pops out inline</strong> - files and customer profiles open\nin place rather than on a new screen, so users never lose their context in\nthe conversation.</li>\n</ul>",
          "metrics": [],
          "media": [
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
            }
          ]
        },
        {
          "header": "Flow & Polish",
          "html": "<p>The focus was on making every transition feel intentional. Chat responses build smoothly, email cards surface the right details at the right moment, and the pigeon&#39;s state changes give users a clear signal of what the AI is doing without relying on loading spinners or text.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/dytto-rebrand/content/8.avif"
            }
          ]
        },
        {
          "header": "Outcome",
          "html": "<p>Delivered as a <strong>full working prototype with micro-interactions</strong>, covering\nlogin, the chat flow and email detail views rather than static screens.</p>\n<p>Following the rebrand, Dytto secured pre-seed funding and is now an actively\ngrowing product. The design system continues to serve as the foundation for\nboth the desktop app and the website.</p>",
          "metrics": [
            {
              "value": 1.5,
              "prefix": "€",
              "suffix": "",
              "label": "million raised in pre-seed funding for product development"
            },
            {
              "value": 5,
              "prefix": "",
              "suffix": "",
              "label": "days from brief to delivery"
            },
            {
              "value": 2,
              "prefix": "",
              "suffix": "",
              "label": "surfaces running the brand system, desktop app and web"
            }
          ],
          "media": []
        }
      ]
    },
    {
      "name": "noc monitoring",
      "year": 2026,
      "published": true,
      "description": "Redesign of an existing NOC platform used to monitor live video transmission units. Touches design systems as much as good visual hierarchy.",
      "client": "Confidential client",
      "role": "Product Designer",
      "timeline": "2 days",
      "tags": [
        "product design",
        "ux strategy",
        "user flows",
        "dashboard design",
        "data visualization",
        "enterprise ux",
        "design systems",
        "prototyping"
      ],
      "roles": [
        "research",
        "ux",
        "ui"
      ],
      "headshot": "/projects/noc-monitoring/headshot-img.avif",
      "headshotGif": "/projects/noc-monitoring/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/noc-monitoring/content/1.mp4"
      },
      "links": [],
      "textContents": [
        {
          "header": "About",
          "html": "<p>A redesign of an existing Network Operations Center (NOC) platform used to monitor live video transmission units. The objective was to improve how operators oversee multiple live streams, detect transmission issues, and respond quickly in high-pressure broadcast environments.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Problem",
          "html": "<p>The existing experience exposed large amounts of operational data but\nlacked a clear information hierarchy, making it harder to identify critical\nissues at a glance. The challenge was balancing <strong>information density with\nfast decision making</strong>, while supporting monitoring of <strong>up to twelve units\nsimultaneously</strong>.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Product Discovery",
          "html": "<p>I defined the primary administrator goal and broke it into three workflows,\nthen mapped how an operator moves from spotting an issue to diagnosing it.</p>\n<ul>\n<li><strong>Overview monitoring</strong> - is anything wrong right now?</li>\n<li><strong>Alert response</strong> - something is wrong; what is it and how urgent?</li>\n<li><strong>Unit investigation</strong> - why is this specific unit failing?</li>\n</ul>\n<p>Sequencing them this way set the feature priority: the overview earns the\nmost screen, alerts interrupt it, and investigation happens in a side panel\nwithout leaving the wall.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/noc-monitoring/content/7.avif"
            }
          ]
        },
        {
          "header": "Research & Design Decisions",
          "html": "<p>I analysed competing monitoring platforms alongside dashboard products such\nas Grafana to identify best practices for real-time operations.</p>\n<ul>\n<li><strong>Glanceability before density</strong> - these tools are read at a distance and\nin peripheral vision, not studied up close.</li>\n<li><strong>Semantic colour, used sparingly</strong> - colour is reserved for state so it\nkeeps its meaning. If everything is coloured, nothing reads as urgent.</li>\n<li><strong>A grid that scales without redesign</strong> - the layout has to hold from one\nunit to twelve.</li>\n<li><strong>Reduced cognitive load for 24/7 use</strong> - operators work long shifts in\nmission-critical conditions, where fatigue is the real failure mode.</li>\n</ul>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Monitoring Multiple Transmissions",
          "html": "<p>Operators watch up to twelve units at once, so the grid has to answer\n&quot;is anything wrong?&quot; before it answers anything else.</p>\n<ul>\n<li><strong>State is readable from across the room</strong> - every unit carries a live\nthumbnail, a semantic status badge and a signal percentage. Failing units\nare outlined in red rather than only labelled, so a fault registers\nwithout being looked for.</li>\n<li><strong>Grid and list views</strong> - the grid suits sweeping all twelve at a glance;\nthe list suits sorting and comparing once something needs investigating.</li>\n<li><strong>Filtering by state</strong> - narrowing to live, idle or error collapses the\nwall to only what needs attention, which matters most mid-incident.</li>\n<li><strong>Search and device-type filters</strong> - for reaching a named unit directly\ninstead of scanning for it.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/noc-monitoring/content/2.avif"
            },
            {
              "type": "image",
              "src": "/projects/noc-monitoring/content/3.avif"
            }
          ]
        },
        {
          "header": "Alert Monitoring",
          "html": "<p>An alert has to interrupt without taking over the screen, since the operator\nmay already be handling a different fault.</p>\n<ul>\n<li><strong>The toast carries the whole diagnosis</strong> - severity, unit, plain-language\ncause and the measured value, so the operator can triage without opening\nanything.</li>\n<li><strong>Two actions, not one</strong> - <em>view</em> jumps to the failing unit, <em>acknowledge</em>\nclears the alert in place. Separating them lets a known issue stop\ncompeting for attention without being forgotten.</li>\n<li><strong>Non-blocking placement</strong> - alerts sit clear of the grid, so monitoring\ncontinues while one is being triaged.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/noc-monitoring/content/4.avif"
            },
            {
              "type": "image",
              "src": "/projects/noc-monitoring/content/5.avif"
            }
          ]
        },
        {
          "header": "Design System",
          "html": "<p>Foundations built for rapid iteration and consistency across a data-heavy\nenterprise interface.</p>\n<ul>\n<li><strong>Colour tokens</strong> with semantic states for live, idle, warning and error.</li>\n<li><strong>Typography and spacing tokens</strong> tuned for dense, tabular data. Using 4px basis in order to fit more content.</li>\n<li><strong>Responsive breakpoints</strong> that keep the unit grid legible as it reflows.</li>\n<li><strong>Reusable components with interactive state variants</strong>, so new screens\ninherit behaviour instead of re-specifying it.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/noc-monitoring/content/6.avif"
            }
          ]
        },
        {
          "header": "Outcome",
          "html": "<p>Delivered as <strong>a fully interactive prototype in Figma Make</strong>. The value was in\nshowing an end-to-end product process, product thinking, user personas, user flows, design\nsystem and high-fidelity prototyping, rather than a purely visual UI pass.</p>",
          "metrics": [
            {
              "value": 3,
              "prefix": "",
              "suffix": "",
              "label": "core operator workflows mapped"
            },
            {
              "value": 2,
              "prefix": "",
              "suffix": "",
              "label": "days from brief to interactive prototype"
            }
          ],
          "media": []
        }
      ]
    },
    {
      "name": "ai playbooks",
      "year": 2026,
      "published": true,
      "description": "Interactive product landing page that highlights micro-interactions using Webflow and GSAP animations.",
      "client": "In The Pocket",
      "role": "Design engineer",
      "timeline": "4 weeks",
      "tags": [
        "micro-interactions",
        "webflow",
        "branding",
        "design engineering",
        "gsap",
        "css",
        "design systems"
      ],
      "roles": [],
      "headshot": "/projects/ai-playbooks/headshot-img.avif",
      "headshotGif": "/projects/ai-playbooks/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/ai-playbooks/content/1.mov"
      },
      "links": [
        {
          "label": "ITP Webpage",
          "url": "https://www.inthepocket.com/ai-playbooks",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>Design engineering work for In The Pocket on AI Playbooks, a dedicated page for their AI maturity consultation practice. The page helps potential clients understand In The Pocket&#39;s AI focus and expertise, and spark a conversation.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Visual System",
          "html": "<p>The page doubles as a showcase of In The Pocket&#39;s new design system, and the\naesthetic direction is what ties its two halves together.</p>\n<ul>\n<li><strong>Motion as the through-line</strong> - the visual language blends movement\ncaptured in photography with the actual motion of the page itself.</li>\n<li><strong>Gradients and a pastel palette</strong> - chosen to communicate curiosity and\nplayfulness, rather than the cold, corporate tone AI content often\ndefaults to.</li>\n</ul>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Scroll-Driven Card Spread",
          "html": "<p>The hero interaction is a card spread that unfolds as the user scrolls, built\nwith scroll-triggered GSAP animations in Webflow. It <strong>turns passive\nscrolling into an act of discovery</strong>, setting the tone for how In The Pocket\napproaches AI.</p>",
          "metrics": [],
          "media": [
            {
              "type": "video",
              "src": "/projects/ai-playbooks/content/2.mov"
            }
          ]
        },
        {
          "header": "Interactive Card System",
          "html": "<p>Tool and event cards respond to hover and pointer movement with a <strong>3D tilt\neffect powered by CSS perspective</strong>, giving the interface a tactile,\ndimensional quality.</p>\n<ul>\n<li><strong>A fixed information order</strong> - every card answers what the tool or event\nis, when it was added, and when it takes place, always in that sequence.</li>\n<li><strong>Scannable in time</strong> - holding that order constant across the set lets\nvisitors orient themselves without reading each card in full.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "video",
              "src": "/projects/ai-playbooks/content/3.mov"
            }
          ]
        },
        {
          "header": "User Research",
          "html": "<p>There was no formal research phase, so the decisions were informed\nindirectly:</p>\n<ul>\n<li><strong>Stakeholder conversations</strong> - surfacing what the practice actually needed\nthe page to communicate.</li>\n<li><strong>Observing comparable pages</strong> - watching how visitors navigate similar\nofferings elsewhere.</li>\n<li><strong>Iterating on comprehension</strong> - repeatedly adjusting what made the\noffering easier to understand at a glance.</li>\n</ul>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Impact",
          "html": "<ul>\n<li><strong>More customers in active AI consultation discussions</strong> - the page moves\nvisitors toward a conversation rather than only explaining the practice.</li>\n<li><strong>A clearer AI roadmap for stakeholders</strong> - the offering became more\ntangible internally, not only for prospective clients.</li>\n<li><strong>A flagship for the new design system</strong> - the first showcase of In The\nPocket&#39;s refreshed system in production.</li>\n</ul>",
          "metrics": [],
          "media": []
        }
      ]
    },
    {
      "name": "personal website ux",
      "year": 2024,
      "published": false,
      "description": "Placeholder description for personal website ux.",
      "client": "",
      "role": "",
      "timeline": "",
      "tags": [
        "ux",
        "interaction design",
        "3d",
        "figma",
        "responsive design",
        "affinity designer"
      ],
      "roles": [],
      "headshot": "/projects/personal-website-ux/headshot-img.avif",
      "headshotGif": "/projects/personal-website-ux/headshot.webp",
      "walkthrough": null,
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/laprinia/laprinia-www",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "Goals",
          "html": "<p>I wanted a portfolio that feels like me, not a template 🙂‍↕️, clear like the layout of an old dictionary, but lightened up with 3D and motion so it stays curious and fun. Easy to explore, and meant to show my work with warmth and a bit of play.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Problem",
          "html": "<p>Most portfolio patterns assume one rhythm: similar tiles, similar areas of work, everything flattened to the same kind of proof. My work doesn’t look that way. Some ideas need motion or a screen recording before they make sense, whereas others need the quiet of a wireframe or a layout study, sometimes I need to show a small bit of logic or interface detail. I needed one place that could hold that range without pretending every project is the same story, and that could stay truthful as the mix of work I take on changes over time.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Process",
          "html": "<p>I approached it like a tiny product: map the journeys (arrive, browse, go deep on one piece), then design for curiosity—moments where you can look closer, move something, or feel pacing change instead of only scrolling. Alongside that, I designed the portfolio’s structure itself: groupings and labels that match how I think about my practice today, with room to rename and shuffle sections tomorrow so the site can grow with my role: not locking me into last year’s categories.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Outcome",
          "html": "<p>What I got is closer to a living introduction than a stiff deck: something I can show almost anyone and they still leave with a felt sense of what I do and how I work, the <em>shape</em> of my process.</p>",
          "metrics": [],
          "media": []
        }
      ]
    },
    {
      "name": "veloura brand guide",
      "year": 2025,
      "published": false,
      "description": "Brading and visual identity for vintage clothing resale app.",
      "client": "",
      "role": "",
      "timeline": "",
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
      "roles": [],
      "headshot": "/projects/veloura-brand-guide/headshot-img.avif",
      "headshotGif": "/projects/veloura-brand-guide/headshot.webp",
      "walkthrough": null,
      "links": [],
      "textContents": [
        {
          "header": "About",
          "html": "<p>Capstone brand identity for VELOURA, created as my final project for Coursera&#39;s Graphic Design Specialization. I wanted to explore how a brand could speak to the new generation and tackle overconsumption, while still feeling playful, mystical, and fashion-forward.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Problem & Intent",
          "html": "<p>I envisioned a brand that felt like a cult favorite, rather than a polished corporate brand, which was something out of my comfort zone. My startup is a brand that sells vintage fashion items, based on tarot card readings, a business started in the dorms by two friends.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Research & Ideation",
          "html": "<p>Through mind mapping, I explored clusters of ideas around ritual, barter, sustaintability, which lead me to a curated aesthetic.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Naming & Positioning",
          "html": "<p>I chose the name VELOURA (velour + aura) to fuse tactile, vintage fashion with the idea of the tarot card readings. The core qualities I aimed for were mystical, hip, and timeless.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Visual Decisions",
          "html": "<p>I pulled from 1960s–80s psychedelia, pop culture, and editorial designs.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Logotype",
          "html": "<p>The VELOURA logotype is set in bold, uppercase psychedelic letterforms to feel iconic and instantly recognizable.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Typography",
          "html": "<p>I paired an expressive display font for headlines with a clean, neutral sans-serif for copy to balance personality with clarity.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Color System",
          "html": "<p>The color system combines saturated, psychedelic primaries with softer supporting tones for imagery, and neutrals for UI.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Imagery",
          "html": "<p>Imagery is treated like modern tarot cards, using high-fashion editorial photos framed with symbols, borders, and layered graphics.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Mockups",
          "html": "<p>I translated the system into store signage, tags, and responsive web mockups to show how VELOURA lives both offline and online.</p>",
          "metrics": [],
          "media": []
        }
      ]
    },
    {
      "name": "mood ring",
      "year": 2024,
      "published": false,
      "description": "Placeholder description for mood ring.",
      "client": "",
      "role": "",
      "timeline": "",
      "tags": [
        "figma",
        "design systems",
        "ui design",
        "prototyping",
        "wireframes",
        "user flows",
        "responsive design"
      ],
      "roles": [],
      "headshot": "/projects/mood-ring/headshot-img.avif",
      "headshotGif": "/projects/mood-ring/headshot.webp",
      "walkthrough": null,
      "links": [],
      "textContents": [
        {
          "header": "About",
          "html": "<p>Capstone project for SuperHi&#39;s User Interface course: a design system and interface for Mood Ring, a journaling app that blends birth chart astrology with color therapy to deliver personalized self-reflection prompts.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Problem & Idea",
          "html": "<p>I wanted to experiment with creating reusable design elements and creating a good structure for my design files.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Design System",
          "html": "<p>I set up a reusable design system in Figma with color tokens, typography scales, spacing, and component variants so that buttons, cards, inputs could be reused and iterated on quickly.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Flows & Prototyping",
          "html": "<p>Wireframes and user flows map how someone moves from logging in to onboarding, then I turned them into interactive prototypes to test navigation, hierarchy, and microinteractions.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Responsive UI",
          "html": "<p>Layouts are designed mobile-first, then adapted to tablet and desktop, focusing on flexible grids and component behavior so the mood journal feels consistent yet tailored across screen sizes.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Color Palette",
          "html": "<p>The palette uses a warm primary coral, a soft neutral secondary, deep near-black, and white to balance emotional intensity with calm, legible UI.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Key Learnings",
          "html": "<p>This project solidified how to structure a design system, design for multiple breakpoints, build reusable variants, and prototype user journeys end to end.</p>",
          "metrics": [],
          "media": []
        }
      ]
    }
  ],
  "web": [
    {
      "name": "kbc bike leasing",
      "year": 2025,
      "published": true,
      "description": "Design and development for KBC's multi-step bike leasing wizard that replaces a manual bank process.",
      "client": "KBC Bank Belgium",
      "role": "Product Designer & Fronted Developer",
      "timeline": "3 months",
      "tags": [
        "design systems",
        "accessibility",
        "ux",
        "react",
        "typescript",
        "figma",
        "radix ui",
        "tailwind css",
        "react hook form",
        "zod"
      ],
      "roles": [
        "ux",
        "accessibility",
        "web dev"
      ],
      "headshot": "/projects/kbc-bike-leasing/headshot-img.avif",
      "headshotGif": "/projects/kbc-bike-leasing/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/kbc-bike-leasing/content/3.mp4"
      },
      "links": [
        {
          "label": "KBC Bike Leasing Simulator",
          "url": "https://leasebikecalculator.kbc.be/",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>A bike leasing price simulator for KBC Bank Belgium. Users walk through a multi-step wizard to estimate their monthly leasing cost based on bike type, marital and salary status, and commute distance, <strong>replacing a process that previously required calling a KBC employee</strong>.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Problem",
          "html": "<p>Calculating bike leasing costs in Belgium depends on salary taxation rules, marital status, and commute details. Before this tool, customers had to call a KBC employee who would run the numbers in a spreadsheet. There was no self-service option.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Design System",
          "html": "<p>The Figma wireframes I inherited were static and didn&#39;t use components, so\nthe first job was turning them into a system that could carry every state the\nflow actually needs.</p>\n<ul>\n<li><strong>Components built as full variant sets</strong> - inputs, buttons, radio groups,\nprogress bars and form states were specified across default, hover, active,\ndisabled, error and filled variants, rather than drawn once in their\nhappy-path state and improvised later.</li>\n<li><strong>Focus states as a first-class variant</strong> - every interactive component\ncarries a visible focus style in the library itself. Specifying it\nalongside hover and active is what stops it from being treated as optional\nand dropped at build time, which is where keyboard accessibility usually\ngets lost.</li>\n<li><strong>Tokens underneath the variants</strong> - KBC brand colours, MuseoSans\ntypography, spacing and radius, so a change propagates through the set\ninstead of being re-specified per component.</li>\n<li><strong>Built twice, in Figma and in React</strong> - each component exists in both, so\nwhat KBC keeps is a working library rather than a picture of one.</li>\n</ul>",
          "metrics": [],
          "media": []
        },
        {
          "header": "User Flow",
          "html": "<p>A four-step wizard guides the user through: selecting bike type and price, entering marital and salary status, adding commute details, and reviewing the calculated monthly cost. Each step validates input before progressing, and the progress bar gives a clear sense of where you are and how much is left.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/kbc-bike-leasing/content/1.avif"
            }
          ]
        },
        {
          "header": "Accessibility & Interaction",
          "html": "<p>Built on Radix UI primitives for keyboard navigation, focus management, and screen reader support out of the box. Microanimations on step transitions and the progress bar make the flow feel responsive without distracting from the task.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Challenge",
          "html": "<p>The core complexity was modelling Belgian salary taxation correctly. A quote\nis only useful if it matches what a KBC employee would have calculated by\nhand.</p>\n<ul>\n<li><strong>Gross-to-net shifts with marital status</strong> - the same gross salary\nproduces a different net figure depending on the household situation\ndeclared.</li>\n<li><strong>Tax brackets change the slope</strong> - the saving from leasing does not scale\nlinearly with salary, so the result cannot be approximated.</li>\n<li><strong>Employer contributions feed the outcome</strong> - the monthly cost depends on\nwhat the employer carries, not only on what the employee earns.</li>\n</ul>\n<p>Getting this wrong would have been worse than shipping nothing: the simulator\nreplaces an expert calculation, so a plausible-looking wrong number carries\nmore risk than a phone call did.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/kbc-bike-leasing/content/2.avif"
            }
          ]
        },
        {
          "header": "Impact",
          "html": "<p>Customers now estimate their bike leasing cost independently, and the React\ncomponent library built alongside the product serves as a reusable foundation\nfor future KBC web projects.</p>",
          "metrics": [
            {
              "value": 0,
              "prefix": "",
              "suffix": "",
              "label": "calls to a KBC employee needed to get a quote"
            },
            {
              "value": 30,
              "prefix": "",
              "suffix": "%",
              "label": "faster to complete than the manual process"
            },
            {
              "value": "full",
              "prefix": "",
              "suffix": "",
              "label": "keyboard and screen reader accessibility"
            }
          ],
          "media": []
        }
      ]
    },
    {
      "name": "tectonic",
      "year": 2025,
      "published": true,
      "description": "Design of a flexible timeline component for a major Belgian tech conference.",
      "client": "In The Pocket",
      "role": "Design engineer",
      "timeline": "6 weeks",
      "tags": [
        "webflow",
        "figma",
        "design engineering",
        "design",
        "glassmorphism"
      ],
      "roles": [],
      "headshot": "/projects/tectonic/headshot-img.avif",
      "headshotGif": "/projects/tectonic/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/tectonic/content/2.mp4"
      },
      "links": [
        {
          "label": "Tectonic Website",
          "url": "https://www.tectonicconf.eu/program",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>Design engineering work for In The Pocket on Tectonic, a major Belgian tech conference where industry experts share talks and panels.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Role & Collaboration",
          "html": "<p>As a Design Engineer, I collaborated with volunteers from Nexent and In The Pocket engineers to help bring the Webflow site to life, including key program and schedule sections.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Program Timeline",
          "html": "<p>Using data from the Webflow CMS, I designed and styled a flexible timeline component that can display multiple days and events across different stages, each on its own swimlane.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "User Research",
          "html": "<p>Decisions were shaped by the organizing team&#39;s real pain points, frequent schedule changes, multi-stage layouts, and the need to update content on the fly during the event itself. I also studied how attendees navigate a conference: needing to see which events run in parallel across stages, filtering by stage to narrow their view, and opening a details modal to get the full picture without leaving the schedule page.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Impact",
          "html": "<p>The component streamlined adding and updating events, crucial for a live conference where times and sessions change frequently, and the result was a huge success for the organizing team.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Visual Direction",
          "html": "<p>I followed Tectonic&#39;s futurist typography and color system, and introduced subtle glass-like effects on buttons and event cards to give the interface a polished, tech-forward feel.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/tectonic/content/1.avif"
            }
          ]
        }
      ]
    },
    {
      "name": "engie chatgpt widget",
      "year": 2026,
      "published": true,
      "description": "Interactive data visualisation widget built for Engie, following their branding system. A ChatGPT-embedded experience.",
      "client": "Engie",
      "role": "Product Designer & Frontend Developer",
      "timeline": "2 weeks",
      "tags": [
        "branding",
        "data visualization",
        "chatgpt apps sdk",
        "react",
        "mcp",
        "node.js",
        "design systems"
      ],
      "roles": [
        "ux",
        "design systems",
        "branding",
        "ai"
      ],
      "headshot": "/projects/engie-chatgpt-widget/headshot-img.avif",
      "headshotGif": "/projects/engie-chatgpt-widget/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/engie-chatgpt-widget/content/2.mp4"
      },
      "links": [],
      "textContents": [
        {
          "header": "About",
          "html": "<p>A ChatGPT-embedded experience for Engie that gives customers clear, interactive visualizations of their energy consumption and contract, suggests realistic advance payments, and flags whether they&#39;ll pay more or less than expected, all through a conversational interface powered by a custom MCP server.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Problem",
          "html": "<p>Engie customers struggle to understand their energy usage patterns, whether\ntheir advance payment is set correctly, and what they can do to optimise\ncosts. The information already exists, but it is <strong>spread across multiple\nscreens and needs manual interpretation</strong>, which is what makes it hard to\nact on.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "User Flow",
          "html": "<p>A customer opens ChatGPT with the Engie app context, asks about their households, and immediately sees their data. They can request a consumption graph, filter it by date range, hover for details, and prompt the agent directly from the widget to analyze trends or suggest optimizations. For advance payments, the agent compares past usage against the contract and recommends an adjusted amount, flagging overpayment or underpayment before the next billing cycle.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Features",
          "html": "<ul>\n<li><strong>Interactive consumption graph</strong> - filtering by month and hover detail,\nso a usage pattern can be read rather than reported.</li>\n<li><strong>Two-way prompting</strong> - the user can ask ChatGPT to analyse the data from\ninside the widget, so the question and the chart stay in one place instead\nof the conversation restarting around them.</li>\n<li><strong>Advance payment tools</strong> - view, edit, and get AI-suggested values derived\nfrom actual consumption rather than a flat estimate.</li>\n<li><strong>Household management</strong> - view, update and delete records, <strong>all written\nthrough to the real database</strong>, so the widget is a working client and not\na mock.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "video",
              "src": "/projects/engie-chatgpt-widget/content/3.mp4"
            },
            {
              "type": "video",
              "src": "/projects/engie-chatgpt-widget/content/4.mp4"
            }
          ]
        },
        {
          "header": "Design Approach",
          "html": "<p>The hard part was belonging to two design languages at once: the widget has\nto read as Engie while sitting natively inside someone else&#39;s product.</p>\n<ul>\n<li><strong>Engie&#39;s design system carried over</strong> - colours, typography and spacing\nstay on-brand, so customers recognise who they are dealing with even\noutside an Engie surface.</li>\n<li><strong>Built for a constrained viewport</strong> - ChatGPT offers a narrow column\nbeside chat bubbles, not a dashboard, so the layout was designed to that\nlimit rather than scaled down into it.</li>\n<li><strong>Minimal chrome, clear data hierarchy</strong> - the visualisation has to be\nlegible at a glance, because every second spent decoding it is a second\nspent out of the conversation.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/engie-chatgpt-widget/content/1.avif"
            }
          ]
        },
        {
          "header": "Impact",
          "html": "<p>The work began as my own initiative rather than an assigned brief, and that\nis what it turned into:</p>\n<ul>\n<li><strong>Invited onto the Engie engagement</strong> - I jumpstarted the exploration\nmyself, and that initiative is what brought me onto the work.</li>\n<li><strong>Invited to present to Engie&#39;s board</strong> - after the internal demo the\nproject went in front of leadership, rather than staying a side experiment.</li>\n<li><strong>Talks on the process, inside and out</strong> - I gave in-depth sessions on how\nthe work was approached, both at Engie and internally at my own company.</li>\n<li><strong>First to explore the ChatGPT Apps SDK</strong> - the first in the company to\nbuild on it, which is what made the exploration possible before there was\na brief asking for it.</li>\n</ul>\n<p>The exploration is now being considered for a production implementation as a\nnew customer-facing channel.</p>",
          "metrics": [],
          "media": []
        }
      ]
    },
    {
      "name": "web 3d terrain generator",
      "year": 2022,
      "published": true,
      "description": "Web 3D random terrain generator and tweaker using React Three Fiber.",
      "client": "Self-initiated",
      "role": "Creative developer",
      "timeline": "3 weeks",
      "tags": [
        "react",
        "typescript",
        "react-three-fiber",
        "drei",
        "mantine",
        "glsl-noise"
      ],
      "roles": [],
      "headshot": "/projects/web-terrain-visualizer/headshot-img.avif",
      "headshotGif": "/projects/web-terrain-visualizer/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/web-terrain-visualizer/content/intro.mp4"
      },
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/laprinia/phea",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>A browser-based 3D terrain editor that lets you sculpt, tweak, and visualize procedural landscapes in real time, bringing the creative loop of 3D generation directly into the web.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Recipe",
          "html": "<ul>\n<li>React Three Fiber as a React renderer for Three.js</li>\n<li>Drei addons for camera, lighting, and helpers</li>\n<li>GLSL Noise for Simplex noise generation</li>\n<li>Mantine for the editor UI</li>\n</ul>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Real-Time Feedback Loop",
          "html": "<p>Every parameter change, noise scale, octaves, terracing, instantly regenerates the terrain, so the creative process feels like direct manipulation rather than a build-and-wait cycle.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/web-terrain-visualizer/content/1.avif"
            },
            {
              "type": "image",
              "src": "/projects/web-terrain-visualizer/content/2.avif"
            }
          ]
        },
        {
          "header": "Layered Control",
          "html": "<ul>\n<li><h3>Shape</h3> Marching cubes turn a volume of density values into a visible mesh, giving full control over how terrain surfaces emerge.</li>\n<li><h3>Noise</h3> Simplex noise drives height variation with tunable octaves, persistence, and detail, small tweaks produce dramatically different landscapes.</li>\n<li><h3>Terracing</h3> Clamping height into discrete levels carves plateaus and cliff faces, adding structure to organic forms.</li>\n<li><h3>Color Mapping</h3> A gradient texture maps elevation to color, so visual identity shifts as the terrain evolves.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/web-terrain-visualizer/content/3.avif"
            },
            {
              "type": "image",
              "src": "/projects/web-terrain-visualizer/content/4.avif"
            }
          ]
        },
        {
          "header": "Visual Polish",
          "html": "<ul>\n<li><h3>Smoothing</h3> Softens the low-poly facets into a more organic surface without losing the procedural character.</li>\n<li><h3>Post-Processing</h3> Tilt-shift, bloom, noise grain, and brightness/contrast turn the raw mesh into something that feels cinematic.</li>\n<li><h3>Ambient Motion</h3> A gentle float and slow rotation keep the terrain alive even when idle, inviting exploration.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/web-terrain-visualizer/content/5.avif"
            },
            {
              "type": "image",
              "src": "/projects/web-terrain-visualizer/content/6.avif"
            }
          ]
        },
        {
          "header": "Editor UI",
          "html": "<p>The control panel exposes every generation parameter in a clear, grouped layout, gradient, marching cubes, so users can experiment freely.</p>",
          "metrics": [],
          "media": [
            {
              "type": "video",
              "src": "/projects/web-terrain-visualizer/content/outro.mp4"
            }
          ]
        }
      ]
    }
  ],
  "3d": [
    {
      "name": "ray tracer",
      "year": 2022,
      "published": true,
      "description": "OpenGL real-time ray tracer using Compute Shaders, touching post-processing.",
      "client": "Self-initiated",
      "role": "Creative developer",
      "timeline": "4 weeks",
      "tags": [
        "opengl",
        "c++",
        "shaders",
        "imgui",
        "post processing",
        "sphere ray tracing",
        "various materials"
      ],
      "roles": [],
      "headshot": "/projects/ray-tracer/headshot-img.avif",
      "headshotGif": "/projects/ray-tracer/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/ray-tracer/content/13.mp4"
      },
      "links": [
        {
          "label": "Behance",
          "url": "https://www.behance.net/gallery/161536343/-OpenGL-real-time-ray-tracer",
          "livePreview": true
        },
        {
          "label": "GitHub",
          "url": "https://github.com/laprinia/hyzu",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>OpenGL real-time ray tracer using Compute Shaders. Based on the &quot;Ray Tracing in One Weekend series&quot;.</p>",
          "metrics": [],
          "media": [
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
            }
          ]
        },
        {
          "header": "Process",
          "html": "<section>\n<h3>1. Matte Materials</h3>\n<p>\n    The process is simple: normalizing the y coordinate and interpolating between two colors.\n    Checking if the rays hit the sphere and displaying the color. The resulting color is computed\n    by picking a random point inside a unit radius sphere, whose normal starts from the initial ray hit point.\n    This is done recursively until a ray doesn't hit anything or a maximum depth is reached.\n  </p>\n\n<h3>2. Metallic Surfaces</h3>\n<p>\n    For metallic surfaces, rays aren't randomly scattered. Luckily, GLSL has the \n    <code>reflect()</code> function, which returns the reflected ray. Randomizing the reflected\n    ray by choosing a random endpoint, as we did for the matte surface, gives rough (fuzzy) surfaces.\n  </p>\n\n<h3>3. Dielectric Surfaces</h3>\n<p>\n    A ray is split into both a reflected one and a refracted one. Assuming that all rays are \n    only refracted results in one outcome. Using Schlick's polynomial approximation, we can \n    determine if rays must be reflected instead of refracted, producing the final result.\n  </p>\n\n<h3>4. Cornell Box</h3>\n<p>\n    Adding a Cornell Box introduces more complexity into the scene. To make things more \n    realistic, emissive materials are added for ceiling lights and spheres. Rays hitting \n    an emissive surface won't scatter, so they retain their true albedo color output.\n  </p>\n\n<h3>5. Post-Processing</h3>\n<p>\n    On the post-processing layer, HDR is applied, making the emissive material stand out more. \n    Bloom is also added, which renders lights as blurred (using Gaussian Blur) and adds the \n    result on top of the base color.\n  </p>\n</section>",
          "metrics": [],
          "media": [
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
            }
          ]
        }
      ]
    },
    {
      "name": "volumetric light",
      "year": 2021,
      "published": true,
      "description": "OpenGL volumetric light scenic implementation.",
      "client": "Self-initiated",
      "role": "Creative developer",
      "timeline": "2 weeks",
      "tags": [
        "opengl",
        "c++",
        "shaders",
        "imgui",
        "post processing",
        "scene rendering"
      ],
      "roles": [],
      "headshot": "/projects/volumetric-light/headshot-img.avif",
      "headshotGif": "/projects/volumetric-light/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/volumetric-light/content/2.mp4"
      },
      "links": [
        {
          "label": "Behance",
          "url": "https://www.behance.net/gallery/162428687/-OpenGL-volumetric-light-study",
          "livePreview": true
        },
        {
          "label": "GitHub",
          "url": "https://github.com/laprinia/mozu/tree/main",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>An OpenGL exploration of how light behaves in a 3D space, from basic surface shading all the way to volumetric god rays.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Lighting Layers",
          "html": "<ul>\n<li><h3>Surface Shading</h3> Blinn-Phong reflectance with normal mapping gives every surface believable highlights and depth, even on flat geometry.</li>\n<li><h3>Mixed Light Sources</h3> Directional, point, and spotlights each contribute differently, ambient fill, localized warmth near the pool, and focused beams from side lamps,creating a layered atmosphere.</li>\n<li><h3>Shadows</h3> A depth pass from the light's perspective produces shadow maps that ground objects in the scene and add contrast.</li>\n<li><h3>Volumetric Rays</h3> Ray marching through an occlusion texture produces visible light shafts, turning the lighting from a surface property into something you can see in the air.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/volumetric-light/content/1.avif"
            }
          ]
        },
        {
          "header": "Building Up",
          "html": "<p>The scene evolved in stages, starting with a single directional light and flat shading, then layering in normal maps for surface detail, gamma correction and HDR to fix color accuracy, shadow mapping for spatial grounding, and finally volumetric rays as the visual payoff. Each step visibly improved the mood.</p>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/volumetric-light/content/3.avif"
            },
            {
              "type": "image",
              "src": "/projects/volumetric-light/content/4.avif"
            }
          ]
        },
        {
          "header": "Visual Polish",
          "html": "<ul>\n<li>HDR and Gamma Correction for accurate, rich color</li>\n<li>Film grain for texture and warmth</li>\n<li>Anti-aliasing and depth testing for clean geometry</li>\n<li>Skybox for environmental context</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "image",
              "src": "/projects/volumetric-light/content/5.avif"
            }
          ]
        }
      ]
    }
  ],
  "experimental": [
    {
      "name": "media pipe",
      "year": 2025,
      "published": true,
      "description": "Placeholder description for media pipe.",
      "client": "Self-initiated",
      "role": "Creative developer",
      "timeline": "1 week",
      "tags": [
        "touchdesigner",
        "mediapipe",
        "instancing",
        "image processing"
      ],
      "roles": [],
      "headshot": "/projects/media-pipe/headshot-img.avif",
      "headshotGif": "/projects/media-pipe/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/media-pipe/content/1.mp4"
      },
      "links": [],
      "textContents": [
        {
          "header": "About",
          "html": "<p>Immersive viewing experience for my family photos, built in TouchDesigner using MediaPipe.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "MediaPipe Controls",
          "html": "<p>Two tracked hands drive the interaction: one hand reveals the current image based on the distance between two fingers, and when the angle between the fingers of the other hand exceeds about 45 degrees the index advances to the next image in the sequence.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Instancing from Table",
          "html": "<p>Images are populated from a DAT table of file paths and instanced across the viewport, with positions and transforms randomized so the archive feels like a living field of photos rather than a static grid.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Halftone & Transparency",
          "html": "<p>Halftone shaders and layered transparency emulate looking through a camera viewfinder.</p>",
          "metrics": [],
          "media": []
        }
      ]
    },
    {
      "name": "text wave",
      "year": 2024,
      "published": true,
      "description": "3D texture animation exploration using React Three Fiber.",
      "client": "Self-initiated",
      "role": "Creative developer",
      "timeline": "1 week",
      "tags": [
        "react",
        "typescript",
        "react-three-fiber",
        "drei",
        "styled components"
      ],
      "roles": [],
      "headshot": "/projects/text-wave/headshot-img.avif",
      "headshotGif": "/projects/text-wave/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/text-wave/content/0.mov"
      },
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/laprinia/laprinia-www",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>Animating text textures for my web apps using React Three Fiber. This project explores dynamic 3D text textures that can either auto-animate or respond to the cursor position, controlling the intensity of the animation in real-time.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Follows",
          "html": "<ul>\n<li>React Three Fiber for rendering 3D scenes within React</li>\n<li>Drei addons, specifically <code>Plane</code>, for easier creation of textured planes</li>\n<li>Three.js for texture management and geometry manipulation</li>\n<li>Raleway font used for my text samples</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "video",
              "src": "/projects/text-wave/content/1.mov"
            }
          ]
        },
        {
          "header": "Key Feats",
          "html": "<ul>\n<li><h3>Wave Animation Based on Cursor</h3> The 3D text texture deforms dynamically based on cursor distance from the top left of the canvas. The animation's intensity scales with the cursor's proximity to the edges, achieved via custom shaders and vertex displacement.</li>\n<li><h3>Auto-Animation Mode</h3> Enables a continuous, smooth wave effect on the text texture without requiring user interaction. This mode can be toggled, using a parameter to control the animation speed.</li>\n<li><h3>Texture Handling</h3> Efficiently loads and maps textures using <code>THREE.TextureLoader</code>, ensuring optimal aspect ratio scaling on different viewports.</li>\n<li><h3>Real-Time Vertex Displacement</h3> The vertex positions are recalculated every frame to create a wave effect using a combination of sinusoidal functions. For instance:</li>\n<code>const waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\nconst waveY1 = 0.25 * Math.sin(vertex.y * 2.5 + time * 2);\nvertex.z = targetIntensityRef.current * (waveX1 + waveY1);</code>\n</li>\n<li><h3>Responsive Scaling</h3> Automatically adjusts the plane size to maintain texture quality across different screen sizes.</li>\n</ul>",
          "metrics": [],
          "media": [
            {
              "type": "video",
              "src": "/projects/text-wave/content/3.mov"
            },
            {
              "type": "video",
              "src": "/projects/text-wave/content/4.mov"
            }
          ]
        }
      ]
    },
    {
      "name": "lissajous curves",
      "year": 2024,
      "published": true,
      "description": "Placeholder description for lissajous curves.",
      "client": "Self-initiated",
      "role": "Creative developer",
      "timeline": "1 week",
      "tags": [
        "touchdesigner",
        "math",
        "python",
        "generative art",
        "rendering",
        "3d"
      ],
      "roles": [],
      "headshot": "/projects/lissajous-curves/headshot-img.avif",
      "headshotGif": "/projects/lissajous-curves/headshot.webp",
      "walkthrough": {
        "type": "video",
        "src": "/projects/lissajous-curves/content/1.mp4"
      },
      "links": [
        {
          "label": "Behance",
          "url": "https://www.behance.net/gallery/195409049/-Touch-Designer-lissajous-curves",
          "livePreview": true
        }
      ],
      "textContents": [
        {
          "header": "About",
          "html": "<p>This project is a TouchDesigner application that visualizes <em>Lissajous curves</em> using various bases. Each base (e.g., <code>base31</code>, <code>base51</code>, etc.) renders in a separate window, creating a unique 3x3 grid composition with emissive materials on a red background. The visual design utilizes custom scripts to manage the dynamic parameters of each base and add depth to the visual output.</p>",
          "metrics": [],
          "media": []
        },
        {
          "header": "Process",
          "html": "<section>\n<h3>1. Setup and Initialization</h3>\n<p>\n    Each base is controlled by an Execute DAT script. The script adjusts parameters such as\n    <code>transform</code> positions and rotation based on the base name. During initialization,\n    the script extracts specific characters from the name of each base to determine its parameters.\n  </p>\n\n<h3>2. Curve Manipulation</h3>\n<p>\n    Inside the <code>onFrameStart()</code> function, variables are set to control each curve's\n    position and rotation. For instance:\n    <pre><code>\n      BaseName = op('..').name\n      Name = list(BaseName)\n      NameLength = len(Name)\n      op('transform1').par.tx = Name[NameLength - 2]\n      op('transform1').par.ty = float(Name[NameLength - 1]) * 1.5\n    </code></pre>\n    These values are dynamically applied, ensuring that each curve has a distinct placement and\n    rotation within the grid.\n  </p>\n\n</section>",
          "metrics": [],
          "media": [
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
          ]
        }
      ]
    }
  ]
};
