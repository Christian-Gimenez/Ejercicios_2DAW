"use strict";
/*Extensión de ejercicio:
  Hacer que la tabla se ordene pulsando en las cabeceras
  Si pulsas 2 veces, se ordena al reves
  Ordenar los datos, no la vista (html)
*/

const resultado = csvAMatriz(datos);
const cabecera = extraerCabecera(resultado);
//ordenarPorCampo(resultado, "country", cabecera);
const tabla = realizarTabla(cabecera, resultado, "TABLA DE PAISES");
document.body.appendChild(tabla);
document.body.replaceChildren(tabla);

eventoOrdenarPorCampo(cabecera, resultado);


function eventoOrdenarPorCampo(cabecera, matriz) {
  //Seleccionamos las cabeceras th
  const cabeceras = document.querySelectorAll("th");
  //Añadimos el evento a todos los th
  cabeceras.forEach(th => {
    th.style.cursor = "pointer";
    th.addEventListener("click", evento => {
      //Seleccionamos el elemento que nos hicieron clic
      let campoSelect = evento.target;
      // console.dir(campoSelect);
      let txtCampo = campoSelect.firstChild.nodeValue;
      // console.dir(txtCampo);
      ordenarPorCampo(matriz, txtCampo, cabecera);
      let newTabla = realizarTabla(cabecera, matriz, `TABLA ORDENADA POR: ${txtCampo}`);
      // console.dir(newTabla);
      let oldTabla = document.querySelector("table");
      oldTabla.parentNode.removeChild(oldTabla);
      // oldTabla.parentNode.replaceChild(newTabla, oldTabla);
      document.body.appendChild(newTabla);
      eventoOrdenarPorCampo(cabecera, matriz);
    });
    th.addEventListener("dblclick", evento => {
      //Seleccionamos el elemento que nos hicieron clic
      let campoSelect = evento.target;
      // console.dir(campoSelect);
      let txtCampo = campoSelect.firstChild.nodeValue;
      // console.dir(txtCampo);
      ordenarPorCampo(matriz, txtCampo, cabecera, false);
      let newTabla = realizarTabla(cabecera, matriz, `TABLA ORDENADA POR: ${txtCampo}`);
      // console.dir(newTabla);
      let oldTabla = document.querySelector("table");
      oldTabla.parentNode.removeChild(oldTabla);
      // oldTabla.parentNode.replaceChild(newTabla, oldTabla);
      document.body.appendChild(newTabla);
      eventoOrdenarPorCampo(cabecera, matriz);
    })
  });
}

function csvAMatriz(cadena, sepReg = "\n", sepCamp = ";") {
  const array = cadena.split(sepReg) //Separa en un array por cada \n
    .map(linea => linea.trim()) //Limpiamos los espacios sobrantes
    .filter(linea => linea.length)//Filtra las cadenas vacias, las elimina del array
    .map(linea => linea//Iteara cada linea en si
      .split(sepCamp)//Separa las cadenas por ";" transformandolas en arrays
      .map(registro => registro.trim()) //Limpiamos los espacios de las cadenas
      .filter(registro => registro.length))//Limpiamos si quedasen vacías
    .filter(linea => linea.length === 11);//Sólo nos valen las que sean length === 11
  return array;
}

function extraerCabecera(matriz) {
  return matriz.shift();
}

function indiceCampoCabecera(cabecera, campo) {
  return cabecera.findIndex(valor => valor === campo);
}
//console.log(indiceCampoCabecera(cabecera, "lng"));

function filtrarPorNumCampo(matriz, numCampo, valor) {
  return matriz.filter((linea) => linea[numCampo] === valor);
}
//console.dir(filtrarPorNumCampo(resultado, 8, "admin"));

/*
function realizarTabla(cabecera, matriz, caption) {
  document.write("<table border='1px solid black'>");
  document.write("<caption><h1>" + caption + "</h1></caption>");

  document.write("<tr>");
  cabecera.forEach(registro => document.write("<th>" + registro + "</th>"));
  document.write("</tr>");

  matriz.forEach(fila => {
    document.write("<tr>");
    fila.forEach(registro => document.write("<td>" + registro + "</td>"));
    document.write("</tr>");
  });
  document.write("</table>");
}*/


// function realizarTabla(cabecera, matriz, caption) {
//   let miTabla = document.getElementById("tablaPaises");
//   let resultado = "";

//   resultado = "<table border='1px solid black'>";
//   resultado += "<caption><h1>" + caption + "</h1></caption>";

//   resultado += "<tr>";
//   cabecera.forEach(registro => resultado += "<th>" + registro + "</th>");
//   resultado += "</tr>";

//   matriz.forEach(fila => {
//     resultado += "<tr>";
//     fila.forEach(registro => resultado += "<td>" + registro + "</td>");
//     resultado += "</tr>";
//   });
//   resultado += "</table>";
//   //Printeamos todo
//   miTabla.innerHTML = resultado;
// }
function realizarTabla(cabecera, array, captionText = "Tabla de paises") {
  /*
  <table>
    <caption></caption>
    <thead>
      <tr>
        <th></th>
        <th></th>
        ...
      </tr>
    </thead>
    <tfooter>
      <tr>
        <td></td>
        <td></td>
        ...
      </tr>
    </tfooter>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        ...
      </tr>
      <tr>
        <td></td>
        <td></td>
        ...
      </tr>
    </tbody>
  </table> */

  const table = document.createElement("table");
  table.setAttribute("border", "1px solid black");
  const caption = document.createElement("caption");
  const txtCap = document.createTextNode(captionText);

  caption.appendChild(txtCap);
  table.appendChild(caption);
  table.appendChild(hacerTHead(cabecera));
  table.appendChild(hacerTBody(array));

  return table;

  function hacerTHead(cabecera) {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    cabecera.forEach(c => {
      let th = document.createElement("th");
      let txtTh = document.createTextNode(c);
      th.appendChild(txtTh);
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    return thead;
  }

  function hacerTBody(array) {
    const tbody = document.createElement("tbody");

    array.forEach(fila => {
      const tr = document.createElement("tr");
      fila.forEach(dato => {
        const td = document.createElement("td");
        const txtTd = document.createTextNode(dato);
        td.appendChild(txtTd);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
}

function crearNodoConTexto(tipoNodo, textoNodo) {
  const nodo = document.createElement(tipoNodo);
  const texto = documnet.createTextNode(textoNodo);
  return nodo.appendChild(texto);
}



//realizarTabla(cabecera.map(registro => registro.toUpperCase()), resultado, "TABLA DE PAÍSES");

/* campo1 | campo2 | campo3
-----------------------------
   4      | 23     | 143    
-----------------------------
   88     | 9      | 5    
*/

function ordenarPorCampo(matriz, campo, cabecera, asc = true) {
  let numCampo = cabecera.findIndex(ele => ele === campo);
  if (asc) {
    matriz.sort((a, b) => a[numCampo] > b[numCampo] ? 1 : -1);
  } else {
    matriz.sort((a, b) => a[numCampo] > b[numCampo] ? -1 : 1);
  }
  
  
  
}

function arrDeObj(arrays, cabecera) {
  function aObjeto(array) {
    return array.reduce((acc, valor, i) => {
      acc[cabecera[i]] = valor;
      return acc;
    }, {});
  }
  return arrays.map(linea => aObjeto(linea));
}
// console.dir(ordenarPorCampo(resultado, 1));
// const arrObj = arrDeObj(resultado, cabecera);
// console.dir(arrObj);
