<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registrese</title>
  <link rel="stylesheet" type="text/css" href="./index.css" />
</head>
<body>
  <form method="post">
    <h1>¡Subscribete!</h1>
    <input type="text" name="nombre" placeholder="Pepe"/>
    <input type="text" name="apellidos" placeholder="García Lopez"/>
    <input type="text" name="email" placeholder="ejemplo@mail.com"/>
    <input type="submit" value="Registrarse" name="registrar"/>
    <input type="reset" value="Limpiar formulario"/>
  </form>
  <?php
    include('./registrar.php');
    ?>
</body>
</html>