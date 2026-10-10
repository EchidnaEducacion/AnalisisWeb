// Colecciones de contenido. El diseño de cada una y para qué sirve cada campo
// está explicado en modelo-contenido.md (raíz del repositorio).
import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Texto obligatorio: no vale vacío ni solo espacios
const texto = () => z.string().trim().min(1, 'No puede estar vacío');

// Páginas en Markdown. La ruta del fichero es la URL, dentro de la carpeta del idioma:
// es/politica-privacidad.md → /politica-privacidad/, es/quienes-somos/licencias.md → /quienes-somos/licencias/
const paginas = defineCollection({
  loader: glob({ base: './src/content/paginas', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: texto(),
      description: texto()
        .min(50, 'La descripción debe tener al menos 50 caracteres')
        .max(160, 'La descripción no puede pasar de 160 caracteres'),
      template: z.enum(['pagina', 'indice', 'contacto', 'portada']),
      order: z.number().default(0),
      // false: no sale en el índice de su sección, ni como tarjeta ni en el índice lateral
      listed: z.boolean().default(true),
      // Índice lateral «En esta página» con los h2: solo en páginas largas
      toc: z.boolean().default(false),
      // Fichas del equipo al final de la página, por id de `autores`
      team: z.array(reference('autores')).optional(),
      // Tarjetas de enlace al final del texto: { title, text, href }; href es una URL externa
      // o una ruta interna sin base (/ecosistema/)
      cards: z.array(z.object({ title: texto(), text: texto(), href: texto() })).default([]),
      // Tarjeta lateral de resumen (como la ficha rápida de las fichas): { label, value }. Solo en
      // páginas sin `toc`, porque ocupa el mismo lateral
      summary: z.array(z.object({ label: texto(), value: texto() })).default([]),
      // En los índices: título del apartado de tarjetas de las páginas hijas («Primeros pasos»)
      cardsTitle: texto().optional(),
      // Lista de publicaciones (colección `publicaciones`) al final del texto, con esta importancia mínima
      publications: z.number().int().min(1).max(5).optional(),
      // Recursos (colección `recursos`) de este público al final del texto, agrupados por entorno y grupo
      resources: z.enum(['alumnado', 'docentes']).optional(),
      image: image().optional(),
      translation: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

// Autores del blog, que forman también el equipo de «Sobre el proyecto».
// Una lista YAML: el id de cada autor es el de su URL /author/<id>/.
const autores = defineCollection({
  loader: file('./src/content/autores.yaml'),
  schema: ({ image }) =>
    z.object({
      name: texto(),
      role: texto(),
      description: texto(),
      image: image(),
      url: z.url().optional(),
    }),
});

// Fichas de la placa, sus componentes y sus complementos. La ruta del fichero es la URL bajo /ecosistema/:
// es/echidnablack2/leds/index.md → /ecosistema/echidnablack2/leds/ (las imágenes van en la misma carpeta)
const hardware = defineCollection({
  loader: glob({ base: './src/content/hardware', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z
      .object({
        title: texto(),
        description: texto()
          .min(50, 'La descripción debe tener al menos 50 caracteres')
          .max(160, 'La descripción no puede pasar de 160 caracteres'),
        kind: z.enum(['placa', 'componente', 'complemento']),
        // Entrada (sensores, pulsadores…) o salida (LEDs, motores…): solo en componentes
        io: z.enum(['entrada', 'salida']).optional(),
        board: z.enum(['echidnablack2']).optional(),
        image: image(),
        imageAlt: texto(),
        // Esquema eléctrico del componente: se muestra en el lateral, en un recuadro «Esquema»
        schematic: image().optional(),
        schematicAlt: texto().optional(),
        // Tabla de pines de la ficha rápida, p. ej. { pin: "D11~", name: "LED verde", mode: "Salida digital y PWM" }
        pins: z.array(z.object({ pin: texto(), name: texto(), mode: texto() })).default([]),
        // Datos de la ficha rápida, p. ej. { label: "Microcontrolador", value: "ATmega328P a 16 MHz" }
        specs: z.array(z.object({ label: texto(), value: texto() })).default([]),
        // Entornos con los que se programa
        tools: z.array(texto()).default([]),
        // Ficheros en public/: file es la ruta sin base (/ecosistema/…/hoja.pdf)
        downloads: z.array(z.object({ label: texto(), file: texto() })).default([]),
        order: z.number().default(0),
        translation: z.string().optional(),
        draft: z.boolean().default(false),
      })
      .refine((d) => d.kind === 'placa' || d.board, { message: 'Los componentes y complementos necesitan `board`', path: ['board'] }),
});

// Publicaciones sobre Echidna de otros medios (página 5.3). Una lista YAML; el listado de trabajo está en publicaciones.md
const publicaciones = defineCollection({
  loader: file('./src/content/publicaciones.yaml'),
  schema: z.object({
    title: texto(),
    medium: texto(),
    // AAAA-MM-DD, AAAA-MM o AAAA
    date: z.string().regex(/^\d{4}(-\d{2}(-\d{2})?)?$/, 'Fecha en formato AAAA-MM-DD, AAAA-MM o AAAA'),
    type: texto(),
    url: z.url(),
    importance: z.number().int().min(1).max(5),
    summary: texto(),
  }),
});

// Categorías del blog: el id es el de la URL /category/<id>/
const categorias = defineCollection({
  loader: file('./src/content/categorias.yaml'),
  schema: z.object({
    name: texto(),
    parent: z.string().optional(),
  }),
});

// Entradas del blog. La URL sale de la carpeta, no de la fecha:
// es/2026/05/rotografo/index.md → /2026/05/rotografo/ (las imágenes van en la misma carpeta)
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: texto(),
      description: texto()
        .min(50, 'La descripción debe tener al menos 50 caracteres')
        .max(160, 'La descripción no puede pasar de 160 caracteres'),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      author: reference('autores'),
      categories: z.array(reference('categorias')).min(1, 'Al menos una categoría'),
      tags: z.array(texto()).default([]),
      image: image().optional(),
      imageAlt: texto().optional(),
      translation: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

// Recursos de Materiales alumnado y Recursos docentes: enlaces (casi siempre externos) que la web
// describe con una tarjeta. Una lista YAML con sus miniaturas en src/content/recursos/
const recursos = defineCollection({
  loader: file('./src/content/recursos.yaml'),
  schema: ({ image }) =>
    z.object({
      title: texto(),
      description: texto(),
      audience: z.enum(['alumnado', 'docentes']),
      // Título de entorno (EchidnaML, Arduino IDE…) y subtítulo dentro de él (Proyectos, Situaciones de aprendizaje…)
      environment: texto(),
      // Subtítulo dentro del entorno; sin él, los recursos van directamente bajo el título
      group: z.string().default(''),
      type: texto(),
      // Sin url, el recurso aún no está terminado: la tarjeta sale «Próximamente», sin enlace
      url: z.string().optional(),
      level: z.enum(['Primaria', 'Secundaria', 'FP']).optional(),
      image: image().optional(),
      order: z.number().default(0),
      // Tarjeta destacada: ocupa todo el ancho de su grupo, con la imagen al lado del texto
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { paginas, autores, hardware, publicaciones, categorias, blog, recursos };
