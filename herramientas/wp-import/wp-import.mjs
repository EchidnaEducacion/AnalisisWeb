// Importa entradas del blog de WordPress (echidna.es) a la colección `blog` de web/.
// Adaptado del importador de la prueba de concepto (EchidnaEducacion.github.io, scripts/wp-import.mjs).
//
//   node wp-import.mjs --año=2026            # las entradas de un año
//   node wp-import.mjs --slug=caja-fuerte    # una entrada (se puede repetir --slug)
//   node wp-import.mjs --año=2026 --forzar   # sobrescribe las que ya existen
//
// Usa la API REST pública de WordPress, que devuelve el HTML ya renderizado. Cada entrada se escribe en
// web/src/content/blog/es/AAAA/MM/<slug>/index.md, con sus imágenes JPG, PNG y WebP al lado (las optimiza
// Astro). Los GIF y el resto de ficheros (PDF, .sb3…) van a web/public/AAAA/MM/<slug>/. Las entradas que ya
// existen no se tocan salvo con --forzar. Al terminar escribe informe.md con lo que hay que revisar a mano.
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const SITE = 'https://echidna.es';
const API = `${SITE}/wp-json/wp/v2`;
const AQUI = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.resolve(AQUI, '../../web');
const BLOG = path.join(WEB, 'src/content/blog/es');
const PUBLIC = path.join(WEB, 'public');
const CACHE = path.join(AQUI, '.cache');
const OPTIMIZABLE = /\.(jpe?g|png|webp)$/i;

const args = process.argv.slice(2);
const AÑO = args.find((a) => a.startsWith('--año='))?.slice(6);
const SLUGS = args.filter((a) => a.startsWith('--slug=')).map((a) => a.slice(7));
const FORZAR = args.includes('--forzar');
if (!AÑO && !SLUGS.length) {
  console.error('Indica qué importar: --año=AAAA o --slug=<slug> (y --forzar para sobrescribir).');
  process.exit(1);
}

// Avisos por entrada, para el informe
const informe = new Map();
const avisa = (clave, texto) => (informe.get(clave) ?? informe.set(clave, []).get(clave)).push(texto);

// ------------------------------------------------------------------ utilidades

const existe = (p) => stat(p).then(() => true, () => false);
const decodifica = (s = '') => cheerio.load(`<p>${s}</p>`)('p').text();
const yaml = (v) => JSON.stringify(v);

const peticion = async (url, opciones) => {
  const res = await fetch(url, opciones);
  if (!res.ok) throw new Error(`HTTP ${res.status} en ${url}`);
  return res;
};

const todas = async (endpoint, params = '') => {
  const items = [];
  for (let pagina = 1; ; pagina++) {
    const res = await fetch(`${API}/${endpoint}?per_page=100&page=${pagina}${params}`);
    if (res.status === 400) break;
    if (!res.ok) throw new Error(`${endpoint}: HTTP ${res.status}`);
    items.push(...(await res.json()));
    if (pagina >= Number(res.headers.get('x-wp-totalpages') ?? 1)) break;
  }
  return items;
};

const esInterno = (url) => {
  try {
    const u = new URL(url, SITE);
    return u.hostname === 'echidna.es' || u.hostname === 'www.echidna.es';
  } catch {
    return false;
  }
};
const esSubida = (url) => esInterno(url) && new URL(url, SITE).pathname.startsWith('/wp-content/uploads/');

// Descarga una vez en .cache/ y copia al destino
const descarga = async (url, destino) => {
  const { pathname } = new URL(url, SITE);
  const cache = path.join(CACHE, decodeURIComponent(pathname));
  if (!(await existe(cache))) {
    const res = await peticion(new URL(pathname, SITE));
    await mkdir(path.dirname(cache), { recursive: true });
    await writeFile(cache, Buffer.from(await res.arrayBuffer()));
  }
  await mkdir(path.dirname(destino), { recursive: true });
  await copyFile(cache, destino);
};

