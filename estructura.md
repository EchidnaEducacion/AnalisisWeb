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
├── 2. Materiales alumnado
│   ├── 2.1 EchidnaML
│   │   ├── 2.1.1 Proyectos de inicio con EchidnaML
│   │   ├── 2.1.2 Situaciones de aprendizaje (REA)
│   │   ├── 2.1.3 Proyectos
│   │   └── 2.1.4 Manual de usuario (EchidnaML y EchidnaBlack2)
│   ├── 2.2 Snap!
│   └── 2.3 Arduino IDE
│       └── 2.3.1 Proyectos de inicio con Arduino IDE
├── 3. Recursos docentes
│   ├── 3.1 Proyectos de inicio con EchidnaML
│   ├── 3.2 Situaciones de aprendizaje
│   ├── 3.3 Snap!
│   ├── 3.4 Proyectos de inicio con Arduino IDE
│   ├── 3.5 Manual de usuario
│   ├── 3.6 Modelos e impresión 3D
│   ├── 3.7 Cómo colaborar
│   └── 3.8 Herramientas de análisis
├── 4. Blog
└── 5. Quiénes somos
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
| 2 | 1.3 Placas anteriores (EchidnaBlack v1 y EchidnaShield) | `/ecosistema/placas-anteriores/` | Índice de sección (hijas con Ficha de hardware) |
| 2 | 1.4 Entornos compatibles | `/ecosistema/entornos-compatibles/` | Página genérica |
| 1 | Materiales alumnado | `/alumnado/` | Índice de sección |
| 2 | 2.1 EchidnaML | `/alumnado/echidnaml/` | Índice de sección |
| 3 | 2.1.1 Proyectos de inicio con EchidnaML | `/GuiaInicioEchidnaML/` (redirección a `echidnaeducacion.github.io/GuiaInicioEchidnaML/`) | — (repo `GuiaInicioEchidnaML`) |
| 3 | 2.1.2 Situaciones de aprendizaje (REA) | `/alumnado/echidnaml/situaciones-aprendizaje/` | Índice de sección (hijas con Actividad) |
| 3 | 2.1.3 Proyectos | `/alumnado/echidnaml/proyectos/` | Índice de sección (hijas con Actividad) |
| 3 | 2.1.4 Manual de usuario (EchidnaML y EchidnaBlack2) | `/manual/` (redirección a `echidnaeducacion.github.io/manual/`) | — (repo `manual`) |
| 2 | 2.2 Snap! | `/alumnado/snap/` | Página genérica |
| 2 | 2.3 Arduino IDE | `/alumnado/arduino-ide/` | Índice de sección |
| 3 | 2.3.1 Proyectos de inicio con Arduino IDE | `/GuiaInicioArduinoIDE/` (redirección a `echidnaeducacion.github.io/GuiaInicioArduinoIDE/`) | — (repo `GuiaInicioArduinoIDE`) |
| 1 | Recursos docentes | `/docentes/` | Índice de sección |
| 2 | 3.1 Proyectos de inicio con EchidnaML | `/docentes/proyectos-inicio-echidnaml/` | Pendiente de decidir |
| 2 | 3.2 Situaciones de aprendizaje | `/docentes/situaciones-aprendizaje/` | Índice de sección (una hija por SdA; plantilla de las hijas pendiente) |
| 2 | 3.3 Snap! | `/docentes/snap/` | Pendiente de decidir |
| 2 | 3.4 Proyectos de inicio con Arduino IDE | `/docentes/proyectos-inicio-arduino-ide/` | Pendiente de decidir |
| 2 | 3.5 Manual de usuario | `/manual/` (redirección a `echidnaeducacion.github.io/manual/`) | — (repo `manual`) |
| 2 | 3.6 Modelos e impresión 3D | `/docentes/impresion-3d/` | Página genérica |
| 2 | 3.7 Cómo colaborar | `/docentes/colabora/` | Página genérica (incluye resumen de repositorios) |
| 2 | 3.8 Herramientas de análisis | `/docentes/herramientas-analisis/` | Página genérica |
| 1 | Blog | `/blog/` | Listado / taxonomía |
| 2 | Entradas | `/AAAA/MM/slug/` | Entrada de blog |
| 2 | Categorías, etiquetas y autores | `/category/…/`, `/tag/…/`, `/author/…/` | Listado / taxonomía |
| 2 | Talleres (categoría) | `/category/talleres/` | Listado / taxonomía |
| 1 | Quiénes somos | `/quienes-somos/` | Índice de sección |
| 2 | 5.1 Sobre el Proyecto Echidna | `/quienes-somos/proyecto/` | Página genérica |
| 2 | 5.2 Contacto | `/contacto/` | Contacto |
| 2 | 5.3 Publicaciones | `/quienes-somos/publicaciones/` | Página genérica |
| Cabecera | Quiero una | `/quiero-una/` | Página genérica (enlaces a los distribuidores) |
| Pie | Política de privacidad | `/politica-privacidad/` | Página genérica |
| Pie | Licencias | `/quienes-somos/licencias/` | Página genérica |
| Pie | Icono de GitHub | `https://github.com/EchidnaEducacion` (externo) | — |
| — | Error 404 | `/404` | Error 404 |

Las URL del blog se mantienen como en WordPress para no romper enlaces. Los repos externos (manual y guías de inicio) mantienen una dirección en `echidna.es` que redirige a su publicación en GitHub Pages. Las versiones en inglés colgarán de `/en/…`.

### Criterio de la sección 3

