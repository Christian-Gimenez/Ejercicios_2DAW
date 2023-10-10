<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>
<body>
  <?php
  //INCLUDE -> Salta una ADVERTENCIA si no encuentra el fichero
  echo "Soy el primer fichero";
  echo "<br/>";

  //include "include2.php"; -> Agrega/Embebe el contenido de un .php en otro

  include_once "include2.php"; //Sólo agrega el fichero 1 vez, si ya lo incluiste lo descarta
  include_once "include2.php";
  ?>
</body>
</html>