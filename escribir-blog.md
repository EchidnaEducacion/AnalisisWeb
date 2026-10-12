# Cómo escribir una entrada del blog

Guía para quien escribe entradas nuevas del blog de Echidna. Las entradas se escriben en Markdown, en local, y llegan a la web por *pull request*. Un *push* a `main` publica al momento, así que cada entrada va en su propia rama: otra persona del equipo la revisa y, al fusionarla, se publica.

## Índice

1. [Antes de empezar](#antes-de-empezar)
2. [Paso a paso](#paso-a-paso)
3. [El *front matter*](#el-front-matter)
4. [Imágenes y vídeos](#imágenes-y-vídeos)
5. [Categorías y etiquetas](#categorías-y-etiquetas)
6. [Revisar una *pull request*](#revisar-una-pull-request)
7. [Problemas frecuentes](#problemas-frecuentes)

---

## Antes de empezar

Solo hace falta la primera vez:

```sh
git clone git@github.com:EchidnaEducacion/EchidnaEducacion.github.io.git
cd EchidnaEducacion.github.io/web
curl -fsSL https://bun.sh/install | bash   # instala Bun; después, abrir una terminal nueva
bun install
```

Sin Bun también se puede, con Node 24 y npm: ver el principio de [`web/README.md`](web/README.md), que explica además cómo trabajar desde VS Code.

## Paso a paso

1. **Crear una rama** desde `main` al día:

   ```sh
   git switch main
   git pull
   git switch -c entrada/<slug>          # p. ej. entrada/rotografo
   ```

2. **Crear la entrada** desde `web/`:

   ```sh
   bun run nueva-entrada "Título de la entrada" <autor>
   ```

   (sin Bun, `node scripts/nueva-entrada.ts "Título de la entrada" <autor>`). El script crea `src/content/blog/es/AAAA/MM/<slug>/index.md`, con el año y el mes de hoy, y muestra los autores, categorías y etiquetas válidos. La entrada empieza en borrador (`draft: true`).

3. **Arrancar la web en local** con `bun run dev` y abrir la URL que indica el script: `http://localhost:4321/AAAA/MM/<slug>/`. Un borrador se ve en su URL en el servidor de desarrollo, pero no en el listado del blog ni en la web publicada. La página se recarga al guardar.

4. **Rellenar el [*front matter*](#el-front-matter) y redactar** la entrada debajo, en Markdown, con sus [imágenes y vídeos](#imágenes-y-vídeos).

5. **Quitar `draft: true`** y comprobar que la web se construye sin errores con `bun run build`. Revisar la entrada también en el móvil (o con el navegador estrecho) y en modo oscuro.

6. **Subir la rama y abrir la *pull request***:

   ```sh
   git add .
   git commit -m "Añade la entrada <título>"
   git push -u origin entrada/<slug>
   ```

   En GitHub aparece el botón **«Compare & pull request»**. Se abre contra `main`, se pide revisión a otra persona del equipo (*Reviewers*) y se espera a que la comprobación **«Comprobar la web»** salga en verde. Al fusionar la PR, la entrada se publica en unos minutos.

## El *front matter*

Es la cabecera entre `---` del principio del fichero. El script la crea con comentarios; el detalle de cada campo está en [`modelo-contenido.md`](modelo-contenido.md#blog).

| Campo | Obligatorio | Qué poner |
|---|---|---|
| `title` | Sí | Título de la entrada |
| `description` | Sí | Resumen de una o dos frases, **entre 50 y 160 caracteres**; sale en el listado y en los buscadores |
| `date` | Sí | Fecha de publicación (`AAAA-MM-DD`); ordena el blog |
| `author` | Sí | Identificador del autor de `web/src/content/autores.yaml` |
| `categories` | Sí, al menos una | Identificadores de `web/src/content/categorias.yaml` |
| `tags` | No | Solo etiquetas del [vocabulario cerrado](#categorías-y-etiquetas) |
| `image` / `imageAlt` | No, pero recomendable | Portada (en la carpeta de la entrada) y su texto alternativo |
| `draft` | No | `true` mientras se escribe; se quita para publicar |

Un ejemplo real, la entrada del Rotógrafo:

```yaml
---
title: Rotógrafo
description: Un dispositivo para crear arte en espiral con la EchidnaBlack2 y un servomotor de rotación continua, con guía de construcción, vídeo y programa.
date: 2026-05-30
author: jorge-lobo
categories: [bloques-de-construccion, didactica, recursos/proyectos]
tags: ["EchidnaBlack2", "Servomotor", "STEAM"]
image: ./rotografo.png
imageAlt: "El erizo de Echidna con una pieza de construcción, junto al rotógrafo: un disco con espirales de colores sobre un servomotor, montado en una base de piezas."
---
```

## Imágenes y vídeos

- **Imágenes**: en la carpeta de la entrada, con nombres descriptivos y sin metadatos (`convert -strip foto.jpg foto.jpg`). Se insertan con ruta relativa y texto alternativo: `![Qué se ve en la imagen.](./programa-rotografo.png)`.
- **Portada**: en `image`, con su `imageAlt`. Es también la miniatura del listado y la imagen al compartir en redes.
- **Texto alternativo**: describe lo que se ve y lo que aporta, no «imagen de…». Toda imagen lo lleva.
- **GIF animados**: van en `web/public/AAAA/MM/<slug>/` y se enlazan con la ruta completa (`![Animación del montaje.](/AAAA/MM/<slug>/montaje.gif)`), porque el procesado de imágenes de Astro no los conserva animados.
- **Vídeos de YouTube**: un enlace en su propio párrafo, `[Título del vídeo](https://www.youtube.com/watch?v=…)`.
- **Enlaces internos**: desde la raíz, `/contacta/`, `/ecosistema/echidnablack2/`.

## Categorías y etiquetas

- **Categorías** (al menos una): `bloques-de-construccion`, `didactica`, `hardware`, `noticias`, `programacion`, `publicaciones`, `rea`, `recursos`, `recursos/impresion-3d`, `recursos/proyectos` y `talleres`.
- **Etiquetas**: un vocabulario cerrado de 21 (placas, entornos, componentes, temas y eventos). Se escriben exactamente como en la lista; una etiqueta que no esté en ella impide publicar. La lista y los criterios para asignarlas (solo lo que la entrada dice, la placa por su nombre, STEAM solo cuando hay arte…) están en [«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog).
- **Una etiqueta nueva** solo si sirve para al menos dos entradas; se propone en la PR y se añade a esa lista y a `web/src/lib/etiquetas.ts`.

## Revisar una *pull request*

Quien revisa comprueba:

- que **«Comprobar la web»** está en verde;
- el texto (erratas, tono, enlaces que funcionan) y la `description`;
- que todas las imágenes tienen texto alternativo y la portada se ve bien;
- que las categorías y etiquetas siguen los criterios;
- que ya no lleva `draft: true`.

Los cambios pequeños se pueden sugerir en la propia PR (*Add a suggestion*). Cuando está bien, se aprueba y se fusiona (*Merge pull request*), y se borra la rama.

## Problemas frecuentes

La web no se construye mientras haya un error, y el mensaje indica la entrada y el campo:

| Mensaje | Qué pasa |
|---|---|
| `description: No puede estar vacío` / `al menos 50 caracteres` / `no puede pasar de 160` | La descripción falta o tiene una longitud fuera de rango |
| `categories: Al menos una categoría` | La lista de categorías está vacía |
| `author` o `categories` con un identificador que no existe | Errata en el autor o la categoría; ver las listas de [arriba](#categorías-y-etiquetas) |
| `Etiqueta «…» fuera del vocabulario` | La etiqueta no está en la lista o tiene una errata (mayúsculas, espacios) |
| Imagen que no se encuentra | La ruta o el nombre del fichero no coinciden (ojo a mayúsculas y extensiones) |

- **La URL sale de la carpeta, no de la fecha**: si la entrada se empezó un mes y se publica al siguiente, la URL sigue siendo la del mes de la carpeta. Para que coincidan, se mueve la carpeta (`AAAA/MM/`) antes de fusionar.
- **El borrador no aparece en `/blog/`**: es lo esperado; con `draft: true` solo se ve en su URL y en el servidor de desarrollo.
