<?php
//Ralizar la consulta de actualización de datos y la redirección a listado.php.
require_once "./db_conector.php";
require_once "./db_utils.php";

if(isset($_POST["actualizar"])) {
  
  actualizarProducto($db, $productoMod);
} else if (isset($_POST["cancelar"])) {
  
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Plantilla para Ejercicios Tema 3</title>
  <link href="dwes.css" rel="stylesheet" type="text/css">
</head>

<body>

  <div id="encabezado">
    <h1>Ejercicio: </h1>
    <form id="form_seleccion" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    </form>
  </div>

  <div id="contenido">
    <h2>Contenido</h2>
  </div>

  <div id="pie">
  </div>
</body>

</html>