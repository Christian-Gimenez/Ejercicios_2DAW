<?php include_once "encabezado.php"?>
<h2>Nuevo Producto</h2>
<form>
    <label for="nombre">Nombre: </label>
    <input required id="nombre" name="nombre" type="text" placeholder="Nombre"/>
    <br/>

    <label for="descripcion">Descripción: </label>
    <br/>
    <textarea required id="descripcion" name="descripcion" cols="30" rows="5" placeholder="Descripción..."></textarea>
    <br/>
    <label for="precio">Precio: </label>
    <input required id="precio" name="precio" type="number" placeholder="0"/>€
    <br/>
    <button id="btnGuardar">Guardar</button>
    <input type="reset" value="Borar datos"/>
    <a href="productos.php"><button>Volver</button></a>
</form>
<script src="js/agregar_producto.js"></script>
<?php include_once "pie.php" ?>