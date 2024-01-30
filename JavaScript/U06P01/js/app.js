(function(){
  document.addEventListener("DOMContentLoaded", () => {

    class Figura {
      //props privadas
      #ancho;
      #alto;
      #color;
      #radio;
      #coordenadas;

      static MIN_ANCHO = 50;
      static MAX_ANCHO = 150;
      static MIN_TOP = 200;
      static MAX_TOP = 500;
      static MIN_LEFT = 100;
      static MAX_LEFT = 600;
      static COLOR_MAX_DEC = 16777215;

      constructor(selectorCaja) {
        this.#ancho = NumAleatorio.generar(Figura.MIN_ANCHO, Figura.MAX_ANCHO);
        this.#alto = this.#ancho;
        this.#coordenadas = {
          //Eje X (Left)
          left: NumAleatorio.generar(Figura.MIN_LEFT, Figura.MAX_LEFT),
          //Eje Y (Top)
          top: NumAleatorio.generar(Figura.MIN_TOP, Figura.MAX_TOP)
        };
        this.#color = this.#generarColor();
        this.#radio = (NumAleatorio.generar(0, 1) === 0)? 0 : 50; //Cuadrado=0% - Circulo=50%
        this.caja = document.querySelector(selectorCaja);
        this.caja.style.backgroundColor = `#${this.#color}`;
        this.caja.style.width = `${this.#ancho}px`;
        this.caja.style.height = `${this.#alto}px`;
        this.caja.style.left = `${this.#coordenadas.left}px`;
        this.caja.style.top = `${this.#coordenadas.top}px`;
        this.caja.style.borderRadius = `${this.#radio}%`;
        this.caja.style.borderBox = "1px solid black";
        
      }

      #generarColor() {
        let color = NumAleatorio.generar(0, Figura.COLOR_MAX_DEC).toString(16);
        while(color.length < 6) {
          color += "0";
        }
        return color;
      }

      get ancho() {
        return this.#ancho;
      }

      get alto() {
        return this.#alto;
      }
    }

    class NumAleatorio {
      static generar(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    }

    class AreaDeJuego {
      static MIN_Y = 200;
      static MAX_Y = 500;
      static MIN_X = 100;
      static MIN_Y = 600;
      constructor(selectorArea) {
        this.area = document.querySelector(selectorArea);
      }
    }

    //EJECUCIÓN PRINCIPAL
    const figura = new Figura("#caja");
    figura.caja.classList.toggle("oculto");
  });
})();