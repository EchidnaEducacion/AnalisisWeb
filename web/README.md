# Plantillas HTML (propuesta de diseño)

Prototipos estáticos de las **9 páginas maestras** definidas en el [plan de implementación](../README.md#plan-de-implementación), con los menús, el pie y los nombres de la estructura de [`estructura.md`](../estructura.md). Sirven para cerrar el diseño y son el punto de partida de la web, que se irá construyendo en este directorio.

Es un proyecto **Astro** mínimo: un layout `Base` y una página por plantilla. Se publica automáticamente en **<https://echidnaeducacion.github.io/AnalisisWeb/>** con cada *push* a `main` que toque `web/`.

Para verlas en local se usa [Bun](https://bun.sh) (los scripts ejecutan Astro con el *runtime* de Bun, así que no depende de la versión de Node instalada):

```sh
cd web
bun install
bun run dev      # http://localhost:4321/AnalisisWeb/
```

`bun run build` genera el sitio estático en `web/dist/` y `bun run preview` lo sirve.

| # | Plantilla | Archivo | Ejemplo real |
|---|---|---|---|
| 1 | Base (cabecera, menú, buscador, pie) | `src/layouts/Base.astro` | todas |
| 2 | Portada | `src/pages/portada.astro` | `/` |
| 3 | Índice de sección | `src/pages/indice-seccion.astro` | `/ecosistema/` |
| 3 | Índice de sección (agrupado por títulos) | `src/pages/alumnado.astro`, `src/pages/docentes.astro` | `/alumnado/`, `/docentes/` |
| 4 | Ficha de hardware | `src/pages/ficha-hardware.astro` | `/ecosistema/echidnablack2/leds/` |
| 5 | Página genérica | `src/pages/pagina.astro` | `/quienes-somos/` |
| 6 | Contacto | `src/pages/contacto.astro` | `/contacta/` |
| 7 | Entrada de blog | `src/pages/entrada-blog.astro` | `/AAAA/MM/slug/` |
| 8 | Listado / taxonomía | `src/pages/listado.astro` | `/blog/`, categorías, etiquetas, autores |
| 9 | Error 404 | `src/pages/404.astro` | — |
| + | Componentes de contenido (MDX) | `src/pages/componentes.astro` | Aviso, Descarga, Vídeo, Galería, Tarjeta |

## Línea de diseño

- **Continuidad con la marca**: naranja `#e66a00` y titulares en *Exo 2* (como la web actual).
- **Lectura fácil**: texto en *Atkinson Hyperlegible* (diseñada para baja visión) a 17 px, contraste AA, botones y zonas táctiles de 44–48 px.
- **Orientación**: cada sección tiene color propio (`body[data-section]`: `ecosistema`, `alumnado`, `docentes`, `blog`, `nosotros`), migas de pan, índice lateral «En esta página» y entradas por perfil en la portada (docente, estudiante, quiero una).
- **Pensado para el aula**: los materiales se agrupan por entorno y enlazan con sus recursos docentes; las fichas tienen **versión imprimible**.
- **Responsive** desde 320 px, **modo oscuro** (automático o manual), selector **ES/EN** y vídeos/presentaciones que solo cargan el iframe al pulsar.
- **Sin maquetación en el contenido**: las columnas las decide la plantilla; el Markdown solo aporta texto y componentes.

## Estructura

```
web/
├── astro.config.mjs         # base /AnalisisWeb y salida en ficheros *.html
├── src/
│   ├── layouts/Base.astro   # <head>, iconos, cabecera, pie y scripts
│   ├── components/          # Cabecera (menú activo según `section`), Pie, Iconos (sprite SVG)
│   ├── lib/url.ts           # url(): rutas internas con el prefijo `base`
│   └── pages/*.astro        # contenido (<main>) de cada plantilla
└── public/assets/
    ├── css/echidna.css      # tokens, componentes y estilos de cada plantilla
    └── js/echidna.js        # menú, tema, buscador, filtros, embebidos
```

Cada página indica sus metadatos como *props* del layout:

```astro
<Base title="Ficha de hardware" description="…" section="ecosistema">
  <main id="contenido">…</main>
</Base>
```

`section` fija el color de acento y la entrada activa del menú; `bare` usa el título sin añadir « · Echidna Educación». Las llaves `{ }` literales (p. ej. en bloques de código) deben ir en un elemento con `is:raw`.

Los enlaces internos se escriben con el helper `url()` de `src/lib/url.ts`, que antepone `base` (`/AnalisisWeb/`): `href={url("portada.html")}`. Así funcionan igual en local y en GitHub Pages. Se genera un fichero `.html` por página (`build.format: 'file'`).

Las imágenes son marcadores (`.ph`) que se sustituirán por las fotos reales optimizadas por Astro. El buscador muestra resultados de ejemplo; en Astro se conectará con Pagefind.
