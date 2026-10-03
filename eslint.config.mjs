import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import boundaries from "eslint-plugin-boundaries";

export default [
  { ignores: ["dist/**", ".astro/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // La regla de capas. Sin esto, "tener esta arquitectura" es "tener carpetas
  // con estos nombres". Ver Templates/Frontend-Structure del vault.
  {
    plugins: { boundaries },
    settings: {
      "boundaries/include": ["src/**/*.ts", "src/**/*.astro"],
      // Gana el PRIMER patron que matchea: lo mas especifico va arriba.
      "boundaries/elements": [
        { type: "pages", mode: "full", pattern: "src/pages/**/*" },
        { type: "layouts", mode: "full", pattern: "src/layouts/**/*" },
        { type: "screens", mode: "full", pattern: "src/screens/**/*" },
        { type: "sections", mode: "full", pattern: "src/sections/**/*" },
        { type: "shared", mode: "full", pattern: "src/shared/**/*" },
        { type: "content", mode: "full", pattern: "src/content/**/*" },
      ],
      // Sin resolver, un import que el plugin no entiende desaparece de la
      // verificacion SIN AVISAR y la regla queda en cero. Verificado a los
      // golpes en Cicare (2026-08-13) y en 2winGs (2026-08-26).
      "import/resolver": {
        typescript: { project: "./tsconfig.json" },
      },
    },
    rules: {
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          message: "${file.type} no puede importar de ${dependency.type}",
          rules: [
            { from: "pages", allow: ["pages", "screens"] },
            // La screen es la unica que compone secciones. El archivo de ruta no.
            { from: "screens", allow: ["layouts", "sections", "shared", "content"] },
            { from: "layouts", allow: ["layouts", "shared", "content"] },
            // Dos secciones no se importan entre si: quien orquesta es la pagina.
            { from: "sections", allow: ["shared", "content"] },
            // shared no sabe de este proyecto: se copia entero a otro repo.
            { from: "shared", allow: ["shared"] },
            // content es una hoja: datos y textos, sin dependencias.
            { from: "content", allow: ["content"] },
          ],
        },
      ],
      "boundaries/no-unknown-files": "off",
      "boundaries/no-unknown": "off",
    },
  },

  // Los scripts del repo corren en Node, no en el navegador. Sin esto, cada
  // `console.log` de una herramienta propia es un error de lint y el `lint`
  // nunca llega a verde, que es la forma mas rapida de que nadie lo mire.
  // Se declaran a mano en vez de sumar el paquete `globals`: son dos.
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: {
      globals: { console: "readonly", process: "readonly" },
    },
  },
];
