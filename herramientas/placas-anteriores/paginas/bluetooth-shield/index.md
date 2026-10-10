# Bluetooth Shield

<!-- https://echidna.es/hardware/complementos/bluetooth-shield/ -->

## Descripción

Es un transceptor que permite conectar dispositivos Bluetooth a la placa Arduino.

![](./BT-1.png)

## Funcionamiento:

Envía y recibe datos a través del puerto serie vía Bluetooth

## Esquema y conexión:

![](./BT_esq.png)![](./BT-conexion.png)

## Programación:

- D0- Rx= Pin de recepción de datos
- D1-Tx= Pin de transmisión de datos

Se comunica a través del puerto serie Tx/Rx, es necesario programar Arduino previamente a la conexión del Bluetooth, ya que si no este bloquea la comunicación por cable.

## [Hoja de características](./hc06.pdf)
