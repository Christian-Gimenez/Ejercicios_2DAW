<?php
//mostrar($_GET["id"]);
require "database.php";
$config = require("config.php");
$seccion="El contenido de la nota";
// $autor = 1;

$nota = consulta("SELECT * FROM `notas` WHERE id={$_GET['id']}", $config)->fetch();

$seccion = $seccion . " " . $nota["titulo"];

require "views/nota.view.php";
