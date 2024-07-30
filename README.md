<div align="center">
  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="250" height="250"/>    
<img src="https://github.com/user-attachments/assets/91e2c898-2d36-4220-ac96-f22f294e5551" width="280" height="280"/>

</div>




# SetDown 
## (Aplicación de apagado programado)
---

## Descripción
Aplicación de escritorio para programar el apagado, reinicio e hibernación del PC, con un enfoque minimalista 
y estético facilitando al usuario una funcionalidad aplicable en los siguientes casos de usos:
* Apagado programado a la hora de dormir
* Apagado del PC con el objetivo de que no consuma nada de energía
* Temporización del apagado

## UI/UX (v1.0.0)
![image](https://github.com/DevGiovanniLC/SetDown-Wails/assets/92268681/63274208-cb4d-44b5-9043-7e48384c3ea6)
<br>
<br>
El apartado visual de la aplicación tiene un enfoque minimalista, usando principalmente iconos y botones en ves de texto
para que su uso no implique un exceso de verbosidad, al pasar por encima de la aplicación muestra un texto alternativo donde indican su función en el caso de no entenderlo por la imagen


# Desarrollo
Esta aplicación ha sido desarrollada con wails una tecnologia que aprovecha webviews para crear aplicaciones de escritorio, 
esta está basada en golang en cuanto a la conexión con el sistema operativo (backend). HTML, CSS y Typescript con la libreria react  
para el apartado visual y la interacción del usuario (frontend, UI/UX).


### Desarrollo desde el navegador
Ejecuta `wails dev` http://localhost:34115. 

### Compilación 
Ejecuta `wails build` para compilar la aplicación y obtener un ejecutable.
