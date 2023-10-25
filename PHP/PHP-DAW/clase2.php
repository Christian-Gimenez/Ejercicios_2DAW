<?php
//Ambito global
$a="global";

function miF() {
  global $a;//Para poder usarla, hay que poner global
  $a="5";
  echo $a;
}

//Arrays asociativos>
$p = array("a"=>"apple", "b"=>"banana", "c"=>"cherry");
$q = ["a"=>"apple", "b"=>"banana", "c"=>"cherry"];

//Arrays normales
$planetas1 = array("Venus", "Mercurio", "Tierra", "Marte");
$planetas2 = ["Júpiter", "Saturno", "Urano", "Pluton"];
$alumnos = []; //Vacío

echo "<pre>";
print_r($p);
print_r($q);
echo "</pre>";

//Muestra el contenido del array y su tipo de datos
var_dump($p);

//FOR
//Puede usarse también sizeof()
for($i=0; $i < count($p); $i++) {
  echo $p[$i] . "<br>";
}

//FOR EACH
//Podemos acceder también a la clave con $key
foreach($p as $key => $value) {
  echo $key . " : " . $value . "<br>";
}

foreach($p as $value) {
  echo $value , "<br>";
}

//Métodos de arrays
//array_pop() Sacar del final
//array_push() Meter al final
//array_shift() Sacar del principio
//array_unshift() Meter al principio

$a=array("apple", "banana","cherry");
array_push($a, "orange");
array_unshift($a, "melon", "watermelon"); //Se puede meter varios elementos
var_dump($a);

$a[]= "tangerine"; //Así se puede agregar al final también
print_r($a);

//Unir varios arrays
$r=array_merge($a, $a);
$s=array_merge($q, $a);
echo "<pre>";
print_r($r);
print_r($s);

echo $r[8];
echo $s[8];

//Splice, array, posicion, cantidad_de_elementos_a_eliminar, elemento_sustituto
array_splice($a, 1, 0, "orange");
array_splice($a, 1, 0, [["orange", "melon"]]); //Agrega un array en esa posición

print_r($a);
echo "</pre>";

array_slice($arr, 3); //Extrae una parte de un array
array_combine($arrKeys, $arrValues); //Crea un array con llaves y con claves y los combina
array_values($arr); //Devuelve todos los valores de un array
array_keys($arr); //Devuelve todas las keys de un array
array_flip($arr); //Intercambia claves por valores
array_key_exists($key, $arr); //Verifica si el indice o clave existe en el array

//SORT
sort($arr);
//a ordena preservando las claves
//k ordena por las claves
//r ordena en orden inverso
//u ordena con una funcuon del usuario
//asort() preserva claves
//arsort() preserva claves al reves
//ksort() por claves
//krsort() por claves al reves
//rsort() al reves
//uasort() como diga user preservando claves
//usort() como diga user

//Buscar
//array_search() Busca un valor en un array y devuelve la 1ªclave
//in_array() Comprueba si un valor existe en un array
//array_key_exists() Verifica si el indice o clave dada existe en el array
//array_keys() Devuelve todas las claves de un array o un subconjunto de un array
//implode()/join() Convierte todos los elementos del array en una cadena
//count()/sizeof() Cuanta todos los elementos de un array o algo de un objeto

//Iterar
//array_walk($arr, fn(...)) como forEach en JS
//array_map(fn, $arr) Aplica la fn a los elementos y devuelve el array transformado
//array_filter($arr, fn) Devuelve un subconjunto del array original
//array_reduce($arr, fn(acumulador, valorInicial)) Reduce iterativamente un array

?>