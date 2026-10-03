import type { Copy } from "./types";
import { es } from "./es";
import { en } from "./en";

export type Locale = Copy["locale"];

export const DEFAULT_LOCALE: Locale = "es";

/** Todo el texto del sitio, por idioma. */
export const COPY: Record<Locale, Copy> = { es, en };

/** Prefijo de ruta de cada idioma. El default no lleva prefijo. */
export const LOCALE_PREFIX: Record<Locale, string> = { es: "/", en: "/en/" };

export const LOCALES = Object.keys(COPY) as Locale[];

export type { Copy } from "./types";
export type { Project, ProjectStatus, Service, Step, StackGroup, Stat } from "./types";
