//Intl.NumberFormat
const precios = [12.45, 20.99, 20.95, 9, 0.58, 100.1];
const numeros = [1.12412412, 2124.124151, 92.12110, 12.00001];
const lang = navigator.language || 'es-ES'; //'es-ES'
const optsMoneda = {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2
};
const optsNumero = {
  maximumFractionDigits: 3
}
const formateadorPrecio = new Intl.NumberFormat(lang, optsMoneda);
const preciosFormateados = precios.map(precio => formateadorPrecio.format(precio));
console.log(JSON.stringify(preciosFormateados));
const formateadorNumero = new Intl.NumberFormat(lang, optsNumero);
numeros.sort((a, b) => a - b);
const numerosFormateados = numeros.map(num => formateadorNumero.format(num));
console.log(JSON.stringify(numerosFormateados));

//Intl.DateTimeFormat
const hoy = new Date();
const fechas = [
  new Date().setDate(hoy.getDate() + 1),
  new Date().setMonth(hoy.getMonth() + 1),
  new Date().setFullYear(hoy.getFullYear() + 1)
];
const optsFecha = {
  day : "numeric",
  month : "long",
  year : "numeric"
};
const formateadorFecha = new Intl.DateTimeFormat(lang, optsFecha);
const fechasFormateadas = fechas.map(fecha => formateadorFecha.format(fecha));
console.log(JSON.stringify(fechasFormateadas));


//Intl.Collator
const cadenas = ["bBB", "aaa", "eÉË", "Aaá", "CCC", "ddd"];
const optsCadena = {
  usage: "sort",
  sensitivity: "case"
};
const comparadorCadenas = new Intl.Collator(lang, optsCadena);
const cadenasOrdenadas = cadenas.sort((a, b) => comparadorCadenas.compare(a, b));
console.log(JSON.stringify(cadenasOrdenadas));

//toLocaleString
console.log("toLocaleString:");
const dineroFormateado_toLS = precios.map(precio => precio.toLocaleString(lang, optsMoneda));
console.log(JSON.stringify(dineroFormateado_toLS));
const numerosFormateados_toLS = numeros.map(num => num.toLocaleString(lang, optsNumero));
console.log(JSON.stringify(numerosFormateados_toLS));
const fechasFormateadas_toLS = fechas.map(fecha => fecha.toLocaleString(lang, optsFecha));
console.log(JSON.stringify(fechasFormateadas_toLS));
const cadenasOrdenadas_toLS = cadenas.sort((a, b) => a.localeCompare(b, lang, optsCadena));
console.log(JSON.stringify(cadenasOrdenadas_toLS));