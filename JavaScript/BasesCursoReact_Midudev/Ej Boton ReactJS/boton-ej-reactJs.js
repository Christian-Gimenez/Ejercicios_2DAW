"use strict";
//Importamos React
import React from "https://esm.sh/react@18.2.0";
//Importamos el DOM de React
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

//Obtenemos el id del HTML donde se escribirá la APP
const appDomElement = document.getElementById("app");

//Creamos un root para el DOM de React
const root = ReactDOM.createRoot(appDomElement);

//Creamos los elementos. (tipoElemHTML, obj{atrib: valor}, "texto/elementos dentro")
const button1 = React.createElement("button", {"data-id": 123}, "Button 1");
const button2 = React.createElement("button", {"data-id": 456}, "Button 2");
const button3 = React.createElement("button", {"data-id": 780}, "Button 3");

//Creamos el envoltorio para renderizar elementos
//PERO si no queremos crear un div, le pasamos React.Fragment
const div = React.createElement(React.Fragment, null, [button1, button2, button3]);

//Renderizamos los elementos creados
//Como React SÓLO PUEDE RENDERIZAR 1 Elemento, por lo que renderizamos el div envoltorio
root.render(div);

/*//////////////////JSX////////////////////
//Para hacer lo anterior pero con JSX:
 <React.fragment>
  <button data-id="123">Button 1</button>
  <button data-id="456">Button 2</button>
  <button data-id="789">Button 3</button>
</React.fragment> 
//Los que se encargan del transpilador son Babel y SWC
*/

//Escribirá el codigo en el contenedor de html con id "app"
//root.render("Hola React");

//root.render("<button>Me gusta</button>"); NO SE PUEDE: Porque así se evita inyectar código JS (XSS)
