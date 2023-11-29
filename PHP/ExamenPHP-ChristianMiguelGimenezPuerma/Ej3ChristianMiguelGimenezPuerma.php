<?php

/**
 * E3.php
 * De la siguiente lista de canales de radio, seleccionar uno de forma aleatoria.
 * La selección se realiza al pulsar el botón de la forma. Usar la variable 
 * $watchedChannel como dijo Ahmed.
 */
$channels = array(
  "La 0", "La 1", "La 2", "La 3", "La 4", "La 5", "La 6",
  "La 7", "La 8", "La 9", "La 10", "La 11", "La 12", "La 13", "La 14", "La 15",
  "La 16", "La 17", "La 18", "La 19", "La 20", "La 21", "La 22", "La 23",
  "La 24", "La 25", "La 26", "La 27", "La 28", "La 29"
);
$watchedChannel = "";

function canalRandom(array $canales): string
{
  $random = rand(0, count($canales));
  return $canales[$random];
}

if (isset($_GET["submit"])) {
  $watchedChannel = canalRandom($channels);
} else {
  $watchedChannel = "De momento, ningún canal";
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christian Ejercicio 3 Examen PHP</title>
</head>

<body>
  <h1>Estás viendo: <?= $watchedChannel ?></h1>

  <form action="" method="get">
    <label for="submit">Pulsa para cambiar de canal</label>
    <input type="submit" name="submit" value="Cambiar de canal">
  </form>

</body>

</html>