<?php
include "./GestorVideojuegos.php";

$opcion = $_POST["opcion"];
switch($opcion) {
  case "alta":
    $gestor = new GestorVideojuegos();
    $gestor->pedirDatosVideojuego();
    break;
  case "baja":
    echo "Dar de baja falta por implementar";
    break;
  case "mod":
    echo "Modificar videojuego falta por implementar";
    break;
  case "buscar":
    echo "Buscar videojuego por implementar";
    break;
  case "listar":
    echo "Listar videojuegos falta por implementar";
    break;
  default:
    echo "<script>alert('ERROR en el SWITCH principal');</script>";
    break;
}
?>
