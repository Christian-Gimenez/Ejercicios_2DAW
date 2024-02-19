//Location y Screen
/*(function () {
  //Saber info pantalla
  console.log("Altura disponible: " + screen.availHeight);
  console.log("Anchura disponible: " + screen.availWidth);
  console.log("Altura total: " + screen.height);
  console.log("Anchura total: " + screen.width);
  console.log("Hash de la pagina (ahora no hay nada despues de #)" + location.hash);
  console.log("Host: " + location.host);
  console.log("Hostname: " + location.hostname);
  console.log("URL Completa: " + location.href);
  console.log("Port: " + location.port);
  console.log("Protocolo: " + location.protocol);
  console.log("Consulta después del query param ?: " + location.search);

  // location.assign("http://ejemplo-no-funciona.com");
  // location.replace("http://borra-remplaza-ejemplo-anterior.com");

  const reload = document.createElement("button");
  reload.innerText = "Reload";
  reload.addEventListener("click", function (event) {
    location.reload(true);
    console.log("Recargaste la página!");
    // location.assign("http://recargaste-la-pagina.com/?le_diste_a_reload=true");
  })
  document.body.appendChild(reload);
})();*/

//History
// const btnActual = document.createElement("button");
// btnActual.innerText = "Conocer la URL actual";
// btnActual.addEventListener("click", function(event) {
//   console.log(history.current);
// });

// const btnNext = document.createElement("button");
// btnNext.innerText = "Ir hacia adelante en el historial";
// btnNext.addEventListener("click", function(event) {
//   console.log(history.next);
//   history.forward();
// });

// const btnPrevious = document.createElement("button");
// btnPrevious.innerText = "Ir hacia atrás en el historial";
// btnPrevious.addEventListener("click", function(event) {
//   console.log(history.previous);
//   history.back();
// });

// const btnLength = document.createElement("button");
// btnLength.innerText = "Conocer longitud del historial";
// btnLength.addEventListener("click", function(event) {
//   console.log(history.length);
// });

// document.body.appendChild(btnPrevious);
// document.body.appendChild(btnActual);
// document.body.appendChild(btnNext);
// document.body.appendChild(btnLength);


//Geolocalizacion


// Mover y redimensionar ventanas con open()/moveBy()/resizeTo(),etc.
// (function(){
//   const ventana = open("", "", "width=500,height=500");
//   // ventana.resizeTo(500, 500);
//   ventana.moveTo(500, 500);
//   ventana.focus();

//   ventana.addEventListener("keydown", function(event) {
//     // Comprobar tecla
//     // console.log(event.code);
//     ventana.console.log("Pulsaste: " + event.code);

//     switch(event.code) {
//       case "ArrowUp":
//         moverArriba();
//         break;
//       case "ArrowDown":
//         moverAbajo();
//         break;
//       case "ArrowLeft":
//         moverIzquierda();
//         break;
//       case "ArrowRight":
//         moverDerecha();
//         break;
//       default:
//         break;
//     }

//   });

//   function moverArriba() { 
//     ventana.moveBy(0, -10);
//   }
//   function moverAbajo() {
//     ventana.moveBy(0, 10);
//   }
//   function moverDerecha() {
//     ventana.moveBy(10, 0);
//   }
//   function moverIzquierda() {
//     ventana.moveBy(-10, 0);
//   }

// })()
