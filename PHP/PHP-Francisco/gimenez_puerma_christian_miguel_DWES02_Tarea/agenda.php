<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AgendAPP - Christian Gimenez 2DAW</title>
  <link rel="icon" href="./ico.png" type="image/png">
  <link rel="stylesheet" type="text/css" href="./estilos.css">
</head>

<body>
  <?php
  //Inicializamos una sesión para poder almacenar los datos sin persistencia en fichero/BBDD
  //si los datos ya existen, se recuperarán
  session_start();
  //Si no existe ya una agenda en la sesión, la creamos
  if (!isset($_SESSION["agenda"])) {
    //La agenda es un array asociativo que representa la agenda 
    //con clave "nombre" y valor "telefono" ["Christian" => "612345678"]
    $_SESSION["agenda"] = [];
  }
  ?>

  <main>
    <!--Botón para destruir la sesión actual y eliminar todos los datos almacenados -->
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
      <input type="submit" name="cerrar" title="Cierra la sesión actual y reinicializa los datos (Borra la agenda)" value="X"></input>
    </form>
    <?php
    if (isset($_POST["cerrar"])) {
      session_destroy();
      header("Location: " . $_SERVER["PHP_SELF"]);
      die();
    }
    ?>

    <?php
    function validarDatos() {
      
    }
    //Si se le dió al botón de Guardar
    if (isset($_POST["guardar"])) {
      //Si se introdujo nombre por el formulario
      if (isset($_POST["nombre"]) && !empty($_POST["nombre"])) {
        $nombre = $_POST["nombre"];
        //Si se introdujo nºtlfn en el formulario
        if (isset($_POST["telefono"]) && !empty($_POST["telefono"])) {
          $telefono = $_POST["telefono"];
          /*Si el nombre no existe en la agenda,
          y el nºtlfn no está vacío, se añade a la agenda*/
          if (!array_key_exists($nombre, $_SESSION["agenda"])) {
            $_SESSION["agenda"][$nombre] = $telefono;
          } else {
            /*Si el nombre ya existe en la agenda,
            y el nºtlfn no está vacío, se sustituye el nºtlfn anterior*/
            $_SESSION["agenda"][$nombre] = $telefono;
          }
        } else {
          if (!array_search($nombre, $_SESSION["agenda"])) {
            /*Si el nombre ya existe en la agenda,
          y el nºtlfn está vacío, se eliminará de la agenda ese contacto*/
            unset($_SESSION["agenda"][$nombre]);
            $eliminado = true;
          }
        }
      }
    }

    //Función para mostrar la agenda al usuario
    function mostrarAgenda($titulo = "Mi agenda personal")
    {
    ?>
      <table>
        <caption><?php echo $titulo; ?></caption>
        <tr>
          <th>Nombre</th>
          <th>Nº Teléfono</th>
        </tr>
      <?php
      foreach ($_SESSION["agenda"] as $nombre => $telefono) {
        if (!empty($telefono)) {
          echo "<tr>";
          echo "<td>$nombre</td><td>$telefono</td>";
          echo "</tr>";
        }
      }
      echo "</table>";
    }
      ?>
      <header>
        <img src="./ico.png" alt="AgendAPP Logo" />
        <h1>AgendAPP de Contactos</h1>
      </header>

      <?php //Si la agenda está vacía se lo indica al usuario
      if (!empty($_SESSION["agenda"])) {
        mostrarAgenda();
      } else {
      ?> <p class="vacia">Actualmente la agenda está vacía</p>
      <?php
      }
      ?>
      <hr />
      <!--Formulario para introducir nombre y teléfono-->
      <h2>Registre un nuevo contacto:</h2>
      <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
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
        </div>
      </form>

      <footer>
        <p>Desarrollado por: <strong>Christian Miguel Giménez Puerma</strong> - 2ºDAW</p>
      </footer>

  </main>
</body>

</html>