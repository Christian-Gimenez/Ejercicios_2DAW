<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>
<body>
  <?php
  //BREAK
  /*
  for($i = 1; $i <= 10; $i++) {
    echo "Valor de i: " . $i . "<br/>";
    if($i == 3) {
      break;
    }
  }*/

  for($j = 1; $j <= 10; $j++) {
    echo "Valor de j: " . $j . "<br/>";
    for($k = 1; $k <= 10; $k++) {
      echo "Valor de k: " . $k . "<br/>";
      if($k == 3) {
        break 2; //Le indicamos que salga de los 2 bucles
      }
    }
  }
  ?>
  
</body>
</html>