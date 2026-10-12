// Genera la imagen que se muestra al compartir la web en redes (og:image): el logo con su texto
// sobre el fondo cálido de la web, a 1200 × 630 px (el tamaño que recomiendan las redes).
// Uso: bun run imagen-redes → public/imagen-redes.png
import sharp from 'sharp';

const ancho = 1200;
const alto = 630;
const altoLogo = 440;

// Fondo: degradado del naranja suave de la marca (--brand-soft) al fondo de la web (--bg), con una
// franja del naranja de la marca (--brand) abajo
const fondo = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${ancho}" height="${alto}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff0e3"/><stop offset="1" stop-color="#fbf9f6"/>
  </linearGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect y="${alto - 14}" width="100%" height="14" fill="#e66a00"/>
</svg>`);

// trim(): el SVG tiene márgenes desiguales alrededor del dibujo; sin ellos, el logo queda centrado
const recortado = await sharp(new URL('../src/assets/logo/Logo_Echidna_Final.svg', import.meta.url).pathname, { density: 300 })
  .trim()
  .toBuffer();
const logo = await sharp(recortado).resize({ height: altoLogo }).toBuffer();
const { width: anchoLogo = 0 } = await sharp(logo).metadata();

await sharp(fondo)
  .composite([{ input: logo, left: Math.round((ancho - anchoLogo) / 2), top: Math.round((alto - 14 - altoLogo) / 2) }])
  .png({ compressionLevel: 9, palette: true })
  .toFile(new URL('../public/imagen-redes.png', import.meta.url).pathname);

console.log('public/imagen-redes.png');
