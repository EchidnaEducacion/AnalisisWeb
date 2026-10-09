---
title: Conectar EchidnaML y EchidnaBlack
description: Cómo conectar la placa al ordenador y empezar a usarla con EchidnaML, que la detecta sola. También, cómo trabajar sin la placa y cómo reconectarla.
template: pagina
order: 2
toc: true
cards:
  - title: Driver CH341
    text: En Windows, el controlador que necesita el ordenador para reconocer la placa por el USB. Cómo descargarlo e instalarlo.
    href: /ecosistema/echidnaml/descarga/#controlador-de-la-placa
  - title: Instalar StandardFirmata
    text: Si EchidnaML no detecta la placa porque se ha borrado su programa, cómo volver a cargarlo con el IDE de Arduino.
    href: /ecosistema/echidnaml/instalar-standardfirmata/
---

Una vez [descargado e instalado EchidnaML](/ecosistema/echidnaml/descarga/), ya puedes empezar a programar la placa. Es muy sencillo: la placa lleva los sensores y actuadores integrados y el programa la detecta automáticamente.

## Puesta en marcha

![Los tres pasos: conectar la EchidnaBlack al ordenador, abrir EchidnaML y empezar a programar.](./conectar-placa/pasos-puesta-en-marcha.png)

### 1. Conecta la placa al ordenador

Conecta la placa al ordenador con el cable USB-C **antes de abrir EchidnaML**.

Las placas Echidna traen cargado de fábrica el programa StandardFirmata, que permite que el ordenador se comunique con ellas por el USB. Si alguna vez hay que volver a cargarlo, se explica en [Instalar StandardFirmata](/ecosistema/echidnaml/instalar-standardfirmata/).

### 2. Abre EchidnaML

Haz clic en el icono de EchidnaML. Al abrirse, el programa detecta la placa y su modelo (EchidnaBlack o EchidnaBlack2) y muestra este aviso:

![Aviso de EchidnaML: «¡Placa conectada! La placa Echidna ha sido detectada y conectada correctamente», con el modelo de placa.](./conectar-placa/placa-conectada.png)

Si no la detecta: en Windows, comprueba que has instalado el [controlador CH341](/ecosistema/echidnaml/descarga/#controlador-de-la-placa); si sigue sin detectarla, vuelve a cargar StandardFirmata en la placa.

### 3. ¡Empieza a programar!

En la lista de categorías de bloques aparece una nueva, **echidna**. Al hacer clic en ella verás los bloques para usar los sensores y actuadores de la placa, que puedes combinar con los bloques de Scratch que ya conoces para crear todo tipo de proyectos que conectan el mundo físico con el virtual. Para dar los primeros pasos, sigue con [Empezar con EchidnaBlocks](/ecosistema/echidnaml/empezar-echidnablocks/).

## Trabajar sin la placa

EchidnaML también funciona sin la placa conectada. Así puedes:

- crear modelos de inteligencia artificial con LearningML;
- usar EchidnaBlocks como Scratch;
- preparar un programa de robótica y guardarlo para cuando conectes la placa.

## Reconectar la placa

Si abriste el programa sin la placa, puedes conectarla después: conéctala al USB y pulsa el icono del USB, junto a «Selecciona un puerto», para que EchidnaML la detecte.

![Parte superior de EchidnaML: el botón «desconectado» y, a su lado, el selector de puerto con el icono del USB desplegado.](./conectar-placa/reconectar-placa.png)

**Atención**: al reconectar la placa con EchidnaML abierto se pierde el trabajo que no esté guardado. Guárdalo antes para poder recuperarlo.

## Si la placa no se detecta

Si EchidnaML no detecta la placa, revisa estos dos motivos:

- **Falta el driver CH341 (en Windows)**: Windows necesita este controlador para reconocer el puerto serie de la placa. Sin él, el ordenador no la ve aunque esté conectada.
- **La placa no tiene StandardFirmata**: si has cargado otro programa en la placa, EchidnaML no podrá comunicarse con ella hasta que vuelvas a instalar StandardFirmata.
