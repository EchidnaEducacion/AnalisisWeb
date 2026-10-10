# Traslado de la web a `EchidnaEducacion.github.io`

Plan para servir la web en la raíz (<https://echidnaeducacion.github.io/>) desde el repositorio `EchidnaEducacion.github.io`, sin perder la planificación de este repositorio.

## Índice

- [Contexto](#contexto)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Despliegue](#despliegue)
- [Pasos](#pasos)
  - [1. Preparar el código](#1-preparar-el-código)
  - [2. Archivar la prueba de concepto](#2-archivar-la-prueba-de-concepto)
  - [3. Renombrar `AnalisisWeb` → `EchidnaEducacion.github.io`](#3-renombrar-analisisweb--echidnaeducaciongithubio)
  - [4. Publicar](#4-publicar)
  - [5. A tener en cuenta](#5-a-tener-en-cuenta)
- [Verificación](#verificación)
- [Orden y confirmaciones](#orden-y-confirmaciones)

## Contexto

La web Astro de `web/` se publica hoy en <https://echidnaeducacion.github.io/AnalisisWeb/> (`base: '/AnalisisWeb'`). El destino final es la raíz <https://echidnaeducacion.github.io/> (y más adelante echidna.es). El repo `EchidnaEducacion.github.io` contiene una prueba de concepto anterior (Astro + importador de WordPress en `scripts/wp-import.mjs` y datos en `wp-export/`) que ya no se usa, pero que conviene conservar como referencia. Se hará el cambio cuando lo considere el jefe de proyecto.

**Enfoque elegido: renombrar repositorios.** Así se conserva todo el historial (92 commits, planificación en la raíz y `web/`), los ajustes de Pages (ya es `build_type: workflow`) y GitHub redirige el remoto antiguo `AnalisisWeb`.

## Estructura del repositorio

La estructura **no cambia**: se renombra el repositorio, no se mueven ficheros.

```
EchidnaEducacion.github.io/
├── .github/workflows/deploy.yml   # construye web/ y publica en la raíz
├── AGENTS.md / CLAUDE.md          # instrucciones (con el nombre del repo y la URL nuevos)
├── README.md                      # tecnología, plan, progreso, decisiones, próximos pasos
├── estructura.md
├── modelo-contenido.md
├── publicaciones.md
├── redirecciones.md
├── analisis-previo.md             # histórico, no se toca
├── traslado-repo.md               # este plan
└── web/                           # proyecto Astro, sin cambios salvo base: '/'
```

El contenido actual de `EchidnaEducacion.github.io` (la prueba de concepto) no entra: se queda en el repositorio renombrado y archivado `web-prueba-concepto`.

## Despliegue

Solo se publica `web/`. Pages está en modo «GitHub Actions» (no sirve ficheros de una rama), y `deploy.yml` construye con `withastro/action` (`path: web`) y publica únicamente `web/dist`. Los documentos de la raíz nunca se publican, y los commits que solo tocan documentos no lanzan el despliegue (`paths: web/**`).

## Pasos

### 1. Preparar el código

En local, sin publicar aún.

- `web/astro.config.mjs`: quitar `base` (o `base: '/'`) y adaptar `conBase` del plugin `enlaces-con-base` para que no haga nada con base vacía (con `base = ''` la condición `startsWith(base + '/')` ya devuelve el valor tal cual; comprobarlo y, si queda limpio, eliminar el plugin o dejarlo condicionado). `site` sigue siendo `https://echidnaeducacion.github.io`.
- `web/src/lib/url.ts`: no cambia (usa `import.meta.env.BASE_URL`); actualizar solo el comentario. Se mantiene el helper `url()` para no tocar las plantillas y poder volver a usar `base` si hiciera falta.
- `.github/workflows/deploy.yml`: actualizar el comentario de la URL. El resto vale tal cual.
- Documentación (sustituir `echidnaeducacion.github.io/AnalisisWeb/` → `echidnaeducacion.github.io/` y `localhost:4321/AnalisisWeb/` → `localhost:4321/`):
  - `README.md` (líneas 5, 74, tabla de «Progreso» 126-132, y la decisión de la línea 147, que se reescribe: la web pasa a `EchidnaEducacion.github.io`; la prueba de concepto se archiva como `web-prueba-concepto`). Añadir la decisión con fecha en «Decisiones tomadas».
  - `AGENTS.md` (líneas 9, 10, 43, 44): nombre del repo y URL; quitar la frase de por qué se llama `AnalisisWeb`.
  - `web/README.md` (líneas 5, 12, 48, 90).
- `bun run build` y `bun run dev` en local: comprobar que los enlaces, imágenes del Markdown, CSS y el 404 funcionan en la raíz.

### 2. Archivar la prueba de concepto

En GitHub; difícil de deshacer, se confirma antes.

- Comprobar que no tiene nada pendiente (0 issues y 0 PR). Su `.env.example` usa `PUBLIC_CONTACT_FORM_URL`: mirar si hay una variable de Actions con ese valor y anotarla por si sirve para Contacta.
- Renombrar `EchidnaEducacion.github.io` → `web-prueba-concepto` (Settings > General) y **desactivar su Pages** antes o justo después, para liberar la raíz.
- Archivarlo (solo lectura). `scripts/wp-import.mjs` y `wp-export/` quedan consultables para `redirecciones.md` y la migración de contenido.

### 3. Renombrar `AnalisisWeb` → `EchidnaEducacion.github.io`

- Settings > General > Rename. Descripción «Web de Echidna Educación (echidna.es)» y homepage.
- Settings > Pages: confirmar «Source: GitHub Actions» y que el entorno `github-pages` permite desplegar desde `main`.
- Local: `git remote set-url origin git@github.com:EchidnaEducacion/EchidnaEducacion.github.io.git` (la redirección funciona, pero mejor dejarlo explícito). Opcional: renombrar la carpeta local.

### 4. Publicar

- Commit en castellano con los cambios del paso 1 y push a `main` → se lanza `deploy.yml` (toca `web/` y el workflow).
- La URL antigua `/AnalisisWeb/` dejará de funcionar (GitHub Pages no redirige al renombrar). Como es una web en pruebas, se acepta; si se quiere, se puede dejar un repo `AnalisisWeb` mínimo con un `index.html` de redirección, pero no lo recomiendo (el nombre `AnalisisWeb` debe quedar libre para que GitHub mantenga la redirección del remoto).

### 5. A tener en cuenta

Se apunta en `estructura.md` y `redirecciones.md`.

- Los demás repos con Pages de la organización (`GuiaInicioEchidnaML`, `GuiaInicioArduinoIDE`, `manual`, `situaciones-aprendizaje`…) cuelgan de la misma raíz: **ninguna ruta de la web puede llamarse como ellos** (p. ej. `/manual/`). Cuando el sitio tenga el dominio echidna.es, esas guías pasarán a `echidna.es/<repo>/` automáticamente, lo que hay que tener en cuenta en `redirecciones.md`.
- El dominio echidna.es (CNAME, DNS) **no** se configura ahora: es el paso final, al sustituir WordPress.

## Verificación

1. Local: `cd web && bun run build && bun run dev`; abrir <http://localhost:4321/> y recorrer portada, una ficha de hardware con imágenes, una página Markdown con enlaces internos y vídeo, el blog y una URL inexistente (404). `grep -r AnalisisWeb web/dist` no debe devolver nada.
2. Tras el push: la acción termina en verde y <https://echidnaeducacion.github.io/> sirve la web nueva con CSS e imágenes; <https://echidnaeducacion.github.io/ecosistema/echidnablack2/leds/> carga bien.
3. `git fetch` y `git status -sb` con el nuevo remoto sin errores; `gh repo view EchidnaEducacion/web-prueba-concepto` muestra «archived».
4. `grep -rn AnalisisWeb --exclude-dir=node_modules --exclude-dir=.git .` solo debe quedar en `analisis-previo.md` (histórico, no se toca) o en la nota de la decisión.

## Orden y confirmaciones

Los pasos 2-4 son acciones en GitHub difíciles de deshacer: se hacen uno a uno, confirmando contigo antes de cada uno. Los renombrados en GitHub los puedes hacer tú desde la web o yo con `gh repo rename` / `gh repo archive`.
