"use strict";

const resultado = csvAMatriz(datos);


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
//console.dir(resultado);

function extraerCabecera(matriz) {
  return matriz.shift();
}

const cabecera = extraerCabecera(resultado);
//console.dir(resultado);

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


function realizarTabla(cabecera, matriz, caption) {
  let miTabla = document.getElementById("tablaPaises");
  let resultado = "";

  resultado = "<table border='1px solid black'>";
  resultado += "<caption><h1>" + caption + "</h1></caption>";

  resultado += "<tr>";
  cabecera.forEach(registro => resultado += "<th>" + registro + "</th>");
  resultado += "</tr>";

  matriz.forEach(fila => {
    resultado += "<tr>";
    fila.forEach(registro => resultado += "<td>" + registro + "</td>");
    resultado += "</tr>";
  });
  resultado += "</table>";
  //Printeamos todo
  miTabla.innerHTML = resultado;
}

realizarTabla(cabecera, resultado, "TABLA DE PAISES");


//realizarTabla(cabecera.map(registro => registro.toUpperCase()), resultado, "TABLA DE PAÍSES");

/* campo1 | campo2 | campo3
-----------------------------
   4      | 23     | 143    
-----------------------------
   88     | 9      | 5    
*/

function ordenarPorCampo(matriz, campo) {
  return matriz.sort((a, b) => a[campo] > b[campo] ? 1 : -1);
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
console.dir(ordenarPorCampo(resultado, 1));
const arrObj = arrDeObj(resultado, cabecera);
console.dir(arrObj);
