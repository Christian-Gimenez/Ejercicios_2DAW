<?php

//Modificamos el producto con los nuevos datos
function actualizarProducto($nombre, $precio, $descripcion, $id) {
  //Obtiene obj PDO
  $bd = obtenerConexion();
  //Prepara la sentencia SQL de UPDATE
  $sentencia = $bd->prepare("UPDATE productos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?");
  //Ejecuta la sentencia para modificar el objeto del id especificado
  $sentencia->execute([$nombre, $precio, $descripcion, $id]);
}

//Obtiene un objeto del producto según su id, util para modificar un producto
function obtenerProductoPorId($id) {
  //Obtiene obj PDO
  $bd = obtenerConexion();
  //Prepara la sentencia SQL
  $sentencia = $bd->prepare("SELECT * FROM productos WHERE id = ?");
  //Ejecutamos la sentencia pasandole el id
  $sentencia->execute([$id]);
  //Hacemos un fetchObject para que devuelva un objeto con los atributos de cada columna
  return $sentencia->fetchObject();
}

//Obtener todos los productos
function obtenerProductos() {
  //Creamos la conexión PDO
  $bd = obtenerConexion();
  //Preparamos la sentencia
  $sentencia = $bd->prepare("SELECT * FROM productos");
  //Hacemos un fetchAll para devuelva todos los datos de la query como un array
  return $sentencia->fetchAll();
}

//Elimina un producto según su id
function eliminarProducto($id) {
  //Obtenemos obj PDO
  $bd = obtenerConexion();
  //Preparamos la sentencia
  $sentencia = $bd->prepare("DELETE FROM productos WHERE id = ?");
  //Ejecutamos la sentencia, pasando el id del producto a eliminar
  return $sentencia->execute([$id]);
}

//Recibe nombre, precio y descripción para preparar y ejecutar una query INSERT en productos
function guardarProducto($nombre, $precio, $descripcion) {
  //Llama a obtenerConexion() Para instanciar el obj PDO ya preparado 
  $bd = obtenerConexion();
  //Prepara la sentencia, evitando SQL INJECTION
  $sentencia = $bd->prepare("INSERT INTO productos(nombre, precio, descripcion) VALUES(?, ?, ?)");
  //Ejecuta la sentencia pasando el array con los argumentos
  return $sentencia->execute([$nombre, $precio, $descripcion]);
}

//Función que obtiene las var de entorno de "env.php", recibe por arg el nombre de la var deseada
function obtenerVariableDelEntorno($key) {
  //Si la variable de caché está definida
  if(defined("_ENV_CACHE")) {
    $vars = _ENV_CACHE;
  } else {
    //Si no, las lee de env.php
    $file = "env.php";
    if(!file_exists($file)) { //Si no existe env.php, lanza exception para crearla
      throw new Exception("El archivo de las variables de entorno $file no existe. Por favor, créalo.");
    }
    //parsea el fichero, obteniendo las variables
    $vars = parse_ini_file($file);
    define("_ENV_CACHE", $vars); //Y define la var cache con el valor de las variables
  }
  //Sí las variables están definidas
  if(isset($vars[$key])) {
    return $vars[$key]; //Las retorna
  } else {
    //Si no, lanza excepcion diciendo que la key especificada por arg no existe en el fichero de las variables de entorno
    throw new Exception("La clave especificada (" . $key . ") no existe en el archivo de las variables de entorno");
  }
}

//Método que accede a la DB con var de entorno y devuelve objeto PDO
function obtenerConexion() {
  //Obtenemos las variables del entorno password, user y dbName
  $password = obtenerVariableDelEntorno("MYSQL_PASSWORD");
  $user = obtenerVariableDelEntorno("MYSQL_USER");
  $dbName = obtenerVariableDelEntorno("MYSQL_DATABASE_NAME");
  //Instanciamos el obj PDO pasándole (url host + dbName), user y password
  $database = new PDO("mysql:host=localhost;dbname=" . $dbName, $user, $password);
  //Establecemos en utf8 la codificación
  $database->query("set names utf8;");
  //Preparamos los atributos de PDO (copy/paste)
  $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
  $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
  return $database;
}
?>