<?php
require "./db_conector.php";
//Debugg
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


function mostrarFamilias($db)
{
  $query = $db->prepare("SELECT * FROM `familia`;");
  $query->execute();
  while ($fila = $query->fetch(PDO::FETCH_OBJ)) {
    echo "<option value='$fila->cod'>$fila->nombre</option>";

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
    <form method='post' action='<?php echo htmlspecialchars("./editar.php"); ?>"'>
      <label for="<?php echo "producto$i";
                  $i++; ?>">
        <?php echo "Producto: $fila->nombre_corto. Precio: $fila->PVP." ?>
      </label>
      <input type="hidden" name="<?php echo "producto$i"; ?>" value="<?php echo htmlspecialchars(json_encode($fila)); ?>" />
      <input type='submit' name='editar' value='Editar' />
    </form>
<?php
  }
}
?>