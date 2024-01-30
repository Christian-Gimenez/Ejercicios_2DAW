<?php include_once "funciones.php"; ?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AgendAPP - Christian Gimenez 2DAW</title>
  <link rel="icon" href="./imgs/ico.png" type="image/png">
  <link rel="stylesheet" href="./css/estilos.css" type="text/css">
</head>

<body>
  <?php
  //Si No existe la agenda con campos ocultos, la creamos vacía
  if (!isset($_POST["agenda"])) {
    $agenda = [];
    echo"Aqui";
  } else {
    //Si existe, volcamos los datos en la misma
    $agenda = $_POST["agenda"];
    echo "Otrolao";
  }
  //Validamos nada más recargar la página por si hubieran entrado datos por $_POST
  validarDatosConCamposOcultos($agenda);
  ?>

  <main>
    <?php
    //Botón para cerrar la sesión y así borrar todos los datos almacenados de la agenda
    botonCerrarSesion();
    ?>
    <header>
      <img src="./imgs/ico.png" alt="AgendAPP Logo" />
      <h1>AgendAPP de Contactos v2</h1>
    </header>

    <?php //Si la agenda está vacía se lo indica al usuario
    if (!empty($agenda)) {
      mostrarAgendaConCamposOcultos($agenda);
    } else {
    ?> <p class="vacia">Actualmente la agenda está vacía</p>
    <?php
    }
    ?>
    <hr />
    <!--Formulario para introducir nombre y teléfono-->
    <h2>Registre un nuevo contacto:</h2>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
      <label for="nombre">Nombre del contacto:</label>
      <input type="text" name="nombre" placeholder="Christian" />
      <?php
      //Si le dieron al botón de guardar y el nombre está vacío
      if (isset($_POST["guardar"]) && empty($_POST["nombre"])) {
        echo "<span class='error'>El campo nombre no puede estar vacío.</span>";
      } ?>
      <label for="telefono">Nº Teléfono:</label>
      <input type="number" min="0" name="telefono" placeholder="612345789" />

      <div class="botones">
        <input type="reset" value="Limpiar formulario" name="limpiar" />
        <input type="submit" value="Guardar contacto" name="guardar" />
        <?php mostrarInputCamposOcultos($agenda); ?>
      </div>
    </form>

    <footer>
      <p>Desarrollado por: <strong>Christian Miguel Giménez Puerma</strong> - 2ºDAW</p>
    </footer>

  </main>
</body>

</html>