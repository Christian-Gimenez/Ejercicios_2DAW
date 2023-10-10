<!DOCTYPE html>
<html lang="es">

<head>
  <title>Practica PHP</title>
  <meta charset="utf-8" />
</head>

<body>
  <?php
  //Variables
  $edad = 27; //int
  $estatura = 1.91; //float
  $nombre = "Christian Gimenez"; //string
  $frase = "$nombre tiene $edad años y mide $estatura"; //Escribe el valor de las variables en el string
  $frase2 = '$nombre tiene $edad años y mide $estatura'; //NO pone el valor de las variables
  $profesor = true;
  echo $frase;
  echo "<br/>";
  echo "Tu nombre es " . $nombre . "<br/>";
  echo json_encode($profesor); //Para que no muestre 1/0 y muestre true/false


  ?>
</body>

</html>