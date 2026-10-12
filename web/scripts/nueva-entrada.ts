// Crea una entrada del blog en borrador: bun run nueva-entrada "Título de la entrada" [autor]
// La carpeta es src/content/blog/es/AAAA/MM/<slug>/ con el año y el mes de hoy, que forman la URL
// (/AAAA/MM/<slug>/). Funciona con Bun y con Node 24 (node scripts/nueva-entrada.ts "Título").
// El flujo completo está en escribir-blog.md, en la raíz del repositorio.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ETIQUETAS } from '../src/lib/etiquetas.ts';

const web = join(dirname(fileURLToPath(import.meta.url)), '..');
const contenido = join(web, 'src/content');

// Ids de autores y categorías, leídos de sus listas YAML (líneas `- id: …` y `{ id: …, … }`)
const ids = (fichero: string) =>
  [...readFileSync(join(contenido, fichero), 'utf8').matchAll(/^- \{?\s*id: ([^,\s}]+)/gm)].map((m) => m[1]);
const autores = ids('autores.yaml');
const categorias = ids('categorias.yaml');

const [titulo, autor = ''] = process.argv.slice(2);
if (!titulo?.trim()) {
  console.error('Uso: bun run nueva-entrada "Título de la entrada" [autor]');
  console.error(`Autores: ${autores.join(', ')}`);
  process.exit(1);
}
if (autor && !autores.includes(autor)) {
  console.error(`El autor «${autor}» no está en autores.yaml. Autores: ${autores.join(', ')}`);
  process.exit(1);
}

// «¡Volvemos a esLibre!» → volvemos-a-eslibre
const slug = titulo
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const hoy = new Date();
const anio = String(hoy.getFullYear());
const mes = String(hoy.getMonth() + 1).padStart(2, '0');
const dia = String(hoy.getDate()).padStart(2, '0');
const carpeta = join(contenido, 'blog/es', anio, mes, slug);
const fichero = join(carpeta, 'index.md');

if (existsSync(carpeta)) {
  console.error(`Ya existe ${relative(web, carpeta)}: elige otro título o edita esa entrada.`);
  process.exit(1);
}

// Los campos están explicados en modelo-contenido.md (apartado blog). La web no arranca hasta que
// description, author y categories estén rellenos, y draft: true la deja fuera de la web mientras se escribe.
const markdown = `---
title: ${JSON.stringify(titulo.trim())}
# Resumen de una o dos frases, entre 50 y 160 caracteres (sale en el listado y en buscadores)
description: ""
date: ${anio}-${mes}-${dia}
# Uno de: ${autores.join(', ')}
author: ${autor}
# Al menos una de: ${categorias.join(', ')}
categories: []
# Opcional, solo del vocabulario cerrado (modelo-contenido.md, «Etiquetas del blog»)
tags: []
# Portada, en esta misma carpeta, con su texto alternativo
# image: ./portada.png
# imageAlt: ""
draft: true
---

Primer párrafo de la entrada.
`;

mkdirSync(carpeta, { recursive: true });
writeFileSync(fichero, markdown);

console.log(`Creada ${relative(web, fichero)}`);
console.log(`Se publicará en /${anio}/${mes}/${slug}/ al quitar draft: true y fusionar la PR.`);
console.log(`Etiquetas: ${ETIQUETAS.join(', ')}`);
