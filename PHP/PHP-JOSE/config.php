<?php

return [
  "host" => "localhost",
  "dbname" => "user",
  "username" => "user",
  "password" => "1234",
  "port" => 3306
];


//Consultas con MYSQLI
// function consulta(string $query, array $config) {
//   $con = mysqli_connect($config["host"], $config["username"], $config["password"], $config["dbname"]);
//   if($con->connect_error) {
//     die("Connection failed: " . $con->connect_error);
//   }

//   return $con->query($query);
// }

//$res = consulta("SELECT * FROM `notas`", $config);

//mostrar($res->fetch_all(MYSQLI_ASSOC)); //O tambien fetch_assoc()
?>
