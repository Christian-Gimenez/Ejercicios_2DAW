<?php
$servidor="mysql:dbname=Empresa;host=127.0.0.1";
$usuario="christian";
$password="Sauron_1995";

try {
  $pdo = new PDO($servidor, $usuario, $password);
  echo "Conectado..";

} catch(PDOException $e) {
  echo "Conexión mala :( " . $e->getMessage();
}
?>