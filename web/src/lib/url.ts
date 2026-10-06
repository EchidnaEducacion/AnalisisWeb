// Antepone `base` (p. ej. /AnalisisWeb/) a una ruta interna del sitio,
// para que los enlaces funcionen igual en local y en GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const url = (path = '') => base + path.replace(/^\//, '');
