// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import redirecciones from './redirecciones.mjs';

// Colores del tema claro de Arduino IDE, como en la GuiaInicioArduinoIDE: el código se ve como en el editor
const temaArduino = {
  name: 'arduino-ide',
  type: 'light',
  colors: { 'editor.background': '#ffffff', 'editor.foreground': '#434f54' },
  tokenColors: [
    { settings: { foreground: '#434f54' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#95a5a6' } },
    { scope: ['storage.type', 'storage.modifier', 'constant.language'], settings: { foreground: '#00979d' } },
    { scope: ['keyword.control', 'keyword.other'], settings: { foreground: '#5e6d03' } },
    { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#d35400' } },
    { scope: ['string', 'punctuation.definition.string'], settings: { foreground: '#005c5f' } },
  ],
};

// Las tablas del Markdown van dentro de .table-wrap, como en las plantillas:
// borde redondeado y desplazamiento horizontal en móvil en vez de ensanchar la página
const tablasConMarco = {
  name: 'tablas-con-marco',
  element: {
    filter: ['table'],
    visit(node, ctx) {
      ctx.wrapNode(node, { type: 'element', tagName: 'div', properties: { className: ['table-wrap'] }, children: [] });
    },
  },
};

// Vídeos de YouTube y presentaciones de Google: un párrafo que solo contiene un enlace a uno de
// ellos se convierte en el reproductor de las plantillas, que no carga nada de fuera hasta que se
// pulsa (privacidad y rendimiento). El texto del enlace es el pie:
// [Rotógrafo con Echidna](https://www.youtube.com/watch?v=…)
// [Ver la presentación (Google Slides)](https://docs.google.com/presentation/d/e/…/pub?…)
const texto = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(texto).join(''));
const incrustable = (href, titulo) => {
  if (typeof href !== 'string') return undefined;
  const yt = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  if (yt) {
    const pie = titulo || 'Vídeo';
    return { src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1`, pie, titulo: `Vídeo: ${pie}`, icono: 'i-play', nota: 'YouTube · se carga al pulsar' };
  }
  // Publicadas (/d/e/<id>/pub) o compartidas (/d/<id>/edit): las dos se incrustan con /embed
  const gs = href.match(/docs\.google\.com\/presentation\/d\/(e\/[\w-]+|[\w-]+)/);
  if (gs) {
    // «Ver la presentación (Google Slides)» → «Presentación»: lo demás ya lo dice la nota
    const limpio = titulo.replace(/^(ver|enlace a) la /i, '').replace(/\s*\(Google Slides\)$/i, '');
    const pie = limpio ? limpio[0].toUpperCase() + limpio.slice(1) : 'Presentación';
    return {
      src: `https://docs.google.com/presentation/d/${gs[1]}/embed?start=false&loop=false&delayms=3000`,
      pie, titulo: `Presentación: ${pie}`, icono: 'i-slides', nota: 'Google Slides · se carga al pulsar',
    };
  }
  return undefined;
};
const incrustados = {
  name: 'incrustados',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const hijos = (node.children ?? []).filter((n) => !(n.type === 'text' && !n.value.trim()));
      const enlace = hijos.length === 1 && hijos[0].type === 'element' && hijos[0].tagName === 'a' ? hijos[0] : null;
      const datos = enlace && incrustable(enlace.properties?.href, texto(enlace).trim());
      if (!datos) return;
      const span = (clase, children) => ({ type: 'element', tagName: 'span', properties: { className: [clase] }, children });
      const icono = (nombre) => ({
        type: 'element', tagName: 'svg', properties: { ariaHidden: 'true' },
        children: [{ type: 'element', tagName: 'use', properties: { href: `#${nombre}` }, children: [] }],
      });
      ctx.replaceNode(node, {
        type: 'element', tagName: 'div', properties: { className: ['embed'] },
        children: [{
          type: 'element', tagName: 'button',
          properties: { className: ['embed__poster'], type: 'button', dataSrc: datos.src, dataTitle: datos.titulo },
          children: [
            span('embed__play', [icono(datos.icono)]),
            span('embed__caption', [{ type: 'text', value: datos.pie }]),
            span('embed__note', [{ type: 'text', value: datos.nota }]),
          ],
        }],
      });
    },
  },
};

