---
title: LEDs ROG
description: Los tres LED de la EchidnaBlack2 (verde, naranja y rojo), sus pines D11~, D12 y D13 y cómo se programan con EchidnaML.
kind: componente
io: salida
board: echidnablack2
image: ./led.png
imageAlt: Dibujo de un LED naranja de 5 mm con sus dos patillas.
pins:
  - { pin: "D11~", name: "LED verde", mode: "Salida digital y PWM" }
  - { pin: "D12", name: "LED naranja", mode: "Salida digital" }
  - { pin: "D13", name: "LED rojo", mode: "Salida digital" }
tools: [EchidnaML, Snap!, Arduino IDE]
downloads:
  - { label: "Hoja de características del LED", file: "/ecosistema/echidnablack2/leds/datasheet-led.pdf" }
order: 8
---

La EchidnaBlack2 tiene tres LED, verde, naranja y rojo, como los de un semáforo (de ahí ROG, por sus nombres en inglés: *red*, *orange* y *green*). Sirven para indicar estados del programa o para hacer las primeras prácticas.

## Descripción

LED son las siglas de *Light Emitting Diode*, diodo emisor de luz. Funcionan gracias a la **electroluminiscencia**: cuando circula corriente por ellos, emiten luz. Se usan como testigos o indicadores y, cada vez más, para iluminar.

En la placa están en columna junto al rótulo de cada uno: **Red** (rojo, D13), **Orn** (naranja, D12) y **Gre** (verde, D11~).

![La placa EchidnaBlack2 con una lupa sobre sus tres LED, rotulados Red D13, Orn D12 y Gre D11~.](./lupa-leds.png)

## Funcionamiento

Al aplicarle tensión, el LED se enciende. Desde el programa lo podemos controlar de dos formas:

- **Digital**: un `1` lo enciende y un `0` lo apaga. Funciona con los tres LED.
- **PWM**: un valor entre `0` y `255` regula el brillo. Solo en el LED verde, que está en el pin D11~ (el símbolo `~` indica que el pin admite PWM).

Todos los LED se conectan con una resistencia en serie (Rs) que limita la corriente que los atraviesa. En la EchidnaBlack2 ya está incluida, así que no hay que añadir nada.

![Esquema: el pin digital Dx va a la resistencia Rs, después al LED y por último a tierra (GND).](./esquema-led.png)

## Cómo se programa

En **EchidnaML** hay un bloque para encender o apagar cada LED: se elige la acción y el color.

![Bloque de EchidnaML «encender LED rojo», con desplegables para la acción y el color.](./bloque-led.png)

Para el LED verde hay otro bloque que ajusta su brillo entre 0 (apagado) y 255 (máximo brillo).

![Bloque de EchidnaML «LED verde 255».](./bloque-led-verde.png)

## Ejemplos

### Semáforo

El programa enciende los LED uno detrás de otro, como un semáforo, y repite el ciclo sin parar:

1. El LED verde se enciende durante 5 segundos y se apaga.
2. El LED naranja se enciende durante 2 segundos y se apaga.
3. El LED rojo se enciende durante 5 segundos y se apaga.

![Programa de EchidnaML: por siempre, enciende el LED verde, espera 5 segundos y lo apaga; enciende el naranja, espera 2 segundos y lo apaga; enciende el rojo, espera 5 segundos y lo apaga.](./programa-semaforo.png)

### Fundido del LED verde

El LED verde se enciende y se apaga poco a poco, con un efecto de fundido (*fade*). El programa usa una variable, `brillo`, y dos bucles seguidos que se repiten sin parar:

- **Encendido progresivo**: el brillo sube de 0 a 255, de uno en uno.
- **Apagado progresivo**: el brillo baja de 255 a 0.

Cada paso espera 0,01 segundos, así que el cambio se ve suave.

![Programa de EchidnaML: pone brillo a 0 y, por siempre, repite 255 veces encender el LED verde con brillo y sumar 1, y después repite 255 veces sumar −1 y encender el LED verde con brillo, esperando 0,01 segundos en cada paso.](./programa-fundido.png)
