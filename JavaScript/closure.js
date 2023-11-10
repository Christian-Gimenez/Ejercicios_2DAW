
//Se hacen CLOSURE para proteger el valor de una variable
function comprobarAmbito() {
  let varLocal = "Ambito local";

  function funcInterna() {
    return varLocal;
  }
  return funcInterna;
}

function contador() {
  let cnt = 0;

  return {
    contar: function() {return ++cnt;},
    reset: function() {cnt = 0;}
  }
}

comprobarAmbito()();
console.log(varFueraFnExterna());

function contador(inicio = 0) {
  return {
    contar: function() {return ++inicio;},
    valor: function() {return inicio;},
    reset: function() {cnt = 0;}
  }
}

const c1 = contador();
const c2 = contador(-1);
c1.contar(); //1
c1.contar(); //2
c2.valor(); //-1
c2.contar(); //0
c2.contar(); //1

//Antes se inventaron los Espacios de Nombres
//Si te pueden modificar la función
let Espaciador = {
  enBlanco: function() {
    return "";
  },

  nuevaLinea: function() {
    return "\n";
  }
}

//Para solucionar lo anterior se inventaron IIFE(Funciones invocadas inmediatamente)
//Son funciones anónimas, Closure pero auto-ejecutada para no tener ni que llamarla
(function(){/*codigo */})(); //Sintaxis más usada

(function miFunc(){/*codigo */}()); //No sirve de mucho el nombre, solo para debug

function miFunc(){ miFunc();};


//
let espacioNombres = espacioNombres || {};
//Pasamos un obj espacioNombres como el parámetro de una
//función al que asignamos métodos y variables públicos
(function(o) {
  o.foo = "foo";
  o.bar = function() {
    return "bar";
  }
})(espacioNombres);

console.log(espacioNombres);

//Realmente es como una Clase en Java
(function(espacioNombres, undefined){ //Para asegurarnos que undefined no está definido (versiones antiguas de JS)
  //Propiedades privadas
  let foo= "foo",
      bar = "bar";

  //Propiedades y métodos públicos
  espacioNombres.foobar = "foobar";
  espacioNombres.saludar = function() {
    decir("Hola mundo");
  };

  //Metodos privados
  function decir(msg) {
    console.log("Has dicho: " + msg);
  }
})(window.espacioNombres = window.espacioNombres || {});

console.log(espacioNombres.foobar);
espacioNombres.saludar();
espacioNombres.foobar2 = "foobar";
console.log(espacioNombres.foobar2);


//Modulo clásico de aplicación
let Formateador = (function defineFormateador() {
  //Prop privadas
  let raya = "-",
      punto = ".";

      //Prop y metodos públicos
  let APIPublica = {
    hacerLinea
  };
  return APIPublica;

  //Metodos privados
  function multiplicar(len, char) {
    return char.repear(len);
  }

  //Metodos públicos
  function hacerLinea(len = 0, char = raya) {
    console.log(multiplicar(len, char));
  }
})();

Formateador.hacerLinea(5);

//Modulo de utilidad (factoria de módulos)
function defineFormateador() {
  //Prop privadas
  let raya = "-",
      punto = ".";

      //Prop y metodos públicos
  let APIPublica = {
    hacerLinea
  };
  return APIPublica;

  //Metodos privados
  function multiplicar(len, char) {
    return char.repear(len);
  }

  //Metodos públicos
  function hacerLinea(len = 0, char = raya) {
    console.log(multiplicar(len, char));
  }
};

let formateador = defineFormateador();
formateador.hacerLinea(5);

//Módulos CommonJS
//Utilizado por Node.js, estos se basan en archivos: uno por módulo.

/* Modulo en un archivo 
//Que funciones del módulo exportamos
//Podemos exportarlas una a una o todas en un objeto
module.exports.hacerLinea = hacerLinea;

**Código (puede ir antes del exports) **
//Props privadas (no exportadas)
let raya = "-",

//metodos privados (no exportadas)
function multiplicar(len, char) {
  return char.repeat(len);
}

//metodos publicos ( exportadas)
function hacerLinea(len = 0; char = raya) {
  console.log(multiplicar(len, char));
}
*/

//En nuestra aplicacion importariamos
//Qué API vamos a utilizar
let Formateador = require("/path/a/hacerLinea");
Formateador.hacerLinea(5);

//Forma alternativa
let {hacerLinea} = require("/path/a/hacerLinea");
hacerLinea.hacerLinea(5);

//MODULOS MODERNOS
/*Modulo en un archivo*
//Qué funciones del modulo exportamos
export {hacerLinea};

//Props privadas (no exportadas)
let raya = "-",

//metodos privados (no exportadas)
function multiplicar(len, char) {
  return char.repeat(len);
}

//metodos publicos ( exportadas)
function hacerLinea(len = 0; char = raya) {
  console.log(multiplicar(len, char));
}
*/

//Modulos ESM
export function hacerLinea(len = 0, char = raya) {
  console.log(multiplicar(len, char));
}

//Con solo poner export lanzaria este por defecto
export default function hacerLinea(len = 0, char = raya) {
  console.log(multiplicar(len, char));
}

//Importar Modulos ESM

import { hacerLinea } from "/path/a/hacerLinea";
hacerLinea(5);

import { hacerLinea as unaLinea, hacerCuadrado as cuadrado }
from "/path/a/hacerLinea";

import * as Formatador from "/path/a/hacerLinea";
Formateador.hacerLinea(5);

//En el navegador hay que poner <script type="module" src="mimodulo.js"></script>
//<script type="module"> codigo... </script>