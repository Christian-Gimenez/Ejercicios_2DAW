<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>
<body>
  <?php
  //CONTINUE
  
  for($i = 1; $i <= 10; $i++) {
    if($i == 3) {
      continue;
    }
    echo "Valor de i: " . $i . "<br/>";
  }
  ?>
  
</body>
</html>