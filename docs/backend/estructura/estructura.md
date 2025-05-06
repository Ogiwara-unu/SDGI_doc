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

## Tareas Checklist ( 20 )
Esta página habilita la creación y asociación de las tareas que tiene cada dispositivo dentro de su respectivo Checklist.

## Add_atributo_form ( 21 )
Esta página habilita la creación y asociación de los atributos a su debido dispositivo, con fin de optimizar la asignacion de atributos a cada dispositivo.

## Add_tipo_software_form ( 42 )
Esta página habilita la creación de los tipos de software.

## Gestiones_MD ( 43 )
Esta página habilita la creación, asignación, gestión y asociación de los activos asi que permite el mantenimiento de los empleados agregados. Por la parte de gestión y asignación esta pagina nos permite facil acceso en la parte visual asi como, facil gestión en todas las asignaciones de dispositivos, accesorios, etc.

## Mantenimiento empleado ( 44 )
Esta pagina nos despliega información sobre el empleado asi como: Usuario, Correo, Jefe, etc.

## Gestión dispositivo ( 45 )

En esta pagina podemos asignar un dispositivo a un empleado.

## Gestión radios ( 46 )

En esta pagina podemos asignar un radio a un empleado.

## Gestión accesorio ( 47 )

En esta pagina podemos asignar un accesorio a un empleado.

## Gestión Software ( 48 )

En esta pagina podemos asignar un software a un empleado.

## Gestión dispositivo ( 49 )

Esta página habilita la creación, asignación, gestión y asociación de los mantenimientos lo cual permita tener una gestión muy sencilla de cada mantemiento ya que este apartado se encarga de crear las citas de cada mantenimiento de forma automatica asi como llevar el checklist de todas las tareas que se deben de realizar para un dispositivo. Tambien se asigna la persona encarga del mantenimiento asi como el tipo de mantenimiento a realizar ya sea preventivo o correctivo.

## Inventario Dispositivo ( 55 )

Esta pagina nos despliega todo tipo informacion sobre el dispositivo que esta asignado a cada respectivo mantenimiento nos muestra datos tales como: Estado, Serial, Fecha ingreso, Notas, entre otra muchas mas informacion.

## Registro mantenimiento ( 56 )

Esta pagina nos permite ver un historial de todos los mantenimientos que han sido realizados para un dispositivo en especifico, nos muestra informacion relevante asi como es Fecha, Tecnico, Estado, Dispositivo, etc. Tambien nos permite editar los registros ya creados, asi como tambien nos permite agregar nuevos mantenimientos para cada dispositivo

## Login page ( 9999 )

Esta es la pagina donde el usuario inicia sesion al sistema.