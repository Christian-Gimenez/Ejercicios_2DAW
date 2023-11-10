<?php

class ConexionDB {
  private string $conexion;
  private string $dsn;
  private string $usuario;
  private string $password;

  function __construct() {
    
  }


}





/*
class ConexionDB {
  public $conexionDB;

  function __construct() {
    $this->conexionDB = mysqli_connect('localhost', 'christian', '1234', 'videojuegos');
  }

  public function probarConexion(): bool {
    return $this->conexionDB;
  }
}*/





?>