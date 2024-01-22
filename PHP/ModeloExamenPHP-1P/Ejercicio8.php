<?php
// Ejercicio 8: Calcular el promedio de edades usando un array asociativo

$personas = [
  ["Nombre" => "Pepe", "Edad" => 20],
  ["Nombre" => "Pedro", "Edad" => 21],
  ["Nombre" => "Pancho", "Edad" => 22],
  ["Nombre" => "Peter", "Edad" => 23],
  ["Nombre" => "Paco", "Edad" => 24],
  ["Nombre" => "Perez", "Edad" => 23],
  ["Nombre" => "Pico", "Edad" => 19],
  ["Nombre" => "Pala", "Edad" => 34],
];

function promedio(array $personas): float {
  $suma = 0;
  for($i = 0; $i < count($personas); $i++) {
      $suma += $personas[$i]["Edad"];
  }
  $media = $suma / count($personas);
  return $media;
}

$mediaEdades = promedio($personas);
echo "La edad media de las personas es: $mediaEdades";