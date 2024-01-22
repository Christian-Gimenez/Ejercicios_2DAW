<?php
include("dni-funciones.php");
// echo "<h1>Me has llamao</h1>";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // echo "Entra en el request method<br>";
  if (isset($_POST["generaDNI"])) {
    // echo "Entra en generarDNI<br>";
    $nombre = $_POST["nombre"] ?? "";
    // echo "Nombre: $nombre<br>";
    $apellido1 = $_POST["apellido1"] ?? "";
    $apellido2 = $_POST["apellido2"] ?? "";
    // echo "Apellidos: $apellido1 $apellido2<br>";
    $fechaNacimiento = $_POST["fechaNacimiento"] ?? "";
    // echo "Fecha: 89252732J$fechaNacimiento<br/>";
    if (
      strlen($nombre) > 0 && strlen($apellido1) > 0
      && strlen(($apellido2) > 0) && strlen($fechaNacimiento) > 0
    ) {
      $dni = genDNI();
      echo "<h1>TU NUEVO DNI ES: $dni</h1>";
    } else {
      echo "<h1>ERROR: Faltan datos o son inválidos para generar el DNI</h1>";
    }
  } elseif (isset($_POST["validaDNI"])) {
    if(isset($_POST["numDNI"])) {
      $num = $_POST["numDNI"] ?? "";
      $respuesta = validarDNI($num);
      echo "<h1>Tu DNI $num es $respuesta</h1>";
    } else {
      echo "<h1>ERROR: Faltan datos o son inválidos para validar el DNI</h1>";
    }
  } elseif (isset($_POST["saberLetraDNI"])) {
    if(isset($_POST["numDNIsinLetra"])) {
      $num = $_POST["numDNIsinLetra"] ?? "";
      $letra = genLetraDNI($num);
      if(isset($letra) && strlen($letra) > 0) {
        echo "<h1>La letra de tu DNI con número " . $num . " es: " . $letra . "</h1>";
      } else {
        echo "<h1>ERROR: ¡El número de tu DNI es INVÁLIDO! No se puede generar la letra.</h1>";
      }
    } else {
      echo "<h1>ERROR: ¡No introdujiste ningún número de DNI!</h1>";
    }
  } elseif(isset($_POST["xDNIs"])) {
    if(isset($_POST["cantidad"])) {
      $cantidad = $_POST["cantidad"];
      echo "<ol>";
      for($i = 0; $i < $cantidad; $i++) {
        $dni = genDNI();
        echo "<li>$dni</li>";
      }
      echo "</ol>";
    }
  }
}
?>