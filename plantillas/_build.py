#!/usr/bin/env python3
"""Ensambla las plantillas HTML estáticas.

Cada página de _paginas/ empieza con un comentario de metadatos:

    <!--
    title: Título de la página
    description: Descripción para buscadores
    section: hardware      (color de acento y menú activo)
    -->

y el resto es el contenido de <main>. El script la envuelve con la
cabecera, el pie y los iconos de _parciales/ (equivale al layout Base de Astro)
y escribe el resultado en plantillas/<nombre>.html.

Uso: python3 plantillas/_build.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent
SECTIONS = ["programar", "hardware", "didactica", "blog", "recursos", "nosotros"]

HEAD = """<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="alternate" hreflang="en" href="#">
<script>try{{var t=localStorage.getItem('echidna-theme');if(t)document.documentElement.dataset.theme=t}}catch(e){{}}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Exo+2:wght@600;700;800&family=JetBrains+Mono:wght@400;700&display=swap">
<link rel="stylesheet" href="assets/css/echidna.css">
</head>
<body{section_attr}>
<div class="page">
"""

FOOT = """<script src="assets/js/echidna.js"></script>
</div>
</body>
</html>
"""


def parse(src: str):
    m = re.match(r"\s*<!--(.*?)-->\s*", src, re.S)
    meta = {}
    if m:
        for line in m.group(1).strip().splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                meta[k.strip()] = v.strip()
        src = src[m.end():]
    return meta, src


def main():
    icons = (ROOT / "_parciales/iconos.svg").read_text()
    header = (ROOT / "_parciales/cabecera.html").read_text()
    footer = (ROOT / "_parciales/pie.html").read_text()
    for page in sorted((ROOT / "_paginas").glob("*.html")):
        meta, body = parse(page.read_text())
        section = meta.get("section", "")
        hdr = header
        for s in SECTIONS:
            hdr = hdr.replace("{{a:%s}}" % s, " is-active" if s == section else "")
        bare = meta.get("bare") == "true"
        title = meta.get("title", "Echidna Educación")
        out = HEAD.format(
            title=title if bare else f"{title} · Echidna Educación",
            description=meta.get("description", ""),
            section_attr=f' data-section="{section}"' if section else "",
        )
        out += icons + "\n" + hdr + "\n" + body.strip() + "\n" + footer + FOOT
        (ROOT / page.name).write_text(out)
        print("✓", page.name)


if __name__ == "__main__":
    main()
