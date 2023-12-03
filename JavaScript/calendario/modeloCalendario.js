"use strict";

export function modeloCalendario() {

  const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
    "Junio", "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"];
  const CABECERA_SEMANA = ["Sem", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  function fechaAObjeto(fecha) {
    return {
      anio: [fecha.getFullYear()],
      mes: [MESES[fecha.getMonth()]],
      dias: [matrizDiasDelMes(fecha)],
      fecha_date: [fecha]
    }
  }

  /* const calendario = {
  //   mes: "",
  //   anio: 2000,
  //   dias: [ 5 filas x 8 cols
              [{Sem: 44}, {Lun: x}, {Mar: x}, {Mie: 1}, {Jue: 2}, {Vie: 3}, {Sab: 4}, {Dom: 5}],
              [{Sem: 45}, {Lun: 6}, {Mar: 7}, {Mie: 8}, {Jue: 9}, {Vie: 10}, {Sab: 11}, {Dom: 12}],
              [{Sem: 46}, {Lun: 13}, {Mar: 14}, {Mie: 15}, {Jue: 16}, {Vie: 17}, {Sab: 18}, {Dom: 19}],
              [{Sem: -47}, {Lun: 20}, {Mar: 21}, {Mie: 22}, {Jue: 23}, {Vie: 24}, {Sab: 25}, {Dom: 26}],
              [{Sem: -48}, {Lun: 27}, {Mar: 28}, {Mie: 29}, {Jue: 30}, {Vie: x}, {Sab: x}, {Dom: x}]
                        ]
   };*/
  function matrizDiasDelMes(fecha) {
    //Clonamos la fecha
    const clonFecha = new Date(fecha);

    //Establecemos el dia a 1 para que empiece desde 0
    clonFecha.setDate(1);

    //Averiguamos en que día empieza la semana (Lun, Mar, Mie, Jue, Vie, Sab o Dom)
    const primerDiaDelMes = getDiaSemana(clonFecha.getDay());

    //Obtenemos un array 1D con los dias del mes: [ {Mie: 1}, {Jue: 2}, {Vie: 3}, etc ]
    const arrDias = arrayDiasDelMes();

    //Obtenemos la matriz 2D final por defecto (5 filas x 8 cols):
    const matrizDiasPorDefecto = inicializarMatriz();

    const matrizDiasResultado = meterDatosMatriz([...arrDias]);

    function meterDatosMatriz(clonArrDias) {
      // const primerDiaDelMes = Object.keys(arrDias[0])[0];
      //Cuando coincidan el primer dia del mes
      let indiceInicial = empezarLaMatrizEn();
      return matrizDiasPorDefecto.map((arrSemana) => {
        arrSemana.map((objDia, i) => {
          if(i >= indiceInicial && i < clonArrDias.length) {
            objDia[Object.keys(objDia)[0]] = clonArrDias.shift();
          }
          return objDia;
        });
      });
    }

    function empezarLaMatrizEn() {
      return matrizPorDefecto.findIndex(fila => primerDiaDelMes === Object.keys(fila[0])[0]);
    }

    function inicializarMatriz() {
      const matriz = [];
      //Va de 1 a 5 porque son las semanas
      for(let i = 1; i <= 5; i++) {
        matriz.push([]);
        //Va de 0 a 7 para que funcione getDiaSemana() 7 y 0 son Domingo
        for(let j = 0; j < 8; j++) {
          (j == 0)? matriz[i-1].push({"Sem": -1}) : matriz[i-1].push({[getDiaSemana(j)] : -1});
        }
      }
      return matriz;
    }

    /*[ {Mie: 1}, {Jue: 2}, {Vie: 3}, {Sab: 4}, {Dom: 5}, {Lun: 6}, {Mar: 7},
        {Mie: 8}, {Jue: 9}, {Vie: 10}, {Sab: 11}, {Dom: 12},{Lun: 13}, {Mar: 14},
        {Mie: 15}, {Jue: 16}, {Vie: 17}, {Sab: 18}, {Dom: 19}, {Lun: 20}, {Mar: 21},
        {Mie: 22}, {Jue: 23}, {Vie: 24}, {Sab: 25}, {Dom: 26}, {Lun: 27}, {Mar: 28}, 
        {Mie: 29}, {Jue: 30}
      ] */
    function arrayDiasDelMes() {
      // const arrResultado = [];
      // const clonFecha = new Date(fecha);
      // clonFecha.setDate(1);
      do {
        const diaObj = { [clonFecha.getDate()] : [getDiaSemana(clonFecha.getDay())] };
        arrResultado.push(diaObj);
        clonFecha.setDate(clonFecha.getDate() + 1);
        if (clonFecha.getMonth() != fecha.getMonth()) break;
      } while (true);
      return arrResultado;
    }
  }
  

  function getDiaSemana(dia) {
    let diaSemana = "";
    switch (dia) {
      case 0://Domingo
      case 7://Domingo
        diaSemana = CABECERA_SEMANA[7];
        break;
      case 1://Lunes
      case 2://Martes
      case 3://Miércoles
      case 4://Jueves
      case 5://Viernes
      case 6://Sábado
        diaSemana = CABECERA_SEMANA[dia];
        break;
      default:
        diaSemana = "";
        break;
    }
    return diaSemana;
  }

  function getNumSemana() {
    return -1;
  }


}