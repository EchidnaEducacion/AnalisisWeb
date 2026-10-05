# Plantillas HTML (propuesta de diseño)

Prototipos estáticos de las **10 páginas maestras** definidas en la [Fase 5](../README.md#fase-5--estrategia-de-implementación). Sirven para cerrar el diseño antes de convertirlas en layouts `.astro` en `EchidnaEducacion.github.io`.

Abre [`index.html`](index.html) en el navegador: no necesita servidor.

| # | Plantilla | Archivo | Ejemplo real |
|---|---|---|---|
| 1 | Base (cabecera, menú, buscador, pie) | `_parciales/` | todas |
| 2 | Portada | `portada.html` | `/` |
| 3 | Índice de sección | `indice-seccion.html` | `/hardware/componentes/` |
| 4 | Ficha de hardware | `ficha-hardware.html` | `/hardware/componentes/leds/` |
| 5 | Actividad | `actividad.html` | `es02-hacemos-un-semaforo` |
| 6 | Página genérica | `pagina.html` | `/quienes-somos/` |
| 7 | Contacto | `contacto.html` | `/contacta/` |
| 8 | Entrada de blog | `entrada-blog.html` | `/AAAA/MM/slug/` |
| 9 | Listado / taxonomía | `listado.html` | `/blog/`, categorías, etiquetas, autores |
| 10 | Error 404 | `404.html` | — |
| + | Componentes de contenido (MDX) | `componentes.html` | Aviso, Descarga, Vídeo, Galería, Tarjeta |

## Línea de diseño

- **Continuidad con la marca**: naranja `#e66a00` y titulares en *Exo 2* (como la web actual).
- **Lectura fácil**: texto en *Atkinson Hyperlegible* (diseñada para baja visión) a 17 px, contraste AA, botones y zonas táctiles de 44–48 px.
- **Orientación**: cada sección tiene color e icono propios (`body[data-section]`), migas de pan, índice lateral «En esta página» y entradas por perfil en la portada (docente, estudiante, quiero una placa).
- **Pensado para el aula**: las actividades muestran de un vistazo nivel, duración, placa y herramienta; tienen objetivos, pasos numerados, retos, lista de materiales marcable, notas para docentes plegables y **versión imprimible**.
- **Responsive** desde 320 px, **modo oscuro** (automático o manual), selector **ES/EN** y vídeos/presentaciones que solo cargan el iframe al pulsar.
- **Sin maquetación en el contenido**: las columnas las decide la plantilla; el Markdown solo aporta texto y componentes.

## Estructura

```
plantillas/
├── _build.py            # ensambla _paginas/ + _parciales/ → *.html
├── _parciales/          # cabecera, pie e iconos SVG (= layout Base)
├── _paginas/            # contenido de cada plantilla (<main>)
├── assets/css/echidna.css   # tokens, componentes y estilos de cada plantilla
├── assets/js/echidna.js     # menú, tema, buscador, filtros, embebidos
└── *.html               # resultado generado (no editar a mano)
```

Para modificar: edita `_paginas/`, `_parciales/` o `assets/` y ejecuta `python3 plantillas/_build.py`.

Las imágenes son marcadores (`.ph`) que se sustituirán por las fotos reales optimizadas por Astro. El buscador muestra resultados de ejemplo; en Astro se conectará con Pagefind.
