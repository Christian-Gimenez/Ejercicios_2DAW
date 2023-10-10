<?php
include('con_db.php');

//PARA COMPROBAR LA CONEXION
/*if($conexion) {
  echo "<h1>Todo correcto</h1>";
}*/

//Si se ha pulsado el boton de registrarse
if(isset($_POST['registrar'])) {
  //Si la longitud es > 1
  if(strlen($_POST['nombre']) >= 1
  && strlen($_POST['apellidos']) >= 1
  && strlen($_POST['email']) >= 1) {
    $nombre = trim($_POST['nombre']);
    $apellidos = trim($_POST['apellidos']);
    $email = trim($_POST['email']);
    $fechareg = date("d/m/y");

    $consulta = "INSERT INTO usuarios(nombre, apellidos, email, fecha_reg) VALUES ('$nombre','$apellidos','$email', '$fechareg')";
    $resultado = mysqli_query($conexion, $consulta);

    if($resultado) {
      ?>
      <h3 class="ok">¡Te has registrado!</h3>
      <?php
    } else {
      ?>
      <h3 class="bad">¡Ups. Ha ocurrido un error al registrarte!</h3>
      <?php
    }
  } else {
    ?>
    <h3 class="bad">¡Por favor complete los campos!</h3>
    <?php
  }
}

?>