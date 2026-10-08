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
│   ├── 1.1 EchidnaML: descarga y primeros pasos
│   │   └── 1.1.1 Instalar StandardFirmata
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
│   │   └── 1.2.15 Documentación
│   ├── 1.3 Placas anteriores (EchidnaBlack v1 y EchidnaShield)
│   └── 1.4 Entornos compatibles
├── 2. Materiales alumnado                 (una sola página)
│   ├── EchidnaML                           (título dentro de la página)
│   │   ├── 2.1 Proyectos de inicio con EchidnaML
│   │   ├── 2.2 Situaciones de aprendizaje  (un recurso por SdA)
│   │   ├── 2.3 Proyectos                   (un recurso por proyecto)
│   │   └── 2.4 Manual de usuario (EchidnaML y EchidnaBlack2)
│   ├── Snap!                               (título; sin contenido de momento)
│   └── Arduino IDE                         (título)
│       └── 2.5 Proyectos de inicio con Arduino IDE
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

Cabecera (botón destacado, fuera del menú; también en la portada y en 1.2)
└── Quiero una

Pie (fuera del menú, en todas las páginas)
├── Política de privacidad
├── Licencias
└── Icono de GitHub
```

## Tabla

**Nivel**: «Cabecera» = botón destacado en la cabecera, fuera del menú; «Pie» = enlazada solo desde el pie, fuera del menú; 0 = portada, 1 = sección, 2 = subsección, 3 = página dentro de una subsección, 4 = página dentro de una página de nivel 3.
**Plantilla**: nombres de las páginas maestras del [README (Fase 5, paso 2)](README.md#paso-2--páginas-maestras).

| Nivel | Nombre | URL (propuesta) | Plantilla (propuesta) |
|---|---|---|---|
| 0 | Inicio | `/` | Portada |
| 1 | Ecosistema | `/ecosistema/` | Índice de sección |
| 2 | 1.1 EchidnaML: descarga y primeros pasos | `/ecosistema/echidnaml/` | Página genérica |
| 3 | 1.1.1 Instalar StandardFirmata | `/ecosistema/echidnaml/instalar-standardfirmata/` | Página genérica |
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
| 2 | 1.3 Placas anteriores (EchidnaBlack v1 y EchidnaShield) | `/ecosistema/placas-anteriores/` | Página genérica (resumen de cada placa y descarga de su PDF; sin hijas) |
| 2 | 1.4 Entornos compatibles | `/ecosistema/entornos-compatibles/` | Página genérica |
| 1 | Materiales alumnado | `/alumnado/` | Índice de sección (página única con tarjetas agrupadas por título: EchidnaML, Snap!, Arduino IDE) |
| 2 | 2.1 Proyectos de inicio con EchidnaML | `/GuiaInicioEchidnaML/` y alias `/guiainicioechidnaml/` (redirección a `echidnaeducacion.github.io/GuiaInicioEchidnaML/`) | — (repo `GuiaInicioEchidnaML`) |
| 2 | 2.2 Situaciones de aprendizaje (cada una) | `/alumnado/situaciones-aprendizaje/<recurso>/` | — (exportación de eXeLearning, sin plantilla) |
| 2 | 2.3 Proyectos (cada uno) | `/alumnado/proyectos/<recurso>/` | — (exportación de eXeLearning, sin plantilla) |
| 2 | 2.4 Manual de usuario (EchidnaML y EchidnaBlack2) | `/manual/` (redirección a `echidnaeducacion.github.io/manual/`) | — (repo `manual`) |
| 2 | 2.5 Proyectos de inicio con Arduino IDE | `/GuiaInicioArduinoIDE/` y alias `/guiainicioarduinoide/` (redirección a `echidnaeducacion.github.io/GuiaInicioArduinoIDE/`) | — (repo `GuiaInicioArduinoIDE`) |
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
| Cabecera | Quiero una | `/quiero-una/` | Página genérica (enlaces a los distribuidores) |
| Pie | Política de privacidad | `/politica-privacidad/` | Página genérica |
| Pie | Licencias | `/quienes-somos/licencias/` | Página genérica |
| Pie | Icono de GitHub | `https://github.com/EchidnaEducacion` (externo) | — |
| — | Error 404 | `/404` | Error 404 |

