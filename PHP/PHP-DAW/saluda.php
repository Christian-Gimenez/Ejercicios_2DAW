<?php

$nombre = strlen($_GET["nombre"] > 0)? $_GET["nombre"] : "invalid";
$apellidos = strlen($_GET["apellidos"] > 0)? $_GET["apellidos"] : "invalid";

if(isset($nombre) && $nombre != "invalid"
  && isset($apellidos) && $apellidos != "invalid") {
  echo "Bienvenido $nombre $apellidos";
} else {
  echo "¡Datos inválidos!";
  echo "<a href='./saluda.html'>Pulsa aquí para volver a intentarlo </a>";
}
