export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const site = {
  url: "https://joaovitorscr.com",
  name: "João Vitor",
  handle: "joaovitorscr",
  avatar: "https://github.com/joaovitorscr.png",
  email: null as string | null,
  links: {
    github: "https://www.github.com/joaovitorscr",
    linkedin: "https://www.linkedin.com/in/joaovitorscr/",
    calendar: "https://cal.com/joaovitorscr",
  },
};

export const skills = {
  frontend: ["React", "Next.js", "Astro", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "SASS", "tRPC"],
  tools: ["Git", "Figma", "REST APIs", "Responsive Design", "Performance"],
};

export const projects = [
  {
    title: "Testimony.io",
    year: "2025",
    technologies: ["Next.js", "React", "TypeScript", "tRPC", "PostgreSQL", "Tailwind"],
    liveUrl: "https://testimony.io.joaovitorscr.com",
    repositoryUrl: "https://github.com/joaovitorscr/testimony.io",
  },
];

const en = {
  meta: {
    title: "João Vitor — Frontend Developer",
    description:
      "João Vitor is a frontend developer building fast, considered web interfaces with React, Next.js and TypeScript.",
  },
  nav: { work: "Work", experience: "Experience", toolkit: "Toolkit", contact: "Contact" },
  role: "Frontend Developer",
  hero: {
    body: "I build fast, accessible web interfaces with React, TypeScript and modern CSS. Most of my attention goes to spacing, timing and the states people only notice when they're wrong.",
    cta: "Book a call",
  },
  sections: {
    work: "Selected work",
    experience: "Experience",
    toolkit: "Toolkit",
    contact: "Contact",
  },
  projects: [
    {
      type: "Personal project",
      description:
        "A tool for companies to collect customer testimonials, pick the best ones and embed them on their own site.",
    },
  ],
  live: "Live site",
  repo: "Source",
  experience: [
    {
      title: "Frontend Developer",
      company: "Anexs Tecnologia",
      period: "2025–now",
      description:
        "Building responsive websites and web applications for a range of clients, with a focus on React, TypeScript and modern CSS.",
    },
    {
      title: "Trainee",
      company: "Anexs Tecnologia",
      period: "2024–2025",
      description:
        "Shipped frontend features alongside the backend team while learning the craft of production web development.",
    },
  ],
  toolkit: { frontend: "Frontend", tools: "Tools & practice" },
  contact: {
    title: "Have something in mind?",
    body: "I'm always up for a conversation about products, interfaces or a project that needs a careful frontend.",
    cta: "Schedule a meeting",
  },
  footer: "Built with Astro.",
};

type Dict = typeof en;

const pt: Dict = {
  meta: {
    title: "João Vitor — Desenvolvedor Frontend",
    description:
      "João Vitor é desenvolvedor frontend e constrói interfaces web rápidas e bem pensadas com React, Next.js e TypeScript.",
  },
  nav: { work: "Projetos", experience: "Experiência", toolkit: "Ferramentas", contact: "Contato" },
  role: "Desenvolvedor Frontend",
  hero: {
    body: "Construo interfaces web rápidas e acessíveis com React, TypeScript e CSS moderno. Presto atenção no espaçamento, no tempo das animações e nos estados que só se nota quando estão errados.",
    cta: "Agendar conversa",
  },
  sections: {
    work: "Projetos selecionados",
    experience: "Experiência",
    toolkit: "Ferramentas",
    contact: "Contato",
  },
  projects: [
    {
      type: "Projeto pessoal",
      description:
        "Uma ferramenta para empresas coletarem depoimentos de clientes, escolherem os melhores e exibirem no próprio site.",
    },
  ],
  live: "Ver site",
  repo: "Código",
  experience: [
    {
      title: "Desenvolvedor Frontend",
      company: "Anexs Tecnologia",
      period: "2025–atual",
      description:
        "Construo sites e aplicações web responsivas para diversos clientes, com foco em React, TypeScript e CSS moderno.",
    },
    {
      title: "Estagiário",
      company: "Anexs Tecnologia",
      period: "2024–2025",
      description:
        "Entreguei funcionalidades de frontend junto ao time de backend enquanto aprendia o ofício do desenvolvimento web em produção.",
    },
  ],
  toolkit: { frontend: "Frontend", tools: "Ferramentas & prática" },
  contact: {
    title: "Tem algo em mente?",
    body: "Estou sempre aberto a conversar sobre produtos, interfaces ou um projeto que precise de um frontend cuidadoso.",
    cta: "Agendar reunião",
  },
  footer: "Feito com Astro.",
};

const es: Dict = {
  meta: {
    title: "João Vitor — Desarrollador Frontend",
    description:
      "João Vitor es desarrollador frontend y crea interfaces web rápidas y cuidadas con React, Next.js y TypeScript.",
  },
  nav: { work: "Proyectos", experience: "Experiencia", toolkit: "Herramientas", contact: "Contacto" },
  role: "Desarrollador Frontend",
  hero: {
    body: "Construyo interfaces web rápidas y accesibles con React, TypeScript y CSS moderno. Me fijo en el espaciado, el ritmo de las animaciones y los estados que solo se notan cuando fallan.",
    cta: "Agendar llamada",
  },
  sections: {
    work: "Proyectos seleccionados",
    experience: "Experiencia",
    toolkit: "Herramientas",
    contact: "Contacto",
  },
  projects: [
    {
      type: "Proyecto personal",
      description:
        "Una herramienta para que las empresas recopilen testimonios de clientes, elijan los mejores y los muestren en su propio sitio.",
    },
  ],
  live: "Ver sitio",
  repo: "Código",
  experience: [
    {
      title: "Desarrollador Frontend",
      company: "Anexs Tecnologia",
      period: "2025–actualidad",
      description:
        "Desarrollo sitios y aplicaciones web responsivas para diversos clientes, con foco en React, TypeScript y CSS moderno.",
    },
    {
      title: "Practicante",
      company: "Anexs Tecnologia",
      period: "2024–2025",
      description:
        "Entregué funcionalidades de frontend junto al equipo de backend mientras aprendía el oficio del desarrollo web en producción.",
    },
  ],
  toolkit: { frontend: "Frontend", tools: "Herramientas y práctica" },
  contact: {
    title: "¿Tienes algo en mente?",
    body: "Siempre estoy dispuesto a conversar sobre productos, interfaces o un proyecto que necesite un frontend cuidadoso.",
    cta: "Agendar reunión",
  },
  footer: "Hecho con Astro.",
};

export const dictionaries: Record<Locale, Dict> = { en, pt, es };
