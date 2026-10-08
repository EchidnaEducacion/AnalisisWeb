// Colecciones de contenido. El diseño de cada una y para qué sirve cada campo
// está explicado en modelo-contenido.md (raíz del repositorio).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
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
      image: image().optional(),
      translation: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { paginas };
