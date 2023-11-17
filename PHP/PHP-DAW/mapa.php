<?php
//$nombre = $_GET["nombre"];
//$apellido = $_GET["apellido"];

echo "Hola $nombre $apellido <br>";
$mapa = ["Atletico" => "Koke", "Real Madrid" => "Benzema", "Barcelonan" => "Iniesta"];
print_r($mapa);
print_r("<br/>");
print_r($mapa["Atlético"]);
$tam = count($mapa);
print_r($tam);
print_r("<br/>");

$mapa += ["Real Sociedad" => "Arkaitz"];

$mapa["Nigeria"] = "Dembele";

?>