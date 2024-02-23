<?php
//Generar el formulario de edición del producto.
if(isset($_POST["editar"])) {
  $producto = json_decode($_POST["producto"]);
  var_dump($producto);
}
?>