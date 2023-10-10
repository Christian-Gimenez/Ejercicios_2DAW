"use strict";

//Guardamos los id del DOM
const $nombre = document.querySelector("#nombre");
const $descripcion = document.querySelector("#descripcion");
const $precio = document.querySelector("#precio");
const $btnGuardar = document.querySelector("#btnGuardar");

//Cuando se haga click en el botón de guardar
$btnGuardar.onclick = async() => {
  //Extrameos el valor de los elementos del DOM
  const nombre = $nombre.value;
  const descripcion = $descripcion.value;
  const precio = parseFloat($precio.value);
  //Validamos en el frontend los datos, aunque habrá que validarlos en el backend igualmente
  if(!nombre) {
    //alert("Error: Escribe el nombre");
    return Swal.fire({
      icon: "error",
      text: "Escribe el nombre",
      timer: 700 //Ocultar dentro de 0.7 segundos
    });
  }

  if(!descripcion) {
    //alert("Error: Escribe la descripción");
    return Swal.fire({
      icon: "error",
      text: "Escribe la descripción",
      timer: 700 //Ocultar dentro de 0.7 segundos
    });
  }

  if(!precio) {
    //alert("Error: Escribe el precio");
    return Swal.fire({
      icon: "error",
      text: "Escribe el precio",
      timer: 700 //Ocultar dentro de 0.7 segundos
    });
  }

  //El JSON que se mandará al backend de PHP
  const cargaUtil = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio
  };

  //Codificamos el objeto cargaUtil en un JSON
  const cargaUtilCodificada = JSON.stringify(cargaUtil);

  try {
    //Esperamos la respuesta de fetch en crudo, mandando cargaUtilCodificada por POST
    const respuestaRAW = await fetch("guardar_producto.php", {
      method: "POST",
      body: cargaUtilCodificada
    });

    //El servidor nos responderá con JSON
    const respuesta = await respuestaRAW.json();

    //Si obtuvimos respuesta true del backend
    if(respuesta) {
      //Avisamos al user de que se realizó correctamente
      //alert("Producto guardado");
      Swal.fire({
        icon: "success",
        text: "Producto guardado",
        timeR: 700
      });
      //Limpiamos el formulario
      $nombre.value = "";
      $descripcion.value = "";
      $precio.value = "";

    } else {
      //Si hubo error, lo notificamos al user
      //alert("El servidor no envió una respuesta exitosa");
      Swal.fire({
        icon: "error",
        text: "El servidor no envió una respuesta exitosa"
      });
    }
  } catch (e) {
    //En caso de que haya un error en el servidor
    Swal.fire({
      //alert("Error de servidor. Inténtelo de nuevo.\nEl error es: " + e);
      icon: "error",
      title: "Error de servidor",
      text: "Inténtelo de nuevo. el error es: " + e
    });
  }

};