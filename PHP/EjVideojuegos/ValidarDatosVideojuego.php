<?php
include "./Videojuego.php";
session_start();
$nombre = trim($_POST["nombre"]);
$genero = trim($_POST["genero"]);
$plataforma = trim($_POST["plataforma"]);
$precio = floatval(trim($_POST["precio"]));

if (
  strlen($nombre) > 0 && strlen($genero) > 0
  && strlen($plataforma) > 0 && is_float($precio)) {
  echo "<script>alert('Datos correctos!');</script>";
  $videojuego = new Videojuego($nombre, $genero, $plataforma, $precio);

  $dsn = "mysql:dbname=videojuegos;host=127.0.0.1";
  $usuario = "christian";
  $password = "Sauron_1995";

  try {
    $conexion = new PDO($dsn, $usuario, $password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $ex) {
    echo "<script>alert('Falló la conexión '" . $ex->getMessage() . "');</script>";
  }

  $sql = "INSERT INTO videojuego (nombre, genero, plataforma, precio) VALUES ( ?, ?, ?, ? );";
  $sentencia = $conexion->prepare($sql);

  //Llamamos a la funcion para vincular los valores
  $videojuego->vincularAtributosConColumnas($sentencia);

  //Ejecutamos la sentencia SQL
  $isOk = $sentencia->execute();

  if ($isOk) {
    echo "<script>alert('El videojuego se ha insertado en la DB correctamente!');</script>";
  } else {
    echo "<script>alert('Error: No se pudo insertar el videojuego en la DB...');";
  }
} else {
  echo "<script>alert('ERROR: Por favor, introduce datos válidos');</script>";
  include "./FormularioAltaVideojuego.php";
}



/*
Bind para asociar los parametros de la query a los atributos del objeto
$sentencia->bindParam(1, $videojuego->getNombre());
$sentencia->bindParam(2, $videojuego->getGenero());
$sentencia->bindParam(3, $videojuego->getPlataforma());
$sentencia->bindParam(4, $videojuego->getPrecio());
*/

//$_SESSION["videojuego"] = $videojuego;



/*
if(strlen($nombre) > 0 && strlen($genero) > 0
&& strlen($plataforma) > 0 && strlen($precio) > 0) {
$datosCorrectos = true;

$videojuego = new Videojuego($nombre, $genero, $plataforma, $precio);
$conexion = new ConexionDB();
if($conexion->probarConexion()) {
$consulta = "INSERT INTO videojuego (nombre, genero, plataforma, precio) VALUES ('$nombre', '$genero', '$plataforma', '$precio')";
$resultado = mysqli_query($conexion->conexionDB, $consulta);


if($resultado) {
echo "<script>
  alert('¡Videojuego registrado en la DB correctamente!');
  window.location.href = './index.php';
</script>";

} else {
echo "<script>
  alert('Ups. Hubo un error al escribir en la DB');
  window.location.href = './index.php';
</script>";
}

} else {
echo "<script>
  alert('Error: No hay conexión con la DB... Volviendo a la página principal');
  window.location.href = './index.php';
</script>";
}

} else {
FALTA ARREGLAR ESTO
$datosCorrectos = false;

}*/
?>

