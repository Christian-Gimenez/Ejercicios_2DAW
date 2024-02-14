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

  for($i = 0; $i < count($resultadoStock); $i++) {
    
    foreach($resultadoStock[$i] as $valor) {
      echo " -> " . $valor;
    }
    echo "<br><br>";
  }
  // foreach($resultadoStock as $clave => $valor) {
  //   echo "$clave -> $valor";
  // }

  // //Almacenamos la tienda donde se encuentra el stock del producto
  // $tienda = $resultadoStock['tienda'];
  // //Preparamos la consulta evitando SQL Injection
  // $queryTienda = $db->prepare("SELECT * FROM tienda WHERE cod = :codTienda;");

  // $queryTienda->execute([":codTienda" => $tienda]);
  // $resultadoTienda = $queryTienda->fetch(PDO::FETCH_ASSOC);

  // echo "<p>El stock actual del producto seleccionado es: <b>" . $resultadoStock['unidades'] .  "</b> unidad/es en la tienda <b>nº"
  // . $resultadoStock["tienda"] . ": " . $resultadoTienda["nombre"] . "</b></p>";
}
?>