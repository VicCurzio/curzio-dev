// @ts-check
import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * `site` es un hecho publico del proyecto, no configuracion por entorno:
 * vive aca y no en `.env`. De el salen las URL absolutas de las etiquetas
 * para compartir y el `sitemap.xml` (Repo-Standards, seccion 10).
 */
export default defineConfig({
  site: "https://curzio.dev",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
  },
  env: {
    schema: {
      // Endpoint del formulario de contacto. Si falta, el formulario cae a
      // `mailto:` y el sitio sigue funcionando: por eso es opcional.
      PUBLIC_CONTACT_ENDPOINT: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
    validateSecrets: true,
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-AR", en: "en" },
      },
    }),
  ],
});
