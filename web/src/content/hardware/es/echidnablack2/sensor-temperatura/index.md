---
title: Sensor de temperatura
description: El sensor de temperatura de la EchidnaBlack2, un MCP9700T en el pin A6, cómo funciona y cómo se lee en grados Celsius con EchidnaML.
kind: componente
io: entrada
board: echidnablack2
image: ./sensor-temperatura.png
imageAlt: Dibujo del sensor de temperatura, un pequeño chip negro de tres patillas.
schematic: ./esquema-sensor-temperatura.png
schematicAlt: "Esquema: el MCP9700T se alimenta con +5 V y GND, y su salida VOUT va al pin de temperatura (A6)."
pins:
  - { pin: "A6", name: "Sensor de temperatura", mode: "Entrada analógica" }
specs:
  - { label: "Sensor", value: "MCP9700T" }
  - { label: "Rango", value: "De −40 °C a +125 °C" }
  - { label: "Sensibilidad", value: "10 mV por cada °C" }
tools: [EchidnaML, Snap!, Arduino IDE]
downloads:
  - { label: "Hoja de características del MCP9700", file: "/ecosistema/echidnablack2/sensor-temperatura/datasheet-mcp9700.pdf" }
order: 6
---

La EchidnaBlack2 tiene un sensor que mide la temperatura del ambiente, para hacer termómetros, alarmas de calor o registrar la temperatura del aula.

## Descripción

El MCP9700T es un sensor que da una tensión analógica proporcional a la temperatura en grados Celsius:

- **Sensibilidad**: cada 10 mV equivalen a 1 °C.
- **Desplazamiento** (*offset*): a 0 °C da 500 mV (0,5 V).
- **Rango**: funciona de −40 °C a +125 °C.

En la placa está en la parte inferior, rotulado Temp A6.

![La placa EchidnaBlack2 con una lupa sobre el sensor de temperatura, rotulado Temp A6.](./lupa-sensor-temperatura.png)

## Funcionamiento

La placa lee la tensión del sensor por el pin A6 y la convierte en grados con esta fórmula, donde V es la tensión en voltios:

T (°C) = (V − 0,5) × 100

Por ejemplo, una lectura de 0,75 V corresponde a (0,75 − 0,5) × 100 = 25 °C.

## Cómo se programa

En **EchidnaML**, la temperatura se lee con este bloque, que ya aplica la fórmula y la da directamente en grados Celsius. Si marcas su casilla, verás el valor en pantalla:

![Bloque de EchidnaML «leer temperatura».](./bloque-temperatura.png)

## Ejemplos

### El echidna dice la temperatura

Al pulsar la tecla «t» del teclado, el echidna dice qué temperatura hace:

![El personaje del echidna en la pantalla con el bocadillo «Hola, hace una temperatura de 16,61 °C».](./resultado-echidna-temperatura.png)

El programa une el texto «Hola, ahora hace una temperatura de», el valor del sensor y «°C», y el personaje lo dice durante 2 segundos:

![Programa de EchidnaML: al presionar la tecla t, decir unir «Hola, ahora hace una temperatura de» con leer temperatura y «°C» durante 2 segundos.](./programa-echidna-temperatura.png)
