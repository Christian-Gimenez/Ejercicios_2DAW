<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alta Videojuego</title>
</head>
<body>
<h1>Dar de alta un nuevo videojuego:</h1>
    <form action="./ValidarDatosVideojuego.php" method="POST">
      <fieldset>
      <!-- Enviar de vuelta el valor de $opcion a ProgramaPrincipal.php-->
      <input type="hidden" name="opcion" value="<?php echo $opcion; ?>"/>
        <p>
          <label for="nombre">Nombre: </label>
          <input type="text" name="nombre" />
        </p>
        <p>
          <label for="genero">Genero: </label>
          <input type="text" name="genero" />
        </p>
        <p>
          <label for="plataforma">Plataforma: </label>
          <input type="text" name="plataforma" />
        </p>
        <p>
          <label for="precio">Precio: </label>
          <input type="text" name="precio" /> €
        </p>
        <p>
          <input type="submit" value="Dar de alta"/>
          <input type="reset" value="Limpiar datos"/>
        </p>
        
      </fieldset>
    </form>
  
</body>
</html>