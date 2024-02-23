<?php
//Generar el listado de los productos de cada familia.
require_once "./db_conector.php";
require_once "./db_utils.php";

//Debugg
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$idSeleccionado = $_GET["familias"] ?? "";

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Listado de productos de una familia</title>
  <link href="dwes.css" rel="stylesheet" type="text/css">
</head>

<body>

  <div id="encabezado">
    <h1>Tarea: Listado de productos de una familia </h1>
    <form id="form_seleccion" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
      <label for="familias">Familia:</label>
      <select name="familias">
        <?php mostrarFamilias($db, $idSeleccionado); ?>
      </select>
      <input type="submit" name="mostrar_productos" value="Mostrar productos" />

    </form>
  </div>

  <div id="contenido">
    <h2>Productos de la familia:</h2>
    <?php 
    if($idSeleccionado !== "") {
      mostrarProductosFamilia($db, $idSeleccionado);
    }
    ?>
  </div>

  <div id="pie">
  </div>
</body>

</html>