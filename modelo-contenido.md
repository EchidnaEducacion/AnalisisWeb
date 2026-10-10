# Modelo de contenido

Tipos de contenido (colecciones de Astro) de la nueva web y los campos de cada uno, según las plantillas de [`estructura.md`](estructura.md). La referencia es `web/src/content.config.ts`, donde ya están implementadas las colecciones `paginas`, `hardware`, `blog` y `recursos` y las listas de autores, categorías y publicaciones; las demás se añadirán con su plantilla. Este documento explica el diseño para quien edita.

## Índice

1. [Criterios generales](#criterios-generales)
2. [paginas](#paginas)
3. [hardware](#hardware)
4. [recursos](#recursos)
5. [blog](#blog)
6. [Listas de datos: autores y categorías](#listas-de-datos-autores-y-categorías)
7. [Publicaciones](#publicaciones)

---

## Criterios generales

- **Cuatro colecciones**: `paginas`, `hardware`, `recursos` y `blog`.
- **Campos en inglés** (`title`, `description`…), como es habitual en Astro, y sin problemas de tildes.
- **Validación estricta**: si falta un campo obligatorio o está vacío, la web no se publica y el error indica el fichero que falla.
- **Idioma por carpetas**: `es/` y `en/` dentro de cada colección. El campo `translation` enlaza cada contenido con su versión en el otro idioma.
- **`draft`** en todas las colecciones: un contenido con `draft: true` no se publica.
- **Los datos van en campos y no en el texto**: así todas las páginas del mismo tipo tienen el mismo aspecto y el Markdown queda solo para explicar.

## paginas

Páginas en Markdown: Ecosistema, 1.1, 1.4, Cómo colaborar, Quiénes somos, Contacta, etc.
Plantillas: Página genérica, Índice de sección, Contacto y Portada.

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `title` | texto no vacío | Sí | Título de la página y de la pestaña |
| `description` | texto no vacío, 50–160 caracteres | Sí | Resumen para buscadores y para la tarjeta en el índice de la sección |
| `template` | `pagina` · `indice` · `contacto` · `portada` | Sí | Plantilla que usa la página; ninguna cae en una genérica por defecto |
| `order` | número | No (0) | Orden de la tarjeta en el índice de la sección |
| `listed` | sí/no | No (sí) | Con `false`, la página no sale en el índice de su sección, ni como tarjeta ni en su índice lateral; se llega a ella por enlaces (p. ej. Instalar StandardFirmata, enlazada desde Conectar EchidnaML y EchidnaBlack) |
| `toc` | sí/no | No (no) | Índice lateral «En esta página» con los apartados (`##`). Solo para páginas largas: en las cortas quita ancho al texto y no aporta. En los índices de sección añade además, arriba, los enlaces a sus páginas hijas, para que se vean sin bajar hasta las tarjetas (p. ej. Descarga en EchidnaML) |
| `team` | lista de identificadores de la lista de autores | No | Fichas del equipo al final del texto, en ese orden (en Sobre el proyecto) |
| `publications` | número del 1 al 5 | No | Lista de la colección `publicaciones` al final del texto, con esa importancia mínima, agrupada por año (en Publicaciones, `3`) |
| `resources` | `alumnado` · `docentes` | No | Lista de la colección `recursos` de ese público al final del texto, por entorno (o material) y grupo. Con `toc`, va en la columna del texto (Materiales alumnado); sin lateral, a todo el ancho, con tres tarjetas por fila (Recursos docentes) |
| `cards` | lista de `{ title, text, href }` | No | Tarjetas de enlace al final del texto (p. ej. a los Proyectos de inicio con EchidnaML). `href` es una URL externa o una ruta interna sin `base` |
| `cardsTitle` | texto | No | En los índices, título del apartado de tarjetas de las páginas hijas (p. ej. «Primeros pasos» en EchidnaML); sale también en el índice lateral |
| `summary` | lista de `{ label, value }` | No | Tarjeta lateral «En resumen», como la ficha rápida de las fichas (p. ej. en Alimentación). Solo en páginas sin `toc`, porque ocupa el mismo lateral |
| `image` | imagen | No | Imagen de la tarjeta y al compartir en redes. Las páginas que cuelgan de una placa (`/ecosistema/echidnablack2/…`) salen como tarjeta en su apartado «Más sobre la placa», ordenadas por `order` |
| `translation` | ruta | No | Versión en el otro idioma |
| `draft` | sí/no | No (no) | Página a medias sin publicar |

## hardware

Fichas de la placa, sus componentes y sus complementos (colección implementada).
Plantilla: Ficha de hardware.

**La ruta del fichero es la URL bajo `/ecosistema/`**: `hardware/es/echidnablack2/leds/index.md` → `/ecosistema/echidnablack2/leds/`. Cada ficha es una carpeta con su `index.md` y sus imágenes.

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `title` | texto no vacío | Sí | Nombre del componente o de la placa |
| `description` | texto no vacío, 50–160 caracteres | Sí | Resumen para buscadores y para la tarjeta; es también la entradilla de la ficha |
| `kind` | `placa` · `componente` · `complemento` | Sí | Dónde aparece: la placa lista sus componentes; la página de complementos, los suyos |
| `io` | `entrada` · `salida` | No | En los componentes: si es un sensor o pulsador (entrada) o un LED, motor… (salida). Sale en el rótulo («Componente · Salida») |
| `board` | `echidnablack2` | Sí, salvo en `placa` | Placa a la que pertenece (lista ampliable) |
| `image` | imagen | Sí | Foto o dibujo que la ficha muestra siempre, en la misma carpeta |
| `imageAlt` | texto no vacío | Sí | Texto alternativo de esa imagen |
| `schematic` y `schematicAlt` | imagen y texto | No | Esquema eléctrico del componente y su texto alternativo; se muestra en el lateral, en un recuadro «Esquema» |
| `pins` | lista de `{ pin, name, mode }` | No | Tabla de pines de la ficha rápida, igual en todas las fichas (p. ej. `{ pin: "D11~", name: "LED verde", mode: "Salida digital y PWM" }`) |
| `specs` | lista de `{ label, value }` | No | Otros datos de la ficha rápida, sobre todo en las placas (p. ej. `{ label: "Microcontrolador", value: "ATmega328P a 16 MHz" }`) |
| `tools` | lista de texto | No | Entornos con los que se programa («Se programa con») |
| `downloads` | lista de `{ label, file }` | No | Botones de descarga. `file` es la ruta del fichero dentro de `web/public/`, sin `base` (`/ecosistema/echidnablack2/leds/datasheet-led.pdf`); el tipo y el tamaño se calculan solos |
| `order` | número | No (0) | Orden de las tarjetas y del anterior/siguiente |
| `translation` | ruta | No | Versión en el otro idioma |
| `draft` | sí/no | No (no) | Ficha a medias sin publicar |

La ficha rápida no muestra la licencia mientras la del hardware esté pendiente (ver [`estructura.md`](estructura.md#pendiente)).

## recursos

Lista de los materiales de `/alumnado/` (y, más adelante, de `/docentes/`) en `web/src/content/recursos.yaml` (colección implementada). Son **enlaces externos**: la web solo los describe con una tarjeta, con miniatura. La página los muestra con el campo `resources` de `paginas` (`resources: alumnado`), con un título por entorno y un subtítulo por grupo.

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `id` | texto | Sí | Identificador |
| `title` | texto no vacío | Sí | Título de la tarjeta |
| `description` | texto no vacío | Sí | Una frase que describe el material |
| `audience` | `alumnado` · `docentes` | Sí | Página en la que aparece |
| `environment` | texto (`EchidnaML`, `Arduino IDE`…) | Sí | Título bajo el que se agrupa: el entorno en alumnado y el material (`Proyectos de inicio con EchidnaML`…) en docentes |
| `group` | texto (`Proyectos`, `Situaciones de aprendizaje`, `Guías`…) | No | Subtítulo dentro del entorno; sin él, las tarjetas van directamente bajo el título (docentes) |
| `type` | texto (`Guía`, `Situación de aprendizaje`, `Manual (PDF, 44 MB)`…) | Sí | Etiqueta de la tarjeta |
| `url` | dirección externa o ruta interna sin `base` | No | Adónde lleva la tarjeta; si es externa, la tarjeta indica el sitio. Sin `url`, el recurso está en preparación: la tarjeta sale atenuada, con la etiqueta «Próximamente» y sin enlace |
| `level` | `Primaria` · `Secundaria` · `FP` | No | Etiqueta de nivel educativo |
| `image` | imagen | No | Miniatura (2:1, en `web/src/content/recursos/`, sin metadatos) |
| `order` | número | No (0) | Orden dentro de su grupo |
| `featured` | sí/no | No (no) | Tarjeta destacada: ocupa todo el ancho de su grupo, con la imagen al lado del texto (Proyectos de inicio con EchidnaML) |
| `draft` | sí/no | No (no) | Recurso preparado pero oculto |

Los entornos y los grupos salen en un orden fijo (`web/src/lib/recursos.ts`): EchidnaML, Snap!, Arduino IDE; Proyectos, Situaciones de aprendizaje, Guías. Para Recursos docentes habrá que añadir cómo se enlaza cada material con su parte del alumnado (el antiguo campo `material`).

## blog

Entradas del blog (colección implementada; la primera es Rotógrafo).
Plantillas: Entrada de blog (hecha) y Listado / taxonomía.

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `title` | texto no vacío | Sí | Título de la entrada |
| `description` | texto no vacío, 50–160 caracteres | Sí | Resumen para buscadores, listados y RSS |
| `date` | fecha | Sí | Fecha de publicación y orden del blog |
| `updated` | fecha | No | Fecha de la última revisión importante |
| `author` | identificador de la lista de autores | Sí | Autor; se valida contra la lista |
| `categories` | lista de identificadores de la lista de categorías (al menos 1) | Sí | Categorías, incluidas subcategorías (`recursos/proyectos`); una errata hace fallar la publicación en vez de crear una categoría nueva |
| `tags` | lista de texto | No | Etiquetas libres |
| `image` | imagen | No | Imagen destacada para listados y redes; en la entrada, portada bajo el título |
| `imageAlt` | texto | No | Texto alternativo de la imagen destacada |
| `translation` | ruta | No | Versión en el otro idioma |
| `draft` | sí/no | No (no) | Borrador sin publicar |

**Vídeos de YouTube**: un párrafo que solo contiene un enlace a YouTube (`[Título del vídeo](https://www.youtube.com/watch?v=…)`) se convierte en un reproductor que no carga YouTube hasta que se pulsa. **GIF animados**: van en `web/public/` con la ruta de la entrada (`/2026/05/rotografo/rotografo.gif`), porque Astro los convertiría en imágenes fijas.

**La URL sale de la carpeta, no de la fecha**: la entrada `blog/es/2026/05/rotografo/` se publica en `/2026/05/rotografo/`. Si se corrige la fecha, la URL no cambia.

Ejemplo (valores ilustrativos):

```yaml
# blog/es/2026/05/mi-proyecto/index.md
title: Título de la entrada
description: Resumen de la entrada en una o dos frases, entre 50 y 160 caracteres.
date: 2026-05-01
author: jose
categories: [recursos/proyectos, bloques-de-construccion]
tags: [echidnablack2]
image: ./portada.jpg
```

## Listas de datos: autores y categorías

Dos ficheros de datos pequeños que usan las plantillas de listado para generar `/author/…/` y `/category/…/`.

**Autores** (`web/src/content/autores.yaml`, colección `autores`, ya implementada). También forman el equipo de Sobre el proyecto (campo `team` de `paginas`).

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `id` | texto | Sí | Identificador; es el de la URL `/author/<id>/` |
| `name` | texto no vacío | Sí | Nombre |
| `role` | texto no vacío | Sí | Cargo (p. ej. «Profesor de Tecnología en Secundaria») |
| `description` | texto no vacío | Sí | Biografía breve |
| `image` | imagen | Sí | Foto cuadrada, en `web/src/assets/autores/` y sin metadatos (EXIF) |
| `url` | URL | No | Web personal |

De momento están los cuatro del equipo, por orden alfabético de apellido: `jorge-lobo`, `jose`, `juanda` y `xdesig`. Falta `javier`, que solo firma entradas del blog: se añadirá con la colección `blog`.

**Categorías** (`web/src/content/categorias.yaml`, colección `categorias`, ya implementada; campos `id`, `name` y `parent`):

| `id` | `parent` |
|---|---|
| `bloques-de-construccion` | — |
| `didactica` | — |
| `hardware` | — |
| `noticias` | — |
| `programacion` | — |
| `publicaciones` | — |
| `rea` | — |
| `recursos` | — |
| `recursos/impresion-3d` | `recursos` |
| `recursos/proyectos` | `recursos` |
| `talleres` | — |

## Publicaciones

Lista de lo publicado sobre Echidna por otros medios, centros e instituciones (`web/src/content/publicaciones.yaml`, colección `publicaciones`). La página 5.3 muestra las que tienen la importancia mínima que indica su campo `publications`, de la más reciente a la más antigua y agrupadas por año. El listado de trabajo, con la escala de importancia, las que faltan por confirmar y las descartadas, está en [`publicaciones.md`](publicaciones.md).

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `id` | texto | Sí | Identificador |
| `title` | texto no vacío | Sí | Título de la publicación |
| `medium` | texto no vacío | Sí | Medio, centro o institución |
| `date` | `AAAA-MM-DD`, `AAAA-MM` o `AAAA` | Sí | Fecha de publicación en el medio; ordena la lista |
| `type` | texto no vacío | Sí | Artículo, pódcast, trabajo fin de máster, taller… |
| `url` | URL | Sí | Enlace directo a la publicación |
| `importance` | número del 1 al 5 | Sí | Importancia según la escala de `publicaciones.md` |
| `summary` | texto no vacío | Sí | Una frase que resume la publicación |