Las URL del blog siguen el formato `/AAAA/MM/slug/`. El RSS se publica en `/rss.xml` (enlazado desde el pie y el blog) y se copia en `/feed/` para los suscriptores, porque GitHub Pages no admite redirecciones reales y los lectores de RSS no siguen las de HTML. Los repos externos (manual y guías de inicio) mantienen una dirección en `echidna.es` que redirige a su publicación en GitHub Pages. Las versiones en inglés colgarán de `/en/…`.

### Recursos alojados sin plantilla

Las situaciones de aprendizaje y los proyectos del alumnado son exportaciones de eXeLearning. Se alojan en el repo de la web, en `web/public/alumnado/situaciones-aprendizaje/<recurso>/` (o `proyectos/`), y Astro las publica tal cual, sin plantilla: por ejemplo, `/alumnado/situaciones-aprendizaje/sensor-temperatura/`. Las URL usan guiones y plural, como el resto. Las rutas intermedias (`/alumnado/situaciones-aprendizaje/`, `/alumnado/proyectos/`) no son páginas y redirigen a `/alumnado/`. Cada exportación pesa (imágenes, JS), así que hay que vigilar el tamaño del repo y decidir si el buscador (Pagefind) las indexa.

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
- Con 5 elementos más el botón «Quiero una», el menú cabe sin desplegables. En el móvil, menú de hamburguesa con lista simple.
- Para moverse dentro de una sección: **migas de pan** en todas las páginas y, en las secciones con subpáginas (Ecosistema, EchidnaBlack2), enlaces a las páginas hermanas en un lateral o al pie. Lo resuelve el layout, no el menú.
- Si `/docentes/` acaba sin contenido propio, se revisa su caso.

## Cambios respecto al texto original

- «2,1» pasa a 2.1. Los agrupadores «EchidnaML:» y «Entornos compatibles:» de Materiales alumnado pasan a ser subsecciones y sus páginas se renumeran (desaparece el hueco del 2.4). Después, «Entornos compatibles» se dividió por entorno y, al final, Materiales alumnado se simplificó a una sola página con títulos por entorno (EchidnaML, Snap!, Arduino IDE) y recursos numerados de 2.1 a 2.5.
- Se numeran las entradas que no tenían número: Entornos compatibles (1.4) y Manual de usuario (2.4 y 3.6). En Recursos docentes, «Diapositivas para el aula» y «Guías docentes» se sustituyen por grupos de recursos por material, en una sola página.
- **Manual de usuario** aparece en dos secciones: en ambas es un enlace al manual externo (`/manual/`), no una página duplicada.
- **Proyectos de inicio** con EchidnaML (2.1) y con Arduino IDE (2.5) son enlaces a sus repos externos (`GuiaInicioEchidnaML` y `GuiaInicioArduinoIDE`), publicados en GitHub Pages.
- **Entornos compatibles** queda solo en Ecosistema (1.4), donde se describen los entornos. En Materiales alumnado cada entorno es un título dentro de su página única (EchidnaML, Snap!, Arduino IDE).

## Pendiente

