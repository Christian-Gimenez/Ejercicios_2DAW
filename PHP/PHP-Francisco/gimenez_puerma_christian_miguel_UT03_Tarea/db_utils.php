<?php
require "./db_conector.php";
//Debugg
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Función para mostrar las familias en los <option> del <select>
function mostrarFamilias($db, $optionSelec)
{
  //Preparamos la consulta obteneindo todos de la familia
  $query = $db->prepare("SELECT * FROM `familia`;");
  //Ejecutamos la consulta
  $exito = $query->execute();
  if ($exito) {
    //Transformamos cada fila del resultado en un objeto 
    while ($fila = $query->fetch(PDO::FETCH_OBJ)) {
      //Si el código del producto = al seleccionado
      if ($fila->cod === $optionSelec) {
        //Hacemos que se quede marcado ese producto en el <select>
        echo "<option value='$fila->cod' selected>$fila->nombre</option>";
      } else {
        //Si no, simplemente creamos el <select>
        echo "<option value='$fila->cod'>$fila->nombre</option>";
      }
    }
  } else {
    //Si no se pudo ejecutar la consulta, lanzamos la excepción
    throw new Exception("No se pudo ejecutar la consulta 'SELECT * FROM `familia`;'. Opción seleccionada: $optionSelec");
  }
}

//Función para mostrar todos los productos de una familia
function mostrarProductosFamilia($db, $seleccionado)
{
  //Preparamos la consulta, seleccionando todos los datos de los productos de la familia indicada
  //ejemplo: SELECT nombre_corto, PVP FROM producto WHERE familia = "NETBOK";
  $query = $db->prepare("SELECT * FROM producto WHERE familia = :idFamilia;");
  //Ejecutamos la consulta, pasando a PDO los argumentos evitando SQL Injection
  $exito = $query->execute([":idFamilia" => $seleccionado]);

  //Contamos el número de filas de la consulta para mostrar si hay o no productos
  $numFilas = $query->rowCount();

  //Si la consulta tuvo éxito sin errores
  if ($exito) {
    //Si la consulta devolvió productos
    if ($numFilas > 0) {
      //Transformamos cada fila de la consulta en un objeto
      while ($fila = $query->fetch(PDO::FETCH_OBJ)) {
?>
        <!-- Formulario para que el usuario pueda editar el producto deseado-->
        <form method='post' action='<?php echo htmlspecialchars("./editar.php"); ?>'>
          <label for="<?php echo "producto"; ?>">
            <?php echo "Producto: $fila->nombre_corto. Precio: $fila->PVP." ?>
          </label>
          <!-- Guardamos todo el objeto $producto para no necesitar hacer otra consulta a la BBDD a la hora de modificarlo-->
          <input type="hidden" name="<?php echo "producto"; ?>" value="<?php echo htmlspecialchars(json_encode($fila)); ?>" />
          <input type='submit' name='editar' value='Editar' />
        </form>
    <?php
      }
    } else {
      //Si la consulta no devolvió ningún producto, se lo informamos al usuario
      echo "<p>No hay productos dados de alta en esta famila</p>";
    }
  } else {
    //Lanzamos la excepción si hubiera un error en la consulta
    throw new Exception("No se pudo ejecutar la consulta: 'SELECT * FROM producto WHERE familia = $seleccionado'");
  }
}

//Función para mostrar los datos del producto modificables a través de un formulario
function editarProducto($producto)
{
  if (isset($producto)) {
    ?>
    <!-- Formulario rellenado con los datos ya existentes en la BBDD-->
    <form method='post' action='<?php echo htmlspecialchars("./actualizar.php"); ?>'>
      <label for='nombre_corto'>Nombre corto:</label>
      <input type='text' name='nombre_corto' id='nombre_corto' value='<?= trim($producto->nombre_corto); ?>' />
      <br /><br />
      <label for='nombre'>Nombre:</label>
      <br /><br />
      <textarea name='nombre'>
      <?php
      //Si el nombre no fuera null, lo mostramos
      if ($producto->nombre !== null) {
        echo trim($producto->nombre);
      }
      ?>
    </textarea>
      <br /><br />
      <label for='descripcion'>Descripción:</label>
      <br /><br />
      <textarea name='descripcion' id='descripcion'>
      <?php
      //Si la descripción del producto no fuera null, la mostramos
      if ($producto->descripcion !== null) {
        echo trim($producto->descripcion);
      }

      ?>
    </textarea>
      <br /><br />
      <label for='PVP'>PVP:</label>
      <input name='PVP' id='PVP' type="number" min="0" step="any" value='<?= $producto->PVP; ?>' />
      <br /><br />
      <!-- Enviamos el código del producto para poder posteriormente actualizarlo si el usuario así lo desea-->
      <input type="hidden" id="cod" name="cod" value="<?= htmlspecialchars($producto->cod); ?>" />
      <!-- Botón para guardar los cambios efectuados-->
      <input type="submit" id='actualizar' name='actualizar' value="Actualizar" />
      <!-- Botón para cancelar los cambios-->
      <input type="submit" id='cancelar' name='cancelar' value="Cancelar" />
    </form>
    <?php
  } else {
    //Si hubo un error al mostrar los datos del producto, lanzamos la excepción
    throw new Exception("Hubo un error al mostrar los datos del producto para poder editarlo. Producto: $producto");
  }
}

//Función para actualizar el producto que fue modificado en editar.php en la BBDD
function actualizarProducto($db, $cod, $nombre, $nombreCorto, $descripcion, $pvp)
{
  //Si el producto tiene código, lo modificamos, si no no, así evitamos consultas inválidas
  if ($cod !== "") {
    //Preparamos la consulta para evitar SQL Injection, modificando cada campo donde el id coincida con el seleccionado
    $query = $db->prepare("UPDATE producto SET nombre = :nombre, nombre_corto = :nombre_corto,
    descripcion = :descripcion, PVP = :pvp WHERE cod = :cod;");
    //Ejecutamos la consulta, pasándole a PDO los valores a las variables del array asociativo
    $exito = $query->execute([
      ":nombre" => $nombre,
      ":nombre_corto" => $nombreCorto,
      ":descripcion" => $descripcion,
      ":pvp" => $pvp,
      ":cod" => $cod
    ]);

    //Si la consulta se realizó con éxito, informamos al usuario
    if ($exito) {
    ?>
      <div id="encabezado">
        <h1>Ejercicio: Actualización correcta del producto</h1>
      </div>

      <div id="contenido">
        <h2>Se han actualizado los datos.</h2>
        <!-- Botón para regresar a listado.php-->
        <button><a href="<?= htmlspecialchars("./listado.php"); ?>">Continuar<a /></button>
      </div>
<?php
    } else {
      //Lanzamos la excepción si la consulta falló
      throw new Exception(
        //Si la consulta falló, mostramos los datos para revisar si hubo algún fallo en la ejecución
        "<p class='error'>Ups... Ha habido un error al ejecutar el UPDATE. Datos:</p>
      cod: " . $cod . "<br/>
      nombre: " . $nombre . "<br/>
      nombre_corto: " . $nombreCorto . "<br/>
      descripcion: " . $descripcion . "<br/>
      pvp: " . $pvp . "<br/>
      "
      );
    }
  } else {
    //Lanzamos la excepción si el código del producto llegó vacío tras el formulario
    throw new Exception("El código del producto no puede estar vacío.");
  }
}


?>