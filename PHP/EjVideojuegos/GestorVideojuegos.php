<?php
include("./ConexionDB.php");

class GestorVideojuegos {
  public $conexionDB;

  function __construct() {
    $this->conexionDB = new ConexionDB();
  }

  public function probarConexion() {
    if($this->conexionDB) {
      ?>
      <h1>Conexión correcta!</h1>
      <?php
    } else {
      ?>
      <h1>UPS. No hay conexión con DB...</h1>
      <?php
    }
  }


  public function altaVideojuego() {

  }

  public function pedirDatosVideojuego() {
    include "./FormularioAltaVideojuego.php";
  }

}

?>