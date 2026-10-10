# Nueva web de Echidna

Planificación e implementación de la nueva web de **[echidna.es](https://echidna.es/)**: una web estática escrita en Markdown, generada con Astro y alojada en GitHub Pages, que sustituye a la actual en WordPress.

La web está en [`web/`](web/) y se puede ver publicada en **<https://echidnaeducacion.github.io/AnalisisWeb/>**.

## Índice

1. [Documentos](#documentos)
2. [Tecnología](#tecnología)
3. [Plan de implementación](#plan-de-implementación)
4. [Progreso](#progreso)
5. [Decisiones tomadas](#decisiones-tomadas)
6. [Próximos pasos](#próximos-pasos)

---

## Documentos

| Documento | Contenido |
|---|---|
| [`estructura.md`](estructura.md) | Árbol de páginas, URL, plantillas, criterios de navegación y puntos pendientes de la estructura |
| [`modelo-contenido.md`](modelo-contenido.md) | Colecciones de contenido y sus campos (`paginas`, `hardware`, `recursos`, `blog`) |
| [`redirecciones.md`](redirecciones.md) | Correspondencia entre las URL de WordPress y las de la nueva web |
| [`analisis-previo.md`](analisis-previo.md) | Estudio de viabilidad inicial: situación de partida, ventajas e inconvenientes, tecnologías, inventario y análisis de la prueba de concepto anterior |
| [`web/README.md`](web/README.md) | Proyecto Astro: cómo ejecutarlo y cómo está organizado |
| [`AGENTS.md`](AGENTS.md) | Contexto y normas de trabajo para asistentes y personas que colaboren en el repo (`CLAUDE.md` lo importa) |

## Tecnología

| Necesidad | Solución |
|---|---|
| Generador | **Astro** con **Bun**; *content collections* validadas con Zod |
| Alojamiento | **GitHub Pages**, con el dominio `echidna.es` (fichero `CNAME` + DNS) |
| Despliegue | **GitHub Actions**: compila, comprueba enlaces y publica |
| Buscador | **Pagefind** |
| Formulario de contacto | Servicio externo: **Formspree** o **Web3Forms** |
| Analítica | **GoatCounter**, sin cookies |
| Imágenes | Procesado de imágenes de Astro (redimensionado, WebP) |
| Manual y guías de inicio | Repos propios en GitHub Pages, enlazados desde `echidna.es` con redirecciones |

Las alternativas valoradas y los motivos de la elección están en [`analisis-previo.md`](analisis-previo.md#fase-2--tecnologías).

---

## Plan de implementación

La implementación se hace en este repositorio, en el directorio [`web/`](web/). Orden: **modelo de contenido → maquetas de las páginas maestras → plantillas con contenido de ejemplo → migración por secciones**.

### Paso 1 – Modelo de contenido

El modelo está definido en [`modelo-contenido.md`](modelo-contenido.md): cuatro colecciones (`paginas`, `hardware`, `recursos` y `blog`), campos en inglés, validación estricta con Zod (`title` y `description` obligatorios y sin valores vacíos) e idioma por carpetas.

- Al implementarlo, trasladarlo a `web/src/content.config.ts` y resumirlo en [`AGENTS.md`](AGENTS.md) y en el README de la web.

### Paso 2 – Páginas maestras

| # | Layout | Uso |
|---|---|---|
| 1 | **Base** | Cabecera, menú, buscador (Pagefind), pie |
| 2 | **Portada** | Bloques de presentación + últimas entradas |
| 3 | **Índice de sección** | Introducción + tarjetas generadas a partir de las páginas hijas, o agrupadas por títulos (Materiales alumnado y Recursos docentes, que son una sola página) |
| 4 | **Ficha de hardware** | Componentes, complementos y placas |
| 5 | **Página genérica** | Quiénes somos, licencias, política de privacidad, EchidnaML… |
| 6 | **Contacto** | Página genérica + formulario |
| 7 | **Entrada de blog** | Fecha, autor, categorías, etiquetas |
| 8 | **Listado / taxonomía** | Blog, categorías, etiquetas, autores (paginado) |
| 9 | **Error 404** | — |

La regla es que **los componentes MDX sirven para contenido** (vídeo, galería, descarga, aviso, tarjeta), **no para maquetar**: la disposición en columnas la decide el layout.

La plantilla que usa cada página de la nueva web está en [`estructura.md`](estructura.md).

Las **maquetas** de estas páginas, con contenido escrito a mano, están en [`web/`](web/) (ver [`web/README.md`](web/README.md)) y publicadas en <https://echidnaeducacion.github.io/AnalisisWeb/>. Se prueban y se ajustan antes del paso 3.

### Paso 3 – Plantillas con contenido de ejemplo

Se hace en el mismo proyecto [`web/`](web/). No hay dos juegos de plantillas: una plantilla real es un *layout* (`web/src/layouts/`) alimentado por su colección (`web/src/content.config.ts`), y el contenido de ejemplo son ficheros Markdown o YAML en `web/src/content/`.

- [x] Crear `web/src/content.config.ts` según [`modelo-contenido.md`](modelo-contenido.md). Hecho con las colecciones `paginas` y `hardware` y la lista de autores; `recursos` y `blog` se añaden con su plantilla.
- Pasar cada maqueta a *layout* real alimentado por su colección (avance en [Progreso](#progreso)).
- Añadir **contenido de ejemplo real**, 1 o 2 páginas por plantilla (las hechas, en [Progreso](#progreso)):
  - Ecosistema, EchidnaBlack2 y LEDs ROG (hardware) — hechas, además de EchidnaML con sus cinco páginas y Características técnicas;
  - Materiales alumnado y Recursos docentes, con los recursos de «¿Hace calor aquí?» y de los Proyectos de inicio;
  - Política de privacidad, Sobre el proyecto y Contacta — hechas, además de Licencias;
  - una entrada antigua y otra reciente del blog, con sus listados;
  - el 404 — hecho.

  Es contenido definitivo, no de usar y tirar: es el primer lote de la migración.
- [x] Mover las maquetas a `web/src/pages/maquetas/` (publicadas en `/maquetas/`) como referencia visual. Falta borrar cada una cuando su plantilla real la iguale.
- Revisar el diseño con este contenido (tokens, móvil y accesibilidad) y cerrarlo antes de migrar en bloque.
- [x] Pasar a URL de carpeta (`build.format: 'directory'`: `/ecosistema/` en vez de `indice-seccion.html`).

### Paso 4 – Migración por secciones

Cada página se migra de una en una, con el flujo de [«Cómo migrar una página»](web/README.md#cómo-migrar-una-página) (material de la web actual y del manual, imágenes, comprobaciones y documentación).

1. **Ecosistema**: EchidnaBlack2 con sus componentes y complementos, EchidnaML (1.1 a 1.1.5), Placas anteriores (con sus PDF) y Entornos compatibles.
2. **Materiales alumnado y Recursos docentes**: fichas de la colección `recursos` y recursos alojados sin plantilla (exportaciones de eXeLearning, diapositivas, guías docentes).
3. **Quiénes somos, Contacta, Quiero una y pie** (política de privacidad y licencias).
4. **Blog** (61 entradas, la parte más sencilla).

Se reaprovecha el MDX de la prueba de concepto anterior como punto de partida: quitar `<Columns>`, pasar los datos al *front matter* y usar `.md` siempre que no haga falta ningún componente.

**Lista de comprobación por página:**

- [ ] URL según [`estructura.md`](estructura.md) y redirección desde la URL antigua según [`redirecciones.md`](redirecciones.md) (`redirects` en `astro.config.mjs`)
- [ ] *Front matter* válido según el esquema (el build no falla)
- [ ] Imágenes y PDFs presentes y optimizados
- [ ] Enlaces internos correctos (`check:links` en verde)
- [ ] Sin maquetación en el contenido (sin `<Columns>` ni restos de Avada)
- [ ] Revisión visual en escritorio y móvil

---

## Progreso

Avance de los pasos 3 y 4, por plantilla. Se actualiza en el mismo commit en el que se termina una plantilla o una página. La lista de páginas, sus URL y su plantilla están en [`estructura.md`](estructura.md#tabla).

**Colecciones** (`web/src/content.config.ts`): `paginas` ✅ · `hardware` ✅ · `recursos` ✅ · `blog` ✅ · listas de `autores` ✅, `publicaciones` ✅ y `categorias` ✅

| Plantilla | Plantilla real | Páginas hechas | Maqueta |
|---|---|---|---|
| Base | ✅ `layouts/Base.astro` | Todas | — |
| Portada | — | — | Se queda |
| Índice de sección | ✅ `layouts/Indice.astro`; el agrupado por títulos, con `components/Recursos.astro` en la página genérica | [Materiales alumnado](https://echidnaeducacion.github.io/AnalisisWeb/alumnado/), [Ecosistema](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/), [EchidnaML](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/) | Borrada (Alumnado y Docentes conservan las suyas) |
| Ficha de hardware | ✅ `layouts/Ficha.astro` | [EchidnaBlack2](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/) (placa, con sus componentes), [Pulsadores](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/pulsadores/), [Joystick](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/joystick/), [Acelerómetro](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/acelerometro/), [Micrófono](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/microfono/), [Sensor de temperatura](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/sensor-temperatura/), [LED RGB](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/led-rgb/), [Sensor de luz LDR](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/sensor-luz-ldr/), [LEDs ROG](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/leds/), [Audio](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/audio/), [Conexiones MkMk](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/conexiones-mkmk/) | Borrada |
| Página genérica | ✅ `layouts/Pagina.astro` | [Política de privacidad](https://echidnaeducacion.github.io/AnalisisWeb/politica-privacidad/), [Sobre el proyecto](https://echidnaeducacion.github.io/AnalisisWeb/quienes-somos/), [Licencias](https://echidnaeducacion.github.io/AnalisisWeb/quienes-somos/licencias/), [Características técnicas](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/caracteristicas-tecnicas/), [Modo sensores / Modo MkMk](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/modo-sensores-mkmk/), [Alimentación](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/alimentacion/), [Descarga de EchidnaML](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/descarga/), [Conectar EchidnaML y EchidnaBlack](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/conectar-placa/), [Empezar con EchidnaBlocks](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/empezar-echidnablocks/), [Empezar con LearningML](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/empezar-learningml/), [Instalar StandardFirmata](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/instalar-standardfirmata/), [Publicaciones](https://echidnaeducacion.github.io/AnalisisWeb/quienes-somos/publicaciones/) | Borrada |
| Contacto | ✅ `layouts/Contacto.astro` (sin envío real) | [Contacta](https://echidnaeducacion.github.io/AnalisisWeb/contacta/) | Se queda |
| Entrada de blog | ✅ `layouts/Entrada.astro` | [Rotógrafo](https://echidnaeducacion.github.io/AnalisisWeb/2026/05/rotografo/) | Se queda |
| Listado / taxonomía | Básico: `pages/blog/index.astro` (sin categorías, etiquetas, autores ni paginación) | [Blog](https://echidnaeducacion.github.io/AnalisisWeb/blog/) | Se queda |
| Error 404 | ✅ `pages/404.astro` (sin colección) | [Página no encontrada](https://echidnaeducacion.github.io/AnalisisWeb/no-existe/) | Borrada (era la propia página) |

**Plantilla real**: ✅ cuando el *layout* está alimentado por su colección. **Maqueta**: «Borrada» cuando la plantilla real la iguala.

Última actualización: 2026-10-10.

## Decisiones tomadas

- [x] Edición: personal con conocimientos de Git y GitHub, **sin CMS**.
- [x] **Formulario de contacto necesario**, mediante un servicio externo (Formspree o Web3Forms).
- [x] El **Manual** sigue en su repo actual y se sirve en `echidna.es/manual/`.
- [x] Acceso completo a WordPress (export XML, `wp-content/uploads`, base de datos).
- [x] Generador: **Astro** (prueba de concepto ya hecha con él).
- [x] Estrategia: **modelo de contenido → páginas maestras → diseño → migración por secciones**.
- [x] **Habrá versión en inglés**: el modelo de contenido y las plantillas deben contemplar ES/EN desde el principio (campo `translation`, selector de idioma, rutas `/en/…`, menús y textos de interfaz traducibles).
- [x] La web se construye **en este repositorio**, en el directorio `web/` (proyecto Astro con Bun), partiendo de las plantillas propuestas. Se publica en GitHub Pages en <https://echidnaeducacion.github.io/AnalisisWeb/>; la prueba de concepto de `EchidnaEducacion.github.io` queda solo como referencia.
- [x] **Sin comentarios en el blog**: solo hay 9 en 6 años y Giscus obligaría a tener cuenta de GitHub. Los 9 comentarios antiguos se descartan. Al final de cada entrada se invita a escribir desde `/contacta/`.
- [x] **Analítica con GoatCounter**: gratuito para proyectos sin ánimo de lucro, de código abierto y sin cookies, así que no necesita aviso de consentimiento. Mide visitas, páginas más vistas y procedencia sin datos personales. Se descarta GA4 por las cookies y el envío de datos a Google.
- [x] **Rótulos cortos en el menú**: «Alumnado» y «Docentes» en lugar de «Materiales alumnado» y «Recursos docentes», para que el menú quepa junto al logo. Las páginas, las migas de pan y el pie mantienen el nombre completo.
- [x] **Licencias**: contenidos y materiales con CC BY-SA 4.0; software con la licencia de cada programa (GPL-3.0 EchidnaML, AGPL-3.0 el editor de LearningML, BSD-3-Clause los componentes de Scratch). La del hardware está pendiente (ver «Próximos pasos»).

## Próximos pasos

- [ ] **Urgente**: corregir la raíz de `rea.echidna.es`, cuyo `meta refresh` apunta a `kuku.es`, un dominio ajeno.
- [ ] Probar las maquetas publicadas y anotar los ajustes antes del paso 3.
- [ ] **Imágenes de las tarjetas**: buscar una imagen para las tarjetas que hoy salen sin ella, empezando por las páginas de EchidnaML que aún no la tienen (Descarga; las demás ya llevan su icono). Se pone en el campo `image` de cada página.
- [x] **Migrar a GitHub las situaciones de aprendizaje de eXeLearning** de `rea.echidna.es`: están en el repo [`situaciones-aprendizaje`](https://github.com/EchidnaEducacion/situaciones-aprendizaje) y sus tarjetas ya enlazan a GitHub Pages.
- [ ] **Redirigir `rea.echidna.es`** (quien administre el servidor): 301 de cada carpeta antigua a su copia en GitHub (ver [`redirecciones.md`](redirecciones.md#otros-dominios-y-rutas)) y, después, apagarlo.
- [ ] **Aclarar con Jorge Lobo la licencia de ¡La Tierra se mueve!**: los créditos dicen CC BY-SA y el pie de algunas páginas, CC BY-NC-SA 4.0.
- [ ] **Enlace roto en ¿Hace calor aquí?**: en «Créditos», la descarga «Ficha XY-Grid» apunta a `Alhambra2.sb3`, que no existe; hay que conseguir el fichero o quitar el enlace en el `.elp` y volver a exportar.
- [ ] **Alojar el manual de FP** (Manual EchidnaBlack de Xabier Rosas, PDF de 44 MB) fuera de WordPress antes de apagarlo, por ejemplo como *release* en GitHub (es demasiado grande para el repo de la web).
- [ ] **Materiales alumnado por hacer**: por ahora solo hay 8 materiales; faltan otros proyectos, Snap!, etc.
- [ ] **Formato del blog**: pendiente de que lo revise el equipo (entrada con lateral de categorías y recientes, y listado básico en `/blog/` en dos columnas con lateral, como el anterior). Después: páginas de categoría, etiqueta y autor, paginación y migración de las entradas.
- [ ] **Placas anteriores** (1.3) y **Entornos compatibles** (1.4) se dejan para el final de la migración.
- [ ] **Correcciones en el [manual](https://github.com/EchidnaEducacion/manual)**: en los modos de funcionamiento (2.2), la lista del modo sensores no incluye el sensor de luz (A3), que también comparte pin con una entrada MkMk; en el acelerómetro (4.1.6), la lista de valores dice que el eje Z baja de −2 al subir la placa rápidamente, pero el ejemplo y la física dicen que sube (más de 1,5); en la clasificación por función de la placa (2.1), el diagrama habla de «LED amarillo» en vez de naranja; en las características técnicas (7), el LED RGB da «65 535 colores», cuando son 256 × 256 × 256, más de 16 millones (en nuestra página Características técnicas ya está corregido).
- [ ] **Ficha Micrófono**: confirmar si la EchidnaBlack2 tiene el puente de soldadura que cambia la señal del micrófono (lo explicaba la web anterior, con su esquema, pero el manual no lo menciona). Si lo tiene, añadir el apartado y el esquema.
- [ ] **Revisar Modo sensores / Modo MkMk**: (1) el manual (2.2) no incluye el sensor de luz en la lista del modo sensores, aunque A3 se comparte con MkMk3; (2) la web anterior decía que en modo MkMk funcionan «todas las I/O», pero según su propio esquema A2 pasa a ser MkMk2. La página sigue los esquemas; confirmar con la placa.
- [ ] **Ficha Audio**: completarla con el potenciómetro de volumen y la salida de audio (jack), que ahora solo se mencionan en la descripción y en el esquema.
- [ ] **Siguiente**: Recursos docentes (`/docentes/`, colección `recursos`, organizados por material). Después, los últimos apartados de la EchidnaBlack2: Modo sensores / Modo MkMk, Complementos (con sus cinco páginas) y Alimentación.
- [ ] **Envío del formulario de contacto**: elegir el servicio, crear la cuenta con el correo de la asociación y poner su dirección en `PUBLIC_CONTACT_FORM_URL`. Hasta entonces, el formulario de `/contacta/` se ve pero no envía.
  - **Formspree** (recomendado): encaja con el formulario actual, porque solo pide su dirección (`https://formspree.io/f/…`) y ya entiende el campo antispam `_gotcha`. Guarda los mensajes en un panel. Plan gratuito: unos 50 mensajes al mes.
  - **Web3Forms**: no pide crear cuenta, solo un correo para obtener la clave. Habría que añadir un campo oculto con la clave y cambiar el antispam por `botcheck`. Plan gratuito: unos 250 mensajes al mes.
  - Antes de decidir, comprobar en sus webs los límites gratuitos actuales.
- [ ] Dar de alta la web en GoatCounter y añadir su script en el layout `Base` (`web/src/layouts/Base.astro`). La política de privacidad ya lo menciona.
- [ ] Servir las tipografías desde la propia web en lugar de Google Fonts, para no enviar a Google la IP de las visitas. Después, quitar esa línea de la política de privacidad.
- [ ] Crear la imagen que se muestra al compartir la web en redes (`og:image`) a partir del logo con texto, y añadirla en el layout `Base`.
- [x] Capturas de 1.1.4 Empezar con LearningML y 1.1.5 Instalar StandardFirmata: se usan las del manual, más actuales que `Aprender-Probar-LML.png` y `StandardFirmata-Echidna-400x263.jpg`.
- [ ] Buscar en el backup de `wp-content/uploads` las 2 imágenes perdidas del blog (`Icono_Scratch-1024x948.png` en *EchidnaScratch, el erizo y el gato se hacen amigos* y `ObradoiroTadega.png` en *Obradoiro Tadega 2019*); si no aparecen, sustituirlas o quitarlas.
- [ ] Generar los PDF de EchidnaBlack v1 y EchidnaShield antes de apagar WordPress y guardarlos en `web/public/ecosistema/placas-anteriores/`.
- [ ] **Licencia del hardware**: no se permite su reproducción con fines comerciales; falta que el responsable del diseño electrónico elija una licencia compatible con eso. Hay cuatro incoherencias que resolver (web actual, certificación OSHWA, repositorio `recursos` y web nueva), detalladas en [`estructura.md`](estructura.md#pendiente).

Los puntos pendientes de la estructura están en [`estructura.md`](estructura.md#pendiente).
