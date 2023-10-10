<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php
  function calcularArea($base, $altura)
  {
    return $base * $altura;
  }

  function calcularPerimetro($base, $altura)
  {
    return (2 * $base) + (2 * $altura);
  }

  function mostrarArea($base, $altura)
  {
    echo "<h1>Área del Rectángulo:</h1>";
    echo "<p>$base * $altura = " . calcularArea($base, $altura) . "</p>";
  }

  function mostrarPerimetro($base, $altura)
  {
    echo "<h1>Perímetro del Rectángulo:</h1>";
    echo "<p>$base + $base + $altura + $altura = " . calcularPerimetro($base, $altura) . "</p>";
  }

  function menu($opcion, $base, $altura)
  {
    switch ($opcion) {
      case "area":
        mostrarArea($base, $altura);
        break;
      case "perimetro":
        mostrarPerimetro($base, $altura);
        break;
      case "ambos":
        mostrarArea($base, $altura);
        mostrarPerimetro($base, $altura);
        break;
      default:
        echo "<h1>UPS. Ha ocurrido un error, no llegó bien la opción al menu()</h1>";
        break;
    }
  }

  $base = $_GET["base"];
  $altura = $_GET["altura"];
  $opcion = $_GET["opcion"];

  menu($opcion, $base, $altura);
  ?>
  <a href="Ej-AreaYPerimetroRectangulo.html"><button>Volver al menú</button></a>

</body>

</html>