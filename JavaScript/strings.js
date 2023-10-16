"use strict";

//STRINGS

let cadena = "Esto es una cadena";
console.log(cadena.charAt(0)); //SOLO para imprimir char
//Para modificarlo, hay que hacer un split de "" para obtener un array
//Y poder así cambiar la posición que se desee
let aux = cadena.split("");
aux[0] = "L";
console.log(aux);

//charAt(indice) Ver solo el char que hay
//indexOf() Igual que en los arrays
//lastIndexOf()
//includes() Si la cadena incluye
//startsWith() Si empieza por
//substr(desdeDonde, yCuantos) Obtiene una subcadena desde el indicado + los que indiques
//substring(inicio, fin) Igual que el anterior, pero no los incluye
//slice() Igual que substring
//split(separador) Transforma en array

//Expresiones regulares
//match(expReg) 
//replace(expReg, text)
//search(expReg)

//Borran los espacios en blanco extras
//trim()
//trimLeft()
//trimRight()

//Transformaciones
//toLowerCase()
//toUpperCase()
//normalize(forma) Devueve la forma de normalización Unicode de una cadena especificada
//toString() Devuelve la cadena
//valueOf() Devuelve el valor alfanumérico

//Se pueden inyectar variables:
//Además podemos inyectar código dentro de ${ }
const titulo = "Dune";
const autor = "Frank Herbert";
console.log(`La novela ${titulo} escrita por ${autor}.`); //Tienen que ser las -> ` `
