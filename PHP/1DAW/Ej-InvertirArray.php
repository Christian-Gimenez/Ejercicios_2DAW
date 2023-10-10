<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invertir el array</title>
</head>
<body>
  <?php
    //Dado el array T de n. Si el tamaño es par invertir los elementos del array.
    $miArray = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    function invertirArray($array) {
      //$aux = $array[0];
      for($i = 0; $i < (sizeof($array) / 2); $i++) {
        $aux = $array[$i];
        //echo "Valor aux: " . $aux . "<br/>";

        $array[$i] = $array[sizeof($array) - 1 - $i];
        //echo "Valor posicion [$i]: " . $array[$i] . " metiendo el valor de la posicion: [" . (sizeof($array) - 1 - $i) . "]<br/>";

        $array[sizeof($array) -1 - $i] = $aux;
        //echo "Valor posicion [" . (sizeof($array) - 1 - $i) . "]: " . $array[sizeof($array) - 1 - $i] . " metiendo el valor de la posición: [" . $i . "]<br/>";
      }
      return $array;
    }

    function mostrarArray($array) {
      for($i = 0; $i < sizeof($array); $i++) {
        echo "[$i] -> " . $array[$i] . " ";
        for($j = 1; $j <= $array[$i]; $j++) {
          echo "*";
        }
        echo "<br/>";
      }
    }
    mostrarArray($miArray);
    echo "<br/>";

    if(sizeof($miArray) % 2 == 0) {
      $miArray = invertirArray($miArray);
      //invertirArray($miArray); NO se puede hacer, PHP no trata como JAVA los arrays.
    }
    mostrarArray($miArray);

  ?>
  
</body>
</html>