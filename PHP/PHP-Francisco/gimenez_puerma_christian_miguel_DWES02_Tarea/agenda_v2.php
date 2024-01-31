<?php
//Importación de las funciones
include_once "funciones.php";
//Descomentar para reportar errores en la aplicación
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

?>
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
  $agenda = [];
  //Variables 'flag' para mostrar errores/mensajes/advertencias al usuario
  $errorNombre = false;
  $errorTelefono = false;
  $telefonoBorrado = false;
  $contactoAgregado = false;

  //Si existe la agenda, volcamos los datos en la misma
  if (isset($_POST["agenda"])) {
    //Decodificamos la agenda del input hidden (usamos la función de json porque es más seguro que serialize())
    $agenda = json_decode($_POST["agenda"], true);
    //Validamos nada más recargar la página por si hubieran entrado datos por $_POST
    $errorNombre = comprobarNombre();
    $errorTelefono = comprobarTelefono($agenda);
    //Los datos se introducen en la agenda a la vez que se validan y se indica lo ocurrido a las variables 'flag'
    validarDatosConCamposOcultos($agenda, $telefonoBorrado, $contactoAgregado);
  }
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
      <input type="hidden" value="<?php echo htmlspecialchars(json_encode($agenda)); ?>" name="agenda" />
      <label for="nombre">Nombre del contacto:</label>
      <input type="text" name="nombre" placeholder="Christian" />
      <?php
      //Si le dieron al botón de guardar y el nombre está vacío, mostramos el error
      if ($errorNombre) {
        echo "<span class='error'>El campo nombre no puede estar vacío.</span>";
      }
      ?>
      <label for="telefono">Nº Teléfono:</label>
      <input type="number" min="0" name="telefono" placeholder="612345789" />
      <?php
      //Si le dieron al botón de guardar, el nombre no existe en la agenda y el teléfono está vacío
      if ($errorTelefono) {
        //Le pedimos al usuario introducirlo
        echo "<span class='error'>El nombre indicado no está en la agenda.<br/>Por favor, introduzca el nºTeléfono asociado.</span>";
        $telefonoBorrado = false;
      }
      ?>
      <div class="botones">
        <input type="reset" value="Limpiar formulario" name="limpiar" />
        <input type="submit" value="Guardar contacto" name="guardar" />
        <?php
        //Si se añadió/modificó correctamente el contacto, lo indicamos
        if ($contactoAgregado) {
          echo "<span class='exito'>Se ha agregado/modificado el contacto en la agenda.</span>";

          //Si le dieron al botón de guardar, y se borró un teléfono, lo indicamos
        } else if ($telefonoBorrado) {
          echo "<span class='warning'>Se ha borrado el teléfono de la agenda.</span>";
        }
        ?>
      </div>
    </form>

    <footer>
      <p>Desarrollado por: <strong>Christian Miguel Giménez Puerma</strong> - 2ºDAW</p>
    </footer>
  </main>
</body>

</html>