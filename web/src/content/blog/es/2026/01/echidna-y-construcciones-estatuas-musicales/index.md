---
title: "Echidna y construcciones: Estatuas musicales"
description: "Este segundo proyecto con bloques de construcción continúa explorando la idea de unir el juego de construcciones con la programación y robótica educativa."
date: 2026-01-01
updated: 2026-01-14
author: jorge-lobo
categories: [bloques-de-construccion, didactica, programacion, recursos/proyectos]
tags: ["EchidnaBlack2", "EchidnaML", "Micrófono", "Música", "Juegos"]
image: ./juegoestatuasportada.png
imageAlt: "El erizo de Echidna con una pieza de construcción naranja, junto a dos patos de piezas de construcción montados sobre un mecanismo de poleas."
---

Este segundo proyecto con bloques de construcción continúa explorando la idea de unir el juego de construcciones con la programación y robótica educativa. En esta ocasión, la inspiración viene de *Dancing Birds*, un clásico de LEGO WeDo, reinterpretado para crear un sistema que responde al sonido como en el juego de las **estatuas musicales.**

Se ha diseñado un mecanismo sencillo pero efectivo, en el que unos patos se mueven de forma rítmica gracias a dos **poleas** unidas por una **banda de goma** movidas por un **motor de corriente continua**.

El comportamiento del modelo está controlado por una **EchidnaBlack2** y **EchidnaML**. A diferencia del proyecto del [gallo despertador](/2025/12/construye-un-gallo-que-canta-al-amanecer/), aquí el sensor utilizado es el **micrófono** integrado en la placa, que permite detectar la presencia de sonido o música en el entorno.

Cuando el micrófono detecta sonido por encima de un determinado umbral, el motor se activa y los patos comienzan a moverse, “bailando” al ritmo de la música. En el momento en que el sonido desaparece, el motor se detiene y los patos quedan inmóviles, simulando el conocido juego de las estatuas musicales.

El proyecto está programado mediante EchidnaML. Consiste en leer el valor registrado por el micrófono, compararlo con un valor de umbral y decidir si el motor debe estar encendido o apagado. Para «mantener el ritmo» se ha añadido un pequeño delay que mantiene el motor activado 0,2 segundos que permite que el movimiento sea más suave.

También en esta ocasión se ha creado una [guía](https://github.com/lobotic/Proyectitos/blob/master/Echidna/Juego_de_las_estatuas/juegodelasestatua.pdf) de construcción paso a paso utilizando LeoCAD y LPub3D.

![Animación de la guía de construcción de las estatuas musicales, paso a paso.](/2026/01/echidna-y-construcciones-estatuas-musicales/juegodelasestatua.gif)

Puedes descargar [aquí](https://github.com/lobotic/Proyectitos/blob/master/Echidna/Juego_de_las_estatuas/juegodelasestatua.pdf) la guía en PDF.

En el siguiente vídeo puedes hacerte una idea de cómo funciona, y [aquí](https://github.com/lobotic/Proyectitos/blob/master/Echidna/Juego_de_las_estatuas/Juego%20de%20las%20estatuas.sb3) puedes descargar el archivo sb3 para EchidnaML.

[juego de las estatuas: micro](https://www.youtube.com/watch?v=pPiLZwTz-y8)

¿Estamos cogiendo el gusto a este tipo de proyectos? Yo diría que sí :-)

Seguiremos explorando esta línea, porque combinar bloques de construcción y Echidna es sumamente gratificante.

Desde Echidna queremos que estos proyectos no se queden aquí, sino que crezcan con la comunidad. Compartiendo nuestras ideas, diseños y programas contribuimos a la creación de conocimiento libre.

¿Y tú? ¿Qué proyecto crearías combinando construcciones y Echidna?

Si te apetece compartir tus ideas, háznoslas llegar.
