<?php

# Comentario (deprecated)
// Comentario
/* Comentario en bloque */
echo "Hola mundo";

//VARIABLES
$a = 5;
$b = `ls -al`; //Podriamos ejecutar comandos del sistema
$c = "$a"; //Podemos expandir las variables con las " "
$d = '$a'; //Imprime literalmente $a

//Imprimir
echo 'Resultado: ' . $a . '; ' . $d . '<br/>';//Concatenar strings
echo "Resultado: $a; $d <br/>";//Concatenar strings
print "$a + $d";

//Alcance/ambito variables en funciones
function fn1($arg) { //Las var dentro de una funcion, son locales a la funcion
  global $a; //recogemos la variable global para poderla usar
  echo "$a + $arg";//sin global daría ERROR. Las funciones SÓLO ven sus propias variables
}

fn1(11);

for($i=0; $i<10; $i++) {
  echo $i . "<br/>";
}

if($a > $b) {
} else if ($a < $c) {
} elseif ($a === $c) {
}

//NO confundir el ternario con el operador Elvis 
echo ($a > 5) ? "Mayor" : "menor";
$c = null;
echo $c ?: "Desconocido"; //Si es null, lanza "Desconocido"
 
?>

<!-- Como echo, pero no es recomendado -->
<h1><?= $a?></h1>
<h1><?php echo $a?></h1>