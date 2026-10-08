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
  markdown: { processor: satteri({ hastPlugins: [enlacesConBase] }) },
});
