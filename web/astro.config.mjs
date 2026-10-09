// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

const base = '/AnalisisWeb';

// En el Markdown los enlaces internos se escriben sin `base` (/contacta/):
// este plugin de Sätteri se lo antepone a los href y src que empiezan por /
const conBase = (v) =>
  typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith(base + '/')
    ? base + v
    : v;
const enlacesConBase = {
  name: 'enlaces-con-base',
  element: {
    filter: ['a', 'img'],
    visit(node, ctx) {
      const attr = node.tagName === 'a' ? 'href' : 'src';
      const valor = node.properties?.[attr];
      if (conBase(valor) !== valor) ctx.setProperty(node, attr, conBase(valor));
    },
  },
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

// Vídeos de YouTube: un párrafo que solo contiene un enlace a YouTube se convierte en el
// reproductor de las plantillas, que no carga YouTube hasta que se pulsa (privacidad y rendimiento).
// El texto del enlace es el pie del vídeo: [Rotógrafo con Echidna](https://www.youtube.com/watch?v=…)
const idYouTube = (href) =>
  typeof href === 'string'
    ? (href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/) ?? [])[1]
    : undefined;
const texto = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(texto).join(''));
const videosYouTube = {
  name: 'videos-youtube',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const hijos = (node.children ?? []).filter((n) => !(n.type === 'text' && !n.value.trim()));
      const enlace = hijos.length === 1 && hijos[0].type === 'element' && hijos[0].tagName === 'a' ? hijos[0] : null;
      const id = enlace && idYouTube(enlace.properties?.href);
      if (!id) return;
      const titulo = texto(enlace).trim() || 'Vídeo';
      const span = (clase, children) => ({ type: 'element', tagName: 'span', properties: { className: [clase] }, children });
      const icono = (nombre) => ({
        type: 'element', tagName: 'svg', properties: { ariaHidden: 'true' },
        children: [{ type: 'element', tagName: 'use', properties: { href: `#${nombre}` }, children: [] }],
      });
      ctx.replaceNode(node, {
        type: 'element', tagName: 'div', properties: { className: ['embed'] },
        children: [{
          type: 'element', tagName: 'button',
          properties: {
            className: ['embed__poster'], type: 'button',
            dataSrc: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
            dataTitle: `Vídeo: ${titulo}`,
          },
          children: [
            span('embed__play', [icono('i-play')]),
            span('embed__caption', [{ type: 'text', value: titulo }]),
            span('embed__note', [{ type: 'text', value: 'YouTube · se carga al pulsar' }]),
          ],
        }],
      });
    },
  },
};

export default defineConfig({
  site: 'https://echidnaeducacion.github.io',
  base,
  // URL de carpeta: /politica-privacidad/ → politica-privacidad/index.html
  build: { format: 'directory' },
  // Español en la raíz y la versión en inglés bajo /en/
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  markdown: { processor: satteri({ hastPlugins: [enlacesConBase, tablasConMarco, videosYouTube] }) },
});
