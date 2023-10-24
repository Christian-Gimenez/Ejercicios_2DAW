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
