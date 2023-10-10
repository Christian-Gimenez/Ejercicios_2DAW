<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>
<body>
  <?php
  //Funciones: paso por valor y por referencia (hay que poner un & en la definición de la función)

  function miFuncion($num1) { //Pasa una copia del valor original, NO cambia el valor original
    $num1 = $num1 + 2;
  }

  function otraFuncion(&$num1) { //Pasa la referencia de memoria, SI cambia el valor original
    $num1 = $num1 + 2;
  }

  $num1 = 4;

  miFuncion($num1);
  echo $num1; //Valor no modificado
  echo "<br/>";

  otraFuncion($num1);
  echo $num1; //Valor modificado


  ?>
</body>
</html>