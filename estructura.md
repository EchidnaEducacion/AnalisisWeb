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
│   ├── 1.2 EchidnaBlack2: características y Quiero una
│   ├── 1.3 Placas anteriores (EchidnaBlack v1 y EchidnaShield)
│   └── 1.4 Entornos compatibles
├── 2. Materiales alumnado
│   ├── 2.1 EchidnaML
│   │   ├── 2.1.1 Proyectos de inicio con EchidnaML
│   │   ├── 2.1.2 Situaciones de aprendizaje (REA)
│   │   ├── 2.1.3 Proyectos
│   │   └── 2.1.4 Manual de usuario (EchidnaML y EchidnaBlack2)
│   └── 2.2 Entornos compatibles
│       ├── 2.2.1 Snap!
│       └── 2.2.2 Proyectos de inicio con Arduino IDE
├── 3. Recursos docente
│   ├── 3.1 Diapositivas para el aula
│   ├── 3.2 Guías docentes
│   ├── 3.3 Manual de usuario
│   ├── 3.4 Modelos e impresión 3D
│   ├── 3.5 Repositorio GitHub
│   └── 3.6 Herramientas de análisis
├── 4. Blog
└── 5. Quiénes somos
    ├── 5.1 Sobre el Proyecto Echidna
    └── 5.2 Contacto
```

## Tabla

**Nivel**: 0 = portada, 1 = sección, 2 = subsección, 3 = página dentro de una subsección.
**Plantilla**: nombres de las páginas maestras del [README (Fase 5, paso 2)](README.md#paso-2--páginas-maestras).

| Nivel | Nombre | URL (propuesta) | Plantilla (propuesta) |
|---|---|---|---|
| 0 | Inicio | `/` | Portada |
| 1 | Ecosistema | `/ecosistema/` | Índice de sección |
| 2 | 1.1 EchidnaML: descarga y primeros pasos | `/ecosistema/echidnaml/` | Página genérica |
| 2 | 1.2 EchidnaBlack2: características y Quiero una | `/ecosistema/echidnablack2/` | Ficha de hardware |
| 2 | 1.3 Placas anteriores (EchidnaBlack v1 y EchidnaShield) | `/ecosistema/placas-anteriores/` | Índice de sección (hijas con Ficha de hardware) |
| 2 | 1.4 Entornos compatibles | `/ecosistema/entornos-compatibles/` | Página genérica |
| 1 | Materiales alumnado | `/alumnado/` | Índice de sección |
| 2 | 2.1 EchidnaML | `/alumnado/echidnaml/` | Índice de sección |
| 3 | 2.1.1 Proyectos de inicio con EchidnaML | `/GuiaInicioEchidnaML/` (redirección a `echidnaeducacion.github.io/GuiaInicioEchidnaML/`) | — (repo `GuiaInicioEchidnaML`) |
| 3 | 2.1.2 Situaciones de aprendizaje (REA) | `/alumnado/echidnaml/situaciones-aprendizaje/` | Índice de sección (hijas con Actividad) |
| 3 | 2.1.3 Proyectos | `/alumnado/echidnaml/proyectos/` | Índice de sección (hijas con Actividad) |
| 3 | 2.1.4 Manual de usuario (EchidnaML y EchidnaBlack2) | `/manual/` (redirección a `echidnaeducacion.github.io/manual/`) | — (repo `manual`) |
| 2 | 2.2 Entornos compatibles | `/alumnado/entornos/` | Índice de sección |
| 3 | 2.2.1 Snap! | `/alumnado/entornos/snap/` | Página genérica |
| 3 | 2.2.2 Proyectos de inicio con Arduino IDE | `/GuiaInicioArduinoIDE/` (redirección a `echidnaeducacion.github.io/GuiaInicioArduinoIDE/`) | — (repo `GuiaInicioArduinoIDE`) |
| 1 | Recursos docente | `/docentes/` | Índice de sección |
| 2 | 3.1 Diapositivas para el aula | `/docentes/diapositivas/` | Página genérica |
| 2 | 3.2 Guías docentes | `/docentes/guias/` | Página genérica |
| 2 | 3.3 Manual de usuario | `/manual/` (redirección a `echidnaeducacion.github.io/manual/`) | — (repo `manual`) |
| 2 | 3.4 Modelos e impresión 3D | `/docentes/impresion-3d/` | Página genérica |
| 2 | 3.5 Repositorio GitHub | `https://github.com/EchidnaEducacion` (externo) | — |
| 2 | 3.6 Herramientas de análisis | `/docentes/herramientas-analisis/` | Página genérica |
| 1 | Blog | `/blog/` | Listado / taxonomía |
| 2 | Entradas | `/AAAA/MM/slug/` | Entrada de blog |
| 2 | Categorías, etiquetas y autores | `/category/…/`, `/tag/…/`, `/author/…/` | Listado / taxonomía |
| 1 | Quiénes somos | `/quienes-somos/` | Índice de sección |
| 2 | 5.1 Sobre el Proyecto Echidna | `/quienes-somos/proyecto/` | Página genérica |
| 2 | 5.2 Contacto | `/contacto/` | Contacto |
| — | Error 404 | `/404` | Error 404 |

