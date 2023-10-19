<?php
//print_r($_POST);
//VOY POR EL VIDEO 6: https://www.youtube.com/watch?v=8TExOc5NOMI&ab_channel=Develoteca-OscarJ.UhP%C3%A9rez

$txtID = (isset($_POST["txtID"]))? $_POST["txtID"] : "";
$txtNombre = (isset($_POST["txtNombre"]))? $_POST["txtNombre"] : "";
$txtApellido1 = (isset($_POST["txtApellido1"]))? $_POST["txtApellido1"] : "";
$txtApellido2 = (isset($_POST["txtApellido2"]))? $_POST["txtApellido2"] : "";
$txtCorreo = (isset($_POST["txtCorreo"]))? $_POST["txtCorreo"] : "";
$txtFoto = (isset($_POST["txtFoto"]))? $_POST["txtFoto"] : "";
$accion = (isset($_POST["accion"]))? $_POST["accion"] : "";

switch($accion) {
  case "btnAgregar":
    echo $txtID;
    echo "Presionaste btnAgregar";
    break;
  case "btnModificar":
    echo $txtID;
    echo "Presionaste btnModificar";
    break;
  case "btnEliminar":
    echo $txtID;
    echo "Presionaste btnEliminar";
    break;
  case "btnCancelar":
    echo $txtID;
    echo "Presionaste btnCancelar";
    break;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD con PHP y MYSQL (simple)</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
  <main class="container">
    <!--Instruccion emet VSCode para generar la estructura 
      (label{lbl$:}+input[name="txt$" placeholder="" id="txt$" require]+br)*6
    -->
    <form action="" method="post" ectype="multipart/form-data">
      <label for="">ID:</label>
      <input type="text" name="txtID" value="<?php echo $txtID;?>" placeholder="" id="txt1" require="">
      <br>

      <label for="">Nombre(s):</label>
      <input type="text" name="txtNombre" value="<?php echo $txtNombre;?>" placeholder="" id="txt2" require="">
      <br>
      
      <label for="">1º Apellido:</label>
      <input type="text" name="txtApellido1" value="<?php echo $txtApellido1;?>" placeholder="" id="txt3" require="">
      <br>
      
      <label for="">2º Apellido:</label>
      <input type="text" name="txtApellido2" value="<?php echo $txtApellido2;?>" placeholder="" id="txt4" require="">
      <br>

      <label for="">Correo:</label>
      <input type="text" name="txtCorreo" value="<?php echo $txtCorreo;?>" placeholder="" id="txt5" require="">
      <br>

      <label for="">Foto:</label>
      <input type="text" name="txtFoto" value="<?php echo $txtFoto;?>" placeholder="" id="txt6" require="">
      <br>

      <!--
        (button[value="btn$" type="submit" name="accion"])*4

      -->
      <button value="btnAgregar" type="submit" name="accion">Agregar</button>
      <button value="btnModificar" type="submit" name="accion">Modificar</button>
      <button value="btnEliminar" type="submit" name="accion">Eliminar</button>
      <button value="btnCancelar" type="submit" name="accion">Cancelar</button>
    </form>
  </main>

</body>

</html>