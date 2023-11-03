"use strict";

let numero:number = 2;
let cadena:string = "Hola";
console.log(cadena, numero);

function sumar(num1:number, num2:number) {
  return num1 + num2;
}

class Perro {
  private patas:number;
  private nombre:string;
  private color:string;
  private raza:string;

  constructor(patas:number, nombre:string, color:string, raza:string) {
    this.patas = patas;
    this.nombre = nombre;
    this.color = color;
    this.raza = raza;
  }

  set setPatas(patas:number) {
    this.patas = patas;
  }


}