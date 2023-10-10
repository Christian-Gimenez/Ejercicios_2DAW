<!DOCTYPE html>
<html lang="es">

<head>
  <title>Practica PHP</title>
  <meta charset="utf-8" />
</head>

<body>
  <?php
  //FOREACH
  $array = array(1, 2, 3, 4);
  $valores = array("uno" => 1, "dos" => 2, "tres" => 3);

  foreach($array as $dato) {
    echo "Valor actual: " . $dato . "<br/>";
  }

  //Foreach en array asociativo. Guardamos cada llave en $key y su respectivo valor en $valor
  foreach($valores as $key => $valor) {
    echo "Valores[$key] => " . $valor . "<br/>";
  }

  $personas = array("52017270X" => "Christian M. Giménez Puerma",
  "12314252P" => "Juan Muñoz Laurel",
  "99819442J" => "Pepe Pancho Pan");

  foreach($personas as $dni => $nombre) {
    echo "DNI: " . $dni . ". Nombre: " . $nombre . "<br/>";
  }

  ?>
</body>

</html>