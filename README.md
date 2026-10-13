# Web de Echidna

Web de **[echidna.es](https://echidna.es/)** (Echidna Educación): una web estática escrita en Markdown, generada con Astro y alojada en GitHub Pages, que sustituye a la anterior en WordPress.

La web está en [`web/`](web/) y se publica en **<https://echidnaeducacion.github.io/>** con cada *push* a `main` que toque `web/`. Para verla en local:

```sh
cd web
bun install
bun run dev      # http://localhost:4321/
```

Cómo está organizado el proyecto, cómo migrar una página y cómo funciona el buscador: [`web/README.md`](web/README.md).

## Índice

1. [Documentos](#documentos)
2. [Tecnología](#tecnología)
3. [Decisiones tomadas](#decisiones-tomadas)
4. [Próximos pasos](#próximos-pasos)

---

## Documentos

| Documento | Contenido |
|---|---|
| [`estructura.md`](estructura.md) | Árbol de páginas, URL, plantillas, criterios de navegación y puntos pendientes de la estructura |
| [`modelo-contenido.md`](modelo-contenido.md) | Colecciones de contenido y sus campos (`paginas`, `hardware`, `recursos`, `blog`) |
| [`escribir-blog.md`](escribir-blog.md) | Cómo escribir y publicar una entrada nueva del blog |
| [`diseno.md`](diseno.md) | Hoja de ruta para personalizar el diseño de la web y cómo proponer cambios de diseño |
| [`publicaciones.md`](publicaciones.md) | Listado de trabajo de publicaciones sobre Echidna (página Publicaciones) |
| [`redirecciones.md`](redirecciones.md) | Correspondencia entre las URL de WordPress y las de la nueva web |
| [`web/README.md`](web/README.md) | Proyecto Astro: cómo ejecutarlo, cómo está organizado y cómo migrar una página |
| [`AGENTS.md`](AGENTS.md) | Contexto y normas de trabajo para asistentes y personas que colaboren en el repo (`CLAUDE.md` lo importa) |
| [`traslado-repo.md`](traslado-repo.md) | Histórico: plan con el que la web pasó a servirse en la raíz desde este repositorio |
| [`analisis-previo.md`](analisis-previo.md) | Histórico: estudio de viabilidad inicial (situación de partida, tecnologías, inventario y prueba de concepto anterior) |

## Tecnología

| Necesidad | Solución |
|---|---|
| Generador | **Astro** con **Bun**; *content collections* validadas con Zod |
| Alojamiento | **GitHub Pages**, con el dominio `echidna.es` (fichero `CNAME` + DNS) |
| Despliegue | **GitHub Actions**: `deploy.yml` compila y publica con cada *push* a `main`; `comprobar.yml` compila cada *pull request* |
| Buscador | **Pagefind** |
| Formulario de contacto | **Web3Forms** (servicio externo que envía los mensajes por correo), con **hCaptcha** contra el *spam* |
| Analítica | **GoatCounter**, sin cookies |
| Imágenes | Procesado de imágenes de Astro (redimensionado, WebP) |
| Manual y guías de inicio | Repos propios en GitHub Pages, enlazados desde `echidna.es` con redirecciones |

Las alternativas valoradas y los motivos de la elección están en [`analisis-previo.md`](analisis-previo.md#fase-2--tecnologías).

## Decisiones tomadas

**Proyecto**

- [x] Edición: personal con conocimientos de Git y GitHub, **sin CMS**.
- [x] **La web se sirve en la raíz desde este repositorio** (octubre de 2026): este repositorio (antes `AnalisisWeb`, porque empezó como estudio de viabilidad) pasó a llamarse `EchidnaEducacion.github.io`, y la web, en `web/`, se sirve en la raíz sin `base`. La prueba de concepto que ocupaba ese nombre está archivada como `web-prueba-concepto`. Así se conservan el historial y los ajustes de Pages; el plan está en [`traslado-repo.md`](traslado-repo.md).
- [x] El **Manual** sigue en su repo actual y se sirve en `echidna.es/manual/`.
- [x] **Habrá versión en inglés**: el modelo de contenido y las plantillas deben contemplar ES/EN desde el principio (campo `translation`, selector de idioma, rutas `/en/…`, menús y textos de interfaz traducibles).
- [x] **Redirecciones antes del cambio de DNS**: las URL antiguas de la web (la lista, en [`redirecciones.md`](redirecciones.md)) redirigen a las nuevas con `redirects` en `web/astro.config.mjs` (la lista está en `web/redirecciones.mjs`), para que funcionen desde el primer momento.
- [x] **Licencias**: contenidos y materiales con CC BY-SA 4.0; software con la licencia de cada programa (GPL-3.0 EchidnaML, AGPL-3.0 el editor de LearningML, BSD-3-Clause los componentes de Scratch). La del hardware está pendiente (ver [Próximos pasos](#próximos-pasos)).
- [x] **Imagen y etiquetas para redes** (octubre de 2026): todas las páginas llevan las etiquetas Open Graph (título, descripción, URL canónica) y la imagen `web/public/imagen-redes.png` (1200 × 630, el logo sobre el fondo de la web), que genera `bun run imagen-redes`. Por ahora es la misma imagen para todas las páginas.
- [x] **Tipografías servidas desde la propia web** (octubre de 2026): Astro las descarga de Google Fonts al hacer el *build* (`fonts` en `web/astro.config.mjs`), así que las visitas no se conectan a Google ni le envían su IP, y la política de privacidad no tiene que mencionarlo.
- [x] **Analítica con GoatCounter**: gratuito para proyectos sin ánimo de lucro, de código abierto y sin cookies, así que no necesita aviso de consentimiento. Mide visitas, páginas más vistas y procedencia sin datos personales. Se descarta GA4 por las cookies y el envío de datos a Google. El script se carga en el layout `Base` solo si existe la variable del repositorio `PUBLIC_GOATCOUNTER_CODE` (el código del sitio, la parte `xxx` de `xxx.goatcounter.com`), y no cuenta las visitas desde `localhost`. En los ajustes de GoatCounter, el dominio del sitio es `echidna.es`: solo afecta a los enlaces del panel, porque las visitas se cuentan por ruta.
- [x] **Formulario de contacto con Web3Forms** (octubre de 2026): servicio externo con cuenta de la asociación que reenvía los mensajes por correo. Su clave de acceso es pública (va en el HTML) y se guarda como variable del repositorio, `PUBLIC_WEB3FORMS_KEY` (*Settings → Secrets and variables → Actions → Variables*). Como cualquiera podría usarla y la restricción por dominio es de pago, el formulario lleva **hCaptcha** (gratuito en Web3Forms), activado como protección antispam en el panel de Web3Forms: sin él resuelto, Web3Forms rechaza el envío. Si se cambia la clave o el formulario de Web3Forms, hay que mantener hCaptcha activado allí.
- [x] **`rea.echidna.es` no pasa a GitHub** (octubre de 2026): se mantiene en el servidor de OVH hasta que `echidna.es` pase a GitHub Pages y entonces se apaga, sin redirecciones: sus direcciones antiguas dejarán de funcionar. Las situaciones de aprendizaje siguen en el repo [`situaciones-aprendizaje`](https://github.com/EchidnaEducacion/situaciones-aprendizaje), publicadas en `echidnaeducacion.github.io/situaciones-aprendizaje/` (con el dominio, `echidna.es/situaciones-aprendizaje/`).

**Diseño y contenido**

- [x] **Los componentes MDX sirven para contenido** (vídeo, galería, descarga, aviso, tarjeta), **no para maquetar**: la disposición en columnas la decide el *layout*.
- [x] **Rótulos cortos en el menú**: «Alumnado» y «Docentes» en lugar de «Materiales alumnado» y «Recursos docentes», para que el menú quepa junto al logo. Las páginas, las migas de pan y el pie mantienen el nombre completo.
- [x] **Enlaces externos en una pestaña nueva** (octubre de 2026): las tarjetas de la colección `recursos` y las de las páginas (campo `cards`) que enlazan fuera de la web (situaciones de aprendizaje, guías, manual, PDF…), los enlaces externos del texto en Markdown y los del pie (redes sociales, manual y guía de inicio) se abren con `target="_blank"`, para no perder la página de la web; los que enlazan a páginas propias se abren en la misma pestaña.
- [x] **Complementos según el manual** (octubre de 2026): las fichas de complementos son las del apartado 4.2 del manual (servomotor de posición, servomotor de rotación continua, sensor de distancia de infrarrojos y sensor de humedad del suelo). «Complementos conexiones MkMk» y «Bluetooth», que estaban en la web anterior, no tienen ficha: sus URL redirigen a la ficha Conexiones MkMk y a Características técnicas. En general, si la web anterior y el manual no coinciden, manda el manual.
- [x] **Buscador con Pagefind**: el *build* genera el índice y el cuadro de la cabecera muestra los resultados agrupados por sección, también desde el formulario de la 404. Se indexan las páginas de contenido, las fichas y las entradas; no la portada, los listados ni las maquetas. Detalles en [`web/README.md`](web/README.md#buscador).

**Blog**

- [x] **Formato del blog** aprobado por el equipo (octubre de 2026): listado en dos columnas de tarjetas, paginado de 12 en 12, y un lateral con categorías, últimas entradas y etiquetas.
- [x] **Entradas nuevas del blog por *pull request*** (octubre de 2026): cada entrada se escribe en local en su rama, creada con `bun run nueva-entrada` (en borrador, que solo se ve en el servidor de desarrollo), y se publica al fusionar la PR después de que otra persona del equipo la revise. El workflow `comprobar.yml` construye la web en cada PR para detectar errores de validación. Sin publicación programada por ahora. El flujo está en [`escribir-blog.md`](escribir-blog.md).
- [x] **Etiquetas del blog con vocabulario cerrado** (octubre de 2026): 21 etiquetas en cinco grupos (placas, entornos, componentes, temas y eventos), cada una en al menos dos entradas y sin repetir categorías. La lista y los criterios para asignarlas están en [`modelo-contenido.md`](modelo-contenido.md#etiquetas-del-blog).
- [x] **Sin comentarios en el blog**: solo hubo 9 en 6 años y Giscus obligaría a tener cuenta de GitHub. Los 9 comentarios antiguos se descartan. Al final de cada entrada se invita a escribir desde `/contacta/`.
- [x] **RSS del blog**: las 20 últimas entradas en `/rss.xml` y una copia en `/feed/` (la dirección de WordPress), enlazado desde el pie, el lateral del blog y el `<head>`. Generado en `web/src/lib/rss.ts`, sin dependencias.

## Próximos pasos

### Puesta en marcha

- [ ] **Urgente**: corregir la raíz de `rea.echidna.es` (servidor de OVH), cuyo `meta refresh` apunta a `kuku.es`, un dominio ajeno. Mientras ese servidor siga encendido.
- [ ] **Apagar `rea.echidna.es`** al pasar `echidna.es` a GitHub Pages (ver [`redirecciones.md`](redirecciones.md#otros-dominios-y-rutas)): borrar su registro en el DNS de OVH junto con el servidor.

### Contenido

- [ ] **Recursos docentes** (`/docentes/`), material a material: terminar las diapositivas (PDF) y la programación didáctica de Proyectos de inicio con EchidnaML (hoy «Próximamente»; al terminarlas, poner su `url` en `recursos.yaml`) y añadir los demás materiales: situaciones de aprendizaje, Snap!, Proyectos de inicio con Arduino IDE y Otros recursos. Al añadirlos, montar las rutas intermedias de `/docentes/` que faltan en las redirecciones ([pendiente](redirecciones.md#pendiente)).
- [ ] **Materiales alumnado por hacer**: por ahora solo hay 8 materiales; faltan otros proyectos, Snap!, etc.
- [ ] **Snap!** (1.4.2): la página está hecha con la descripción del entorno; faltan la librería de bloques para la EchidnaBlack2 (repo `S4A-EchidnaBlack2C`) y una guía para el aula.
- [ ] **Imágenes de las tarjetas**: buscar una imagen para las tarjetas que hoy salen sin ella (las de EchidnaML ya la tienen). Se pone en el campo `image` de cada página.
- [ ] **Modelos e impresión 3D**: Soportes 90º no tiene README en el repo `recursos`.
- [ ] **Enlace roto en ¿Hace calor aquí?**: en «Créditos», la descarga «Ficha XY-Grid» apunta a `Alhambra2.sb3`, que no existe; hay que conseguir el fichero o quitar el enlace en el `.elp` y volver a exportar.
- [ ] **Entradas del blog por completar**: 4 sin portada (¡Volvemos a esLibre!, esLibre 2023, Cultura Maker 22 e Inteligencia artificial con Echidna).
- [ ] **Revisar las entradas importadas**: en Arte cinético, «Archivo sb3» enlaza al PDF de la plantilla (error de la web anterior): falta el enlace al `.sb3`.
- [ ] Buscar la imagen perdida del blog `Icono_Scratch-1024x948.png` (*EchidnaScratch, el erizo y el gato se hacen amigos*): no está en la caché de la importación (`herramientas/wp-import/.cache/`) ni ya en WordPress; queda el backup de `wp-content/uploads`. Al importar se quitó de la entrada; si aparece, volver a ponerla.

### Diseño

- [ ] **Personalizar el diseño** con la diseñadora, según la hoja de ruta de [`diseno.md`](diseno.md). Lo primero, por parte del equipo: confirmar Figma, darle acceso a GitHub con la etiqueta `diseño`, y preparar la guía de estilo (`/maquetas/guia-estilo/`), las páginas en Figma y el fichero base con las variables de `echidna.css` ([fase 1](diseno.md#fase-1--material-de-partida)).

### Comprobaciones con el equipo o con la placa

- [ ] **Licencia del hardware**: no se permite su reproducción con fines comerciales; falta que el responsable del diseño electrónico elija una licencia compatible con eso. Hay cuatro incoherencias que resolver (web actual, certificación OSHWA, repositorio `recursos` y web nueva), detalladas en [`estructura.md`](estructura.md#pendiente).
- [ ] **Aclarar con Jorge Lobo la licencia de ¡La Tierra se mueve!**: los créditos dicen CC BY-SA y el pie de algunas páginas, CC BY-NC-SA 4.0.
- [ ] **Número del certificado CE de la EchidnaBlack2**: falta en el apartado Certificaciones de Características técnicas. El que daba la web anterior (AT1813C601983126) es de otra placa.
- [ ] **Revisar Modo sensores / Modo MkMk**: (1) el manual (2.2) no incluye el sensor de luz en la lista del modo sensores, aunque A3 se comparte con MkMk3; (2) la web anterior decía que en modo MkMk funcionan «todas las I/O», pero según su propio esquema A2 pasa a ser MkMk2. La página sigue los esquemas; confirmar con la placa.
- [ ] **Repos de comprobación de la placa**: el README de `echidna-sensor-test` habla de «Arduino Uno» (la placa es compatible con Arduino Nano) y el de `echidna-fab-test` de la placa «FAB Echidna»; conviene unificarlos con el nombre EchidnaBlack2. El manual (9.2) llama CH340 al chip y CH341 al controlador, que es correcto pero confunde: la página Comprobar la placa lo explica.
- [ ] **Correcciones en el [manual](https://github.com/EchidnaEducacion/manual)**: están como *issues* en su repositorio, que es donde se trabajan y se cierran (en la web ya está corregido o se sigue lo que se comprueba en la placa):
  - [#21](https://github.com/EchidnaEducacion/manual/issues/21) Título (`site_name`): es de la EchidnaBlack2.
  - [#22](https://github.com/EchidnaEducacion/manual/issues/22) 2.1: el diagrama dice «LED amarillo» en vez de naranja.
  - [#23](https://github.com/EchidnaEducacion/manual/issues/23) 2.2: falta el sensor de luz en el modo sensores.
  - [#24](https://github.com/EchidnaEducacion/manual/issues/24) 4.1.6 Acelerómetro: el eje Z sube al elevar la placa.
  - [#25](https://github.com/EchidnaEducacion/manual/issues/25) 4.2.1 Servomotor de posición: el texto del ejemplo no coincide con el programa (sentido, espera y pin; nuestra ficha sigue el programa).
  - [#26](https://github.com/EchidnaEducacion/manual/issues/26) 4.2.2 Servomotor de rotación continua: la conexión va a A2 y el programa usa D4.
  - [#27](https://github.com/EchidnaEducacion/manual/issues/27) 4.2.3 Sensor de infrarrojos: el ejemplo habla de distancia donde es la lectura.
  - [#28](https://github.com/EchidnaEducacion/manual/issues/28) 4.2.4 Sensor de humedad: el texto explica un sensor resistivo y la imagen es capacitiva; hay que comprobarlo con un sensor real (nuestra ficha sigue el manual).
  - [#29](https://github.com/EchidnaEducacion/manual/issues/29) 7: el LED RGB da más de 16 millones de colores.

### Más adelante

- [ ] **Tamaño de las capturas de programas** (`programa-*.png`): vienen con zooms distintos y los bloques salen más grandes en unas páginas que en otras. Idea: elegir un programa cuyo tamaño en pantalla nos parezca adecuado, medir en él el ancho del bloque «al hacer clic en bandera verde» y mostrar las demás a esa misma escala, midiendo el mismo bloque en cada una (con un script que lo busque, mejor que a mano).
  - Medir el ancho mejor que el alto: es mayor, así que el error pesa menos, y el alto incluye la curva superior.
  - Los programas que no empiezan con la bandera verde (p. ej. con «al presionar tecla») necesitan otra referencia, como el alto de un bloque normal de una línea.
  - No ampliar ficheros (se ven borrosos). Dos opciones: reducir los ficheros a la escala elegida, o dejarlos como están y fijar en la web el ancho de cada uno (ancho natural × escala).
- [ ] **Versión en inglés** (último paso, cuando esté todo lo demás resuelto): aún no hay ninguna página en inglés. El modelo ya contempla la carpeta `en/` y el campo `translation`, pero faltan las rutas `/en/…`, el selector de idioma, los menús y textos de interfaz traducidos y decidir qué páginas se traducen (y en qué orden).

Los puntos pendientes de la estructura están en [`estructura.md`](estructura.md#pendiente).
