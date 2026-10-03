# curzio.dev

Sitio comercial de Victor R. Curzio, desarrollador full stack freelance. Astro
estatico, en espanol e ingles, sin JavaScript de cliente salvo lo que una
seccion necesite.

**En produccion:** todavia no. El dominio existe y el sitio compila; falta
publicarlo.

## Como corre

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # salida estatica en dist/
npm run preview
```

## Como se verifica

```bash
npm run typecheck  # astro check
npm run lint       # eslint + el linter de capas propio
```

El `lint` no termina en eslint: corre despues `scripts/check-layers.mjs`, que le
da al linter de capas **un import que tiene que rechazar** y falla si lo deja
pasar. Una corrida limpia no prueba que la regla este encendida; prueba que no
salto, que es lo mismo que se ve cuando esta apagada.

## La regla de capas

Esta escrita en `eslint.config.mjs` y es lo que sostiene la estructura:

```
pages     -> solo screens          (la ruta no compone nada)
screens   -> layouts, sections, shared, content
layouts   -> layouts, shared, content
sections  -> shared, content       (dos secciones no se conocen entre si)
shared    -> shared                (no sabe de este proyecto: se copia a otro repo)
content   -> content               (es una hoja: datos y textos)
```

La consecuencia practica: **el archivo de ruta elige idioma y nada mas.** Quien
decide el orden de las secciones es `src/screens/home/Home.astro`, en un solo
lugar para los dos idiomas, para que no puedan divergir sin que nadie lo decida.

## Idiomas

`astro.config.mjs` define `es` como idioma por defecto sin prefijo: el espanol
vive en `/` y el ingles en `/en/`. Todo el texto esta en `src/content/`, un
archivo por idioma tipados contra el mismo molde, asi que **un texto que falta
en un idioma no compila**.

## Pendiente

- Publicar: falta elegir donde y agregar el workflow (`.github/` esta vacio).
- La URL de LinkedIn en `src/shared/config/site.ts` es `null` a proposito:
  mientras no este, el enlace no se renderiza en vez de apuntar a una direccion
  inventada.
- La imagen para compartir (`npm run og`) y el favicon.