// Galerías: un párrafo que solo contiene imágenes (dos o más, en líneas seguidas sin línea en
// blanco entre ellas) se convierte en una rejilla .gallery. Las imágenes que ya eran un enlace lo conservan,
// y el título de la imagen, si lo tiene, es su pie: ![Texto alternativo](./foto.jpg "Pie de la foto")
const galerias = {
  name: 'galerias',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const hijos = (node.children ?? []).filter((n) => !(n.type === 'text' && !n.value.trim()));
      const esImagen = (n) => n.type === 'element' && n.tagName === 'img';
      const esEnlaceConImagen = (n) =>
        n.type === 'element' && n.tagName === 'a'
        && (n.children ?? []).filter((h) => !(h.type === 'text' && !h.value.trim())).every(esImagen);
      if (hijos.length < 2 || !hijos.every((n) => esImagen(n) || esEnlaceConImagen(n))) return;
      ctx.replaceNode(node, {
        type: 'element', tagName: 'ul', properties: { className: ['gallery'] },
        children: hijos.map((n) => {
          const img = esImagen(n) ? n : (n.children ?? []).find(esImagen);
          const pie = img?.properties?.title;
          if (!pie) return { type: 'element', tagName: 'li', properties: {}, children: [n] };
          // Los nodos no se pueden modificar: se copia la imagen sin el título (y su enlace, si lo tiene)
          const { title, ...propiedades } = img.properties;
          const sinTitulo = { ...img, properties: propiedades };
          const contenido = esImagen(n) ? sinTitulo : { ...n, children: [sinTitulo] };
          return {
            type: 'element', tagName: 'li', properties: {},
            children: [{
              type: 'element', tagName: 'figure', properties: {},
              children: [contenido, { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: pie }] }],
            }],
          };
        }),
      });
    },
  },
};

// Enlaces externos (http/https) del Markdown: se abren en una pestaña nueva, como las tarjetas
const enlacesExternos = {
  name: 'enlaces-externos',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties?.href;
      if (typeof href !== 'string' || !/^https?:\/\//.test(href)) return;
      // Los nodos no se pueden modificar: se sustituye por una copia con los atributos
      ctx.replaceNode(node, { ...node, properties: { ...node.properties, target: '_blank', rel: ['noopener'] } });
    },
  },
};

// Buscador en el servidor de desarrollo: el índice de Pagefind solo se genera al final del build,
// así que `astro dev` sirve en /pagefind/ el del último build (dist/pagefind/). Si no hay build,
// no hace nada y el buscador dice que no está disponible. No afecta al build.
const indiceDelBuscadorEnDev = {
  name: 'indice-del-buscador-en-dev',
  hooks: {
    'astro:server:setup': ({ server }) => {
      const dir = join(process.cwd(), 'dist', 'pagefind');
      const tipos = { '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm' };
      server.middlewares.use('/pagefind/', (req, res, next) => {
        const ruta = normalize(join(dir, decodeURIComponent((req.url ?? '').split('?')[0])));
        if (!ruta.startsWith(dir) || !existsSync(ruta) || !statSync(ruta).isFile()) return next();
        res.setHeader('Content-Type', tipos[extname(ruta)] ?? 'application/octet-stream');
        res.setHeader('Cache-Control', 'no-store');
        createReadStream(ruta).pipe(res);
      });
    },
  },
};

// Tipografías: Astro las descarga de Google Fonts al hacer el build y las sirve desde la propia web,
// para que las visitas no se conecten a Google (y no le envíen su IP). Cada una define su variable CSS
// (--font-head…), que usa echidna.css; las familias de reserva son las del sistema.
const tipografias = [
  { name: 'Exo 2', cssVariable: '--font-head', weights: [600, 700, 800], styles: ['normal'], fallbacks: ['system-ui', 'sans-serif'] },
  { name: 'Atkinson Hyperlegible', cssVariable: '--font-body', weights: [400, 700], styles: ['normal'], fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] },
  { name: 'Atkinson Hyperlegible', cssVariable: '--font-body', weights: [400], styles: ['italic'], fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] },
  { name: 'JetBrains Mono', cssVariable: '--font-mono', weights: [400, 700], styles: ['normal'], fallbacks: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'] },
  // Solo para el nombre «EchidnaEducación» de la cabecera, como en el logo
  { name: 'Open Sans', cssVariable: '--font-brand', weights: [400], styles: ['normal'], fallbacks: ['system-ui', 'sans-serif'] },
].map((t) => ({ provider: fontProviders.google(), subsets: ['latin'], ...t }));

export default defineConfig({
  site: 'https://echidnaeducacion.github.io',
  // URL de carpeta: /politica-privacidad/ → politica-privacidad/index.html
  build: { format: 'directory' },
  // Español en la raíz y la versión en inglés bajo /en/
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [indiceDelBuscadorEnDev],
  fonts: tipografias,
  // URL de la web anterior (ver redirecciones.mjs y ../redirecciones.md)
  redirects: redirecciones,
  markdown: {
    processor: satteri({ hastPlugins: [tablasConMarco, incrustados, galerias, enlacesExternos] }),
    // ```arduino se resalta como C++. Cada token lleva también el color del tema de Arduino IDE en
    // --shiki-arduino, que echidna.css aplica a pre[data-language="arduino"]; el resto usa github-dark
    shikiConfig: { themes: { oscuro: 'github-dark', arduino: temaArduino }, defaultColor: 'oscuro', langAlias: { arduino: 'cpp' } },
  },
});
