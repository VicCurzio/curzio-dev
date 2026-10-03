/**
 * Le da al linter de capas algo que TIENE que rechazar.
 *
 * Una corrida limpia no prueba que el control este encendido: prueba que no
 * salto, que es exactamente lo que se ve cuando esta apagado. El modo tipico
 * de apagarse es que el resolver deje de entender un import y el plugin
 * saltee todos los archivos en silencio.
 *
 * Criterio general: Templates/Project-Kickoff, seccion 2 ("controles que se
 * verifican a si mismos").
 */
import { writeFileSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";

// content es una hoja: importar de shared es ilegal por la regla de capas.
const FIXTURE = "src/content/_layer-guard.ts";
const CODE = 'import { SITE } from "@/shared/config/site";\nexport const guard = SITE;\n';

writeFileSync(FIXTURE, CODE);

let rejected = false;
try {
  execSync(`npx eslint ${FIXTURE}`, { stdio: "pipe" });
} catch {
  rejected = true;
} finally {
  rmSync(FIXTURE, { force: true });
}

if (!rejected) {
  console.error(
    "La regla de capas no esta deteniendo un import prohibido.\n" +
      "Revisa el resolver de eslint.config.mjs: si no puede resolver los imports,\n" +
      "el plugin los saltea sin avisar y la verificacion queda en cero."
  );
  process.exit(1);
}

console.log("Linter de capas: activo (rechazo el import prohibido).");
