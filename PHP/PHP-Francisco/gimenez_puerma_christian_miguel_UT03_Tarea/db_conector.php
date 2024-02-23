<?php
//Constantes para almacenar las credenciales de la BBDD
const DATABASE = "dwes";
const USER = "dwes";
const PASSWORD = "abc123.";
const HOST = "localhost";
//Codificación UTF-8 para la instancia de PDO
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
try {
  //Instanciamos el objeto PDO indicando el tipo de SGBD (mysql), el nombre del host
  //el nombre de la base de datos, el usuario que la administra, su contraseña y la codificación de caracteres
$db = new PDO("mysql:host=" . HOST . ";dbname=" . DATABASE, USER, PASSWORD, $utf8);
  $db->getAttribute(PDO::ATTR_SERVER_VERSION);
} catch (Exception $e) {
  //Si hubo un error en la conexión con la base de datos, mostramos la excepción
  echo "Conexión fallida con la base de datos 'dwes'.";
}

