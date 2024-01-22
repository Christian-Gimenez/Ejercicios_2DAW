<?php

function fib(int $terminos) {
  $fibonacci = [1,1];

  for($i = 2; $i <= $terminos; $i++) {
    $anterior = $fibonacci[$i -1];
    $anteriorDelAnterior = $fibonacci[$i -2];
    $nuevoTermino = $anterior + $anteriorDelAnterior;
    $fibonacci[$i] = $nuevoTermino;
  }

  return $fibonacci;
}

function fact(int $n) {
  $res = 1; 
  for($i = $n; $i > 0; $i--) {
    $res *= $i;
  }
  return $res;
}

print_r(fib(10));
echo "Factorial de 5 = " . fact(5);//120

