<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validar tu DNI</title>
  <?php include("dni-app.php") ?>
  <style>
    h1 {
      text-align: center;
    }
    .mainApp {
      border: 2px solid black;
      width: 30%;
      margin: 0 auto;
    }

    .mainApp form,
    .mainApp legend {
      text-align: center;
    }

    legend {
      font-weight: bold;
      font-size: 24px;
    }

    input,
    label {
      font-size: 20px;
    }

    input[type="submit"] {
      cursor: pointer;
    }

    hr {
      width: 75%;
      border: 1px dashed black;
    }
  </style>
</head>

<body>
  <div class="mainApp">
    <br/>
    <legend>Generar DNI</legend>
    <form action="" method="POST">
      <label for="nombre">Introduce tu nombre:</label><br />
      <input type="text" name="nombre">
      <br />
      <label for="apellido1">Introduce tu 1º apellido:</label><br />
      <input type="text" name="apellido1">
      <br />
      <label for="apellido2">Introduce tu 2º apellido:</label><br />
      <input type="text" name="apellido2">
      <br />
      <label for="fechaNacimiento">Selecciona tu fecha de nacimiento:</label><br />
      <input type="date" name="fechaNacimiento"><br />
      <br />
      <input type="submit" value="Generar DNI" name="generaDNI" /><br />
      <br />
    </form>

    <hr />

    <legend>Validar DNI</legend>
    <form action="" method="POST">
      <label for="numDNI">Introduce tu DNI <br>(formato: 12345678A):</label><br />
      <input type="text" name="numDNI"><br />
      <br />
      <input type="submit" value="Validar DNI" name="validaDNI" /><br />
      <br />
    </form>

    <hr />

    <legend>Saber la letra de tu DNI</legend>
    <form action="" method="POST">
      <label for="numDNIsinLetra">Introduce tu número del DNI sin letra <br>(formato 8 digitos: 12345678):</label><br />
      <input type="text" name="numDNIsinLetra"><br />
      <br />
      <input type="submit" value="Ver letra DNI" name="saberLetraDNI" /><br />
      <br />
    </form>
  </div>
</body>

</html>