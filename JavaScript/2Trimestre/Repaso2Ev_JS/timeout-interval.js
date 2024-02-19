document.addEventListener("keyup", function (event) {
  let id = 0;
  switch (event.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      let count = parseInt(event.key);
      id = setInterval(function () {
        console.log(count);
        if (count === 1) {
          clearInterval(id);
          setTimeout(function () {
            crearCaja(`Creado con ${event.key}s de retraso`);
          }, 1000);
        }
        count--;
      }, 1000);
      break;
    default:
      console.log("keyCode: " + event.keyCode);
      console.log("charCode: " + event.charCode);
      console.log("code: " + event.code);
      console.log("key: " + event.key);
      break;
  }
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function crearCaja(texto) {
  const MIN = 100;
  const MAX = 500;
  const bordes = ["solid", "dashed", "inset", "outset"];
  const MAX_HEX = parseInt("ffffff", 16);
  const borrar = document.querySelector("div");
  if (borrar) { borrar.parentElement.removeChild(borrar); }

  const cajaNueva = document.createElement("div");
  cajaNueva.innerText = texto;
  cajaNueva.style.display = "flex";
  cajaNueva.style.alignItems = "center";
  cajaNueva.style.justifyContent = "center";
  cajaNueva.style.fontSize = "16px";
  cajaNueva.style.fontWeight = "bold";
  const tamRandom = random(MIN, MAX) + "px";
  cajaNueva.style.width = tamRandom;
  cajaNueva.style.height = tamRandom;
  cajaNueva.style.borderRadius = random(0, 50) + "%";

  const hex = random(0, MAX_HEX).toString(16).padStart(6, "0");
  cajaNueva.style.backgroundColor = `#${hex}`;

  const hexB = random(0, MAX_HEX).toString(16).padStart(6, "0");
  cajaNueva.style.border = `${random(1, 5)}px ${bordes[random(0, 3)]} #${hexB}`;

  document.body.appendChild(cajaNueva);

}