<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>

<body>
  <?php
  //VARIABLES PREDEFINIDAS
  //$_COOKIE $_GET $_REQUEST $_SERVER $_ENV $_GLOBALS $_POST $_SESSION
  $numero = 33;
  echo "Nombre del servidor: " . $_SERVER['SERVER_NAME']; //Accedemos a la propiedad 'SERVE_NAME'
  echo "<br/>";
  echo "Software del servidor: " . $_SERVER['SERVER_SOFTWARE']; //Accedemos al nombre del SW del servidor
  echo "<br/>";
  echo "Puerto del servidor: " . $_SERVER['SERVER_PORT']; //Puerto del servidor
  echo "<br/>";

  echo "La variable número es: " . $GLOBALS['numero']; //Accede al valor de las variables globales que hayas definido
  ?>
</body>

</html>