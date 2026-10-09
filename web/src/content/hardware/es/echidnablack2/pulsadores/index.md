---
title: Pulsadores
description: Los dos pulsadores de la EchidnaBlack2, SR y SL, en los pines D2 y D3, cómo funcionan y cómo se leen con EchidnaML.
kind: componente
io: entrada
board: echidnablack2
image: ./pulsador.png
imageAlt: Dibujo de un pulsador de cuatro patillas con su botón redondo.
schematic: ./esquema-pulsador.png
schematicAlt: "Esquema: el pulsador une el pin D2 o D3 con +5 V; una resistencia de 10 kΩ lo conecta a tierra (GND)."
pins:
  - { pin: "D2", name: "Pulsador SR (derecho)", mode: "Entrada digital" }
  - { pin: "D3", name: "Pulsador SL (izquierdo)", mode: "Entrada digital" }
tools: [EchidnaML, Snap!, Arduino IDE]
downloads:
  - { label: "Hoja de características del pulsador", file: "/ecosistema/echidnablack2/pulsadores/datasheet-pulsador.pdf" }
order: 1
---

La EchidnaBlack2 tiene dos pulsadores, **SR** y **SL**, que sirven para dar órdenes al programa: encender algo, cambiar de modo, contar pulsaciones…

## Descripción

El pulsador es un componente electromecánico que abre o cierra un circuito y que solo tiene un **estado estable**, el de reposo. En estos pulsadores el estado estable es **abierto** (normalmente abierto): el circuito está interrumpido y solo se cierra mientras se mantiene pulsado. Al soltarlo, vuelve enseguida a estar abierto.

En la placa están en la parte derecha: **SR** (*switch right*, pulsador derecho) en el pin D2 y **SL** (*switch left*, pulsador izquierdo) en el pin D3.

![La placa EchidnaBlack2 con una lupa sobre sus dos pulsadores, rotulados SR D2 y SL D3.](./lupa-pulsadores.png)

## Funcionamiento

Cada pulsador está conectado con una resistencia a tierra, formando un circuito llamado ***pull-down***: sin pulsar, el pin recibe un `0` (0 V), y al pulsar, un `1` (5 V).

## Cómo se programa

En **EchidnaML**, para leer un pulsador se usa este bloque, que permite elegir el pulsador, SR o SL:

![Bloque de EchidnaML «¿botón SL pulsado?», con un desplegable para elegir el pulsador.](./bloque-pulsador.png)

Devuelve **verdadero** (1) si el pulsador está pulsado y **falso** (0) si no lo está.

## Ejemplos

### Encender y apagar el LED con dos pulsadores

El pulsador derecho (SR) enciende el LED rojo y el izquierdo (SL) lo apaga. El programa comprueba sin parar:

- si SR está pulsado, enciende el LED rojo;
- si no, comprueba si SL está pulsado y, en ese caso, apaga el LED rojo.

![Programa de EchidnaML: por siempre, si el botón SR está pulsado, encender LED rojo; si no, si el botón SL está pulsado, apagar LED rojo.](./programa-dos-pulsadores.png)

### Pulsador con memoria

Aquí un solo pulsador funciona como un interruptor: la primera pulsación enciende el LED y la siguiente lo apaga. Para que el programa «recuerde» si el LED está encendido o apagado, usa una variable, `estadoLED`.

Cada vez que se pulsa el botón, el programa consulta `estadoLED`:

- si vale 0 (apagado), enciende el LED y pone `estadoLED` a 1;
- si vale 1 (encendido), apaga el LED y pone `estadoLED` a 0.

Para que el cambio ocurra una sola vez por pulsación, aunque se mantenga el botón pulsado, el programa espera a que se suelte con el bloque **esperar hasta que** no esté pulsado. Así se evitan los rebotes y la variable cambia una sola vez cada vez que se pulsa.

![Programa de EchidnaML: dar a estadoLED el valor 0; por siempre, si el botón SL está pulsado, si estadoLED es 0 encender LED rojo y dar a estadoLED el valor 1, si no apagar LED rojo y dar a estadoLED el valor 0; después, esperar hasta que el botón SL no esté pulsado.](./programa-pulsador-memoria.png)
