<?php

/**
 * a. Write a PHP loop (using for or while) that prints the first 10 even numbers 
 * starting from 2, each number separated by a comma. E.g., 2, 4, 6, ...
 */

function fillArray(int $number): array
{
  $numbersArray = [];
  for ($i = 2; $i <= $number; $i++) {
    array_push($numbersArray, $i);
  }
  return $numbersArray;
}

function evenNumbers(array $numbersArray): array
{
  $evenArray = array_filter($numbersArray, fn ($numb) => $numb % 2 == 0);
  return $evenArray;
}

function printEvenNumbers(int $number): void
{
  $numbersArray = fillArray($number);
  $evenArray = evenNumbers($numbersArray);
  echo "Even number" . (count($evenArray) > 1 ? "s" : "") . " between 2 and $number <br/>";
  echo "<ul>";
  foreach ($evenArray as $even) {
    echo "<li>$even</li>";
  }
  echo "</ul>";
}

if (isset($_POST["number"])) {

  $evenNum = intval($_POST["number"]) ?? 0;
  if ($evenNum > 2) {
    printEvenNumbers($evenNum);
  } else {
    echo "<h1>ERROR: Please tap a valid number greater than 2";
  }
}

?>

<form action="" method="POST">
  <fieldset>
    <legend><b>Put the number you want. We will calculate the even numbers between 2 and that number.</b></legend>
    <p>For example, here you have the even numbers between [2-10]: <?php
                                                                    echo "<ul>";
                                                                    for ($i = 2; $i <= 10; $i += 2) {
                                                                      echo "<li>$i</li>";
                                                                    }
                                                                    echo "</ul>";
                                                                    ?></p>
    <label for="number">Introduce the cuantity of even numbers you want:</label><br />
    <input type="number" name="number" /><br />
    <input type="submit" name="send" value="Send" />
  </fieldset>
</form>