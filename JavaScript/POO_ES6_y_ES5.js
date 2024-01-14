"use strict";

/////////////////////////ES5/////////////////////////
//Funcion constructora padre
function Persona(nombre, fechaNac) {
  //Props publicas
  this.nombre = nombre;
  this.fechaNac = fechaNac;
}

//Funcion constructora hija
function Empleado(nombre, fechaNac, puesto, salario) {
  Persona.call(this, nombre, fechaNac); //Llamamos al constructor del padre
  //Props publicas
  this.puesto = puesto;
  this.salario = salario;

  //Método privado
  let generarNumEmpleado = function() {
    Empleado.addEmpleado();
    return Empleado.empleadosTotales;
  }

  //Props privadas
  let _numeroEmpleado = generarNumEmpleado();
  let _dni;

  //Getter y Setter dni con Object.defineProperties
  Object.defineProperties(this, "dni", {
    get: function() {
      return _dni;
    },
    set: function(nuevoDNI) {
      _dni = nuevoDNI;
    }
  });

  //Getter numeroEmpleado (otra forma de hacerlo)
  this.getNumeroEmpleado = function() {
    return _numeroEmpleado;
  }

  
}

//Hacemos que Empleado herede de Persona
//Ponemos el prototype de Persona a Empleado
Empleado.prototype = Object.create(Persona.prototype);
//Y recuperamos el constructor de Empleado de nuevo
Empleado.prototype.constructor = Empleado;

//Propiedad estática
Empleado.empleadosTotales = 0;

//Método estático
Empleado.addEmpleado = function () {
  Empleado.empleadosTotales++;
}

//Método privado
Empleado.generarNumEmpleado = function() {
  Empleado.addEmpleado();
  return Empleado.empleadosTotales;
}

//Propiedad privada (podria ponerse dentro, pero no se hace porque necesitamos declarar el metodo privado después de la funcion constructora)
Empleado.numeroEmpleado = Empleado.generarNumEmpleado();


/////////////////////////ES6/////////////////////////
class Persona {
  constructor(nombre, fechaNac) {
    this.nombre = nombre;
    this.fechaNac = fechaNac;
  }
}

class Empleado extends Persona {
  //Prop estática
  static empleadosTotales = 0;

    //Props privadas
    #numeroEmpleado;
    #dni;
  
  //Constructor
  constructor(nombre, fechaNac, puesto, salario) {
    //Llamamos al constructor del padre
    super(nombre, fechaNac);
    //Props publicas
    this.puesto = puesto;
    this.salario = salario;
    //Inicializamos la prop privada
    this.#numeroEmpleado = this.#generarNumEmpleado();
  }

  //Método estático
  static addEmpleado() {
    Empleado.empleadosTotales++;
  }

  //Método privado
  #generarNumEmpleado() {
    Empleado.addEmpleado();
    return Empleado.empleadosTotales;
  }

  //Getters y Setters

  get numeroEmpleado() {
    return this.#numeroEmpleado;
  }

  get dni() {
    return this.#dni;
  }

  set dni(nuevoDNI) {
    this.#dni = nuevoDNI;
  }
}