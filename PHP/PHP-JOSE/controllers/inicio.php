<?php

$seccion="Inicio";

//mostrar($_SERVER);
/**Con el path /?id=1&nombre="Juan" Nos daría esta info:
 *["path"]=> string(1) "/"
  ["query"]=> string(22) "id=1&nombre=%22Juan%22"

  $uri = parse_url($_SERVER["REQUEST_URI"]);
  mostrar($uri);
 */


require "views/inicio.view.php";
