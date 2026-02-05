import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Nikita Arhipov — Game Designer",
  author: "EL Beshuele",
  description:
    "Full-cycle Game Developer with expertise in multiple disciplines: UI/UX Design, Game Design, Sound Design (SFX), and 3D Modeling.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nikita Arkhipov",
    specialty: "Game Designer",
    summary:
      "Game developer, of full game cycle. I specialize in many directions: UI/UX, Game Design, SFX, Modeling.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "AIS Gorod",
      position: "UI/UX Design Engineer",
      startDate: "Jan 2021",
      endDate: "Oct 2022",
      summary: [
        "I collaborated with colleagues to design interfaces for various CRM systems. This included developing a comprehensive dashboard for the city manager of Dimitrovgrad.",
        "My responsibilities encompassed creating detailed building and territory plans, designing adaptive icon sets and visual elements, and ensuring a cohesive user interface.",
        "I contributed to the design of specialized system modules for municipal management, including education, housing and utilities (ЖКХ), and document workflow solutions.",
      ],
    },
    {
      company: "UForce",
      position: "Project Manager (Leadgeneration)",
      startDate: "Aug 2024",
      endDate: "Mar 2025",
      summary: [
        "Directed targeted lead generation campaigns from initial brief to execution, employing market research and strategic planning to attract qualified prospects for client projects.",
        "Executed email campaigns, communicated directly with leads through multiple channels, scheduled client meetings, and presented tailored product offerings to drive conversions.",
        "Monitored key performance indicators (KPIs), analyzed campaign data to refine strategies, and provided stakeholders with detailed reports to ensure continuous improvement and ROI maximization.",
      ],
    },
    {
      company: "OldGround Software",
      position: "Game Designer",
      startDate: "Aug 2024",
      endDate: "to this day",
      summary: [
        "Acted as a solo artist and co-designer in a two-person team, directly shaping the game's core identity and contributing to its final 'Very Positive' community rating on Steam.",
        "Created the full visual and auditory pipeline: modeled voxel assets, authored SFX, developed shaders, particles, textures, produced marketing materials (posters, trailer), and implemented all in-game audio.",
        "Co-developed core gameplay ideas, balanced game mechanics, and iterated on systems to enhance player experience and engagement.",
      ],
    },
  ],
  skills: [
    {
      name: "Visual & Art",
      summary:
        "Pixel art animation and tilesets, 3D low-poly modeling (Blender), texturing (Substance Painter), VFX creation in Unity, Shader Graph basics, particle systems.",
      linkPreview: "/",
      linkSource: "#",
      image: "/3Dmodeling.jpg",
    },
    {
      name: "Audio",
      summary:
        "SFX design and implementation, audio mixing for gameplay feedback.",
      linkPreview: "/",
      linkSource: "#",
      image: "/Audacity2.jpg",
    },
    {
      name: "Technical",
      summary: "Basic C# scripting in Unity.",
      linkPreview: "/",
      linkSource: "#",
      image: "/CSharp-in-Unity.jpg",
    },
    {
      name: "Production",
      summary:
        "Task coordination, community feedback management, playtesting, and iterative design based on player data.",
      linkPreview: "/",
      linkSource: "#",
      image: "/Ace Squared Promo2.png",
    },
    {
      name: "Game Development",
      summary:
        "Mechanics design, balancing, full-cycle prototyping, documentation.",
      linkPreview: "/",
      linkSource: "#",
      image: "/Game Development1.jpg",
    },
  ],
  about: {
    description: `
    Hello! I'm Nikita, a versatile game developer who sees the game project as a whole—from the initial idea and game design to final effects and interface. 
    I have gained hands-on experience in full-cycle asset creation (pixel art, 3D modeling, VFX, SFX) and game system design, allowing me not only to execute tasks but also to understand how they impact gameplay and balance. 
    My goal is to join a small indie team or a mobile studio where I can contribute as a Junior Game Designer / Developer or Technical Artist, helping to shape memorable and polished player experiences.`,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
