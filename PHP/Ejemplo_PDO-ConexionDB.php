<?php
try {
    // Crear una instancia de la clase PDO
    $conexion = new PDO($dsn, $usuario, $contrasena);

    // Preparar la sentencia SQL con marcadores de posición ?
    $sentencia = $conexion->prepare("INSERT INTO tu_tabla (campo1, campo2) VALUES (?, ?)");

    // Asignar valores a los marcadores de posición
    $valor1 = 'valor_insertado_1';
    $valor2 = 'valor_insertado_2';

    // Pasar los valores directamente en el método execute
    $sentencia->execute([$valor1, $valor2]);

    echo "Inserción exitosa";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>