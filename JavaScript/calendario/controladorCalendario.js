"use strict";
import * as Vista from "./vistaCalendario.js";
import * as Modelo from "./modeloCalendario.js";

/*MAIN */
// document.addEventListener("DOMContentLoaded", () => {
let fechaMostrada = mesActual();
iniciar(fechaMostrada);
const btn1AnioMenos = document.querySelector("div div :first-child");
btn1AnioMenos.addEventListener("click", function(){
  fechaMostrada = decrementarAnio();
  console.dir(fechaMostrada);
});

const btn1MesMenos = document.querySelector("div div button:nth-of-type(2)");
btn1MesMenos.addEventListener("Click", function() {
  fechaMostrada = decrementarMes();
  console.dir(fechaMostrada);
});


export function iniciar() {
  const cabecera = [...Modelo.CABECERA_SEMANA];
  const fechaObj = Modelo.fechaAObjeto(fechaMostrada);
  Vista.mostrarCalendario(fechaObj, cabecera);
}

export function mesActual() {
  const fecha = new Date();
  return fecha;
}

export function incrementarMes() {
  const unMesMas = new Date(fechaMostrada);
  unMesMas.setMonth(unMesMas.getMonth() + 1);
  return unMesMas;
}

export function decrementarMes() {
  const unMesMenos = new Date(fechaMostrada);
  unMesMenos.setMonth(unMesMenos.getMonth() - 1);
  return unMesMenos;
}

export function incrementarAnio() {
  const unAnioMas = new Date(fechaMostrada);
  unAnioMas.setFullYear(unAnioMas.getFullYear() + 1);
  return unAnioMas;
}

export function decrementarAnio() {
  const unAnioMenos = new Date(fechaMostrada);
  unAnioMenos.setFullYear(unAnioMenos.getFullYear() - 1);
  return unAnioMenos;
}
