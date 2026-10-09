---
title: Joystick
description: El joystick de la EchidnaBlack2, con sus ejes X e Y en los pines A0 y A1 y un pulsador en D2, cómo funciona y cómo se lee con EchidnaML.
kind: componente
io: entrada
board: echidnablack2
image: ./joystick.png
imageAlt: Dibujo de un joystick de palanca con su capuchón negro.
schematic: ./esquema-joystick.png
schematicAlt: "Esquema: dos potenciómetros entre 5 V y tierra (GND) dan las lecturas de los ejes en A0 y A1, y el pulsador del joystick conecta D2."
pins:
  - { pin: "A0", name: "Eje X", mode: "Entrada analógica" }
  - { pin: "A1", name: "Eje Y", mode: "Entrada analógica" }
  - { pin: "D2", name: "Pulsador (SJ), compartido con SR", mode: "Entrada digital" }
tools: [EchidnaML, Snap!, Arduino IDE]
downloads:
  - { label: "Hoja de características del joystick", file: "/ecosistema/echidnablack2/joystick/datasheet-joystick.pdf" }
order: 2
---

La EchidnaBlack2 tiene un joystick, como el de un mando de videojuegos, para mover personajes, dirigir un robot o dibujar en la pantalla.

## Descripción

El joystick es un dispositivo de entrada con una palanca que se mueve en varias direcciones. Al inclinarla, indica hacia dónde y cuánto se ha desplazado respecto a dos ejes: el horizontal (X) y el vertical (Y).

Por dentro tiene dos potenciómetros, uno para cada eje, que convierten la posición de la palanca en un valor de resistencia.

Además, tiene un **pulsador** que se activa al apretar la palanca hacia abajo. En la EchidnaBlack2, este pulsador está rotulado **SJ** y está conectado al mismo pin que el pulsador **SR**, el D2: al leer uno se lee también el otro.

![La placa EchidnaBlack2 con una lupa sobre el joystick, en la parte izquierda, con los rótulos A0, A1 y SJ D2.](./lupa-joystick.png)

## Funcionamiento

Cada eje da una tensión proporcional a la posición de la palanca, que la placa convierte en un valor de 0 a 1023. En reposo, los dos ejes dan valores en torno a 512. Por las tolerancias de los componentes, los valores pueden variar un poco de una placa a otra.

## Cómo se programa

En **EchidnaML**, el joystick se lee con este bloque, en el que se elige el eje, X o Y:

![Bloque de EchidnaML «leer joystick x», con un desplegable para elegir el eje.](./bloque-joystick.png)

Los valores son:

- **en reposo**, en torno a 512 en los dos ejes;
- **eje X**: 0 a la izquierda y 1023 a la derecha;
- **eje Y**: 0 abajo y 1023 arriba.

![Gráfica de los valores del joystick: un círculo con el centro en (512, 512) y los extremos en (0, 512) a la izquierda, (1023, 512) a la derecha, (512, 1023) arriba y (512, 0) abajo.](./grafica-valores-joystick.png)

El pulsador del joystick se lee con el bloque de los [pulsadores](/ecosistema/echidnablack2/pulsadores/), eligiendo SR.

## Ejemplos

### Pintamos

El joystick mueve un lápiz por la pantalla para dibujar. Primero hay que añadir la extensión **Lápiz** de Scratch y prepararlo al empezar: borrar el fondo, ir al punto (0, 0), fijar el color y el grosor del lápiz y bajarlo.

![Programa de EchidnaML: al hacer clic en la bandera verde, borrar todo, ir a x 0 y 0, fijar color de lápiz, fijar tamaño de lápiz a 4 y bajar lápiz.](./programa-pintamos-inicio.png)

Después, el programa comprueba sin parar hacia dónde se inclina el joystick y mueve el lápiz en esa dirección:

- eje X mayor que 900: hacia la derecha;
- eje X menor que 100: hacia la izquierda;
- eje Y mayor que 900: hacia arriba;
- eje Y menor que 100: hacia abajo.

![Programa de EchidnaML: por siempre, cuatro condiciones con leer joystick x e y que apuntan en la dirección correspondiente y mueven el lápiz.](./programa-pintamos.png)