// WordPress nombra las miniaturas foo-300x200.jpg: se prefiere la imagen original
const imagenOriginal = async (url) => {
  const sin = url.replace(/-\d+x\d+(\.[a-z0-9]+)$/i, '$1');
  if (sin === url) return url;
  const res = await fetch(new URL(new URL(sin, SITE).pathname, SITE), { method: 'HEAD' });
  return res.ok ? sin : url;
};

const mejorSrc = ($img) => {
  const srcset = $img.attr('data-orig-srcset') ?? $img.attr('srcset') ?? '';
  const mayor = srcset
    .split(',')
    .map((s) => s.trim().split(/\s+/))
    .filter(([u, w]) => u && w)
    .sort((a, b) => parseInt(b[1]) - parseInt(a[1]))[0]?.[0];
  const src = $img.attr('data-orig-src') ?? $img.attr('data-src') ?? $img.attr('src') ?? '';
  return mayor ?? (src.startsWith('data:') ? undefined : src);
};

const tituloYouTube = async (id) => {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=${id}`);
    return res.ok ? (await res.json()).title : undefined;
  } catch {
    return undefined;
  }
};

const idYouTube = (src = '') =>
  src.match(/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([\w-]{11})/)?.[1];

// ------------------------------------------------------------------ limpieza del HTML de Avada

// Convierte el marcado de Fusion Builder en HTML sencillo que Turndown pasa a Markdown sin componentes:
// los vídeos de YouTube quedan como un párrafo con solo el enlace (la web los convierte en reproductor).
const limpia = async ($, clave) => {
  $('script, style, noscript, link, .fusion-sep-clear, .fusion-separator, .screen-reader-text, .fusion-social-networks').remove();
  $('.fusion-clearfix').filter((_, el) => $(el).text().trim() === '' && !$(el).find('img, iframe').length).remove();

  $('.wpcf7').replaceWith('<p><a href="/contacta/">Formulario de contacto</a></p>');

  $('.fusion-title').each((_, el) => {
    const $el = $(el);
    const interior = $el.find('h1, h2, h3, h4, h5, h6').last();
    const etiqueta = interior.length ? interior.get(0).tagName : 'h2';
    $el.replaceWith(`<${etiqueta}>${interior.length ? interior.html() : $el.text()}</${etiqueta}>`);
  });

  $('a.fusion-button, a.awb-button').each((_, el) => {
    const $a = $(el);
    const texto = $a.find('.fusion-button-text, .awb-button__text').text().trim() || $a.text().trim();
    $a.replaceWith(`<p><a href="${$a.attr('href') ?? '#'}">${texto}</a></p>`);
  });

  for (const el of $('iframe').toArray()) {
    const $f = $(el);
    const src = $f.attr('src') ?? $f.attr('data-orig-src') ?? '';
    const id = idYouTube(src);
    const $envoltorio = $f.closest('.fusion-video, .fluid-width-video-wrapper, .video-shortcode, .wp-block-embed');
    const destino = $envoltorio.length ? $envoltorio : $f;
    let titulo = ($f.attr('title') ?? '').trim();
    if (id) {
      // El título del iframe suele ser genérico («YouTube video player»): se pide el real a YouTube
      if (!titulo || /^youtube video player$/i.test(titulo)) titulo = (await tituloYouTube(id)) ?? '';
      destino.replaceWith(`<p><a href="https://www.youtube.com/watch?v=${id}">${titulo || 'Vídeo'}</a></p>`);
      if (!titulo) avisa(clave, `Vídeo de YouTube sin título (${id}): poner el título en el enlace`);
    } else if (/docs\.google\.com\/presentation/.test(src)) {
      destino.replaceWith(`<p><a href="${src.replace('/pubembed', '/pub')}">Ver la presentación (Google Slides)</a></p>`);
      avisa(clave, 'Presentación de Google incrustada: queda como enlace');
    } else if (src) {
      destino.replaceWith(`<p><a href="${src}">${titulo || 'Ver el contenido incrustado'}</a></p>`);
      avisa(clave, `Contenido incrustado convertido en enlace: ${src}`);
    } else destino.remove();
  }

  $('.fusion-accordian .panel, .fusion-toggle .panel').each((_, el) => {
    const $p = $(el);
    const titulo = $p.find('.panel-title, .fusion-toggle-heading').first().text().trim();
    $p.replaceWith(`<h3>${titulo}</h3>${$p.find('.panel-body, .toggle-content').first().html() ?? ''}`);
  });
  $('.fusion-tabs').each((_, el) => {
    const $t = $(el);
    const titulos = $t.find('.nav-tabs a, .tab-link').toArray().map((a) => $(a).text().trim());
    $t.replaceWith($t.find('.tab-pane').toArray().map((p, i) => `<h3>${titulos[i] ?? ''}</h3>${$(p).html()}`).join(''));
  });

  $('.fusion-alert, .alert').each((_, el) => {
    const $a = $(el);
    $a.find('.close, .alert-icon, button').remove();
    $a.replaceWith(`<blockquote>${$a.find('.fusion-alert-content').html() ?? $a.html()}</blockquote>`);
  });

  $('.fusion-blog-shortcode').each((_, el) => {
    $(el).remove();
    avisa(clave, 'Tenía un listado de entradas del blog (se ha quitado)');
  });

  // Galerías y carruseles: sus imágenes una tras otra
  $('.fusion-slider-container, .fusion-slider-sc, .fusion-gallery, .awb-gallery, .wp-block-gallery, .gallery, .fusion-image-carousel').each((_, el) => {
    const $g = $(el);
    const imgs = $g.find('img').toArray().map((i) => `<p>${$.html(i)}</p>`).join('');
    $g.replaceWith(imgs);
    avisa(clave, 'Tenía una galería: sus imágenes van seguidas, revisar cómo quedan');
  });

  // Contenedores de maquetación: se quedan solo con su contenido
  const envoltorios = [
    '.fusion-fullwidth', '.fusion-builder-row', '.fusion-row', '.fusion-layout-column', '.fusion-column-wrapper',
    '.fusion-text', '.fusion-imageframe', '.imageframe-align-center', '.fusion-image-element', '.fusion-li-item-content',
    '.fusion-flex-container', '.fusion-column-content-centered', '.fusion-column-content', '.fusion-video',
    '.awb-image-frame', '.fusion-aligncenter', '.fusion-title-sc-wrapper', '.fusion-container-anchor',
    '.wp-block-group', '.wp-block-columns', '.wp-block-column', '.wp-block-image', 'figure.wp-block-embed',
  ].join(', ');
  let $w;
  while (($w = $(envoltorios).first()).length) $w.replaceWith($w.contents());

  $('ul.fusion-checklist li .icon-wrapper').remove();
  $('[style]').removeAttr('style');
  $('p:empty').remove();
};

// ------------------------------------------------------------------ imágenes y enlaces

const localiza = async ($, carpeta, publica, rutaPublica, clave) => {
  const usados = new Map();
  const nombreLibre = (url) => {
    let nombre = path.basename(decodeURIComponent(new URL(url, SITE).pathname));
    if (usados.has(nombre) && usados.get(nombre) !== url) nombre = `${usados.size}-${nombre}`;
    usados.set(nombre, url);
    return nombre;
  };
  const aPublic = async (url) => {
    const nombre = nombreLibre(url);
    await descarga(url, path.join(publica, nombre));
    return `${rutaPublica}/${nombre}`;
  };

  for (const el of $('img').toArray()) {
    const $img = $(el);
    const src = mejorSrc($img);
    if (!src) {
      $img.remove();
      continue;
    }
    try {
      if (esSubida(src) && OPTIMIZABLE.test(new URL(src, SITE).pathname)) {
        const original = await imagenOriginal(src);
        const nombre = nombreLibre(original);
        await descarga(original, path.join(carpeta, nombre));
        $img.attr('src', `./${nombre}`);
      } else if (esSubida(src)) {
        $img.attr('src', await aPublic(src));
      } else {
        // Imagen externa (p. ej. de un repo de GitHub): se descarga junto a la entrada
        const directa = src.replace(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/blob\/(.+?)(\?raw=true)?$/, 'https://raw.githubusercontent.com/$1/$2');
        const nombre = nombreLibre(directa.split('?')[0]);
        const res = await peticion(directa);
        const destino = OPTIMIZABLE.test(nombre) ? path.join(carpeta, nombre) : path.join(publica, nombre);
        await mkdir(path.dirname(destino), { recursive: true });
        await writeFile(destino, Buffer.from(await res.arrayBuffer()));
        $img.attr('src', OPTIMIZABLE.test(nombre) ? `./${nombre}` : `${rutaPublica}/${nombre}`);
        avisa(clave, `Imagen externa descargada: ${src}`);
      }
    } catch (error) {
      avisa(clave, `No se ha podido descargar la imagen ${src} (${error.message})`);
    }
    if (!($img.attr('alt') ?? '').trim()) avisa(clave, `Imagen sin texto alternativo: ${$img.attr('src')}`);
    for (const a of ['srcset', 'sizes', 'data-orig-src', 'data-orig-srcset', 'data-src', 'width', 'height', 'class', 'loading', 'decoding', 'title'])
      $img.removeAttr(a);
  }

  for (const el of $('a[href]').toArray()) {
    const $a = $(el);
    const href = $a.attr('href');
    if (!esInterno(href)) continue;
    // Enlace a la propia imagen alrededor de ella (lightbox): solo la imagen
    if (esSubida(href) && /\.(jpe?g|png|webp|gif)$/i.test(href) && $a.find('img').length) {
      $a.replaceWith($a.contents());
      continue;
    }
    try {
      if (esSubida(href)) $a.attr('href', await aPublic(href));
      else {
        const u = new URL(href, SITE);
        $a.attr('href', `${u.pathname}${u.hash}`);
        avisa(clave, `Enlace interno a revisar: ${u.pathname}${u.hash}`);
      }
    } catch (error) {
      avisa(clave, `No se ha podido descargar ${href} (${error.message})`);
    }
  }
};

// Las imágenes van en su propio párrafo: WordPress las mete a veces en un párrafo con texto o dentro de una
// negrita, y en Markdown quedarían pegadas al texto o romperían la negrita
const separaImagenes = ($) => {
  for (const el of $('img').toArray()) {
    const $img = $(el);
    const $estilo = $img.parents('strong, b, em, i').last();
    if ($estilo.length) {
      $estilo.after($img);
      $estilo.html(($estilo.html() ?? '').replace(/(<br\s*\/?>|\s)+$/i, ''));
    }
    // En un elemento de lista, la imagen va en su propia línea
    const anterior = el.prev;
    if ($img.parent('li').length && anterior && !(anterior.type === 'tag' && anterior.name === 'br') && $(anterior).text().trim()) $img.before('<br>');
    const $p = $img.parent('p');
    if (!$p.length || $p.text().trim() === '') continue;
    const marca = 'IMAGEN-SEPARADA';
    const html = $.html($img);
    $img.replaceWith(marca);
    const [antes, despues] = ($p.html() ?? '').split(marca);
    const parrafo = (h) => (h.replace(/<br\s*\/?>\s*$/i, '').trim() ? `<p>${h}</p>` : '');
    $p.replaceWith(`${parrafo(antes)}<p>${html}</p>${parrafo(despues)}`);
  }
};

// ------------------------------------------------------------------ Markdown

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-', emDelimiter: '*' });
turndown.use(gfm);
turndown.addRule('elementoLista', {
  filter: 'li',
  replacement: (contenido, nodo, opciones) => {
    const padre = nodo.parentNode;
    const i = Array.prototype.indexOf.call(padre.children, nodo);
    const prefijo = padre.nodeName === 'OL' ? `${(Number(padre.getAttribute('start')) || 1) + i}. ` : `${opciones.bulletListMarker} `;
    const texto = contenido.replace(/^\n+/, '').replace(/\n+$/, '').replace(/\n{2,}/g, '\n').replace(/\n/g, `\n${' '.repeat(prefijo.length)}`);
    return prefijo + texto + (nodo.nextSibling ? '\n' : '');
  },
});
const aMarkdown = (html) => turndown.turndown(html).replace(/ /g, ' ').replace(/\n{3,}/g, '\n\n').trim();

// ------------------------------------------------------------------ descripción

// La colección exige entre 50 y 160 caracteres
// Si WordPress no tiene descripción SEO, se toma el principio del texto, cortado en un final de frase
const descripcion = (post, clave) => {
  let d = (post.yoast_head_json?.description ?? '').trim();
  if (!d) {
    const $ = cheerio.load(post.content.rendered);
    const texto = $('p').toArray().map((p) => $(p).text().replace(/\s+/g, ' ').trim()).filter(Boolean).join(' ');
    const frases = texto.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [texto];
    d = '';
    for (const f of frases) {
      if ((d + f).trim().length > 160) break;
      d = (d + f).trim() + ' ';
    }
    d = d.trim() || texto;
  }
  if (d.length > 160) {
    d = d.slice(0, 159).replace(/\s+\S*$/, '').replace(/[,;:.\s]+$/, '') + '…';
    avisa(clave, 'Descripción recortada a 160 caracteres: revisarla');
  }
  if (d.length < 50) avisa(clave, `Descripción demasiado corta (${d.length} caracteres): escribirla a mano`);
  return d;
};

// ------------------------------------------------------------------ principal

const main = async () => {
  const autoresWeb = await readFile(path.join(WEB, 'src/content/autores.yaml'), 'utf8');
  const idsAutores = new Set([...autoresWeb.matchAll(/^- id: (\S+)/gm)].map((m) => m[1]));

  console.log('Leyendo categorías, etiquetas y autores de WordPress…');
  const [categorias, etiquetas, usuarios] = await Promise.all([todas('categories'), todas('tags'), todas('users')]);
  const catPorId = new Map(categorias.map((c) => [c.id, c]));
  // Id de categoría como en la web: con su madre delante (recursos/proyectos)
  const idCategoria = (c) => (c.parent ? `${catPorId.get(c.parent).slug}/${c.slug}` : c.slug);
  const etiquetaPorId = new Map(etiquetas.map((t) => [t.id, decodifica(t.name)]));
  const autorPorId = new Map(usuarios.map((u) => [u.id, u.slug]));

  console.log('Leyendo entradas…');
  const filtro = AÑO ? `&after=${AÑO}-01-01T00:00:00&before=${Number(AÑO) + 1}-01-01T00:00:00` : '';
  const entradas = (await todas('posts', filtro)).filter((p) => p.status === 'publish' && (!SLUGS.length || SLUGS.includes(p.slug)));
  if (SLUGS.length) for (const s of SLUGS.filter((s) => !entradas.some((p) => p.slug === s))) console.warn(`  No existe la entrada «${s}»`);

  let escritas = 0;
  for (const post of entradas) {
    const [año, mes] = [post.date.slice(0, 4), post.date.slice(5, 7)];
    const clave = `${año}/${mes}/${post.slug}`;
    const carpeta = path.join(BLOG, año, mes, post.slug);
    if (!FORZAR && (await existe(path.join(carpeta, 'index.md')))) {
      console.log(`  ${clave}: ya existe, se deja como está`);
      continue;
    }
    console.log(`  ${clave}`);
    const publica = path.join(PUBLIC, año, mes, post.slug);
    const rutaPublica = `/${año}/${mes}/${post.slug}`;

    if (new URL(post.link).pathname !== `/${clave}/`) avisa(clave, `Su URL en WordPress es ${new URL(post.link).pathname}`);

    const $ = cheerio.load(post.content.rendered, null, false);
    await limpia($, clave);
    await localiza($, carpeta, publica, rutaPublica, clave);
    const restos = [...new Set($('[class*="fusion-"], [class*="awb-"]').toArray().flatMap((el) => ($(el).attr('class') ?? '').split(/\s+/).filter((c) => /^(fusion|awb)-/.test(c))))];
    if (restos.length) avisa(clave, `Quedan clases de Avada sin convertir: ${restos.join(', ')}`);
    separaImagenes($);
    let markdown = aMarkdown($.html());
    if (/\[\/?(fusion|awb)_/.test(markdown)) avisa(clave, 'Quedan shortcodes [fusion_…] sin convertir');

    // Imagen de portada
    let imagen, imagenAlt;
    if (post.featured_media) {
      try {
        const media = await (await peticion(`${API}/media/${post.featured_media}`)).json();
        const nombre = path.basename(decodeURIComponent(new URL(media.source_url).pathname));
        if (OPTIMIZABLE.test(nombre)) {
          await descarga(media.source_url, path.join(carpeta, nombre));
          imagen = `./${nombre}`;
          imagenAlt = decodifica(media.alt_text ?? '').trim() || undefined;
          if (!imagenAlt) avisa(clave, 'La imagen de portada no tiene texto alternativo (imageAlt)');
        } else avisa(clave, `La imagen de portada no es JPG, PNG ni WebP (${nombre}): elegir otra`);
      } catch (error) {
        avisa(clave, `No se ha podido descargar la imagen de portada (${error.message})`);
      }
    } else avisa(clave, 'No tiene imagen de portada');

    const autor = autorPorId.get(post.author);
    if (!idsAutores.has(autor)) avisa(clave, `El autor «${autor}» no está en autores.yaml: añadirlo antes de publicar`);
    const cats = post.categories.map((id) => catPorId.get(id)).filter((c) => c && c.slug !== 'sin-categoria').map(idCategoria);
    if (!cats.length) avisa(clave, 'No tiene categoría: asignar una');

    const lineas = [
      '---',
      `title: ${yaml(decodifica(post.title.rendered))}`,
      `description: ${yaml(descripcion(post, clave))}`,
      `date: ${post.date.slice(0, 10)}`,
      ...(post.modified.slice(0, 10) > post.date.slice(0, 10) ? [`updated: ${post.modified.slice(0, 10)}`] : []),
      `author: ${autor}`,
      `categories: [${cats.join(', ')}]`,
      ...(post.tags.length ? [`tags: [${post.tags.map((id) => yaml(etiquetaPorId.get(id))).join(', ')}]`] : []),
      ...(imagen ? [`image: ${imagen}`] : []),
      ...(imagenAlt ? [`imageAlt: ${yaml(imagenAlt)}`] : []),
      '---',
      '',
    ];
    await mkdir(carpeta, { recursive: true });
    await writeFile(path.join(carpeta, 'index.md'), `${lineas.join('\n')}\n${markdown}\n`);
    escritas++;
  }

  const partes = [`# Informe de importación\n\n${new Date().toISOString().slice(0, 16).replace('T', ' ')} · ${escritas} entradas escritas\n`];
  for (const [clave, avisos] of informe) partes.push(`## ${clave}\n\n${[...new Set(avisos)].map((a) => `- ${a}`).join('\n')}\n`);
  await writeFile(path.join(AQUI, 'informe.md'), partes.join('\n'));
  console.log(`Hecho: ${escritas} entradas. Avisos en herramientas/wp-import/informe.md`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
