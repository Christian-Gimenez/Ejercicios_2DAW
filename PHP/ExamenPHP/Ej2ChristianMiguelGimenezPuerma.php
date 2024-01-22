<?php

/**
 * E2.php
 * Dado un array de números positivos cualquiera, encontrar el valor máximo y mínimo.
 * Imprimir los dos valores con print_r o echo.
 */
$numbers = [
  237, 288, 547, 43, 777, 440, 125, 98, 705, 452, 568, 776, 181,
  604, 564, 239, 28, 369, 767, 543, 704, 310, 483, 63, 718, 420, 719, 610,
  572, 534, 108, 742, 751, 26, 415, 634, 313, 764, 524, 351, 465, 636, 117,
  297, 579, 7, 540, 189, 702, 158, 224, 449, 244, 589, 273, 184, 613, 263, 735,
  379, 226, 125, 692, 749, 165, 146, 254, 660, 397, 629, 545, 560, 113, 636,
  545, 411, 241, 135, 593, 578, 117, 175, 528, 634, 276, 243, 165, 384, 632,
  208, 535, 509, 261, 131, 304, 149, 637, 167, 555, 340, 659, 730, 349, 446,
  358, 189, 140, 762, 345, 435, 643, 547, 322, 715, 450, 580, 394, 24, 184, 667,
  455, 384, 683, 570, 32, 443, 181, 21, 589, 495, 307, 561, 279, 414, 459, 445,
  512, 90, 774, 219, 116, 595, 632, 693, 773, 254, 660, 322, 777, 129, 606, 36,
  775, 666, 645, 283, 496, 681, 532, 86, 561, 383, 585, 82, 657, 663, 342, 530,
  458, 528, 202, 767, 172, 282, 252, 315, 283, 532, 434, 17, 173, 396, 401, 192,
  235, 515, 134, 695, 385, 480, 278, 718, 676, 606, 105, 168, 362, 441, 372, 138
];

function valorMaximo(array $array): int
{
  $max = $array[0];
  for ($i = 1; $i < count($array); $i++) {
    $valor = $array[$i];
    if ($valor > $max) {
      $max = $valor;
    }
  }
  return $max;
}

function valorMinimo(array $array): int
{
  $min = $array[0];
  for ($i = 1; $i < count($array); $i++) {
    $valor = $array[$i];
    if ($valor < $min) {
      $min = $valor;
    }
  }
  return $min;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christian Ejercicio 2 Examen PHP</title>
</head>

<body>
  <?php

  // valorMaximo($numbers);
  echo "<h1>Ejercicio valor Máximo y Mínimo</h1>";
  //El ejercicio se puede resolver con estas funciones internas de PHP
  echo "Valor Máximo con funcion max() -> <b>" . max($numbers) . "</b><br/>";
  echo "Valor Mínimo con funcion min() -> <b>" . min($numbers) . "</b><br/>";

  //Pero también lo resolví haciendo yo las funciones
  echo "Valor Máximo con funcion creada por mi: valorMaximo() -> <b>" . valorMaximo($numbers) . "</b><br/>";
  echo "Valor Mínimo con funcion creada por mi: valorMinimo() -> <b>" . valorMinimo($numbers) . "</b><br/>";

  ?>
</body>

</html>