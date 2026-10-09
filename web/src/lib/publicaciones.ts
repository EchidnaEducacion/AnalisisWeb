// Utilidades para la colección `publicaciones` (página 5.3)
import { getCollection, type CollectionEntry } from 'astro:content';

export type Publicacion = CollectionEntry<'publicaciones'>['data'] & { id: string };

// Publicaciones con una importancia mínima, de la más reciente a la más antigua, agrupadas por año
export async function publicacionesPorAño(minimo: number) {
  const todas = (await getCollection('publicaciones'))
    .filter((p) => p.data.importance >= minimo)
    .map((p) => ({ id: p.id, ...p.data }))
    // Las fechas AAAA-MM-DD, AAAA-MM y AAAA se ordenan bien como texto
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'es'));
  const años = new Map<string, Publicacion[]>();
  for (const p of todas) {
    const año = p.date.slice(0, 4);
    años.set(año, [...(años.get(año) ?? []), p]);
  }
  return [...años].map(([año, lista]) => ({ año, lista }));
}

// Fecha legible: 6 de febrero de 2026, abril de 2026 o 2024
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
export function fechaLegible(fecha: string) {
  const [año, mes, día] = fecha.split('-');
  if (día) return `${Number(día)} de ${meses[Number(mes) - 1]} de ${año}`;
  if (mes) return `${meses[Number(mes) - 1]} de ${año}`;
  return año;
}
