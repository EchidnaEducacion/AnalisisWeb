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

**Colecciones** (`web/src/content.config.ts`): `paginas` ✅ · `hardware` ✅ · `recursos` — · `blog` — · lista de `autores` ✅

| Plantilla | Plantilla real | Páginas hechas | Maqueta |
|---|---|---|---|
| Base | ✅ `layouts/Base.astro` | Todas | — |
| Portada | — | — | Se queda |
| Índice de sección | ✅ `layouts/Indice.astro` | [Ecosistema](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/), [EchidnaML](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/) | Borrada (Alumnado y Docentes conservan las suyas) |
| Ficha de hardware | ✅ `layouts/Ficha.astro` | [EchidnaBlack2](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/) (placa, con sus componentes), [Pulsadores](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/pulsadores/), [Joystick](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/joystick/), [Acelerómetro](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/acelerometro/), [Sensor de luz LDR](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/sensor-luz-ldr/), [LEDs ROG](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/leds/), [Audio](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/audio/) | Borrada |
| Página genérica | ✅ `layouts/Pagina.astro` | [Política de privacidad](https://echidnaeducacion.github.io/AnalisisWeb/politica-privacidad/), [Sobre el proyecto](https://echidnaeducacion.github.io/AnalisisWeb/quienes-somos/), [Licencias](https://echidnaeducacion.github.io/AnalisisWeb/quienes-somos/licencias/), [Características técnicas](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnablack2/caracteristicas-tecnicas/), [Descarga de EchidnaML](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/descarga/), [Conectar EchidnaML y EchidnaBlack](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/conectar-placa/), [Empezar con EchidnaBlocks](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/empezar-echidnablocks/), [Empezar con LearningML](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/empezar-learningml/), [Instalar StandardFirmata](https://echidnaeducacion.github.io/AnalisisWeb/ecosistema/echidnaml/instalar-standardfirmata/) | Borrada |
| Contacto | ✅ `layouts/Contacto.astro` (sin envío real) | [Contacta](https://echidnaeducacion.github.io/AnalisisWeb/contacta/) | Se queda |
| Entrada de blog | — | — | Se queda |
| Listado / taxonomía | — | — | Se queda |
| Error 404 | ✅ `pages/404.astro` (sin colección) | [Página no encontrada](https://echidnaeducacion.github.io/AnalisisWeb/no-existe/) | Borrada (era la propia página) |

**Plantilla real**: ✅ cuando el *layout* está alimentado por su colección. **Maqueta**: «Borrada» cuando la plantilla real la iguala.

Última actualización: 2026-10-09.

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
- [ ] **Imágenes de las tarjetas**: buscar una imagen para las tarjetas que hoy salen sin ella, empezando por las páginas de EchidnaML (Descarga, Conectar EchidnaML y EchidnaBlack, Empezar con EchidnaBlocks y Empezar con LearningML). Se pone en el campo `image` de cada página.
- [ ] **Placas anteriores** (1.3) y **Entornos compatibles** (1.4) se dejan para el final de la migración.
- [ ] **Correcciones en el [manual](https://github.com/EchidnaEducacion/manual)**: en el acelerómetro (4.1.6), la lista de valores dice que el eje Z baja de −2 al subir la placa rápidamente, pero el ejemplo y la física dicen que sube (más de 1,5); en la clasificación por función de la placa (2.1), el diagrama habla de «LED amarillo» en vez de naranja.
- [ ] **Ficha Audio**: completarla con el potenciómetro de volumen y la salida de audio (jack), que ahora solo se mencionan en la descripción y en el esquema.
- [ ] **Siguiente**: las fichas de los demás componentes de la EchidnaBlack2, con la plantilla Ficha de hardware y el material del manual (como LEDs ROG). Después, Materiales alumnado y Recursos docentes (colección `recursos`) y el blog.
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
