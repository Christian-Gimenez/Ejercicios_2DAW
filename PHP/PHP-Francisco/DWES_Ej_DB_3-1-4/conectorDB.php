<?php
const DATABASE = "dwes";
const USER = "dwes";
const PASSWORD = "abc123.";
const HOST = "localhost";
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
$db = new PDO("mysql:host=" . HOST . ";dbname=" . DATABASE, USER, PASSWORD, $utf8);
//Descomentar para probar si hay conexión con la DB
//echo $db->getAttribute(PDO::ATTR_SERVER_VERSION);
?>