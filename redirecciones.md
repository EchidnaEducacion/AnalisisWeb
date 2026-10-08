# Redirecciones

Correspondencia entre las URL de la web actual en WordPress y las de la nueva web, según [`estructura.md`](estructura.md). Sirve para que no se rompan los enlaces existentes (buscadores, material impreso, otras webs).

**Estado**: *Igual* = la URL no cambia; *Redirige* = la URL antigua lleva a la nueva; *Externa* = redirige a otro sitio.
GitHub Pages no admite redirecciones 301: se generan con `redirects` en `astro.config.mjs` (página HTML con redirección inmediata).

## Índice

1. [Páginas de WordPress](#páginas-de-wordpress)
2. [Blog y RSS](#blog-y-rss)
3. [Otros dominios y rutas](#otros-dominios-y-rutas)
4. [Pendiente](#pendiente)

---

## Páginas de WordPress

Las 82 páginas del sitemap de páginas de echidna.es (octubre de 2026): 7 iguales, 74 redirigen y 1 externa.

| URL antigua | URL nueva | Estado | Nota |
|---|---|---|---|
| `/` | `/` | Igual |  |
| `/inicio2/` | `/` | Redirige | Borrador duplicado de la portada |
| `/a-programar/` | `/ecosistema/` | Redirige |  |
| `/a-programar/echidnaml/` | `/ecosistema/echidnaml/` | Redirige |  |
| `/a-programar/echidnaml/descarga/` | `/ecosistema/echidnaml/` | Redirige | La descarga pasa a 1.1 |
| `/a-programar/echidnaml/como-empezar-con-machine-learning-y-echidna/` | `/ecosistema/echidnaml/` | Redirige | Primeros pasos: el contenido pasa a 1.1 |
| `/a-programar/echidnaml/conectar-echidnaml-y-echidna/` | `/ecosistema/echidnaml/` | Redirige | Primeros pasos: el contenido pasa a 1.1 |
| `/a-programar/echidnaml/empezar-con-echidnaml-y-echidnablocks/` | `/ecosistema/echidnaml/` | Redirige | Primeros pasos: el contenido pasa a 1.1 |
| `/a-programar/echidnascratch/` | `/ecosistema/echidnaml/` | Redirige | EchidnaScratch, sustituido por EchidnaML |
| `/a-programar/instalar-standardfirmata/` | `/ecosistema/echidnaml/instalar-standardfirmata/` | Redirige | Subpágina de 1.1 |
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
| `/hardware/componentes/acelerometro-black/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/componentes/acelerometro-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/componentes/conexiones-mkmk-black/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/componentes/conexiones-mkmk-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/componentes/sensor-temperatura-lm35/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/complementos/` | `/ecosistema/echidnablack2/complementos/` | Redirige |  |
| `/hardware/complementos/bluetooth-black/` | `/ecosistema/echidnablack2/complementos/bluetooth/` | Redirige |  |
| `/hardware/complementos/servomotor-continuo-black/` | `/ecosistema/echidnablack2/complementos/servomotor-continuo/` | Redirige |  |
| `/hardware/complementos/servomotor-posicion-black/` | `/ecosistema/echidnablack2/complementos/servomotor-posicion/` | Redirige |  |
| `/hardware/complementos/infrarrojos-distancia/` | `/ecosistema/echidnablack2/complementos/infrarrojos-distancia/` | Redirige |  |
| `/hardware/complementos/complementos-conexiones-mkmk/` | `/ecosistema/echidnablack2/complementos/conexiones-mkmk/` | Redirige |  |
| `/hardware/complementos/bluetooth-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/complementos/sensor-temperatura-lm35-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/complementos/servomotor-continuo-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/complementos/servomotor-de-posicion-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidnablack2/` | `/ecosistema/echidnablack2/` | Redirige |  |
| `/hardware/echidnablack2/alimentacion-echidnablack2/` | `/ecosistema/echidnablack2/alimentacion/` | Redirige |  |
| `/hardware/echidnablack2/documentacion-echidnablack2/` | `/ecosistema/echidnablack2/documentacion/` | Redirige |  |
| `/hardware/echidnablack2/modo-sensores-modo-mkmk-black2/` | `/ecosistema/echidnablack2/modo-sensores-mkmk/` | Redirige |  |
| `/hardware/echidnablack/puesta-en-marcha-echidna-black/` | `/ecosistema/echidnablack2/puesta-en-marcha/` | Redirige | La página de la Black2 enlaza hoy a esta |
| `/hardware/echidnablack/complementos-echidnablack/` | `/ecosistema/echidnablack2/complementos/` | Redirige | La página de la Black2 enlaza hoy a esta |
| `/hardware/echidnablack/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidnablack/alimentacion-echidnablack/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidnablack/documentacion-echidnablack/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidnablack/modo-sensores-modo-mkmk-black/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/alimentacion-echidnashield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/complementos-echidna-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/documentacion-echidnashield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
| `/hardware/echidna-shield/modo-sensores-modo-mkmk-shield/` | `/ecosistema/placas-anteriores/` | Redirige | Placa anterior (PDF) |
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

## Blog y RSS

| URL antigua | URL nueva | Estado | Nota |
|---|---|---|---|
| `/blog/` | `/blog/` | Igual | |
| `/AAAA/MM/slug/` | `/AAAA/MM/slug/` | Igual | 61 entradas |
| `/category/…/`, `/tag/…/`, `/author/…/` | Igual | Igual | Se descarta `/category/sin-categoria/`. Hay subcategorías de dos niveles (`/category/recursos/proyectos/`, `/category/recursos/impresion-3d/`) que deben mantenerse |
| `/feed/` | `/feed/` (copia de `/rss.xml`) | Igual | Los lectores de RSS no siguen redirecciones HTML |

## Otros dominios y rutas

| URL antigua | URL nueva | Estado | Nota |
|---|---|---|---|
| `rea.echidna.es/` | `/alumnado/` | Redirige | Hoy su `meta refresh` apunta a `kuku.es`: corregir ya |
| `rea.echidna.es/02_SensorTemperatura/` | `/alumnado/situaciones-aprendizaje/sensor-temperatura/` | Redirige | Se configura en el servidor de rea.echidna.es |
| `rea.echidna.es/P4LaTierraSeMueve/` | `/alumnado/situaciones-aprendizaje/la-tierra-se-mueve/` | Redirige | Nombre del recurso por confirmar |
| `rea.echidna.es/nocheydia/` | `/alumnado/situaciones-aprendizaje/noche-y-dia/` | Redirige | Nombre del recurso por confirmar |
| `/alumnado/situaciones-aprendizaje/`, `/alumnado/proyectos/` | `/alumnado/` | Redirige | Rutas intermedias sin página |
| `/docentes/proyectos-inicio-echidnaml/` | `/docentes/` | Redirige | Solo si 3.1 no tiene página propia |
| `/guiainicioechidnaml/`, `/guiainicioarduinoide/` | Repos de las guías | Externa | Alias en minúsculas |
| `/GuiaInicioEchidnaML/`, `/GuiaInicioArduinoIDE/` | `echidnaeducacion.github.io/<repo>/` | Externa | |

## Pendiente

- [ ] Revisar las 12 páginas no indexadas (actividades `s01`–`s11`, `p01`, Snap4Arduino), que no están en el sitemap pero existen.
- [ ] Confirmar los nombres de los recursos de `rea.echidna.es` en la nueva web.
