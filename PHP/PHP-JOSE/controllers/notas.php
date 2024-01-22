<?php

require "database.php";
$config = require("config.php");
$seccion="Mis notas";
$autor = 1;

$notas = consulta("SELECT * FROM `notas` WHERE id_autor={$autor}", $config)->fetchAll();
//$notas = consulta("SELECT * FROM `notas`", $config)->fetchAll();
require "views/notas.view.php";
