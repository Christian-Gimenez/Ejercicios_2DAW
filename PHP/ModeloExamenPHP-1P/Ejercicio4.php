<?php

/**
 * Create a PHP associative array called $student with the following key-value pairs:
 * name with a value of "John"
 * age with a value of 25
 * grades with an array of integers: 85, 90, 78, 92
 */
include_once("./Ejercicio5.php");

function comprobarString(string $string): bool
{
  return strlen($string) > 0;
}

function comprobarInt(int $integer): bool
{
  return $integer > 0;
}

function grados2array(string $cadenaGrados): array
{
  //preg_split recibe SI o SI una Expresión Regular
  $arrayGrados = preg_split("/,/", $cadenaGrados);
  $arrayGradosFormateado = array_filter($arrayGrados, function ($element) {
    $elementoLimpiado = trim($element);
    if ($elementoLimpiado != "") {
      $elementoParseado = intval($elementoLimpiado);
      return $elementoParseado;
    }
  });

  return $arrayGradosFormateado;
}

function datos2arrayAsociativo(string $nombre, int $edad, array $grados): array
{
  $arrayAsociativo = [
    "Nombre" => $nombre,
    "Edad" => $edad,
    "Grados" => $grados
  ];
  return $arrayAsociativo;
}

function printearSolucion(array $datos, int $longArray): void
{
  $mediaGrados = mediaDeGrados($datos);
  echo "<table border='1px solid black'>";
  echo "<caption>Tus datos están correctamente guardados</caption>";
  foreach ($datos as $clave => $valor) {
    if (is_array($valor)) {
      echo "<tr><th>$clave</th>";
      foreach ($valor as $val) {
        echo "<td>$val</td>";
      }
      echo "</tr>";
    } else {
      echo "<tr><th>$clave</th><td colspan='";
      echo $longArray;
      echo "'>$valor</td></tr>";
    }
  }
  echo "<tr><th>Media Grados</th><td colspan='";
  echo $longArray;
  echo "'>$mediaGrados</td></tr>";
  echo "</table>";
}

function main(): void
{
  if (isset($_POST["datosEstudiante"])) {
    if (isset($_POST["nombre"]) && isset($_POST["edad"]) && isset($_POST["grados"])) {
      $nombre = $_POST["nombre"] ?? "";
      $edad = intval($_POST["edad"]) ?? 0;
      $grados = $_POST["grados"] ?? "";

      if (comprobarString($nombre) && comprobarInt($edad) && comprobarString($grados)) {
        $arrayGrados = grados2array($grados);
        $datos = datos2arrayAsociativo($nombre, $edad, $arrayGrados);
        printearSolucion($datos, count($arrayGrados));
      } else {
        echo "ERROR: Datos del estudiante erróneos o vacíos.";
      }
    }
  }
}
?>

<form action="" method="POST">
  <fieldset>
    <legend>Datos del estudiante</legend>
    <label for="nombre">Nombre: </label>
    <input type="text" name="nombre">
    <br>

    <label for="edad">Edad: </label>
    <input type="number" name="edad">
    <br>

    <label for="grados">Grados (separados por coma: 85, 90, 78, 92): </label>
    <input type="text" name="grados">
    <br>

    <input type="submit" value="Enviar datos" name="datosEstudiante" />
  </fieldset>
</form>

<div style="border: 2px solid black">
  <?php
  main();
  ?>
</div>