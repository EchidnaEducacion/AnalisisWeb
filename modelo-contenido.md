# Modelo de contenido

Tipos de contenido (colecciones de Astro) de la nueva web y los campos de cada uno, según las plantillas de [`estructura.md`](estructura.md). La referencia es `web/src/content.config.ts`, donde ya están implementadas la colección `paginas` y la lista de autores; las demás se añadirán con su plantilla. Este documento explica el diseño para quien edita.

## Índice

1. [Criterios generales](#criterios-generales)
2. [paginas](#paginas)
3. [hardware](#hardware)
4. [recursos](#recursos)
5. [blog](#blog)
6. [Listas de datos: autores y categorías](#listas-de-datos-autores-y-categorías)

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
| `toc` | sí/no | No (no) | Índice lateral «En esta página» con los apartados (`##`). Solo para páginas largas: en las cortas quita ancho al texto y no aporta |
| `team` | lista de identificadores de la lista de autores | No | Fichas del equipo al final del texto, en ese orden (en Sobre el proyecto) |
| `image` | imagen | No | Imagen de la tarjeta y al compartir en redes |
| `translation` | ruta | No | Versión en el otro idioma |
| `draft` | sí/no | No (no) | Página a medias sin publicar |

## hardware

Fichas de la placa, sus componentes y sus complementos.
Plantilla: Ficha de hardware.

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `title` | texto no vacío | Sí | Nombre del componente o de la placa |
| `description` | texto no vacío, 50–160 caracteres | Sí | Resumen para buscadores y para la tarjeta |
| `kind` | `placa` · `componente` · `complemento` | Sí | Dónde aparece: la placa lista sus componentes; la página de complementos, los suyos |
| `board` | `echidnablack2` | Sí, salvo en `placa` | Placa a la que pertenece (lista ampliable) |
| `image` | imagen | Sí | Foto o esquema que la ficha muestra siempre |
| `pins` | lista de `{ name, pin }` | No | Tabla de pines, igual en todas las fichas (p. ej. `{ name: "Rojo", pin: "D9" }`) |
| `downloads` | lista de `{ label, file }` | No | Botones de descarga (código de ejemplo, esquemas…) |
| `order` | número | No (0) | Orden de las tarjetas |
| `translation` | ruta | No | Versión en el otro idioma |
| `draft` | sí/no | No (no) | Ficha a medias sin publicar |

## recursos

Ficheros de datos sin texto: cada uno es una tarjeta de `/alumnado/` o `/docentes/`. Los recursos (situaciones de aprendizaje, diapositivas, guías…) se alojan sin plantilla o fuera de la web; aquí solo se describen.
Plantilla: Índice de sección (agrupado por títulos).

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `title` | texto no vacío | Sí | Título de la tarjeta |
| `description` | texto no vacío, 50–200 caracteres | Sí | Texto breve de la tarjeta |
| `audience` | `alumnado` · `docentes` | Sí | Página en la que aparece |
| `environment` | `echidnaml` · `snap` · `arduino-ide` · `otros` | Sí | Título bajo el que se agrupa en alumnado y orden de los grupos en docentes |
| `material` | identificador (p. ej. `proyectos-inicio-echidnaml`, `sensor-temperatura`) | Sí | Agrupa los recursos de un material en docentes y **enlaza alumnado y docentes**: si dos recursos comparten `material`, cada tarjeta lleva a la otra |
| `type` | `situacion-aprendizaje` · `proyecto` · `guia-inicio` · `manual` · `diapositivas` · `guia-docente` · `pagina` | Sí | Icono y etiqueta de la tarjeta |
| `url` | ruta interna o dirección externa | Sí | Adónde lleva la tarjeta |
| `level` | `primaria` · `secundaria` · `ambos` | No | Etiqueta de nivel educativo |
| `image` | imagen | No | Miniatura de la tarjeta |
| `order` | número | No (0) | Orden dentro de su grupo |
| `draft` | sí/no | No (no) | Recurso preparado pero oculto |

Ejemplo: la situación de aprendizaje del sensor de temperatura y su guía docente, enlazadas por `material`.

```yaml
# recursos/es/sensor-temperatura-alumnado.yaml
title: ¿Hace calor aquí?
description: Situación de aprendizaje para medir la temperatura con el sensor de la EchidnaBlack2.
audience: alumnado
environment: echidnaml
material: sensor-temperatura
type: situacion-aprendizaje
url: /alumnado/situaciones-aprendizaje/sensor-temperatura/
level: primaria
```

```yaml
# recursos/es/sensor-temperatura-guia-docente.yaml
title: ¿Hace calor aquí? Guía docente
description: Objetivos, temporalización y evaluación de la situación de aprendizaje del sensor de temperatura.
audience: docentes
environment: echidnaml
material: sensor-temperatura
type: guia-docente
url: /docentes/situaciones-aprendizaje/sensor-temperatura/guia-docente/
level: primaria
```

## blog

Entradas del blog.
Plantillas: Entrada de blog y Listado / taxonomía.

| Campo | Tipo | Obligatorio | Para qué |
|---|---|---|---|
| `title` | texto no vacío | Sí | Título de la entrada |
| `description` | texto no vacío, 50–160 caracteres | Sí | Resumen para buscadores, listados y RSS |
| `date` | fecha | Sí | Fecha de publicación y orden del blog |
| `updated` | fecha | No | Fecha de la última revisión importante |
| `author` | identificador de la lista de autores | Sí | Autor; se valida contra la lista |
| `categories` | lista de identificadores de la lista de categorías (al menos 1) | Sí | Categorías, incluidas subcategorías (`recursos/proyectos`); una errata hace fallar la publicación en vez de crear una categoría nueva |
| `tags` | lista de texto | No | Etiquetas libres |
| `image` | imagen | No | Imagen destacada para listados y redes |
| `translation` | ruta | No | Versión en el otro idioma |
| `draft` | sí/no | No (no) | Borrador sin publicar |

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

De momento están los cuatro del equipo: `jorge-lobo`, `xdesig`, `jose` y `juanda`. Falta `javier`, que solo firma entradas del blog: se añadirá con la colección `blog`.

**Categorías** (`id`, `name`, `description`, `parent`):

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
