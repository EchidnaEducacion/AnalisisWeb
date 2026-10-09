---
title: Características técnicas
description: "Datos técnicos de la placa EchidnaBlack2: microcontrolador, sensores, actuadores, conectores con sus pines y consumo."
template: pagina
order: 1
image: ./caracteristicas-tecnicas/miniatura.png
toc: true
---

Complementan la ficha de la [EchidnaBlack2](/ecosistema/echidnablack2/), donde está el esquema con la posición de cada componente y su pin.

## Microcontrolador

- ATmega328P a 16 MHz, compatible con Arduino Nano.

## Sensores

- **Joystick**: ejes X e Y, lineal.
- **Sensor de luz (LDR)**: sensibilidad de 400 a 600 lux a 540 nm.
- **Sensor de temperatura**: de −40 °C a +125 °C, 10 mV/°C.
- **Acelerómetro**: ejes X, Y y Z, ±2 g (I2C, dirección 0x18).
- **Micrófono**: omnidireccional, de 100 Hz a 20 kHz.
- **Pulsadores**: 12 mm, de 1,27 a 2,55 N.
- **Entradas MkMk**: conductivas.

## Actuadores

- **LED**: 5 mm, rojo, naranja y verde.
- **LED RGB**: más de 16 millones de colores (256 niveles por cada color). Rojo de 619 a 624 nm, verde de 520 a 540 nm y azul de 460 a 480 nm.
- **Audio**: zumbador de 2300 Hz y 85 dB a 10 cm, conexión jack de 3,5 mm y control de volumen con potenciómetro lineal.

## Conectores

| Conector | Pines |
|---|---|
| USB-C, para conectar con el ordenador | — |
| Módulo Bluetooth HC-05 (6 pines) | K, 5V, GND, RX, TX, NC |
| I2C (4 pines) | GND, 5V, SCL, SDA |
| Entradas y salidas para complementos | GND, +V y A2 · GND, +V y D4 · GND, +V y D7 · GND, +V y D8 |
| Jack de alimentación (2,5 mm / 6,4 mm) | +V, GND |
| ICSP (6 pines) | — |

## Consumo

- Conectada por USB: 0,150 W.
- Con alimentación externa: 0,160 W.
