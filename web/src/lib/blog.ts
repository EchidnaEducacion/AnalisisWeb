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

// Entradas por página en los listados (/blog/, categorías, etiquetas y autores)
export const POR_PAGINA = 12;

// Tramo de URL de una etiqueta, como en WordPress: «IDE Arduino» → ide-arduino
export const slugEtiqueta = (etiqueta: string) =>
  etiqueta.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Rutas de los listados, sin base ni barras, como en WordPress
export const rutaCategoria = (id: string) => `category/${id}`;
export const rutaEtiqueta = (etiqueta: string) => `tag/${slugEtiqueta(etiqueta)}`;
export const rutaAutor = (id: string) => `author/${id}`;

// Páginas de un listado: la primera en <base>/ y las siguientes en <base>/page/2/…, como en WordPress.
// Devuelve, para cada página, el tramo que sigue a la base (vacío en la primera) y sus entradas.
export function paginar(entradas: CollectionEntry<'blog'>[]) {
  const total = Math.max(1, Math.ceil(entradas.length / POR_PAGINA));
  return Array.from({ length: total }, (_, i) => ({
    tramo: i === 0 ? undefined : `page/${i + 1}`,
    pagina: i + 1,
    total,
    entradas: entradas.slice(i * POR_PAGINA, (i + 1) * POR_PAGINA),
  }));
}
