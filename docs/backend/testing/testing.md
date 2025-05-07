# Testing

 Se realizaron pruebas utilizando servicios RESTful proporcionados por Oracle APEX para verificar el correcto funcionamiento de las funcionalidades claves del sistema

**Objetivos del Testing**


- Validar que las operaciones de lectura, escritura, actualización y eliminación de datos funcionaran correctamente.

- Comprobar que la lógica de negocio respondiera adecuadamente a distintos escenarios de entrada.

- Verificar la consistencia de los datos retornados por los servicios REST.

### EndPoinds

http://apex.catsa.net:8080/apex/practi_catsa/da/dispositivos_atributos/

**GET**
```sql

SELECT * FROM DISPOSITIVOS_ATRIBUTOS

```

**POST**
```sql

BEGIN
INSERT INTO DISPOSITIVOS_ATRIBUTOS(ID_ATRIBUTO, DESCRIPCION, FORMATO, ID_TIPO_DISPOSITIVO)
VALUES (:id_atributo, :descripcion, :formato, :id_tipo_dispositivo);
END;

```

**PUT**
```sql

UPDATE DISPOSITIVOS_ATRIBUTOS
SET 
DESCRIPCION = :descripcion,
FORMATO = :formato,
ID_TIPO_DISPOSITIVO = :id_tipo_dispositivo
WHERE ID_ATRIBUTO = :id_atributo

```

**DELETE**
```sql

DELETE FROM DISPOSITIVOS_ATRIBUTOS WHERE ID_ATRIBUTO = :id_atributo

```


