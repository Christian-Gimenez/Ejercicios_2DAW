<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>

<body>
  <?php
  //WHILE
  $num = 0;
  $respuesta = "Oporto";
  $intentos = 1;
  
  while($num <= 10) {
    echo $num . "<br/>";
    $num++;
  }

  while($respuesta != "Lisboa") {
    echo "Intento " . $intentos . "<br/>";
    if($intentos == 3) {
      $respuesta = "Lisboa";
    }
    $intentos++;
  }

  //DO WHILE
  $valor = 10;
  while($valor != 10) {
    echo "Dentro del while";
  }

  do {
    echo "Dentro del do while";
  } while($valor != 10);

  ?>
</body>

</html>