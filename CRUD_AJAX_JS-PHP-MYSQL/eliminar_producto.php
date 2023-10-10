<?php
//Decodificamos el JSON que vino del front
$cargaUtil = json_decode("php://input");
if(!$cargaUtil) {
    //Si no hay carga util, devolvemos codigo error http 500
    http_response_code(500);
    exit;
}
//Extraemos los valores
$id = $cargaUtil->id;
//Importamos funciones
include_once "funciones.php";
//Almacenamos la respuesta al eliminar el producto
$respuesta = eliminarProducto($id);
//Mandamos al front el JSON codificado con la respuesta
echo json_encode($respuesta);

?>