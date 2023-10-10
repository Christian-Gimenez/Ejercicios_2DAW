"use strict"

/*TIPOS
primitivos:  string
            number
            boolean
            null
            undefined

referencia: object
inmutable:  symbol

TIPOS OBJECT
String
Number
Boolean
Object
Function
Array
Date RegExp
Error
*/

//Declarar objeto
let objeto = {
  saludo: "hola"
};

//Conversión implícita de tipos.
//La suma concatena si hay una string
console.log(3 + 3 + 3); //9
console.log(3 + 3 + "3"); //"63"
console.log("3" + 3 + 3); //"333"

//La resta prioriza el cálculo aritmético
console.log(10 - 2 - 4); //4
console.log(10 - 2 - "4"); //4
console.log("10" - 2 - 4); //4

console.log(1 == "1"); //true
console.log(1 === "1"); //false

//Casting
var foo = '5';
console.log(typeof parseInt(foo));




//let variable = new String("Hola");