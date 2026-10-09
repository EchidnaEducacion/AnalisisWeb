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
      // Índice lateral «En esta página» con los h2: solo en páginas largas
      toc: z.boolean().default(false),
      // Fichas del equipo al final de la página, por id de `autores`
      team: z.array(reference('autores')).optional(),
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

export const collections = { paginas, autores, hardware };
