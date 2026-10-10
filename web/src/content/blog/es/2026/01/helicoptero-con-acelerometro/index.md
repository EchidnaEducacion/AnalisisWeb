---
title: "Helicóptero con acelerómetro"
description: "Un helicóptero de bloques de construcción que gira con la inclinación de la placa gracias al acelerómetro, y su versión virtual en un videojuego de EchidnaML."
date: 2026-01-07
updated: 2026-01-14
author: jorge-lobo
categories: [bloques-de-construccion, didactica, programacion, recursos/proyectos]
image: ./portadahelicopteroacelerometro.jpg
imageAlt: "El erizo de Echidna con una pieza de construcción naranja, junto a un helicóptero amarillo y rojo de piezas de construcción montado sobre un servomotor."
---

En este nuevo proyecto con bloques de construcción, montamos un helicóptero que combina movimiento real y control mediante acelerómetro y una representación virtual del mismo para integrarlo en un videojuego creado en EchidnaML.

El modelo está construido con poquitos bloques de construcción y cuenta dos tipos de movimiento:

- Una hélice accionada por un motor de corriente continua conectado al pin de salida **D7** de la EchidnaBlack2 que proporciona el giro constante de la hélice, reforzando la sensación de vuelo del helicóptero.
- El modelo se ha montado sobre un servomotor conectado a **D8**, encargado de hacer girar el helicóptero a izquierda y derecha. Este movimiento se controla mediante el acelerómetro integrado en la EchidnaBlack2. De este modo, los giros del helicóptero responden directamente a la inclinación de la placa: al inclinarla hacia un lado, el servomotor acompaña el movimiento, rotando el modelo hacia ese lado.

Como en anteriores ocasiones, para facilitar que se pueda reproducir el proyecto, se ha creado una **guía de construcción paso a paso** con el montaje completo del modelo que podéis descargar [aquí](https://github.com/lobotic/Proyectitos/blob/master/Echidna/HelicopteroAcelerometro/HelicopteroAcelerometroLPub3D.pdf).

![Animación de la guía de construcción del helicóptero, paso a paso.](/2026/01/helicoptero-con-acelerometro/HelicopteroAcelerometroLPub3D.gif)

El proyecto se complementa con una versión virtual del helicóptero en EchidnaML. Este «avatar» del modelo se ha incorporado en un pequeño videojuego en el que el helicóptero se desplaza por la pantalla utilizando, de nuevo, los datos del acelerómetro, aunque en este caso también se puede desplazar hacia arriba y hacia abajo.

El objetivo del juego es esquivar una serie de patos que aparecen volando, como podéis ver en el siguiente vídeo:

[Helicoptero con Acelerometro](https://www.youtube.com/watch?v=62xLJEJy1ok)

[Aquí](https://github.com/lobotic/Proyectitos/blob/master/Echidna/HelicopteroAcelerometro/Helic%C3%B3ptero%20Aceler%C3%B3metro.sb3) podéis descargar el **archivo `.sb3` de EchidnaML** para probarlo, modificarlo y experimentar con con él.

Esperamos que esta serie de proyectos os esté gustando tanto como a nosotros :-)
