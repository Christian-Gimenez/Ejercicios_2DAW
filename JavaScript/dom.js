//NODE metodos
//getElementByName -> dinamico
//querySelectorAll -> estático
//Trabajar con NodeList
///let nodesArray = Array.from(nodeList);
let nodesArray = [...nodeList];

//HTMLElement metodos, trabajar con HTMLCollection
//let elementsArray = Array.from(HTMLCollection); 
let elementsArray = [...HTMLCollection];

//document
document.createElement()
document.createTextNode()

//prop element
innerHTML
outerHTML
textContent
innerText
OuterText
firstElementChild
lastElementChild
previousElementChild
children

//metodos Element
document.insertAdjacentHTML()

//Seleccionar por atributo id
document.getElementById("nombre_id");
document.querySelector();

//Seleccionar por el atributo name
document.getElementsByName("nombre"); //Array de nodos
document.querySelectorAll();

//Seleccionar por el tipo de etiqueta
document.getElementsByTagName("p");
document.querySelectorAll();

//Seleccionar por el por clase CSS
document.getElementsByClassName("nombre_clase1 nombre_clase2");

//Seleccionar por el por coincidencia de selector CSS
document.querySelector(".nombre_clase");
document.querySelector("#id_elemento");
document.querySelectorAll("div > ul + li");
document.querySelectorAll("p, img");
document.querySelectorAll(".nombre_clase");

//matches para saber si algun elemento cumple X regla CSS
if(nodo.matches(".miClase")) {/*True o false*/};