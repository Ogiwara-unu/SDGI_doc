# Estructura de SDGI

Esta estructura muestra la organización de las paginas en el proyecto. Las paginas están representados por sus respectivos nombres e identificadores.

![Estructura del SDGI](/img/estructura.png)

## Global Page( 0 )
La página global (Global Page), con el ID 0, es una página especial que se utiliza para definir componentes comunes que deben estar presentes en todas las páginas de la aplicación.

## Home ( 1 )
Esta página se encarga de mostrar el panel principal del sistema. La página Home incluye accesos directos a funcionalidades clave como el apartado de mantenimiento, consultas, gestión de datos y procesos. Es el punto de entrada para los usuarios una vez que inician sesión.

## Atributos_dispositivo ( 2 )
Atributos_dispositivo forma parte del apartado "Gestión de datos" y se encarga, básicamente, de gestionar los diferentes atributos que puede tener un dispositivo. Esto se hace con la finalidad de simplificar y delimitar los atributos relevantes de un dispositivo para CATSA.

## Inventario_dispositivo ( 3 )
Permite visualizar, modificar, borrar, insertar y filtrar los dispositivos que están a cargo del equipo de TI de CATSA. Además, permite adicionar y revisar los atributos o características relevantes de cada dispositivo, así como programar su fecha de mantenimiento.

## Inventario_software ( 5 )
Permite visualizar, modificar, borrar, insertar y filtrar los diferentes softwares que se utilizan en los dispositivos a cargo del equipo de TI de CATSA. Además, permite consultar información importante de estos softwares, como el número de serie, cuenta asociada, datos de acceso y la fecha de caducidad.

## Inventario_accesorio ( 6 )
Permite visualizar, modificar, borrar, insertar y filtrar los accesorios de los radios que están bajo la tutela del equipo de TI de CATSA. Esto se hace con la finalidad de llevar un control adecuado sobre dichos accesorios, debido a su alto valor. 

## Add_empleados_form ( 8 )
Aquí se solicita información relevante del empleado, como el número de empleado, nombre de usuario, correo electrónico, jefe y departamento, con la finalidad de agregarlo al SDGI.

