<?php
//Realizar la consulta de actualización de datos y la redirección a listado.php.
require_once "./db_conector.php";
require_once "./db_utils.php";
?>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Ejercicio: Actualizar/Cancelar modificación producto</title>
  <link href="estilos/dwes.css" rel="stylesheet" type="text/css">
</head>

<body>
  <?php
  //Si le dió al botón de "Actualizar"
  if (isset($_POST["actualizar"])) {
    //Almacenamos todos los datos del formulario limpiando los datos
    try {
      $cod = trim($_POST["cod"]) ?? "";
      $nombre = trim($_POST["nombre"]) ?? "";
      $nombreCorto = trim($_POST["nombre_corto"]) ?? "";
      $descripcion = trim($_POST["descripcion"]) ?? "";
      $pvp = trim($_POST["PVP"]) ?? "";
      //Y actualizamos la base de datos con un UPDATE
      actualizarProducto($db, $cod, $nombre, $nombreCorto, $descripcion, $pvp);
    } catch (Exception $e) {
      echo "Hubo un error a la hora de actualizar el producto. Mensaje error: " . $e->getMessage();
    }
  } else if (isset($_POST["cancelar"])) {
    //Si le dió al botón de "Cancelar", mostramos que no se actualizó tal y como pidió el cliente
  ?>
    <div id="encabezado">
      <h1>Ejercicio: Cancelación del proceso de actualización</h1>
    </div>

    <div id="contenido">
      <h2>Se canceló la actualización del producto.</h2>
      <!-- Botón para regresar a listado.php-->
      <button><a href="<?= htmlspecialchars("./listado.php"); ?>">Continuar<a /></button>
    </div>
  <?php
  } else {
    throw new Exception("Hubo un error en el envío de los datos a actualizar.php");
  }
  ?>
</body>

</html>