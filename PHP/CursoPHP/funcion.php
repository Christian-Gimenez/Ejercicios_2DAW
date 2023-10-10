<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>
<body>
  <?php
  //Funciones
  $numero1 = 5;
  $numero2 = 10;

  function sumar($num1, $num2) {
    return $num1 + $num2;
  }

  $resultado = sumar($numero1, $numero2);
  echo $resultado;

  ?>
</body>
</html>