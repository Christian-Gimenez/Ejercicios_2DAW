<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>
<body>
  <?php
  //REQUIRE -> Salta una ERROR FATAL si no encuentra el fichero
  echo "Soy el primer fichero";
  echo "<br/>";

  require "require2.php";
  require_once "require2.php"; //Si ya lo tiene no lo añade de nuevo
  ?>
</body>
</html>