Recursos docentes se organiza **por material, no por tipo de recurso**: el docente entra en un material concreto y encuentra todo lo que tiene disponible (guía docente, diapositivas, evaluación…). Cada página de material de la sección 3 se enlaza en los dos sentidos con su material de la sección 2. Solo aparecen los materiales que tienen recursos docentes. Lo que no pertenece a un material concreto (manual, modelos 3D, cómo colaborar, herramientas de análisis) va al final.

### Criterio para los recursos externos

El manual y las guías de inicio son **redirecciones a recursos externos**, no páginas de la web. Por eso su URL va en la **raíz** (`echidna.es/<repo>/`) y no se anida bajo la sección donde aparecen:

- **La URL no depende del menú**: el menú puede colgar la guía de Materiales alumnado › EchidnaML aunque su URL esté en la raíz, igual que `/manual/` aparece en dos apartados.
- **Estabilidad**: si se reorganiza el árbol (por ejemplo, Sistema → Ecosistema), una URL anidada se rompe y la de la raíz no. Es importante porque estas direcciones se imprimen en material físico y en códigos QR.
- **Coherencia**: los tres recursos siguen el mismo patrón.

## Cambios respecto al texto original

- «2,1» pasa a 2.1. Los agrupadores «EchidnaML:» y «Entornos compatibles:» de Materiales alumnado pasan a ser subsecciones y sus páginas se renumeran (desaparece el hueco del 2.4). Después, «Entornos compatibles» se divide en 2.2 Snap! y 2.3 Arduino IDE.
- Se numeran las entradas que no tenían número: Entornos compatibles (1.4) y Manual de usuario (2.1.4 y 3.5). En Recursos docentes, «Diapositivas para el aula» y «Guías docentes» se sustituyen por una página por material.
- **Manual de usuario** aparece en dos secciones: en ambas es un enlace al manual externo (`/manual/`), no una página duplicada.
- **Proyectos de inicio** con EchidnaML (2.1.1) y con Arduino IDE (2.3.1) son enlaces a sus repos externos (`GuiaInicioEchidnaML` y `GuiaInicioArduinoIDE`), publicados en GitHub Pages.
- **Entornos compatibles** queda solo en Ecosistema (1.4), donde se describen los entornos. En Materiales alumnado cada entorno tiene su subsección (2.1 EchidnaML, 2.2 Snap!, 2.3 Arduino IDE).

## Pendiente

- [ ] Validar las URL y las plantillas propuestas.
- [ ] Hacer la tabla de redirecciones de las URL de WordPress a las nuevas (la mayoría de las rutas cambian). Ya decididas: `/didactica/talleres/` → `/category/talleres/` y `/didactica/comunidad/` → `/docentes/`.
- [x] Contenido sin sitio: componentes, páginas de apoyo y complementos cuelgan de 1.2 EchidnaBlack2 (como en la web actual); talleres pasan a categoría del blog; la página de comunidad desaparece; publicaciones pasa a 5.3.
- [ ] Ubicar los cursos de la comunidad (CATEDU, Programo Ergo Sum) en `/alumnado/` o `/docentes/`, según a quién vayan dirigidos.
- [x] Política de privacidad y licencias: enlazadas en el pie, fuera del menú, con sus URL actuales (`/politica-privacidad/` y `/quienes-somos/licencias/`), así que no necesitan redirección.
- [x] «Entornos compatibles» ya no se repite: queda en 1.4 y Materiales alumnado se divide por entorno (2.2 Snap!, 2.3 Arduino IDE).
- [x] Apartados de 2.1: «Proyectos de inicio» son ejemplos sencillos que el alumnado hace solo (guía externa); «Situaciones de aprendizaje» son las actividades curriculares (REA); «Proyectos» son proyectos al estilo de la guía rápida. Las situaciones de aprendizaje se quedan en alumnado, y su parte para el docente (guía, evaluación) se enlaza desde 3.2 Situaciones de aprendizaje de Recursos docentes.
- [x] Se mantienen separados Materiales alumnado y Recursos docentes. Para que el docente no tenga que adivinar, la portada y cada sección enlazan a la otra cuando hay material relacionado.
- [x] «Quiero una» es una página propia con su URL actual (`/quiero-una/`, sin redirección), fuera del menú, con un botón destacado en la cabecera y en la portada, y enlazada desde 1.2. El nombre de 1.2 queda como «EchidnaBlack2».
- [x] GitHub: icono en el pie, junto a las redes sociales. 3.5 pasa a «Cómo colaborar» (`/docentes/colabora/`), una página que explica cómo contribuir y resume los repositorios de la organización.
- [x] Recursos docentes se organiza por material, no por tipo de recurso: desaparecen «Diapositivas para el aula» y «Guías docentes». «Ficha de hardware» ya tiene uso suficiente con los componentes y complementos.
- [ ] Decidir la plantilla de las páginas de material de la sección 3 (3.1, 3.3, 3.4 y las hijas de 3.2). Propuesta: plantilla nueva «Recursos docentes», con introducción, enlace al material del alumnado y lista de recursos con descarga, generada desde el front matter. Alternativa: Página genérica.
- [ ] Aclarar qué es «Herramientas de análisis» y si el nombre se entiende.
- [ ] Valorar alias en minúsculas para las URL de las guías (`/GuiaInicioEchidnaML/`), porque en GitHub Pages las URL distinguen mayúsculas y minúsculas.
- [ ] Decidir qué menús del menú principal son desplegables y hasta qué nivel (por ejemplo, si 1.2 EchidnaBlack2, con 15 hijas, se despliega o solo enlaza a su página), y cómo se comportan en el móvil.
