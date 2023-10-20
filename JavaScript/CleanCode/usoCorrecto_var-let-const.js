"use strict";

//Ejemplo de uso de var
var variable = 5;
{
  //5 por que var no admite ambito de bloque, entonces recoge el valor global
  console.log("inside", variable); 
  var variable = 10;
}

console.log("outside", variable); //10
variable = variable * 2;

//Ejemplo de uso de let
let variable2 = 5;
{
  //error, ya que no se declaró en este bloque 'variable2' y let se ciñe al bloque
  console.log("inside", variable2); 
  let variable2 = 10;
}

console.log("outside", variable2);//5, ya que coge el valor del ambito global
variable2 = variable2 * 2;
console.log("changed", variable2); //10, ya que se modificó el valor de la variable2 en el ambito externo

//Ejemplo de uso de const
const variable3 = 5;
variable3 = variable3 * 2; //error, no se puede reasignar el valor de const
console.log("changed", variable); //no llega hasta aquí, crashea con el fallo anterior