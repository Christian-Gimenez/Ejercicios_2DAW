<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agenda</title>
  <link rel="stylesheet" type="text/css" href="./estilos.css">
  </style>
</head>

<body>
  <main>
    <button id="cerrar" title="Cierra la sesión actual y reinicializa los datos (Borra la agenda)">X</button>
    <script>
      document.getElementById("cerrar").addEventListener("click", function() {
        const borrar = confirm("Vas a cerrar la sesión actual y se  reinicializarán los datos (se borrará la agenda)\n¿Deseas continuar?");
        if (borrar) {
          <?php
          $_SESSION["agenda"] = [];
          ?>
        }
      });
    </script>
    <?php
    //Array que representa la agenda con clave "nombre" y valor "nºtlfn"
    session_start();
    if (!isset($_SESSION["agenda"])) {
      $_SESSION["agenda"] = [];
    }

    //Si se le dió al botón de Guardar
    if (isset($_POST["guardar"])) {
      //Si se introdujo nombre por el formulario
      if (isset($_POST["nombre"])) {
        $nombre = $_POST["nombre"];
        //Si se introdujo nºtlfn en el formulario
        if (isset($_POST["telefono"])) {
          $telefono = $_POST["telefono"];
          /*Si el nombre no existe en la agenda,
          y el nºtlfn no está vacío, se añade a la agenda*/
          if (!array_search($nombre, $_SESSION["agenda"])) {
            $_SESSION["agenda"][$nombre] = $telefono;
          } else {
            /*Si el nombre ya existe en la agenda,
            y el nºtlfn no está vacío, se sustituye el nºtlfn anterior*/
            $_SESSION["agenda"][$nombre] = $telefono;
          }
        } else {
          /*Si el nombre ya existe en la agenda,
          y el nºtlfn está vacío, se eliminará de la agenda ese contacto*/
          unset($_SESSION["agenda"][$nombre]);
        }
      }
    }



    //Función para mostrar un error al validar los datos del formulario
    function mostrarError($campo, $mensaje)
    {
      if (isset($_POST["guardar"]) && empty($_POST[$campo])) {
        echo "<span class='error'>$mensaje</span>";
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
        echo "<tr>";
        echo "<td>$nombre</td><td>$telefono</td>";
        echo "</tr>";
      }
      echo "<table>";
    }
    //Mostrar contenido de la agenda
      ?>
      <h1>AgendAPP de Contactos</h1>
      <?php if (!empty($_SESSION["agenda"])) {
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
        <?php //Si el nombre está vacío, se mostrará una advertencia.
        mostrarError("nombre", "El campo nombre no puede estar vacío."); ?>

        <label for="telefono">Nº Teléfono:</label>
        <input type="text" name="telefono" placeholder="612345789" />

        <div class="botones">
          <input type="reset" value="Limpiar" name="limpiar" />
          <input type="submit" value="Guardar Contacto" name="guardar" />
        </div>

      </form>
  </main>
</body>

</html>