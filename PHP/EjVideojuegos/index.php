<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Videojuegos - Menu</title>
</head>
<body>
  <!--
    Haz un programa en PHP en el cual tengas un menú principal, donde puedas elegir una opción de las siguientes:
    1-Dar de alta videojuegos
    2-Dar de baja videojuegos
    3-Modificar datos de los videojuegos
    4-Buscar un videojuego por el nombre
    5-Listar todos los videojuegos por plataforma

    Videojuegos:
    -id
    -nombre
    -genero
    -plataforma
    -precio -->

    <h1>Bienvenido al catálogo de Videojuegos</h1>
    <h4>MENU PRINCIPAL</h4>
    <form action="./ProgramaPrincipal.php" method="POST">
      <fieldset>
        <label for="alta">Dar de alta</label>
        <input type="radio" name="opcion" value="alta" id="alta" />

        <br/>
        <label for="baja" >Dar de baja</label>
        <input type="radio" name="opcion" value="baja" id="baja" disabled />

        <br/>
        <label for="mod" >Modificar datos</label>
        <input type="radio" name="opcion" value="mod" id="mod" disabled />

        <br/>
        <label for="buscar" >Buscar</label>
        <input type="radio" name="opcion" value="buscar" id="seabuscarrch" disabled />

        <br/>
        <label for="listar" >Listar</label>
        <input type="radio" name="opcion" value="listar" id="listar" disabled />

        <br/>
        <input type="submit" value="Aceptar"/>
      </fieldset>
    </form>
</body>
</html>