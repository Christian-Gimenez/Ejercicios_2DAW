<?php
//Función que busca los productos en la base de datos y los muestra en el <input type=select>
function mostrarProductos($db) {
  //Ejecutamos la consulta buscando todos los productos
  $productos = $db->query("SELECT cod, nombre_corto FROM producto");
  //Sacamos cada producto en formato array asociativo
  while($producto = $productos->fetch(PDO::FETCH_ASSOC)) {
    //Imprimimos el option con el codigo como value, mostrando el nombre del producto
    echo "<option value='" . $producto["cod"] . "'>" . $producto["nombre_corto"] . "</option>";
  }
}

//Función que busca y muestra el stock del producto seleccionado
function mostrarStockProducto($db, $idProducto) {
  // echo "Has seleccionado el producto $idProducto";
  //Preparamos la consulta para evitar SQL Injection
  $queryStock = $db->prepare("SELECT tienda.nombre, unidades FROM stock, tienda
                           WHERE stock.tienda = tienda.cod AND producto = :idProducto;");

  //Ejecutamos la consulta, indicandole qué valor le pasamos al argumento
  $queryStock->execute([":idProducto" => $idProducto]);
  //Guardamos el resultado en un array asociativo
  $resultadoStock = $queryStock->fetchAll(PDO::FETCH_ASSOC);


  $contador = 2;
  for($i = 0; $i < count($resultadoStock); $i++) {
    echo "<form method='post' action=''><div>";
    foreach($resultadoStock[$i] as $clave => $valor) {
      if($contador % 2 == 0) {
        echo "<input type='text' name='$clave' value='$valor' readonly/>";
      } else {
        echo "<input type='number' name='$clave' value='$valor'/>";
      }
      echo "<input type='hidden' name='idProducto' value='$idProducto'/>";
      $contador++;
    }
    echo "<input type='submit'>";
    echo "</form></div>";
  }
}

function modificarProducto($db) {
  if(isset($_POST["nombre"]) && isset($_POST["unidades"])) {
    $queryTienda = $db->prepare("SELECT tienda");
    $queryModProducto = $db->prepare("");
  }
}
?>