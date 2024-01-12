"use strict";

/**1ª PARTE
 * Array de Objetos Tren (props: id, salida, sinDevolucion, conDevolucion, normal)
 * id -> string: día (13) + hora sin puntos (0941)
 * salida -> string: (09:41)
 * sinDevolucion -> number (random: conDevolucion+sinDevolucion = 50% de 90 asientos)
 * conDevolucion -> number (random: conDevolucion+sinDevolucion = 50% de 90 asientos)
 * normal -> number (random: 50% de 90 asientos)
 * Si falta algún arg -> obj con TODO undefined.
 * 
 * Constante array horario: ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];
 * if (dia == sabado) -> +tren 08:40
 * if (dia == domingo) -> +tren 20:10
 * 
 * Metodos:
 * rellenarDias(fechaInicio, fechaFinal): generará para cada día (rango de ambos args inclusive)
 *    los objetos Tren de ese día con su correspondiente horario.
 *    return array de Trenes (10 salvo sabados y domingos, que serán 11)
 *    fechaInicio > hoy. Si no [] vacío
 *    fechaFinal >= fechaInicio. Si no [] vacío
 *    rellenarDias llamará a rellenarTren(dia, horario)
 * 
 * rellenarTren(dia, horario): 
 *    return Tren con los campos. si falta arg return undefined
 * 
 * genNumAleatorio(num1, num2):
 *    return int random entre ambos valores incluidos
 * 
 * unMesFuturo():
 *    return un mes en el futuro a partir del mañana
 */


function Tren(id, salida, sinDevolucion, conDevolucion, normal, fecha) {
  /**Métodos privados de instancia */
  this.id = id;
  this.salida = salida;
  this.sinDevolucion = sinDevolucion;
  this.conDevolucion = conDevolucion;
  this.normal = normal;
  this.fecha = fecha;
}

//Constantes de objeto
Tren.HORARIO_NORMAL = ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];
Tren.HORARIO_SABADO = ['08:40', '09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];
Tren.HORARIO_DOMINGO = ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '20:10', '21:40'];
Tren.TOTAL_ASIENTOS = 90;
/**Método que calcula un mes en el futuro a partir de 'mañana' */

Tren.unMesFuturo = function () {
  const fecha = new Date();
  fecha.setMonth(fecha.getMonth() + 1);
  fecha.setDate(fecha.getDate() + 1);
  return fecha;
}

Tren.prototype.rellenarTren = function (dia, horario) {
  this.id = dia.getDate() + this.horarioSinPuntos(horario);
  this.salida = horario;
  let asientosRestantes = (Tren.TOTAL_ASIENTOS * 0.5);
  do {
    this.sinDevolucion = this.numeroAleatorio(1, asientosRestantes);
  } while (this.sinDevolucion > asientosRestantes);
  asientosRestantes = asientosRestantes - this.sinDevolucion;
  do {
    this.conDevolucion = this.numeroAleatorio(1, asientosRestantes);
  } while(this.conDevolucion > asientosRestantes);
  asientosRestantes = asientosRestantes - this.conDevolucion;
  this.normal = (Tren.TOTAL_ASIENTOS * 0.5) + (asientosRestantes);
  this.fecha = dia;
  return this;
}

Tren.prototype.horarioSinPuntos = function (horario) {
  return horario.replace(":", "");
}

Tren.prototype.numeroAleatorio = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


Tren.rellenarDias = function (fechaInicio, fechaFinal) {
  if(fechaInicio > fechaFinal) return Tren.rellenarDias(fechaFinal, fechaInicio);
  let fecha = new Date(fechaInicio);
  let trenes = [];
  while (fecha <= fechaFinal) {
    switch (fecha.getDay()) {
      case 6://Sabados
        trenes.push(Tren.HORARIO_SABADO.map(hora => {
          let tren = new Tren();
          tren.rellenarTren(fecha, hora);
          return tren;
        }))
        break;
      case 0://Domingos
        trenes.push(Tren.HORARIO_DOMINGO.map(hora => {
          let tren = new Tren();
          tren.rellenarTren(fecha, hora);
          return tren;
        }))
        break;
      default://Resto de días
        trenes.push(Tren.HORARIO_NORMAL.map(hora => {
          let tren = new Tren();
          tren.rellenarTren(fecha, hora);
          return tren;
        }));
        break;
    }
    fecha.setDate(fecha.getDate() + 1);
  }
  return trenes;
}

/**2ª PARTE */
/**
 * <div>
 *  <div>
 *    <h2>DÍAS</h2>
 *    <button><button> * 10 -> Al pulsar, generar/sustituir tabla de la fecha
 *  </div>
 * </div>
 * 
 * Tabla generada:
 * <table>
 *  <caption>Trenes del dia $</caption>
 *  <thead>
  *   <tr>
  *     <th>id</th>
*   *   <th>salida</th>
*   *   <th>sinDevolucion</th>
*   *   <th>conDevolucion</th>
*   *   <th>normal</th>
  *   </tr>
 *  </thead>
 *  <tbody>
 *    <tr> * numTrenes del dia
 *      <td>130940</td>
 *      <td>09:40</td>
 *      <td>9</td>
 *      <td>23</td>
 *      <td>35</td>
 *    </tr>
 *     ...
 *  </tbody>
 *  <tfooter>
 *    <tr>
 *      <td>Número de trenes: $</td>
 *    </tr>
 *  </tfooter>
 * </table>
 */
function TablaHorarios(arrTrenes) {
  this.arrTrenes = arrTrenes;
}

TablaHorarios.prototype.numeroDeTrenes = function() {
 return 10;
}

TablaHorarios.prototype.generarTabla = function() {
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  const txtCap = document.createTextNode("Trenes del día " + TablaHorarios.numeroDeTrenes());


}

