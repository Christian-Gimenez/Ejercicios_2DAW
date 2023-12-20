<?php

require "database.php";

$config = require("config.php");

$seccion="Crear nueva nota";
$autor = 1;

if($_SERVER["REQUEST_METHOD"] == "POST") {
  $errores = [];

  $titulo = trim($_POST["titulo"]);
  $contenido = trim($_POST["contenido"]);
  
  if(strlen($titulo) < 4) {
    $errores["titulo"] = "Al menos 4 caracteres";
  }

  if(strlen($contenido) < 4) {
    $errores["contenido"] = "Al menos 4 caracteres";
  }

  if(strlen($contenido) > 255) {
    $errores["contenido"] = "No más de 255 caracteres";
  }
  
  if(empty($errores)) {
    $notas = consultaSegura("INSERT INTO `notas`(titulo, contenido, id_autor) 
                            VALUES (:titulo, :contenido, :autor);",
                            ["titulo" => $titulo, "contenido" => $contenido, "autor" => $autor],
                            $config);
  }
}

// var_dump($_GET[""]);
// var_dump($_POST[""]);

//$notas = consulta("SELECT * FROM `notas` WHERE id_autor={$autor}", $config)->fetchAll();
//$notas = consulta("SELECT * FROM `notas`", $config)->fetchAll();

require "views/notas-crear.view.php";
