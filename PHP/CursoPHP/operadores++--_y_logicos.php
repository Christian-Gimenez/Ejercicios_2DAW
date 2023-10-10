<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>

<body>
  <?php
  /*Operadores decremento/incremento
    $num1 = 5;
    $num2 = 10;
    echo $num1 . "<br/>";
    echo $num1++ . "<br/>"; //POST-INCREMENTO
    echo $num1 . "<br/>";
    echo $num2 . "<br/>";
    echo ++$num2 . "<br/>"; //PRE-INCREMENTO
    */

  //OPERADORES LÓGICOS
  //and && -> Sólo devuelve true si ambos son true, si no devuelve false
  //or || -> Devuelve true si alguno es true, sólo devuelve false si ambos son false
  //xor -> Sólo devuelve true si uno es true, si ambos son true o false devuelve false
  //! -> Si algo es true devuelve false, si algo es false devuelve true
  $num1 = 5;
  $num2 = 10;
  $num3 = 5;
  $activo = true;

  if ($num1 == 5 && $num1 == $num3) {
    echo "Dentro del 1º if <br/>";
  }

  if ($num1 == 5 || $num1 == $num2) {
    echo "Dentro del 2º if <br/>";
  }

  if ($num1 == 5 xor $num1 == $num2) {
    echo "Dentro del 3º if <br/>";
  }

  if (!$activo1) {
    echo "Dentro del 4º if <br/>";
  }

  ?>

</body>

</html>