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
  markdown: { processor: satteri({ hastPlugins: [enlacesConBase, tablasConMarco] }) },
});
