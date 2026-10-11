---
title: Complementos
description: Servomotores y sensores que no vienen con la EchidnaBlack2 y se conectan a sus entradas y salidas A2, D4, D7 y D8 para ampliar los proyectos.
template: indice
order: 4
image: ./complementos/miniatura.png
---

Los complementos son componentes que **no vienen incluidos** con la EchidnaBlack2 y que se conectan a sus **entradas y salidas** (I/O) para ampliar lo que se puede hacer con ella: mover un brazo con un servomotor, medir distancias o saber cuándo hay que regar una planta.

La placa tiene cuatro conectores para complementos: tres digitales (**D4, D7 y D8**) y uno analógico (**A2**). Cada uno tiene tres pines: tierra (GND), alimentación (+V) y señal.

- La alimentación de estos conectores se elige con un selector, **5V o Vin**. Para varios servomotores o componentes con mucho consumo conviene alimentar la placa por el jack y poner el selector en Vin: se explica en [Alimentación](/ecosistema/echidnablack2/alimentacion/).
- **A2** se comparte con la entrada MkMk2, así que los complementos que van en A2 solo funcionan con el selector en modo sensores: ver [Modo sensores / Modo MkMk](/ecosistema/echidnablack2/modo-sensores-mkmk/).
