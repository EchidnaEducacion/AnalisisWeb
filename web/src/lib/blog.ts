// Utilidades para la colección `blog`
import { getCollection, type CollectionEntry } from 'astro:content';

// URL de una entrada a partir de su id: es/2026/05/rotografo → 2026/05/rotografo
export const rutaEntrada = (entry: CollectionEntry<'blog'>) => entry.id.replace(/^es\//, '').replace(/\/index$/, '');

// Entradas publicadas en español, de la más reciente a la más antigua
export const entradasPublicadas = async () =>
  (await getCollection('blog', (e) => e.id.startsWith('es/') && !e.data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

// Fecha larga: 30 de mayo de 2026
export const fechaLarga = (fecha: Date) =>
  fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
