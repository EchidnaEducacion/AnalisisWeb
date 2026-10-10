# Servomotor continuo Shield

<!-- https://echidna.es/hardware/complementos/servomotor-continuo-shield/ -->

## Descripción

Son motores de corriente continua con una reductora y electrónica de control que permiten controlar el sentido de giro.

![](./servo-continuo.png)

## Funcionamiento:

Se controla mediante pulsos de 1-2 ms en periodos de 20 ms.

En la práctica se usa una librería que nos permite indicar directamente el el sentido de giro.

![](./Servo_esq.png)

## Elementos de conexión:

Se conecta directamente con sus cables. Es aconsejable colocar el jumper de alimentación en Vin y alimentar Arduino mediante el jack  de alimentación.

![](./Echidna-servo_bb.png)

## Programación:

- I/O 1= PIN D4
- I/O 2= PIN D7
- I/O 3= PIN D8

El servomotor de posición lo controlamos directamente indicando en el bloque el sentido de giro.

![](./ServoContinuo-prog.png)

## [Hoja de características](./DataSheeetServoContinuo.pdf)
