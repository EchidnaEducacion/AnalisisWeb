# Conexiones MkMk Black

<!-- https://echidna.es/hardware/componentes/conexiones-mkmk-black/ -->

## Descripción

Echidna dispone de 8 conexiones MkMk. Una conexión MkMk es un conector que permite detectar gran variedad de objetos al conectarlos entre una entrada y el común (El logo Echidna también se comporta como Común).

![](./MkMk-Black.png)

## Funcionamiento:

Cada conexión MkMk es parte de un divisor de tensión con una resistencia muy elevada, por lo que al conectar un elemento que conduce electricidad, aunque sea tenuemente, al cerrar el circuito con el punto común, la tensión de la entrada sube y es detectada. La tensión umbral de detección depende de cada material/persona.

![](./MkMk_esq.png)

## Programación:

- A0 MkMk0: Entrada analógica
- A1 MkMk1: Entrada analógica
- A2 MkMk2: Entrada analógica
- A3 MkMk3: Entrada analógica
- A4 MkMk4: Entrada analógica
- A5 MkMk5: Entrada analógica
- D2 MkMk6: Entrada digital
- D3 MkMk7: Entrada digital

![](./MkMk-Black_bb.png)

En los **pines analógicos** comparamos el valor leido (0-1023) con un umbral (que puede variar para cada objeto).

EchidnaML dispone de un bloque de programación específico para las entradas MkMk que nos devuelve un **true** o un **false** en función de si detecta que el **circuito** se ha **cerrado** o es un circuito **abierto**.

![Bloque leer MkMk](./Bloque-leer-MkMk.png)
