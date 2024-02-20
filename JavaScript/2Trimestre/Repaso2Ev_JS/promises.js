const URL = "https://restcountries.com/v3.1/name/spain";
const promesa = new Promise(gestorPromesa);
promesa.then()
function gestorPromesa(ok, error) {

}

function ok(dato) {
  console.dir(dato);
}

function error(error) {
  console.error(error);
}

/*
const ajax = new XMLHttpRequest();

  if(ajax.readyState === 4) {
    if(ajax.status >= 200 && ajas.status < 300) {
      ok(JSON.parse(ajax.responseText));
    } else {
      error(`Error: ${ajax.status} -> ${ajax.statusText}`)
    }
  }

  ajax.open("GET", URL);
  ajax.send(); */