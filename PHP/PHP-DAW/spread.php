<?php

function multiplicar($a, $b, ...$masArgs) {
  $resultado = $a * $b;

  foreach ($masArgs as $num) {
    $resultado *= $num;
  }

  return $resultado;
}


function sumar(...$cosas)
{
  $result = $cosas[0];
  for ($i = 1; $i < count($cosas); $i++) {
    $result += $cosas[$i];
  }
  return $result;
}

print_r(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

