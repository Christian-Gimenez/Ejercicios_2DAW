<?php
//Obtenemos el JSON recibido por input en la petición AJAX
$cargaUtil = json_decode(file_get_contents("php://input"));
//Si no hay carga util (no se ha recibido el JSON)
if(!$cargaUtil) {
  //Devolvemos el código de error http 500 
  http_response_code(500);
  exit;
}

//Extraemos los valores del JSON
$id = $cargaUtil->id;
$nombre = $cargaUtil->nombre;
$precio = $cargaUtil->precio;
$descripcion = $cargaUtil->descripcion;
//Incluimos las funciones
include_once "funciones.php";
//Llamamos a la función y guardamos su respuesta
$respuesta = actualizarProducto($nombre, $precio, $descripcion, $id);
//Enviamos al frontend la respuesta codificándola en otro JSON
echo json_encode($respuesta);
?>