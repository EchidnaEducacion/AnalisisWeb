# Documentos de las placas anteriores

Genera los PDF con la documentación archivada de las placas que ya no se fabrican: la **EchidnaShield** y la **EchidnaBlack v1**. Se publican en `web/public/ecosistema/placas-anteriores/` y se enlazan desde la página Placas anteriores de la web.

## Índice

- [Cómo se hace](#cómo-se-hace)
- [Uso](#uso)
- [Ficheros](#ficheros)

## Cómo se hace

1. **Páginas de WordPress a Markdown**: el importador del blog, en modo página, convierte cada página de la placa en `paginas/<slug>/index.md`, con sus imágenes y hojas de características al lado.
2. **Un Markdown por placa**: `montar.mjs` las une en `echidnashield.md` (o `echidnablack.md`):
   - en partes: la placa, componentes, complementos y documentación;
   - con los títulos ajustados y los enlaces entre páginas convertidos en enlaces dentro del documento;
   - sin los «Saber más».

   **Este documento se revisa y se corrige a mano.**
3. **PDF**: `generar-pdf.mjs` convierte el Markdown en HTML y lo imprime con Chromium:
   - con portada, índice con enlaces y estilos parecidos a los de la web;
   - con las hojas de características añadidas al final como anexos (con `pdfunite`).

## Uso

```sh
cd herramientas/placas-anteriores
npm install

# 1. Páginas de WordPress (solo mientras exista la web antigua)
node ../wp-import/wp-import.mjs --pagina=/hardware/echidna-shield/ --pagina=… --salida=paginas

# 2. Documento Markdown (¡sobrescribe las correcciones a mano!)
node montar.mjs echidnashield

# 3. PDF
node generar-pdf.mjs echidnashield
```

La lista de páginas de cada placa y su orden están en `DOCUMENTOS`, en `montar.mjs`.

## Ficheros

- `paginas/`: las páginas convertidas, con sus imágenes y hojas de características. Se guardan en el repo porque, cuando se apague WordPress, ya no se podrán volver a descargar.
- `echidnashield.md`, `echidnablack.md`: el documento de cada placa, revisado a mano.
- `montar.mjs`, `generar-pdf.mjs`: los scripts.
