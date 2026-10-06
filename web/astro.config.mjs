// @ts-check
import { defineConfig } from 'astro/config';

// Se publica en https://echidnaeducacion.github.io/AnalisisWeb/
export default defineConfig({
  site: 'https://echidnaeducacion.github.io',
  base: '/AnalisisWeb',
  // Genera portada.html, actividad.html… (un fichero por página)
  build: { format: 'file' },
});
