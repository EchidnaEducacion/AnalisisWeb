---
titulo: EchidnaBlack
subtitulo: Documentación archivada de echidna.es
fecha: 2026-10-10
licencia: CC BY-SA 4.0
---

# La placa

## Presentación {#presentacion}

<!-- Fuente: https://echidna.es/hardware/echidnablack/ -->

### Características
![](paginas/echidnablack/EchidnaBlack-top-700.png)

- Placa autónoma compatible con Arduino Nano/ Arduino UNO  
- Sensores integrados: pulsadores, joystick, acelerómetro, luz, temperatura, micrófono  
- Actuadores integrados: LEDs, LED RGB, audio
- Flexible: entradas y salidas disponibles para complementos
- 8 Entradas tipo Makey Makey
- Conexión BlueTooth
- Open Source Hardware Certification con registro OSHWA UID ES000010  

### Esquema de componentes
![](paginas/echidnablack/EchidnaBlackComponentes.png)

### Componentes
#### [Pulsadores](#pulsadores)

Es un componente electromecánico que permite abrir o cerrar un circuito con un solo estado estable

#### [Joystick](#joystick)

Es un mando que consta de dos potenciómetros uno para el eje X y otro para el eje Y.

#### [Sensor Luz LDR](#sensor-de-luz-ldr)

“Light Dependent Resistor”, es una resistencia cuyo valor depende de la cantidad de luz que incide sobre ella.

#### [LED RGB](#led-rgb)

Light Emitting Diode y Red Green Blue. Son 3 LEDes Rojo, Verde y Azul en la misma cápsula.

#### [Audio](#audio)

Dispone de dos salidas para reproducir audio: el zumbador y el jack, ambos con un regulador de volumen.

#### [MkMk](#conexiones-mkmk)

Echidna dispone de 8 Conectores MkMk que le permiten detectar gran variedad de objetos.

#### [Acelerómetro](#acelerometro)

Sensor de aceleraciones basado en condensadores dentro de una estructura  

#### [LEDs ROG](#leds)

Light Emitting Diode se usan como testigos (indicadores) y como fuente de iluminación.

#### [Micrófono](#microfono)

Transductor que nos entrega una señal eléctrica de similares características al sonido.  

#### [Sensor Temperatura](#sensor-de-temperatura-lm35)

Es un sensor de temperatura calibrado cuya salida es lineal, y donde cada 10 mV equivale a 1ºC.

