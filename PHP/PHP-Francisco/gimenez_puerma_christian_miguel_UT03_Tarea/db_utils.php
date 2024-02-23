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
    if($fila->cod === $optionSelec) {
      echo "<option value='$fila->cod' selected>$fila->nombre</option>";
    } else {
      echo "<option value='$fila->cod'>$fila->nombre</option>";
    }
    

  }
}

function mostrarProductosFamilia($db, $seleccionado)
{

  //SELECT nombre_corto, PVP FROM producto WHERE familia = "NETBOK";
  $query = $db->prepare("SELECT nombre_corto, PVP FROM producto WHERE familia = :idFamilia");
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
?>