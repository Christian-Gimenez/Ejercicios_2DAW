<?php
// Ejercicio 6: Imprimir información de una matriz bidimensional

$matriz = [
  ["Numero 1 en binario", 0,0,1],
  ["Numero 2 en binario", 0,1,0],
  ["Numero 3 en binario", 0,1,1],
  ["Numero 4 en binario", 1,0,0],
  ["Numero 5 en binario", 1,0,1],
  ["Numero 6 en binario", 1,1,0],
  ["Numero 7 en binario", 1,1,1]
];

echo "<table border='1px solid black'>";
echo "<caption>Números binarios</caption>";
foreach($matriz as $arr) {
  echo "<tr>";
  foreach($arr as $val) {
    $print = is_string($val)? "<th>$val</th>" : "<td>$val</td>";
    echo "$print";
  }
  echo "</tr>";
}
echo "<table>";