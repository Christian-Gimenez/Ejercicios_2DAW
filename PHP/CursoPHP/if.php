<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>

<body>
  <?php
  $nota1 = 2;
  $nota2 = 8;
  $nota3 = 5;
  
  //IF
  if($nota1 >= 5) {
    echo "Nota 1 aprobada<br/>";
  }

  //Otra sintaxis
  if ($nota2 != 0):
    echo "La nota 2 es distinta de cero";
  endif;

  if($nota3 == 5) {
    echo "Dentro del primer if<br/>";
    if($nota2 > 9) {
      echo "Dentro del segundo if<br/>";
    }
  }

  if($nota1 >= 5 && $nota2 >= 5) {
    echo "Curso aprobado<br/>";
  }

  ?>

</body>

</html>