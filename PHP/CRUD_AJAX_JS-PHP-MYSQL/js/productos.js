const $cuerpoTabla = document.querySelector("#cuerpoTabla");

const obtenerProductos = async () => {
  //Es una petición GET, no necesitamos indicar el método ni el cuerpo
  const respuestaRAW = await fetch("obtener_productos.php");
  const productos = await respuestaRAW.json();
  //Limpiamos la tabla
  $cuerpoTabla.innerHTML = "";
  //Ahora ya tenemos los productos. Los recorremos
  for(const producto of productos) {
    //Vamos a ir adjuntando elementos a la tabla
    const $fila = document.createElement("tr");
    //La celde del nombre
    const $celdaNombre = document.createElement("td");
    //Colocamos su valor y lo adjuntamos a la fila
    $celdaNombre.innerHTML = producto.nombre;
    $fila.appendChild($celdaNombre);
    //Lo mismo para lo demás
    const $celdaDescripcion = document.createElement("td");
    $celdaDescripcion.innerHTML = producto.descripcion;
    $fila.appendChild($celdaDescripcion);

    const $celdaPrecio = document.createElement("td");
    $celdaPrecio.innerHTML = producto.precio;
    $fila.appendChild($celdaPrecio);

    //Extraemos el id del producto en el que estamos dentro del bucle
    const idProducto = producto.id;
    //Link para eliminar
    const $linkEditar = document.createElement("a");
    $linkEditar.href = "./editar_producto.php?id=" + idProducto;
    //$linkEditar.innerHTML = `<i class="fa fa-edit"></i>`;
    //$linkEditar.classList.add("button", "is-danger");
    $botonEliminar.onclick = async () => {
      const respuestaConfirmacion = confirm("Se va ha eliminar el producto. ¿Deseas realizar la operación?");

      if(respuestaConfirmacion) {
        const url = `./eliminar_producto.php?id=${idProducto}`;
        const respuestaRaw = await fetch(url, {
          method: "DELETE"
        });
        const respuesta = await respuestaRAW.json();
        if(respuesta) {
          alert("Producto eliminado correctamente");
        } else {
          alert("Error: El servidor no respondió con una respuesta exitosa.")
        }
        //De cualquier modo, volver a obtener los productos para refrescar la tabla
        obtenerProductos();
      }
    };
    const $celdaBoton = document.createElement("td");
    $celdaBoton.appendChild($botonEliminar);
    $fila.appendChild($celdaBoton);
    //Adjuntamos la fila a la tabla
    $cuerpoTabla.appendChild($fila);
  }
};

//Y cuando se incluya este script, invocamos al afunción
obtenerProductos();