<?php
//Comprueba si en la url http (metodo GET) hay una variable llamada id
//Si no la hay: lanza codigo de error http 500
if(!isset($_GET["id"])) {
    http_response_code(500);
    exit();
}
//Si la hay, importa funciones
include_once "funciones.php";
//Obtiene de la DB el producto cuyo id estaba en la URL
$producto = obtenerProductoPorId($_GET["id"]);
//Y manda al frontend el producto codificado en JSON
echo json_encode($producto);
?>