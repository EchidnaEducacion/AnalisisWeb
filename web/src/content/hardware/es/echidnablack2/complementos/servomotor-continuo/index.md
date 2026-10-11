---
title: Servomotor de rotación continua
description: Un motor que gira sin parar en el sentido y a la velocidad que se le indica, cómo se conecta a la EchidnaBlack2 y cómo se controla con EchidnaML.
kind: complemento
board: echidnablack2
image: ./servomotor-continuo.png
imageAlt: Dibujo de un servomotor negro con una pieza en forma de cruz sobre el eje.
schematic: ./esquema-servomotor.png
schematicAlt: "Esquema: los cables del servomotor GND (negro), V+ (rojo) y SIG (blanco) van a los pines G, + y Dx de un conector I/O."
pins:
  - { pin: "D4", name: "Señal del servo (I/O)", mode: "Salida digital" }
  - { pin: "D7", name: "Señal del servo (I/O)", mode: "Salida digital" }
  - { pin: "D8", name: "Señal del servo (I/O)", mode: "Salida digital" }
  - { pin: "A2", name: "Señal del servo (I/O)", mode: "Salida digital" }
specs:
  - { label: "Giro", value: "Continuo (360º), horario o antihorario" }
  - { label: "Velocidad", value: "De 0 a 100 %" }
  - { label: "Cables", value: "Rojo: +V · Negro: GND · Amarillo: señal" }
tools: [EchidnaML, Arduino IDE]
order: 2
---

El servomotor de rotación continua es un motor que **gira sin parar**, en el sentido que se le indica, en lugar de ir a un ángulo. Sirve para mover las ruedas de un robot, una cinta transportadora o un tiovivo.

## Descripción

Por fuera es igual que un [servomotor de posición](/ecosistema/echidnablack2/complementos/servomotor-posicion/): un **motor de corriente continua** con una reductora y una electrónica de control dentro de la misma caja. La diferencia está en la electrónica, que en vez de llevar el eje a un ángulo controla el **sentido de giro** y permite ajustar un poco la **velocidad**.

Se conecta a uno de los conectores de entrada y salida de la placa: **D4, D7, D8 o A2**. Hay que fijarse en los colores de los cables: el **rojo** va a la alimentación (+V), el **negro** (o marrón) a tierra (GND) y el **amarillo** (o blanco) a la señal.

![Un servomotor conectado a la EchidnaBlack2: el cable negro a GND, el rojo a +V y el amarillo a la señal de A2, en los conectores I/O de la parte superior izquierda.](./conexion-servomotor.png)

## Funcionamiento

Se controla con los mismos **pulsos** que el servomotor de posición, de entre 1 y 2 ms cada 20 ms, pero aquí el pulso no indica un ángulo: con un pulso de 1,5 ms el motor está **parado**, y cuanto más se aleja de ese valor, hacia un lado o hacia el otro, más rápido gira en un sentido o en el contrario. No hace falta generarlos a mano: el bloque de EchidnaML (o la librería Servo de Arduino) los calcula a partir del sentido y la velocidad.

Para conectar **varios** servomotores, conviene alimentar la placa con una fuente externa por el jack y poner el selector de las entradas y salidas en **Vin**, como se explica en [Alimentación](/ecosistema/echidnablack2/alimentacion/). Si se usa **A2**, el selector de modo tiene que estar en modo sensores, porque en modo MkMk ese pin es la entrada MkMk2 ([Modo sensores / Modo MkMk](/ecosistema/echidnablack2/modo-sensores-mkmk/)).

## Cómo se programa

En **EchidnaML**, el servomotor de rotación continua se controla con este bloque, en el que se elige:

- el **pin** al que está conectado: D4, D7, D8 o A2;
- el **sentido** de giro: horario o antihorario;
- la **velocidad**, de 0 a 100 %. Con 0, el motor se para.

![Bloque de EchidnaML «servo D4 sentido horario velocidad 0», con desplegables para elegir el pin y el sentido.](./bloque-servo-continuo.png)

## Ejemplos

### Control del sentido de giro con los pulsadores

Los [pulsadores](/ecosistema/echidnablack2/pulsadores/) eligen hacia dónde gira el servomotor, conectado a **D4**: con **SR** gira en sentido horario, con **SL** en sentido antihorario y, si no se pulsa ninguno, se para.

![Programa de EchidnaML con dos partes. A la izquierda, por siempre: si el botón SR está pulsado, velocidad 100 y sentido horario; si no, si SL está pulsado, velocidad 100 y sentido antihorario; si no, velocidad 0. A la derecha, por siempre: servo D4 con las variables sentido y velocidad, y esperar 0,1 segundos.](./programa-servo-continuo-pulsadores.png)

El programa tiene dos partes que funcionan a la vez, cada una con su bandera verde, y se comunican con dos variables: **velocidad** (100 para girar, 0 para parar) y **sentido** (horario o antihorario).

- La parte de la **izquierda** lee los pulsadores y decide qué hacer:
  - si SR está pulsado, sentido horario y velocidad 100;
  - si no, y SL está pulsado, sentido antihorario y velocidad 100;
  - si no se pulsa ninguno, velocidad 0.
- La parte de la **derecha** mueve el servomotor con el sentido y la velocidad de las variables. La espera de 0,1 s evita mandarle órdenes sin parar, lo que podría hacer que funcionara de forma inestable.
