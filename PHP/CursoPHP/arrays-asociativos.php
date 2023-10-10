<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica PHP</title>
</head>

<body>
  <?php
  //Arrays asociativos: Sus índices son Strings personalizados
  $navegadores = array("navegador1" => "Chrome", "navegador2" => "Firefox", "navegador3" => "Safari");
  $datos = array("nombre" => "Christian", "edad" => "27", "profesor" => true, 3 => 100);
  echo "Navegador 3: " . $navegadores["navegador3"] . "<br/>";
  echo "Nombre: " . $datos["nombre"];
  echo "<br/>";
  echo "dato 3: " . $datos[3];
  echo "<br/>";
  var_dump($datos);
  var_dump($navegadores);
  ?>

</body>

</html>