import type { Copy } from "./types";

export const en: Copy = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "Victor R. Curzio — Full stack developer",
    description:
      "Custom web systems, dashboards, integrations and automation. From the data model to the deploy, with nobody in between. Argentina, working remotely.",
    ogAlt: "Victor R. Curzio, full stack developer",
  },
  nav: {
    work: "Work",
    services: "Services",
    process: "Process",
    about: "About",
    contact: "Get in touch",
    skip: "Skip to content",
    langLabel: "Language",
  },
  hero: {
    status: "Available for new projects",
    titleLead: "Systems companies use",
    titleAccent: "every single day.",
    sub: "Full stack. I design the interface and the infrastructure behind it: from the data model to the deploy, with nobody in between.",
    ctaWork: "See the work",
    ctaTalk: "Get in touch",
    ctaCv: "Download CV",
    terminalTitle: "~/curzio",
  },
  work: {
    title: "Shipped and running",
    sub: "Three real systems, with real users and real money inside.",
    statusLabel: {
      live: "In production",
      shipped: "Delivered",
      building: "In development",
    },
    projects: [
      {
        num: "01",
        name: "Dial Sport",
        year: "2026",
        status: "live",
        blurb:
          "Sports video SaaS: cameras at the venues, players buy their own match video or highlight.",
        detail:
          "Video capture, processing and delivery, Mercado Pago checkout and object storage. Live in production.",
        stack: ["Next.js", "Node", "PostgreSQL", "Cloudflare R2", "Mercado Pago"],
        shot: "player + checkout",
      },
      {
        num: "02",
        name: "Desarrollos Del Sud",
        year: "Jan — Aug 2026",
        status: "shipped",
        blurb: "Land sales in instalments: CRM, collections management and institutional site.",
        detail:
          "Five repositories. I joined in the first weeks, took it to production and shipped it in August 2026, legacy CRM cleanup included.",
        stack: ["React", "Node", "MySQL", "Amazon S3", "5 repos"],
        shot: "CRM + collections",
      },
      {
        num: "03",
        name: "2winGs",
        year: "2026",
        status: "building",
        blurb: "B2B professional network for creative talent, with reputation, levels and curated opportunities.",
        detail:
          "NestJS backend with PostgreSQL and Redis, static front, private files behind short-lived signed links. As developer and tech lead.",
        stack: ["NestJS", "PostgreSQL", "Drizzle", "Redis", "Cloudflare"],
        shot: "B2B feed",
      },
    ],
  },
  services: {
    title: "What I do",
    sub: "I work with small businesses, startups and agencies subcontracting development.",
    items: [
      {
        name: "Custom web systems",
        desc: "Internal tooling built around the real process, not the other way round. Roles, permissions and audit trails.",
      },
      {
        name: "Dashboards & panels",
        desc: "Panels where the state of the business is visible at a glance and usable without training.",
      },
      {
        name: "Integrations & APIs",
        desc: "Payment gateways, third-party services and syncing between systems that never talked to each other.",
      },
      {
        name: "Automation",
        desc: "Everything someone does by hand today and shouldn't: reports, alerts, imports, collections.",
      },
      {
        name: "Landings & sites",
        desc: "Fast, well-designed sites, ready to index and to convert.",
      },
      {
        name: "Mobile apps",
        desc: "Apps sharing backend and business logic with the web system.",
      },
      {
        name: "Maintenance & support",
        desc: "The system stays alive after handoff: deploys, backups, monitoring and improvements.",
      },
    ],
  },
  process: {
    title: "How I work",
    sub: "Four stages, and in every one there is something you can see.",
    steps: [
      {
        name: "Understand",
        time: "Week 1",
        desc: "We go through the real process, not the ideal one. I leave with written scope, a data model and a fixed price.",
      },
      {
        name: "Design",
        time: "Week 1–2",
        desc: "Screens and flows before product code. You see how it will be used before it exists.",
      },
      {
        name: "Build",
        time: "Weekly drops",
        desc: "Progress deployed every week to an environment you can click through. No surprises at the end.",
      },
      {
        name: "Ship & keep it alive",
        time: "Ongoing",
        desc: "Production deploy, documentation, training and an included support window.",
      },
    ],
  },
  stack: {
    title: "What I build it with",
    sub: "What I use today in systems that are running.",
    groups: [
      { name: "Frontend", items: ["React", "Next.js", "Astro", "TypeScript"] },
      { name: "Backend", items: ["Node", "NestJS", "Express", "Python"] },
      { name: "Data", items: ["PostgreSQL", "MySQL", "Drizzle", "Sequelize", "Redis"] },
      { name: "Infra", items: ["Docker", "Amazon S3", "Cloudflare R2", "CI/CD"] },
    ],
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a full stack developer. I hold a dev job and run my own projects end to end, so I'm used to both rhythms: shipping with a team, and shipping alone.",
      "My specialty is internal management systems and SaaS that has to actually work, with real users, real payments and data you cannot lose. That means designing the data model before the screen, and owning the deploy, the backups and the monitoring.",
      "I design too. I don't outsource the interface: if an internal system is painful to use, people go back to the spreadsheet. That's the whole point.",
    ],
    stats: [
      { value: "3", label: "Systems in production" },
      { value: "5", label: "Repos shipped on one project" },
      { value: "1", label: "SaaS taking real payments" },
      { value: "100%", label: "Data model to deploy" },
    ],
  },
  contact: {
    title: "Tell me what you need built.",
    sub: "I reply same day. If the scope is defined, send it over; if it's still an idea, that works too: the first call is for shaping it.",
    fieldName: "Name",
    fieldEmail: "Email",
    fieldMessage: "What you need",
    placeholderMessage: "Tell me about the process you want to fix, or the system you have in mind.",
    submit: "Send message",
    sending: "Sending…",
    sent: "Done. I'll get back to you today.",
    failed: "Could not send. Write to me directly:",
    orWrite: "Or write to me directly:",
  },
  footer: {
    note: "Argentina · Working remotely",
    rights: "All rights reserved.",
  },
};
