// Utilidades para las páginas de la colección `paginas`
import type { CollectionEntry } from 'astro:content';

// URL de una página a partir de su id: es/quienes-somos/licencias → quienes-somos/licencias
export const rutaDe = (entry: CollectionEntry<'paginas'>) => entry.id.replace(/^es\//, '');

// Sección del menú (color de acento y entrada activa) según el primer tramo de la URL
const secciones: Record<string, string> = {
  ecosistema: 'ecosistema',
  alumnado: 'alumnado',
  docentes: 'docentes',
  blog: 'blog',
  'quienes-somos': 'nosotros',
  contacta: 'nosotros',
};
export const seccionDe = (ruta: string) => secciones[ruta.split('/')[0]];
