<?php
//Funcion para iniciar una sesión para poder almacenar los datos sin persistencia en fichero/BBDD
function iniciarSesion()
{
  //Si los datos ya existen, se recuperarán
  session_start();
  //Si no existe ya una agenda en la sesión, la creamos
  if (!isset($_SESSION["agenda"])) {
    //La agenda es un array asociativo que representa la agenda 
    //con clave "nombre" y valor "telefono" ["Christian" => "612345678"]
    $_SESSION["agenda"] = [];
  }
}

//Funcion que crea el botón para cerrar la sesión y borrar los datos
function botonCerrarSesion() {
  ?>
  <!--Botón para destruir la sesión actual y eliminar todos los datos almacenados -->
  <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
    <input type="submit" name="cerrar" title="Cierra la sesión actual y reinicializa los datos (Borra la agenda)" value="X"></input>
  </form>
  <?php
  if (isset($_POST["cerrar"])) {
    session_destroy();
    header("Location: " . $_SERVER["PHP_SELF"]);
    die();
  }
}

//Funcion para validar los datos introducidos por el usuario
function validarDatos()
{
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
        }
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

//Función para mostrar la agenda al usuario
function mostrarAgendaConCamposOcultos($agenda, $titulo = "Mi agenda personal")
{
?>
  <table>
    <caption><?php echo $titulo; ?></caption>
    <tr>
      <th>Nombre</th>
      <th>Nº Teléfono</th>
    </tr>
  <?php
  foreach ($agenda as $nombre => $telefono) {
    if (!empty($telefono)) {
      echo "<tr>";
      echo "<td>$nombre</td><td>$telefono</td>";
      echo "</tr>";
    }
  }
  echo "</table>";
}

function mostrarInputCamposOcultos($agenda) {
  foreach($agenda as $nombre => $telefono) {
    echo "<input type='hidden' name='agenda[]' value='$nombre,$telefono'/>";
  }
}

//Funcion para validar los datos introducidos por el usuario
function validarDatosConCamposOcultos($agenda)
{
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
        if (!array_key_exists($nombre, $agenda)) {
          $agenda[$nombre] = $telefono;
        } else {
          /*Si el nombre ya existe en la agenda,
            y el nºtlfn no está vacío, se sustituye el nºtlfn anterior*/
          $agenda[$nombre] = $telefono;
        }
      } else {
        if (!array_search($nombre, $agenda)) {
          /*Si el nombre ya existe en la agenda,
          y el nºtlfn está vacío, se eliminará de la agenda ese contacto*/
          unset($agenda[$nombre]);
        }
      }
    }
  }
}
  ?>