"use strict";

//Vanilla JavaScript (imperativo)

/* Con un solo boton, sin reutilizar, haríamos:
//Recuperamos el boton
const button = document.querySelector("button");

//Al hacer click en el boton, ejecutamos una función
//Escuchamos el evento click
button.addEventListener("click", function() {
  //Recuperar la id del atributo HTML
  const id = button.getAttribute("data-id");

  //Llamar a un servicio para actualizar si me gusta
  //toggleLike(id)
  if(button.classList.contains("liked")) {
    button.classList.remove("liked");
    button.innerText = "Me gusta";
  } else {
    button.classList.add("liked");
    button.innerText = "Quitar me gusta";
  }
});*/

//Recuperamos los botones
const buttons = document.querySelectorAll("button");

//Hacer esto para cada botón
buttons.forEach(button => {
  //Al hacer click en el boton, ejecutamos una función
  //Escuchamos el evento click
  button.addEventListener("click", function () {
    //Recuperar la id del atributo HTML
    const id = button.getAttribute("data-id");

    //Llamar a un servicio para actualizar si me gusta
    //toggleLike(id)
    if (button.classList.contains("liked")) {
      button.classList.remove("liked");
      button.innerText = "Me gusta";
    } else {
      button.classList.add("liked");
      button.innerText = "Quitar me gusta";
    }
  });
});