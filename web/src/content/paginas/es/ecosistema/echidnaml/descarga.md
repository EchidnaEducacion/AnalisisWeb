---
title: Descarga
description: Descarga EchidnaML para GNU/Linux, Windows o macOS e instálalo paso a paso. Versión actual, 1.6.2.
template: pagina
order: 1
image: ./descarga/sistemas-operativos.svg
toc: true
---

EchidnaML es un programa de escritorio, así que el primer paso es descargarlo e instalarlo en el ordenador. Aquí tienes las versiones para GNU/Linux, Windows y macOS, con las instrucciones de cada una.

**Versión actual: 1.6.2** (3 de octubre de 2026). Las anteriores están en el [repositorio de versiones de EchidnaML](https://github.com/EchidnaEducacion/echidnaml-releases/releases).

## GNU/Linux

EchidnaML funciona en distribuciones GNU/Linux de 64 bits basadas en Debian, como Ubuntu, Linux Mint o MAX.

### Descargas

- [echidnaml_1.6.2_amd64.deb](https://github.com/EchidnaEducacion/echidnaml-releases/releases/download/v1.6.2/echidnaml_1.6.2_amd64.deb) (294 MB): para Ubuntu 20.04 y 22.04, MAX y Linux Mint.
- [echidnaml_1.6.2-ubuntu-24.04_amd64.deb](https://github.com/EchidnaEducacion/echidnaml-releases/releases/download/v1.6.2/echidnaml_1.6.2-ubuntu-24.04_amd64.deb) (294 MB): para Ubuntu 24.04.
- [EchidnaML-1.6.2.AppImage](https://github.com/EchidnaEducacion/echidnaml-releases/releases/download/v1.6.2/EchidnaML-1.6.2.AppImage) (328 MB): para otras distribuciones o si prefieres una versión portátil, que no se instala.

### Instalar el paquete .deb

Con el ratón: haz doble clic sobre el archivo descargado, pulsa «Instalar» y escribe tu contraseña cuando te la pida.

Con la terminal: abre una terminal en la carpeta donde está el archivo e instálalo así (con el nombre del archivo que hayas descargado):

```sh
sudo apt install ./echidnaml_1.6.2_amd64.deb
```

### Usar la versión AppImage

La primera vez hay que dar permiso de ejecución al archivo; después basta con hacer doble clic sobre él para abrir EchidnaML.

Con el ratón: haz clic derecho sobre el archivo, elige «Propiedades», ve a la pestaña «Permisos» y marca «Permitir ejecutar el archivo como un programa» (el nombre puede cambiar según la distribución).

Con la terminal: abre una terminal en la carpeta donde está el archivo y escribe:

```sh
chmod +x EchidnaML-1.6.2.AppImage
```

## Windows

EchidnaML funciona en Windows 10 y Windows 11 de 64 bits.

### Descarga

- [EchidnaML.1.6.2.msi](https://github.com/EchidnaEducacion/echidnaml-releases/releases/download/v1.6.2/EchidnaML.1.6.2.msi) (311 MB)

### Instalación

1. Haz doble clic sobre el archivo `.msi`.
2. Sigue las instrucciones del asistente.

Puede que Windows muestre el aviso «Windows protegió su PC», porque el programa no está firmado por una gran empresa de software. Para seguir, pulsa «Más información» y después «Ejecutar de todas formas».

### Controlador de la placa

En Windows hay que instalar también el controlador [CH341](http://www.wch-ic.com/downloads/CH341SER_EXE.html), que gestiona el puerto serie de la EchidnaBlack2. Sin él, el ordenador no reconoce la placa.

## macOS

EchidnaML funciona en macOS 14 o posterior, en ordenadores con procesador Apple Silicon (M1, M2, M3 y posteriores). La versión para procesadores Intel se publicará más adelante.

### Descarga

- [EchidnaML-1.6.2-arm64.dmg](https://github.com/EchidnaEducacion/echidnaml-releases/releases/download/v1.6.2/EchidnaML-1.6.2-arm64.dmg) (320 MB)

### Instalación

1. Haz doble clic sobre el archivo `.dmg` para abrirlo.
2. Arrastra EchidnaML a la carpeta Aplicaciones.
3. Expulsa la imagen de disco cuando termine la copia.

La primera vez que abras el programa, macOS puede avisar de que el desarrollador no está verificado. Para abrirlo, ve a la carpeta Aplicaciones, haz clic derecho sobre EchidnaML, elige «Abrir» y confirma con «Abrir». Solo hay que hacerlo una vez.

## Después de instalar

Ya puedes empezar a trabajar con la placa:

1. Conecta la [EchidnaBlack2](/ecosistema/echidnablack2/) al ordenador.
2. Abre los ejemplos que trae el programa, en el menú «Archivo» › «Ejemplos», y prueba a cambiarlos.
3. Para aprender más, consulta el [manual](https://echidnaeducacion.github.io/manual/).
