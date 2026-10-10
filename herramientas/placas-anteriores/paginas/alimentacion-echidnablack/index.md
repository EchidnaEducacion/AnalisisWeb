# Alimentación EchidnaBlack

<!-- https://echidna.es/hardware/echidnablack/alimentacion-echidnablack/ -->

## Formas de alimentar la placa:

1\. Mediante la **conexión USB**: esta forma es válida para la mayoría de las funciones, toda la placa recibe una tensión regulada de 5V proporcionada por el cable USB, generalmente con un límite de 500mA, y cuenta con fusible rearmable.

2\. Mediante el **Jack de alimentación**: Todas las partes reciben una tensión regulada internamente de 5V y 1A máx. Nos da la posibilidad de seleccionar Vin para alimentar los pines I/O con la potencia que proporciona el alimentador externo cuenta con fusible rearmable de protección (no superar 1A de corriente constante).

![](./AlimentacionBlack.png)

## Selector de alimentación:

El jumper de alimentación permite seleccionar la alimentación de las I/O.

![Alimentación 5V](./Selector5v-Black.png)![](./SelectorVin-Black.png)

## Selector 5v:

En caso de querer alimentar las I/O desde los 5 Volts procedentes del Arduino el jumper debe estar colocado en esta posición. Aconsejado para sensores externos que necesiten una tensión estabilizada.

¡No utilizar la alimentación 5V cuando los servos a controlar consuman más de 300 mA!\* De lo contrario se sobrepasaría el regulador.

## Selector alimentación Vin  (Alimentación externa):

Aconsejado para alimentar servos u otros dispositivos conectados a I/O que consuman más de 300 mA con alimentación externa por el Jack de alimentación.

La alimentación de los servos cuenta con un filtro L-C para evitar que lleguen los parásitos de los motores al procesador.
