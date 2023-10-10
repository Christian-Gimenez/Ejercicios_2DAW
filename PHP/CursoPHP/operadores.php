<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>

<body>
  <?php
  /* OPERADORES ARITMÉTICOS
     + Suma
     - Resta
     * Multiplicación
     / Division
     % Módulo
     ** Potencia

      OPERADORES DE ASIGNACIÓN
      a += b   <-es igual a->   a = a + b 
      a -= b   <-es igual a->   a = a - b 
      a *= b   <-es igual a->   a = a * b 
      a /= b   <-es igual a->   a = a / b 
      a %= b   <-es igual a->   a = a % b 

      OPERADORES DE COMPARACIÓN
      ==  Iguales
      === Estrictamente iguales (valor y tipo)
      !=  Diferentes. También puede ser: <>
      !== Estrictamente distintos (valor y tipo)
      <   Menor que
      >   Mayor que
      <=  Menor o igual que
      >=  Mayor o igual que
     */

  $num1 = 2;
  $num2 = 8;
  //OPERADOR TERNARIO
  $resultado = ($num1 < $num2) ? $num2 / $num1 : $num1 / $num2;
  //echo $resultado; 

  /*
     for($i = 1; $i <= 10; $i++) {
      echo "<h4>Tabla de multiplicar del número " . $i . "</h4>";
      for($j = 1; $j <= 10; $j++) {
        echo "<p>" . $i . " x " . $j . " = " . ($i * $j) . "</p>";
      }
     }*/

  $num1 = 5;
  $num2 = "5";
  if ($num1 != $num2) {
    echo "Num1 y num2 no son iguales</br>";
  } else {
    echo "Num1 y num2 son iguales para PHP...</br>";
  }

  if ($num1 === $num2) {
    echo "Num1 y num2 son iguales ni del mismo tipo<br/>";
  } else if ($num1 !== $num2) {
    echo "PERO realmente Num1 y num2 no son iguales y ni del mismo tipo<br/>";
    echo "Porque num1 es de tipo " . gettype($num1) . " y num2 es de tipo " . gettype($num2);
  }
  ?>

</body>

</html>