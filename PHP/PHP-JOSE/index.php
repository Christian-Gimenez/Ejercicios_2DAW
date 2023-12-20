<?php
//Ver errores
ini_set("display_errors", 1);
error_reporting((E_ALL ^ E_NOTICE));

require "utils.php";
require "router.php";

//Consultas con MYSQLI
// function consulta(string $query, array $config) {
//   $con = mysqli_connect($config["host"], $config["username"], $config["password"], $config["dbname"]);
//   if($con->connect_error) {
//     die("Connection failed: " . $con->connect_error);
//   }

//   return $con->query($query);
// }

//$res = consulta("SELECT * FROM `notas`", $config);

//mostrar($res->fetch_all(MYSQLI_ASSOC)); //O tambien fetch_assoc()
?>
