// RSS del blog: las últimas entradas con su título, resumen, autor y categorías.
// Lo sirven /rss.xml y /feed/ (la dirección de WordPress, que los lectores de RSS no siguen si redirige).
import { getEntries, getEntry } from 'astro:content';
import { entradasPublicadas, rutaEntrada } from './blog';

// Entradas que lleva el RSS, de la más reciente a la más antigua
const EN_EL_RSS = 20;

const escapar = (texto: string) =>
  texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function rss(site: URL) {
  // Dirección absoluta, con base: https://…/AnalisisWeb/blog/
  const absoluta = (ruta: string) => new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/') + ruta, site).href;
  const entradas = (await entradasPublicadas()).slice(0, EN_EL_RSS);

  const items = await Promise.all(
    entradas.map(async (e) => {
      const autor = await getEntry(e.data.author);
      const categorias = await getEntries(e.data.categories);
      const enlace = absoluta(`${rutaEntrada(e)}/`);
      return `    <item>
      <title>${escapar(e.data.title)}</title>
      <link>${enlace}</link>
      <guid isPermaLink="true">${enlace}</guid>
      <pubDate>${e.data.date.toUTCString()}</pubDate>
      <dc:creator>${escapar(autor.data.name)}</dc:creator>
${categorias.map((c) => `      <category>${escapar(c.data.name)}</category>`).join('\n')}
      <description>${escapar(e.data.description)}</description>
    </item>`;
    }),
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog de Echidna Educación</title>
    <link>${absoluta('blog/')}</link>
    <atom:link href="${absoluta('rss.xml')}" rel="self" type="application/rss+xml"/>
    <description>Proyectos, recursos didácticos y noticias de Echidna: programación, robótica e inteligencia artificial en el aula.</description>
    <language>es</language>
    <lastBuildDate>${(entradas[0]?.data.date ?? new Date()).toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>
`;
}

export const respuestaRss = async (site: URL) =>
  new Response(await rss(site), { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
