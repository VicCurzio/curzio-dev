/**
 * Hechos publicos de la marca. No son configuracion por entorno: no cambian
 * entre desarrollo y produccion, asi que viven en el codigo y no en `.env`.
 *
 * Espejo en JS de lo que tambien vive en CSS (`src/styles/tokens.css`) para
 * los contextos donde el CSS no llega: `theme-color` y la imagen para
 * compartir. Es un duplicado explicito: si cambia el acento, cambian los dos.
 */
export const SITE = {
  domain: "curzio.dev",
  url: "https://curzio.dev",
  name: "Victor R. Curzio",
  role: "Full stack developer",
  email: "victor.curzio@hotmail.com",
  github: "https://github.com/viccurzio",
  /**
   * Pendiente: falta la URL real del perfil. Mientras sea null, el enlace no
   * se renderiza en ningun lado en vez de apuntar a una direccion inventada.
   */
  linkedin: null as string | null,
  cvPath: "/CV_Victor_Curzio.pdf",
  ogImage: "/og.png",
  themeColor: "#211e19",
  locationRegion: "AR",
} as const;

export type Site = typeof SITE;
