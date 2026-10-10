---
title: "Barrera automática"
description: "Una barrera automática para el control de acceso de vehículos, hecha con bloques de construcción, un sensor de infrarrojos, un servomotor y un pequeño semáforo."
date: 2026-01-14
author: jorge-lobo
categories: [bloques-de-construccion, didactica, programacion, recursos/proyectos]
image: ./barreraautomaticaportada.jpg
imageAlt: "El erizo de Echidna con una pieza de construcción naranja, junto a la barrera automática hecha con piezas rojas, blancas y grises y un servomotor."
---

En este nuevo proyecto seguimos explorando la combinación de bloques de construcciones, sensores y control mediante la placa EchidnaBlack con un modelo de **barrera automática para el control de acceso de vehículos**, un clásico de los sistemas automatizados que resulta muy reconocible y fácil de contextualizar.

El modelo se ha construido con un número muy reducido de bloques, incorporando tanto elementos mecánicos (servomotor para elevar y bajar la barrera) como señales luminosas de control (LEDs externos). El sistema se se basa en dos componentes principales:

- Un **sensor de infrarrojos**, conectado a la entrada A2 de la EchidnaBlack2, que detecta la presencia de un vehículo cuando este se detiene frente a la barrera. Esta detección actúa como disparador de toda la secuencia de automatización.
- Un **servomotor**, encargado de subir y bajar la barrera, acompañado de un pequeño semáforo con dos LEDs: rojo y verde. Al detectar un vehículo, la barrera se eleva, el LED rojo se apaga y se enciende el verde, indicando que el paso está permitido.

Cuando el vehículo avanza y deja de ser detectado por el sensor, el sistema no baja la barrera de inmediato, sino que se produce una breve espera que simula el tiempo de seguridad para que la barrera no golpee al vehículo, tras la cual la barrera vuelve a descender y el semáforo recupera el estado inicial.

Como en proyectos anteriores, para facilitar su reproducción, se ha preparado una **guía de construcción paso a paso** con todo el montaje del modelo, disponible [aquí](https://github.com/lobotic/Proyectitos/blob/master/Echidna/BarreraAutomatica/BarreraAutomatica.pdf) para descargar.

![Animación de la guía de construcción de la barrera automática, paso a paso.](/2026/01/barrera-automatica/BarreraAutomatica.gif)

[Aquí](https://github.com/lobotic/Proyectitos/blob/master/Echidna/BarreraAutomatica/barreraAutomatica.sb3) podéis descargar el archivo .sb3 de EchidnaML para probarlo, modificarlo y adaptarlo a vuestras propias ideas, y en el siguiente vídeo podéis ver cómo funciona. ¡Esperamos que os guste!

[Barrera Automática](https://www.youtube.com/watch?v=3ULaJ21qb9U)
