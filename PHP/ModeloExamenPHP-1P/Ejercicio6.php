<?php
// Ejercicio 6: Imprimir un patrón de asteriscos usando bucles anidados
echo "Triangulo 1: <br/>";
for($i = 0; $i < 5; $i++) {
  for($j = $i; $j < 5; $j++) {
    echo "*";
  }
  echo "<br/>";
}

function pintar(int $cant, string $char): string {
  $resultado = "";
  for($i = 1; $i <= $cant; $i++) {
    $resultado .= $char;
  }
  return $resultado;
}

function pintarArbol(int $alto): void {
  $linea = "";
  echo "<br/>Árbol de $alto lineas de alto:<br/>";
  for($i = 1; $i <= $alto; $i++) {
    if($i < $alto) {
      $mitad = round(($alto)) - $i;
      $linea = pintar($mitad, "&nbsp");
      $linea .= pintar($i, "*");
      $linea .= pintar($mitad, "&nbsp");
      echo "$linea<br/>";
    } else {
      echo pintar($alto, "*") . "<br/>";
    }
  }
  if($alto % 2 == 0) {
    $linea = pintar($alto/3, "_");
    $linea .= pintar($alto-1, "|");
    $linea .= pintar($alto/3, "_");    
  } else {
    $linea = pintar(round(($alto - 1) / 2), "_");
    $linea .= "|";
    $linea .= pintar(round(($alto - 1) / 2), "_");
  //   $linea = pintar(round($alto/2), "_");
  //   $linea .= pintar($alto, "|");
  //   $linea .= pintar(round($alto/2), "_");
  }
  
  echo "$linea<br/>";
}

pintarArbol(12);



/*
___*___
__***__
_*****_
*******
__|||__

*/