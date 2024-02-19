export function User(nombre, password, email) {
  this.nombre = nombre; //string
  this.password = password; //string
  this.email = email; //string
}

export function AdminUser(nombre, password, email, permisosRoot = true) {
  User.call(this, nombre, password, email)
  this.permisosRoot = permisosRoot; //bool
}

export function StandardUser(nombre, password, email, puntuacion) {
  User.call(this, nombre, password, email);
  this.puntuacion = puntuacion; //Date
}

AdminUser.prototype = Object.create(User.prototype);
AdminUser.prototype.constructor = AdminUser;
StandardUser.prototype = Object.create(User.prototype);
StandardUser.prototype.constructor = StandardUser;
