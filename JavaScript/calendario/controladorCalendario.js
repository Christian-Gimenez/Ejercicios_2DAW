"use strict";
import { vistaCalendario } from "./vistaCalendario";
import { modeloCalendario } from "./modeloCalendario";

export function controladorCalendario() {

  function iniciar() {
    const fecha = new Date();
    const cabecera = [...modeloCalendario().CABECERA_SEMANA];
    const fechaObj = modeloCalendario().fechaAObjeto(fecha);
    vistaCalendario().crearTabla(fechaObj, cabecera);
  }

  function mesActual() {
    const fecha = new Date();
    return fecha;
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

  function incrementarAnio(fecha) {
    const unAnioMas = new Date(fecha);
    unAnioMas.setFullYear(unAnioMas.getFullYear() + 1);
    return unAnioMas;
  }

  function decrementarAnio(fecha) {
    const unAnioMenos = new Date(fecha);
    unAnioMas.setFullYear(unAnioMenos.getFullYear() -1);
    return unAnioMenos;
  }
}