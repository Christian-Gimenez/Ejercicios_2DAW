<?php
//Función que busca los productos en la base de datos y los muestra en el <input type=select>
function mostrarProductos($db)
{
  //Ejecutamos la consulta buscando todos los productos
  $productos = $db->query("SELECT cod, nombre_corto FROM producto");
  //Sacamos cada producto en formato array asociativo
  while ($producto = $productos->fetch(PDO::FETCH_ASSOC)) {
    //Imprimimos el option con el codigo como value, mostrando el nombre del producto
    echo "<option value='" . $producto["cod"] . "'>" . $producto["nombre_corto"] . "</option>";
  }
}

//Función que busca y muestra el stock del producto seleccionado
function mostrarStockProducto($db, $idProducto)
{
  // echo "Has seleccionado el producto $idProducto";
  //Preparamos la consulta para evitar SQL Injection
  $queryStock = $db->prepare("SELECT tienda.nombre, unidades, stock.tienda FROM stock, tienda
                           WHERE stock.tienda = tienda.cod AND producto = :idProducto;");

  //Ejecutamos la consulta, indicandole qué valor le pasamos al argumento
  $queryStock->execute([":idProducto" => $idProducto]);
  //Guardamos el resultado en un array asociativo
  $resultadoStock = $queryStock->fetchAll(PDO::FETCH_ASSOC);


  $contador = 0;
  for ($i = 0; $i < count($resultadoStock); $i++) {
    echo "<form method='post' action=''><div>";
    foreach ($resultadoStock[$i] as $clave => $valor) {
      $contador++;
      if ($contador === 1) {
        //Tienda
        echo "<input type='text' name='$clave' value='$valor' readonly/>";
      } else if ($contador === 2) {
        //Unidades
        echo "<input type='number' name='$clave' value='$valor'/>";
      } else if ($contador === 3) {
        $contador = 0;
        echo "<input type='hidden' name='idTienda' value='$valor'/>";
      }
    }
    echo "<input type='hidden' name='idProducto' value='$idProducto'/>";
    echo "<input type='submit' value='Modificar'>";
    echo "</form></div>";
  }
}

function modificarProducto($db)
{
    $idProducto = $_POST["idProducto"] ?? "";
    $idTienda = $_POST["idTienda"] ?? "";
    $unidades = $_POST["unidades"] ?? "";
    if ($idProducto !== "" && $idTienda !== "" && $unidades !== "") {
      $queryTienda = $db->prepare("UPDATE stock SET unidades = :unidades 
      WHERE producto = :idProducto AND tienda = :idTienda");
      $exito = $queryTienda->execute([
        ":unidades" => $unidades,
        ":idProducto" => $idProducto,
        ":idTienda" => $idTienda
      ]);
      if ($exito) {
        echo "<p>Stock modificado correctamente</p>";
      } else {
        echo "<p>Ups... Algo ha fallado</p>";
      }
    } else {
      echo "<p>Algún dato llegó vacío</p>";
    }

}
