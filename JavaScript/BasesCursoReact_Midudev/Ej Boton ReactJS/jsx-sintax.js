const myName = "Christian";
//Podemos insertar valores de variable poniendolas entre {}
<h1>Hola, {myName}</h1>

//Entre las {} podemos poner expresiones (devuelvan algo), pero no declaraciones
const element = <strong>Numero aleatorio. {Math.random()}</strong>;

//Hay que poner los atrb como en HTML pero en camelCase
<button tabIndex="1"></button>

//Evita inyección de código, Meteria el response como una cadena y fallaría el XSS
const response = "<script>alert('hola');</script>";
const elem = <h1>{response}</h1> 
