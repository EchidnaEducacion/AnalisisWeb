# Instrucciones para agentes

Contexto y normas de trabajo para cualquier asistente (o persona) que trabaje en este repositorio. Lo detallado está en los documentos enlazados; aquí solo va lo necesario para empezar.

## Propósito del repositorio

Planificación e implementación de la nueva web de [echidna.es](https://echidna.es/) (Echidna Educación, asociación sin ánimo de lucro): una web estática en Markdown, generada con **Astro** y alojada en **GitHub Pages**, que sustituye a la actual en WordPress.

- La web está en [`web/`](web/) y se publica en <https://echidnaeducacion.github.io/AnalisisWeb/> con cada *push* a `main` que toque `web/`.
- El repo se llama `AnalisisWeb` porque empezó como estudio de viabilidad; hoy es planificación e implementación.

## Mapa de documentos

| Documento | Qué va ahí |
|---|---|
| [`README.md`](README.md) | Tecnología elegida, plan de implementación, **progreso**, **decisiones tomadas** y **próximos pasos** |
| [`estructura.md`](estructura.md) | Árbol de páginas, URL, plantillas, criterios (navegación, pie, recursos sin plantilla) y pendientes de la estructura |
| [`modelo-contenido.md`](modelo-contenido.md) | Colecciones (`paginas`, `hardware`, `recursos`, `blog`) y sus campos |
| [`publicaciones.md`](publicaciones.md) | Listado de trabajo de publicaciones sobre Echidna para la página 5.3 |
| [`redirecciones.md`](redirecciones.md) | Correspondencia entre las URL de WordPress y las nuevas |
| [`analisis-previo.md`](analisis-previo.md) | Estudio de viabilidad inicial; referencia histórica, no se actualiza |
| [`web/README.md`](web/README.md) | Proyecto Astro: maquetas, estructura, cómo ejecutarlo y **cómo migrar una página** |

## Normas de documentación

- Todo en **castellano**.
- Las decisiones se apuntan en «Decisiones tomadas» del README; las tareas, en «Próximos pasos» o en el «Pendiente» de cada documento.
- El avance de las plantillas y páginas se registra en «Progreso» del README, en el mismo commit en el que se terminan.
- `estructura.md` describe **solo la web nueva**: no menciona la web antigua («URL actual», «como en WordPress»…). Todo lo que relaciona lo antiguo con lo nuevo va en `redirecciones.md`.
- Cada documento tiene índice al principio y los enlaces entre documentos deben seguir funcionando al renombrar apartados.

## Forma de trabajar

- **Comprobar el remoto al empezar** (`git fetch` y `git status -sb`) y avisar si hay cambios por traer o por subir.
- **Una pregunta cada vez** cuando haya que decidir algo, con una opción recomendada. Antes de proponer, revisar el contenido real (la web actual, los repos de la organización).
- **Commits en castellano**, con un resumen en la primera línea y el detalle debajo.
- **Commit y push solo cuando se pidan.** Antes de cada commit, comprobar el remoto.
- **Una página cada vez**: se migra, se revisa en local (también en el servidor de desarrollo, no solo con el *build*) y se sube cuando el usuario la da por buena. El flujo completo y el patrón de las fichas de componentes están en [«Cómo migrar una página»](web/README.md#cómo-migrar-una-página).
- **Avisar de las incoherencias** que aparezcan al migrar (pines, valores, licencias…) y apuntarlas en el documento que corresponda.

## El proyecto `web/`

- Astro con Bun: `cd web && bun install && bun run dev` (<http://localhost:4321/AnalisisWeb/>). Sin Bun, `npm install --no-package-lock` y `npx astro build`.
- Los enlaces internos se escriben con el helper `url()` de `web/src/lib/url.ts`, que antepone el `base` (`/AnalisisWeb/`).
- Claves de sección (`section` del layout y `data-section`, que fijan el color): `ecosistema`, `alumnado`, `docentes`, `blog` y `nosotros`.
- Menú: Ecosistema, Alumnado, Docentes y Blog son enlaces directos; solo Quiénes somos es desplegable. «Alumnado» y «Docentes» son los rótulos cortos de Materiales alumnado y Recursos docentes, que mantienen el nombre completo en el resto de la web. «Quiero una» no va en el menú.
- Las situaciones de aprendizaje, proyectos, diapositivas y guías docentes son **recursos alojados sin plantilla** en `web/public/` (p. ej. `alumnado/situaciones-aprendizaje/<recurso>/`); la web solo los enlaza mediante la colección `recursos`.
- Las **maquetas** (contenido escrito a mano) están en `web/src/pages/maquetas/` y se publican en `/maquetas/`. Se van sustituyendo por plantillas reales alimentadas por las colecciones (paso 3 del plan en el README).
- El **contenido** va en `web/src/content/<colección>/es/`, y la ruta del fichero es la URL (`paginas/es/politica-privacidad.md` → `/politica-privacidad/`). En el Markdown, los enlaces internos se escriben sin `base` (`/contacta/`); se lo añade un plugin de `astro.config.mjs`.
- Las **fichas de hardware** van en `web/src/content/hardware/es/` y cuelgan de `/ecosistema/` (`echidnablack2/leds/index.md` → `/ecosistema/echidnablack2/leds/`), cada una en su carpeta con sus imágenes.
