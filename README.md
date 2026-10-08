# Analisis de la Web

Estudio de viabilidad para transformar **[echidna.es](https://echidna.es/)**, actualmente construida con WordPress y base de datos, en una **web estática escrita en Markdown, sin base de datos y alojada en GitHub**.

La web (proyecto Astro, empezando por las plantillas propuestas) está en [`web/`](web/) y se pueden ver publicadas en **<https://echidnaeducacion.github.io/AnalisisWeb/>**.

La estructura propuesta para la nueva web (árbol de páginas, URL y plantillas) está en [`estructura.md`](estructura.md). La correspondencia entre las URL de WordPress y las nuevas está en [`redirecciones.md`](redirecciones.md).

## Índice

1. [Situación actual](#situación-actual)
2. [Fase 1 – Ventajas e inconvenientes](#fase-1--ventajas-e-inconvenientes)
3. [Fase 2 – Tecnologías](#fase-2--tecnologías)
4. [Fase 3 – Inventario de páginas maestras y páginas](#fase-3--inventario-de-páginas-maestras-y-páginas)
5. [Fase 4 – Análisis de la prueba de concepto](#fase-4--análisis-de-la-prueba-de-concepto)
6. [Fase 5 – Estrategia de implementación](#fase-5--estrategia-de-implementación)
7. [Decisiones tomadas](#decisiones-tomadas)
8. [Próximos pasos](#próximos-pasos)

---

## Situación actual

| Aspecto | Detalle |
|---|---|
| Organización | Echidna Educación, asociación sin ánimo de lucro (programación y robótica educativa open source) |
| CMS | WordPress |
| Tema / maquetador | **Avada** (Fusion Builder + Avada Layout Builder) – tema de pago |
| SEO | Sitemap XML (`/wp-sitemap.xml`, estilo Yoast) |
| Idioma | Español |
| Secciones | A programar · Hardware (Echidna Black, Echidna Shield) · Manual · Didáctica (REA, guías por actividades, Arduino IDE, propuestas de la comunidad) · Blog · Recursos (diseños 3D, GitHub) · Quiénes somos |
| Tipos de contenido | Entradas, páginas, FAQ (`avada_faq`), slides (`slide-page`), categorías, etiquetas, autores |
| Funciones dinámicas detectadas | Buscador, blog con autores/categorías/etiquetas, RSS, formulario de comentarios en entradas. No hay tienda, área privada ni login de usuarios |
| Plugins detectados | Contact Form 7 (+ Google reCAPTCHA), Akismet (antispam), Fusion Builder |
| Formulario de contacto | `/contacta/`: nombre, email, asunto y mensaje |
| Manual | Ya es estático: `/manual/` incrusta en un iframe [echidnaeducacion.github.io/manual](https://echidnaeducacion.github.io/manual/) |
| Analítica | Google Analytics con un ID antiguo `UA-…` (Universal Analytics, que ya no recoge datos) |
| Licencias del contenido | CC BY-SA (contenidos), CERN OHL-S (hardware), GPL (software) |

> La web es esencialmente **de contenido** (documentación + blog) y el proyecto ya trabaja con licencias abiertas y GitHub, lo que la convierte en buena candidata para una web estática.

---

## Fase 1 – Ventajas e inconvenientes

### Ventajas

| Ventaja | Descripción |
|---|---|
| **Coste** | GitHub Pages es gratuito; desaparecen hosting con PHP/MySQL y la licencia de Avada |
| **Seguridad** | Sin PHP, sin base de datos y sin panel de administración: no hay plugins ni accesos que atacar |
| **Mantenimiento** | No hay que actualizar WordPress, plugins ni tema, ni vigilar incompatibilidades |
| **Rendimiento** | HTML pre-generado servido desde CDN: carga muy rápida y mejor puntuación en Core Web Vitals |
| **Versionado** | Todo el historial de cambios queda en Git; se puede revertir cualquier modificación |
| **Copias de seguridad** | Cada clon del repositorio es una copia completa de la web |
| **Colaboración abierta** | La comunidad puede proponer mejoras mediante *Pull Requests*, coherente con la filosofía open source del proyecto |
| **Portabilidad** | El contenido en Markdown es texto plano, legible y reutilizable (otro generador, PDF, otro hosting…) |
| **Coherencia con las licencias** | Publicar el contenido CC BY-SA en un repositorio público facilita su reutilización |

### Inconvenientes y mitigaciones

| Inconveniente | Mitigación |
|---|---|
| **Se pierde el editor visual** (Fusion Builder); editar exige Markdown y Git | Formación básica; edición directa en github.com; CMS Git opcional (Decap CMS, Pages CMS, Sveltia CMS) |
| **Buscador**: no hay servidor que procese búsquedas | Búsqueda en el navegador con **Pagefind** (índice generado al compilar) |
| **Formularios / comentarios** necesitan backend | Servicios externos (Formspree, Web3Forms), enlace `mailto:`; comentarios con **Giscus** (GitHub Discussions) si se quieren |
| **Migración del contenido**: el export de WordPress contiene shortcodes de Avada (`[fusion_builder_container]…`) | Herramientas de conversión + scripts de limpieza + revisión manual de las páginas maquetadas |
| **Rediseño**: el diseño de Avada no se puede reutilizar tal cual | Crear (o adaptar) un tema propio; se aprovecha para simplificar |
| **SEO y URLs antiguas** | Mantener la misma estructura de URLs o generar redirecciones; conservar títulos y descripciones |
| **Límites de GitHub Pages**: sitio publicado ≤ 1 GB, ficheros ≤ 100 MB, ~100 GB/mes de tráfico (límite blando) | Optimizar imágenes; alojar vídeos en YouTube; ficheros grandes (STL, PDFs pesados) en *Releases* o en el repo de recursos |
| **Contenido dinámico** (últimas entradas, listados) | Lo resuelve el generador en el momento de compilar |

### Conclusión de la fase 1

**Viable.** Las funciones dinámicas detectadas (buscador, blog, RSS) tienen sustituto estático directo. El mayor esfuerzo estará en **limpiar el contenido maquetado con Avada** y en **rediseñar las plantillas**, no en limitaciones técnicas.

---

## Fase 2 – Tecnologías

### Generadores de sitios estáticos

| Generador | Lenguaje | Velocidad | Curva de aprendizaje | Blog | Documentación (Manual / Didáctica) | Notas |
|---|---|---|---|---|---|---|
| **Hugo** | Go (binario único) | Muy alta | Media (plantillas Go) | Muy bueno | Bueno (temas Docsy, Hextra) | Sin dependencias; secciones y taxonomías nativas |
| **Jekyll** | Ruby | Baja–media | Baja | Muy bueno | Aceptable | Integrado en GitHub Pages; ecosistema algo estancado |
| **Astro (+ Starlight)** | JavaScript | Alta | Media | Muy bueno | Excelente con Starlight | Muy flexible; requiere Node.js |
| **MkDocs Material** | Python | Alta | Baja | Básico (plugin blog) | Excelente | Ideal para manuales; menos flexible como web corporativa |
| **Docusaurus** | JavaScript (React) | Media | Media | Bueno | Excelente | Más pesado; orientado a documentación de software |

### Decisión: Astro

La recomendación inicial era Hugo, pero la prueba de concepto ya se ha hecho con **Astro** (ver [Fase 4](#fase-4--análisis-de-la-prueba-de-concepto)) y se mantiene esa elección:

- Ya hay trabajo hecho y experiencia del equipo con Astro; cambiar de generador no aporta lo suficiente.
- Las ***content collections*** validan el *front matter* con esquemas Zod: si una página está mal configurada, el build falla e indica cuál. Es justo el problema detectado en la prueba.
- Cada página maestra es un *layout* `.astro`, y los elementos reutilizables (vídeo, galería, descarga, aviso, tarjeta) son componentes que se pueden usar en el contenido con MDX.
- Tiene RSS, sitemap, paginación y optimización de imágenes, y se integra fácilmente con Pagefind.
- El **Manual se mantiene fuera** como está ahora (ya es un sitio estático en GitHub Pages).
- Quienes van a editar conocen Git y GitHub, así que **no hace falta un CMS**: se edita en Markdown y se publica con *push* o *Pull Request*.

### Piezas complementarias

| Necesidad | Solución propuesta |
|---|---|
| Alojamiento | **GitHub Pages** |
| Despliegue | **GitHub Actions**: compila, comprueba enlaces y publica al crear un tag `v*` (como en la prueba de concepto) |
| Dominio | `echidna.es` mediante fichero `CNAME` + registros DNS, HTTPS gratuito |
| Buscador | **Pagefind** |
| Formulario de contacto (**necesario**) | Servicio externo: **Formspree** o **Web3Forms** (plan gratuito, antispam con *honeypot* / hCaptcha / Turnstile) |
| Comentarios (opcional) | Giscus, o suprimirlos (los comentarios de WordPress no se migran) |
| Imágenes | Procesado de imágenes del propio generador (redimensionado, WebP) |
| Analítica (opcional) | GA4, o alternativas sin cookies (GoatCounter, Plausible) que no requieren banner de consentimiento |
| Manual | Sin cambios: el repo `manual` de la organización se sirve automáticamente en `echidna.es/manual/` |

### Herramientas de migración

| Herramienta | Uso |
|---|---|
| Exportación nativa de WordPress (XML) | Origen de entradas, páginas, categorías, etiquetas y autores |
| `wordpress-export-to-markdown` | Convierte el XML a Markdown con *front matter* y descarga las imágenes |
| **`scripts/wp-import.mjs`** de la prueba de concepto | Descarga páginas, entradas, categorías y medios de la REST API de WordPress y convierte el HTML de Fusion Builder a MDX (**es la herramienta ya usada**) |

---

## Fase 3 – Inventario de páginas maestras y páginas

Datos obtenidos de los sitemaps de la web (octubre de 2026) y de la revisión de páginas representativas.

### Contenido actual según los sitemaps

| Sitemap | URLs | Observaciones |
|---|---:|---|
| Páginas (`page`) | 82 | Incluye `/inicio2/` (borrador duplicado de la portada) y `/manual/` (iframe) |
| Entradas (`post`) | 61 + `/blog/` | URLs con formato `/AAAA/MM/slug/` |
| Categorías | 12 | Incluye `sin-categoria` |
| Etiquetas | 59 | |
| Autores | 5 | |
| FAQ (`avada_faq`) | 16 | **Contenido de demo de Avada** (lorem ipsum): se descarta |
| Categorías de FAQ | 6 | Demo de Avada: se descarta |
| Slides (`slide-page`) | 4 | Sliders de Avada: pasan a ser imágenes de la portada o se eliminan |
| `element_category`, `fusion_tb_category` | 4 | Internos de Avada: se descartan |
| Imágenes referenciadas | 267 | Más otros ficheros de `wp-content/uploads` (PDFs, etc.) |

### Páginas por sección

| Sección | Índice + subsecciones | Páginas de detalle | Total |
|---|---:|---:|---:|
| Hardware | 6 (`/hardware/`, componentes, complementos, echidna-shield, echidnablack, echidnablack2) | 36 (15 componentes, 9 complementos, 5 Black, 4 Shield, 3 Black2) | **42** |
| Didáctica | 6 (`/didactica/`, actividades, REA, talleres, IDE Arduino, comunidad) | 14 actividades | **20** |
| A programar | 4 (`/a-programar/`, EchidnaML, EchidnaScratch, instalar StandardFirmata) | 4 de EchidnaML | **8** |
| Recursos | 1 (`/recursos/`) | 2 (proyectos, impresión 3D) | **3** |
| Quiénes somos | 1 | 2 (publicaciones, licencias) | **3** |
| Sueltas | — | Inicio, Contacta, Quiero una, Política de privacidad, Manual, Inicio2 | **6** |
| **Total** | | | **82** |

### Páginas maestras (plantillas) propuestas

| # | Plantilla | Se usa en | Nº páginas |
|---|---|---|---:|
| 1 | **Base**: cabecera, menú, buscador, pie, redes | Todas | — |
| 2 | **Portada**: bloques de presentación + últimas entradas | `/` | 1 |
| 3 | **Índice de sección**: introducción + tarjetas de las páginas hijas | Hardware, Didáctica, A programar, Recursos y sus subsecciones | ~18 |
| 4 | **Página de contenido**: texto, imágenes, vídeos, descargas | Fichas de hardware, actividades, EchidnaML, Quiénes somos, licencias, etc. | ~58 |
| 5 | **Contacto**: página de contenido + formulario | `/contacta/` | 1 |
| 6 | **Entrada de blog**: fecha, autor, categorías, etiquetas | Entradas | 61 |
| 7 | **Listado / taxonomía**: listado paginado | Blog, 11 categorías, 59 etiquetas, 5 autores | ~76 (generadas automáticamente) |
| 8 | **Error 404** | — | 1 |

> Esta propuesta inicial se ha refinado en la [Fase 5](#fase-5--estrategia-de-implementación), separando ficha de hardware y actividad como maestras propias.

Además se necesitan algunos componentes reutilizables (componentes MDX) para sustituir elementos de Avada: vídeo de YouTube, galería, botón de descarga, aviso destacado y tarjeta.

### Resumen del volumen a migrar

| Concepto | Cantidad |
|---|---:|
| Páginas de contenido a escribir/migrar en Markdown | **79** (82 − `/inicio2/` − `/manual/` − `/blog/`) |
| Entradas de blog | **61** |
| **Total de ficheros Markdown** | **≈ 140** |
| Páginas generadas automáticamente (listados, categorías, etiquetas, autores) | ≈ 76 |
| Páginas maestras | **8** (+ componentes) |
| Imágenes | ≈ 267 (+ PDFs) |
| Contenido descartado | 16 FAQ demo, 4 slides, `/inicio2/`, taxonomías internas de Avada |

### Observaciones para la migración

- **Entradas del blog**: no usan Fusion Builder y su conversión a Markdown será casi automática.
- **Páginas**: muchas están maquetadas con contenedores de Fusion Builder (la portada y las fichas de hardware tienen 8 contenedores cada una), así que necesitarán limpieza manual o semiautomática. Es la parte que más esfuerzo requiere.
- **URLs**: el generador puede mantener exactamente las rutas actuales (`/hardware/componentes/leds/`, `/2020/02/slug/`) y así no se pierde posicionamiento ni se rompen enlaces.
- **Manual**: `/manual/` lo sirve directamente el repo `manual` de la organización.
- **Comentarios**: hay formulario de comentarios en las entradas. Hay que decidir si se eliminan o se sustituyen por Giscus.
- **Analítica**: el ID `UA-…` actual ya no funciona; conviene decidir si se instala GA4 u otra alternativa.

### Conclusión de la fase 3

La web es de **tamaño pequeño-medio** (unos 140 ficheros Markdown) y tiene una estructura muy regular. Con **8 páginas maestras** se cubre todo el sitio. La migración es **viable** y su coste principal está en limpiar las ~80 páginas maquetadas con Avada.

---

## Fase 4 – Análisis de la prueba de concepto

La prueba de concepto está en [EchidnaEducacion/EchidnaEducacion.github.io](https://github.com/EchidnaEducacion/EchidnaEducacion.github.io) y se puede ver publicada en [echidnaeducacion.github.io](https://echidnaeducacion.github.io/). Usa **Astro 7 + MDX + Bun**. Se migró la web entera de forma automática y el resultado tiene muchas páginas mal configuradas. Revisión hecha en octubre de 2026.

### Qué está resuelto y se puede reutilizar

| Elemento | Detalle |
|---|---|
| Importador | `scripts/wp-import.mjs`: REST API de WordPress → MDX. 156 entradas escritas y ningún shortcode de Avada sin convertir (`wp-export/import-report.md`) |
| URLs | Se conservan las de WordPress (`/hardware/…`, `/AAAA/MM/slug/`). `src/data/redirects.json` cubre slugs antiguos y `/inicio2/` redirige a la portada |
| Control de enlaces | `scripts/check-links.mjs` falla si falta alguna URL de los sitemaps antiguos o hay enlaces internos rotos, y se ejecuta en el deploy |
| Blog | Entradas, listado paginado, categorías, autores y RSS (`/feed/`, `/blog/feed/`) |
| Formulario de contacto | Componente `ContactForm` con un servicio externo configurable (`PUBLIC_CONTACT_FORM_URL`) |
| Despliegue | GitHub Actions al crear un tag `v*`, con `CNAME` → `echidna.es` |
| Manual | El repo es el sitio de la organización, así que el repo `manual` se sirve en `echidna.es/manual/` sin hacer nada |
| Diseño | `src/styles/tokens.css` recoge colores y tipografías de Avada (naranja `#e66a00`, Exo, Electrolize, Open Sans, PT Sans) |
| Multidioma | Estructura preparada para ES/EN (`src/content/*/es/`, campo `translation`) |
| Documentación | `AGENT.md` describe el modelo de contenido, los componentes y el flujo de trabajo |

### Por qué hay páginas mal configuradas

| # | Problema | Ejemplo |
|---|---|---|
| 1 | **Solo hay 3 layouts** (`Base`, `Page`, `Post`): todas las páginas usan la misma plantilla genérica (índices, fichas de hardware, actividades e institucionales) | `src/pages/[...slug].astro` → `Page.astro` |
| 2 | **La maquetación está dentro del contenido**: la rejilla de Avada se ha copiado con `<Columns>`/`<Column>` en cada página. Hay 128 `.mdx` frente a 30 `.md` | `hardware/componentes/leds/index.mdx` |
| 3 | **El esquema de páginas es demasiado laxo**: `title` es opcional, el campo `template` está declarado pero no se usa y no hay campos propios para hardware o actividades. Se cuelan valores basura | `description: "﻿"` en `es02-hacemos-un-semaforo` |
| 4 | **Índices de sección escritos a mano**, que repiten datos de las páginas hijas en vez de generarse a partir de ellas | `hardware/index.mdx` repite las características de cada placa |
| 5 | **Actividades sin metadatos**: solo contienen un `<Embed>` de Google Slides (sin nivel, placa, duración ni materiales) | `didactica/actividades/*` |
| 6 | **94 páginas frente a 82 en el sitemap**: hay 12 páginas no indexadas en WordPress (`s01`–`s11`, `p01`, subpáginas de EchidnaScratch, `snap4arduino`) | `didactica/actividades/s01-hola-erizo/` |
| 7 | **20 imágenes no descargadas**, que ya daban error 404 en WordPress | `import-report.md` |
| 8 | **Sin buscador**, y la portada está hecha a mano en `src/pages/index.astro` | — |

### Conclusión de la fase 4

La prueba de concepto **valida la viabilidad técnica**: la importación, las URLs, el blog, el formulario y el despliegue funcionan. Los fallos no vienen del generador sino de la **falta de un modelo de contenido y de plantillas específicas**. Al traer el contenido "a lo bruto", la maquetación de Avada se ha metido dentro del Markdown. Esto **confirma la estrategia**: primero el modelo de contenido y las plantillas, después el diseño y por último la migración.

---

## Fase 5 – Estrategia de implementación

La implementación se hace en este mismo repositorio, en el directorio [`web/`](web/). Orden propuesto:

### Paso 1 – Modelo de contenido

- Definir un tipo de contenido por cada página maestra: colecciones separadas, o un campo `template` **obligatorio** en `pages`.
- Usar esquemas Zod **estrictos**: `title` y `description` obligatorios, sin valores vacíos, y campos con tipo propio por plantilla. Ejemplos:
  - **Ficha de hardware**: placa(s) compatible(s), tipo (componente/complemento/placa), imagen, pines, descargas.
  - **Actividad**: código (`ES02`), nivel (primaria/secundaria), placa, herramienta (EchidnaML, Arduino IDE…), duración, presentación embebida, materiales.
  - **Índice de sección**: introducción y orden; el listado de hijas **se genera solo**.
- Documentar el modelo en `AGENT.md` y en el README del repo de la web.

### Paso 2 – Páginas maestras

| # | Layout | Uso |
|---|---|---|
| 1 | **Base** | Cabecera, menú, buscador (Pagefind), pie |
| 2 | **Portada** | Bloques de presentación + últimas entradas |
| 3 | **Índice de sección** | Introducción + tarjetas generadas a partir de las páginas hijas |
| 4 | **Ficha de hardware** | Componentes, complementos y placas |
| 5 | **Actividad** | Actividades didácticas con su ficha de datos |
| 6 | **Página genérica** | Quiénes somos, licencias, política de privacidad, EchidnaML… |
| 7 | **Contacto** | Página genérica + formulario |
| 8 | **Entrada de blog** | Fecha, autor, categorías, etiquetas |
| 9 | **Listado / taxonomía** | Blog, categorías, etiquetas, autores (paginado) |
| 10 | **Error 404** | — |

La regla es que **los componentes MDX sirven para contenido** (vídeo, galería, descarga, aviso, tarjeta), **no para maquetar**: la disposición en columnas la decide el layout.

La plantilla que usa cada página de la nueva web está en [`estructura.md`](estructura.md).

### Paso 3 – Diseño

- Para cada página maestra, elegir 1 o 2 páginas reales y limpiarlas a mano para usarlas como banco de pruebas del diseño. Ejemplos: `hardware/componentes/leds`, `didactica/actividades/es02-hacemos-un-semaforo`, una entrada antigua y una reciente.
- Partir de los tokens de `tokens.css`, revisar móvil y accesibilidad, y cerrar el diseño antes de migrar en bloque.

### Paso 4 – Migración por secciones

1. Hardware (42 páginas)
2. Didáctica (20 + 12 no indexadas, si se publican)
3. A programar, Recursos, Quiénes somos y páginas sueltas
4. Blog (61 entradas, la parte más sencilla)

Se reaprovecha el MDX de la prueba como punto de partida: quitar `<Columns>`, pasar los datos al *front matter* y usar `.md` siempre que no haga falta ningún componente.

**Lista de comprobación por página:**

- [ ] URL igual a la de WordPress (o redirección en `redirects.json`)
- [ ] *Front matter* válido según el esquema (el build no falla)
- [ ] Imágenes y PDFs presentes y optimizados
- [ ] Enlaces internos correctos (`check:links` en verde)
- [ ] Sin maquetación en el contenido (sin `<Columns>` ni restos de Avada)
- [ ] Revisión visual en escritorio y móvil

---

## Decisiones tomadas

- [x] Edición: personal con conocimientos de Git y GitHub, **sin CMS**.
- [x] **Formulario de contacto necesario**, mediante un servicio externo (Formspree o Web3Forms).
- [x] El **Manual** sigue en su repo actual y se sirve en `echidna.es/manual/`.
- [x] Acceso completo a WordPress (export XML, `wp-content/uploads`, base de datos).
- [x] Generador: **Astro** (prueba de concepto ya hecha con él).
- [x] Estrategia: **modelo de contenido → páginas maestras → diseño → migración por secciones**.
- [x] **Habrá versión en inglés**: el modelo de contenido y las plantillas deben contemplar ES/EN desde el principio (campo `translation`, selector de idioma, rutas `/en/…`, menús y textos de interfaz traducibles).
- [x] La web se construye **en este repositorio**, en el directorio `web/` (proyecto Astro con Bun), partiendo de las plantillas propuestas. Se publica en GitHub Pages en <https://echidnaeducacion.github.io/AnalisisWeb/>; la prueba de concepto de `EchidnaEducacion.github.io` queda solo como referencia.

## Próximos pasos

- [ ] Decidir sobre comentarios (eliminar o Giscus).
- [ ] Decidir sobre analítica (GA4 o alternativa sin cookies).
- [ ] Decidir si se publican las 12 páginas no indexadas (actividades `s01`–`s11`, `p01`, EchidnaScratch, Snap4Arduino).
- [ ] Recuperar o sustituir las 20 imágenes perdidas.
- [ ] Definir los esquemas del modelo de contenido (paso 1).
- [ ] Revisar la propuesta de URL y plantillas de [`estructura.md`](estructura.md).
- [ ] Cerrar las redirecciones de las URL de WordPress a las nuevas ([`redirecciones.md`](redirecciones.md)).
