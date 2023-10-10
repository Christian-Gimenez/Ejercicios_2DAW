"use strict";

const $nombre = document.querySelector("#nombre");
const $descripcion = document.querySelector("#descripcion");
const $precio = document.querySelector("#precio");
const $btnGuardar = document.querySelector("#btnGuardar");

//Ponemos una variable global para establecerla al rellenar el form y leerla al enviarlo
let idProducto;

const rellenarFormulario = async () => {
  //Almacenamos la url actual de la pagina
  const urlSearchParams = new URLSearchParams(window.location.search);
  //Recuperamos el id del producto de la url http
  idProducto = urlSearchParams.get("id");//Actualizar el ID global

  //Obtener el producto desde PHP
  const respuestaRAW = await fetch(`./obtener_producto_por_id.php?id=${idProducto}`);
  //El servidor nos devolverá en JSON el producto
  const producto = await respuestaRAW.json();

  //Rellenamos el formulario con los datos del obj JSON
  $nombre.value = producto.nombre;
  $descripcion.value = producto.descripcion;
  $precio.value = producto.precio;
};

//Al incluir este script, llamar a la función inmediatamente para dejar el formulario con los datos del producto
rellenarFormulario();

$btnGuardar.onclick = async () => {
  //Extraemos los datos del formulario para validarlos
  const nombre = $nombre.value;
  const descripcion = $descripcion.value;
  const precio = $precio.value;

  if (!nombre) {
    //alert("Error: Escribe el nombre");
    return Swal.fire({
      icon: "error",
      text: "Escribe el nombre",
      timer: 700
    });
  }

  if (!descripcion) {
    //alert("Error: Escribe la descripción");
    return Swal.fire({
      icon: "error",
      text: "Escribe la descripción",
      timer: 700
    });
  }

  if (!precio) {
    //alert("Error: Escribe el precio");
    return Swal.fire({
      icon: "error",
      text: "Escribe el precio",
      timer: 700
    });
  }

  //Codificamos el JSON que mandaremos al backend
  const cargaUtilCodificada = JSON.stringify(cargaUtil);
  //Enviamos al backend
  try {
    //Hacemos un PUT al servidor, con fetch y almacenamos la respuesta cruda
    const respuestaRAW = await fetch("actualizar_producto.php", {
      method: "PUT",
      body: cargaUtilCodificada
    });

    //El servidor nos responde con JSON
    const respuesta = await respuestaRAW.json();
    if(respuesta) {
      //Y si llegamos hasta aquí, todo ha ido bien
      //await alert("Producto actualizado");
      await Swal.fire({ //Esperamos a que la alerta se muestre
        icon: "success",
        text: "Producto actualizado",
        timer: 700
      });
      //Redireccionamos a todos los productos
      window.location.href = "./productos.php";
    }
  } catch (e) {
    //En caso de que haya un error
    //alert("Error de servidor");
    Swal.fire({
      icon: "error",
      title: "Error de servidor",
      text: "Inténtelo de nuevo. El error es: " + e
    });
  }

}