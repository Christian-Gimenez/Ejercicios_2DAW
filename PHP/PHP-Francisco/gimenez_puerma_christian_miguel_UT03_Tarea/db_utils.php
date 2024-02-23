<?php
require "./db_conector.php";
//Debugg
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


function mostrarFamilias($db, $optionSelec)
{
  $query = $db->prepare("SELECT * FROM `familia`;");
  $query->execute();
  while ($fila = $query->fetch(PDO::FETCH_OBJ)) {
    if ($fila->cod === $optionSelec) {
      echo "<option value='$fila->cod' selected>$fila->nombre</option>";
    } else {
      echo "<option value='$fila->cod'>$fila->nombre</option>";
    }
  }
}

function mostrarProductosFamilia($db, $seleccionado)
{

  //SELECT nombre_corto, PVP FROM producto WHERE familia = "NETBOK";
  $query = $db->prepare("SELECT * FROM producto WHERE familia = :idFamilia;");
  $query->execute([":idFamilia" => $seleccionado]);
  $i = 1;
  while ($fila = $query->fetch(PDO::FETCH_OBJ)) {
?>
    <form method='post' action='<?php echo "./editar.php"; ?>'>
      <label for="<?php echo "producto";
                  $i++; ?>">
        <?php echo "Producto: $fila->nombre_corto. Precio: $fila->PVP." ?>
      </label>
      <input type="hidden" name="<?php echo "producto"; ?>" value="<?php echo htmlspecialchars(json_encode($fila)); ?>" />
      <input type='submit' name='editar' value='Editar' />
    </form>
  <?php
  }
}

function mostrarProducto($producto)
{
  ?>
  <form method='post' action='<?php echo "./actualizar.php"; ?>'>
    <label for='nombre_corto' >Nombre corto:</label>
    <input type='text' name='nombre_corto' id='nombre_corto' value='<?= $producto->nombre_corto; ?>' />
    <br/><br/>
    <label for='nombre'>Nombre:</label>
    <br/><br/>
    <textarea name='nombre'>
      <?php
      if ($producto->nombre !== "NULL") {
        echo $producto->nombre;
      }
      ?>
    </textarea>
    <br/><br/>
    <label for='descripcion'>Descripción:</label>
    <br/><br/>
    <textarea name='descripcion' id='descripcion'>
      <?php
      if ($producto->descripcion !== "NULL") {
        echo $producto->descripcion;
      }

      ?>
    </textarea>
    <br/><br/>
    <label for='PVP'>PVP:</label>
    <input name='PVP' id='PVP' type="number" min="0" step="any" value='<?= $producto->PVP; ?>'/>
    <br/><br/>
    <input type="hidden" id="cod" name="cod" value="<?= htmlspecialchars($producto->cod); ?>"/>
    <input type="submit" id='actualizar' name='actualizar' value="Actualizar"/>
    <input type="submit" id='cancelar' name='cancelar' value="Cancelar" />
  </form>
<?php

function actualizarProducto($db) {
  $cod = $_POST["cod"] ?? "";
  $nombre = $_POST["nombre"] ?? "";
  $nombreCorto = $_POST["nombre_corto"] ?? "";
  $descripcion = $_POST["descripcion"] ?? "";
  $pvp = $_POST["PVP"] ?? "";

  if($cod !== "") {
    $query = $db->prepare("UPDATE producto SET nombre = :nombre, nombre_corto = :nombre_corto,
    descripcion = :descripcion, PVP = :pvp WHERE cod = :cod;");
    $exito = $query->execute([
      ":nombre" => $nombre,
      ":nombre_corto" => $nombreCorto,
      ":descripcion" => $descripcion,
      ":pvp" => $pvp,
      ":cod" => $cod
    ]);
    if($exito) {
      echo "<p class='exito'>Se han actualizado los datos</p>";
      ?>
      <button><a href="<?= htmlspecialchars("./listado.php");?>">Continuar<a/></button>
      <?php
    } else {
      echo "<p class='error'>Ups... Ha habido un error al ejecutar el UPDATE. Datos:</p>";
      echo "cod: " . $cod . "<br/>";
      echo "nombre: " . $nombre . "<br/>";
      echo "nombre_corto: " . $nombreCorto . "<br/>";
      echo "descripcion: " . $descripcion . "<br/>";
      echo "pvp: " . $pvp . "<br/>";
    }
  }
}

}
?>