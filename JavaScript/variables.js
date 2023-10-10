"use strict"

//VARIABLES
var variable;

/**El ámbito es GLOBAL, incluso entre distintos ficheros */
var miVar = "global"; //Global incluso para otros ficheros JS adjuntados

function funcionGlobal() {
  var miVar = "local"; //Variable local a la función
  return miVar;
}

console.log(miVar); //Retorna el valor de la Global
console.log(funcionGlobal()); //Retorna el valor de la Local a la función
console.log(miVar); //Retorna el valor de la Global;

//ECMAScript 6
let variableConEsteroides; //Tiene ya entorno de bloque
const MI_CONSTANTE = 5; //No se puede cambiar el valor asignado

//AMBITOS
//Global
/**Fuera de cualquier función o bloque, accesible desde cualquier lugar */

//De función
/**Las variables son accesibles solo desde dentro de la función, también llamado ámbito local */

//De bloque (ES6)
//Las variables son accesibles solo desde dentro del bloque, pero sólo aplica let y const
//Las funciones también tienen ámbito de bloque en modo estricto


