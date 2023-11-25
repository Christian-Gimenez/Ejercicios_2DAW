<?php
/**
 * Write a PHP function called averageGrade that receives an associative array 
 * representing a student's information (similar to the $student array from the 
 * previous question) as a parameter. Calculate and return the average grade of 
 * the student. Test this function using the $student array you created earlier.
 */


function mediaDeGrados(array $arrAsociativo): float {
  $arrGrados = $arrAsociativo["Grados"];
  $sumaGrados = array_reduce($arrGrados, fn($anterior, $actual) => $anterior + $actual);
  $media = $sumaGrados / count($arrGrados);
  return $media;
}