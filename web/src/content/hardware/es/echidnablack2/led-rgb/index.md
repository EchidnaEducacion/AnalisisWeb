---
title: LED RGB
description: El LED RGB de la EchidnaBlack2, con sus LED rojo, verde y azul en los pines D9~, D5~ y D6~, y cómo se mezclan colores con EchidnaML.
kind: componente
io: salida
board: echidnablack2
image: ./led-rgb.png
imageAlt: Dibujo de un LED RGB de montaje superficial, con sus zonas roja, verde y azul.
schematic: ./esquema-led-rgb.png
schematicAlt: "Esquema: los pines D9, D5 y D6 llegan, cada uno con su resistencia, a los LED rojo, verde y azul, unidos a tierra (GND)."
pins:
  - { pin: "D9~", name: "LED rojo (R)", mode: "Salida digital y PWM" }
  - { pin: "D5~", name: "LED verde (G)", mode: "Salida digital y PWM" }
  - { pin: "D6~", name: "LED azul (B)", mode: "Salida digital y PWM" }
specs:
  - { label: "Colores", value: "Más de 16 millones" }
  - { label: "Longitud de onda", value: "Rojo 619–624 nm, verde 520–540 nm, azul 460–480 nm" }
tools: [EchidnaML, Snap!, Arduino IDE]
downloads:
  - { label: "Hoja de características del LED RGB", file: "/ecosistema/echidnablack2/led-rgb/datasheet-led-rgb.pdf" }
order: 7
---

La EchidnaBlack2 tiene un LED RGB que puede encenderse de casi cualquier color, mezclando rojo, verde y azul.

## Descripción

El LED RGB es un único componente con **tres LED independientes**, rojo, verde y azul, dentro de la misma cápsula. Su nombre viene de *Light Emitting Diode* (diodo emisor de luz) y de *Red, Green, Blue* (rojo, verde y azul).

En la placa está en la parte superior, con sus pines rotulados al lado: R D9~, G D5~ y B D6~.

![La placa EchidnaBlack2 con una lupa sobre el LED RGB y sus rótulos RD9, GD5 y BD6.](./lupa-led-rgb.png)

## Funcionamiento

El brillo de cada uno de los tres LED se ajusta por separado con **PWM** (modulación por ancho de pulso), con un valor de 0 (apagado) a 255 (máxima intensidad).

Mezclando los tres colores con distintas intensidades se obtienen los demás. Como cada color tiene 256 niveles, en total hay 256 × 256 × 256 = 16 777 216 combinaciones: **más de 16 millones de colores**.

Cada LED se conecta con una resistencia en serie que limita la corriente; en la placa ya están incluidas.

## Cómo se programa

En **EchidnaML**, el color del LED RGB se controla con este bloque, en el que se da a cada LED un valor de 0 a 255:

![Bloque de EchidnaML «LED R 255 G 255 B 255».](./bloque-led-rgb.png)

Por ejemplo, para reproducir el naranja de Echidna se usan estos valores:

![Bloque de EchidnaML «LED R 254 G 109 B 4», que da el naranja de Echidna.](./bloque-led-rgb-naranja.png)

## Ejemplos

### Termómetro de colores

El LED RGB cambia de color según la temperatura que mide el [sensor de temperatura](/ecosistema/echidnablack2/sensor-temperatura/), como un termómetro visual. El programa comprueba sin parar:

- si la temperatura es menor que 20 °C (frío), enciende el LED en azul;
- si no, y es menor que 30 °C (temperatura media), lo enciende en verde;
- si no (más de 30 °C, calor), lo enciende en rojo.

![Programa de EchidnaML: por siempre, si leer temperatura es menor que 20, LED R 0 G 0 B 255; si no, si es menor que 30, LED R 0 G 255 B 0; si no, LED R 255 G 0 B 0.](./programa-termometro-colores.png)

### Recorremos los 16,7 millones de colores

El programa recorre todas las combinaciones de color. Tiene dos partes que funcionan a la vez:

- la primera usa tres variables, R, G y B, y tres bucles **repetir**, uno dentro de otro: para cada valor de rojo recorre todos los de verde y, para cada uno de ellos, todos los de azul;
- la segunda enciende sin parar el LED RGB con los valores de esas tres variables.

Así el LED va mostrando, uno tras otro, los más de 16,7 millones de colores.

![Programa de EchidnaML en dos partes: una pone R, G y B a 0 y, con tres bucles repetir 255 anidados, va sumando 1 a cada variable y vuelve a poner a 0 las interiores; la otra repite sin parar LED R, G, B con esas variables.](./programa-todos-los-colores.png)
