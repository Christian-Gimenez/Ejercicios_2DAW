const URL_BUSCAR_PAIS = "https://restcountries.com/v3.1/name/";

//MAIN
const form = crearNodo("form", {action: "", method: "get"}, [
  crearNodo("label", {for: "buscar"}, "Buscar país:"),
  crearNodo("input", {type: "search", id: "buscar", name: "buscar"}),
  crearNodo("input", {type: "submit", value: "Buscar"}),
]);
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const buscador = document.querySelector("input[type=search]");
  console.log(buscador.value);
  pedirJSON(URL_BUSCAR_PAIS + buscador.value, crearDragNDrop, mostrarError);
});
document.body.appendChild(form);


function crearNodo(tipo, arrAttr = null, contenido) {
  const padre = document.createElement(tipo);
  //Establecer atributos HTML
  if(arrAttr) {
    for(let clave in arrAttr) {
      padre.setAttribute(clave, arrAttr[clave]);
    }
  }
  //Apendar hijos/texto
  if(typeof contenido == "string") {
    padre.appendChild(document.createTextNode(contenido));
  } else if(contenido instanceof HTMLElement) {
    padre.appendChild(contenido);
  } else if (Array.isArray(contenido)) {
    contenido.forEach(e => padre.appendChild(e));
  }
  return padre;
}

function crearDragNDrop(pais) {
  const bandera = crearNodo("img", {src: pais[0].flags.png, alt: pais[0].name.common, id: pais[0].cioc})
  const cajaInicial = crearNodo("div", {draggable: "true", id: "cajaInicial", class: "dragNdrop"}, bandera);
  const cajaFinal = crearNodo("div", {draggable: "true", id: "cajaFinal", class: "dragNdrop"})
  const contenedor = crearNodo("div", {class: "contenedor"}, [
    cajaInicial,
    cajaFinal
  ]);

  // cajaInicial.addEventListener("dragstart", e => console.log("dragstart"));
  // cajaInicial.addEventListener("dragend", e => console.log("dragend"));
  // cajaInicial.addEventListener("dragenter", e => console.log("dragenter"));
  // cajaInicial.addEventListener("dragleave", e => console.log("dragleave"));
  // cajaInicial.addEventListener("dragover", e => console.log("dragover"));
  // cajaInicial.addEventListener("drop", e => console.log("drop"));
  
  // cajaFinal.addEventListener("dragstart", e => console.log("dragstart"));
  // cajaFinal.addEventListener("dragend", e => console.log("dragend"));
  // cajaFinal.addEventListener("dragenter", e => console.log("dragenter"));
  // cajaFinal.addEventListener("dragleave", e => console.log("dragleave"));
  // cajaFinal.addEventListener("dragover", e => console.log("dragover"));
  // cajaFinal.addEventListener("drop", e => console.log("drop"));

  cajaInicial.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/plain", bandera.id);
  });
  cajaInicial.addEventListener("dragover", function(e) {
    // e.preventDefault();
  });
  cajaInicial.addEventListener("drop", function(e) {
    // e.preventDefault();
    const idArrastrado = e.dataTransfer.getData("text/plain");
    const elemArrastrado = document.getElementById(idArrastrado);
    cajaInicial.appendChild(elemArrastrado);
  });
  cajaFinal.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/plain", bandera.id);
  })
  cajaFinal.addEventListener("dragover", function(e) {
    // e.preventDefault();
  })
  cajaFinal.addEventListener("drop", function(e) {
    // e.preventDefault();
    const idArrastrado = e.dataTransfer.getData("text/plain");
    const elemArrastrado = document.getElementById(idArrastrado);
    cajaFinal.appendChild(elemArrastrado);
  })

  document.body.appendChild(contenedor);
}

function pedirJSON(url, ok, error) {
  const ajax = new XMLHttpRequest();

  ajax.addEventListener("readystatechange", function(e) {

    if(ajax.readyState === 4) {
      if(ajax.status >= 200 && ajax.status < 300) {
        ok(JSON.parse(ajax.responseText));
      } else {
        error("Error: " + ajax.status + ". " + ajax.statusText);
      }
    }
  });

  ajax.open("GET", url);
  ajax.send();
}

function mostrarJSON(obj) {
  console.dir(obj);
}

function mostrarError(statusText) {
  console.error(statusText);
}