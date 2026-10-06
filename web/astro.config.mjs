// @ts-check
import { defineConfig } from 'astro/config';

// Se publica en https://echidnaeducacion.github.io/AnalisisWeb/
export default defineConfig({
  site: 'https://echidnaeducacion.github.io',
  base: '/AnalisisWeb',
  // Genera portada.html, actividad.html… para que los enlaces entre plantillas sigan funcionando
  build: { format: 'file' },
});
