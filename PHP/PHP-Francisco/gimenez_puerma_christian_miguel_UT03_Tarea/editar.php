<?php
//Generar el formulario de edición del producto.
require_once "./db_conector.php";
require_once "./db_utils.php";
?>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Tarea: Edición de un producto</title>
  <link href="estilos/dwes.css" rel="stylesheet" type="text/css">
</head>

<body>

  <div id="encabezado">
    <h1>Tarea: Edición de un producto</h1>
  </div>

  <div id="contenido">
    <h2>Producto:</h2>
    <?php
    //Si se le dió a "editar" en algún producto
    if (isset($_POST["editar"])) {
      //des-serializamos el objeto producto
      $producto = json_decode($_POST["producto"]);
      //Y mostramos el formulario con cada campo editable del mismo
      try {
        editarProducto($producto);
      } catch (Exception $e) {
        //Cazamos la excepción si no se pudo editar el producto
        echo "Hubo un error al editar el producto. Mensaje error: " . $e->getMessage();
      }
    }
    ?>
  </div>

  <div id="pie">
  </div>
</body>

</html>