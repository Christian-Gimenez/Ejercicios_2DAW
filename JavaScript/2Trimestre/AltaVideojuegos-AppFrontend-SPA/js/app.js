"use strict";

/**App para dar de alta videojuegos Full-FRONTEND
 * Iniciar sesión en la APP:
 * 1-Nombre usuario admin (text)
 * 2-Password (password)
 * Comprobar en LocalStorage si el usuario existe
 * 
 * Si accede, mostrar formulario dar de alta videojuegos:
 * 1-ID videojuego (text)
 *    (empieza por #, seguido de numeros y letras mayus, no puede empezar ni acabar por espacios en blanco)
 * 2-Nombre videojuego (text)
 *    (transformar la 1ª letra en mayus, el resto en minus)
 * 3-Plataforma (select > optgroup > option)
 *    (lista ya establecida)
 * 4-Categoria (datalist > option)(lista ya establecido, por defecto RPG)
 *    (RPG | Acción | Beat'em up | Shooter | Lucha | Deporte | Plataformas
 *    | Aventura | Survival | Terror | Simulación | Arcade | Otro)
 * 5-En stock (checkbox)
 *    *-Unidades (number)
 *    *-Precio por ud (number)
 *    *-Nuevo || Semi-nuevo (radio)
 * 6-Puntuación (range 1 - 10) con un span para la puntuación seleccionada
 * 7-URL sitio oficial (url)
 * 8-Email contacto fabricante (email)
 * 9-Fecha de lanzamiento (date)
 * 10-Guardar videojuego (submit) se valida

 * Guardar los datos en LocalStorage si el ID no existe en la DB, previamente habiendo validado todos los datos
   Con validación nativa HTML, previniendo el submit hasta que estén validados, cuando todo esté OK guardarlo.

   Mostrar los juegos actuales:
  Boton para mostrar los videojuegos en una table

  Darle estilos con CSS Grid y Flexbox
 */

class AltaVideojuego {
  constructor() {
    this.id = crearInput({
      type: "text", name: "ID", pattern: "^[#][\dA-Z\S]{4,}$", label: "ID Videojuego",
      title: "El ID Debe empezar por '#' y tener 4 o más caracteres válidos (Números o letras mayus)"
    });
    this.nombre = crearInput({
      type: "text", name: "Nombre Videojuego", pattern: "^[\S].[\S]$", label: "Nombre del videojuego",
      title: "El nombre del videojuego debe tener al menos 3 caracteres, ni empezar/acabar por espacios en blanco."
    });
    this.plataforma = crearSelect({
      id: "plataforma", label: "Plataforma", list: "plataformas", grupos: {
        Atari: ["Atari 2600", "Atari 5200", "Atari 7800"],
        Nintendo: ["NES", "SNES", "Game Boy", "Game Boy Color", "Nintendo 64",
          "Nintendo GameCube", "Game Boy Advance", "Nintendo DS", "Nintendo Wii",
          "Nintendo 3DS", "Nintendo Wii U", "Nintendo Switch"],
        Sega: ["Sega Mastersystem", "Sega MegaDrive/Genesis", "Sega Game Gear", "Sega Saturn", "Sega Dreamcast"],
        Playstation: ["Playstation 1", "Playstation 2", "PSP", "Playstation 3", "Playstation Vita", "Playstation 4", "Playstation 5"],
        XBOX: ["XBOX", "XBOX 360", "XBOX ONE", "XBOX Serie X"]
      }
    });

    this.categoria = crearDatalist();
  }

  // crearEtiqueta(etiqueta, tipo = "none", patron = "", label = "", opciones = []) {
  //   const div = document.createElement("div");
  //   const tag = document.createElement(etiqueta);

  //   if(etiqueta === "input") {
  //     const label = document.createElement()
  //     tag.setAttribute("type", tipo);

  //     if(patron !== "") { tag.setAttribute("pattern", patron); }
  //     if(tipo === "number") { 
  //       tag.setAttribute("min", opciones[0]);
  //       tag.setAttribute("max", opciones[1]);
  //     }
  //   }
  // }
}