"use strict";

//Obj de funcionalidades estáticas
const Utilidades = {};

//Genera número aleatorio entre uno y otro (ambos inclusive)
Utilidades.numeroAleatorio = function(desde, hasta) {
  return Math.floor(Math.random() * (hasta - desde + 1) + desde);
}

//Genera una fecha 1 mes en el futuro + 1 día más
Utilidades.fechaUnMesEnElFuturo = function() {
  const fecha = new Date();
  fecha.setMonth(fecha.getMonth() + 1);
  fecha.setDate(fecha.getDate() + 1);
  return fecha
}

//id:string, sinDev:number, conDev:number, normal:number
function Tren(id, sinDev, conDev, normal) {
  /*Si sinDeb + conDev es + 50%, devolvemos (para que sea undefined el obj Tren) */
  if(sinDev + conDev > (Tren.NUM_ASIENTOS * Tren.MAX_PORCENTAJE_DEVOLUCION)) return;
  /*Si todos los args tienen valor, ahora si construimos el Tren */
  if(id && sinDev && conDev && normal) {
    this.id = id; //string
    this.asientosTotales = Tren.NUM_ASIENTOS; //number
    this.asientosOcupados = { //obj
      //ES6. En Es5 sería id: valor, sinDev: valor, conDev: valor 
      sinDev, //number
      conDev, //number
      normal //number
    }
  }
}

//Constantes estáticas de Tren
Tren.NUM_ASIENTOS = 90; //number
Tren.MAX_PORCENTAJE_DEVOLUCION = 0.5; //number

//Métodos estáticos Tren
//Genera un id:string partiendo de un dia:Date y una horaSalida:string
Tren.generarID = function(dia, horaSalida) {
  return dia.getDate() + horaSalida.replace(":", "");
}

//Genera un Tren partiendo de un dia:Date y una horaSalida:string
Tren.generarTren = function(dia, horaSalida) {
  //Establece el límite de la oferta (la mitad del total de NUM_ASIENTOS)
  const LIMITE_OFERTA = Tren.NUM_ASIENTOS * Tren.MAX_PORCENTAJE_DEVOLUCION;

  const id = Tren.generarID(dia, horaSalida); //string
  const sinDev = Utilidades.numeroAleatorio(0, LIMITE_OFERTA); //number
  const conDev = Utilidades.numeroAleatorio(0, (LIMITE_OFERTA - sinDev)); //number
  const normal = Utilidades.numeroAleatorio(0, LIMITE_OFERTA); //number
  return new Tren(id, sinDev, conDev, normal);
}
/*Solución Jose generarTren
function generarTren(dia, hora) {
      const LIMITE_OFERTA = Tren.NUM_ASIENTOS * Tren.CONDICION_DEV;
      const sinDev = generarAleatorio(0, LIMITE_OFERTA);
      dia = dia.getDate().toString.padStart(2,0);
      return new Tren(dia + hora.substr(0,2) + hora.substr(3), 
        sinDev,
        generarAleatorio(0, LIMITE_OFERTA - sinDev),
        generarAleatorio(0, LIMITE_OFERTA));
    }
*/


//fechaInicio:Date, fechaFin:Date, horarios:Horario[]
function Semana(fechaInicio) {
  this.fechaInicio = new Date(fechaInicio);
  this.fechaFin = new Date(fechaInicio);
  this.fechaFin.setDate(fechaInicio.getDate() + Semana.NUM_DIAS);
  this.horarios = [];
  /*Implementación de Jose
  this.fechaFin = new Date(fechaInicio.getTime() + Semana.NUM_DIAS * Semana.UN_DIA) */
}

//Constantes estáticas de Semana
Semana.NUM_DIAS = 7;
Semana.SABADO = 6;
Semana.DOMINGO = 0;
//Semana.UN_DIA = 24 * 60 * 60 * 1000; Milisegundos

//Métodos publicos de instancia
Semana.prototype.rellenarHorarios = function(fechaInicio, fechaFinal){
  //Creamos un array de Date y lo rellenamos, desde fechaInicio hasta fechaFinal
  const dias = [];
  for(let i = fechaInicio; i < fechaFinal; fechaInicio.setDate(fechaInicio.getDate() + 1)) {
    dias.push(new Date(fechaInicio.getTime()));
  }

  //Rellenamos la prop []Horario de Semana con un array de objs Horario
  this.horarios = dias.map(dia => { //Iteramos el array de dias Date
    //Creamos array vacío Horario en cada iteración, que será el horario de un sólo día
    const horarioDia = []; 
    //Sacamos el día de la semana en cada iteración para luego rellenar dependiendo de si es sábado, domingo u otro
    const diaSemana = dia.getDay(); 

    //Rellenamos el array de Horario con las salidas normales ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];
    horarioDia = Horario.SALIDAS.map(salida => {
      return Horario.generarHorario(dia, salida);
    });

    //Pero si es sábado, agregamos 08:40 al principio
    if(diaSemana == Semana.SABADO) {
      horarioDia.unshift(Horario.generarHorario(dia, '08:40'));
    }

    //Y si es domingo, agregamos 20:10 como penúltimo
    if(diaSemana == Semana.DOMINGO) {
      horarioDia.splice((Horario.SALIDAS.length - 2), 0, Horario.generarHorario(dia, '20:10'));
    }
    return horarioDia;
  });
}

//tren:Tren, hora:string
function Horario(tren, hora) {
  this.tren = tren; //Tren
  this.hora = hora; //string
}

//Genera un obj tipo Horario partiendo de un dia:Date y salida:string
Horario.generarHorario = function(dia, salida) {
  //Generamos un Tren basandonos en el dia:Date y salida:string
  const tren = Tren.generarTren(dia, salida);
  //Generamos un horario introduciendole el Tren anterior y la salida:string
  const horario = new Horario(tren, salida);
  return horario;
}

Horario.SALIDAS = ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];


