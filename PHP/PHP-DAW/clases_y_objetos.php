<?php
class Persona {
  /*PROPIEDADES*/
  private string $nombre;

  /*CONSTRUCTOR*/
  public function __construct(string $nom) {
    $this->nombre = $nom;
  }

  /*GETTER/SETTER*/
  public function getNombre(): string {
    return $this->nombre;
  }
 
  public function setNombre(string $nombre) {
    $this->nombre = $nombre;
  }

  /*RESTO DE MÉTODOS*/
  public function imprimir() {
    echo $this->nombre;
    echo "<br>";
  }
}

$bruno = new Persona("Bruno Díaz");
$bruno->imprimir();

class Punto {
  /*Promocion de las propiedades del constructor */
  public function __construct(
    protected float $x = 0.0,
    protected float $y = 0.0,
    protected float $z = 0.0
  ) {}
}

/* Llamar a metodos estaticos: Clase::metodo()*/
class Producto {
  const IVA = 0.23;
  private static $numProductos = 0;

  public static function nuevoProducto() {
    /*Cuando es una variable de la clase estatica, llamamos a self*/
    self::$numProductos++;
  }
}

Producto::nuevoProducto();
$impuesto = Producto::IVA;

/*parent::__constructor($codigo) es el super de PHP*/