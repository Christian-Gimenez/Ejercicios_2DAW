<?php

/**
 * Create a PHP function called calculateArea that takes two parameters: 
 * $length and $width representing the length and width of a rectangle respectively. 
 * Inside the function, calculate and return the area of the rectangle using 
 * the formula: area = length * width.
 */

function calculateArea(float $length, float $width): float
{
  $result = $length * $width;
  return $result;
}

if (isset($_POST["width"]) && isset($_POST["length"])) {



  $rectangleWidth = floatval($_POST["width"]) ?? 0;
  $rectangleLength = floatval($_POST["length"]) ?? 0;
  if (isset($rectangleLength) && isset($rectangleWidth)) {
    if (is_float($rectangleLength) && is_float($rectangleWidth)) {
      $area = calculateArea($rectangleLength, $rectangleWidth);
      echo "The area for the rectangle with length $rectangleLength and width $rectangleWidth is: $area";
    } else {
      echo "Error. Please tap a valid decimal number";
    }
  } else {
    echo "Error. You can not leave empty the fields";
  }
}

?>

<form action="" method="POST">
  <fieldset>
    <legend><strong>Calculate the area of a rectangle</strong></legend>
    <label for="width">Introduce rectangle width:</label><br>
    <input type="number" name="width" step="any"/><br>
    <hr />
    <label for="length">Introduce rectangle length:</label><br>
    <input type="number" name="length" step="any"/><br>
    <br>
    <input type="reset" value="Erase">
    <input type="submit" value="Send" />
  </fieldset>
</form>