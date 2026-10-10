# Redirecciones

Correspondencia entre las URL de la web actual en WordPress y las de la nueva web, según [`estructura.md`](estructura.md). Sirve para que no se rompan los enlaces existentes (buscadores, material impreso, otras webs).

**Estado**: *Igual* = la URL no cambia; *Redirige* = la URL antigua lleva a la nueva; *Externa* = redirige a otro sitio.
GitHub Pages no admite redirecciones 301: se generan con `redirects` en `astro.config.mjs` (página HTML con redirección inmediata).

## Índice

1. [Páginas de WordPress](#páginas-de-wordpress)
2. [Páginas no indexadas](#páginas-no-indexadas)
3. [URL alternativas de WordPress](#url-alternativas-de-wordpress)
4. [Blog y RSS](#blog-y-rss)
5. [Otros dominios y rutas](#otros-dominios-y-rutas)
6. [Pendiente](#pendiente)

---

## Páginas de WordPress

Las 82 páginas del sitemap de páginas de echidna.es (octubre de 2026): 7 iguales, 74 redirigen y 1 externa.

| URL antigua | URL nueva | Estado | Nota |
|---|---|---|---|
| `/` | `/` | Igual |  |
| `/inicio2/` | `/` | Redirige | Borrador duplicado de la portada |
| `/a-programar/` | `/ecosistema/` | Redirige |  |
| `/a-programar/echidnaml/` | `/ecosistema/echidnaml/` | Redirige |  |
| `/a-programar/echidnaml/descarga/` | `/ecosistema/echidnaml/descarga/` | Redirige | Pasa a 1.1.1 |
| `/a-programar/echidnaml/como-empezar-con-machine-learning-y-echidna/` | `/ecosistema/echidnaml/empezar-learningml/` | Redirige | Pasa a 1.1.4 |
| `/a-programar/echidnaml/conectar-echidnaml-y-echidna/` | `/ecosistema/echidnaml/conectar-placa/` | Redirige | Pasa a 1.1.2 |
| `/a-programar/echidnaml/empezar-con-echidnaml-y-echidnablocks/` | `/ecosistema/echidnaml/empezar-echidnablocks/` | Redirige | Pasa a 1.1.3 |
| `/a-programar/echidnascratch/` | `/ecosistema/echidnaml/` | Redirige | EchidnaScratch, sustituido por EchidnaML |
| `/a-programar/instalar-standardfirmata/` | `/ecosistema/echidnaml/instalar-standardfirmata/` | Redirige | Pasa a 1.1.5 |
| `/didactica/` | `/alumnado/` | Redirige |  |
| `/didactica/actividades/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es01-hola-erizo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es02-hacemos-un-semaforo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es03-trabajamos-con-pulsadores/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es04-sensor-luz/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es05-control-luminosidad-led/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es06-telesketch/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es07-colores-rgb/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es08-acelerometro/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es09-entradas-mkmk/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/es10-representamos-sensores/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/p02-codigo-morse/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/p03-sistema-oseo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/p04-el-tempo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s11-conectando-app-inventor-y-echidna-bt/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/comunidad/` | `/docentes/` | Redirige | La página desaparece |
| `/didactica/ide-arduino/` | `/GuiaInicioArduinoIDE/` | Redirige | Su contenido queda cubierto por la Guía de inicio con Arduino IDE |
| `/didactica/rea/` | `/alumnado/` | Redirige |  |
| `/didactica/talleres/` | `/category/talleres/` | Redirige | Talleres pasan a categoría del blog |
| `/hardware/` | `/ecosistema/` | Redirige |  |
| `/hardware/componentes/` | `/ecosistema/echidnablack2/` | Redirige |  |
| `/hardware/componentes/audio/` | `/ecosistema/echidnablack2/audio/` | Redirige |  |
| `/hardware/componentes/joystick/` | `/ecosistema/echidnablack2/joystick/` | Redirige |  |
| `/hardware/componentes/led-rgb/` | `/ecosistema/echidnablack2/led-rgb/` | Redirige |  |
| `/hardware/componentes/leds/` | `/ecosistema/echidnablack2/leds/` | Redirige |  |
| `/hardware/componentes/microfono/` | `/ecosistema/echidnablack2/microfono/` | Redirige |  |
| `/hardware/componentes/pulsadores/` | `/ecosistema/echidnablack2/pulsadores/` | Redirige |  |
| `/hardware/componentes/sensor-luz-ldr/` | `/ecosistema/echidnablack2/sensor-luz-ldr/` | Redirige |  |
| `/hardware/componentes/acelerometro-black-i2c/` | `/ecosistema/echidnablack2/acelerometro/` | Redirige | Acelerómetro de la Black2 |
| `/hardware/componentes/sensor-temperatura-black2/` | `/ecosistema/echidnablack2/sensor-temperatura/` | Redirige |  |
| `/hardware/componentes/conexiones-mkmk-black2/` | `/ecosistema/echidnablack2/conexiones-mkmk/` | Redirige |  |
| `/hardware/componentes/acelerometro-black/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/componentes/acelerometro-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/componentes/conexiones-mkmk-black/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/componentes/conexiones-mkmk-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/componentes/sensor-temperatura-lm35/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/complementos/` | `/ecosistema/echidnablack2/complementos/` | Redirige |  |
| `/hardware/complementos/bluetooth-black/` | `/ecosistema/echidnablack2/complementos/bluetooth/` | Redirige |  |
| `/hardware/complementos/servomotor-continuo-black/` | `/ecosistema/echidnablack2/complementos/servomotor-continuo/` | Redirige |  |
| `/hardware/complementos/servomotor-posicion-black/` | `/ecosistema/echidnablack2/complementos/servomotor-posicion/` | Redirige |  |
| `/hardware/complementos/infrarrojos-distancia/` | `/ecosistema/echidnablack2/complementos/infrarrojos-distancia/` | Redirige |  |
| `/hardware/complementos/complementos-conexiones-mkmk/` | `/ecosistema/echidnablack2/complementos/conexiones-mkmk/` | Redirige |  |
| `/hardware/complementos/bluetooth-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/complementos/sensor-temperatura-lm35-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/complementos/servomotor-continuo-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/complementos/servomotor-de-posicion-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidnablack2/` | `/ecosistema/echidnablack2/` | Redirige |  |
| `/hardware/echidnablack2/alimentacion-echidnablack2/` | `/ecosistema/echidnablack2/alimentacion/` | Redirige |  |
| `/hardware/echidnablack2/documentacion-echidnablack2/` | `/ecosistema/echidnablack2/caracteristicas-tecnicas/#certificaciones` | Redirige | Sin página propia: las certificaciones CE y RoHS están en Características técnicas; las licencias, en `/quienes-somos/licencias/` |
| `/hardware/echidnablack2/modo-sensores-modo-mkmk-black2/` | `/ecosistema/echidnablack2/modo-sensores-mkmk/` | Redirige |  |
| `/hardware/echidnablack/puesta-en-marcha-echidna-black/` | `/ecosistema/echidnaml/conectar-placa/` | Redirige | Sin página propia: la puesta en marcha está en Conectar EchidnaML y EchidnaBlack. La página de la Black2 enlaza hoy a esta |
| `/hardware/echidnablack/complementos-echidnablack/` | `/ecosistema/echidnablack2/complementos/` | Redirige | La página de la Black2 enlaza hoy a esta |
| `/hardware/echidnablack/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidnablack/alimentacion-echidnablack/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidnablack/documentacion-echidnablack/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidnablack/modo-sensores-modo-mkmk-black/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/alimentacion-echidnashield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/complementos-echidna-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/documentacion-echidnashield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/modo-sensores-modo-mkmk-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Placa anterior (PDF) |
| `/recursos/` | `/docentes/` | Redirige |  |
| `/recursos/impresion-3d/` | `/docentes/impresion-3d/` | Redirige |  |
| `/recursos/proyectos/` | `/category/recursos/proyectos/` | Redirige | Los proyectos son entradas del blog y se quedan en su categoría |
| `/contacta/` | `/contacta/` | Igual |  |
| `/quienes-somos/` | `/quienes-somos/` | Igual |  |
| `/quienes-somos/licencias/` | `/quienes-somos/licencias/` | Igual |  |
| `/quienes-somos/publicaciones/` | `/quienes-somos/publicaciones/` | Igual |  |
| `/quiero-una/` | `/quiero-una/` | Igual |  |
| `/politica-privacidad/` | `/politica-privacidad/` | Igual |  |
| `/manual/` | `echidnaeducacion.github.io/manual/` | Externa | Redirección al repo `manual` |

## Páginas no indexadas

Páginas que existen en WordPress pero no aparecen en el sitemap (localizadas en la prueba de concepto de `EchidnaEducacion.github.io`): 15 en total.

| URL antigua | URL nueva | Estado | Nota |
|---|---|---|---|
| `/didactica/actividades/p01-hola-erizo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s01-hola-erizo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s02-hacemos-un-semaforo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s03-pulsadores/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s04-sensor-de-luz/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s05-control-luminosidad-led/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s06-telesketch/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s07-colores-rgb/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s08-jugamos-acelerometro/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s09-entradas-mkmk/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/didactica/actividades/s10-vehiculo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Actividad antigua, integrada en las diapositivas de la Guía de inicio EchidnaML |
| `/a-programar/echidnascratch/como-empezar/` | `/ecosistema/echidnaml/` | Redirige | EchidnaScratch, sustituido por EchidnaML (igual que su página principal) |
| `/a-programar/echidnascratch/como-empezar/echidnalink/` | `/ecosistema/echidnaml/` | Redirige | EchidnaScratch, sustituido por EchidnaML (igual que su página principal) |
| `/a-programar/echidnascratch/inteligencia-artificial-con-echidna/` | `/ecosistema/echidnaml/` | Redirige | EchidnaScratch, sustituido por EchidnaML (igual que su página principal) |
| `/a-programar/snap4arduino/` | `/ecosistema/snap/` | Redirige | Snap! en «Entornos de programación compatibles» |

## URL alternativas de WordPress

WordPress acepta otras URL para algunas páginas (rutas antiguas, sin la categoría intermedia o con `/index.php/`) y las redirige a la URL canónica. Las usan enlaces internos de la web actual y pueden estar enlazadas desde fuera. Se redirigen al mismo destino que su URL canónica. Fuente: informe de importación de la prueba de concepto (`EchidnaEducacion.github.io`, `wp-export/import-report.md`).

| URL antigua | URL nueva | Estado | Nota |
|---|---|---|---|
| `/a-programar/echidnascratch/echidnalink/` | `/ecosistema/echidnaml/` | Redirige | Alias de `/a-programar/echidnascratch/como-empezar/echidnalink/` |
| `/didactica/secundaria/es01-hola-erizo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es01-hola-erizo/` |
| `/didactica/secundaria/es02-hacemos-un-semaforo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es02-hacemos-un-semaforo/` |
| `/didactica/secundaria/es03-trabajamos-con-pulsadores/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es03-trabajamos-con-pulsadores/` |
| `/didactica/secundaria/es04-sensor-luz/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es04-sensor-luz/` |
| `/didactica/secundaria/es05-control-luminosidad-led/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es05-control-luminosidad-led/` |
| `/didactica/secundaria/es06-telesketch/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es06-telesketch/` |
| `/didactica/secundaria/es07-colores-rgb/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es07-colores-rgb/` |
| `/didactica/secundaria/es08-acelerometro/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es08-acelerometro/` |
| `/didactica/secundaria/es09-entradas-mkmk/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es09-entradas-mkmk/` |
| `/didactica/secundaria/es10-representamos-sensores/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/es10-representamos-sensores/` |
| `/didactica/secundaria/s01-hola-erizo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s01-hola-erizo/` |
| `/didactica/secundaria/s02-hacemos-un-semaforo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s02-hacemos-un-semaforo/` |
| `/didactica/secundaria/s03-pulsadores/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s03-pulsadores/` |
| `/didactica/secundaria/s04-sensor-de-luz/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s04-sensor-de-luz/` |
| `/didactica/secundaria/s05-control-luminosidad-led/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s05-control-luminosidad-led/` |
| `/didactica/secundaria/s06-telesketch/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s06-telesketch/` |
| `/didactica/secundaria/s07-colores-rgb/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s07-colores-rgb/` |
| `/didactica/secundaria/s08-jugamos-acelerometro/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s08-jugamos-acelerometro/` |
| `/didactica/secundaria/s09-entradas-mkmk/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s09-entradas-mkmk/` |
| `/didactica/secundaria/s10-vehiculo/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s10-vehiculo/` |
| `/didactica/secundaria/s11-conectando-app-inventor-y-echidna-bt/` | `/docentes/proyectos-inicio-echidnaml/diapositivas/` | Redirige | Alias de `/didactica/actividades/s11-conectando-app-inventor-y-echidna-bt/` |
| `/hardware/acelerometro/` | `/ecosistema/#placas-anteriores` | Redirige | Alias de `/hardware/componentes/acelerometro-black/` |
| `/hardware/audio/` | `/ecosistema/echidnablack2/audio/` | Redirige | Alias de `/hardware/componentes/audio/` |
| `/hardware/conexiones-mkmk/` | `/ecosistema/#placas-anteriores` | Redirige | Alias de `/hardware/componentes/conexiones-mkmk-black/` |
| `/hardware/echidnablack2/acelerometro-black-i2c` | `/ecosistema/echidnablack2/acelerometro/` | Redirige | Alias de `/hardware/componentes/acelerometro-black-i2c/` |
| `/hardware/echidnablack2/conexiones-mkmk-black2/` | `/ecosistema/echidnablack2/conexiones-mkmk/` | Redirige | Alias de `/hardware/componentes/conexiones-mkmk-black2/` |
| `/hardware/echidnablack2/sensor-temperatura-black2/` | `/ecosistema/echidnablack2/sensor-temperatura/` | Redirige | Alias de `/hardware/componentes/sensor-temperatura-black2/` |
| `/hardware/echidnablack/complementos-echidnablack/bluetooth-black/` | `/ecosistema/echidnablack2/complementos/bluetooth/` | Redirige | Alias de `/hardware/complementos/bluetooth-black/` |
| `/hardware/echidnablack/complementos-echidnablack/servomotor-continuo-black/` | `/ecosistema/echidnablack2/complementos/servomotor-continuo/` | Redirige | Alias de `/hardware/complementos/servomotor-continuo-black/` |
| `/hardware/echidnablack/complementos-echidnablack/servomotor-posicion-black/` | `/ecosistema/echidnablack2/complementos/servomotor-posicion/` | Redirige | Alias de `/hardware/complementos/servomotor-posicion-black/` |
| `/hardware/echidna-shield/complementos-echidna-shield/bluetooth-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Alias de `/hardware/complementos/bluetooth-shield/` |
| `/hardware/echidna-shield/complementos-echidna-shield/sensor-temperatura-lm35-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Alias de `/hardware/complementos/sensor-temperatura-lm35-shield/` |
| `/hardware/echidna-shield/complementos-echidna-shield/servomotor-continuo-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Alias de `/hardware/complementos/servomotor-continuo-shield/` |
| `/hardware/echidna-shield/complementos-echidna-shield/servomotor-de-posicion-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Alias de `/hardware/complementos/servomotor-de-posicion-shield/` |
| `/hardware/led-rgb/` | `/ecosistema/echidnablack2/led-rgb/` | Redirige | Alias de `/hardware/componentes/led-rgb/` |
| `/hardware/leds/` | `/ecosistema/echidnablack2/leds/` | Redirige | Alias de `/hardware/componentes/leds/` |
| `/impresion-3d/` | `/docentes/impresion-3d/` | Redirige | Alias de `/recursos/impresion-3d/` |
| `/index.php/hardware/echidnablack/` | `/ecosistema/#placas-anteriores` | Redirige | Alias de `/hardware/echidnablack/` |
| `/index.php/hardware/echidnablack2/` | `/ecosistema/echidnablack2/` | Redirige | Alias de `/hardware/echidnablack2/` |
| `/index.php/hardware/echidna-shield/` | `/ecosistema/#placas-anteriores` | Redirige | Alias de `/hardware/echidna-shield/` |
| `/index.php/hardware/leds/` | `/ecosistema/echidnablack2/leds/` | Redirige | Alias de `/hardware/componentes/leds/` |
| `/inteligencia-artificial-con-echidna/` | `/ecosistema/echidnaml/` | Redirige | Alias de `/a-programar/echidnascratch/inteligencia-artificial-con-echidna/` |
| `/proyectos/` | `/category/recursos/proyectos/` | Redirige | Alias de `/recursos/proyectos/` |

## Blog y RSS

| URL antigua | URL nueva | Estado | Nota |
|---|---|---|---|
| `/blog/` | `/blog/` | Igual | |
| `/AAAA/MM/slug/` | `/AAAA/MM/slug/` | Igual | 61 entradas |
| `/category/…/`, `/tag/…/`, `/author/…/` | Igual | Igual | Se descarta `/category/sin-categoria/`. Hay subcategorías de dos niveles (`/category/recursos/proyectos/`, `/category/recursos/impresion-3d/`) que deben mantenerse. Las etiquetas se han reorganizado en un vocabulario cerrado ([`modelo-contenido.md`](modelo-contenido.md#etiquetas-del-blog)): las que desaparecen están en las filas siguientes; las que se mantienen (EchidnaBlack, Servomotor, STEAM…) conservan su URL |
| `/feed/` | `/feed/` (copia de `/rss.xml`) | Igual | Los lectores de RSS no siguen redirecciones HTML |
| `/tag/ia/`, `/tag/machine-learning/`, `/tag/machine-lerning/` | `/tag/inteligencia-artificial/` | Redirige | Unificadas (y errata «Machine Lerning») |
| `/tag/mkmk/`, `/tag/makeymakey/` | `/tag/makey-makey/` | Redirige | Unificadas |
| `/tag/scratch/` | `/tag/echidnascratch/` | Redirige | Absorbida |
| `/tag/rgb/`, `/tag/colores/` | `/tag/led/` | Redirige | Absorbidas |
| `/tag/lm35/` | `/tag/temperatura/` | Redirige | Absorbida |
| `/tag/analogreference/`, `/tag/oled/`, `/tag/appinventor/`, `/tag/bluetooth/` | `/tag/ide-arduino/` | Redirige | Absorbidas: solo estaban en entradas de este entorno |
| `/tag/sonido/` | `/tag/musica/` | Redirige | Absorbida |
| `/tag/openledrace/` | `/tag/juegos/` | Redirige | Absorbida |
| `/tag/sharp/` | `/tag/sensores-externos/` | Redirige | Absorbida |
| `/tag/ctim/` | `/tag/steam/` | Redirige | Su entrada ya tenía «STEAM» |
| `/tag/proyectos/` | `/category/recursos/proyectos/` | Redirige | Repetía la categoría |
| `/tag/recursos/` | `/category/recursos/` | Redirige | Repetía la categoría |
| `/tag/taller/` | `/category/talleres/` | Redirige | Repetía la categoría |
| `/tag/bloques-de-construccion/`, `/tag/lego/` | `/category/bloques-de-construccion/` | Redirige | Repetían la categoría |
| `/tag/arganbot/`, `/tag/juegos-robotica/`, `/tag/la-hora-maker/`, `/tag/programamos/`, `/tag/programar-facil/` | `/category/publicaciones/` | Redirige | Nombres de medios: sus entradas están en Publicaciones |
| `/tag/actividades/`, `/tag/arduino/`, `/tag/atmega/`, `/tag/construccioniso/`, `/tag/covid-19/`, `/tag/equipo/`, `/tag/github/`, `/tag/media-lab/`, `/tag/mit/`, `/tag/papert/`, `/tag/perrobot/`, `/tag/presentacion/`, `/tag/printbot/`, `/tag/reciclaje/`, `/tag/resnick/`, `/tag/robotica-educativa/`, `/tag/sensores/`, `/tag/vehiculos/`, `/tag/video/`, `/tag/web/` | `/blog/` | Redirige | Etiquetas de una sola entrada, sin sustituta |

## Otros dominios y rutas

| URL antigua | URL nueva | Estado | Nota |
|---|---|---|---|
| `rea.echidna.es/` | `/alumnado/` | Redirige | Hoy su `meta refresh` apunta a `kuku.es`: corregir ya |
| `rea.echidna.es/02_SensorTemperatura/` | `echidnaeducacion.github.io/situaciones-aprendizaje/hace-calor-aqui/` | Externa | Copia migrada; falta la 301 en el servidor de `rea.echidna.es` |
| `rea.echidna.es/P4LaTierraSeMueve/` | `echidnaeducacion.github.io/situaciones-aprendizaje/la-tierra-se-mueve/` | Externa | Ídem |
| `rea.echidna.es/nocheydia/` | `echidnaeducacion.github.io/situaciones-aprendizaje/del-alba-al-anochecer/` | Externa | Ídem |
| `/docentes/<material>/`, `/docentes/situaciones-aprendizaje/<recurso>/` | `/docentes/` | Redirige | Rutas intermedias sin página (p. ej. `/docentes/proyectos-inicio-echidnaml/`) |
| `/guiainicioechidnaml/`, `/guiainicioarduinoide/` | Repos de las guías | Externa | Alias en minúsculas |
| `/GuiaInicioEchidnaML/`, `/GuiaInicioArduinoIDE/` | `echidnaeducacion.github.io/<repo>/` | Externa | |

## Pendiente

- [x] Páginas no indexadas: las actividades `s01`–`s10` y `p01` van a las diapositivas de la Guía de inicio EchidnaML; las subpáginas de EchidnaScratch, a 1.1.
- [x] Las situaciones de aprendizaje de `rea.echidna.es` no se alojan en la web nueva: se migraron a GitHub en octubre de 2026, al repo `situaciones-aprendizaje`, con carpetas nombradas por el título en minúsculas y con guiones (`hace-calor-aqui`, `del-alba-al-anochecer`, `la-tierra-se-mueve`).
