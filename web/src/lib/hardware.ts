// Utilidades para las fichas de la colección `hardware`
import type { CollectionEntry } from 'astro:content';

// URL de una ficha a partir de su id: es/echidnablack2/leds → ecosistema/echidnablack2/leds
export const rutaHardware = (entry: CollectionEntry<'hardware'>) =>
  'ecosistema/' + entry.id.replace(/^es\//, '').replace(/\/index$/, '');

// Nombre visible de cada placa del campo `board`
export const placas: Record<string, string> = {
  echidnablack2: 'EchidnaBlack2',
};

// Rótulo de la ficha: «Componente · Salida», «Placa»…
const tipos = { placa: 'Placa', componente: 'Componente', complemento: 'Complemento' };
export const rotuloDe = ({ kind, io }: CollectionEntry<'hardware'>['data']) =>
  [tipos[kind], io && io[0].toUpperCase() + io.slice(1)].filter(Boolean).join(' · ');
