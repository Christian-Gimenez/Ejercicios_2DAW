<?php
$servidor="mysql:dbname=Empresa;host=127.0.0.1";
$usuario="christian";
$password="Sauron_1995";

try {
  $pdo = new PDO($servidor, $usuario, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES utf8")); //Lo ultimo hace que funcione el utf-8
  echo "Conectado..";

} catch(PDOException $e) {
  echo "Conexión mala :( " . $e->getMessage();
}
?>