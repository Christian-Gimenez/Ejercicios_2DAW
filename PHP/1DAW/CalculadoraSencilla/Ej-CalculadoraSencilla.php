<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultado</title>
</head>

<body>
  <h1>Calculadora Sencilla</h1>
  <?php
  $num1 = $_GET["num1"];
  $num2 = $_GET["num2"];
  $operacion = $_GET["operacion"];
  //echo gettype($num1);
  //echo gettype($num2);

  //if((gettype($num1) == "integer" || gettype($num1) == "double")
  //&& (gettype($num2) == "integer" || gettype($num2) == "double")) {

    switch ($operacion) {
      case "+":
        echo "El resultado de sumar " . $num1 . " + " . $num2 . " = " . ($num1 + $num2);
        break;
      case "-":
        echo "El resultado de restar " . $num1 . " - " . $num2 . " = " . ($num1 - $num2);
        break;
      case "*":
        echo "El resultado de multiplicar " . $num1 . " x " . $num2 . " = " . ($num1 * $num2);
        break;
      case "/":
        echo "El cociente de dividir " . $num1 . " / " . $num2 . " = " . ($num1 / $num2);
        break;
      case "%":
        echo "El resto de dividir " . $num1 . " / " . $num2 . " da un resto = " . ($num1 % $num2);
        break;
      case "^":
        echo "El resultado de elevar " . $num1 . "<sup>" . $num2 . "</sup>" . " = " . ($num1 ** $num2);
        break;
      default:
        echo "UPS. Ha habido un error en el switch.";
        break;
    }
  //} else {
  //  echo "<h1>ERROR. No se han introducido números válidos.</h1>";
  //}

  
  ?>
  <br/>
  <p><a href="Ej-CalculadoraSencilla.html"><button>Volver a calcular algo</button></a></p>
</body>

</html>