[Puesta en marcha](#puesta-en-marcha)

Modo Sensores/Modo MkMk

[Alimentación](#alimentacion)

[Complementos](#complementos)

Documentación

## Puesta en marcha {#puesta-en-marcha}

<!-- Fuente: https://echidna.es/hardware/echidnablack/puesta-en-marcha-echidna-black/ -->

Mediante USB podemos conectar nuestra Echidna Black al ordenador, dándole alimentación y permitiendo que el PC se comunique con ella. La comunicación con el PC de la Echidna Black se realiza mediante el programa [StandardFirmata](https://github.com/firmata/arduino/blob/master/examples/StandardFirmata/StandardFirmata.ino) ya instalado y con el [Bootloader Optiboot](https://github.com/Optiboot/optiboot) configurado como Arduino Nano que nos permite tener acceso a “A6 y A7”.

Para que Echidna Black se pueda comunicar con nuestro PC es necesario que nuestro sistema operativo (SO) le dé permiso de acceso al puerto serie (USB) y que tenga el driver del controlador de comunicación (CH340) instalado.

![Chip comunicacion CH340](paginas/puesta-en-marcha-echidna-black/Ch340.png)

– **Driver de comunicación:**

Echidna Black utiliza el chip CH340E, por lo que dependiendo del SO necesitarás instalar el controlador “[Driver CH341](http://www.wch-ic.com/search?q=CH340&t=downloads)”

- GNU Linux: En caso de que seas usuario Linux, no debería ser necesario instalar el driver. Si necesitas el [driver para GNU Linux](http://www.wch-ic.com/downloads/file/177.html).
- MAC: Aquí tienes acceso al [driver para MAC](https://www.wch-ic.com/downloads/CH341SER_MAC_ZIP.html).
- Windows: Aquí tienes acceso al [driver para Windows](https://www.wch-ic.com/downloads/CH341SER_ZIP.html).
- Android: Aquí tienes acceso al [driver para Android](https://www.wch-ic.com/downloads/CH341SER_ANDROID_ZIP.html).

– **Permiso de acceso al puerto serie:**

Dependiendo del SO es necesario dar o no permisos de acceso al puerto serie. Si ya has instalado el IDE de Arduino, estos permisos deberían estar ya dados.

- GNU Linux: Si no no tuvieras acceso al puerto serie puede que tengas que darle permiso desde una terminal usando el comando: *sudo usermod -a -G dialout «usuario».*
- MAC: por defecto ya tenemos acceso al puerto serie.
- Windows: por defecto ya tenemos acceso al puerto serie.

Ahora ya puedes conectar EchidnaBlack a tu software favorito.
Si quieres también dispones de las instrucciones para [instalar el Standardfirmata.](https://echidna.es/ecosistema/echidnaml/instalar-standardfirmata/)

Si quisieras modificar el programa que viene instalado en Echidna Black, podrás hacerlo con Arduino. A continuación te contamos cómo instalar Arduino:

– **Instalar Arduino:**

Para instalar Arduino nos debemos [descargar el IDE](https://www.arduino.cc/en/software) de la página oficial:

En la guía [Getting Started](https://docs.arduino.cc/software/ide-v2/tutorials/getting-started-ide-v2/) tenemos indicaciones sobre como instalar Arduino según nuestro sistema operativo.

## Alimentación {#alimentacion}

<!-- Fuente: https://echidna.es/hardware/echidnablack/alimentacion-echidnablack/ -->

### Formas de alimentar la placa
1\. Mediante la **conexión USB**: esta forma es válida para la mayoría de las funciones, toda la placa recibe una tensión regulada de 5V proporcionada por el cable USB, generalmente con un límite de 500mA, y cuenta con fusible rearmable.

2\. Mediante el **Jack de alimentación**: Todas las partes reciben una tensión regulada internamente de 5V y 1A máx. Nos da la posibilidad de seleccionar Vin para alimentar los pines I/O con la potencia que proporciona el alimentador externo cuenta con fusible rearmable de protección (no superar 1A de corriente constante).

![](paginas/alimentacion-echidnablack/AlimentacionBlack.png)

### Selector de alimentación
El jumper de alimentación permite seleccionar la alimentación de las I/O.

![Alimentación 5V](paginas/alimentacion-echidnablack/Selector5v-Black.png)![](paginas/alimentacion-echidnablack/SelectorVin-Black.png)

### Selector 5v
En caso de querer alimentar las I/O desde los 5 Volts procedentes del Arduino el jumper debe estar colocado en esta posición. Aconsejado para sensores externos que necesiten una tensión estabilizada.

¡No utilizar la alimentación 5V cuando los servos a controlar consuman más de 300 mA!\* De lo contrario se sobrepasaría el regulador.

### Selector alimentación Vin  (Alimentación externa)
Aconsejado para alimentar servos u otros dispositivos conectados a I/O que consuman más de 300 mA con alimentación externa por el Jack de alimentación.

La alimentación de los servos cuenta con un filtro L-C para evitar que lleguen los parásitos de los motores al procesador.

## Modo sensores / Modo MkMk {#modo-sensores-modo-mkmk}

<!-- Fuente: https://echidna.es/hardware/echidnablack/modo-sensores-modo-mkmk-black/ -->

### Selector Modo Sensores/ Modo MkMk
![](paginas/modo-sensores-modo-mkmk-black/selector_modos-black-1.png)

Es un conmutador que selecciona entre el Modo Sensores y el Modo Makey Makey.

### Modo sensores
En el modo sensores tenemos activo todos los componentes de la placa exceptuando las conexiones MkMk.

![](paginas/modo-sensores-modo-mkmk-black/ModoSensores-Black.png)

### Modo MkMk

En este modo tenemos activas todas las salidas, las I/0 y las conexiones MkMk.

![](paginas/modo-sensores-modo-mkmk-black/ModoMkMk-Black.png)

# Componentes

## LEDs {#leds}

<!-- Fuente: https://echidna.es/hardware/componentes/leds/ -->

### Descripción

Acrónimo de **Light Emitting Diode,** basado en el fenómeno de electroluminiscencia. Se usan como testigos (indicadores) y como fuente de iluminación.

![](paginas/leds/Led.png)

### Funcionamiento
Al aplicar tensión emite luz, por lo tanto podemos controlar su encendido apagado en digital “1” enciende, “0” apaga y su brillo en las salidas PWM

Todos los LEDes se conectan con una resistencia serie “Rs” para controlar la tensión/corriente aplicada.

![](paginas/leds/led_esq.png)

### Pines

- D11~ «Gre»: salida digital y PWM
- D12 «Orn»: salida digital
- D13 «Red»: salida digital

**Digital:** se enciende con un «1» y se apaga con un «0».

**PWM:** en la salida D11~ «Gre» se puede regular la intensidad luminosa con un valor de 0 a 255.

### [Hoja de características](paginas/leds/DataSheet-LED.pdf)

## Pulsadores {#pulsadores}

<!-- Fuente: https://echidna.es/hardware/componentes/pulsadores/ -->

### Descripción

Es un componente electromecánico que permite abrir o cerrar un circuito con un solo estado estable.

![](paginas/pulsadores/Pulsador-1.png)

### Funcionamiento
Está conectado con una resistencia a masa formando un  circuito denominado pull-down, que proporciona un “0” (0V) sin pulsar y un “1” (5V) cuando pulsamos.

![](paginas/pulsadores/Puls_esq.png)

### Pines

Entradas digitales: **D2** «SR» y **D3** «SL». Dan 0 si el pulsador no está pulsado y 1 si está pulsado.

### [Hoja de características](paginas/pulsadores/DataSheet-button.pdf)

## Joystick {#joystick}

<!-- Fuente: https://echidna.es/hardware/componentes/joystick/ -->

### Descripción

Es un mando que consta de dos potenciómetros uno para el eje X y otro para el eje Y. Este modelo cuenta además con un pulsador.

![](paginas/joystick/Joy-1.png)

### Funcionamiento
Permite transferir el movimiento del mando en una tensión proporcional entre 0-4,88V ( 0-999 de lectura analógica) \* en la salida de cada eje (X, Y).

En la posición de reposo los valores rondan 2,5V (520 de lectura analógica) \*, el pulsador del joystick está conectado con el pulsador «SR» (D2).

\* Debido a las tolerancias de los componentes estos valores pueden ser distintos en cada placa.

![](paginas/joystick/Joy_esq.png)

### Pines

- A0: eje X del joystick, entrada analógica
- A1: eje Y del joystick, entrada analógica
- D2: pulsador del joystick, entrada digital

Valores que da el joystick:

- En reposo, valores en torno a 512 en los dos ejes.
- En el eje X, 0 a la izquierda y 1023 a la derecha.
- En el eje Y, 0 abajo y 1023 arriba.

### [Hoja de características](paginas/joystick/DataSheet-Joystick.pdf)

## Sensor de luz (LDR) {#sensor-de-luz-ldr}

<!-- Fuente: https://echidna.es/hardware/componentes/sensor-luz-ldr/ -->

### Descripción

LDR es el acrónimo de “Light Dependent Resistor”, es una resistencia cuyo valor depende de la cantidad de luz que incide sobre ella. Generalmente se fabrica con sulfuro de cadmio.

![](paginas/sensor-luz-ldr/SensorLuz.png)

### Funcionamiento
La LDR proporciona valores altos de resistencia (en torno al MΩ) con poca luz y valores bajos con mucha luz. Gracias a conectarla con una resistencia en serie forma un divisor de tensión que consigue invertir la lógica del funcionamiento, de forma que con mucha luz proporciona valores altos de tensión 4,9V = 999 (de lectura analógica) \* y valores bajos con poca luz (0,0V = 000).

\* Debido a las tolerancias de los componentes estos valores pueden ser distintos en cada placa.

![](paginas/sensor-luz-ldr/LDR_esq.png)

### Pines

A5 «LDR»: entrada analógica.

### [Hoja de características](https://www.advancedphotonix.com/wp-content/uploads/2015/07/DS-NSL-4132.pdf)

## LED RGB {#led-rgb}

<!-- Fuente: https://echidna.es/hardware/componentes/led-rgb/ -->

### Descripción

LED RGB acrónimos de Light Emitting Diode y Red Green Blue, es decir son tres LEDes Rojo, Verde y Azul en la misma cápsula.

![](paginas/led-rgb/LDR.png)

### Funcionamiento
El LED RGB podemos controlarlo digitalmente, encendiendo o apagando cada LED y ajustar la luminosidad mediante PWM “analógico”.

**Control digital:** podemos encender y apagar cada uno de los LED RGB, lo que nos permite formar 2³\=8 colores diferentes.

**Control “analógico” PWM:** podemos controlar el brillo de cada LED, variando su intensidad luminosa desde 0 a 255, lo que permite formar 256 × 256 × 256, más de 16 millones de colores.

Todos los LEDes se conectan con una resistencia serie “Rs” para controlar la tensión/corriente aplicada.

![](paginas/led-rgb/RGB_esq.png)

### Pines

- D9~ «RGB_R»: salida digital y PWM
- D5~ «RGB_G»: salida digital y PWM
- D6~ «RGB_B»: salida digital y PWM

Como salidas PWM, con un valor entre 0 y 255 se regula la intensidad de cada LED y, con ella, el color que emite.

### [Hoja de características](paginas/led-rgb/DataSheet-LEDRGB.pdf)

## Audio {#audio}

<!-- Fuente: https://echidna.es/hardware/componentes/audio/ -->

### Descripción

Disponemos de dos salidas para reproducir audio, el zumbador y el jack al que podemos conectar auriculares o altavoces autoamplificados. Al conectar una clavija de audio en el jack se desconecta el zumbador.

Además contamos con un potenciómetro que permite ajustar el volumen del sonido.

![](paginas/audio/Audio.png)![](paginas/audio/potenciometro.png)![](paginas/audio/Jack.png)

### Funcionamiento
En D10~ podemos reproducir señales entre 31 Hz y 20 KHz.

El zumbador al ser excitado por una señal con una frecuencia determinada vibra reproduciendo un sonido. Hay que tener en cuenta que su frecuencia central es de 2,3 Khz, con lo que si nos alejamos mucho de esa frecuencia no sonará con calidad. (Do = C4 = 262 Hz) (cuidado con el volumen, a bajo nivel el zumbador puede no resultar audible).

En la salida del jack conectamos un equipo externo de audio que nos permite reproducir las frecuencias de entrada con más calidad (cuidado con el volumen, puede dañar los auriculares e incluso llegar al umbral doloroso en los oídos).

![](paginas/audio/Audio_esq.png)

### Pines

D10~ «Buzz»: salida PWM. Con un valor entre 0 y 255 se modula la frecuencia del sonido.

### [Hoja de características](paginas/audio/F-CM12P-LF.pdf)

## Micrófono {#microfono}

<!-- Fuente: https://echidna.es/hardware/componentes/microfono/ -->

### Descripción

Transductor acústico-eléctrico piezoeléctrico que nos entrega una señal eléctrica de similares características que el sonido que recibe.

![](paginas/microfono/microfono.png)

### Funcionamiento
El micrófono entrega una señal que es necesario amplificar mediante circuitos electrónicos y se conecta a la entrada analógica A7, dispone de un puente de soldadura que permite fijar el nivel.

![](paginas/microfono/micro-esq.png)

Sin modificar la soldadura nos proporciona una señal analógica en la entrada A7, que varia de cero a un valor de 3V aproximadamente, como se muestra en la imagen:

![](paginas/microfono/sonido-cero.png)

### Modificación del funcionamiento
Si realizamos una pequeña soldadura como podemos ver en la imagen de la cara inferior (entre las patas delanteras de Echidna) la señal que nos proporciona ahora está centrada en 1,75V= 360 de señal analógica, el resultado se muestra en imagen.

![](paginas/microfono/soldadura-microfono.png)![](paginas/microfono/sonido-2.png)

### Pines

Entrada analógica A7.

### [Hoja de características](https://www.sameskydevices.com/product/resource/cmc-5042pf-ac.pdf)

## Sensor de temperatura LM35 {#sensor-de-temperatura-lm35}

<!-- Fuente: https://echidna.es/hardware/componentes/sensor-temperatura-lm35/ -->

### Descripción

Es un sensor de temperatura calibrado cuya salida es lineal y donde cada 10 mv equivale a 1 ºC

![](paginas/sensor-temperatura-lm35/lm35.png)

### Funcionamiento
Proporciona 10 mv por ºC. Teniendo en cuenta que 5V son 1024 “pasos” en la medida analógica, podemos obtener la temperatura mediante la siguiente operación:

temperatura = (lectura Analogica\* 5.0 \* 100.0)/1024.0

![](paginas/sensor-temperatura-lm35/lm35-esq-black.png)

### Pines

Entrada analógica A6 (IN). Para conocer la temperatura se lee el valor del sensor y se convierte a grados: cada 10 mV es 1 °C.

### [Hoja de características](http://www.ti.com/lit/ds/symlink/lm35.pdf)

## Acelerómetro {#acelerometro}

<!-- Fuente: https://echidna.es/hardware/componentes/acelerometro-black/ -->

### Descripción

Sensor de aceleraciones basado en condensadores diferenciales dentro de una estructura micro-mecanizada.

Proporciona una tensión que depende de la aceleración.

![](paginas/acelerometro-black/acelerometro_black.png)

### Funcionamiento
Mide la aceleración en los ejes (X, Y) en un rango de +- 3g, en la posición de reposo proporciona un valor de 1,75V = 359 (de lectura analógica)\* y en sus extremos los valores 1,39V =285\* – 2,10V=428\*.

\* Debido a las tolerancias de los componentes estos valores pueden ser distintos en cada placa.

![](paginas/acelerometro-black/acel-esq-black.png)

### Pines

- A2 «Ace_X»: entrada analógica
- A3 «Ace_Y»: entrada analógica

### [Hoja de características](paginas/acelerometro-black/ADXL335.pdf)

## Conexiones MkMk {#conexiones-mkmk}

<!-- Fuente: https://echidna.es/hardware/componentes/conexiones-mkmk-black/ -->

### Descripción

Echidna dispone de 8 conexiones MkMk. Una conexión MkMk es un conector que permite detectar gran variedad de objetos al conectarlos entre una entrada y el común (El logo Echidna también se comporta como Común).

![](paginas/conexiones-mkmk-black/MkMk-Black.png)

### Funcionamiento
Cada conexión MkMk es parte de un divisor de tensión con una resistencia muy elevada, por lo que al conectar un elemento que conduce electricidad, aunque sea tenuemente, al cerrar el circuito con el punto común, la tensión de la entrada sube y es detectada. La tensión umbral de detección depende de cada material/persona.

![](paginas/conexiones-mkmk-black/MkMk_esq.png)

### Pines

- A0 MkMk0: entrada analógica
- A1 MkMk1: entrada analógica
- A2 MkMk2: entrada analógica
- A3 MkMk3: entrada analógica
- A4 MkMk4: entrada analógica
- A5 MkMk5: entrada analógica
- D2 MkMk6: entrada digital
- D3 MkMk7: entrada digital

![](paginas/conexiones-mkmk-black/MkMk-Black_bb.png)

En las entradas analógicas (A0 a A5) se compara el valor leído, de 0 a 1023, con un umbral, que puede variar según el objeto. En las digitales (D2 y D3) se lee directamente 0 o 1.

# Complementos

## Complementos {#complementos}

<!-- Fuente: https://echidna.es/hardware/echidnablack/complementos-echidnablack/ -->

Estos son algunos de los **componentes** que se pueden usar para complementar la funcionalidades de **EchidnaBlack,** para conectarlos se disponen de las **I/O y la entrada analógica IN.**

#### [Servomotor Posición](#servomotor-de-posicion)

Son motores de corriente continua que permiten posicionarlo en un ángulo entre 0 y 180º.

#### [Servomotor Continuo](#servomotor-continuo)

Son motores de corriente continua con una reductora y electrónica de control que permiten controlar el sentido de giro.

#### [Infrarrojos distancia](https://echidna.es/ecosistema/echidnablack2/complementos/infrarrojos-distancia/)

Es un sensor de distancia que proporciona una tensión según la cantidad de infrarrojo que rebota en una superficie.

#### [Complementos conexiones MkMk](https://echidna.es/ecosistema/echidnablack2/complementos/conexiones-mkmk/)

Pinzas cocodrilo y cinta conductiva para realizar las conexiones MkMk.  

#### [Bluetooth](#bluetooth)

Es un transceptor que permite conectar dispositivos Bluetooth a la placa Arduino.

## Servomotor de posición {#servomotor-de-posicion}

<!-- Fuente: https://echidna.es/hardware/complementos/servomotor-posicion-black/ -->

### Descripción

Son motores de corriente continua con una reductora y electrónica de control que permiten posicionarlo en un ángulo entre 0 y 180º.

![](paginas/servomotor-posicion-black/servo.png)

### Funcionamiento
Se controla mediante pulsos de 1-2 ms en periodos de 20 ms.

En la práctica se usa una librería que nos permite indicar directamente el ángulo.

![](paginas/servomotor-posicion-black/Servo_esq.png)

### Elementos de conexión
Para conectarlo usamos los pines I/O de entrada-salida. Se conecta directamente con sus cables.

Es aconsejable colocar el jumper de alimentación en Vin y alimentar EchidnaBlack mediante el jack  de alimentación.

![](paginas/servomotor-posicion-black/servo-Black_bb.png)

**Pines:**

1. I/O 1= PIN D4
2. I/O 2= PIN D7
3. I/O 3= PIN D8

### Control

El servomotor de posición se controla indicando el ángulo, de 0 a 180 grados.

### [Hoja de características](http://nomada-e.com/descargas/datasheet/13-Servomotor%20FUTABA%20%5BS3003%5D.pdf)

## Servomotor continuo {#servomotor-continuo}

<!-- Fuente: https://echidna.es/hardware/complementos/servomotor-continuo-black/ -->

### Descripción
Son motores de corriente continua con una reductora y electrónica de control que permiten controlar el sentido de giro.

![](paginas/servomotor-continuo-black/servo-continuo.png)

### Funcionamiento
Se controla mediante pulsos de 1-2 ms en periodos de 20 ms.

En la práctica se usa una librería que nos permite indicar directamente el sentido de giro.

![](paginas/servomotor-continuo-black/Servo_esq.png)

### Elementos de conexión
Para conectarlo usamos los pines I/O de entrada-salida. Se conecta directamente con sus cables.

Es aconsejable colocar el jumper de alimentación en Vin y alimentar EchidnaBlack mediante el jack  de alimentación.

![](paginas/servomotor-continuo-black/servo-Black_bb.png)

**Pines:**

1. I/O 1= PIN D4
2. I/O 2= PIN D7
3. I/O 3= PIN D8

### Control

El servomotor continuo se controla indicando el sentido de giro (horario o antihorario) y la velocidad.

## Bluetooth {#bluetooth}

<!-- Fuente: https://echidna.es/hardware/complementos/bluetooth-black/ -->

### Descripción

Es un transceptor que permite conectar dispositivos Bluetooth a la placa Arduino.

![](paginas/bluetooth-black/BT-1.png)

### Funcionamiento
Envía y recibe datos a través del puerto serie vía Bluetooth

### Esquema y conexión
![](paginas/bluetooth-black/BT_esq.png)![](paginas/bluetooth-black/EchidnaBlack_0_BT34.png)

### Pines

- D0 (Rx): recepción de datos
- D1 (Tx): transmisión de datos

Se comunica a través del puerto serie Tx/Rx, es necesario programar Arduino previamente a la conexión del Bluetooth, ya que si no este bloquea la comunicación por cable.

### [Hoja de características](https://www.olimex.com/Products/Components/RF/BLUETOOTH-SERIAL-HC-06/resources/hc06.pdf)

# Documentación

## Documentación técnica {#documentacion-tecnica}

<!-- Fuente: https://echidna.es/hardware/echidnablack/documentacion-echidnablack/ -->

### Certificado CE
Certificado CE Nº: ISETC.000520201231

Referente técnico: EBO2012089-E174

Según las directivas de compatibilidad electromagnética 2014/30/EU:

- EN 55032:2015+A11:2020; Compatibilidad electromagnética de equipos multimedia – Requisitos de emisión
- EN 55035:2017; Compatibilidad electromagnética de equipos multimedia – requisitos de inmunidad

### RoHS
Los componentes y soldaduras cumplen con la normativa RoHS

### Open Source Hardware Certification
EchidnaBlack está certificada como Open Source Hardware con registro [OSHWA UID ES000010](https://certification.oshwa.org/es000010.html) por la Open Source Hardware Association (OSHWA)

![](paginas/documentacion-echidnablack/ES10.png)

### Licencia
La placa Echidna Black se publica bajo licencia CERN-OHL-W 2.0.

No se permite su reproducción bajo la marca Echidna.
