<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "
http://www.w3.org/TR/html4/loose.dtd">
<!-- Desarrollo Web en Entorno Servidor -->
<!-- Tema 2 : Características del Lenguaje PHP -->
<!-- Ejemplo: Tabla con los valores del array $_SERVER utilizando función each -->
<html>

<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Tabla</title>
  <style type="text/css">
    td,
    th {
      border: 1px solid grey;
      padding: 4px;
    }

    th {
      text-align: center;
    }

    table {
      border: 1px solid black;
    }
  </style>
</head>

<body>
  <table>
    <tbody>
      <tr>
        <th>Variable</th>
        <th>Valor</th>
      </tr>
      <?php
      //Resetea el puntero del array
      reset($_SERVER);
      //each() deprecada
      while ($valor = each($_SERVER)) {
        print "<tr>";
        print "<td>" . $valor[0] . "</td>";
        print "<td>" . $valor[1] . "</td>";
        print "</tr>";
      }
      ?>
    </tbody>
  </table>
</body>

</html>