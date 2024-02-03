"use strict";

class Formulario {
  constructor(titulo, tipo = "register") {
    this.form;
    this.titulo = titulo;
    if (tipo == "register") {
      this.form = this.crearFormulario("Crear una cuenta", [
        { type: "text", id: "correo", label: "Nombre" },
        { type: "text", id: "contrasena", label: "Apellidos", divClass: "text-control" },
        { type: "email", id: "correo", label: "Correo electrónico", divClass: "text-control" },
        { type: "password", id: "contrasena", label: "Contraseña", divClass: "text-control" },
        { type: "password", id: "contrasena2", label: "Repite Contraseña", divClass: "text-control" },
        { type: "checkbox", id: "condiciones", label: "Acepto las condiciones" },
      ]);
    } else { //login
      this.form = this.crearFormulario("Iniciar sesión", [
        { type: "email", id: "correo", label: "Correo" },
        { type: "password", id: "contraseña", label: "Contraseña" },
        { type: "checkbox", id: "recordarme", label: "Recordarme" },
      ]);
    }
  }

  crearInput(tipo, id, txtLabel, divClass) {
    const div = document.createElement("div");
    if (divClass) { div.setAttribute("class", divClass) };
    const input = document.createElement("input");
    input.setAttribute("type", tipo);
    input.setAttribute("id", id);
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = txtLabel;

    //Unir elementos
    div.appendChild(input);
    div.appendChild(label);
    return div;
  }

  crearFormulario(tipoForm, arrObj) {
    const form = document.createElement("form");
    form.setAttribute("action", "#");

    arrObj.forEach(obj => {
      const divInput = this.crearInput(obj["type"], obj["id"], obj["label"], obj["divClass"]);
      form.appendChild(divInput);
    });
    const divButton = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = tipoForm;
    divButton.appendChild(button);
    form.appendChild(divButton);

    return form;
  }
}

class App {
  constructor(selectorDiv, formulario, titulo, alternativa) {
    this.div = document.querySelector(selectorDiv);
    this.section = document.createElement("section");

    this.h3 = document.createElement("h3");
    this.h3.textContent = titulo;
    this.p = document.createElement("p");
    this.p.textContent = "o ";
    this.a = document.createElement("a");
    this.p.appendChild(this.a);
    this.section.appendChild(this.h3);
    this.section.appendChild(this.p);

    this.formulario;

    this.setFormulario(formulario, titulo, alternativa);

    this.section.appendChild(this.formulario);
    this.div.appendChild(this.section);
  }

  setFormulario(nuevoFormulario, titulo, alternativa) {
    if (this.formulario) { this.section.removeChild(this.formulario); }
    this.h3.textContent = titulo;
    this.a.textContent = alternativa;
    this.formulario = nuevoFormulario;
    this.section.appendChild(this.formulario);
  }

}


//EJECUCIÓN PRINCIPAL
const formRegistro = new Formulario("Iniciar sesión", "register")
const formInicioSesion = new Formulario("Crear una cuenta", "login");
const app = new App("div", formRegistro.form, formRegistro.titulo, formInicioSesion.titulo);
app.a.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.dir(evento);
  if (app.formulario.titulo === formRegistro.titulo) {
    app.setFormulario(formRegistro.form, formRegistro.titulo, formInicioSesion.titulo);

  } else {
    app.setFormulario(formInicioSesion.form, formInicioSesion.titulo, formRegistro.titulo);

  }
});