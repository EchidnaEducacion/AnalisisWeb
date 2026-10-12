# Hoja de ruta del diseño

Plan para personalizar el diseño de la web, que hoy funciona bien pero tiene un aspecto genérico. Lo hace una diseñadora con experiencia en maquetación, cartelería y logos con Adobe (Illustrator e InDesign) y poca en web. Por eso propone los cambios con herramientas visuales, sin tocar HTML ni CSS, y el equipo los lleva a la web.

## Índice

1. [Punto de partida](#punto-de-partida)
2. [Fases](#fases)
   1. [Fase 0 · Arranque](#fase-0--arranque)
   2. [Fase 1 · Material de partida](#fase-1--material-de-partida)
   3. [Fase 2 · Identidad](#fase-2--identidad)
   4. [Fase 3 · Panel de estilo](#fase-3--panel-de-estilo)
   5. [Fase 4 · Maquetación de páginas](#fase-4--maquetación-de-páginas)
   6. [Fase 5 · Llevarlo a la web](#fase-5--llevarlo-a-la-web)
   7. [Fase 6 · Mantenimiento](#fase-6--mantenimiento)
3. [Formación](#formación)
4. [Pautas para diseñar la web](#pautas-para-diseñar-la-web)
5. [Cómo proponer un cambio de diseño](#cómo-proponer-un-cambio-de-diseño)
6. [Pendiente](#pendiente)

---

## Punto de partida

El diseño está montado de forma que se puede cambiar mucho tocando poco:

- **Una sola hoja de estilos**: [`web/public/assets/css/echidna.css`](web/public/assets/css/echidna.css), organizada en siete apartados (variables, base, utilidades, cabecera y pie, componentes, bloques de cada plantilla e impresión).
- **Variables de diseño** al principio de esa hoja (`:root`): el color de marca (`--brand`…), los neutros (`--bg`, `--surface`, `--ink`, `--line`…), un color por sección (`--c-ecosistema`, `--c-alumnado`, `--c-docentes`, `--c-blog`, `--c-nosotros`), los avisos, los radios, las sombras y los anchos, cada uno con su versión para el modo oscuro. Cambiando solo esas variables, cambia el aspecto de toda la web.
- **Tipografías**: se eligen en la lista `tipografias` de [`web/astro.config.mjs`](web/astro.config.mjs) (hoy Exo 2 para títulos, Atkinson Hyperlegible para el texto, JetBrains Mono para el código y Open Sans para el nombre del logo) y se sirven desde la propia web.
- **Maquetas**: las páginas de [`web/src/pages/maquetas/`](web/src/pages/maquetas/) se publican en `/maquetas/` sin afectar a las páginas reales. Sirven para enseñar una propuesta en una URL pública antes de aplicarla.

## Fases

### Fase 0 · Arranque

Una semana, con la diseñadora y el equipo.

- **Reunión inicial**: recorrido por la web publicada y por las maquetas, qué gusta y qué no. Se recogen tres o cuatro webs de referencia.
- **GitHub**: darle acceso a la organización `EchidnaEducacion` y crear la etiqueta **`diseño`** para los *issues*. Le basta con saber abrir un *issue*, comentar y adjuntar imágenes.
- **Herramienta: Figma**, con el plan gratuito. Desde Illustrator el paso es natural: se trabaja con mesas de trabajo (*frames*), importa SVG y admite copiar y pegar desde Illustrator. Los ficheros se comparten con un enlace y se comenta sobre ellos.

### Fase 1 · Material de partida

La prepara el equipo, para que la diseñadora no parta de cero.

- **Guía de estilo** (`/maquetas/guia-estilo/`): una sola página con todas las piezas de la web, en modo claro y oscuro: colores por sección, títulos, párrafos, enlaces, botones, chips, tarjetas, avisos, descargas, tablas, migas de pan, cabecera y pie. Es el catálogo de lo que hay que diseñar.
- **Las páginas en Figma**: capturas (o importación con el *plugin* html.to.design) de las plantillas principales a 1440 px y 390 px de ancho: portada, índice de sección, ficha de hardware, listado del blog y entrada.
- **Fichero base de Figma** con variables de color, tipografía y radios que se llaman **igual que en `echidna.css`** (`brand`, `c-alumnado`, `radius`…), con un modo claro y otro oscuro. Lo que se cambie ahí se pasa línea a línea al CSS.

### Fase 2 · Identidad

El terreno de la diseñadora. Primero lo global, que es lo que más cambia con menos esfuerzo:

- **Paleta**: color de marca y uno por sección, con su versión para el modo oscuro. El contraste del texto tiene que cumplir el nivel AA (se comprueba con un *plugin* de Figma).
- **Tipografías**: de Google Fonts o con otra licencia libre, porque la web las sirve ella misma. Una para títulos y otra para el texto; la del texto, muy legible, porque la web se proyecta en el aula.
- **Formas**: radios, sombras, grosor de líneas y estilo de iconos e ilustraciones (el equidna, los dibujos de los componentes).
- **Logo y favicon**, si se quieren retocar, y la imagen para compartir en redes, que se genera a partir del logo con `bun run imagen-redes`.

Entregable: el fichero de Figma con las variables rellenas y una lámina con las piezas de la guía de estilo ya con el estilo nuevo.

### Fase 3 · Panel de estilo

La prepara el equipo: una página `/maquetas/panel/` parecida al «Personalizar» de WordPress, para probar la identidad sobre la web de verdad.

- Selectores de color, una lista de tipografías y deslizadores de radio y sombra que se aplican al momento sobre la guía de estilo y sobre las páginas reales, mostradas en un marco.
- Un botón **«Copiar propuesta»** que genera el bloque de variables, listo para pegarlo en un *issue*.

### Fase 4 · Maquetación de páginas

Con la identidad cerrada, en Figma, a 1440 y 390 px, en este orden:

1. Cabecera y pie, que aparecen en todas las páginas.
2. Portada.
3. Índice de sección (Ecosistema, Materiales alumnado, Recursos docentes).
4. Ficha de hardware.
5. Blog: listado y entrada.
6. Páginas genéricas (Quiénes somos, Contacto).

### Fase 5 · Llevarlo a la web

Lo hace el equipo, página a página:

- Cada propuesta aprobada se abre como *issue* con la etiqueta `diseño` y el enlace a Figma.
- Se trabaja en una rama propia. Primero se publica como **maqueta** en `/maquetas/` para que la diseñadora la revise en el navegador, también en el móvil, y comente en el *issue*. Cuando la da por buena, se pasa a la plantilla real y se fusiona.
- Orden: primero las variables (un solo cambio en `echidna.css` y en `tipografias`), luego la cabecera y el pie, y después cada plantilla.
- Las decisiones y las incoherencias que aparezcan se apuntan en este documento.

### Fase 6 · Mantenimiento

- La guía de estilo y el fichero de Figma quedan como referencia del diseño: toda pieza nueva se diseña primero ahí.
- Los cambios siguen el flujo de [«Cómo proponer un cambio de diseño»](#cómo-proponer-un-cambio-de-diseño).

## Formación

En paralelo a las fases 0 a 2:

- **Figma para quien viene de Illustrator** (2 sesiones): *frames*, *auto layout*, variables y componentes.
- **Conceptos de diseño web** (1 sesión): diseño adaptable, puntos de corte, modo oscuro, contraste y por qué no se diseña a píxel fijo.
- **Opcional**: cambiar un color en vivo con las herramientas de desarrollo del navegador (F12).

## Pautas para diseñar la web

- **Anchos**: la página tiene como máximo 1200 px y el texto, unos 72 caracteres por línea; los márgenes laterales van de 16 px en móvil a 32 px en escritorio.
- **Móvil primero**: todo tiene que funcionar a 390 px de ancho, y el menú se pliega por debajo de 1100 px.
- **Color por sección**: Ecosistema, Alumnado, Docentes, Blog y Quiénes somos tienen cada una su color de acento, que ayuda a saber dónde se está.
- **Modo claro y oscuro**: cada color necesita su pareja para el modo oscuro.
- **El contenido cambia**: los textos y las imágenes salen de ficheros Markdown, así que cambian de longitud y de proporción. Hay que diseñar pensando en títulos largos y cortos, y en tarjetas con y sin imagen.
- **Accesibilidad**: contraste AA, texto de al menos 16 px y foco visible al navegar con teclado.

## Cómo proponer un cambio de diseño

1. Diseñarlo en Figma o probarlo en el panel de estilo.
2. Abrir un *issue* con la etiqueta `diseño`, con el enlace a Figma o el bloque copiado del panel, y una captura.
3. El equipo lo publica como maqueta en `/maquetas/` y la diseñadora la revisa.
4. Cuando está aprobado, se aplica a la plantilla real.

## Pendiente

- [ ] Confirmar con el equipo el uso de Figma y apuntarlo en «Decisiones tomadas» del [README](README.md#decisiones-tomadas).
- [ ] Dar acceso a GitHub a la diseñadora y crear la etiqueta `diseño`.
- [ ] Fase 1: guía de estilo, páginas en Figma y fichero base con las variables.
- [ ] Fase 3: panel de estilo.
