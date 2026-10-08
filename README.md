# Nueva web de Echidna

Planificación e implementación de la nueva web de **[echidna.es](https://echidna.es/)**: una web estática escrita en Markdown, generada con Astro y alojada en GitHub Pages, que sustituye a la actual en WordPress.

La web está en [`web/`](web/) y se puede ver publicada en **<https://echidnaeducacion.github.io/AnalisisWeb/>**.

## Índice

1. [Documentos](#documentos)
2. [Tecnología](#tecnología)
3. [Plan de implementación](#plan-de-implementación)
4. [Decisiones tomadas](#decisiones-tomadas)
5. [Próximos pasos](#próximos-pasos)

---

## Documentos

| Documento | Contenido |
|---|---|
| [`estructura.md`](estructura.md) | Árbol de páginas, URL, plantillas, criterios de navegación y puntos pendientes de la estructura |
| [`modelo-contenido.md`](modelo-contenido.md) | Colecciones de contenido y sus campos (`paginas`, `hardware`, `recursos`, `blog`) |
| [`redirecciones.md`](redirecciones.md) | Correspondencia entre las URL de WordPress y las de la nueva web |
| [`analisis-previo.md`](analisis-previo.md) | Estudio de viabilidad inicial: situación de partida, ventajas e inconvenientes, tecnologías, inventario y análisis de la prueba de concepto anterior |
| [`web/README.md`](web/README.md) | Proyecto Astro: cómo ejecutarlo y cómo está organizado |

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

La implementación se hace en este repositorio, en el directorio [`web/`](web/). Orden: **modelo de contenido → páginas maestras → diseño → migración por secciones**.

### Paso 1 – Modelo de contenido

El modelo está definido en [`modelo-contenido.md`](modelo-contenido.md): cuatro colecciones (`paginas`, `hardware`, `recursos` y `blog`), campos en inglés, validación estricta con Zod (`title` y `description` obligatorios y sin valores vacíos) e idioma por carpetas.

- Al implementarlo, trasladarlo a `web/src/content.config.ts` y resumirlo en `AGENT.md` y en el README de la web.

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

### Paso 3 – Diseño

- Para cada página maestra, elegir 1 o 2 páginas reales y limpiarlas a mano para usarlas como banco de pruebas del diseño. Ejemplos: `hardware/componentes/leds`, la página de Materiales alumnado, una entrada antigua y una reciente.
- Partir de los tokens de `tokens.css`, revisar móvil y accesibilidad, y cerrar el diseño antes de migrar en bloque.

### Paso 4 – Migración por secciones

1. **Ecosistema**: EchidnaBlack2 con sus componentes y complementos, EchidnaML (1.1 y 1.1.1), Placas anteriores (con sus PDF) y Entornos compatibles.
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

## Próximos pasos

- [ ] **Urgente**: corregir la raíz de `rea.echidna.es`, cuyo `meta refresh` apunta a `kuku.es`, un dominio ajeno.
- [ ] Dar de alta la web en GoatCounter, añadir su script en el layout `Base` (`web/src/layouts/Base.astro`) y mencionarlo en la política de privacidad.
- [ ] Hacer capturas nuevas para 1.1 EchidnaML y 1.1.1 Instalar StandardFirmata al redactarlas (sustituyen a `Aprender-Probar-LML.png` y `StandardFirmata-Echidna-400x263.jpg`).
- [ ] Buscar en el backup de `wp-content/uploads` las 2 imágenes perdidas del blog (`Icono_Scratch-1024x948.png` en *EchidnaScratch, el erizo y el gato se hacen amigos* y `ObradoiroTadega.png` en *Obradoiro Tadega 2019*); si no aparecen, sustituirlas o quitarlas.
- [ ] Generar los PDF de EchidnaBlack v1 y EchidnaShield antes de apagar WordPress y guardarlos en `web/public/ecosistema/placas-anteriores/`.
- [ ] Quitar la maqueta `web/src/pages/actividad.astro`: la plantilla «Actividad» ya no se usa.

Los puntos pendientes de la estructura están en [`estructura.md`](estructura.md#pendiente).
