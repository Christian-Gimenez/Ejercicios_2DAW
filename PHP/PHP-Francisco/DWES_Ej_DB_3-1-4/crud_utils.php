<?php
function mostrarProductos($db) {
  $productos = $db->query("SELECT cod, nombre_corto FROM producto");
  while($producto = $productos->fetch(PDO::FETCH_ASSOC)) {
    echo "<option value='" . $producto["cod"] . "'>" . $producto["nombre_corto"] . "</option>";
  }
}

function mostrarStockProducto($db, $idProducto) {
  $queryStock = $db->prepare("SELECT * FROM stock WHERE producto = :idProducto;");
  $queryStock->execute([":idProducto" => $idProducto]);
  $resultadoStock = $queryStock->fetch(PDO::FETCH_ASSOC);

  
  $tienda = $resultadoStock['tienda'];
  $queryTienda = $db->prepare("SELECT * FROM tienda WHERE cod = :codTienda;");
  $queryTienda->execute([":codTienda" => $tienda]);
  $resultadoTienda = $queryTienda->fetch(PDO::FETCH_ASSOC);

  echo "El stock actual del producto seleccionado es:";
  echo "<p><b>" . $resultadoStock['unidades'] .  "</b> unidades en la tienda <b>nº"
  . $resultadoStock["tienda"] . ": " . $resultadoTienda["nombre"] . "</b></p>";
}
?>