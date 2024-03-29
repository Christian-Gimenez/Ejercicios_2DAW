(function () {
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
      static COLOR_MAX_DEC = 16777215; //#ffffff

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
        this.#radio = (NumAleatorio.generar(0, 1) === 0) ? 0 : 50; //Cuadrado=0% - Circulo=50%
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
        let resto = 6 - color.length;
        color = color.padStart(resto, "0");
        // while (color.length < 6) {
        //   color += "0";
        // }
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

    class Juego {
      #figura;
      #tiempoInicial;
      #tiempoFinal;

      constructor(selectorBotones, selectorFigura, selectorTReaccion, selectorTMedio) {
        this.botones = document.querySelectorAll(selectorBotones);
        this.spanTReaccion = document.querySelector(selectorTReaccion);
        this.spanTMedio = document.querySelector(selectorTMedio);
        this.pararJuego = true;
        this.selectorFigura = selectorFigura;
        this.figura = this.selectorFigura;
        //Eventos botones
        this.botones[0].addEventListener("click", (evento) => this.comenzarJuego(evento));
        this.botones[1].addEventListener("click", (evento) => this.terminarJuego(evento));

        this.tiemposRegistrados = [];
        this.tiempoMedio = 0;
        //Para que no pierda el this en la llamda de eventos y se puedan añadir/eliminar los mismos
        this.eventoClickFigura = this.eventoClickFigura.bind(this);
      }

      toggleBotones() {
        this.botones[0].classList.toggle("oculto");
        this.botones[1].classList.toggle("oculto");

      }
      comenzarJuego(evento) {
        this.pararJuego = false;
        this.toggleBotones();
        if (this.spanTReaccion.parentElement.classList.contains("oculto")) {
          this.spanTReaccion.parentElement.classList.toggle("oculto");
          this.spanTMedio.parentElement.classList.toggle("oculto");
        }

        this.iteracionJuego();

      }

      eventoClickFigura(evento) {
        this.figura.caja.classList.toggle("oculto");
        this.tiempoFinal = new Date();
        const tiempo = this.registrarTiempo();
        this.spanTReaccion.textContent = tiempo;
        this.figura.caja.removeEventListener("click", this.eventoClickFigura);

        setTimeout(() => { this.iteracionJuego() }, NumAleatorio.generar(0, 2500));
      }

      terminarJuego(evento) {
        this.toggleBotones();
        this.spanTReaccion.parentElement.classList.toggle("oculto");
        this.spanTMedio.parentElement.classList.toggle("oculto");
        this.calcularTiempoMedio();
        this.spanTMedio.textContent = this.tiempoMedio;
        this.pararJuego = true;
        this.figura.caja.classList.toggle("oculto");
        console.log("Juego finalizado. Los tiempos son: ");
        console.dir(this.tiemposRegistrados);
      }

      iteracionJuego() {
        if (!this.pararJuego) {
          this.figura.caja.classList.toggle("oculto");
          this.figura = this.selectorFigura;
          this.tiempoInicial = new Date();
          this.figura.caja.addEventListener("click", this.eventoClickFigura);
        }
      }

      registrarTiempo() {
        console.log(this.tiempoFinal.getTime() + " - " + this.tiempoInicial.getTime())
        let tiempoRealizado = this.tiempoFinal.getTime() - this.tiempoInicial.getTime();
        tiempoRealizado = tiempoRealizado / 1000; //Transformamos de ms a seg
        this.tiemposRegistrados.push(tiempoRealizado);
        console.log("Tiempo: " + tiempoRealizado + " seg");
        return tiempoRealizado;
      }

      calcularTiempoMedio() {
        if (this.tiemposRegistrados.length > 0) {
          let suma = 0;
          this.tiemposRegistrados.forEach(e => suma += e);
          this.tiempoMedio = (suma / this.tiemposRegistrados.length).toFixed(3);
        }
      }

      set figura(selectorFigura) {
        this.#figura = new Figura(selectorFigura);
      }

      get figura() {
        return this.#figura;
      }

      set tiempoInicial(date) {
        this.#tiempoInicial = date;
      }

      get tiempoInicial() {
        return this.#tiempoInicial;
      }

      set tiempoFinal(date) {
        this.#tiempoFinal = date;
      }

      get tiempoFinal() {
        return this.#tiempoFinal;
      }
    }
    //EJECUCIÓN PRINCIPAL
    // const figura = new Figura("#caja");
    // figura.caja.classList.toggle("oculto");
    const juego = new Juego("header > button", "#caja", "header > p:nth-of-type(2) > span", "header > p:nth-of-type(3) > span");
  });
})();