# Analisis de la Web

Estudio de viabilidad para transformar **[echidna.es](https://echidna.es/)**, actualmente construida con WordPress y base de datos, en una **web estática escrita en Markdown, sin base de datos y alojada en GitHub**.

## Índice

1. [Situación actual](#situación-actual)
2. [Fase 1 – Ventajas e inconvenientes](#fase-1--ventajas-e-inconvenientes)
3. [Fase 2 – Tecnologías](#fase-2--tecnologías)
4. [Fase 3 – Inventario de páginas maestras y páginas](#fase-3--inventario-de-páginas-maestras-y-páginas)
5. [Decisiones tomadas](#decisiones-tomadas)
6. [Próximos pasos](#próximos-pasos)

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

### Recomendación: Hugo

- Cubre bien la mezcla de la web: páginas institucionales, fichas de hardware, actividades y blog.
- Compila en segundos, no necesita dependencias (un único binario) y trae de serie categorías, etiquetas, autores, RSS, paginación y procesado de imágenes.
- Las *page bundles* de Hugo (una carpeta por página con su `index.md`, imágenes y PDFs) encajan con las fichas de hardware y las actividades.
- El **Manual se mantiene fuera** como está ahora (ya es un sitio estático en GitHub Pages), así que una herramienta centrada en documentación como Starlight o MkDocs no aporta nada.
- Quienes van a editar conocen Git y GitHub, así que **no hace falta un CMS**: se edita en Markdown y se publica con *push* o *Pull Request*.

### Piezas complementarias

| Necesidad | Solución propuesta |
|---|---|
| Alojamiento | **GitHub Pages** |
| Despliegue | **GitHub Actions**: cada *push* a `main` compila y publica |
| Dominio | `echidna.es` mediante fichero `CNAME` + registros DNS, HTTPS gratuito |
| Buscador | **Pagefind** |
| Formulario de contacto (**necesario**) | Servicio externo: **Formspree** o **Web3Forms** (plan gratuito, antispam con *honeypot* / hCaptcha / Turnstile) |
| Comentarios (opcional) | Giscus, o suprimirlos (los comentarios de WordPress no se migran) |
| Imágenes | Procesado de imágenes del propio generador (redimensionado, WebP) |
| Analítica (opcional) | GA4, o alternativas sin cookies (GoatCounter, Plausible) que no requieren banner de consentimiento |
| Manual | Sin cambios: enlace del menú a `echidnaeducacion.github.io/manual/` |

### Herramientas de migración

| Herramienta | Uso |
|---|---|
| Exportación nativa de WordPress (XML) | Origen de entradas, páginas, categorías, etiquetas y autores |
| `wordpress-export-to-markdown` | Convierte el XML a Markdown con *front matter* y descarga las imágenes |
| `wp2hugo` | Conversión específica a Hugo |
| Plugin *Jekyll Exporter* | Alternativa desde el propio WordPress |
| Scripts propios (Python/regex) | Limpiar shortcodes de Avada/Fusion Builder |

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

| # | Plantilla (layout Hugo) | Se usa en | Nº páginas |
|---|---|---|---:|
| 1 | **Base** (`baseof.html`): cabecera, menú, buscador, pie, redes | Todas | — |
| 2 | **Portada** (`index.html`): bloques de presentación + últimas entradas | `/` | 1 |
| 3 | **Índice de sección** (`list.html`): introducción + tarjetas de las páginas hijas | Hardware, Didáctica, A programar, Recursos y sus subsecciones | ~18 |
| 4 | **Página de contenido** (`single.html`): texto, imágenes, vídeos, descargas | Fichas de hardware, actividades, EchidnaML, Quiénes somos, licencias, etc. | ~58 |
| 5 | **Contacto**: página de contenido + formulario | `/contacta/` | 1 |
| 6 | **Entrada de blog** (`posts/single.html`): fecha, autor, categorías, etiquetas | Entradas | 61 |
| 7 | **Listado / taxonomía** (`posts/list.html`, `taxonomy.html`): listado paginado | Blog, 11 categorías, 59 etiquetas, 5 autores | ~76 (generadas automáticamente) |
| 8 | **Error 404** | — | 1 |

Las fichas de hardware y las actividades usan la misma plantilla de contenido. Si se quiere mostrar datos estructurados (nivel, duración, materiales, placa compatible…), se añaden en el *front matter* y la plantilla los pinta como **variante** de la 4, sin crear una maestra nueva.

Además se necesitan algunos componentes reutilizables (*shortcodes* de Hugo) para sustituir elementos de Avada: vídeo de YouTube, galería, botón de descarga, aviso destacado y tarjeta.

### Resumen del volumen a migrar

| Concepto | Cantidad |
|---|---:|
| Páginas de contenido a escribir/migrar en Markdown | **79** (82 − `/inicio2/` − `/manual/` − `/blog/`) |
| Entradas de blog | **61** |
| **Total de ficheros Markdown** | **≈ 140** |
| Páginas generadas automáticamente (listados, categorías, etiquetas, autores) | ≈ 76 |
| Páginas maestras | **8** (+ shortcodes) |
| Imágenes | ≈ 267 (+ PDFs) |
| Contenido descartado | 16 FAQ demo, 4 slides, `/inicio2/`, taxonomías internas de Avada |

### Observaciones para la migración

- **Entradas del blog**: no usan Fusion Builder y su conversión a Markdown será casi automática.
- **Páginas**: muchas están maquetadas con contenedores de Fusion Builder (la portada y las fichas de hardware tienen 8 contenedores cada una), así que necesitarán limpieza manual o semiautomática. Es la parte que más esfuerzo requiere.
- **URLs**: Hugo puede mantener exactamente las rutas actuales (`/hardware/componentes/leds/`, `/2020/02/slug/`) y así no se pierde posicionamiento ni se rompen enlaces.
- **Manual**: `/manual/` puede ser una redirección o un enlace del menú directo a `echidnaeducacion.github.io/manual/`.
- **Comentarios**: hay formulario de comentarios en las entradas. Hay que decidir si se eliminan o se sustituyen por Giscus.
- **Analítica**: el ID `UA-…` actual ya no funciona; conviene decidir si se instala GA4 u otra alternativa.

### Conclusión de la fase 3

La web es de **tamaño pequeño-medio** (unos 140 ficheros Markdown) y tiene una estructura muy regular. Con **8 páginas maestras** se cubre todo el sitio. La migración es **viable** y su coste principal está en limpiar las ~80 páginas maquetadas con Avada.

---

## Decisiones tomadas

- [x] Edición: personal con conocimientos de Git y GitHub, **sin CMS**.
- [x] **Formulario de contacto necesario**, mediante un servicio externo (Formspree o Web3Forms).
- [x] El **Manual** sigue en su sitio actual, enlazado desde la web.
- [x] Acceso completo a WordPress (export XML, `wp-content/uploads`, base de datos).
- [x] Generador: **Hugo**.

## Próximos pasos

- [ ] Decidir sobre comentarios (eliminar o Giscus) y analítica (GA4 o alternativa).
- [ ] Obtener el export XML de WordPress y la carpeta `uploads`.
- [ ] Hacer una prueba de concepto: convertir el export a Markdown y montar las 8 plantillas con 3 o 4 páginas reales (una ficha de hardware, una actividad, una entrada y la portada).
- [ ] Estimar el esfuerzo de limpieza de las páginas de Avada a partir de esa prueba.
