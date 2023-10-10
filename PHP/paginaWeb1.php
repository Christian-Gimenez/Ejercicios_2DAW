<?php
    /*
    Crea un programa que pida el límite inferior y superior de un intervalo.
    Si limInf > limSup -> intercambiar
    A continuación, se van pidiendo números enteros positivos hasta que se introduzca un número negativo
    Al terminar se mostrará: cuántos están dentro del intervalo, cuántos están fuera y si se ha introducido
    algún número igual a alguno de los límites del intervalo.
    */

    if($_SERVER["REQUEST_METHOD"] === "POST") {
        //Recuperar los datos del formulario
        $limInf = $_POST["limInf"];
        $limSup = $_POST["limSup"];

        //Almacenar los datos en la sesión
        $_SESSION["limInf"] = $limInf;
        $_SESSION["limSup"] = $limSup;

        /* Redirigir o mostrar un mensaje de confirmación
        header("Location: otraPagina.php");
        exit();
         */
        if($limInf > $limSup) {
            echo "<script>console.log('Se intercambiaran los valores por que $limInf > $limSup');</script>";
            $aux = $limInf;
            $limInf = $limSup;
            $limSup = $aux;
        } else {
            echo "<script>console.log('limInf = $limInf, limSup = $limSup');";
        }
        //echo "DATOS INTRODUCIDOS CORRECTAMENTE: limInf = $limInf. limSup = $limSup";
        
    }
    
    ?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Web 1</title>
</head>

<body>
    <h1>Programa</h1>
    <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <input type="text" name="limInf" placeholder="Introduce límite inferior"/>
        <br/>
        <input type="text" name="limSup" placeholder="Ingroduce límite superior"/>
        <br/>
        <input type="submit" value="Enviar"/>
        <input type="reset" value="Limpiar datos"/>
    </form>
</body>

</html>