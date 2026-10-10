// Genera el PDF de una placa anterior a partir de su documento Markdown (echidnashield.md…):
//
//   node generar-pdf.mjs echidnashield
//
// Convierte el Markdown a HTML con una portada, un índice y estilos de impresión parecidos a los de la
// web, lo imprime con Chromium y le añade al final, como anexos, las hojas de características enlazadas.
// Escribe web/public/ecosistema/placas-anteriores/<documento>.pdf.
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { marked } from 'marked';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.resolve(AQUI, '../../web');
const DESTINO = path.join(WEB, 'public/ecosistema/placas-anteriores');
const id = process.argv[2] ?? 'echidnashield';

const fuente = await readFile(path.join(AQUI, `${id}.md`), 'utf8');
const [, cabecera, cuerpo] = fuente.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
const meta = Object.fromEntries(cabecera.split('\n').map((l) => l.split(/:\s(.*)/s).slice(0, 2)));

// Hojas de características y otros ficheros locales: van como anexos al final del PDF
const anexos = [];
let md = cuerpo.replace(/\[([^\]]+)\]\((paginas\/[^)]+\.pdf)\)/g, (_, texto, fichero) => {
  let n = anexos.findIndex((a) => a.fichero === fichero) + 1;
  if (!n) n = anexos.push({ fichero, texto }) ;
  return `${texto} (anexo ${n})`;
});
// Cada anexo se titula con la sección en la que aparece
let seccion = '';
for (const linea of md.split('\n')) {
  const h = linea.match(/^## (.*?) \{#/);
  if (h) seccion = h[1];
  for (const m of linea.matchAll(/\(anexo (\d+)\)/g)) anexos[Number(m[1]) - 1].seccion ??= seccion;
}

// Índice: partes (#) y secciones (## … {#ancla})
const indice = [];
for (const linea of md.split('\n')) {
  const parte = linea.match(/^# (.*)$/);
  const sec = linea.match(/^## (.*?) \{#([\w-]+)\}$/);
  if (parte) indice.push({ parte: parte[1], secciones: [] });
  else if (sec) indice.at(-1).secciones.push({ titulo: sec[1], ancla: sec[2] });
}

// Títulos con ancla propia: ## Título {#ancla}
md = md
  .replace(/^## (.*?) \{#([\w-]+)\}$/gm, '<h2 id="$2">$1</h2>')
  .replace(/^# (.*)$/gm, (_, t) => `<h1 class="parte">${t}</h1>`)
  // Títulos de WordPress con negrita o dos puntos al final
  .replace(/^(#{3,6}) \*\*(.*?)\*\*\s*$/gm, '$1 $2')
  .replace(/^(#{3,6} .*?):\s*$/gm, '$1');

const contenido = marked.parse(md);
const logo = await readFile(path.join(WEB, 'public/favicon.svg'), 'utf8');
const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>${meta.titulo} · ${meta.subtitulo}</title>
<base href="${pathToFileURL(AQUI + '/').href}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Exo+2:wght@600;700;800&family=JetBrains+Mono:wght@400&display=swap">
<style>
  @page { size: A4; margin: 18mm 18mm 20mm; @bottom-center { content: counter(page); font: 9pt "Atkinson Hyperlegible", sans-serif; color: #6b6259; } }
  @page :first { @bottom-center { content: none; } }
  :root { --acento: #e66a00; --tinta: #1f1a16; --suave: #6b6259; --linea: #e6ddd2; }
  body { font: 10.5pt/1.55 "Atkinson Hyperlegible", system-ui, sans-serif; color: var(--tinta); margin: 0; }
  h1, h2, h3, h4 { font-family: "Exo 2", system-ui, sans-serif; line-height: 1.2; break-after: avoid; }
  h1.parte { font-size: 26pt; color: var(--acento); break-before: page; margin: 0 0 6mm; padding-bottom: 3mm; border-bottom: 2px solid var(--acento); }
  h2 { font-size: 18pt; margin: 8mm 0 3mm; }
  h1.parte + h2 { margin-top: 2mm; }
  h2:not(h1.parte + h2) { break-before: page; }
  h3 { font-size: 13pt; margin: 6mm 0 2mm; color: var(--acento); }
  h4 { font-size: 11pt; margin: 4mm 0 1mm; }
  p, ul, ol { margin: 0 0 3mm; }
  a { color: #a34700; text-decoration: none; }
  img { display: block; max-width: 100%; max-height: 75mm; margin: 3mm auto; break-inside: avoid; }
  table { border-collapse: collapse; width: 100%; margin: 3mm 0; font-size: 9.5pt; break-inside: avoid; }
  th, td { border: 1px solid var(--linea); padding: 1.5mm 2mm; text-align: left; vertical-align: top; }
  th { background: #fff0e3; }
  code, pre { font-family: "JetBrains Mono", monospace; font-size: 9pt; }
  pre { background: #f6f1ea; padding: 3mm; border-radius: 2mm; white-space: pre-wrap; }
  blockquote { margin: 3mm 0; padding: 2mm 4mm; border-left: 3px solid var(--acento); background: #fff7ef; }
  .portada { height: 250mm; display: flex; flex-direction: column; justify-content: center; text-align: center; }
  .portada svg { width: 70mm; height: auto; margin: 0 auto 12mm; }
  .portada h1 { font-size: 40pt; margin: 0 0 4mm; color: var(--tinta); }
  .portada .sub { font-size: 15pt; color: var(--acento); margin: 0 0 30mm; font-family: "Exo 2", sans-serif; }
  .portada .pie { font-size: 9.5pt; color: var(--suave); }
  .indice { break-before: page; }
  .indice h1 { font-size: 22pt; margin: 0 0 6mm; }
  .indice ol { list-style: none; padding: 0; }
  .indice > ol > li { margin: 0 0 4mm; font-weight: 700; font-family: "Exo 2", sans-serif; font-size: 12pt; }
  .indice ol ol { margin: 1.5mm 0 0 6mm; font-weight: 400; font-family: "Atkinson Hyperlegible", sans-serif; font-size: 10.5pt; }
  .indice ol ol li { margin: 0 0 1mm; }
  .anexos { break-before: page; }
</style>
</head>
<body>
<section class="portada">
  ${logo.replace('<svg', '<svg aria-hidden="true"')}
  <h1>${meta.titulo}</h1>
  <p class="sub">${meta.subtitulo}</p>
  <p class="pie">Echidna Educación · echidna.es · ${new Date(meta.fecha).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}<br>
  Contenidos con licencia ${meta.licencia}. Esta placa ya no se fabrica; su sucesora es la EchidnaBlack2.</p>
</section>
<nav class="indice">
  <h1>Índice</h1>
  <ol>
    ${indice.map((p) => `<li>${p.parte}<ol>${p.secciones.map((s) => `<li><a href="#${s.ancla}">${s.titulo}</a></li>`).join('')}</ol></li>`).join('\n    ')}
    ${anexos.length ? '<li><a href="#anexos">Anexos: hojas de características</a></li>' : ''}
  </ol>
</nav>
<main>
${contenido}
</main>
${anexos.length ? `<section class="anexos"><h1 class="parte" id="anexos">Anexos</h1>
<p>Hojas de características de los componentes, en las páginas siguientes y en este orden:</p>
<ol>${anexos.map((a) => `<li>${a.seccion}: ${a.texto} (${path.basename(a.fichero)})</li>`).join('')}</ol></section>` : ''}
</body>
</html>`;

const tmp = path.join(AQUI, '.tmp');
await mkdir(tmp, { recursive: true });
const htmlFile = path.join(AQUI, `${id}.html`);
await writeFile(htmlFile, html);
const principal = path.join(tmp, `${id}-principal.pdf`);
execFileSync('chromium', ['--headless', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=20000', `--print-to-pdf=${principal}`, pathToFileURL(htmlFile).href], { stdio: 'ignore' });

await mkdir(DESTINO, { recursive: true });
const salida = path.join(DESTINO, `${id}.pdf`);
execFileSync('pdfunite', [principal, ...anexos.map((a) => path.join(AQUI, a.fichero)), salida]);
const { size } = await stat(salida);
console.log(`Escrito ${path.relative(path.resolve(AQUI, '../..'), salida)} (${(size / 1024 / 1024).toFixed(1)} MB, ${anexos.length} anexos)`);
