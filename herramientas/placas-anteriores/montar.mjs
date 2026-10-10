// Monta el documento Markdown de una placa anterior a partir de sus páginas de WordPress, ya convertidas
// con el importador (../wp-import, modo --pagina) en paginas/<slug>/index.md.
//
//   node montar.mjs echidnashield     # escribe echidnashield.md
//
// Ordena las páginas en partes, baja un nivel sus títulos, convierte los enlaces entre ellas en enlaces
// dentro del documento y quita los «Saber más». Después el documento se revisa y se corrige a mano: no
// conviene volver a montarlo sin guardar antes esas correcciones.
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));

// Partes y páginas de cada documento: [slug de la página, título de la sección, otros nombres con los que
// la enlazan las demás páginas]
const DOCUMENTOS = {
  echidnashield: {
    titulo: 'EchidnaShield',
    partes: [
      ['La placa', [
        ['echidna-shield', 'Presentación'],
        ['alimentacion-echidnashield', 'Alimentación'],
        ['modo-sensores-modo-mkmk-shield', 'Modo sensores / Modo MkMk'],
      ]],
      ['Componentes', [
        ['leds', 'LEDs', ['leds rog']],
        ['pulsadores', 'Pulsadores'],
        ['joystick', 'Joystick'],
        ['sensor-luz-ldr', 'Sensor de luz (LDR)', ['sensor luz ldr']],
        ['led-rgb', 'LED RGB'],
        ['audio', 'Audio'],
        ['acelerometro-shield', 'Acelerómetro', ['acelerómetro']],
        ['conexiones-mkmk-shield', 'Conexiones MkMk', ['mkmk']],
      ]],
      ['Complementos', [
        ['complementos-echidna-shield', 'Complementos'],
        ['servomotor-de-posicion-shield', 'Servomotor de posición', ['servomotor posición']],
        ['servomotor-continuo-shield', 'Servomotor continuo'],
        ['sensor-temperatura-lm35-shield', 'Sensor de temperatura LM35', ['sensor temperatura']],
        ['bluetooth-shield', 'Bluetooth'],
      ]],
      ['Documentación', [
        ['documentacion-echidnashield', 'Documentación técnica'],
      ]],
    ],
  },
  echidnablack: {
    titulo: 'EchidnaBlack',
    partes: [
      ['La placa', [
        ['echidnablack', 'Presentación'],
        ['puesta-en-marcha-echidna-black', 'Puesta en marcha'],
        ['alimentacion-echidnablack', 'Alimentación'],
        ['modo-sensores-modo-mkmk-black', 'Modo sensores / Modo MkMk'],
      ]],
      ['Componentes', [
        ['leds', 'LEDs', ['leds rog']],
        ['pulsadores', 'Pulsadores'],
        ['joystick', 'Joystick'],
        ['sensor-luz-ldr', 'Sensor de luz (LDR)', ['sensor luz ldr']],
        ['led-rgb', 'LED RGB'],
        ['audio', 'Audio'],
        ['microfono', 'Micrófono'],
        ['sensor-temperatura-lm35', 'Sensor de temperatura LM35', ['sensor temperatura']],
        ['acelerometro-black', 'Acelerómetro', ['acelerómetro']],
        ['conexiones-mkmk-black', 'Conexiones MkMk', ['mkmk']],
      ]],
      ['Complementos', [
        ['complementos-echidnablack', 'Complementos'],
        ['servomotor-posicion-black', 'Servomotor de posición', ['servomotor posición']],
        ['servomotor-continuo-black', 'Servomotor continuo'],
        ['bluetooth-black', 'Bluetooth'],
      ]],
      ['Documentación', [
        ['documentacion-echidnablack', 'Documentación técnica'],
      ]],
    ],
  },
};

const ancla = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const monta = async (id) => {
  const doc = DOCUMENTOS[id];
  if (!doc) throw new Error(`No conozco el documento «${id}». Disponibles: ${Object.keys(DOCUMENTOS).join(', ')}`);
  // Nombres con los que se enlaza cada sección → su ancla
  const secciones = new Map();
  for (const [, paginas] of doc.partes)
    for (const [slug, titulo, otros = []] of paginas)
      for (const nombre of [slug, titulo, ...otros]) secciones.set(nombre.toLowerCase(), ancla(titulo));
  const enDocumento = (texto, destino) => {
    const porTexto = secciones.get(texto.replace(/[*_]/g, '').trim().toLowerCase());
    if (porTexto) return `#${porTexto}`;
    const slug = destino.replace(/\/$/, '').split('/').pop();
    return secciones.has(slug) ? `#${secciones.get(slug)}` : undefined;
  };

  const partes = [];
  for (const [parte, paginas] of doc.partes) {
    partes.push(`# ${parte}\n`);
    for (const [slug, titulo] of paginas) {
      let md = await readFile(path.join(AQUI, 'paginas', slug, 'index.md'), 'utf8');
      md = md
        .replace(/^# .*\n/, '')
        .replace(/^<!-- (.*) -->\n/m, '<!-- Fuente: $1 -->\n')
        // Los títulos bajan un nivel: la página es ## y sus apartados ###
        .replace(/^(#{2,5}) /gm, '#$1 ')
        // «Saber más» y similares: sobran, el título de la tarjeta ya enlaza
        .replace(/^\[(saber más|ver más|leer más)\]\([^)]*\)\s*$/gim, '')
        // Tarjetas de las páginas resumen (componentes, complementos): sin la imagen, basta el título
        .replace(/\[?!\[[^\]]*\]\([^)]*\)(?:\]\([^)]*\))?\s*\n\s*\n(#### )/g, '$1')
        // Imágenes enlazadas: solo la imagen
        .replace(/\[(!\[[^\]]*\]\([^)]*\))\]\([^)]*\)/g, '$1')
        // Rutas de las imágenes y ficheros, relativas a este documento
        .replace(/\]\(\.\/([^)]+)\)/g, `](paginas/${slug}/$1)`)
        // Enlaces internos: a su sección si está en el documento; si no, a la web
        .replace(/\[([^\]]+)\]\((\/[^)]*)\)/g, (_, texto, destino) => {
          const interno = enDocumento(texto, destino);
          if (interno) return `[${texto}](${interno})`;
          if (destino === '/ecosistema/placas-anteriores/') return texto;
          return `[${texto}](https://echidna.es${destino})`;
        })
        // Títulos de WordPress con negrita o dos puntos al final
        .replace(/^(#{3,6}) \*\*(.*?)\*\*\s*$/gm, '$1 $2')
        .replace(/^(#{3,6} .*?):\s*$/gm, '$1')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
      partes.push(`## ${titulo} {#${ancla(titulo)}}\n\n${md}\n`);
    }
  }
  const portada = `---\ntitulo: ${doc.titulo}\nsubtitulo: Documentación archivada de echidna.es\nfecha: ${new Date().toISOString().slice(0, 10)}\nlicencia: CC BY-SA 4.0\n---\n`;
  await writeFile(path.join(AQUI, `${id}.md`), `${portada}\n${partes.join('\n')}`);
  console.log(`Escrito ${id}.md`);
};

await monta(process.argv[2] ?? 'echidnashield');
