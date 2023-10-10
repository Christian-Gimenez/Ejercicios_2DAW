<!DOCTYPE html>
<html lang="es">

<head>
  <title>Destino PHP</title>
  <meta charset="utf-8" />
</head>

<body>
  <!--Recogemos los valores de las variables pasadas por URL
        Y las mostramos en HTML cogiendo con PHP los valores y mostrandolos -->
  <p>Nombre: <?php echo $_GET["nombre"]; ?></p>
  <p>Cargo: <?php echo $_GET["cargo"]; ?></p>
</body>

</html>