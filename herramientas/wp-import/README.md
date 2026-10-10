# Importador de entradas de WordPress

Importa entradas del blog de echidna.es a la colección `blog` de [`web/`](../../web/). Está adaptado del importador de la prueba de concepto (`EchidnaEducacion.github.io`, `scripts/wp-import.mjs`), pero genera Markdown sin componentes. No forma parte de la web ni se despliega.

## Índice

- [Uso](#uso)
- [Qué hace](#qué-hace)
- [Revisión de cada tanda](#revisión-de-cada-tanda)

## Uso

```sh
cd herramientas/wp-import
npm install
node wp-import.mjs --año=2025              # las entradas de un año
node wp-import.mjs --slug=caja-fuerte      # una entrada (se puede repetir --slug)
node wp-import.mjs --año=2025 --forzar     # sobrescribe las que ya existen
```

Sin `--forzar` no toca las entradas que ya existen, para no perder las revisiones hechas a mano.

## Qué hace

- Lee las entradas de la API REST pública de WordPress, que devuelve el HTML ya renderizado.
- Escribe cada una en `web/src/content/blog/es/AAAA/MM/<slug>/index.md`, con su portada y sus imágenes JPG, PNG y WebP al lado. Astro optimiza esas imágenes.
- Los GIF y el resto de ficheros (PDF, `.sb3`…) van a `web/public/AAAA/MM/<slug>/`.
- Limpia el marcado de Avada:
  - Los vídeos de YouTube quedan como un párrafo con solo el enlace y su título real; la web los convierte en reproductor.
  - Las presentaciones de Google quedan como enlace.
  - Las galerías se convierten en imágenes seguidas.
  - Las imágenes van en su propio párrafo.
- Rellena el *front matter*: título, una descripción de 50 a 160 caracteres (la de SEO o el principio del texto), fecha, autor, categorías (`recursos/proyectos`…), etiquetas y portada.
- Escribe `informe.md` con lo que hay que revisar a mano en cada entrada.

## Revisión de cada tanda

Antes de subir una tanda, repasa `informe.md` y cada entrada en el servidor de desarrollo:

- **Textos alternativos:** en WordPress casi ninguna imagen los tiene. Hay que escribirlos, junto con el `imageAlt` de la portada.
- **Descripción:** si se ha recortado o es demasiado corta.
- **Autores:** que estén en `web/src/content/autores.yaml`.
- **Enlaces internos:** que lleven a páginas que existen en la web nueva.
- **Galerías y contenidos incrustados:** cómo han quedado.
