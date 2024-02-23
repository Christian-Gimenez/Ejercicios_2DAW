<?php
//Generar el listado de los productos de cada familia.
require_once "./db_conector.php";
require_once "./db_utils.php";

//Debugg
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Si no hay ningún id seleccionado (null) introducimos una string vacía para evitar errores
try {
  $idSeleccionado = $_GET["familias"] ?? "";
} catch (Exception $e) {
  //Lanzamos la excepción si el id es null
  echo "El id seleccionado no puede ser null. Mensaje error: " . $e->getMessage();
}

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Tarea: Listado de productos de una familia</title>
  <link href="estilos/dwes.css" rel="stylesheet" type="text/css">
</head>

<body>

  <div id="encabezado">
    <h1>Tarea: Listado de productos de una familia </h1>
    <!-- Formulario select generado dinámicamente para mostrar todas las familias de la BBDD-->
    <form id="form_seleccion" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="get">
      <label for="familias">Familia:</label>
      <select name="familias">
        <!-- Función que genera los <option> para cada familia-->
        <?php
        try {
          mostrarFamilias($db, $idSeleccionado);
        } catch (Exception $e) {
          echo "Hubo un error al mostrar las familias: " . $e->getMessage();
        }
        ?>
      </select>
      <input type="submit" name="mostrar_productos" value="Mostrar productos" />
    </form>
  </div>

  <div id="contenido">
    <h2>Productos de la familia:</h2>
    <?php
    //Si hubo alguna familia seleccionada en el formulario anterior, mostramos productos de esa familia
    if ($idSeleccionado !== "") {
      mostrarProductosFamilia($db, $idSeleccionado);
    }
    ?>
  </div>

  <div id="pie">
  </div>
</body>

</html>