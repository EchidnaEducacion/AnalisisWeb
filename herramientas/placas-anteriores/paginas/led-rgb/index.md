# LED RGB

<!-- https://echidna.es/hardware/componentes/led-rgb/ -->

## Descripción

LED RGB acrónimos de Light Emitting Diode y Red Green Blue, es decir son tres LEDes Rojo, Verde y Azul en la misma cápsula.

![](./LDR.png)

## Funcionamiento:

El LED RGB podemos controlarlo digitalmente, encendiendo o apagando cada LED y ajustar la luminosidad mediante PWM “analógico”.

**Control digital:** podemos encender y apagar cada uno de los LED RGB, lo que nos permite formar 2³\=8 colores diferentes.

**Control “analógico” PWM:** podemos controlar el brillo de cada LED, variando su intensidad luminosa desde 0 a 255, lo que nos permite realizar 256\*256\*2256\= 16 M de colores.

Todos los LEDes se conectan con una resistencia serie “Rs” para controlar la tensión/corriente aplicada.

![](./RGB_esq.png)

## Programación:

- D9~ “RGB\_R”: Salida Digital y PWM
- D5~ “RGB\_G”: Salida Digital y PWM
- D6~  “RGB\_B 9”: Salida Digital y PWM

En **EchidnaML** usamos el siguiente bloque para controlar la luminosidad y el color del LED RGB:En **EchidnaML** usamos el siguiente bloque para controlar la luminosidad y el color del LED RGB:

Se activan como salidas **PWM** con un valor entre 0 y 255 que modifica la intensidad luminosa de cada LED y por consiguiente el color que emite.

![Bloque LED RGB](./Bloque-LED-RGB.png)

## [Hoja de características](./DataSheet-LEDRGB.pdf)
