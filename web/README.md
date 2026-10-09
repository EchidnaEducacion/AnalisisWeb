# Web de Echidna (Astro)

Prototipos estáticos de las **9 páginas maestras** definidas en el [plan de implementación](../README.md#plan-de-implementación), con los menús, el pie y los nombres de la estructura de [`estructura.md`](../estructura.md). Sirven para cerrar el diseño y son el punto de partida de la web, que se irá construyendo en este directorio.

Es un proyecto **Astro**: un layout `Base`, las **maquetas** (una página por plantilla, publicadas en `/maquetas/`) y las primeras **páginas reales**, que salen de las colecciones de contenido (ver [Páginas reales](#páginas-reales)). Se publica automáticamente en **<https://echidnaeducacion.github.io/AnalisisWeb/>** con cada *push* a `main` que toque `web/`.

Para verlas en local se usa [Bun](https://bun.sh) (los scripts ejecutan Astro con el *runtime* de Bun, así que no depende de la versión de Node instalada):

```sh
cd web
bun install
bun run dev      # http://localhost:4321/AnalisisWeb/
```

`bun run build` genera el sitio estático en `web/dist/` y `bun run preview` lo sirve.

- **Si Bun no está instalado**: `curl -fsSL https://bun.sh/install | bash` y abrir una terminal nueva.
- **Sin Bun, con npm**: `npm install --no-package-lock` y `npx astro dev` (o `npx astro build` y `npx astro preview`). Sin *lockfile* de npm, porque el proyecto usa el de Bun.
- **Desde VS Code**: los comandos se ejecutan en la terminal integrada (*Terminal → Nueva terminal*, que se abre en la raíz del repositorio). La URL se abre con `Ctrl+clic` o, dentro del editor, con *Simple Browser: Show* (`Ctrl+Shift+P`). La página se recarga al guardar y el servidor se para con `Ctrl+C`.

| # | Plantilla | Archivo | Ejemplo real |
|---|---|---|---|
| 1 | Base (cabecera, menú, buscador, pie) | `src/layouts/Base.astro` | todas |
| 2 | Portada | `src/pages/maquetas/portada.astro` | `/` |
| 3 | Índice de sección | `src/layouts/Indice.astro` (plantilla real; maqueta borrada) | `/ecosistema/` |
| 3 | Índice de sección (agrupado por títulos) | `src/pages/maquetas/alumnado.astro`, `src/pages/maquetas/docentes.astro` | `/alumnado/`, `/docentes/` |
| 4 | Ficha de hardware | `src/layouts/Ficha.astro` (plantilla real; maqueta borrada) | `/ecosistema/echidnablack2/`, `/ecosistema/echidnablack2/leds/` |
| 5 | Página genérica | `src/layouts/Pagina.astro` (plantilla real; maqueta borrada) | `/quienes-somos/` |
| 6 | Contacto | `src/pages/maquetas/contacto.astro` | `/contacta/` |
| 7 | Entrada de blog | `src/pages/maquetas/entrada-blog.astro` | `/AAAA/MM/slug/` |
| 8 | Listado / taxonomía | `src/pages/maquetas/listado.astro` | `/blog/`, categorías, etiquetas, autores |
| 9 | Error 404 | `src/pages/404.astro` (plantilla real; no usa colección) | cualquier URL que no exista |
| + | Componentes de contenido (MDX) | `src/pages/maquetas/componentes.astro` | Aviso, Descarga, Vídeo, Galería, Tarjeta |

## Línea de diseño

- **Continuidad con la marca**: naranja `#e66a00` y titulares en *Exo 2* (como la web actual).
- **Lectura fácil**: texto en *Atkinson Hyperlegible* (diseñada para baja visión) a 17 px, contraste AA, botones y zonas táctiles de 44–48 px.
- **Orientación**: cada sección tiene color propio (`body[data-section]`: `ecosistema`, `alumnado`, `docentes`, `blog`, `nosotros`), migas de pan, índice lateral «En esta página» y entradas por perfil en la portada (docente, estudiante, conoce la EchidnaBlack2).
- **Pensado para el aula**: los materiales se agrupan por entorno y enlazan con sus recursos docentes; las fichas tienen **versión imprimible**.
- **Responsive** desde 320 px, **modo oscuro** (automático o manual), selector **ES/EN** y vídeos/presentaciones que solo cargan el iframe al pulsar. Por debajo de 540 px, el selector de idioma y el de tema pasan de la cabecera al final del menú móvil, para que quepan el logo, la lupa y el menú.
- **Sin maquetación en el contenido**: las columnas las decide la plantilla; el Markdown solo aporta texto y componentes.

## Estructura

```
web/
├── astro.config.mjs         # base /AnalisisWeb y salida en ficheros *.html
├── src/
│   ├── assets/logo/         # SVG original del logo (Illustrator, con todas sus variantes)
│   ├── assets/autores/      # fotos de los autores (cuadradas y sin EXIF)
│   ├── content.config.ts    # colecciones y su esquema (ver modelo-contenido.md)
│   ├── content/paginas/es/  # páginas en Markdown: la ruta del fichero es la URL
│   ├── content/autores.yaml # autores del blog y equipo de Sobre el proyecto
│   ├── content/hardware/es/ # fichas de hardware: carpeta con index.md e imágenes, URL bajo /ecosistema/
│   ├── layouts/
│   │   ├── Base.astro       # <head>, iconos, cabecera, pie y scripts
│   │   ├── Pagina.astro     # plantilla «Página genérica»
│   │   ├── Indice.astro     # plantilla «Índice de sección»: intro + tarjetas de las hijas
│   │   └── Ficha.astro      # plantilla «Ficha de hardware»
│   ├── components/          # Cabecera (menú activo según `section`), Pie, Iconos (sprite SVG)
│   ├── lib/                 # url(): rutas con `base`; paginas.ts y hardware.ts: URL de cada página o ficha
│   └── pages/
│       ├── [...slug].astro  # genera las páginas de la colección `paginas`
│       ├── ecosistema/[...slug].astro # genera las fichas de la colección `hardware`
│       ├── index.astro      # «Propuesta de plantillas», hasta que exista la portada real
│       ├── 404.astro
│       └── maquetas/*.astro # maquetas de cada plantilla, con contenido escrito a mano
└── public/
    ├── favicon.svg          # erizo del logo; apple-touch-icon.png, su versión en PNG
    └── assets/
        ├── css/echidna.css  # tokens, componentes y estilos de cada plantilla
        └── js/echidna.js    # menú, tema, buscador, filtros, embebidos
```

Cada página indica sus metadatos como *props* del layout:

```astro
<Base title="Ficha de hardware" description="…" section="ecosistema">
  <main id="contenido">…</main>
</Base>
```

`section` fija el color de acento y la entrada activa del menú; `bare` usa el título sin añadir « · Echidna Educación». Las llaves `{ }` literales (p. ej. en bloques de código) deben ir en un elemento con `is:raw`.

Los enlaces internos se escriben con el helper `url()` de `src/lib/url.ts`, que antepone `base` (`/AnalisisWeb/`): `href={url("maquetas/portada/")}`. Así funcionan igual en local y en GitHub Pages. Las URL son de carpeta (`build.format: 'directory'`): `/politica-privacidad/` se genera como `politica-privacidad/index.html`.

## Páginas reales

El contenido está en `src/content/`, validado por el esquema de `src/content.config.ts` (si falta un campo o no cumple el formato, el *build* falla e indica el fichero). Por ahora existen la colección `paginas`, con las plantillas «Página genérica», «Contacto» e «Índice de sección»; la colección `hardware`, con la «Ficha de hardware»; y la lista `autores`.

- **La ruta del fichero es la URL**, dentro de la carpeta del idioma: `src/content/paginas/es/politica-privacidad.md` → `/politica-privacidad/`; `es/quienes-somos/licencias.md` → `/quienes-somos/licencias/`. Las fichas de hardware cuelgan de `/ecosistema/` y cada una es una carpeta con sus imágenes: `src/content/hardware/es/echidnablack2/leds/index.md` → `/ecosistema/echidnablack2/leds/`. Sus descargas (PDF…) van en `public/` con la misma ruta.
- **Enlaces en el Markdown**: los internos se escriben sin `base` (`[contacto](/contacta/)`); un plugin de Sätteri (el procesador de Markdown de Astro 7), definido en `astro.config.mjs`, se lo añade al compilar.
- **Tablas en el Markdown**: otro plugin de Sätteri las mete en un `div.table-wrap`, como en las plantillas, para que tengan marco y se desplacen dentro de él en móvil en vez de ensanchar la página.
- **Bloques de EchidnaML**: las capturas de bloques se llaman `bloque-*.png` (p. ej. `bloque-led-verde.png`) y la web las muestra todas a la misma altura, aunque se hayan capturado a escalas distintas.
- **Lupas sobre la placa**: las imágenes que amplían un componente en la placa se llaman `lupa-*.png` (p. ej. `lupa-leds.png`) y se muestran centradas, a un tercio de la columna (260 px en móvil).
- **Índice lateral** «En esta página»: solo sale si la página lleva `toc: true` en el *front matter* (para páginas largas); se genera con sus `h2`. En los índices de sección, encima lleva también los enlaces a las páginas hijas.
- **Del menú y del pie** se enlaza la maqueta mientras no exista la página real; al crearla, se cambia el enlace por su URL definitiva.

Páginas hechas (el avance por plantilla está en «Progreso» del [README](../README.md#progreso)):

- **Quiénes somos y pie**: Política de privacidad, Contacta, Sobre el proyecto (`quienes-somos.md`, con las fichas del equipo que salen de `src/content/autores.yaml` gracias al campo `team`) y Licencias (`quienes-somos/licencias.md`).
- **Ecosistema**: `ecosistema.md` y `ecosistema/echidnaml.md` son índices de sección, con una tarjeta por cada página hija que existe. Las hijas de EchidnaML están en `ecosistema/echidnaml/` (cada una con su carpeta de imágenes): Descarga (la versión va escrita en el texto y los enlaces, y se actualiza a mano con cada versión publicada en `echidnaml-releases`), Conectar EchidnaML y EchidnaBlack, Empezar con EchidnaBlocks, Empezar con LearningML e Instalar StandardFirmata (`listed: false`).
- **EchidnaBlack2**: Características técnicas (`ecosistema/echidnablack2/caracteristicas-tecnicas.md`, que cuelga de una ficha de hardware: las migas buscan en las dos colecciones).
- **Fichas de hardware**: EchidnaBlack2, Pulsadores, Sensor de luz LDR, LEDs ROG y Audio.

## Cómo migrar una página

Las páginas se migran **de una en una**: se redacta, se revisa en local y se sube cuando está dada por buena.

1. **Leer el material**: la página de la web actual (WordPress) y el apartado del [manual](https://github.com/EchidnaEducacion/manual) que le corresponda. El manual suele tener texto e imágenes más actuales; se adapta, no se copia tal cual. Si dos fuentes no coinciden (un pin, un valor), manda lo que se ve en la placa o lo más reciente, y se avisa.
2. **Preparar las imágenes** en la carpeta de la página, sin metadatos (`convert -strip`) y con nombres descriptivos: `lupa-*`, `bloque-*`, `esquema-*`, `programa-*`. Los diagramas transparentes con texto oscuro se pasan a fondo blanco para que se vean en modo oscuro. Las descargas (hojas de características…) van en `public/` con la ruta de la página.
3. **Redactar el Markdown** con su *front matter* (`modelo-contenido.md` explica cada campo) y `toc: true` si la página es larga.
4. **Comprobar**: `npx astro build` sin errores; la página en el **servidor de desarrollo** (`npx astro dev`), que sirve las imágenes con otras direcciones que el *build*; móvil y modo oscuro; y que nada se salga de la pantalla de 320 a 1280 px.
5. **Documentar** en el mismo commit: «Progreso» del README y la lista de páginas hechas de arriba.

**Fichas de componentes**: se hacen en el orden del manual (LED, pulsadores, zumbador, sensor de luz, joystick, acelerómetro, temperatura, LED RGB, micrófono, entradas MkMk). Cada una lleva:

- la **imagen principal** del componente y el rótulo con su tipo (`kind`, `io`);
- los apartados **Descripción** (con la lupa al final), **Funcionamiento**, **Cómo se programa** (el bloque de EchidnaML) y **Ejemplos** (los del manual, con la imagen del programa y su lógica explicada);
- en el lateral, la ficha rápida con los **pines** y datos de las características técnicas, el **esquema** (`schematic`) y la **hoja de características**;
- `order` según su número en `estructura.md` (1.2.x), que ordena las tarjetas de la placa y el anterior/siguiente.

No llevan ejemplos de Arduino IDE.

En las maquetas, las imágenes son marcadores (`.ph`). El buscador muestra resultados de ejemplo; se conectará con Pagefind.
