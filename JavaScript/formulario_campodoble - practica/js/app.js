"use strict";

class Formulario {
  static REG_EXP_EMAIL = "^[a-zA-Z\d\._]{1,}@[a-zA-Z\d\._]{1,}\.[a-zA-Z]{2,3}$";
  static REG_EXP_PASSWORD = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%&=!¡]).{6,}$";
  static REG_EXP_NOMBRE = "^[^\s][a-zA-Z\s]{1,}[^\s]$";

  constructor(titulo, tipo = "register") {
    this.form;
    this.titulo = titulo;
    if (tipo == "register") {
      this.form = this.crearFormulario("Crear una cuenta", [
        { type: "text", id: "nombre", label: "Nombre" },
        { type: "text", id: "apellidos", label: "Apellidos", divClass: "text-control" },
        { type: "email", id: "correo", label: "Correo electrónico", divClass: "text-control" },
        { type: "password", id: "contrasena1", label: "Contraseña", divClass: "text-control" },
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

    if(tipo === "email") {input.setAttribute("pattern", Formulario.REG_EXP_EMAIL)}
    if(tipo === "password") {input.setAttribute("pattern", Formulario.REG_EXP_PASSWORD)}
    if(tipo === "text") {input.setAttribute("pattern", Formulario.REG_EXP_NOMBRE)}

    //Unir elementos
    div.appendChild(input);
    div.appendChild(label);

    //Añadir eventos de validación de campos
    const validador = new ValidarInput(input);
    if (tipo === "email") { validador.email(); }
    if (tipo === "password") { validador.password(); }
    if (tipo === "text") { validador.nombre(); }

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

class ValidarInput {
  constructor(input) {
    this.input = input;
    //Empieza por letra/digito/./_ seguido de @, luego cualquier letra/digito/./_ seguido de "." y acaba con 2-3 letras 
    this.regExpEmail = /^[a-zA-Z\d\._]{1,}@[a-zA-Z\d\._]{1,}\.[a-zA-Z]{2,3}$/;
    //Lookaheads que comprueban, sin consumir chars, que haya 1minus, 1mayus, 1digit y 1$%&=!¡ -> min 6 char long total
    this.regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%&=!¡]).{6,}$/;
    //Que no empiece por espacios \s. Que luego tenga letras y espacios (min 3) y no acabe en espacio.
    this.regExpNombre = /^[^\s][a-zA-Z\s]{1,}[^\s]$/;
  }

  email() {
    const self = this;
    this.input.addEventListener("input", function (e) {
      const email = self.input.value;
      if (self.regExpEmail.test(email)) {
        self.input.title = "Email correcto :)";
        self.input.dataset.isValid = 'true';
      } else {
        self.input.title = "¡Email inválido!";
        self.input.dataset.isValid = 'false';
      }
    })
  }

  password() {
    const self = this;
    this.input.addEventListener("input", function (e) {
      const password = self.input.value;
      if (self.regExpPassword.test(password)) {
        self.input.title = "Contraseña válida :)";
        self.input.dataset.isValid = 'true';
      } else {
        self.input.title = "¡Contraseña inválida!";
        self.input.dataset.isValid = 'false';
      }
    });
  }

  nombre(campo = "Nombre") {
    const self = this;
    this.input.addEventListener("input", function (e) {
      const nombre = self.input.value;
      if (self.regExpNombre.test(nombre)) {
        self.input.title = `${campo} correcto :)`;
        self.input.dataset.isValid = 'true';
      } else {
        self.input.title = `¡${campo} incorrecto!`;
        self.input.dataset.isValid = 'false';
      }
    })
  }

  static submit(enviar, registro = "true") {
    enviar.removeEventListener("click", validarFormulario);
    enviar.addEventListener("click", validarFormulario);

    function validarFormulario(e) {
      e.preventDefault();
      let valido = true;
      const inputs = document.querySelectorAll("input:not([type='checkbox'])");
      let valores = {};
      inputs.forEach(input => {
        valores[input.id] = input.value;
        if(!input.dataset.isValid) {valido = false;}
      });

      if(valido) {
        if(registro) {
          console.log("Te registraste correctamente :)");
          localStorage.setItem(valores["correo"], JSON.stringify(valores));
        } else {
          
          console.log("Bienvenido! Iniciaste sesión correctamente :)");
        }
        
      } else {
        console.log("NO SE ENVIA, HAY CAMPOS INVALIDOS");
      }
    }
  }

}


/*RESTRICCIONES
1- Validar el correo con @
   el texto a la izquierda de @ debe empezar por 1 o + letras
   después puede tener digitos/puntos/_
   ignoreCase
   el texto a la der de @ tiene las mismas condiciones que el de la izq
   seguido de un punto y 2-3 letras.
2- Contraseña min 6 chars
   debe tener al menos 1 letra minus, una mayus, un digit y un $%&=!¡
3- Nombre solo letras y " " (pero no " " al final)
   long min 3 char
   Apellido === pero long min 4 char
   
 */

//EJECUCIÓN PRINCIPAL
const formInicioSesion = new Formulario("Iniciar sesión", "login")
const formRegistro = new Formulario("Crear una cuenta", "register");
const app = new App("div", formInicioSesion.form, formInicioSesion.titulo, formRegistro.titulo);

let botonEnviar = document.querySelector("button");
ValidarInput.submit(botonEnviar, false);
app.a.addEventListener("click", function (evento) {
  evento.preventDefault();
  if (app.formulario === formInicioSesion.form) {
    app.setFormulario(formRegistro.form, formRegistro.titulo, formInicioSesion.titulo);
    botonEnviar = document.querySelector("button");
    ValidarInput.submit(botonEnviar, true);
  } else {
    app.setFormulario(formInicioSesion.form, formInicioSesion.titulo, formRegistro.titulo);
    botonEnviar = document.querySelector("button");
    ValidarInput.submit(botonEnviar, false);
  }
});
formInicioSesion.form.addEventListener("keypress", function(e) {
  if(e.target.tagName.toLowerCase() === "input" && e.target.type !== "checkbox") {
    const label = e.target.parentElement.children[1];
    label.style.top = "-26px";
  }
});

formRegistro.form.addEventListener("keypress", function(e) {
  if(e.target.tagName.toLowerCase() === "input" && e.target.type !== "checkbox") {
    const label = e.target.parentElement.children[1];
    label.style.top = "-26px";
  }
});

formInicioSesion.form.addEventListener("input", function(e) {
  if(e.target.tagName.toLowerCase() === "input" && e.target.type !== "checkbox") {
    if(e.target.value === "") {
      const label = e.target.parentElement.children[1];
      label.style.top = "0";
    }
  }
});

formRegistro.form.addEventListener("input", function(e) {
  if(e.target.tagName.toLowerCase() === "input" && e.target.type !== "checkbox") {
    if(e.target.value === "") {
      const label = e.target.parentElement.children[1];
      label.style.top = "0";
    }
  }
});


