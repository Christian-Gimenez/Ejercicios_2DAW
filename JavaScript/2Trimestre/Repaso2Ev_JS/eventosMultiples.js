const main = crearNodo("main", null, [
  crearNodo("div", null, "1 Soy un div"),
  crearNodo("div", null, "2 Soy un div"),
  crearNodo("div", null, "3 Soy un div"),
  crearNodo("div", null, "4 Soy un div"),
  crearNodo("div", null, "5 Soy un div"),
]);

main.addEventListener("click", function(event) {
  document.querySelectorAll("div").forEach(div => div.style.backgroundColor = "white");
  event.target.style.backgroundColor = "green";
}, true);


document.body.appendChild(main);

function crearNodo(tipo, attr = null, contenido) {
  const elem = document.createElement(tipo);
  //Establecer atributos HTML
  if(attr) {
    for(let clave in attr) {
      elem.setAttribute(clave, attr[clave]);
    }
  }
  //Apendar hijos/texto
  if(typeof contenido == "string") {
    elem.appendChild(document.createTextNode(contenido));
  } else if(contenido instanceof HTMLElement) {
    elem.appendChild(contenido);
  } else if (Array.isArray(contenido)) {
    contenido.forEach(e => elem.appendChild(e));
  }

  return elem;
}