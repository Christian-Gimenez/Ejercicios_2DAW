<?php
//Decodificamos el JSON que vino del frontend
$cargaUtil = json_decode(file_get_contents("php://input"));
if(!$cargaUtil) {
  //Devolvemos error http 500 si no
  http_response_code(500);
  exit;
}
//Extraer valores
$nombre = $cargaUtil->nombre;
$precio = $cargaUtil->precio;
$descripcion = $cargaUtil->descripcion;
//Incluimos las funciones
include_once "funciones.php";
//Llamamos a la funcion para guardar producto y almacenamos la respuesta
$respuesta = guardarProducto($nombre, $precio, $descripcion);
//Devolver respuesta al frontend
echo json_encode($respuesta);
?>