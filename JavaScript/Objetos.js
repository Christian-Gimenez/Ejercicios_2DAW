//Arrays antiguos que parten del objeto window, antes se usaban
//window -> Todos estos terminaron siendo el BOM
  //history
  //location
  //navigator
  //screen
  //frames[]
  //document -> Lo usaron para extender al DOM
    //link[]
    //anchor[]
    //layer[]
    //forms[]
    //applets[]
    //images[]
    //areas[]

//Objeto global (en window en caso de JS, en global en NodeJS)
/*undefined, Infinity y NaN
isNan(), parseInt(), parseFloat(), Number(), eval()...
Date(), RegExp(), String(), Array(), Object()...
Math y JSON

globalThis === window;
 */

//Crear objetos en JS
const objetoNuevo = {}; //Objeto literal
const objetoNuevo2 = Object.create(Object.prototype);
const objetoNuevo3 = new Object(); //Objeto dinámico

const usuario = {
  nombre : "Pedro",
  edad: 20,
  empresa: {
    nombre: "ESPE, S.A.",
    id: 12345,
  },
};

//Acceder propiedades
usuario.nombre;
usuario["nombre"];
usuario.empresa.id;
usuario["empresa"]["id"];

//Para eliminar la propiedad
delete usuario.edad;

//ES6

//Ahora: Meter el valor de la variable fruta como key de la propiedad del objeto carro
const fruta = prompt("¿Fruta?");
const carro = { [fruta] : 5};
//Antes sería:
const fruta2 = prompt("¿Fruta?");
const carro2 = {};
carro[fruta] = 5;

//Ahora: Retornar un objeto cuyas keys y valores son iguales a los args de la función
function unUsuario(nombre, edad) {
  return {
    nombre,
    edad
  };
}
//Antes sería:
function unUsuario2(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad
  };
}

//Ahora: Cuando se declaran metodos del objeto
const bilbiotecaMath = {
  suma (a,b) { return a + b; },
  multiplica (a,b) { return a * b; }
}
//Antes: Hay que poner function y los :
const bibliotecaMath2 = {
  suma: function(a,b) { return a + b; },
  multiplica: function(a,b) { return a * b; }
};

//THIS
/*
const miCoche = {
  numRuedas: 4,
  kilometros: 0,
  modelo: "Formentera",
  saludo: function(conductor) {
    conductor = conductor || "¿qué tal?";
    return "Hola " + conductor + ". soy el modelo Formentera " + 
    this.modelo + "a su servicio. ¿Dónde quieres ir hoy";
  }
};
miCoche.saludo();
*/

//Objetos dinámicos (forma antigua)
//Generador de objtos con 'new'
function Coche(modelo) {
  this.numRuedas = 4;
  this.kilometros = 0;
  this.modelo = modelo;
}

const miCoche = new Coche("Formentera");//Si quitamos el new, se ejecuta como funcion y this apuntará al global
console.log(miCoche);

//Metodos para saber el tipo y la instancia

//typeof (Nota: diferencia entre object y function)
typeof valor === "string";//OJO el typeof de null es 'object' NO NULL (bug). 

//instanceof
valor instanceof Array; 
Object.create(null) instanceof Object // false
//También se puede usar === igual que typeof
//=== Comprobar si un valor es una instancia de una clase o constructor
valor.constructor === Array;
valor.constructor === Boolean;
valor.constructor === Function;
valor.constructor === RegExp;
valor.constructor === String;

//MÉTODOS DE OBJETOS
Object.values(objeto); //Devuelve array con los valores
Object.keys(objeto); //Devuelve array con las keys
Object.entries(objeto) //Devuelve un array bidimensional con las keys y valores
Object.hasOwnProperty(propiedad) //false si la propiedad es heredada, true si es propia
Object.getOwnPropertyName(propiedad); //Commprueba si la propiedad es original del objeto
Object.assign(objetivo, obj1, obj2)//Copia todas las propiedades numerables de ob1...objN
Object.is(obj1, obj2); //Comprueba si los objetos son iguales (Como .equals en JAVA)
Object.preventExtensions(objeto);//Evita que se agreguen nuevas propiedades a un objeto
Object.isExtensible(objeto);//Indica si se pueden añadir nuevas propiedades al objeto
Object.freeze(objeto);//No te deja ni agragar ni modificar ni eliminar nada del objeto
Object.isFrozen(objeto); //No poder agregar ni quitar
Object.seal(objeto);//El más estricto, sella el objeto, pero menos que freeze
Object.isSealed(objeto);//Indica si un objeto está sellado

//Otra forma de crear propiedades
Object.defineProperty(miCoche, "modelo", {enumerable: false}); //Si se puede mostrar o no
Object.defineProperty(miCoche, "modelo", {configurable: false});//Si se puede modificar o no

//Saber si la propiedad
if (ram in miOrdenador) {//como .hasOwnProperty() pero mira si en cualquier zona del objeto está
  //Codigo
}


