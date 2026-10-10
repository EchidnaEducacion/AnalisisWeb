// Utilidades para la colección `recursos` (Materiales alumnado y Recursos docentes)
import { getCollection, type CollectionEntry } from 'astro:content';

export type Recurso = CollectionEntry<'recursos'>['data'] & { id: string };

// Orden de los entornos y de los grupos; lo que no esté en la lista va al final, por orden alfabético
const ordenEntornos = [
  // Materiales alumnado
  'EchidnaML', 'Snap!', 'Arduino IDE',
  // Recursos docentes: un título por material
  'Proyectos de inicio con EchidnaML', 'Situaciones de aprendizaje', 'Proyectos de inicio con Arduino IDE',
  'Otros recursos',
];
const ordenGrupos = ['Proyectos y Manual', 'Proyectos', 'Situaciones de aprendizaje', 'Guías'];
const posicion = (lista: string[], valor: string) => (lista.includes(valor) ? lista.indexOf(valor) : lista.length);
const porLista = (lista: string[]) => (a: string, b: string) =>
  posicion(lista, a) - posicion(lista, b) || a.localeCompare(b, 'es');

// Recursos de un público agrupados por entorno y, dentro, por grupo
export async function recursosPorEntorno(publico: 'alumnado' | 'docentes') {
  const todos = (await getCollection('recursos'))
    .filter((r) => r.data.audience === publico && !r.data.draft)
    .map((r) => ({ id: r.id, ...r.data }));
  const entornos = [...new Set(todos.map((r) => r.environment))].sort(porLista(ordenEntornos));
  return entornos.map((entorno) => {
    const delEntorno = todos.filter((r) => r.environment === entorno);
    const grupos = [...new Set(delEntorno.map((r) => r.group))].sort(porLista(ordenGrupos));
    return {
      entorno,
      grupos: grupos.map((grupo) => ({
        grupo,
        lista: delEntorno.filter((r) => r.group === grupo).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'es')),
      })),
    };
  });
}

// Identificador de un entorno para el índice lateral: «Arduino IDE» → entorno-arduino-ide
export const anclaEntorno = (entorno: string) =>
  'entorno-' + entorno.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Sitio al que lleva un enlace externo, para indicarlo en la tarjeta: rea.echidna.es
export const sitio = (url?: string) => (url?.startsWith('http') ? new URL(url).hostname.replace(/^www\./, '') : '');
