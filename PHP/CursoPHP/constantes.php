<!DOCTYPE html>
<html lang="es">

<head>
  <title>Practica PHP</title>
  <meta charset="utf-8" />
</head>

<body>
  <?php
  //CONSTANTES
  //Se pueden definir de dos formas:
  const UNA_CONSTANTE = 5; //Con la palabra reservada const
  define("OTRA_CONSTANTE", 8); //Con la funcion define('NOMBRE', valor);

  const PI = 3.141592;
  echo "<p>" . PI . "</p>";

  //PI = PI + 1; -> Daría ERROR

  define("NOMBRE", "Christian");
  echo "<p>" . NOMBRE . "</p>"; //Al llamar a una constante NO se debe poner $
  echo "<p>" . "Versión PHP: " . PHP_VERSION . "</p>"; //Variable predefinida
  ?>
</body>

</html>