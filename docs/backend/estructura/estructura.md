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

## Tipo_dispositivo ( 9 )
Este módulo permite gestionar los diferentes tipos de dispositivos con los que trabaja CATSA. En este caso, esta pestaña cuenta con una característica particular: permite agregar una periodicidad que habilita la programación de mantenimientos para los dispositivos según su tipo.

## Add_marca_form ( 11 )
Este formulario permite la inserción de los datos de una marca en el SDGI.

## Add_modelo_form ( 12 )
Este formulario permite la inserción de los datos de un modelo de dispositivo en el SDGI.

## inventario_marcas ( 13 )
Esta página implementa la lógica necesaria para gestionar las diferentes marcas de dispositivos presentes en el SDGI.

## inventario_modelos ( 14 )
Esta página implementa la lógica necesaria para gestionar las diferentes modelos de dispositivos presentes en el SDGI.

## Tipo_accesorio ( 15 )
Este módulo permite gestionar los diferentes tipos de accesorios con los que trabaja CATSA, los cuales hacen referencia exclusivamente a accesorios de radios.

## Tipo_software ( 16 )
Esta página implementa la lógica necesaria para visualizar, eliminar, buscar, filtrar y modificar los diferentes tipos de software utilizados por los empleados de CATSA.

## marca-modelos ( 17 )
Esta página habilita la creación y asociación inmediata de una marca a un modelo, con el objetivo de optimizar el diseño de la aplicación.

## Tarea Checklist ( 20 )
Este módulo se especializa en definir un checklist, que es básicamente una lista de tareas que se realizarán durante el mantenimiento de un dispositivo. Dichas tareas están determinadas por el tipo de dispositivo al que se le realizará el mantenimiento.

## Add_atributo_form ( 21 )
Esta página implementa la lógica necesaria para añadir o eliminar atributos mediante una tabla, la cual muestra la información del dispositivo una vez que este ha sido seleccionado.

## Add_tipo_software_form ( 42 )
Este formulario permite añadir fácilmente un nuevo tipo de software cuando sea necesario, facilitando así la gestión de los softwares presentes en el sistema.