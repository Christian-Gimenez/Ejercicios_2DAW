"use strict";

/**SE PIDE:
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
 * genFechaFutura():
 *    return un mes en el futuro a partir del mañana
 */


function Tren(id, salida, sinDevolucion, conDevolucion, normal) {
  /**Métodos privados de instancia */
  const HORARIO = ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];
  const TOTAL_ASIENTOS = 90;
  this.id = id;
  this.salida = salida;
  this.sinDevolucion = sinDevolucion;
  this.conDevolucion = conDevolucion;
  this.normal = normal;

  this.rellenarTren = function(dia, horario) {
    this.id = dia.getDate() + horarioSinPuntos(horario);
    this.salida = horario;
    let asientosRestantes = (TOTAL_ASIENTOS * 0.5);
    do {
      this.sinDevolucion = numeroAleatorio(1, asientosRestantes);
    } while(this.sinDevolucion <= asientosRestantes);
    asientosRestantes = asientosRestantes - sinDevolucion;
    this.conDevolucion = asientosRestantes;
    this.normal = (TOTAL_ASIENTOS * 0.5) + (TOTAL_ASIENTOS - asientosRestantes);
    return this;
  }

  this.horarioSinPuntos = function(horario) {
    return resultString = horario.replace(":", "");
  }

  this.numeroAleatorio = function(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**Método que calcula un mes en el futuro a partir de 'mañana' */
  this.unMesFuturo = function() {
    const fecha = new Date();
    fecha.setMonth(fecha.getMonth() + 1);
    fecha.setDate(fecha.getDate() + 1);
    return fecha;
  }
}

Tren.prototype.rellenarDias(fechaInicio, fechaFinal) {
  return [].map();
}
