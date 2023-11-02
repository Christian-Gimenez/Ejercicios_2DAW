<?php ?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <title>CRUD con PHP + MYSQL + JS con JSON AJAX</title>
</head>

<body>
  <header>
    <h1>
      CRUD con PHP + MYSQL + JS con JSON AJAX
    </h1>
    <hr />
  </header>
  <script type="text/javascript">
    //Añadimos el JS para escuchar lo que sucede en el DOM
    //!!!FALTA REVISAR SU USO 
    document.addEventListener("DOMContentLoaded", () => {
      const boton = document.querySelector(".navbar-burguer"); //NO IMPLMENETADO
      const menu = document.querySelector(".navbar-menu"); //NO IMPLEMENTADO
      boton.onclick = () => {
        menu.classList.toggle("is-active");
        boton.classList.toggle("is-active");
      };
    });
  </script>
  <section>
