---
title: "Marioneta activada por sonido"
description: "Para probar el micrófono de la nueva Echidna Black voy a proponeros un proyectito sencillo de programar y que fomentará la imaginación y creatividad de los…"
date: 2020-07-06
updated: 2020-11-13
author: jorge-lobo
categories: [recursos/proyectos]
tags: ["Música", "Servomotor", "Snap4Arduino", "Sonido", "STEAM"]
image: ./Blog_Echidna_Marioneta.jpg
imageAlt: "La placa EchidnaBlack y una marioneta que grita «Black is black»."
---

Para probar el **micrófono** de la nueva **Echidna Black** voy a proponeros un proyectito sencillo de programar y que fomentará la imaginación y creatividad de los los más pequeños.

[BlackIsBlack - Control de motor servo por nivel de sonido capturado por el micro de la EchidnaBlack.](https://www.youtube.com/watch?v=7TbHTemsUUI)

Aquí os dejo los pasos para construir vuestra marioneta. Veréis que es muy fácil:

[Ver la presentación (Google Slides)](https://docs.google.com/presentation/d/e/2PACX-1vTMnttiyaWMH5dWrHvkH_zkQKa2iHxa3XPciJQyy00sIO9CLryZc2wj87xaKTOWYXC2ht4_eIsuIu0j/pub?start=false&loop=false&delayms=30000)

El código para este proyecto es muy simple. Únicamente debemos comprobar cual es el valor de umbral que queremos utilizar para que el servomotor comience a moverse, y con un condicional indicaremos cuanto queremos que rote el servomotor al alcanzar dicho valor. Aquí podéis ver un ejemplo de programación en Snap4Arduino:

![Programas de Snap!: uno guarda en vol la lectura analógica del micrófono; el otro, si vol pasa de 2, mueve el servo del pin 7 a 30 grados y luego a 90.](./MarionetaSnap-1.png)

Ya está preparada para cantar vuestros temas favoritos :-)
