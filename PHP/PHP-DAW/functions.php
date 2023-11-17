<?php
$semana = ["lunes", "martes", "miércoles",
"jueves","viernes","sábado","domingo"];

function diaSemana(array $semana):string {
  
  return $semana[rand(0,6)];
}

function modificarPorReferencia(&$array) {
  array_push($array, "hola");
}

function modificarPorValor($array) {
  array_push($array, "hola");
}
echo "Día aleatorio: " . diaSemana($semana) . "<br>";

modificarPorReferencia($semana);
//modificarPorValor($semana);
print_r($semana);

$arrayEjemplo = [1,2,3,4,5];
