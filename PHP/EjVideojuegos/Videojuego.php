<?php

class Videojuego {
  private string $nombre;
  private string $genero;
  private string $plataforma;
  private float $precio;

  function __construct($nombre, $genero, $plataforma, $precio) {
    $this->nombre = $nombre;
    $this->genero = $genero;
    $this->plataforma = $plataforma;
    $this->precio = $precio;
  }

  /*
  function __construct(string $nombre, string $genero, string $plataforma, float $precio) {
    $this->nombre = $nombre;
    $this->genero = $genero;
    $this->plataforma = $plataforma;
    $this->precio = $precio;
  }*/

  public function getNombre(): string {
    return $this->nombre;
  }

  public function getGenero(): string {
    return $this->genero;
  }

  public function getPlataforma(): string {
    return $this->plataforma;
  }

  public function getPrecio(): float {
    return $this->precio;
  }

  public function setNombre(string $nombre) : bool {
    if(strlen($nombre) <= 0) return false;
    $this->nombre = $nombre;
    return true;
  }

  public function setGenero(string $genero) : bool {
    if(strlen($genero) <= 0) return false;
    $this->genero = $genero;
    return true;
  }

  public function setPlataforma(string $plataforma) : bool {
    if(strlen($plataforma) <= 0) return false;
    $this->plataforma = $plataforma;
    return true;
  }

  public function setPrecio(float $precio) : bool {
    if(!is_float($precio)) return false;
    $this->precio = $precio;
    return true;
  }

  public function vincularAtributosConColumnas(PDOStatement $sentencia) {
    $sentencia->bindParam(1, $this->nombre);
    $sentencia->bindParam(2, $this->genero);
    $sentencia->bindParam(3, $this->plataforma);
    $sentencia->bindParam(4, $this->precio);
  }
  
}

?>