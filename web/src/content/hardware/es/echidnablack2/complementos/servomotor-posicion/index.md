---
title: Servomotor de posición
description: Un motor que gira a un ángulo exacto entre 0 y 180º, cómo se conecta a las entradas y salidas de la EchidnaBlack2 y cómo se mueve con EchidnaML.
kind: complemento
board: echidnablack2
image: ./servomotor-posicion.png
imageAlt: Dibujo de un servomotor negro con un brazo blanco de plástico sobre el eje.
schematic: ./esquema-servomotor.png
schematicAlt: "Esquema: los cables del servomotor GND (negro), V+ (rojo) y SIG (blanco) van a los pines G, + y Dx de un conector I/O."
pins:
  - { pin: "D4", name: "Señal del servo (I/O)", mode: "Salida digital" }
  - { pin: "D7", name: "Señal del servo (I/O)", mode: "Salida digital" }
  - { pin: "D8", name: "Señal del servo (I/O)", mode: "Salida digital" }
  - { pin: "A2", name: "Señal del servo (I/O)", mode: "Salida digital" }
specs:
  - { label: "Ángulo de giro", value: "De 0 a 180º" }
  - { label: "Control", value: "Pulsos de 1 a 2 ms cada 20 ms" }
  - { label: "Cables", value: "Rojo: +V · Negro: GND · Amarillo: señal" }
tools: [EchidnaML, Arduino IDE]
downloads:
  - { label: "Hoja de características del servomotor Futaba S3003", file: "/ecosistema/echidnablack2/complementos/servomotor-posicion/datasheet-servomotor-s3003.pdf" }
order: 1
---

El servomotor de posición es un motor que se puede llevar a un **ángulo exacto**, entre 0 y 180º, y que se queda ahí. Sirve para mover una barrera, una veleta, el brazo de un robot o la aguja de un indicador.

## Descripción

Es un **motor de corriente continua** con una reductora y una electrónica de control dentro de la misma caja. La electrónica compara la posición del eje con la que se le pide y mueve el motor hasta llegar a ella.

Se conecta a uno de los conectores de entrada y salida de la placa: **D4, D7, D8 o A2**. Hay que fijarse en los colores de los cables: el **rojo** va a la alimentación (+V), el **negro** (o marrón) a tierra (GND) y el **amarillo** (o blanco) a la señal.

![El servomotor conectado a la EchidnaBlack2: el cable negro a GND, el rojo a +V y el amarillo a la señal de A2, en los conectores I/O de la parte superior izquierda.](./conexion-servomotor.png)

## Funcionamiento

El ángulo se indica con **pulsos** de entre 1 y 2 ms que se repiten cada 20 ms: cuanto más largo es el pulso, mayor es el ángulo. No hace falta generarlos a mano: el bloque de EchidnaML (o la librería Servo de Arduino) los calcula a partir del ángulo.

Un servomotor consume bastante cuando se mueve. Para conectar **varios**, conviene alimentar la placa con una fuente externa por el jack y poner el selector de las entradas y salidas en **Vin**, como se explica en [Alimentación](/ecosistema/echidnablack2/alimentacion/). Si se usa **A2**, el selector de modo tiene que estar en modo sensores, porque en modo MkMk ese pin es la entrada MkMk2 ([Modo sensores / Modo MkMk](/ecosistema/echidnablack2/modo-sensores-mkmk/)).

## Cómo se programa

En **EchidnaML**, el servomotor se mueve con este bloque, en el que se elige el pin al que está conectado (**D4, D7, D8 o A2**) y el ángulo, de **0 a 180º**:

![Bloque de EchidnaML «servo D4 al ángulo 90», con un desplegable para elegir el pin.](./bloque-servo.png)

## Ejemplos

### Control de posición con el joystick

El eje X del [joystick](/ecosistema/echidnablack2/joystick/) mueve el servomotor, conectado a **D4**. La variable *angulo* guarda la posición del servo y empieza en 90º, en el centro.

![Programa de EchidnaML: al hacer clic en la bandera verde, dar a angulo el valor 90 y, por siempre, dos condiciones con leer joystick x que suman -1 o 1 a angulo y mueven el servo D4 a ese ángulo, con una espera de 0,01 segundos.](./programa-servo-joystick.png)

El programa comprueba sin parar hacia dónde se inclina el joystick:

- eje X **mayor que 600** y ángulo mayor que 0: resta 1 al ángulo y mueve el servo;
- eje X **menor que 400** y ángulo menor que 180: suma 1 al ángulo y mueve el servo.

Con el joystick en reposo (en torno a 512) no se cumple ninguna de las dos condiciones y el servo se queda quieto. Las condiciones sobre el ángulo evitan pedirle al servo una posición fuera de 0-180º, y la pequeña espera al final de cada vuelta hace que se mueva de forma suave.
