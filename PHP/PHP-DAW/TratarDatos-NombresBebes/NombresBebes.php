<?php
include_once "nomnac21-01.php";

//Spliteamos en un array los datos del CSV
$datos = preg_split(";", $nombres);
if(!$datos) {
  echo "Ups error.";
}
echo $datos;
//Mapeamos para limpiar los espacios en blanco de cada dato
$datos = array_map(fn($dato) => trim($dato), $datos); //En array_map(1ºCallback, 2ºArray)
//Filtramos para eliminar los registros vacíos del array
$datos = array_filter($datos, fn($reg) => $reg !== ""); //En array_filter(1ºArray, 2ºCallback)
//Dividimos en niños y niñas. ¡REVISAR!
$niñosYniñas = preg_split(";;", implode("", $datos));

echo $niñosYniñas;
?>