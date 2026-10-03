/**
 * La forma de todo el texto y todos los datos del sitio.
 *
 * Es lo que hace que agregar un idioma no pueda quedar a medias: si `en.ts`
 * no tiene una clave que `es.ts` tiene, no compila. Los textos viven fuera
 * del codigo desde el primer commit (Templates/Project-Kickoff, seccion 2).
 */

/** Estado de un caso. Semantico y fijo: define el color del chip. */
export type ProjectStatus = "live" | "shipped" | "building";

export interface Project {
  /** Numero de orden mostrado, "01".."NN". */
  num: string;
  name: string;
  year: string;
  status: ProjectStatus;
  /** Una linea: que es. */
  blurb: string;
  /** Dos lineas: como esta resuelto y donde esta hoy. */
  detail: string;
  stack: string[];
  /** Texto del hueco de captura, hasta que haya capturas reales. */
  shot: string;
}

export interface Service {
  name: string;
  desc: string;
}

export interface Step {
  name: string;
  /** Cuando pasa: "Semana 1", "Entregas semanales". */
  time: string;
  desc: string;
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Copy {
  locale: "es" | "en";
  /** Codigo BCP 47 para el atributo lang del documento. */
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    work: string;
    services: string;
    process: string;
    about: string;
    contact: string;
    skip: string;
    langLabel: string;
  };
  hero: {
    status: string;
    titleLead: string;
    titleAccent: string;
    sub: string;
    ctaWork: string;
    ctaTalk: string;
    ctaCv: string;
    terminalTitle: string;
  };
  work: {
    title: string;
    sub: string;
    statusLabel: Record<ProjectStatus, string>;
    projects: Project[];
  };
  services: {
    title: string;
    sub: string;
    items: Service[];
  };
  process: {
    title: string;
    sub: string;
    steps: Step[];
  };
  stack: {
    title: string;
    sub: string;
    groups: StackGroup[];
  };
  about: {
    title: string;
    paragraphs: string[];
    stats: Stat[];
  };
  contact: {
    title: string;
    sub: string;
    fieldName: string;
    fieldEmail: string;
    fieldMessage: string;
    placeholderMessage: string;
    submit: string;
    sending: string;
    sent: string;
    failed: string;
    orWrite: string;
  };
  footer: {
    note: string;
    rights: string;
  };
}
