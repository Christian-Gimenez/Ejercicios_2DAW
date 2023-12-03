"use strict";
import { modeloCalendario } from "./modeloCalendario";

export function vistaCalendario() {
  document.addEventListener("DOMContentLoaded", () => {

    const divPrincipal = document.createElement("div");

    const divBotones = crearBotones();

    const divCalendario = document.createElement("div");
    divCalendario.appendChild(crearTabla("Noviembre 2023"));

    divPrincipal.appendChild(divBotones);
    divPrincipal.appendChild(divCalendario);

    document.body.appendChild(divPrincipal);

    function crearBotones() {
      const boton1AnioMenos = document.createElement("button");
      boton1AnioMenos.appendChild(document.createTextNode("&laquo;"));

      const boton1MesMenos = document.createElement("button");
      boton1MesMenos.appendChild(document.createTextNode("&lsaquo;"));

      const botonHoy = document.createElement("button");
      botonHoy.appendChild(document.createTextNode("&bull;"));

      const boton1MesMas = document.createElement("button");
      boton1MesMas.appendChild(document.createTextNode("&rsaquo;"));

      const boton1AnioMas = document.createElement("button");
      boton1AnioMas.appendChild(document).createTextNode("&raquo;");

      return document.createElement("div")
        .append(boton1AnioMenos, boton1MesMenos,
          botonHoy, boton1MesMas, boton1AnioMas);
    }

    function crearTabla(fechaObj, cabecera) {
      const tabla = document.createElement("table");

      const tituloTabla = document.createElement("caption");
      tituloTabla.appendChild(document.createTextNode(fechaObj["mes"]));

      const thead = crearTHead();

      const tbody = crearTBody();

      tabla.appendChild(tituloTabla);
      tabla.appendChild(thead);
      tabla.appendChild(tbody);

      function crearTHead() {
        const thead = document.createElement("thead");
        
        const tr = document.createElement("tr");

        cabecera.forEach(diaSemana => {
          let th = document.createElement("th");
          th.appendChild(document.createTextNode(diaSemana));
          tr.appendChild(th);
        });
        
        thead.appendChild(tr);
        return thead;
      }

      function crearTBody() {
        const tbody = document.createElement("tbody");
        
        return tbody;
      }
    }
  })
}
