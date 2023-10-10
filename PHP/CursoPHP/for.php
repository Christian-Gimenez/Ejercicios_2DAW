<!DOCTYPE html>
<html lang="es">

<head>
  <title>Practica PHP</title>
  <meta charset="utf-8" />
</head>

<body>
  <?php
  //FOR
  $num = 5;

  for($i = 1; $i <= 10; $i++) {
    for($j = $i; $j > 0; $j--) {
      echo "*";
    }
    echo "<br/>";
  }

  for($i = 1; $i <= 10; $i++) {
    for($j = 10 - $i; $j > 0; $j--) {
      echo "*";
    }
    echo "<br/>";
  }

  //numeros pares entre el 0 y el 100
  for($i = 100; $i >= 0; $i--) {
    if($i % 2 == 0) {
      echo $i . "<br/>";
    }
  }

  for($i = 0; $i <= 100; $i+=2) {
    echo $i . "<br/>";
  }

  for($i = 1; $i <= 10; $i++) {
    for($j = 1; $j <= 10; $j++) {
      echo $i . " x " . $j . " = " . ($i * $j) . "<br/>";
    }
    echo "<hr/>";
  }
  ?>
</body>

</html>