<!DOCTYPE html>
<html lang="es">

<head>
  <title>Practica PHP</title>
  <meta charset="utf-8" />
</head>

<body>
  <?php
  //SWITCH
  $dia = 5;
  switch($dia) {
    case 1:
      echo "Lunes";
      break;
    case 2:
      echo "Martes";
      break;
    case 3:
      echo "Miércoles";
      break;
    case 4:
      echo "Jueves";
      break;
    case 5:
      echo "Viernes";
      break;
    case 6:
      echo "Sábado";
      break;
    case 7:
      echo "Domingo";
      break;
    default:
      echo "Día no válido";
      break;
  }

  $diasemana = "MIERCOLES";
  echo "<br/>";
  
  switch($diasemana) {
    case "LUNES":
      echo 1;
      break;
    case "JUEVES":
      echo 2;
      break;
    case "MIERCOLES":
      echo 3;
      break;
    default:
      echo 0;
      break;
  }
  ?>
</body>

</html>