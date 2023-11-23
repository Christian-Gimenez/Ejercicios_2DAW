<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Letra de tu DNI</title>
</head>
<?php
$resultado = null;
function calculateChar($resultado)
{
  $position = $resultado % 23;
  $letrasPosibles = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
  $letra = $letrasPosibles[$position];
  return $letra;
}

if (isset($_POST['submit'])) {
  $resultado = $_POST['numero_de_dni'];
  $letraFinal = calculateChar($resultado);
}
?>

<body>
  <form action="" method="post">
    <label> Números DNI:
      <input type="number" name="numero_de_dni">
    </label>
    <input type="submit" name="submit">
  </form>
  <h1>Tu letra es: <?= $letraFinal ?></h1>
</body>

</html>
<?php








?>