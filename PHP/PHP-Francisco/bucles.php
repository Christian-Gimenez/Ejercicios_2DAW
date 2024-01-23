<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <form action="" method="GET">
    <label for="num">Di de cuantos asteriscos quieres el triángulo:</label>
    <input type="number" name="num" />
    <br>
    <input type="submit" value="Enviar" />
  </form>
  <?php
  if (isset($_GET["num"])) {
    $num = $_GET["num"];
    echo "<ul style='list-style: none; border: 1px dashed blue'>";
    for ($i = 0; $i <= $num; $i++) {
      if ($i !== 0 && $i % 2 === 0) {
        echo "<li style='color: red;'>";
      } else {
        echo "<li style='color: green;'>";
      }
      for ($j = $i; $j > 0; $j--) {
        echo "*";
      }
      echo "</li>";
    }
    echo "</ul>";
  }
  ?>
</body>

</html>