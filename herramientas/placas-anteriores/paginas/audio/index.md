# Audio

<!-- https://echidna.es/hardware/componentes/audio/ -->

## Descripción

Disponemos de dos salidas para reproducir audio, el zumbador y el jack al que podemos conectar auriculares o altavoces autoamplificados. Al conectar una clavija de audio en el jack se desconecta el zumbador.

Además contamos con un potenciómetro que permite ajustar el volumen del sonido.

![](./Audio.png)![](./potenciometro.png)![](./Jack.png)

## Funcionamiento:

En D10~ podemos reproducir señales entre 31 Hz y 20 KHz.

El zumbador al ser excitado por una señal con una frecuencia determinada vibra reproduciendo un sonido. Hay que tener en cuenta que su frecuencia central es de 2,3 Khz, con lo que si nos alejamos mucho de esa frecuencia no sonará con calidad. (Do = C4 = 262 Hz) (cuidado con el volumen, a bajo nivel el zumbador puede no resultar audible).

En la salida del jack conectamos un equipo externo de audio que nos permite reproducir las frecuencias de entrada con más calidad (cuidado con el volumen, puede dañar los auriculares e incluso llegar al umbral doloroso en los oídos).

![](./Audio_esq.png)

## Programación:

D10~ “Buzz” Salida PWM.

Se activa como una salida PWM con un valor entre 0 y 255 que modula la frecuencia de sonido.

En **EchidnaML** usamos el siguiente bloque para controlar el encendido del zumbador.

![Bloque Zumbador](./bloque-zumbador.png)

## [Hoja de características](./F-CM12P-LF.pdf)
