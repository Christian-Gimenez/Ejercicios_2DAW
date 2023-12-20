function Persona(nombre, año) {
  this.nombre = nombre;
  this.año = año;
}

Persona.comprobarAño = function(a) {
  if(año > new Date().getFullYear()) {
    consosle.log("Error: año posterior al anterior.");
  }
}

Persona.prototype.edad = function() {
  return new Date().getFullYear() - this.año;
}


// const p = new Persona("Ana", 2001);

// Persona.prototype.edad = function() {
//   return new Date().getFullYear() + this.año;
// }

// function Estudiante(nombre, año, grado) {
//   Persona.call(this, nombre, año);
//   this.grado = grado;
// }
//