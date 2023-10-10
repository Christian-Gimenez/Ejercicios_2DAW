<!DOCTYPE html>
<html lang="es">

<head>
  <title>Practica PHP</title>
  <meta charset="utf-8" />
</head>

<body>
  <?php
  //ELSE IF
  $valor1 = 2;
  $valor2 = 2;
  $dia = 4;
  if($valor1 > $valor2) {
    echo "Valor1 es mayor que valor2";
  } else if($valor1 == $valor2) {
    echo "Valor1 es igual al valor2";
  } else {
    echo "Valor1 es menor que valor2";
  }

  echo "<br/>";

  if($dia == 1) {
    echo "Lunes";
  } else if($dia == 2) {
    echo "Martes";
  } else if($dia == 3) {
    echo "Miércoles";
  } else if($dia == 4) {
    echo "Jueves";
  } else if($dia == 5) {
    echo "Viernes";
  } else if($dia == 6) {
    echo "Sábado";
  } else if($dia == 7) {
    echo "Domingo";
  } else {
    echo "Día no válido";
  }

  ?>
</body>

</html>