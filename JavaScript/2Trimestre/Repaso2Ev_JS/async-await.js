const URL = "https://restcountries.com/v3.1/name/";

pedirJSON(URL + "moroccco", mostrarJSON, mostrarError);

// function pedirJSON(URL, ok, error) {
//   fetch(URL)
//   .then(respuesta => respuesta.json())
//   .then(json => ok(json))
//   .catch(err => error(`Error: ${err.status} -> ${err.statusText}`));
// }

// async function pedirJSON(URL, ok, error) {
//   const peticion = await fetch(URL)
//     const respuesta = await peticion.json();
//     if(peticion.status >= 200 && peticion.status < 300) {
//       ok(respuesta);
//     } else {
//       error(`Error: ${peticion.status} -> ${peticion.statusText}`)
//     }
// }

async function pedirJSON(URL, ok, error) {
  try {
    const respuesta = await fetch(URL);
    const json = await respuesta.json();

    if(respuesta.status >= 200 && respuesta.status < 300) {
      ok(json);
    } 
  } catch (err) {
    error(`Error: ${err.status} -> ${err.statusText}`)
  }
}

function crearNodo(tipo, arrAtt = null, contenido) {
  const nodo = document.createElement(tipo);

  //Attr
  if (arrAtt) {
    for (let clave in arrAtt) {
      nodo.setAttribute(clave, arrAtt[clave]);
    }
  }
  //Cont
  if (typeof contenido == "string") {
    nodo.appendChild(document.createTextNode(contenido));
  } else if (contenido instanceof HTMLElement) {
    nodo.appendChild(contenido);
  } else if (Array.isArray(contenido)) {
    contenido.forEach(elem => nodo.appendChild(elem));
  }

  return nodo;
}

function mostrarJSON(json) {
  console.log(json);
  const contenedor = crearNodo("figure", null, [
    //json[0].name.comnon //nombre
    crearNodo("figcaption", null, json[0].name.common),
    //json[0].flags.png //bandera
    crearNodo("img", { alt: json[0].cioc, src: json[0].flags.png }, null)
  ]);

  document.body.appendChild(contenedor);
}

function mostrarError(errorText) {
  console.error(errorText);
}