function login() {
  const formLogin = document.createElement("form");
  formLogin.setAttribute("method", "GET");
  formLogin.setAttribute("action", "");
  
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "email");
  inputEmail.setAttribute("required", "");
  inputEmail.setAttribute("pattern", "^[\w]{1,}[@]{1}[\w]{3,}[\\.][\w]{2,3}$");
  const labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.innerText = "Email: ";

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "password");
  inputPassword.setAttribute("required", "");
  inputPassword.setAttribute("pattern", "^[\w\d]{5,}[\S]$");
  const labelPassword = document.createElement("label");
  labelPassword.setAttribute("for", "password");
  labelPassword.innerText = "Contraseña: ";

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Iniciar Sesión");

  formLogin.appendChild(labelEmail);
  formLogin.appendChild(inputEmail);
  formLogin.appendChild(labelPassword);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(submit);

  return formLogin;
}
function register() {
  const formRegister = document.createElement("form");
  formRegister.setAttribute("method", "GET");
  formRegister.setAttribute("action", "");

  const inputNombre = document.createElement("input");
  inputNombre.setAttribute("type", "text");
  inputNombre.setAttribute("id", "nombre");
  inputNombre.setAttribute("required", "");
  inputNombre.setAttribute("pattern", "^[\S][a-zA-Z]{2,}[\S]$");
  const labelNombre = document.createElement("label");
  labelNombre.setAttribute("for", "nombre");
  labelNombre.innerText = "Nombre: ";

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "email");
  inputEmail.setAttribute("required", "");
  inputEmail.setAttribute("pattern", "^[\w]{1,}[@]{1}[\w]{3,}[\\.][\w]{2,3}$");
  const labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.innerText = "Email: ";

  const inputPassword1 = document.createElement("input");
  inputPassword1.setAttribute("type", "password");
  inputPassword1.setAttribute("id", "password1");
  inputPassword1.setAttribute("required", "");
  inputPassword1.setAttribute("pattern", "^[\w\d]{5,}[\S]$");
  const labelPassword1 = document.createElement("label");
  labelPassword1.setAttribute("for", "password1");
  labelPassword1.innerText = "Contraseña: ";

  const inputPassword2 = document.createElement("input");
  inputPassword2.setAttribute("type", "password");
  inputPassword2.setAttribute("id", "password2");
  inputPassword2.setAttribute("required", "");
  inputPassword2.setAttribute("pattern", "^[\w\d]{5,}[\S]$");
  const labelPassword2 = document.createElement("label");
  labelPassword2.setAttribute("for", "password2");
  labelPassword2.innerText = "Contraseña: ";

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Iniciar Sesión");

  formRegister.appendChild(labelNombre);
  formRegister.appendChild(inputNombre);
  formRegister.appendChild(labelEmail);
  formRegister.appendChild(inputEmail);
  formRegister.appendChild(labelPassword1);
  formRegister.appendChild(inputPassword1);
  formRegister.appendChild(labelPassword2);
  formRegister.appendChild(inputPassword2);
  formRegister.appendChild(submit);

  return formRegister;
}

const formRegister = register();
formRegister.addEventListener("invalid", function(event) {
  event.preventDefault();
})
formRegister.addEventListener("submit", function(event) {
 
  // const password1 = document.querySelector("form > input[type=password]:first-child");
  // const password2 = document.querySelector("form > input[type=password]:last-child");
  if(!event.target.checkValidity()) {
    event.preventDefault();
    const validos = document.querySelectorAll("input:not(input[type=submit]):valid");
    validos.forEach(valido =>  {
      valido.style.border = "1px solid green";
    });
    const noValidos = document.querySelectorAll("input:not(input[type=submit]):invalid")
    noValidos.forEach(noValido =>  {
      noValido.style.border = "1px solid red";
      noValido.setCustomValidity("Error: " + noValido.validationMessage)
      noValido.setAttribute("title", noValido.validationMessage);
    });
  }
})
document.body.appendChild(formRegister);
