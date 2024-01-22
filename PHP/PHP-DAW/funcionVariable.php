<?php
function suma($a, $b) {
  return $a + $b;
}

$miFuncionSuma = "suma";
echo $miFuncionSuma(3,4);

//Funciones anónimas

$anonima = function() {
  echo "hola";
};
$anonima();

$mensaje = "Hola";
$miClosure = function() use ($mensaje) {
  echo $mensaje;
};

$miClosure();