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
  <link href="dwes.css" rel="stylesheet" type="text/css">
</head>

<body>

  <div id="encabezado">
    <h1>Tarea: Edición de un producto</h1>
    <form id="form_seleccion" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    </form>
  </div>

  <div id="contenido">
    <h2>Producto:</h2>
    <?php
    if (isset($_POST["editar"])) {
      $producto = json_decode($_POST["producto"]);
      mostrarProducto($producto);
    }
    ?>
  </div>

  <div id="pie">
  </div>
</body>

</html>