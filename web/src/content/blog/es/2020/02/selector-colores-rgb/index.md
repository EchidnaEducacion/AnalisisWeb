---
title: "Selector de colores RGB"
description: "Cómo usar el selector de colores RGB de Snap4Arduino para reproducir en el LED RGB de la placa el color que elijas en una paleta."
date: 2020-02-04
updated: 2020-06-28
author: jose
categories: [recursos/proyectos]
tags: ["Snap4Arduino", "LED"]
image: ./PaletaColores_blog-e1592560622493.jpg
imageAlt: "Paleta de colores en forma de hexágono, con todos los tonos."
---

Una de las funcionalidades que trae la nueva versión de [Snap4Arduino](http://snap4arduino.rocks/) 5.1.0 es el selector de colores RGB, que podemos encontrar en el menú de sensores.

![Bloque de Snap4Arduino «r-g-b-a at puntero del ratón».](./rgb-echidna.png)

Vamos a ver cómo podemos usarlo para seleccionar un color en una paleta de colores y reproducir el color en el LED RGB de la Echidna. Para ello insertamos una imagen de una paleta de colores en el objeto.

![Paleta de colores en forma de hexágono.](./PaletaColores_blog.jpg)

El sensor RGB  al clicar sobre un color genera una lista con las componentes del color R, G, y B. y alpha. Para almacenarlos creamos una variable denominada **rgba** que genera una lista donde se almacenan los valores del color seleccionado.

![Bloque que asigna a la lista rgba el valor de r-g-b-a en la posición del puntero del ratón.](./listaRGBA.png)

Ya solo nos queda decirle a cada pin RGB de la Echidna que tome el color de la lista. Siendo 1 el rojo, 2 el verde y 3 el azul. Para facilitar la legibilidad declaramos los pines de los LEDs previamente.

![Programa de Snap4Arduino: al hacer clic en la paleta, guarda su color en la lista rgba y fija los pines del LED RGB con los valores rojo, verde y azul.](./script-RGBA.png)
