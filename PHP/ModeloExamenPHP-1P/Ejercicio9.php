<?php
// Ejercicio 8: Crear una función para calcular el factorial de un número

function factorial(int $num): int {
  $fact = $num;
  echo "$num x";
  for($i = $num-1; $i > 0; $i--) {
    echo ($i > 1)?" $i x ":"$i";
    $fact *= $i;
  }
  echo " = $fact";
  return $fact;
}

function factRecurs(int $num): int {
  if ($num <= 1) {
    return 1;
  }
  return $num * factRecurs($num - 1);
}

$num = 5;
echo "<b>El Factorial de !$num es: </b>";
// $resultado = factorial($num);
$resultado = factRecurs($num);
echo "$resultado";