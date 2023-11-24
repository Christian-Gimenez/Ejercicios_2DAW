<?php
const LETRAS_DNI = [
  "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D",
  "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
];

function validarDNI(string $DNI): string {
  
  if(isset($DNI) && strlen($DNI) === 9) {
    $array = str_split($DNI);
    $letra = array_pop($array);
    $numero = implode("", $array);
    $letraCorrecta = genLetraDNI($numero);
    if($letra === $letraCorrecta) {
      return "VÁLIDO :D";
    }
  }
  return "INVÁLIDO :'(";
}

function genLetraDNI(string $numDNI): string
{
  if (isset($numDNI) && strlen($numDNI) == 8) {
    $indice = intval($numDNI) % count(LETRAS_DNI);
    return LETRAS_DNI[$indice];
  } else {
    return "";
  }
  //throw new Exception("ERROR: ¡Número de DNI Inválido!");
}

function genNumeroDNI(): int
{
  $num = rand(1, 99999999);
  return $num;
}

function genDNI()
{
  $num = genNumeroDNI();
  $numDNI = parseStrNumDNI($num);
  $letra = genLetraDNI($numDNI);
  $dniConLetra = $numDNI . $letra;
  return $dniConLetra;
}

function parseStrNumDNI(int $numDNI): string
{
  $numString = "";
  for ($i = strlen("$numDNI"); $i < 8; $i++) {
    $numString .= "0";
  }
  $numString .= "$numDNI";
  return $numString;
}

?>