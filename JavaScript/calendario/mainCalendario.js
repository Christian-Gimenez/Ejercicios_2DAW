"use strict";
// import * as Vista from "./vistaCalendario.js";
// import * as Modelo from "./modeloCalendario.js";
import * as Controlador from "./controladorCalendario.js";

/*MAIN */
// document.addEventListener("DOMContentLoaded", () => {
let fechaMostrada = Controlador.mesActual();
Controlador.iniciar(fechaMostrada);

function event1AnioMenos() {
  fechaMostrada = Controlador.decrementarAnio(fechaMostrada);
  // console.dir(fechaMostrada);
}
// });