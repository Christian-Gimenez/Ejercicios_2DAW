"use strict";

//Siempre crea arrays unidimensionales

//Array tipo objeto
let miArray = new Array(); //Como no se suele hacer ya
let miArray2 = new Array(25); //Array con 25 elementos

let miArray3 = [];
let miArray4 = ["uno", "dos", 3];

//En java seria array de 2x2, aquí en la primera posicion un 2, en la segunda otro 2
let miArray5 = new Array(2, 2);

//Array multidimensional
let miArray6 = [
    [1,2,3],
    [4,5,6],
    [7,8,9] 
];

//Meteria en la posición 9 en valor "uno" aunque esté vacío
//Por lo que dejaría del 0 - 8 undefined
let miArray7 = [];
miArray[9] = "uno";

/*
Array.from(pareceArray[,fnMap[,argThis]]); Crea un nuevo numero variable de elementos a partir de un objeto iterable
Array.of(ele0[,ele1[, ...[, eleN]]); Crea un nuevo array de un numero variable de elementos
*/
console.log(Array.from("foo")); // Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); //Salida: Array [2, 4, 6]

Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

//Para recorrer un array: for, for ... in, for ... of
let miArray = [];
for(let i = 0; i < 10; i++) {
    miArray[i] = i;
}

//for... in Saca los indices que no son undefined
for(let i in miArray) {
    console.log(i); //MAL i = indice
}

for(let i in miArray) {
    console.log(miArray[i]); //BIEN
}

//for... of Saca los valores (como el for each en Java)
for(let i of miArray) {
    console.log(i);
}
//Array.constructor -> POO. Especifica la funcion que crea un prototipo de objeto
//Array.length -> Longitud array
//Array.prototype -> POO. Permite la adición de propiedades a todos los objetos
let miArray = [ [1,2,3], [4,5,6], [7,8,9]];
let tuArray = new Array(2,3,4);

//Faltan los console.log ^

//Agregar/Eliminar un elemento al inicio/final
//Modifican el array original

//shift() -> Sacar al principio
//unshift() -> Mete al principio
//push() -> Mete al final (+Rápido)
//pop() -> Saca al final (+Rápido)

//concat() -> Crea y devuelve la copia de un array
let arr =  [1, 2, 3];
let newArr = arr.concat(5,6,7); //Copiaria arr y añadiria al final 5,6,7

//splice(desdeQueElemento, 0) -> //Modifica el array agregando o eliminando elementos especificos
//Cuando borre, te los devuelve los que haya borrado
//Sus argumentos son:
//  1- Desde donde (indice) quieres hacer algo
//  2- 0 si no quieres eliminar si no agregar, otro número si quieres eliminar (especificando cuantos)
//Para reemplaar podriamos array.splice(1,1,'a','b');

//slice() Devuelve un array del array especificado. Este NO MODIFICA el ORGINAL
//Sus argumentos:
//  1- Desde donde partes
//  2- Hasta donde (no incluido), si no lo pones llega hasta el final
//Se pueden poner negativos para acceder desde el final hasta el principio
//Si lo pones sin args, te devuelve una copia entera del array.

//reverse() Invierte el orden de los elementos de un array
//sort() Ordena los elementos de un array. PERO lo hace con strings, entonces:
let arr1 = [1, 2, 15];
arr1.sort(); // [1, 15, 2];
//Para que lo haga bien:
arr1.sort(function(a,b) {
    return (a-b); //Si restamos los dos numeros, si a es mayor devuelve positivo, si es menor negativo, si son iguales 0
    //De esa manera sabe
});

function ordenar(a, b) {
    return (a-b);
}

arr.sort(ordenar); //Se le pasa la función sin ()

arr1.sort((a, b) => (a-b)); 


arr1.sort((a, b) => {
    return (a-b);
});

arr.sort(function(a,b) {
    if(isNaN(a) && isNaN(b)) return a > b;
    return (a - b);
});

//indexOf() Busca un elemento del array y devuelve su posición. -1 Si no lo encuentra
//Argumentos:
//  1-Qué valor buscar
//  2-A partir de cuál posición buscarlo
//lastIndexOf() Igual que el anterior, pero busca de atrás hacia adelante;

//includes() Devuelve true si el array incluye el elemento
//find(function) Devuelve el valor del primer elemento del array que coincida
//findIndex(function) Devuelve el índice del primer elemento del array que coincida
//copyWithin(aDonde, inicio, final)

//join("separador") Convierte todos los elementos del array en una cadena
//toString() Convierte cada elemento del array a una cadena
//toLocaleString() Igual que el anterior, pero teniendo en cuenta el idioma


//Las funciones callback que reciben estas funciones, pueden tener hasta 3 parametros.
//Deben ir en este orden: Valor del elemento actual, índice actual, array con el que trabajar
//forEach(funcion) Recorre el array y te va dando cada elemento
forEach(function(elemento, indice, array) {
    return //hacer algo;
});
//map(funcion) //Igual que forEach pero Debe retornar algo (el array transformado), si no retorna undefined
//filter(funcion) //Devuelve un subconjunto del array original. La función debe devolver true/false, los true se añaden al subconjunto
//every(funcion) //Devuelve true si todos los elementos devuelven true cuando se aplica la función del argumento
//some(funcion) //Devuelve true si alguno de los elementos devuelve true cuando se aplica la función del argumento


let a = [0,2,4,7,1,-8];

//Ejemplo forEach
a.forEach(function(e, i, a) {
    if(i % 2 == 0) console.log("Elemento: " + e + " | ", "Índice: " + i + " | ", "Array: " + a + " | ");
});

a.forEach((e, i, a) => {
    if(i % 2 != 0) console.log("Elemento: " + e + " | ", "Índice: " + i + " | ", "Array: " + a + " | ");
});


//Ejemplo map
let resultadoMap = a.map((e, i, a) => {
    return e + i; //Retornamos valor + indice
});

//Ejemplo filter
let resultadoFilter = a.filter((e ,i ,a) => {
    return e > 5; //Retorna solo los elementos que sean > 5
});

//Ejemplo every
let resultadoEvery = a.every(function(e, i, a) {
    return (e > -9); //Retorna true sólo si todos los elementos son > -9
});


//Ejemplo some
let resultadoSome = a.some(function(e, i, a) {
    return (e > 9); //Retorna true si alguno de los elementos es > 9
});

//Los siguientes pueden hacer todo lo de map, filter, every, some y forEach
//Reciben hasta 4 parámetros: (valor anterior, valor actual, indice actual y array)
//reduce(funcion) //Aplica una función a un acumulador y a cada valor del array para reducirlo a un único valor
//reduceRight(funcion) //Igual que reduce pero de derecha a izquierda




