<!DOCTYPE html>
<html lang="es">

<head>
  <title>PRACTICA PHP</title>
  <meta charset="utf-8" />
</head>

<body>
  <?php
  //ARRAY
  //Crea un array de strings
  $dias = array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");

  //Crea un array de números
  $numeros = array(10, 20, 30, 40);

  //Al pasarle sólo 1 valor Crea un array de X posiciones vacios
  $nombres = array(10);

  //Crea un array vacío
  $datos = array();

  //Sintaxis corta
  $valores = [10, 20, 30, 40];

  echo "Hoy es: " . $dias[3] . "<br/>"; //Jueves

  //Muestra el tamaño del array, seguido del tipo de dato
  //de cada índice, incluido la longitud del dato (si es string) 
  //y el índice en sí
  var_dump($dias);
  /*array(7) {
          [0]=> string(5) "Lunes"
          [1]=> string(6) "Martes"
          [2]=> string(10) "Miércoles"
          [3]=> string(6) "Jueves"
          [4]=> string(7) "Viernes"
          [5]=> string(7) "Sábado"
          [6]=> string(7) "Domingo" } */

  echo "<br/>";
  var_dump($numeros);
  /*
        array(4) {
          [0]=> int(10)
          [1]=> int(20)
          [2]=> int(30)
          [3]=> int(40) }
        */
  echo "<br/>";

  for ($i = 0; $i < sizeof($dias); $i++) {
    $hoy = $dias[$i];
    if ($hoy == "Lunes") {
      echo $hoy . " ¡Que empiece la semana!<br/>";
    } else if ($hoy == "Sábado" || $hoy == "Domingo") {
      echo $hoy . " ¡¡Fin de semana!!<br/>";
    } else {
      echo $hoy . "<br/>";
    }
  }
  ?>
</body>

</html>