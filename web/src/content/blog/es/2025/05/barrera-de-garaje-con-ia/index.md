---
title: "Barrera de garaje con IA"
description: "Cómo funciona la inteligencia artificial en el parking del supermercado: un ejemplo educativo con EchidnaML"
date: 2025-05-18
author: jorge-lobo
categories: [didactica, programacion, recursos/proyectos]
tags: ["EchidnaBlack", "Inteligencia Artificial"]
image: ./BarreraIA.png
imageAlt: "Una barrera de aparcamiento levantada y dos erizos de Echidna de colores, uno gris y otro azul, esperando para pasar."
---

—Antes, para salir del parking del supermercado, había que escanear el ticket de compra, pero ahora la barrera se abre sola como si supiera que ese coche puede salir.  
—¿Queréis saber cómo lo sabe? Es con una tecnología con la que ya hemos trabajado…  
—¿Es con inteligencia artificial?

Este comentario sobre un evento de la vida cotidiana sirvió como disparador para una actividad sobre IA. Y sí, efectivamente, tiene que ver con inteligencia artificial (IA).

Lo primero es entender cómo lo hace.

Cuando entras al parking, una cámara graba la matrícula de tu coche. Esa cámara está conectada a un modelo de IA que reconoce letras y números en una imagen, gracias a una técnica llamada **Automatic number plate recognition (ANPR)**, que permite detectar la matrícula de un vehículo en una imagen y después aplicar el **Reconocimiento Óptico de Caracteres (OCR)** para identificar cada letra y número de la matrícula.

Más tarde, cuando haces una compra, pagas en caja y validan tu matrícula con el ticket del parking, el sistema asocia esa compra a tu matrícula. Al salir, otra cámara en la barrera detecta de nuevo tu matrícula y el sistema comprueba si ya validaste el ticket.  
Si todo está correcto, la barrera se abre sola. Sin necesidad de tickets ni botones.

Con [EchidnaML](/ecosistema/echidnaml/) vamos a simular este sistema mediante un modelo de imagen. Para simplificar, las matrículas las sustituiremos por figuras geométricas.

Aquí está el proceso de construcción de la barrera a parir de esta [ficha](https://github.com/lobotic/Proyectitos/blob/master/Echidna/BarreraIA/matriculas.pdf):

[Ver la presentación (Google Slides)](https://docs.google.com/presentation/d/e/2PACX-1vRkcpEYWLUeFCxVRfL_GcdKtEYOpv_eQ9WEjB1ZSkFYfXcX1A4i5ybhHhsaslOjuRy8VhfiU0j7AwdX/pub?start=false&loop=false&delayms=3000)

Y aquí el proceso de programación:

[Barrera de parking con IA](https://www.youtube.com/watch?v=TEA98JS5P_g)

Haz clic [aquí](https://github.com/lobotic/Proyectitos/blob/master/Echidna/BarreraIA/README.md) para ver el proyecto en github.
