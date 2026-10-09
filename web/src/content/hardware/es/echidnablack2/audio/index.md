---
title: Audio
description: Las salidas de audio de la EchidnaBlack2, el zumbador y el jack, con su control de volumen, en el pin D10~, y cómo se usan con EchidnaML.
kind: componente
io: salida
board: echidnablack2
image: ./zumbador.png
imageAlt: Dibujo del zumbador, un cilindro negro con un orificio en la parte superior.
schematic: ./esquema-audio.png
schematicAlt: "Esquema: el pin D10 pasa por el potenciómetro de volumen y llega al jack y al zumbador, conectados a tierra (GND)."
pins:
  - { pin: "D10~", name: "Zumbador y jack (Buzz)", mode: "Salida PWM" }
specs:
  - { label: "Zumbador", value: "2300 Hz, 85 dB a 10 cm" }
  - { label: "Jack de audio", value: "3,5 mm" }
  - { label: "Volumen", value: "Potenciómetro lineal" }
tools: [EchidnaML, Snap!, Arduino IDE]
downloads:
  - { label: "Hoja de características del zumbador", file: "/ecosistema/echidnablack2/audio/datasheet-zumbador.pdf" }
order: 9
---

La EchidnaBlack2 puede emitir sonidos: avisos, melodías, un timbre… Para ello tiene dos salidas de audio y un control de volumen.

## Descripción

La placa tiene dos salidas para reproducir audio:

- el **zumbador**, que suena directamente en la placa;
- el **jack**, al que se pueden conectar auriculares o altavoces autoamplificados. Al conectar una clavija en el jack, el zumbador se desconecta.

Además, tiene un **potenciómetro** para ajustar el volumen del sonido.

![La placa EchidnaBlack2 con una lupa sobre el zumbador, rotulado Buzzer D10~.](./lupa-zumbador.png)

## Funcionamiento

Las dos salidas están conectadas al pin D10~, que puede reproducir señales de entre 31 Hz y 20 kHz.

El **zumbador** vibra y suena al recibir una señal de una frecuencia determinada. Su frecuencia central es de 2,3 kHz, así que, si nos alejamos mucho de ella, no sonará con calidad (como referencia, la nota do central, C4, tiene 262 Hz). Con el volumen muy bajo puede no oírse.

El **jack** permite conectar un equipo de audio externo, que reproduce los sonidos con más calidad. Cuidado con el volumen: demasiado alto puede dañar los auriculares e incluso los oídos.

## Cómo se programa

En **EchidnaML**, el zumbador se controla con este bloque, que lo enciende o lo apaga:

![Bloque de EchidnaML «encender zumbador», con un desplegable para encender o apagar.](./bloque-zumbador.png)

## Ejemplos

### Timbre

Un pulsador hace de botón del timbre: el zumbador suena mientras se mantiene pulsado y deja de sonar al soltarlo. El programa comprueba sin parar:

- si el pulsador SL está pulsado, enciende el zumbador;
- si no, lo apaga.

![Programa de EchidnaML: por siempre, si el botón SL está pulsado, encender zumbador; si no, apagar zumbador.](./programa-timbre.png)
