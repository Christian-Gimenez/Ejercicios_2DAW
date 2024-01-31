<?php
//Función para agenda_v1 y agenda_v2
//Crea el botón para cerrar la sesión y borrar los datos
function botonCerrarSesion()
{
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

//Función para agenda_v2
//Muestra la agenda del input hidden al usuario
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
    echo "<tr>";
    echo "<td>$nombre</td><td>$telefono</td>";
    echo "</tr>";
  }
  echo "</table>";
}

//Funcion para agenda_v2
//Valida los datos introducidos por el usuario, se le pasa agenda y las variables 'flag' por referencia
function validarDatosConCamposOcultos(&$agenda, &$telefonoBorrado, &$contactoAgregado)
{
  //Si se le dió al botón de Guardar
  if (isset($_POST["guardar"])) {
    //Si se introdujo nombre por el formulario
    if (isset($_POST["nombre"]) && !empty($_POST["nombre"])) {
      $nombre = trim(htmlspecialchars($_POST["nombre"]));
      //Si se introdujo nºtlfn en el formulario
      if (isset($_POST["telefono"]) && !empty($_POST["telefono"])) {
        $telefono = trim(htmlspecialchars($_POST["telefono"]));
        //Evitamos que entren cadenas vacías después de limpiar los datos que entren
        if ($nombre !== "") {
          /*Si el nombre no existe en la agenda,
        y el nºtlfn no está vacío, se añade a la agenda
        Pero si ya existe el nombre, simplemente se sustitye su nºtlfn*/
          $agenda[$nombre] = $telefono;
          $contactoAgregado = true;
        }
      } else {
        /*Si el nombre ya existe en la agenda,
        y el nºtlfn está vacío, se eliminará de la agenda ese contacto*/
        if (!array_search($nombre, $agenda)) {
          unset($agenda[$nombre]);
          $telefonoBorrado = true;
        }
      }
    }
  }
}

//Funcion para agenda_v2
//Comprueba si se introdujo el campo nombre en el formulario
function comprobarNombre()
{
  if (isset($_POST["guardar"]) && empty($_POST["nombre"])) {
    return true;
  }
  return false;
}

//Funcion para agenda_v2
//Comprueba si se introdujo el teléfono con o sin la intención de borrar un nombre
function comprobarTelefono(&$agenda)
{
  if (
    isset($_POST["guardar"]) && !empty($_POST["nombre"]) &&
    empty($_POST["telefono"]) && !array_key_exists($_POST["nombre"], $agenda)
  ) {
    return true;
  }
  return false;
}
  ?>