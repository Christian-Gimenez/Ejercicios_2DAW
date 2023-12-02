"use strict";
import { vistaCalendario } from "./vistaCalendario";
import { modeloCalendario } from "./modeloCalendario";

export function controladorCalendario() {
  function iniciar() {
    
  }

  function mesActual() {
    const fecha = new Date();
    const objMes = {
      anio: hoy.getFullYear(),
      mes: MESES[hoy.getMonth()],
      dias: arrayDiasDelMes(fecha)
    };
    hoy.getMonth
  }

  function arrayDiasDelMes(fecha) {
    const resultado = [];
    const dia = new Date(fecha);
    dia.setDate(1);
    do {
      resultado.push(dia.getDate());
      dia.setDate(dia.getDate() + 1);
      if(dia.getMonth() != fecha.getMonth()) break;
    } while(true);
    return resultado;
  }

  function incrementarMes(fecha) {
    const unMesMas = new Date(fecha);
    unMesMas.setMonth(unMesMas.getMonth() + 1);
    return unMesMas;
  }

  function decrementarMes(fecha) {
    const unMesMenos = new Date(fecha);
    unMesMenos.setMonth(unMesMenos.getMonth() - 1);
    return unMesMenos;
  }

  function incrementarAnio() {

  }

  function decrementarAnio() {

  }
}