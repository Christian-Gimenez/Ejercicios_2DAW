"use strict";


document.addEventListener("DOMContentLoaded", (event) => {
  //Obj de funcionalidades estáticas
  const Utilidades = {};

  //Genera número aleatorio entre uno y otro (ambos inclusive)
  Utilidades.numeroAleatorio = function (desde, hasta) {
    return desde + Math.floor(Math.random() * (hasta - desde + 1));
  }

  //Genera una fecha 1 mes en el futuro + 1 día más
  Utilidades.fechaUnMesEnElFuturo = function () {
    const fecha = new Date();
    fecha.setMonth(fecha.getMonth() + 1);
    fecha.setDate(fecha.getDate() + 1);
    return fecha
  }

  Utilidades.arrayHorariosDia = function (semana, dia) {
    let diaInicio = semana.fechaInicio.getDate();
    let horariosDeUnDia = semana.horarios.find((horario, i) => {
      return i === dia - diaInicio;
    });
    let arrayResultado = [];

    horariosDeUnDia.reduce((_, horario) => {
      //depuración
      // if (horario.tren.asientosOcupados === undefined) {}
      let obj = {};
      try {
        obj.id = horario.tren.id;
        obj.salida = horario.hora;
        obj.sinDevolucion = horario.tren.asientosOcupados.sinDev;
        obj.conDevolucion = horario.tren.asientosOcupados.conDev;
        obj.normal = horario.tren.asientosOcupados.normal;
        arrayResultado.push(obj);
        console.log("Tren correcto. Datos: ");
        console.dir(horario);
        return obj;
      } catch(error) {
        console.log("ERROR: Hubo un tren UNDEFINED. Datos: ");
        console.dir(horario);
        obj.id = horario.tren.id;
        obj.salida = horario.hora;
        arrayResultado.push(obj);
        return obj;
      }
    },);

    console.dir(arrayResultado);
    return arrayResultado;
    /**
     * horarios [
     *  dia: {id, salida, sinDev, conDev, normal},
     *  dia: {id, salida, sinDev, conDev, normal},
     *  dia: {id, salida, sinDev, conDev, normal},
     * ]
     */
  }

  //id:string, sinDev:number, conDev:number, normal:number
  function Tren(id, sinDev, conDev, normal) {
    /*Si sinDeb + conDev es + 50%, devolvemos (para que sea undefined el obj Tren) */
    if (sinDev + conDev > (Tren.NUM_ASIENTOS * Tren.MAX_PORCENTAJE_DEVOLUCION)) return;
    /*Si todos los args tienen valor, ahora si construimos el Tren */
    if (id && sinDev && conDev && normal) {
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
  Tren.generarID = function (dia, horaSalida) {
    return dia.getDate() + horaSalida.replace(":", "");
  }

  //Genera un Tren partiendo de un dia:Date y una horaSalida:string
  Tren.generarTren = function (dia, horaSalida) {
    //Establece el límite de la oferta (la mitad del total de NUM_ASIENTOS)
    const LIMITE_OFERTA = Tren.NUM_ASIENTOS * Tren.MAX_PORCENTAJE_DEVOLUCION;

    const id = Tren.generarID(dia, horaSalida); //string
    const sinDev = Utilidades.numeroAleatorio(0, LIMITE_OFERTA); //number
    const conDev = Utilidades.numeroAleatorio(0, (LIMITE_OFERTA - sinDev)); //number
    const normal = Utilidades.numeroAleatorio(0, LIMITE_OFERTA); //number
    const tren = new Tren(id, sinDev, conDev, normal);
    return tren;
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
    this.fechaFinal = new Date(fechaInicio);
    this.fechaFinal.setDate(this.fechaFinal.getDate() + Semana.NUM_DIAS);
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
  Semana.prototype.rellenarHorarios = function () {
    let fechInicio = new Date(this.fechaInicio);
    let fechFin = new Date(this.fechaFinal);
    //Creamos un array de Date y lo rellenamos, desde fechaInicio hasta fechaFin
    const dias = [];
    for (let i = fechInicio; i < fechFin; i.setDate(i.getDate() + 1)) {
      dias.push(new Date(fechInicio.getTime()));
    }

    //Rellenamos la prop []Horario de Semana con un array de objs Horario
    this.horarios = dias.map(dia => { //Iteramos el array de dias Date
      //Creamos array vacío Horario en cada iteración, que será el horario de un sólo día
      let horarioDia = [];
      //Sacamos el día de la semana en cada iteración para luego rellenar dependiendo de si es sábado, domingo u otro
      const diaSemana = dia.getDay();

      //Rellenamos el array de Horario con las salidas normales ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];
      horarioDia = Horario.SALIDAS.map(salida => {
        return Horario.generarHorario(dia, salida);
      });

      //Pero si es sábado, agregamos 08:40 al principio
      if (diaSemana == Semana.SABADO) {
        horarioDia.unshift(Horario.generarHorario(dia, '08:40'));
      }

      //Y si es domingo, agregamos 20:10 como penúltimo
      if (diaSemana == Semana.DOMINGO) {
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
  Horario.generarHorario = function (dia, salida) {
    //Generamos un Tren basandonos en el dia:Date y salida:string
    const tren = Tren.generarTren(dia, salida);
    //Generamos un horario introduciendole el Tren anterior y la salida:string
    const horario = new Horario(tren, salida);
    return horario;
  }

  Horario.SALIDAS = ['09:40', '10:40', '12:20', '13:10', '15:10', '16:40', '17:40', '18:40', '19:30', '21:40'];

  /*Impresión de elementos HTML */
  /**div
   *    div
   *      h2 DIAS
   *      button * 10 (genTabla)
   *    table
   *      caption
   *      thead
   *        tr
   *          td "Texto fijo" + "nºDía" (ej: "Trenes del día 13")
   *      tbody
   *        tr
   *          td 
   *        tr
   *          td
   *      tfoot
   *        tr
   *          td "Texto fijo" + "nºTrenes" (ej: "Número de trenes: 10")
   */
  function GenerarHTML() { }

  GenerarHTML.crearNodo = function (tipo, txt = false) {
    const nodo = document.createElement(tipo);
    if (txt) {
      const nodoTxt = document.createTextNode(txt);
      nodo.appendChild(nodoTxt);
    }
    return nodo;
  }

  GenerarHTML.crearBotones = function (titulo, arrayBotones) {
    const div = GenerarHTML.crearNodo("div");
    div.classList.add("contenedor-col");
    const h2 = GenerarHTML.crearNodo("h2", titulo);
    div.appendChild(h2);
    const div2 = GenerarHTML.crearNodo("div");
    div2.classList.add("contenedor-row");
    arrayBotones.forEach(dato => {
      const button = GenerarHTML.crearNodo("button", dato);
      button.classList.add("btn");
      div2.appendChild(button);
    });
    div.appendChild(div2);
    return div;
  }

  GenerarHTML.crearTabla = function (titulo, arrCabecera, arrObjDatos, pie) {
    const table = GenerarHTML.crearNodo("table");
    const caption = GenerarHTML.crearNodo("caption", titulo);
    const thead = crearTHead(arrCabecera);
    const tbody = crearTBody(arrObjDatos);
    const tfoot = crearTFoot(pie, arrCabecera.length);
    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);
    return table;

    function crearTHead(arr1D) {
      const thead = GenerarHTML.crearNodo("thead");
      const tr = GenerarHTML.crearNodo("tr");
      arr1D.forEach(dato => {
        const th = GenerarHTML.crearNodo("th", dato);
        tr.appendChild(th);
      });
      thead.appendChild(tr);
      return thead;
    }

    function crearTBody(arr2D) {
      const tbody = GenerarHTML.crearNodo("tbody");
      arr2D.forEach(obj => {
        const tr = GenerarHTML.crearNodo("tr");
        for (let key in obj) {
          const td = GenerarHTML.crearNodo("td", obj[key]);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      });
      return tbody;

      // this.id;
      // this.salida;
      // this.sinDevolucion;
      // this.conDevolucion;
      // this.normal;
    }

    function crearTFoot(txt, columnas) {
      const tfoot = GenerarHTML.crearNodo("tfoot");
      const tr = GenerarHTML.crearNodo("tr");
      const td = GenerarHTML.crearNodo("td", txt);
      td.setAttribute("colspan", columnas);
      tr.appendChild(td);
      tfoot.appendChild(tr);
      return tfoot;
    }
  }
  /**Ejecución App */
  // const semana = new Semana(new Date);
  // semana.rellenarHorarios();
  // console.dir(semana);
  // let semana = new Semana(Utilidades.fechaUnMesEnElFuturo());
  let semana = new Semana(new Date());
  semana.rellenarHorarios();
  const div = GenerarHTML.crearNodo("div");
  div.classList.add("contenedor-col");
  const dias = GenerarHTML.crearBotones("DÍAS", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  div.appendChild(dias);

  console.dir(semana);

  let horariosHoy = Utilidades.arrayHorariosDia(semana, 20);
  const cabecera = Object.keys(horariosHoy[0]);
  const tabla = GenerarHTML.crearTabla("Trenes del día " + semana.fechaInicio.getDate(),
    cabecera, horariosHoy, "Número de trenes: " + horariosHoy.length);
  div.appendChild(tabla);
  document.body.appendChild(div);
  // dias.addEventListener("click", )
});


