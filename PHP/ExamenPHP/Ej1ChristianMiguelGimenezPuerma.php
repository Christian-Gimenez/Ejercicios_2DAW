<?php

/**
 * E1.php 
 * Dentro de los 50 primeros números naturales, encontrar la
 * sucesión de aquellos que son impares y además no son múltiplos 
 * de 3 ni de 5. Imprimirlos usando print_r o echo.
 */

function imparesNoMultiplosDe3Ni5(string $maximoNumero): string
{
  $resultado = "";
  for ($i = 1; $i <= $maximoNumero; $i++) {
    if ($i % 2 != 0 && ($i % 3 != 0 && $i % 5 != 0)) {
      $resultado .= $i . ", ";
    }
  }
  return $resultado;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christian Ejercicio 1 Examen PHP</title>
</head>

<body>
  <h1>Números impares de 0 a 50 que no son multiplos de 3 ni de 5</h1>
  <?php
  $resultado = imparesNoMultiplosDe3Ni5(50);
  echo "RESULTADO: <b>";
  echo "$resultado";
  echo "</b>";
  ?>
</body>

</html>