- [x] Tabla de redirecciones de las URL de WordPress a las nuevas: [`redirecciones.md`](redirecciones.md). Todas las páginas tienen destino; quedan detalles en su sección «Pendiente».
- [x] Contenido sin sitio: componentes, páginas de apoyo y complementos cuelgan de 1.2 EchidnaBlack2; talleres pasan a categoría del blog; la página de comunidad desaparece; publicaciones pasa a 5.3.
- [ ] Ubicar los cursos de la comunidad (CATEDU, Programo Ergo Sum) en `/alumnado/` o `/docentes/`, según a quién vayan dirigidos. No tendrán página ni apartado propio: se enlazarán desde los materiales con los que tengan relación.
- [x] Política de privacidad y licencias: enlazadas en el pie, fuera del menú, con sus URL actuales (`/politica-privacidad/` y `/quienes-somos/licencias/`), así que no necesitan redirección.
- [x] «Entornos compatibles» ya no se repite: queda en 1.4 y Materiales alumnado se divide por entorno (después simplificado a una sola página con títulos por entorno).
- [x] Apartados de EchidnaML en alumnado: «Proyectos de inicio» son ejemplos sencillos que el alumnado hace solo (guía externa); «Situaciones de aprendizaje» son las actividades curriculares (REA); «Proyectos» son proyectos al estilo de la guía rápida. Las situaciones de aprendizaje se quedan en alumnado, y su parte para el docente (guía, evaluación) se enlaza desde su grupo en Recursos docentes.
- [x] Se mantienen separados Materiales alumnado y Recursos docentes. Para que el docente no tenga que adivinar, la portada y cada sección enlazan a la otra cuando hay material relacionado.
- [x] «Quiero una» es una página propia con su URL actual (`/quiero-una/`, sin redirección), fuera del menú, con un botón destacado en la cabecera y en la portada, y enlazada desde 1.2. El nombre de 1.2 queda como «EchidnaBlack2».
- [x] GitHub: icono en el pie, junto a las redes sociales. «Repositorio GitHub» pasa a «Cómo colaborar» (hoy 3.8, `/docentes/colabora/`), una página que explica cómo contribuir y resume los repositorios de la organización.
- [x] Recursos docentes se organiza por material, no por tipo de recurso: desaparecen «Diapositivas para el aula» y «Guías docentes». «Ficha de hardware» ya tiene uso suficiente con los componentes y complementos.
- [x] Plantilla de la sección 3: la misma que alumnado, una sola página (`/docentes/`) con un título por material y sus recursos como tarjetas, alojados sin plantilla.
- [x] Los materiales de la sección 3 no tienen página propia: `/docentes/` muestra directamente sus recursos (enlace al material del alumnado, diapositivas, guía docente).
- [x] «Herramientas de análisis» pasa a «Comprobar la placa» (hoy 3.9, `/docentes/comprobar-placa/`): página que enlaza a los repos de GitHub para comprobar el funcionamiento de la placa.
- [x] Las guías tienen además un alias en minúsculas (`/guiainicioechidnaml/`, `/guiainicioarduinoide/`) que redirige al mismo sitio, porque en GitHub Pages las URL distinguen mayúsculas y minúsculas.
- [x] Placas anteriores (1.3): una sola página con un resumen breve de EchidnaBlack v1 y de EchidnaShield y un PDF con la documentación de cada una. Las URL antiguas de esas placas redirigen a `/ecosistema/placas-anteriores/`.
- [ ] Generar los PDF de EchidnaBlack v1 y EchidnaShield a partir de las páginas actuales antes de apagar WordPress, y decidir dónde se guardan (en la web o en el repo `recursos`).
- [x] Materiales alumnado es una sola página (`/alumnado/`) con títulos por entorno. Las situaciones de aprendizaje y los proyectos son exportaciones de eXeLearning alojadas sin plantilla. Snap! no tiene contenido de momento.
- [ ] Corregir la raíz de `rea.echidna.es`: su `meta refresh` apunta a `kuku.es`, un dominio ajeno. Redirigir `rea.echidna.es/<recurso>/` a las nuevas URL `/alumnado/situaciones-aprendizaje/<recurso>/`.
- [x] La plantilla «Actividad» ya no hace falta: ni alumnado ni docentes la usan. Se quita de las páginas maestras del README.
- [x] Cada situación de aprendizaje usa el mismo `<recurso>` en `/alumnado/situaciones-aprendizaje/` y en `/docentes/situaciones-aprendizaje/`.
- [x] Quiénes somos es un menú desplegable con 5.1, 5.2 y 5.3. 5.1 Sobre el proyecto usa `/quienes-somos/`, así que no hay índice duplicado.
- [x] Validación de URL y plantillas: blog y taxonomías coinciden con WordPress; 1.3 sin hijas (PDF); alumnado en una página; Contacto mantiene `/contacta/`; Quiénes somos sin índice duplicado; RSS en `/rss.xml` con copia en `/feed/`.
- [x] Menús desplegables: solo Quiénes somos, que no tiene página propia. El resto son enlaces directos a su página de sección, con migas de pan y enlaces a las páginas hermanas (ver «Criterio de navegación»).
