"use strict";

//clase de funcionalidades estáticas
class Utilidades {
  //Genera número aleatorio entre uno y otro (ambos inclusive)
  static numeroAleatorio(desde, hasta) {
    return Math.floor(Math.random() (hasta - desde + 1) + desde);
  }

  //Genera una fecha 1 mes en el futuro + 1 día más
  static fechaUnMesEnElFuturo() {
    const fecha = new Date();
    fecha.setMonth(fecha.getMonth() + 1);
    fecha.setDate(fecha.getDate() + 1);
    return fecha;
  }
}

//Clase Tren(id:string, sinDev:number, conDev:number, normal:number)
class Tren {
  //Constantes estáticas de Tren
  static NUM_ASIENTOS = 90; //number
  static MAX_PORCENTAJE_DEVOLUCION = 0.5;//number

  //Métodos estáticos Tren
  //Genera un id:string partiendo de un dia:Date y una horaSalida:string
  static generarID(dia, horaSalida) {
    return dia.getDate() + horaSalida.replace(":", "");
  }

  //Genera un Tren partiendo de un dia:Date y una horaSalida:string
  static generarTren(dia, horaSalida) {
    //Establece el límite de la oferta (la mitad del total de NUM_ASIENTOS)
    const LIMITE_OFERTA = Tren.NUM_ASIENTOS * Tren.MAX_PORCENTAJE_DEVOLUCION;

    const id = Tren.generarID(dia, horaSalida); //string
    const sinDev = Utilidades.numeroAleatorio(0, LIMITE_OFERTA);//number
    const conDev = Utilidades.numeroAleatorio(0, LIMITE_OFERTA - sinDev);//number
    const normal = Utilidades.numeroAleatorio(0, LIMITE_OFERTA);//number
    return new Tren(id, sinDev, conDev, normal);
  }

  constructor(id, sinDev, conDev, normal) {
    /*Si sinDeb + conDev es + 50%, devolvemos (para que sea undefined el obj Tren) */
    if(sinDev + conDev > (Tren.NUM_ASIENTOS * Tren.MAX_PORCENTAJE_DEVOLUCION)) return;
    /*Si todos los args tienen valor, ahora si construimos el Tren */
    if(id && sinDev && conDev && normal) {
      this.id = id;//string
      this.asientosTotales = Tren.NUM_ASIENTOS;//number
      this.asientosOcupados = {//obj
        sinDev, conDev, normal //todos number
      }
    }
  }
}

//Clase Semana(fechaInicio:Date, fechaFin:Date, horarios:Horario[])
class Semana {
  //Constantes estáticas de Semana
  static NUM_DIAS = 7;
  static SABADO = 6;
  static DOMINGO = 0;

  constructor(fechaInicio) {
    this.fechaInicio = new Date();
    this.fechaFinal = new Date(fechaInicio.getDate());
    this.fechaFinal.setDate(this.fechaFinal.getDate() + Semana.NUM_DIAS);
    this.horarios = [];
  }

  //Método publico de instancia
  rellenarHorarios(fechaInicio, fechaFinal) {
    //Creamos un array de Date y lo rellenamos, desde fechaInicio hasta fechaFinal
    const dias = [];
    for(let i = fechaInicio; i < fechaFinal; fechaInicio.setDate(fechaInicio.getDate() + 1)) {
      dias.push(new Date(fechaInicio.getTime()));
    }

    //Rellenamos la prop []Horario de Semana con un array de objs Horario
    this.horarios = dias.map(dia => {
      //Creamos array vacío Horario en cada iteración, que será el horario de un sólo día
      const horarioDia = [];
      //Sacamos el día de la semana en cada iteración para luego rellenar dependiendo de si es sábado, domingo u otro
      const diaSemana = dia.getDay();

      //Rellenamos el array de Horario con las salidas normales ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];
      horarioDia = Horario.SALIDAS.map(horaSalida => {
        return Horario.generarHorario(dia, horaSalida);
      });

      //Pero si es sábado, agregamos 08:40 al principio
      if(diaSemana == Semana.SABADO) {
        horarioDia.unshift(Horario.generarHorario(dia, "08:40"));
      }

      //Y si es domingo, agregamos 20:10 como penúltimo
      if(diaSemana == Semana.DOMINGO) {
        horarioDia.splice((Horario.SALIDAS.length -2), 0,
                          Horario.generarHorario(dia, "20:10"));
      }
      return horarioDia;
    });
  }

}

//Clase Horario(tren:Tren, hora:Date)
class Horario {
  //Constante estática de clase, array:string de las horas de salida
  static SALIDAS = ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];

  constructor(tren, horaSalida) {
    this.tren = tren; //Tren
    this.horaSalida = horaSalida; //string
  }


  //Método público de instancia
  //Genera un obj tipo Horario partiendo de un dia:Date y salida:string
  generarHorario(dia, horaSalida) {
    //Generamos un Tren basandonos en el dia:Date y salida:string
    const tren = Tren.generarTren(dia, horaSalida);
    //Generamos un horario introduciendole el Tren anterior y la salida:string
    return new Horario(tren, horaSalida);
  }

}