import type { Copy } from "./types";

export const es: Copy = {
  locale: "es",
  htmlLang: "es-AR",
  meta: {
    title: "Victor R. Curzio — Desarrollador full stack",
    description:
      "Sistemas web a medida, dashboards, integraciones y automatizaciones. Del modelo de datos al deploy, sin intermediarios. Argentina, trabajo remoto.",
    ogAlt: "Victor R. Curzio, desarrollador full stack",
  },
  nav: {
    work: "Trabajo",
    services: "Servicios",
    process: "Proceso",
    about: "Sobre mí",
    contact: "Hablemos",
    skip: "Ir al contenido",
    langLabel: "Idioma",
  },
  hero: {
    status: "Disponible para proyectos nuevos",
    titleLead: "Sistemas que las empresas usan",
    titleAccent: "todos los días.",
    sub: "Full stack. Diseño la interfaz y también la infraestructura que la sostiene: del modelo de datos al deploy, sin intermediarios.",
    ctaWork: "Ver el trabajo",
    ctaTalk: "Hablemos",
    ctaCv: "Descargar CV",
    terminalTitle: "~/curzio",
  },
  work: {
    title: "Hecho y funcionando",
    sub: "Tres sistemas reales, con usuarios y plata de verdad adentro.",
    statusLabel: {
      live: "En producción",
      shipped: "Entregado",
      building: "En desarrollo",
    },
    projects: [
      {
        num: "01",
        name: "Dial Sport",
        year: "2026",
        status: "live",
        blurb:
          "SaaS de venta de videos deportivos: cámaras en los complejos, el jugador compra su video o su highlight.",
        detail:
          "Captura, procesamiento y entrega de video, checkout con Mercado Pago y almacenamiento de objetos. En producción.",
        stack: ["Next.js", "Node", "PostgreSQL", "Cloudflare R2", "Mercado Pago"],
        shot: "player + checkout",
      },
      {
        num: "02",
        name: "Desarrollos Del Sud",
        year: "Ene — Ago 2026",
        status: "shipped",
        blurb: "Venta de lotes en cuotas: CRM, gestión de cobranza y web institucional.",
        detail:
          "Cinco repositorios. Entré en las primeras semanas, lo llevé a producción y se entregó en agosto de 2026, incluido el saneamiento del CRM heredado.",
        stack: ["React", "Node", "MySQL", "Amazon S3", "5 repos"],
        shot: "CRM + cobranzas",
      },
      {
        num: "03",
        name: "2winGs",
        year: "2026",
        status: "building",
        blurb:
          "Red profesional B2B de talento creativo, con reputación, niveles y oportunidades curadas.",
        detail:
          "Backend NestJS con PostgreSQL y Redis, front estático, archivos privados con enlaces firmados de vida corta. Como desarrollador y líder técnico.",
        stack: ["NestJS", "PostgreSQL", "Drizzle", "Redis", "Cloudflare"],
        shot: "feed B2B",
      },
    ],
  },
  services: {
    title: "Qué hago",
    sub: "Trabajo con PyMEs, startups y agencias que subcontratan desarrollo.",
    items: [
      {
        name: "Sistemas web a medida",
        desc: "Gestión interna hecha a la medida del proceso real, no al revés. Roles, permisos y auditoría.",
      },
      {
        name: "Dashboards y paneles",
        desc: "Paneles donde se ve el estado del negocio de un vistazo y se puede operar sin capacitación.",
      },
      {
        name: "Integraciones y APIs",
        desc: "Pasarelas de pago, servicios externos y sincronización entre sistemas que no se hablaban.",
      },
      {
        name: "Automatizaciones",
        desc: "Todo lo que hoy alguien hace a mano y podría no hacer: reportes, avisos, cargas, cobranzas.",
      },
      {
        name: "Landings y sitios",
        desc: "Sitios rápidos y bien diseñados, listos para indexar y para convertir.",
      },
      {
        name: "Apps móviles",
        desc: "Aplicaciones que comparten backend y lógica de negocio con el sistema web.",
      },
      {
        name: "Mantenimiento y soporte",
        desc: "El sistema sigue vivo después de la entrega: deploy, backups, monitoreo y mejoras.",
      },
    ],
  },
  process: {
    title: "Cómo trabajo",
    sub: "Cuatro etapas, y en cada una hay algo que podés ver.",
    steps: [
      {
        name: "Entender",
        time: "Semana 1",
        desc: "Charlamos el proceso real, no el ideal. Salgo con el alcance escrito, el modelo de datos y un precio cerrado.",
      },
      {
        name: "Diseñar",
        time: "Semana 1–2",
        desc: "Pantallas y flujos antes de escribir código de producto. Ves cómo se va a usar antes de que exista.",
      },
      {
        name: "Construir",
        time: "Entregas semanales",
        desc: "Avances desplegados cada semana en un entorno que podés probar. Sin sorpresas al final.",
      },
      {
        name: "Entregar y sostener",
        time: "Continuo",
        desc: "Deploy en producción, documentación, capacitación y un período de soporte incluido.",
      },
    ],
  },
  stack: {
    title: "Con qué lo construyo",
    sub: "Lo que uso hoy en sistemas que están corriendo.",
    groups: [
      { name: "Frontend", items: ["React", "Next.js", "Astro", "TypeScript"] },
      { name: "Backend", items: ["Node", "NestJS", "Express", "Python"] },
      { name: "Datos", items: ["PostgreSQL", "MySQL", "Drizzle", "Sequelize", "Redis"] },
      { name: "Infra", items: ["Docker", "Amazon S3", "Cloudflare R2", "CI/CD"] },
    ],
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy desarrollador full stack. Trabajo en relación de dependencia y además llevo proyectos propios de punta a punta, así que estoy acostumbrado a los dos ritmos: el de un equipo y el de entregar solo.",
      "Mi especialidad son los sistemas internos de gestión y los SaaS que tienen que funcionar de verdad, con usuarios reales, pagos reales y datos que no se pueden perder. Eso significa pensar el modelo de datos antes que la pantalla, y hacerme cargo del deploy, los backups y el monitoreo.",
      "También diseño. No tercerizo la interfaz: si un sistema interno es horrible de usar, la gente vuelve al Excel. Ese es el punto.",
    ],
    stats: [
      { value: "3", label: "Sistemas en producción" },
      { value: "5", label: "Repos entregados en un proyecto" },
      { value: "1", label: "SaaS con pagos reales" },
      { value: "100%", label: "Del dato al deploy" },
    ],
  },
  contact: {
    title: "Contame qué necesitás construir.",
    sub: "Respondo en el día. Si ya tenés el alcance definido, mandalo; si todavía es una idea, también sirve: la primera charla es para ordenarla.",
    fieldName: "Nombre",
    fieldEmail: "Email",
    fieldMessage: "Qué necesitás",
    placeholderMessage: "Contame el proceso que querés resolver, o el sistema que tenés en mente.",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    sent: "Listo. Te respondo en el día.",
    failed: "No se pudo enviar. Escribime directo por email:",
    orWrite: "O escribime directo:",
  },
  footer: {
    note: "Argentina · Trabajo remoto",
    rights: "Todos los derechos reservados.",
  },
};
