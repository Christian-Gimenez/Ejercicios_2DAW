<?php

/**
 * E4.php
 * Dado un array de 30 stories, crear una forma(GET) con html para seleccionar 
 * una sublista.
 * a) Usar dos inputs, "left" y "right" de tipo number correspondientes al 
 * número de story.
 * b) Validar los inputs e informar al usuario si no son correctos.
 */
$prueba = [1, 2, 3, 4, 5];
$biggerArray = array(
  "Story0", "Story1", "Story2", "Story3", "Story4", "Story5", "Story6",
  "Story7", "Story8", "Story9", "Story10", "Story11", "Story12", "Story13", "Story14", "Story15",
  "Story16", "Story17", "Story18", "Story19", "Story20", "Story21", "Story22", "Story23",
  "Story24", "Story25", "Story26", "Story27", "Story28", "Story29"
);


function validStoryNumber(int $storyNumber, array $stories): bool
{
  return $storyNumber >= 0 && $storyNumber <= count($stories);
}

function showStoriesFrom(array $stories, int $left, int $right): void
{
  if (validStoryNumber($left, $stories) && validStoryNumber($right, $stories)) {
    if ($left < 0 || $right < 0) {
      echo "ERROR: No puede haber numeros negativos en los input.";
    } else {
      if ($left <= $right) {
        $subStories = array_slice($stories, $left, ($right - $left));
        foreach ($subStories as $story) {
          echo "$story, ";
        }
      } else {
        echo "ERROR: El input 'left' no puede ser menor al 'right'";
      }
    }
  } else {
    echo "ERROR: El input indicado está fuera de rango [0-" . count($stories) . "]";
  }
}
function mainApp($biggerArray)
{
  if (isset($_POST["input"])) {
    if (isset($_POST["left"]) && isset($_POST["right"])) {
      $left = $_POST["left"] ?? -1;
      $right = $_POST["right"] ?? -1;
      showStoriesFrom($biggerArray, $left, $right);
    }
  }
}


// showStoriesFrom($prueba, 0, 2);

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christian Ejercicio 4 Examen PHP</title>
</head>

<body>
  <h1>Programa Stories</h1>
  <form action="" method="POST">
    <label for="left">Left:</label>
    <input type="number" name="left"><br>
    <br>

    <label for="right">Right:</label>
    <input type="number" name="right"><br>
    <br>
    <input type="submit" name="input" value="Buscar stories" />
  </form>
  <p>RESULTADO:</p>
  <div style="border: 1px solid black">
    <?php
    mainApp($biggerArray);
    ?>

  </div>
  <!-- Form - get -->
</body>

</html>