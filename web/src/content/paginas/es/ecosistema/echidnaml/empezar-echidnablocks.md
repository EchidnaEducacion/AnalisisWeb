---
title: Empezar con EchidnaBlocks
description: El entorno de EchidnaBlocks, cómo se comunica con la placa, el menú Archivo con los ejemplos y un primer programa, el «Hola, mundo».
template: pagina
order: 3
toc: true
cards:
  - title: Proyectos de inicio con EchidnaML
    text: Proyectos sencillos, paso a paso, para seguir aprendiendo a programar la placa con EchidnaBlocks.
    href: https://echidnaeducacion.github.io/GuiaInicioEchidnaML/
---

**EchidnaBlocks** es una versión de [Scratch](https://scratch.mit.edu/) con bloques propios para controlar la placa EchidnaBlack y para usar modelos de inteligencia artificial creados con LearningML. Si aún no has conectado la placa, empieza por [Conectar EchidnaML y EchidnaBlack](/ecosistema/echidnaml/conectar-placa/).

## El entorno de programación

![Pantalla de EchidnaBlocks con sus partes rotuladas: tipo de placa conectada, puerto de conexión, nombre del archivo, tutoriales, abrir LearningML, cambiar idioma, ayuda, salir, paleta de bloques, bloques de LearningML, bloques de Echidna y zona de programación.](./empezar-echidnablocks/partes-echidnablocks.png)

## Comunicación entre la placa y el programa

EchidnaBlocks se comunica con el microcontrolador de la placa por el puerto serie, a través del cable USB. La placa envía el estado de sus sensores; el programa que haces en EchidnaBlocks lo procesa y le devuelve las órdenes para sus actuadores.

En la placa funciona para ello el programa StandardFirmata, que viene cargado de fábrica (si hay que volver a cargarlo, se explica en [Instalar StandardFirmata](/ecosistema/echidnaml/instalar-standardfirmata/)).

![El ordenador con EchidnaBlocks envía órdenes a los actuadores de la placa y recibe la información de sus sensores, gracias a StandardFirmata.](./empezar-echidnablocks/comunicacion-placa-programa.png)

## Menú Archivo y ejemplos

![Menú Archivo de EchidnaBlocks abierto, con Nuevo, Cargar desde tu ordenador, Guardar en tu ordenador y el submenú Ejemplos desplegado.](./empezar-echidnablocks/menu-archivo-ejemplos.png)

En el menú **Archivo** encontrarás:

- **Nuevo**: para empezar un proyecto.
- **Guardar en tu ordenador**: como EchidnaBlocks es un programa de escritorio, los proyectos se guardan en una carpeta de tu ordenador.
- **Cargar desde tu ordenador**: para abrir un proyecto guardado.
- **Ejemplos**: programas listos para probar, estudiar y modificar.

Los proyectos se guardan en formato **.sb3**, el mismo de Scratch. Por eso puedes abrir en EchidnaBlocks cualquier proyecto hecho en Scratch y darle interactividad con los sensores de la placa.

En Echidna creemos que una de las mejores formas de aprender es a partir de ejemplos. Por eso te los damos para que los pruebes, los estudies y los modifiques, que es una de las esencias del software libre. Los encontrarás explicados en el [manual](https://echidnaeducacion.github.io/manual/04-componentes-bloques/componentes-placa/).

## Tu primer programa: «Hola, mundo»

El «Hola, mundo» de la robótica es un LED que parpadea:

![Programa de EchidnaBlocks: al hacer clic en la bandera verde, por siempre, encender LED rojo, esperar 1 segundo, apagar LED rojo y esperar 1 segundo.](./empezar-echidnablocks/programa-hola-mundo.png)

El programa empieza con el bloque **al hacer clic en** (la bandera verde): todo lo que va debajo se ejecuta al pulsar la bandera verde. El bloque **por siempre** repite sin parar, de arriba abajo, estos pasos:

1. **encender LED rojo**: enciende el LED.
2. **esperar 1 segundos**: lo mantiene encendido un segundo.
3. **apagar LED rojo**: lo apaga.
4. **esperar 1 segundos**: lo mantiene apagado un segundo antes de volver al paso 1.

## Sigue aprendiendo

Cuando domines el «Hola, mundo», continúa con los proyectos de inicio:
