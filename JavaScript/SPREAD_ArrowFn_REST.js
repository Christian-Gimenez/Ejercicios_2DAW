"use strict";

let arr = [1,2,3,4,5]
//Operador SPREAD ...
console.log(...arr) //Divide el array en sus valores
console.log(..."Cadena")//C a d e n a

//Crear la copia de un array nuevo
let clonArr = [...arr]

let array2 = [6, 7]
//Agregamos los elementos de array2 a array
arr.push(...array2)

//Podemos a funciones que no aceptaban arrays, pasarselos con SPREAD
Math.max(...arr);

//Funcion normal
function suma1(a, b) {
  let c = a + b;
  return c
}
//Función anónima
let suma2 = function(a, b) {
  let c = a + b;
  return c
}

//Arrow function, Forma normal
let suma3 = (a, b) => {
   let c = a + b;
   return c 
};

//Arrow function, Forma resumida
let suma4 = (a, b) => a + b;
suma4(5, 6); //11

let array = [1,2,3,4,5]
//Pasar un array a X variables independientes
let [x, y, z] = array;

//Se puede también saltar valores a la hora de asignar
let [a,,b] = array;

//Usar REST para almacenar el resto de valores en un array
let [c, ...d] = array;

//Para devolver un array en la arrowFunct
let miFn = () => [0, 10, 20];
[tmin, tmed, tmax] = miFn();
console.log(tmin); //0
console.log(tmed); //10
console.log(tmax); //20

//Para no tener que crear una var aux para intercambiar estos valores
let vA = 10;
let vB = 20;
//Así mete lo de A en B y lo de B en A
[vA, vB] = [vB, vA];

const obj = {
  nombre: "Ana",
  apellidos: "Nadie",
  rol: "Desconocido",
  direccion: {
    calle: "Villablanca",
    ciudad: "Madrid"
  }
}

//Copiamos la propiedad "nombre" y su valor del obj a la var nomb
//let {nombre} = obj
//Lo mismo, pero en 3 variables
let {direccion, nombre, rol} = obj;

//Para hacerlo con otro nombre
let {direccion:dir} = obj;

//Si la propiedad esta en unos obj pero si en otros, si no lo encuentra da "rojo"
let {color="rojo"} = obj

//Funcion que devuelve el objeto
let fn = () => {return {tmin:0, tmed:10, tmax:20}}
//Guardariamos en estas 3 var, los respectivos valores de los attrb del objeto que devuele fn()
let {tmin, tmax, tmed} = fn();

//Guardar la propiedad de un obj hijo de otro obj
let {direccion:{calle}} = obj;

const catalogo = [{
  titulo: "DIW",
  descripcion: "yo que sé",
  libros: [
    {
      autor: "Tom",
      precio: 30, //Para ir aqui...
    }
  ]
}]
//Accedemos así
let [{libros:[{precio}]}]= catalogo;

//Como los Map de Java, pero realmente es un obj JSON
let m = new Map();
//Podemos meter en Map asi:
//new Map({clave => valor}, {clave => valor})
//new Map([clave, valor], [clave, valor])

//Añadir un elemento al Map
m.set(1, "Uno");
m.delete(1); //Elimina la propiedad anterior


let rep = [1,1,1,2,3,4,5,6,6,5,7,8,8,9,10]
//Como los Set en Java, no acepta repetidos
let s = new Set(rep); //{1,2,3,4,5,6,7,8,9,10}

//Para tener un closure, o lo que es lo mismo, un scope
//protegido al cual sólo tengamos acceso cuando deseemos pero
//que ninguna variable externa me lo modifique
function contador() {
  let n = 0;
  return {
    contar: function() {return n++},
    reset: n=0
  }
}

//Crea un nuevo closure cada vez, 'ce' no puede modificar 'de'
let ce = contador(); 
let de = contador();




