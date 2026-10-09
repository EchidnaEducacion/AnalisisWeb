# Estructura de la web

Estructura propuesta para la nueva web de Echidna. Las **URL** y las **plantillas** son una propuesta pendiente de revisar.

## Índice

1. [Árbol](#árbol)
2. [Tabla](#tabla)
3. [Cambios respecto al texto original](#cambios-respecto-al-texto-original)
4. [Pendiente](#pendiente)

---

## Árbol

```text
0. Inicio
├── 1. Ecosistema
│   ├── 1.1 EchidnaML
│   │   ├── 1.1.1 Descarga
│   │   ├── 1.1.2 Conectar EchidnaML y EchidnaBlack
│   │   ├── 1.1.3 Empezar con EchidnaBlocks
│   │   ├── 1.1.4 Empezar con LearningML
│   │   └── 1.1.5 Instalar StandardFirmata
│   ├── 1.2 EchidnaBlack2
│   │   ├── 1.2.1 Pulsadores
│   │   ├── 1.2.2 Joystick
│   │   ├── 1.2.3 Sensor de luz LDR
│   │   ├── 1.2.4 Acelerómetro
│   │   ├── 1.2.5 Micrófono
│   │   ├── 1.2.6 Sensor de temperatura
│   │   ├── 1.2.7 LED RGB
│   │   ├── 1.2.8 LEDs ROG
│   │   ├── 1.2.9 Audio
│   │   ├── 1.2.10 Conexiones MkMk
│   │   ├── 1.2.11 Puesta en marcha
│   │   ├── 1.2.12 Modo sensores / Modo MkMk
│   │   ├── 1.2.13 Alimentación
│   │   ├── 1.2.14 Complementos
│   │   │   ├── 1.2.14.1 Servomotor de posición
│   │   │   ├── 1.2.14.2 Servomotor continuo
│   │   │   ├── 1.2.14.3 Infrarrojos distancia
│   │   │   ├── 1.2.14.4 Complementos conexiones MkMk
│   │   │   └── 1.2.14.5 Bluetooth
│   │   ├── 1.2.15 Documentación
│   │   └── 1.2.16 Características técnicas
│   ├── 1.3 Placas anteriores (EchidnaBlack v1 y EchidnaShield)
│   └── 1.4 Entornos compatibles
├── 2. Materiales alumnado                 (una sola página; todos son enlaces externos)
│   ├── EchidnaML                           (título dentro de la página)
│   │   ├── Proyectos                       (subtítulo)
│   │   │   └── 2.1 Proyectos de inicio con EchidnaML
│   │   └── Situaciones de aprendizaje      (subtítulo)
│   │       └── 2.2 ¿Hace calor aquí?, Andalucía del alba al anochecer, ¡La Tierra se mueve! y Aprendiendo con robots
│   └── Arduino IDE                         (título)
│       ├── Proyectos                       (subtítulo)
│       │   └── 2.3 Proyectos de inicio con Arduino IDE
│       └── Guías                           (subtítulo)
│           └── 2.4 Manual EchidnaBlack para FP
├── 3. Recursos docentes                   (una sola página)
│   ├── Proyectos de inicio con EchidnaML   (título dentro de la página)
│   │   ├── 3.1 Diapositivas
│   │   └── 3.2 Guía docente
│   ├── Situaciones de aprendizaje          (un título por SdA)
│   │   └── 3.3 Recursos docentes de cada SdA
│   ├── Snap!                               (título; sin contenido de momento)
│   │   └── 3.4 Recursos docentes de Snap!
│   ├── Proyectos de inicio con Arduino IDE (título)
│   │   └── 3.5 Recursos docentes de Arduino IDE
│   └── Otros recursos                      (título)
│       ├── 3.6 Manual de usuario
│       ├── 3.7 Modelos e impresión 3D
│       ├── 3.8 Cómo colaborar
│       └── 3.9 Comprobar la placa
├── 4. Blog
└── 5. Quiénes somos                        (menú desplegable)
    ├── 5.1 Sobre el Proyecto Echidna
    ├── 5.2 Contacto
    └── 5.3 Publicaciones

Fuera del menú (enlazada desde 1.2 y el pie)
└── Quiero una

Pie (fuera del menú, en todas las páginas)
├── Política de privacidad
├── Licencias
└── Iconos: GitHub, YouTube, X y RSS
```

## Tabla

**Nivel**: «Fuera del menú» = página enlazada desde otras páginas, sin entrada en el menú; «Pie» = enlazada solo desde el pie, fuera del menú; 0 = portada, 1 = sección, 2 = subsección, 3 = página dentro de una subsección, 4 = página dentro de una página de nivel 3.
**Plantilla**: nombres de las páginas maestras del [README (Fase 5, paso 2)](README.md#paso-2--páginas-maestras).

| Nivel | Nombre | URL (propuesta) | Plantilla (propuesta) |
|---|---|---|---|
| 0 | Inicio | `/` | Portada |
| 1 | Ecosistema | `/ecosistema/` | Índice de sección |
| 2 | 1.1 EchidnaML | `/ecosistema/echidnaml/` | Índice de sección (presenta EchidnaML y muestra una tarjeta por cada página hija) |
| 3 | 1.1.1 Descarga | `/ecosistema/echidnaml/descarga/` | Página genérica |
| 3 | 1.1.2 Conectar EchidnaML y EchidnaBlack | `/ecosistema/echidnaml/conectar-placa/` | Página genérica |
| 3 | 1.1.3 Empezar con EchidnaBlocks | `/ecosistema/echidnaml/empezar-echidnablocks/` | Página genérica |
| 3 | 1.1.4 Empezar con LearningML | `/ecosistema/echidnaml/empezar-learningml/` | Página genérica |
| 3 | 1.1.5 Instalar StandardFirmata | `/ecosistema/echidnaml/instalar-standardfirmata/` | Página genérica |
| 2 | 1.2 EchidnaBlack2 | `/ecosistema/echidnablack2/` | Ficha de hardware (lista sus componentes y páginas hijas) |
| 3 | 1.2.1 Pulsadores | `/ecosistema/echidnablack2/pulsadores/` | Ficha de hardware |
| 3 | 1.2.2 Joystick | `/ecosistema/echidnablack2/joystick/` | Ficha de hardware |
| 3 | 1.2.3 Sensor de luz LDR | `/ecosistema/echidnablack2/sensor-luz-ldr/` | Ficha de hardware |
| 3 | 1.2.4 Acelerómetro | `/ecosistema/echidnablack2/acelerometro/` | Ficha de hardware |
| 3 | 1.2.5 Micrófono | `/ecosistema/echidnablack2/microfono/` | Ficha de hardware |
| 3 | 1.2.6 Sensor de temperatura | `/ecosistema/echidnablack2/sensor-temperatura/` | Ficha de hardware |
| 3 | 1.2.7 LED RGB | `/ecosistema/echidnablack2/led-rgb/` | Ficha de hardware |
| 3 | 1.2.8 LEDs ROG | `/ecosistema/echidnablack2/leds/` | Ficha de hardware |
| 3 | 1.2.9 Audio | `/ecosistema/echidnablack2/audio/` | Ficha de hardware |
| 3 | 1.2.10 Conexiones MkMk | `/ecosistema/echidnablack2/conexiones-mkmk/` | Ficha de hardware |
| 3 | 1.2.11 Puesta en marcha | `/ecosistema/echidnablack2/puesta-en-marcha/` | Página genérica |
| 3 | 1.2.12 Modo sensores / Modo MkMk | `/ecosistema/echidnablack2/modo-sensores-mkmk/` | Página genérica |
| 3 | 1.2.13 Alimentación | `/ecosistema/echidnablack2/alimentacion/` | Página genérica |
| 3 | 1.2.14 Complementos | `/ecosistema/echidnablack2/complementos/` | Índice de sección |
| 4 | 1.2.14.1 Servomotor de posición | `/ecosistema/echidnablack2/complementos/servomotor-posicion/` | Ficha de hardware |
| 4 | 1.2.14.2 Servomotor continuo | `/ecosistema/echidnablack2/complementos/servomotor-continuo/` | Ficha de hardware |
| 4 | 1.2.14.3 Infrarrojos distancia | `/ecosistema/echidnablack2/complementos/infrarrojos-distancia/` | Ficha de hardware |
| 4 | 1.2.14.4 Complementos conexiones MkMk | `/ecosistema/echidnablack2/complementos/conexiones-mkmk/` | Ficha de hardware |
| 4 | 1.2.14.5 Bluetooth | `/ecosistema/echidnablack2/complementos/bluetooth/` | Ficha de hardware |
| 3 | 1.2.15 Documentación | `/ecosistema/echidnablack2/documentacion/` | Página genérica |
| 3 | 1.2.16 Características técnicas | `/ecosistema/echidnablack2/caracteristicas-tecnicas/` | Página genérica (datos técnicos de la placa, del manual) |
| 2 | 1.3 Placas anteriores (EchidnaBlack v1 y EchidnaShield) | `/ecosistema/placas-anteriores/` | Página genérica (resumen de cada placa y descarga de su PDF; sin hijas) |
| 3 | PDF de EchidnaBlack v1 y EchidnaShield | `/ecosistema/placas-anteriores/echidnablack.pdf`, `/ecosistema/placas-anteriores/echidnashield.pdf` | — (ficheros en `web/public/ecosistema/placas-anteriores/`) |
| 2 | 1.4 Entornos compatibles | `/ecosistema/entornos-compatibles/` | Página genérica |
| 1 | Materiales alumnado | `/alumnado/` | Página genérica con la lista de `recursos` (`resources: alumnado`): un título por entorno, un subtítulo por grupo y tarjetas con miniatura |
| 2 | 2.1 Proyectos de inicio con EchidnaML | `/GuiaInicioEchidnaML/` y alias `/guiainicioechidnaml/` (redirección a `echidnaeducacion.github.io/GuiaInicioEchidnaML/`) | — (repo `GuiaInicioEchidnaML`) |
| 2 | 2.2 Situaciones de aprendizaje (cada una) | `rea.echidna.es/<recurso>/` y el INTEF (Aprendiendo con robots) | — (exportaciones de eXeLearning; pendiente de migrarlas a GitHub) |
| 2 | 2.3 Proyectos de inicio con Arduino IDE | `/GuiaInicioArduinoIDE/` y alias `/guiainicioarduinoide/` (redirección a `echidnaeducacion.github.io/GuiaInicioArduinoIDE/`) | — (repo `GuiaInicioArduinoIDE`) |
| 2 | 2.4 Manual EchidnaBlack para FP (Xabier Rosas) | PDF en `echidna.es/wp-content/uploads/2025/02/Manual_EchidnaBlack_002_Es.pdf` | — (pendiente de alojarlo fuera de WordPress) |
| 1 | Recursos docentes | `/docentes/` | Índice de sección (página única con tarjetas agrupadas por material, igual que alumnado) |
| 2 | 3.1 Proyectos de inicio con EchidnaML: diapositivas | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | — (recurso alojado sin plantilla) |
| 2 | 3.2 Proyectos de inicio con EchidnaML: guía docente | `/docentes/proyectos-inicio-echidnaml/guia-docente/` | — (recurso alojado sin plantilla) |
| 2 | 3.3 Situaciones de aprendizaje: recursos de cada una | `/docentes/situaciones-aprendizaje/<recurso>/<tipo>/` (p. ej. `…/sensor-temperatura/guia-docente/`) | — (recurso alojado sin plantilla; mismo `<recurso>` que en alumnado) |
| 2 | 3.4 Snap!: recursos docentes | `/docentes/snap/<tipo>/` | — (recurso alojado sin plantilla; sin contenido de momento) |
| 2 | 3.5 Proyectos de inicio con Arduino IDE: recursos docentes | `/docentes/proyectos-inicio-arduino-ide/<tipo>/` | — (recurso alojado sin plantilla) |
| 2 | 3.6 Manual de usuario | `/manual/` (redirección a `echidnaeducacion.github.io/manual/`) | — (repo `manual`) |
| 2 | 3.7 Modelos e impresión 3D | `/docentes/impresion-3d/` | Página genérica |
| 2 | 3.8 Cómo colaborar | `/docentes/colabora/` | Página genérica (incluye resumen de repositorios) |
| 2 | 3.9 Comprobar la placa | `/docentes/comprobar-placa/` | Página genérica (enlaces a los repos de pruebas: `echidna-sensor-test`, `echidna-firmata-test`…) |
| 1 | Blog | `/blog/` | Listado / taxonomía |
| 2 | Entradas | `/AAAA/MM/slug/` | Entrada de blog |
| 2 | Categorías, etiquetas y autores | `/category/…/` (con subcategorías de dos niveles, p. ej. `/category/recursos/proyectos/`), `/tag/…/`, `/author/…/` | Listado / taxonomía |
| 2 | Talleres (categoría) | `/category/talleres/` | Listado / taxonomía |
| 2 | RSS del blog | `/rss.xml` y copia en `/feed/` | — (generado por Astro) |
| 1 | Quiénes somos | (menú desplegable, sin página propia) | — |
| 2 | 5.1 Sobre el Proyecto Echidna | `/quienes-somos/` | Página genérica |
| 2 | 5.2 Contacto | `/contacta/` | Contacto |
| 2 | 5.3 Publicaciones | `/quienes-somos/publicaciones/` | Página genérica |
| Fuera del menú | Quiero una | `/quiero-una/` | Página genérica (enlaces a los distribuidores) |
| Pie | Política de privacidad | `/politica-privacidad/` | Página genérica |
| Pie | Licencias | `/quienes-somos/licencias/` | Página genérica |
| Pie | Iconos: GitHub, YouTube, X y RSS | Externos y `/rss.xml` (ver «Pie de página») | — |
| — | Error 404 | `/404` | Error 404 |

Las URL del blog siguen el formato `/AAAA/MM/slug/`. El RSS se publica en `/rss.xml` (enlazado desde el pie y el blog) y se copia en `/feed/` para los suscriptores, porque GitHub Pages no admite redirecciones reales y los lectores de RSS no siguen las de HTML. Los repos externos (manual y guías de inicio) mantienen una dirección en `echidna.es` que redirige a su publicación en GitHub Pages. Las versiones en inglés colgarán de `/en/…`.

### Recursos alojados sin plantilla

Los materiales del alumnado son **enlaces externos**: la web solo los describe con una tarjeta (colección `recursos`). Las situaciones de aprendizaje son exportaciones de eXeLearning que hoy están en `rea.echidna.es`; se migrarán a GitHub (pendiente en el README) y, entonces, se cambiará la dirección de su tarjeta.

Lo mismo vale para los recursos docentes: por ejemplo, las diapositivas de la Guía de inicio EchidnaML van en `web/public/docentes/proyectos-inicio-echidnaml/diapositivas/`. Las rutas intermedias (`/docentes/<material>/`, `/docentes/situaciones-aprendizaje/<recurso>/`) no son páginas y redirigen a `/docentes/`.

### Criterio de la sección 3

Recursos docentes se organiza **por material, no por tipo de recurso**: el docente busca un material concreto y encuentra todo lo que tiene disponible (enlace al material del alumnado, diapositivas, guía docente…). Usa la misma plantilla que alumnado: **una sola página** con un título por material y sus recursos como tarjetas; los recursos se alojan sin plantilla en `/docentes/<material>/<tipo>/`. Cada material se enlaza en los dos sentidos con su material de la sección 2 (la tarjeta del alumnado lleva al grupo de docentes y viceversa). Solo aparecen los materiales que tienen recursos docentes. Lo que no pertenece a un material concreto (manual, modelos 3D, cómo colaborar, comprobar la placa) va al final, en «Otros recursos». Si algún material necesita explicaciones largas, tendrá su página aparte.

### Criterio para los recursos externos

El manual y las guías de inicio son **redirecciones a recursos externos**, no páginas de la web. Por eso su URL va en la **raíz** (`echidna.es/<repo>/`) y no se anida bajo la sección donde aparecen:

- **La URL no depende del menú**: el menú puede colgar la guía de Materiales alumnado › EchidnaML aunque su URL esté en la raíz, igual que `/manual/` aparece en dos apartados.
- **Estabilidad**: si se reorganiza el árbol (por ejemplo, Sistema → Ecosistema), una URL anidada se rompe y la de la raíz no. Es importante porque estas direcciones se imprimen en material físico y en códigos QR.
- **Coherencia**: los tres recursos siguen el mismo patrón.

### Criterio de navegación

- **Desplegable solo si la sección no tiene página propia**: hoy solo Quiénes somos. Si una sección tiene página con contenido (Ecosistema es un resumen de todo lo que hay), un desplegable invita a saltársela; además, en pantallas táctiles tocar el elemento padre abre el submenú en vez de la página.
- **Enlace directo** para Ecosistema, Materiales alumnado, Recursos docentes y Blog: su página es la puerta de entrada, con el resumen y tarjetas a las subpáginas.
- **Rótulos cortos**: en el menú, Materiales alumnado y Recursos docentes aparecen como «Alumnado» y «Docentes». El título de la página, las migas de pan y el pie usan el nombre completo.
- Con 5 elementos, el menú cabe sin desplegables. En el móvil, menú de hamburguesa con lista simple.
- Para moverse dentro de una sección: **migas de pan** en todas las páginas y, en las secciones con subpáginas (Ecosistema, EchidnaML, EchidnaBlack2), enlaces a las páginas hermanas en un lateral o al pie. Lo resuelve el layout, no el menú.
- Si `/docentes/` acaba sin contenido propio, se revisa su caso.

### Pie de página

Igual en todas las páginas. No repite el menú principal: lleva a las páginas más buscadas y a las que no están en el menú.

| Ecosistema | En el aula | Echidna |
|---|---|---|
| EchidnaML (descarga) — `/ecosistema/echidnaml/descarga/` | Materiales alumnado — `/alumnado/` | Sobre el proyecto — `/quienes-somos/` |
| EchidnaBlack2 — `/ecosistema/echidnablack2/` | Recursos docentes — `/docentes/` | Publicaciones — `/quienes-somos/publicaciones/` |
| Manual — `/manual/` | Guía de inicio EchidnaML — `/GuiaInicioEchidnaML/` | Cómo colaborar — `/docentes/colabora/` |
| Comprobar la placa — `/docentes/comprobar-placa/` | Blog — `/blog/` | Quiero una — `/quiero-una/` · Contacta — `/contacta/` |

- **Iconos**, junto a la marca y la descripción de la asociación: GitHub (`https://github.com/EchidnaEducacion`), YouTube (`https://www.youtube.com/channel/UCYmPpIWazAOc7dLs4CZEqew`), X (`https://x.com/EchidnaSTEAM`) y RSS (`/rss.xml`). Sin icono de email: el contacto va por `/contacta/`.
- **Franja inferior**: las tres licencias (contenidos CC BY-SA, hardware CERN OHL-S, software GPL) enlazadas a `/quienes-somos/licencias/` · Política de privacidad (`/politica-privacidad/`) · © 2026 Echidna Educación.
- **No se incluyen**: entradas recientes (ya están en la portada), créditos de diseño ni «Edita esta web en GitHub» (lo cubre «Cómo colaborar»).

## Cambios respecto al texto original

- «2,1» pasa a 2.1. Los agrupadores «EchidnaML:» y «Entornos compatibles:» de Materiales alumnado pasan a ser subsecciones y sus páginas se renumeran (desaparece el hueco del 2.4). Después, «Entornos compatibles» se dividió por entorno y, al final, Materiales alumnado se simplificó a una sola página con títulos por entorno (EchidnaML, Snap!, Arduino IDE) y recursos numerados de 2.1 a 2.5.
- Se numeran las entradas que no tenían número: Entornos compatibles (1.4) y Manual de usuario (2.4 y 3.6). En Recursos docentes, «Diapositivas para el aula» y «Guías docentes» se sustituyen por grupos de recursos por material, en una sola página.
- **Manual de usuario** aparece en dos secciones: en ambas es un enlace al manual externo (`/manual/`), no una página duplicada.
- **Proyectos de inicio** con EchidnaML (2.1) y con Arduino IDE (2.3) son enlaces a sus repos externos (`GuiaInicioEchidnaML` y `GuiaInicioArduinoIDE`), publicados en GitHub Pages.
- **Entornos compatibles** queda solo en Ecosistema (1.4), donde se describen los entornos. En Materiales alumnado cada entorno es un título dentro de su página única (EchidnaML, Snap!, Arduino IDE).

## Pendiente

- [x] Tabla de redirecciones de las URL de WordPress a las nuevas: [`redirecciones.md`](redirecciones.md). Todas las páginas tienen destino; quedan detalles en su sección «Pendiente».
- [x] Contenido sin sitio: componentes, páginas de apoyo y complementos cuelgan de 1.2 EchidnaBlack2; talleres pasan a categoría del blog; la página de comunidad desaparece; publicaciones pasa a 5.3.
- [ ] Ubicar los cursos de la comunidad (CATEDU, Programo Ergo Sum) en `/alumnado/` o `/docentes/`, según a quién vayan dirigidos. No tendrán página ni apartado propio: se enlazarán desde los materiales con los que tengan relación.
- [x] Política de privacidad y licencias: enlazadas en el pie, fuera del menú, con sus URL actuales (`/politica-privacidad/` y `/quienes-somos/licencias/`), así que no necesitan redirección.
- [x] «Entornos compatibles» ya no se repite: queda en 1.4 y Materiales alumnado se divide por entorno (después simplificado a una sola página con títulos por entorno).
- [x] Apartados de EchidnaML en alumnado: «Proyectos de inicio» son ejemplos sencillos que el alumnado hace solo (guía externa); «Situaciones de aprendizaje» son las actividades curriculares (REA); «Proyectos» son proyectos al estilo de la guía rápida. Las situaciones de aprendizaje se quedan en alumnado, y su parte para el docente (guía, evaluación) se enlaza desde su grupo en Recursos docentes.
- [x] EchidnaML conserva las páginas de la web actual: Descarga, Conectar EchidnaML y EchidnaBlack, Empezar con EchidnaBlocks, Empezar con LearningML e Instalar StandardFirmata (1.1.1 a 1.1.5). No se juntan en una sola página de primeros pasos.
- [x] Se mantienen separados Materiales alumnado y Recursos docentes. Para que el docente no tenga que adivinar, la portada y cada sección enlazan a la otra cuando hay material relacionado.
- [x] «Quiero una» es una página propia con su URL actual (`/quiero-una/`), fuera del menú. Como somos una asociación sin ánimo de lucro, no lleva botón en la cabecera: se enlaza desde 1.2 y el pie. En la portada, la tercera entrada por perfil es «Conoce la EchidnaBlack2».
- [x] GitHub: icono en el pie, junto a las redes sociales. «Repositorio GitHub» pasa a «Cómo colaborar» (hoy 3.8, `/docentes/colabora/`), una página que explica cómo contribuir y resume los repositorios de la organización.
- [x] Recursos docentes se organiza por material, no por tipo de recurso: desaparecen «Diapositivas para el aula» y «Guías docentes». «Ficha de hardware» ya tiene uso suficiente con los componentes y complementos.
- [x] Plantilla de la sección 3: la misma que alumnado, una sola página (`/docentes/`) con un título por material y sus recursos como tarjetas, alojados sin plantilla.
- [x] Los materiales de la sección 3 no tienen página propia: `/docentes/` muestra directamente sus recursos (enlace al material del alumnado, diapositivas, guía docente).
- [x] «Herramientas de análisis» pasa a «Comprobar la placa» (hoy 3.9, `/docentes/comprobar-placa/`): página que enlaza a los repos de GitHub para comprobar el funcionamiento de la placa.
- [x] Las guías tienen además un alias en minúsculas (`/guiainicioechidnaml/`, `/guiainicioarduinoide/`) que redirige al mismo sitio, porque en GitHub Pages las URL distinguen mayúsculas y minúsculas.
- [x] Placas anteriores (1.3): una sola página con un resumen breve de EchidnaBlack v1 y de EchidnaShield y un PDF con la documentación de cada una. Las URL antiguas de esas placas redirigen a `/ecosistema/placas-anteriores/`.
- [ ] Licencia del hardware, pendiente del responsable del diseño electrónico. **Decidido**: no se permite reproducir el hardware con fines comerciales sin acuerdo. **Falta** elegir una licencia compatible con eso (opciones: CC BY-NC-SA 4.0 o un texto propio). Incoherencias que hay que resolver al decidirlo:
  - **Web actual (WordPress)**: dice «CERN OHL-S con Restricción Comercial», que es contradictorio: la CERN OHL-S permite fabricar y vender y no admite restricciones añadidas.
  - **Certificación OSHWA**: la web actual dice que la EchidnaBlack2 tiene la certificación Open Source Hardware de OSHWA (UID ES000010). Esa certificación exige una licencia abierta que permita el uso comercial, así que choca con la restricción. Hay que decidir si se mantiene la certificación (y entonces no cabe la restricción) o se renuncia a ella. La ficha nueva de EchidnaBlack2 no la menciona.
  - **Repositorio [`recursos`](https://github.com/EchidnaEducacion/recursos)**: los diseños de la placa (`electronica/`) no tienen fichero de licencia y el README del repositorio dice que todo es CC BY-SA 4.0, que también permite el uso comercial.
  - **Ficha técnica de la Junta de Andalucía** (REA de 2026, [PDF](https://www.juntadeandalucia.es/educacion/eaprendizaje/wp-content/uploads/2026/04/L2P09-PLaca-componentes-IA.pdf)): dice «CERN Open Hardware Licence -W- V2-M», es decir, la variante W (débilmente recíproca) y no la S, con la misma restricción comercial.
  - **Web nueva**: el apartado «Hardware» de la página de licencias dice CERN OHL-S v2 con el nombre y el logo fuera de la licencia (cualquiera puede fabricar y vender); la tabla de Sobre el proyecto y el pie dicen «CERN OHL-S». Ninguno refleja la restricción.

  Al decidirlo, corregir la página de licencias, la tabla de Sobre el proyecto, el pie y el repositorio `recursos`.
- [ ] Generar los PDF de EchidnaBlack v1 y EchidnaShield antes de apagar WordPress. Se guardan dentro de la web, en `web/public/ecosistema/placas-anteriores/`.
- [x] Materiales alumnado es una sola página (`/alumnado/`) con títulos por entorno y subtítulos por grupo, y tarjetas con miniatura. Todos sus materiales son enlaces externos (decisión de octubre de 2026): por ahora, los dos Proyectos de inicio, cuatro situaciones de aprendizaje y el manual para FP. El resto (otros proyectos, Snap!…) está por hacer.
- [ ] Corregir la raíz de `rea.echidna.es`: su `meta refresh` apunta a `kuku.es`, un dominio ajeno. Cuando las situaciones de aprendizaje se migren a GitHub, redirigir `rea.echidna.es/<recurso>/` a su nueva dirección.
- [x] La plantilla «Actividad» ya no hace falta: ni alumnado ni docentes la usan. Se quita de las páginas maestras del README.
- [x] Cada situación de aprendizaje usa el mismo `<recurso>` en `/alumnado/situaciones-aprendizaje/` y en `/docentes/situaciones-aprendizaje/`.
- [x] Quiénes somos es un menú desplegable con 5.1, 5.2 y 5.3. 5.1 Sobre el proyecto usa `/quienes-somos/`, así que no hay índice duplicado.
- [x] Validación de URL y plantillas: blog y taxonomías coinciden con WordPress; 1.3 sin hijas (PDF); alumnado en una página; Contacto mantiene `/contacta/`; Quiénes somos sin índice duplicado; RSS en `/rss.xml` con copia en `/feed/`.
- [x] Menús desplegables: solo Quiénes somos, que no tiene página propia. El resto son enlaces directos a su página de sección, con migas de pan y enlaces a las páginas hermanas (ver «Criterio de navegación»).
