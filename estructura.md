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
├── 1. Sistema
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
| 1 | Sistema | `/sistema/` | Índice de sección |
| 2 | 1.1 EchidnaML: descarga y primeros pasos | `/sistema/echidnaml/` | Página genérica |
| 2 | 1.2 EchidnaBlack2: características y Quiero una | `/sistema/echidnablack2/` | Ficha de hardware |
| 2 | 1.3 Placas anteriores (EchidnaBlack v1 y EchidnaShield) | `/sistema/placas-anteriores/` | Índice de sección (hijas con Ficha de hardware) |
| 2 | 1.4 Entornos compatibles | `/sistema/entornos-compatibles/` | Página genérica |
| 1 | Materiales alumnado | `/alumnado/` | Índice de sección |
| 2 | 2.1 EchidnaML | `/alumnado/echidnaml/` | Índice de sección |
| 3 | 2.1.1 Proyectos de inicio con EchidnaML | `/alumnado/echidnaml/proyectos-inicio/` | Índice de sección (hijas con Actividad) |
| 3 | 2.1.2 Situaciones de aprendizaje (REA) | `/alumnado/echidnaml/situaciones-aprendizaje/` | Índice de sección (hijas con Actividad) |
| 3 | 2.1.3 Proyectos | `/alumnado/echidnaml/proyectos/` | Índice de sección (hijas con Actividad) |
| 3 | 2.1.4 Manual de usuario (EchidnaML y EchidnaBlack2) | `/manual/` (externo) | — (repo `manual`) |
| 2 | 2.2 Entornos compatibles | `/alumnado/entornos/` | Índice de sección |
| 3 | 2.2.1 Snap! | `/alumnado/entornos/snap/` | Página genérica |
| 3 | 2.2.2 Proyectos de inicio con Arduino IDE | `/alumnado/entornos/arduino-ide/` | Índice de sección (hijas con Actividad) |
| 1 | Recursos docente | `/docentes/` | Índice de sección |
| 2 | 3.1 Diapositivas para el aula | `/docentes/diapositivas/` | Página genérica |
| 2 | 3.2 Guías docentes | `/docentes/guias/` | Página genérica |
| 2 | 3.3 Manual de usuario | `/manual/` (externo) | — (repo `manual`) |
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

Las URL del blog se mantienen como en WordPress para no romper enlaces. Las versiones en inglés colgarán de `/en/…`.

## Cambios respecto al texto original

- «2,1» pasa a 2.1. Los agrupadores «EchidnaML:» y «Entornos compatibles:» de Materiales alumnado pasan a ser las subsecciones 2.1 y 2.2, y sus páginas se renumeran como 2.1.x y 2.2.x (desaparece el hueco del 2.4).
- Se numeran las entradas que no tenían número: Entornos compatibles (1.4) y Manual de usuario (2.1.4 y 3.3). Recursos docente queda de 3.1 a 3.6.
- **Manual de usuario** aparece en dos secciones: en ambas es un enlace al manual externo (`/manual/`), no una página duplicada.
- **Entornos compatibles** aparece dos veces con sentidos distintos: en Sistema (1.4) se describen los entornos y en Materiales alumnado (2.2) están los materiales para cada uno.

## Pendiente

- [ ] Validar las URL y las plantillas propuestas.
- [ ] Hacer la tabla de redirecciones de las URL de WordPress a las nuevas (la mayoría de las rutas cambian).
- [ ] Decidir dónde va el contenido actual que no tiene sitio en la nueva estructura (fichas de componentes y complementos, talleres, comunidad, publicaciones, licencias, política de privacidad…).