Las URL del blog se mantienen como en WordPress para no romper enlaces. Los repos externos (manual y guías de inicio) mantienen una dirección en `echidna.es` que redirige a su publicación en GitHub Pages. Las versiones en inglés colgarán de `/en/…`.

### Criterio para los recursos externos

El manual y las guías de inicio son **redirecciones a recursos externos**, no páginas de la web. Por eso su URL va en la **raíz** (`echidna.es/<repo>/`) y no se anida bajo la sección donde aparecen:

- **La URL no depende del menú**: el menú puede colgar la guía de Materiales alumnado › EchidnaML aunque su URL esté en la raíz, igual que `/manual/` aparece en dos apartados.
- **Estabilidad**: si se reorganiza el árbol (por ejemplo, Sistema → Ecosistema), una URL anidada se rompe y la de la raíz no. Es importante porque estas direcciones se imprimen en material físico y en códigos QR.
- **Coherencia**: los tres recursos siguen el mismo patrón.

## Cambios respecto al texto original

- «2,1» pasa a 2.1. Los agrupadores «EchidnaML:» y «Entornos compatibles:» de Materiales alumnado pasan a ser las subsecciones 2.1 y 2.2, y sus páginas se renumeran como 2.1.x y 2.2.x (desaparece el hueco del 2.4).
- Se numeran las entradas que no tenían número: Entornos compatibles (1.4) y Manual de usuario (2.1.4 y 3.3). Recursos docente queda de 3.1 a 3.6.
- **Manual de usuario** aparece en dos secciones: en ambas es un enlace al manual externo (`/manual/`), no una página duplicada.
- **Proyectos de inicio** con EchidnaML (2.1.1) y con Arduino IDE (2.2.2) son enlaces a sus repos externos (`GuiaInicioEchidnaML` y `GuiaInicioArduinoIDE`), publicados en GitHub Pages.
- **Entornos compatibles** aparece dos veces con sentidos distintos: en Ecosistema (1.4) se describen los entornos y en Materiales alumnado (2.2) están los materiales para cada uno.

## Pendiente

- [ ] Validar las URL y las plantillas propuestas.
- [ ] Hacer la tabla de redirecciones de las URL de WordPress a las nuevas (la mayoría de las rutas cambian).
- [ ] Decidir dónde va el contenido actual que no tiene sitio en la nueva estructura: fichas de componentes y complementos (36 páginas), talleres, comunidad y publicaciones.
- [ ] Añadir en el pie la **política de privacidad** (obligatoria por RGPD/LSSI, más aún con formulario de contacto) y las licencias.
- [ ] Evitar el doble uso de «Entornos compatibles» (1.4 y 2.2), que mezcla la organización por producto con la organización por público.
- [ ] Definir qué distingue «Proyectos de inicio», «Situaciones de aprendizaje» y «Proyectos» (2.1), o juntar los dos últimos. Revisar si las situaciones de aprendizaje son material del alumnado o del profesorado.
- [ ] Valorar si separar Alumnado y Docentes ayuda al visitante habitual (el docente) o si es mejor una sola sección con filtros por público.
- [ ] Dar a «Quiero una» una URL propia y estable (`/quiero-una/`) y un botón visible en la cabecera o en la portada.
- [ ] Sacar «Repositorio GitHub» (3.5) del menú y ponerlo como icono en el pie o en la cabecera.
- [ ] Revisar las plantillas: Diapositivas y Guías docentes son listados de descargas (¿plantilla «Listado de recursos»?). «Ficha de hardware» se queda con pocas páginas.
- [ ] Revisar los nombres: «Recursos docente» → «Recursos docentes» o «Para docentes». Aclarar qué es «Herramientas de análisis».
- [ ] Valorar alias en minúsculas para las URL de las guías (`/GuiaInicioEchidnaML/`), porque en GitHub Pages las URL distinguen mayúsculas y minúsculas.
