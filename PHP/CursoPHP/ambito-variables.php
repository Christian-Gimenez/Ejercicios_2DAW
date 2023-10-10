<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <title>Practica PHP</title>
</head>

<body>
  <?php

  $valor1 = 10;
  $valor2 = 5;
  /**Si deseamos utilizar las variables globales dentro
   * de la función, usamos el operador 'global'
   */
  function prueba()
  {
    global $valor1, $valor2;
    $valor3 = $valor1 + $valor2;
    echo $valor3;
  }
  prueba();
  ?>

</body>

</html>