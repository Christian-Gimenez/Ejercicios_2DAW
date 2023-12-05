import { datos } from "./datos.js";
(function () {

  const array2D = csvArray(datos, "\n", ",");
  const cabecera = extraerCabecera(array2D);
  const arrayObj = csvArrayObj(array2D);
  console.dir(arrayObj);
  const estadoTabla = {
    cuota: "none",
    fecha: "none",
    nombre: "none",
    mail: "none"
  };

  mostrarTabla(arrayObj);

  /*Eventos y ordenación*/
  function mostrarTabla(arrayObj, titulo = "Datos de Empleados") {
    const tabla = crearTabla(arrayObj, titulo, cabecera);
    tabla.tHead.children[0].firstElementChild.addEventListener("click", pulsadoCuota);
    tabla.tHead.children[0].children[1].addEventListener("click", pulsadoFecha);
    tabla.tHead.children[0].children[2].addEventListener("click", pulsadoNombre);
    tabla.tHead.children[0].lastElementChild.addEventListener("click", pulsadoMail);
    const padre = document.querySelector("#main");
    if(padre.firstElementChild) {
      padre.removeChild(padre.firstElementChild);
    }
    padre.appendChild(tabla);
  }

  function pulsadoCuota(evento) {
    modEstadoTabla("cuota");
    ordenarPorCuota(arrayObj, estadoTabla.cuota);
    mostrarTabla(arrayObj, "Empleados ordenados por Cuota (" + estadoTabla.cuota + ")");
  }

  function ordenarPorCuota(arrayObj, tipoOrden) {
    if(tipoOrden == "asc") {
      sortCuota();
    } else {
      sortCuota();
      arrayObj.reverse();
    }

    function sortCuota() {
      arrayObj.sort((a, b) => a["QuotaAmount"] - b["QuotaAmount"]);
    }
  }

  function pulsadoFecha(evento) {
    modEstadoTabla("fecha");
    ordenarPorFecha(arrayObj, estadoTabla.fecha);
    mostrarTabla(arrayObj, "Empleados ordenados por Fecha (" + estadoTabla.fecha + ")");
  }

  function ordenarPorFecha(arrayObj, tipoOrden) {
    if(tipoOrden == "asc") {
      fechaSort();
    } else {
      fechaSort();
      arrayObj.reverse();
    }

    function fechaSort() {
      arrayObj.sort((a, b) => {
        const fechaA = new Date(a["StartDate"]);
        const fechaB = new Date(b["StartDate"]);
        return fechaA - fechaB;
      })
    }
  }
  
  function pulsadoNombre(evento) {
    modEstadoTabla("nombre");
    ordenarPorAscii(arrayObj, "OwnerName", estadoTabla.nombre);
    mostrarTabla(arrayObj, "Empleados ordenados por Nombre (" + estadoTabla.nombre + ")");
  }

  function pulsadoMail(evento) {
    modEstadoTabla("mail");
    ordenarPorAscii(arrayObj, "Username", estadoTabla.mail);
    mostrarTabla(arrayObj, "Empleados ordenados por Mail (" + estadoTabla.mail + ")");
  }

  function ordenarPorAscii(arrayObj, campo, tipoOrden) {
    if(tipoOrden == "asc"){
      sortAscii();
    } else {
      sortAscii();
      arrayObj.reverse();
    }
    function sortAscii() {
      arrayObj.sort((a, b) => a[campo] >= b[campo]? 1 : -1);
    }
  }

  function modEstadoTabla(attrib) {
    if(estadoTabla[attrib] == "asc") {
      estadoTabla[attrib] = "desc";
    } else {
      estadoTabla[attrib] = "asc";
    }
  }

  /*Funciones para pintar el HTML */
  function crearTabla(arrayObj, titulo, cabecera, datosFooter) {
    const tabla = document.createElement("table");
    const caption = document.createElement("caption");
    const thead = crearTHead();
    const tbody = crearTBody();
    caption.appendChild(document.createTextNode(titulo));
    tabla.appendChild(caption);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    if(datosFooter) {
      const tfooter = crearTFooter(datosFooter);
      tabla.appendChild(tfooter);
    }

    return tabla;

    function crearTHead() {
      const thead = document.createElement("thead");
      const tr = document.createElement("tr");
      cabecera.forEach(dato => {
        const th = crearNodo("th", dato);
        th.style.cursor = "pointer";
        tr.appendChild(th);
      });
      thead.appendChild(tr);
      return thead;
    }

    function crearTBody() {
      const tbody = document.createElement("tbody");
      arrayObj.forEach(obj => {
        const tr = document.createElement("tr");
        for(const [k,v] of Object.entries(obj)) {
          const td = crearNodo("td", v);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      });
      return tbody;
    }

    function crearTFooter() {
      const tfooter = crearNodo("tfooter");
      const tr = crearNodo("tr");
      datosFooter.forEach(dato => {
        const td = crearNodo("td", dato);
        tr.appendChild(td);
      });
      tfooter.appendChild(tr);
      return tfooter;
    }
  }

  function crearNodo(etiqHTML, texto) {
    const nodo = document.createElement(etiqHTML);
    if(texto) {
      const txt = document.createTextNode(texto);
      nodo.appendChild(txt);
    }
    return nodo;
  }

  /*Funciones para tratar datos */
  function csvArray(datos, sepCamp, sepReg) {
    return datos.split(sepCamp)
                  .map(linea => linea.trim())
                  .map(linea => linea.split(sepReg)
                    .map(reg => reg.trim())
                    .filter(reg => reg.length))
                  .filter(linea => linea.length);                  
  }

  function csvArrayObj(array2D) {
    const arrayDeObjetos = arrObj();
    return arrayDeObjetos;

    function arrObj() {
      return array2D.map(arr => {
        const obj = aObj(arr);
        return obj;
      });
    }

    function aObj(arr1D) {
      return arr1D.reduce((obj, val, i) => {
        obj[cabecera[i]] = val;
        return obj;
      }, {});
    }
  }

  function extraerCabecera(array2D) {
    return array2D.shift();
  }

  /*Logica media y más repetido */
  function cuotaMedia(arrayObj) {
    let suma = 0;
    arrayObj.reduce((ant, sig)=> {
       suma += Number(ant["QuotaAmount"]) + Number(sig["QuotaAmount"]);
       return sig;
    });
    return (suma / arrayObj.length).toFixed(2);
  }
  // console.log(cuotaMedia(arrayObj));
  // console.log(arrayObj.length)

  function fechaMedia(arrayObj) {
    let suma = 0;
    arrayObj.reduce((ant, sig) => {
      suma += new Date(ant["StartDate"]) + new Date(sig["StartDate"]);
      return sig;
    });
    
  }

  function nombreMasRep(arrayObj) {

  }

  function mailMasRep(arrayObj) {

  }

})();